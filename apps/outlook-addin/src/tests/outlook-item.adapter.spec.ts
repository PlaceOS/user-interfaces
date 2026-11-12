import { OfficeItemAdapter } from '../app/calendar/outlook-item.adapter';

/** Callback result of an Office.js async call */
interface Result<T> {
    status: 'succeeded' | 'failed';
    value?: T;
    error?: Error;
}
type Callback<T> = (result: Result<T>) => void;

/** Office.js getter that succeeds with `value` */
const ok =
    <T>(value: T) =>
    (cb: Callback<T>) =>
        cb({ status: 'succeeded', value });
/** Office.js getter that fails with `message` */
const fail =
    <T>(message: string) =>
    (cb: Callback<T>) =>
        cb({ status: 'failed', error: new Error(message) });

const START = new Date(2026, 9, 1, 9);
const END = new Date(2026, 9, 1, 10);

/** Custom properties of an Outlook item */
function properties(values: Record<string, string> = {}) {
    return {
        values,
        get: (key: string) => values[key],
        set: vi.fn((key: string, value: string) => (values[key] = value)),
        remove: vi.fn((key: string) => delete values[key]),
        saveAsync: vi.fn(ok<void>(undefined)),
    };
}

/** Outlook appointment in the organizer form */
function appointment() {
    const props = properties();
    return {
        props,
        subject: { getAsync: ok('Client visit') },
        start: { getAsync: ok(START) },
        end: { getAsync: ok(END) },
        recurrence: { getAsync: ok<{ recurrenceType: string } | null>(null) },
        enhancedLocation: {
            getAsync: ok<
                {
                    emailAddress?: string;
                    locationIdentifier?: { type: string };
                }[]
            >([]),
        },
        isAllDayEvent: { getAsync: ok(false) } as
            | { getAsync: (cb: Callback<boolean>) => void }
            | undefined,
        getItemIdAsync: ok('item-1'),
        saveAsync: ok('item-1'),
        loadCustomPropertiesAsync: vi.fn(ok(props)),
        addHandlerAsync: vi.fn(),
    };
}

describe('OfficeItemAdapter', () => {
    let item: ReturnType<typeof appointment>;
    /** Handler that Outlook calls when a pinned pane moves to another item */
    let moveToNextItem: () => void;

    beforeEach(() => {
        item = appointment();
        vi.stubGlobal('Office', {
            AsyncResultStatus: { Succeeded: 'succeeded', Failed: 'failed' },
            MailboxEnums: { LocationType: { Room: 'room', Custom: 'custom' } },
            EventType: {
                ItemChanged: 'itemChanged',
                AppointmentTimeChanged: 'appointmentTimeChanged',
                RecurrenceChanged: 'recurrenceChanged',
                EnhancedLocationsChanged: 'enhancedLocationsChanged',
            },
            context: {
                mailbox: {
                    get item() {
                        return item;
                    },
                    addHandlerAsync: (_: string, handler: () => void) =>
                        (moveToNextItem = handler),
                },
            },
        });
    });

    afterEach(() => vi.unstubAllGlobals());

    it('reads the event and only the room locations', async () => {
        item.recurrence.getAsync = ok({ recurrenceType: 'weekly' });
        item.isAllDayEvent = { getAsync: ok(true) };
        item.enhancedLocation.getAsync = ok([
            {
                emailAddress: 'Room.A@place.tech',
                locationIdentifier: { type: 'room' },
            },
            {
                emailAddress: 'teams@place.tech',
                locationIdentifier: { type: 'custom' },
            },
            { locationIdentifier: { type: 'room' } },
        ]);

        await expect(new OfficeItemAdapter().read()).resolves.toEqual({
            subject: 'Client visit',
            start: START.valueOf(),
            end: END.valueOf(),
            all_day: true,
            is_recurring: true,
            room_emails: ['room.a@place.tech'],
        });
    });

    it('keeps All day unknown when the client cannot report it', async () => {
        item.isAllDayEvent = undefined;
        item.recurrence.getAsync = fail('Not supported');
        item.enhancedLocation.getAsync = fail('Not supported');

        await expect(new OfficeItemAdapter().read()).resolves.toMatchObject({
            all_day: null,
            is_recurring: false,
            room_emails: [],
        });
    });

    it('returns no item ID for an unsaved item and rejects a failed save', async () => {
        item.getItemIdAsync = fail('Item not saved');
        item.saveAsync = fail('Mailbox is read-only');
        const adapter = new OfficeItemAdapter();

        await expect(adapter.itemId()).resolves.toBe('');
        await expect(adapter.save()).rejects.toThrow('Mailbox is read-only');
    });

    it('removes a property that is set to an empty value', async () => {
        item.props.values['placeos_desk_booking_id'] = 'bkn-1';
        const adapter = new OfficeItemAdapter();

        await adapter.setProperty('placeos_desk_booking_id', '');

        expect(item.props.remove).toHaveBeenCalledWith(
            'placeos_desk_booking_id',
        );
        expect(item.props.set).not.toBeCalled();
        expect(item.props.saveAsync).toHaveBeenCalledOnce();
        await expect(
            adapter.getProperty('placeos_desk_booking_id'),
        ).resolves.toBe('');
    });

    it('reads the properties and watches the new item after an item change', async () => {
        const adapter = new OfficeItemAdapter();
        const onChange = vi.fn();
        adapter.onChange(onChange);
        adapter.onItemChange(() => null);
        await adapter.getProperty('placeos_desk_booking_id');
        await adapter.getProperty('placeos_desk_booking_id');
        expect(item.loadCustomPropertiesAsync).toHaveBeenCalledOnce();
        expect(item.addHandlerAsync).toHaveBeenCalledTimes(3);

        item = appointment();
        item.props.values['placeos_desk_booking_id'] = 'bkn-2';
        moveToNextItem();

        await expect(
            adapter.getProperty('placeos_desk_booking_id'),
        ).resolves.toBe('bkn-2');
        expect(item.addHandlerAsync.mock.calls).toEqual([
            ['appointmentTimeChanged', onChange, expect.any(Function)],
            ['recurrenceChanged', onChange, expect.any(Function)],
            ['enhancedLocationsChanged', onChange, expect.any(Function)],
        ]);
    });
});
