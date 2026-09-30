import { OutlookEvent } from './outlook-event';

/** Event details read from the Outlook item, without the saved item ID. */
export type OutlookItemDetails = Omit<OutlookEvent, 'item_id'>;

/**
 * Access to the Outlook appointment that the task pane is attached to.
 * `OfficeItemAdapter` uses Office.js. `MemoryItemAdapter` keeps the event in
 * memory for mock mode, browser development and tests.
 */
export interface OutlookItemAdapter {
    /** Read the current details of the item */
    read(): Promise<OutlookItemDetails>;
    /** Exchange item ID, or an empty string when the item is not saved */
    itemId(): Promise<string>;
    /** Save the item and return its Exchange item ID */
    save(): Promise<string>;
    /** Convert an Exchange item ID to the REST/Graph format */
    restId(item_id: string): string;
    addRoom(email: string): Promise<void>;
    removeRoom(email: string): Promise<void>;
    /** Read a PlaceOS value stored on the item */
    getProperty(key: string): Promise<string>;
    /** Store a PlaceOS value on the item. An empty value removes it. */
    setProperty(key: string, value: string): Promise<void>;
    /** Call the handler when Outlook reports a change to the item */
    onChange(handler: () => void): void;
}

/** Office.js API that is in preview and not in the published typings. */
interface AllDayPreview {
    isAllDayEvent?: {
        getAsync(callback: (result: Office.AsyncResult<boolean>) => void): void;
    };
}

/** Wrap an Office.js callback API in a promise. */
function officeCall<T>(
    fn: (callback: (result: Office.AsyncResult<T>) => void) => void,
): Promise<T> {
    return new Promise<T>((resolve, reject) =>
        fn((result) =>
            result.status === Office.AsyncResultStatus.Succeeded
                ? resolve(result.value)
                : reject(result.error),
        ),
    );
}

/** Adapter for an appointment open in the Outlook organizer form. */
export class OfficeItemAdapter implements OutlookItemAdapter {
    private _properties: Office.CustomProperties | null = null;

    private get _item() {
        return Office.context.mailbox.item as Office.AppointmentCompose &
            AllDayPreview;
    }

    public async read(): Promise<OutlookItemDetails> {
        const item = this._item;
        const [subject, start, end, recurrence, locations, all_day] =
            await Promise.all([
                officeCall<string>((cb) => item.subject.getAsync(cb)),
                officeCall<Date>((cb) => item.start.getAsync(cb)),
                officeCall<Date>((cb) => item.end.getAsync(cb)),
                item.recurrence
                    ? officeCall<Office.Recurrence | null>((cb) =>
                          item.recurrence.getAsync(cb),
                      ).catch(() => null)
                    : Promise.resolve(null),
                item.enhancedLocation
                    ? officeCall<Office.LocationDetails[]>((cb) =>
                          item.enhancedLocation.getAsync(cb),
                      ).catch(() => [])
                    : Promise.resolve([]),
                item.isAllDayEvent
                    ? officeCall<boolean>((cb) =>
                          item.isAllDayEvent.getAsync(cb),
                      ).catch(() => null)
                    : Promise.resolve(null),
            ]);
        return {
            subject: subject || '',
            start: start.valueOf(),
            end: end.valueOf(),
            all_day,
            is_recurring: !!recurrence?.recurrenceType,
            room_emails: locations
                .filter(
                    (_) =>
                        _.locationIdentifier?.type ===
                            Office.MailboxEnums.LocationType.Room &&
                        _.emailAddress,
                )
                .map((_) => _.emailAddress.toLowerCase()),
        };
    }

    public itemId() {
        return officeCall<string>((cb) => this._item.getItemIdAsync(cb)).catch(
            () => '',
        );
    }

    public save() {
        return officeCall<string>((cb) => this._item.saveAsync(cb));
    }

    public restId(item_id: string) {
        return Office.context.mailbox.convertToRestId(
            item_id,
            Office.MailboxEnums.RestVersion.v2_0,
        );
    }

