import { signal } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BookLockerFlowConfirmComponent } from '../../../app/book/locker-flow/locker-flow-confirm.component';

describe('BookLockerFlowConfirmComponent', () => {
    let spectator: Spectator<BookLockerFlowConfirmComponent>;
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
        title: 'My Locker',
        date: new Date('2026-04-08T09:00:00.000Z').valueOf(),
        duration: 60,
        all_day: false,
        booking_asset: {
            id: 'locker-1',
            name: 'E-043',
            features: ['power'],
            zones: 'lvl-1',
        },
        zones: ['bld-1', 'lvl-1'],
    });

    const createComponent = createComponentFactory({
        component: BookLockerFlowConfirmComponent,
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
                levelWithID: vi.fn(() => ({
                    id: 'lvl-1',
                    name: 'Level 1',
                    display_name: 'L1',
                })),
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
        options = signal<Record<string, any>>({ type: 'locker', group: false });
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
                    postForm: post_form,
                    postFormForGroup: post_form_group,
                    editFormForGroup: edit_group,
                    loadGroupSiblings: load_siblings,
                } as any),
            ],
        });
        dismiss = spectator.inject(MatBottomSheetRef).dismiss as any;
        dismiss.mockClear();
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should create', () => expect(spectator.component).toBeTruthy());

    it('should post a lone booking and dismiss with success', async () => {
        await spectator.component.postForm();
        expect(post_form).toHaveBeenCalled();
        expect(dismiss).toHaveBeenCalledWith(true);
    });

    it('should post a new group booking via postFormForGroup', async () => {
        options.set({ type: 'locker', group: true });
        await spectator.component.postForm();
        expect(post_form_group).toHaveBeenCalled();
        expect(post_form).not.toHaveBeenCalled();
    });

    it('should edit an existing group booking with its siblings', async () => {
        options.set({ type: 'locker', group: true });
        model.update((m) => ({ ...m, id: 'booking-1' }));
        const siblings = [{ id: 'booking-1' }, { id: 'booking-2' }];
        load_siblings.mockResolvedValueOnce(siblings as any);

        await spectator.component.postForm();

        expect(edit_group).toHaveBeenCalledWith(siblings);
        expect(dismiss).toHaveBeenCalledWith(true);
    });

    it('should notify the user with the raw error on failure', async () => {
        post_form.mockRejectedValueOnce('Locker unavailable');
        await spectator.component.postForm();
        expect(
            notify_open.mock.calls.some((c) => c[0] === 'Locker unavailable'),
        ).toBe(true);
        expect(dismiss).not.toHaveBeenCalledWith(true);
    });

    it('should dismiss without a value when cancelled', () => {
        spectator.component.dismiss();
        expect(dismiss).toHaveBeenCalledWith(undefined);
    });

    it('should expose the booking asset from the model', () => {
        expect(spectator.component.booking_asset?.id).toBe('locker-1');
    });

    it('should build the locker location from building and level', () => {
        expect(spectator.component.location).toContain('L1');
        expect(spectator.component.location).toContain('1 Main St');
    });

    it('should expose the configured time format', () => {
        expect(spectator.component.time_format).toBe('h:mm a');
    });
});
