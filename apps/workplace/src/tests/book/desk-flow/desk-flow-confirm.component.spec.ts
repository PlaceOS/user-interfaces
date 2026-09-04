import { signal } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    i18n,
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NewDeskFlowConfirmComponent } from '../../../app/book/desk-flow/desk-flow-confirm.component';

describe('NewDeskFlowConfirmComponent', () => {
    let spectator: Spectator<NewDeskFlowConfirmComponent>;
    let notify_open: any;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let options: ReturnType<typeof signal<Record<string, any>>>;
    let post_form: any;
    let post_form_group: any;
    let edit_group: any;
    let load_siblings: any;
    let dismiss: any;

    const base_model = () => ({
        id: '',
        title: 'My Desk',
        date: new Date('2026-04-08T09:00:00.000Z').valueOf(),
        date_end: new Date('2026-04-08T10:00:00.000Z').valueOf(),
        duration: 60,
        all_day: false,
        booking_asset: { id: 'desk-1' },
        assets: [],
        secondary_resource: '',
        zones: ['bld-1', 'lvl-1'],
    });

    const createComponent = createComponentFactory({
        component: NewDeskFlowConfirmComponent,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(() => undefined),
                time_format: 'h:mm a',
            } as any),
            MockProvider(OrganisationService, {
                buildings: [
                    {
                        id: 'bld-1',
                        name: 'HQ',
                        display_name: 'Headquarters',
                        address: '1 Main St',
                    },
                ],
                levels: [{ id: 'lvl-1', name: 'Level 1', display_name: 'L1' }],
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
            } as any),
            MockProvider(MatBottomSheetRef, { dismiss: vi.fn() }),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        model = signal(base_model());
        options = signal<Record<string, any>>({ type: 'desk', group: false });
        post_form = vi.fn(() => Promise.resolve());
        post_form_group = vi.fn(() => Promise.resolve());
        edit_group = vi.fn(() => Promise.resolve());
        load_siblings = vi.fn(() => Promise.resolve([]));
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    model,
                    options,
                    loading: signal(false),
                    listResources: vi.fn(() =>
                        Promise.resolve([
                            {
                                id: 'desk-1',
                                name: 'Desk One',
                                features: ['monitor'],
                                zone: { id: 'lvl-1', parent_id: 'bld-1' },
                            },
                        ]),
                    ),
                    postForm: post_form,
                    postFormForGroup: post_form_group,
                    editFormForGroup: edit_group,
                    loadGroupSiblings: load_siblings,
                } as any),
            ],
        });
        dismiss = spectator.inject(MatBottomSheetRef).dismiss as any;
        dismiss.mockClear();
        // The SettingsService mock lives on the component factory, so its
        // `get` spy is shared across every test. Reset it here so an impl set
        // by an earlier test (e.g. enabling `app.desks.can_book_lockers`)
        // cannot leak into a later one and flip `needs_locker`.
        vi.mocked(spectator.inject(SettingsService).get).mockReset();
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should create', () => expect(spectator.component).toBeTruthy());

    it('should post a lone booking and dismiss with success', async () => {
        await spectator.component.postForm();
        expect(post_form).toHaveBeenCalled();
        expect(post_form_group).not.toHaveBeenCalled();
        expect(dismiss).toHaveBeenCalledWith(true);
    });

    it('should post a new group booking via postFormForGroup', async () => {
        options.set({ type: 'desk', group: true });
        model.update((m) => ({ ...m, id: '' }));

        await spectator.component.postForm();

        expect(post_form_group).toHaveBeenCalled();
        expect(post_form).not.toHaveBeenCalled();
        expect(dismiss).toHaveBeenCalledWith(true);
    });

    it('should edit an existing group booking with its siblings', async () => {
        options.set({ type: 'desk', group: true });
        model.update((m) => ({ ...m, id: 'booking-1' }));
        const siblings = [{ id: 'booking-1' }, { id: 'booking-2' }];
        load_siblings.mockResolvedValueOnce(siblings as any);

        await spectator.component.postForm();

        expect(load_siblings).toHaveBeenCalled();
        expect(edit_group).toHaveBeenCalledWith(siblings);
        expect(dismiss).toHaveBeenCalledWith(true);
    });

    it('should edit with a single booking when no siblings are found', async () => {
        options.set({ type: 'desk', group: true });
        model.update((m) => ({ ...m, id: 'booking-1' }));
        load_siblings.mockResolvedValueOnce([]);

        await spectator.component.postForm();

        expect(edit_group).toHaveBeenCalledWith([
            expect.objectContaining({ id: 'booking-1' }),
        ]);
    });

    it('should notify the user with the underlying error and not dismiss', async () => {
        // The desk saves before its asset requests, so an asset failure must
        // not be reported as the desk being unavailable.
        post_form.mockRejectedValueOnce(
            new Error('Some assets are already booked for the selected time'),
        );

        await spectator.component.postForm();

        expect(notify_open).toHaveBeenCalledWith(
            'Some assets are already booked for the selected time',
            expect.anything(),
            expect.anything(),
        );
        expect(dismiss).not.toHaveBeenCalledWith(true);
    });

    it('should fall back to the desk availability message for an empty error', async () => {
        post_form.mockRejectedValueOnce({});

        await spectator.component.postForm();

        expect(notify_open).toHaveBeenCalledWith(
            i18n('BOOKINGS.DESK_AVAILABLE_ERROR'),
            expect.anything(),
            expect.anything(),
        );
    });

    it('should surface a string error verbatim', async () => {
        post_form.mockRejectedValueOnce('Desk taken');

        await spectator.component.postForm();

        expect(notify_open).toHaveBeenCalledWith(
            'Desk taken',
            expect.anything(),
            expect.anything(),
        );
    });

    it('should mark the booking as a group booking from options', () => {
        options.set({ type: 'desk', group: true });
        expect(spectator.component.is_group()).toBe(true);
        options.set({ type: 'desk', group: false });
        expect(spectator.component.is_group()).toBe(false);
    });

    it('should dismiss without a value when cancelled', () => {
        spectator.component.dismiss();
        expect(dismiss).toHaveBeenCalledWith(undefined);
    });

    it('should treat a duration over a day as multi-day', () => {
        expect(spectator.component.is_multiday).toBe(false);
        model.update((m) => ({ ...m, duration: 25 * 60 }));
        expect(spectator.component.is_multiday).toBe(true);
    });

    it('should compute end_time from date + duration', () => {
        const expected = new Date('2026-04-08T10:00:00.000Z').valueOf();
        expect(spectator.component.end_time).toBe(expected);
    });

    it('should extend end_time to end-of-day for all-day bookings', () => {
        model.update((m) => ({ ...m, all_day: true }));
        expect(spectator.component.end_time).toBeGreaterThan(
            new Date('2026-04-08T10:00:00.000Z').valueOf(),
        );
    });

    it('should flag when a locker is required', () => {
        const settings = spectator.inject(SettingsService);
        vi.mocked(settings.get).mockImplementation(
            (key: string) => key === 'app.desks.can_book_lockers',
        );
        expect(spectator.component.needs_locker).toBe(false);
        model.update((m) => ({ ...m, secondary_resource: 'locker' }));
        expect(spectator.component.needs_locker).toBe(true);
    });

    it('should not require a locker when locker booking is disabled', () => {
        model.update((m) => ({ ...m, secondary_resource: 'locker' }));
        expect(spectator.component.needs_locker).toBeFalsy();
    });

    it('should build the desk location from building and level', () => {
        spectator.component.booking_asset.set({
            id: 'desk-1',
            zone: { id: 'lvl-1', parent_id: 'bld-1' },
        } as any);
        expect(spectator.component.location).toContain('L1');
        expect(spectator.component.location).toContain('1 Main St');
    });

    it('should load the booking asset on init', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.booking_asset()?.id).toBe('desk-1');
        expect(spectator.component.booking_asset()?.name).toBe('Desk One');
    });

    it('should provide an all-day label for all-day bookings', () => {
        model.update((m) => ({ ...m, all_day: true }));
        expect(spectator.component.formattedTime()).toBeTruthy();
    });
});