    public addRoom(email: string) {
        return officeCall<void>((cb) =>
            this._item.enhancedLocation.addAsync(
                [{ id: email, type: Office.MailboxEnums.LocationType.Room }],
                cb,
            ),
        );
    }

    public removeRoom(email: string) {
        return officeCall<void>((cb) =>
            this._item.enhancedLocation.removeAsync(
                [{ id: email, type: Office.MailboxEnums.LocationType.Room }],
                cb,
            ),
        );
    }

    public async getProperty(key: string) {
        const properties = await this._loadProperties();
        return `${properties.get(key) || ''}`;
    }

    public async setProperty(key: string, value: string) {
        const properties = await this._loadProperties();
        value ? properties.set(key, value) : properties.remove(key);
        await officeCall<void>((cb) => properties.saveAsync(cb));
    }

    public onChange(handler: () => void) {
        const events = [
            Office.EventType.AppointmentTimeChanged,
            Office.EventType.RecurrenceChanged,
            Office.EventType.EnhancedLocationsChanged,
        ];
        for (const type of events) {
            this._item.addHandlerAsync(type, handler, () => null);
        }
        // Fired when a pinned task pane moves to a different item.
        Office.context.mailbox.addHandlerAsync?.(
            Office.EventType.ItemChanged,
            () => {
                this._properties = null;
                handler();
            },
            () => null,
        );
    }

    private async _loadProperties() {
        if (!this._properties) {
            this._properties = await officeCall<Office.CustomProperties>((cb) =>
                this._item.loadCustomPropertiesAsync(cb),
            );
        }
        return this._properties;
    }
}

/** Adapter that keeps a sample event in memory. */
export class MemoryItemAdapter implements OutlookItemAdapter {
    private _handlers: (() => void)[] = [];
    private _properties: Record<string, string> = {};

    constructor(
        public details: OutlookItemDetails = sampleDetails(),
        public item_id = '',
    ) {}

    public async read() {
        return { ...this.details, room_emails: [...this.details.room_emails] };
    }

    public async itemId() {
        return this.item_id;
    }

    public async save() {
        if (!this.item_id) this.item_id = `memory-${Date.now()}`;
        return this.item_id;
    }

    public restId(item_id: string) {
        return item_id;
    }

    public async addRoom(email: string) {
        const lower = email.toLowerCase();
        if (!this.details.room_emails.includes(lower)) {
            this.details.room_emails.push(lower);
        }
        this._emit();
    }

    public async removeRoom(email: string) {
        const lower = email.toLowerCase();
        this.details.room_emails = this.details.room_emails.filter(
            (_) => _ !== lower,
        );
        this._emit();
    }

    public async getProperty(key: string) {
        return this._properties[key] || '';
    }

    public async setProperty(key: string, value: string) {
        if (value) this._properties[key] = value;
        else delete this._properties[key];
    }

    public onChange(handler: () => void) {
        this._handlers.push(handler);
    }

    /** Change the in-memory event, as a user would in Outlook */
    public update(details: Partial<OutlookItemDetails>) {
        this.details = { ...this.details, ...details };
        this._emit();
    }

    private _emit() {
        this._handlers.forEach((handler) => handler());
    }
}

/** Sample event for the next whole hour, used outside Outlook. */
function sampleDetails(): OutlookItemDetails {
    const start = new Date();
    start.setHours(start.getHours() + 1, 0, 0, 0);
    return {
        subject: 'Quarterly review meeting',
        start: start.valueOf(),
        end: start.valueOf() + 30 * 60_000,
        all_day: false,
        is_recurring: false,
        room_emails: [],
    };
}

/** Whether the task pane runs inside an Outlook appointment. */
export function hasOfficeAppointment() {
    return (
        typeof Office !== 'undefined' &&
        !!Office.context?.mailbox?.item?.itemType &&
        Office.context.mailbox.item.itemType ===
            Office.MailboxEnums.ItemType.Appointment
    );
}
