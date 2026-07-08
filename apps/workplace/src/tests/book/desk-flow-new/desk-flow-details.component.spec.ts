import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormValue,
    BookingFormService,
    generateBookingForm,
} from '@placeos/bookings';
import {
    currentUser,
    isEmptyUser,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { addDays, endOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { DeskFlowDetailsComponent } from '../../../app/book/desk-flow-new/desk-flow-details.component';

describe('DeskFlowDetailsComponent', () => {
    let spectator: Spectator<DeskFlowDetailsComponent>;
    let form: BookingForm;
    let model: WritableSignal<BookingFormValue>;
    let options: WritableSignal<any>;
    let set_options: any;
    let dialog_open: any;
    let after_closed_value: any;
    let dialog_instance: {
        date: any;
        duration: any;
        users: any;
    };

    const createComponent = createComponentFactory({
        component: DeskFlowDetailsComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateBookingForm(undefined, injector),
                    );
                    form = refs.form;
                    model = refs.model;
                    model.update((m) => ({
                        ...m,
                        id: '',
                        date: Date.now(),
                        duration: 60,
                        user: null,
                        attendees: [],
                    }));
                    options = signal<any>({ type: 'desk' });
                    set_options = vi.fn((update: any) =>
                        options.update((o) => ({ ...o, ...update })),
                    );
                    return {
                        form,
                        model,
                        options,
                        setOptions: set_options,
                    };
                },
            },
            MockProvider(OrganisationService, {
                building: { id: 'bld-1', timezone: 'Australia/Sydney' },
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
            MockProvider(MatDialog, {} as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        after_closed_value = null;
        dialog_instance = {
            date: vi.fn(() => 5000),
            duration: vi.fn(() => 45),
            users: vi.fn(() => [{ email: 'user@a.com' }]),
        };
        const dialog_ref = {
            componentInstance: dialog_instance,
            afterClosed: vi.fn(() => of(after_closed_value)),
        };
        dialog_open = vi.fn(() => dialog_ref);
        spectator = createComponent({
            providers: [
                { provide: MatDialog, useValue: { open: dialog_open } },
            ],
        });
    });

    it('should reset to a personal booking when selecting the single form', () => {
        model.update((m) => ({ ...m, user: null, attendees: ['a'] as any }));

        spectator.component.setActiveForm('single');

        expect(spectator.component.active_form()).toBe('single');
        expect(set_options).toHaveBeenCalledWith({ group: false });
        expect(model().user).toEqual(currentUser());
        expect(model().attendees).toEqual([]);
    });

    it('should keep the current user as host but preserve attendees for group bookings', () => {
        model.update((m) => ({ ...m, user: null, attendees: ['a'] as any }));

        spectator.component.setActiveForm('group');

        expect(spectator.component.active_form()).toBe('group');
        expect(set_options).toHaveBeenCalledWith({ group: true });
        expect(model().user).toEqual(currentUser());
        expect(model().attendees).toEqual(['a']);
    });

    it('should clear the user and attendees when booking for someone else', () => {
        model.update((m) => ({
            ...m,
            user: currentUser(),
            attendees: ['a'] as any,
        }));

        spectator.component.setActiveForm('other');

        expect(spectator.component.active_form()).toBe('other');
        expect(set_options).toHaveBeenCalledWith({ group: false });
        // The signal form normalises a cleared user back to the empty-user
        // placeholder, so assert the host is no longer a real user.
        expect(isEmptyUser(model().user)).toBe(true);
        expect(model().attendees).toEqual([]);
    });

    it('should switch to the group form when the options indicate a group booking', () => {
        expect(spectator.component.active_form()).toBe('single');

        options.set({ type: 'desk', group: true });
        TestBed.flushEffects();

        expect(spectator.component.active_form()).toBe('group');
    });

    it('should merge recurrence changes into the booking model', () => {
        spectator.component.onRecurrenceChange({
            recurrence: 'daily',
            end: 10,
        } as any);

        expect((model() as any).recurrence).toBe('daily');
        expect((model() as any).end).toBe(10);
    });

    it('should update the model date from the recurrence first instance', () => {
        spectator.component.onFirstInstanceChange(98765);

        expect(model().date).toBe(98765);
    });

    it('should forward setOptions to the booking form service', () => {
        spectator.component.setOptions({ members: ['x'] });

        expect(set_options).toHaveBeenCalledWith({ members: ['x'] });
    });

    it('should limit the selectable end date to the configured available period', () => {
        spectator.component.available_days.set(14);

        expect(spectator.component.end_date()).toBe(
            endOfDay(addDays(Date.now(), 14)).valueOf(),
        );
    });

    it('should open the availability modal seeded with the group members and host', () => {
        options.set({ type: 'desk', members: [{ email: 'member@a.com' }] });
        model.update((m) => ({ ...m, date: 111, duration: 30 }));

        spectator.component.findAvailableTime();

        expect(dialog_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                data: expect.objectContaining({
                    users: [{ email: 'member@a.com' }],
                    host: currentUser(),
                    date: 111,
                    duration: 30,
                }),
            }),
        );
    });

    it('should apply the chosen time and members when the availability modal returns a result', () => {
        after_closed_value = true;

        spectator.component.findAvailableTime();

        expect(model().date).toBe(5000);
        expect(model().duration).toBe(45);
        expect(set_options).toHaveBeenCalledWith({
            members: [{ email: 'user@a.com' }],
        });
    });

    it('should leave the booking untouched when the availability modal is dismissed', () => {
        after_closed_value = null;
        model.update((m) => ({ ...m, date: 111, duration: 30 }));

        spectator.component.findAvailableTime();

        expect(model().date).toBe(111);
        expect(model().duration).toBe(30);
    });

    it('should use the building timezone only when the building-timezone setting is enabled', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(
            (key: string) => key === 'app.desks.use_building_timezone',
        );

        expect(spectator.component.timezone).toBe('Australia/Sydney');

        (settings.get as any).mockReturnValue(false);
        expect(spectator.component.timezone).toBe('');
    });
});
