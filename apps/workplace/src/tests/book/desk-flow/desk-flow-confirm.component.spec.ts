import { signal } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import {
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NewDeskFlowConfirmComponent } from '../../../app/book/desk-flow/desk-flow-confirm.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
    };
});

describe('NewDeskFlowConfirmComponent', () => {
    let spectator: Spectator<NewDeskFlowConfirmComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let options: ReturnType<typeof signal<Record<string, any>>>;
    let post_form: jest.Mock;
    let post_form_group: jest.Mock;
    let edit_group: jest.Mock;
    let load_siblings: jest.Mock;
    let dismiss: jest.Mock;

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
                get: jest.fn(() => undefined),
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
            MockProvider(MatBottomSheetRef, { dismiss: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (notifyError as jest.Mock).mockClear();
        model = signal(base_model());
        options = signal<Record<string, any>>({ type: 'desk', group: false });
        post_form = jest.fn(() => Promise.resolve());
        post_form_group = jest.fn(() => Promise.resolve());
        edit_group = jest.fn(() => Promise.resolve());
        load_siblings = jest.fn(() => Promise.resolve([]));
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    model,
                    options,
                    loading: signal(false),
                    listResources: jest.fn(() =>
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
        dismiss = spectator.inject(MatBottomSheetRef).dismiss as jest.Mock;
        dismiss.mockClear();
    });

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

    it('should notify the user on a submission error and not dismiss', async () => {
        post_form.mockRejectedValueOnce(new Error('boom'));

        await spectator.component.postForm();

        expect(notifyError).toHaveBeenCalled();
        expect(dismiss).not.toHaveBeenCalledWith(true);
    });

    it('should surface a string error verbatim', async () => {
        post_form.mockRejectedValueOnce('Desk taken');

        await spectator.component.postForm();

        expect(notifyError).toHaveBeenCalledWith('Desk taken');
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
        expect(spectator.component.needs_locker).toBe(false);
        model.update((m) => ({ ...m, secondary_resource: 'locker' }));
        expect(spectator.component.needs_locker).toBe(true);
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
