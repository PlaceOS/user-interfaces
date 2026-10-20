import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormService,
    BookingFormValue,
    generateBookingForm,
    InviteVisitorFormComponent,
} from '@placeos/bookings';
import { SettingsService, settingSignal, User } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { VisitorFlowNewComponent } from '../../app/book/visitor-flow-new/visitor-flow.component';
import { VisitorFlowComponent } from '../../app/book/visitor-flow.component';

describe('VisitorFlowNewComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowNewComponent>;
    let form: BookingForm;
    let model: WritableSignal<BookingFormValue>;
    let save_user_setting: any;
    let clear_form: any;
    let dialog_open: any;
    let dialog_close: any;
    let new_form: any;
    let options: WritableSignal<any>;
    let post_form: any;
    let post_group: any;

    const createComponent = createRoutingFactory({
        component: VisitorFlowNewComponent,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    // Build a real signal-forms booking form so the component
                    // can read `form().valid()`/`form().dirty()` and `model()`.
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateBookingForm(undefined, injector),
                    );
                    form = refs.form;
                    model = refs.model;
                    model.update((m) => ({
                        ...m,
                        id: '',
                        title: 'Visit',
                        description: '',
                        asset_name: '',
                        asset_id: '',
                        company: '',
                        phone: '',
                        assets: [],
                    }));
                    options = signal({ type: 'visitor' });
                    return {
                        form,
                        model,
                        options,
                        view: () => 'details',
                        booking: null,
                        last_count: 0,
                        postForm: (...args: any[]) => post_form(...args),
                        postFormForVisitorGroup: (...args: any[]) =>
                            post_group(...args),
                        setOptions: vi.fn(),
                        setView: vi.fn(),
                        newForm: (...args: any[]) => new_form(...args),
                        clearForm: (...args: any[]) => clear_form(...args),
                        loadGroupSiblings: vi.fn(async () => []),
                    };
                },
            },
            {
                provide: SettingsService,
                useValue: {
                    get: vi.fn(() => []),
                    saveUserSetting: (...args: any[]) =>
                        save_user_setting(...args),
                },
            },
            {
                provide: ActivatedRoute,
                useValue: {
                    paramMap: of({
                        has: () => false,
                        get: () => null,
                    }),
                },
            } as any,
            {
                provide: MatDialog,
                useValue: {
                    open: (...args: any[]) => dialog_open(...args),
                },
            },
        ],
        mocks: [],
    });

    beforeEach(() => {
        settingSignal('visitors.reason_required').set(false);
        save_user_setting = vi.fn();
        clear_form = vi.fn();
        post_form = vi.fn(() => Promise.resolve());
        post_group = vi.fn(() => Promise.resolve());
        dialog_close = vi.fn();
        dialog_open = vi.fn(() => ({
            componentInstance: { event: of({ reason: 'done' }) },
            afterClosed: () => NEVER,
            close: dialog_close,
        }));
        new_form = vi.fn(() =>
            model.update((m) => ({
                ...m,
                id: '',
                booking_type: 'visitor',
                asset_id: '',
                asset_name: '',
                assets: [],
            })),
        );
        spectator = createComponent({ detectChanges: false });
    });

    it('should clear desk details when starting a visitor invite', () => {
        model.update((m) => ({
            ...m,
            booking_type: 'desk',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
        }));

        spectator.component.ngOnInit();

        expect(new_form).toHaveBeenCalledWith('visitor');
        expect(model().asset_id).toBe('');
        expect(model().asset_name).toBe('');
    });

    it('should preserve visitor details when editing a visitor invite', () => {
        model.update((m) => ({
            ...m,
            id: 'visitor-booking-1',
            booking_type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor One',
        }));

        spectator.component.ngOnInit();

        expect(new_form).not.toHaveBeenCalled();
        expect(model().asset_id).toBe('visitor@example.com');
        expect(model().asset_name).toBe('Visitor One');
    });

    it('should show visit details heading when creating a booking', () => {
        expect(spectator.component.visit_heading()).toBe(
            'BOOKINGS.VISITOR_TIME_HEADER',
        );
    });

    it('should show edit visitor details heading in the visit details section when editing a booking', () => {
        model.update((m) => ({ ...m, id: 'visitor-booking-3' }));

        expect(spectator.component.visit_heading()).toBe(
            'BOOKINGS.EDIT_VISITOR_DETAILS',
        );
    });

    it('should save visitor phone in recent visitors history', () => {
        model.update((m) => ({
            ...m,
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
            company: 'Acme',
            phone: '+61400111222',
        }));

        (spectator.component as any)._saveRecentVisitors(false);

        expect(save_user_setting).toHaveBeenCalledWith('visitor-invitees', [
            'visitor.one@example.com|Visitor One|Acme|0|+61400111222|internal',
        ]);
    });

    it('should save the external type in recent visitors history', () => {
        model.update((m) => ({
            ...m,
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
            visitor_internal_or_external: 'external',
        }));

        (spectator.component as any)._saveRecentVisitors(false);

        expect(save_user_setting).toHaveBeenCalledWith('visitor-invitees', [
            'visitor.one@example.com|Visitor One||0||external',
        ]);
    });

    it('should save the external type of each group member in recent visitors history', () => {
        model.update((m) => ({
            ...m,
            assets: [
                new User({
                    email: 'ext@example.com',
                    name: 'Ext',
                    extension_data: {
                        visitor_internal_or_external: 'external',
                    },
                }),
                new User({ email: 'int@example.com', name: 'Int' }),
            ],
        }));

        (spectator.component as any)._saveRecentVisitors(true);

        expect(save_user_setting).toHaveBeenCalledWith('visitor-invitees', [
            'ext@example.com|Ext||0||external',
            'int@example.com|Int||0||internal',
        ]);
    });

    describe('confirmBooking', () => {
        const visit_time = () => ({
            booking_type: 'visitor' as const,
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
        });

        it('should save an invite for a single visitor', async () => {
            model.update((m) => ({
                ...m,
                ...visit_time(),
                asset_id: 'visitor.one@example.com',
                asset_name: 'Visitor One',
            }));

            await spectator.component.confirmBooking();

            expect(post_form).toHaveBeenCalled();
            expect(post_group).not.toHaveBeenCalled();
            expect(model().attendees.map((_) => _.email)).toEqual([
                'visitor.one@example.com',
            ]);
        });

        it('should not save a multiple visitor invite that has no visitors', async () => {
            options.set({ type: 'visitor', group: true });
            model.update((m) => ({
                ...m,
                ...visit_time(),
                asset_id: 'multiple@place.tech',
                assets: [],
            }));

            await spectator.component.confirmBooking();

            expect(post_form).not.toHaveBeenCalled();
            expect(post_group).not.toHaveBeenCalled();
            expect(save_user_setting).not.toHaveBeenCalled();
        });

        it('should save a group invite for multiple visitors', async () => {
            options.set({ type: 'visitor', group: true });
            model.update((m) => ({
                ...m,
                ...visit_time(),
                asset_id: 'multiple@place.tech',
                assets: [
                    { email: 'visitor.one@example.com', name: 'Visitor One' },
                    { email: 'visitor.two@example.com', name: 'Visitor Two' },
                ],
            }));

            await spectator.component.confirmBooking();

            expect(post_group).toHaveBeenCalled();
            expect(post_form).not.toHaveBeenCalled();
        });

        it('should not require a reason when the setting is off', async () => {
            settingSignal('visitors.reason_required').set(false);
            model.update((m) => ({
                ...m,
                ...visit_time(),
                title: '',
                asset_id: 'visitor.one@example.com',
                asset_name: 'Visitor One',
            }));

            await spectator.component.confirmBooking();

            expect(post_form).toHaveBeenCalled();
        });

        it.each([false, true])(
            'should reject a blank reason when the setting is on with multiple=%s',
            async (multiple) => {
                settingSignal('visitors.reason_required').set(true);
                options.set({ type: 'visitor', group: multiple });
                model.update((m) => ({
                    ...m,
                    ...visit_time(),
                    title: '',
                    asset_id: multiple
                        ? 'multiple@place.tech'
                        : 'visitor.one@example.com',
                    asset_name: 'Visitor One',
                    assets: [
                        {
                            email: 'visitor.one@example.com',
                            name: 'Visitor One',
                        },
                    ],
                }));

                for (const title of ['', '   ']) {
                    model.update((m) => ({ ...m, title }));
                    await spectator.component.confirmBooking();
                    expect(post_form).not.toHaveBeenCalled();
                    expect(post_group).not.toHaveBeenCalled();
                    expect(save_user_setting).not.toHaveBeenCalled();
                }

                model.update((m) => ({ ...m, title: 'Supplier meeting' }));
                await spectator.component.confirmBooking();
                expect(
                    multiple ? post_group : post_form,
                ).toHaveBeenCalledTimes(1);
            },
        );
    });

    it('should allow navigation without prompting when the edit form has no unsaved changes', async () => {
        model.update((m) => ({ ...m, id: 'visitor-booking-3' }));

        await expect(spectator.component.canDeactivate()).resolves.toBe(true);

        expect(dialog_open).not.toHaveBeenCalled();
        expect(clear_form).not.toHaveBeenCalled();
    });

    it('should discard dirty edit state after confirming navigation', async () => {
        model.update((m) => ({ ...m, id: 'visitor-booking-3' }));
        form().markAsDirty();

        await expect(spectator.component.canDeactivate()).resolves.toBe(true);

        expect(dialog_open).toHaveBeenCalled();
        expect(dialog_close).toHaveBeenCalled();
        expect(clear_form).toHaveBeenCalled();
    });

    it('should keep dirty edit state when navigation is cancelled', async () => {
        dialog_open.mockReturnValue({
            componentInstance: { event: NEVER },
            afterClosed: () => of(null),
            close: vi.fn(),
        });
        model.update((m) => ({ ...m, id: 'visitor-booking-3' }));
        form().markAsDirty();

        await expect(spectator.component.canDeactivate()).resolves.toBe(false);

        expect(clear_form).not.toHaveBeenCalled();
    });
});

describe('VisitorFlowComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowComponent>;
    const createComponent = createRoutingFactory({
        component: VisitorFlowComponent,
        providers: [MockProvider(Router, { navigate: vi.fn() })],
        declarations: [mockComponent(InviteVisitorFormComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should render the invite visitor form', () =>
        expect(spectator.query('invite-visitor-form')).toExist());

    it('should navigate home when the form completes', () => {
        spectator.component.onDone();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(['/']);
    });

    it('should navigate home when the form emits done', () => {
        const form = spectator.query(InviteVisitorFormComponent);
        form!.done.emit();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(['/']);
    });
});
