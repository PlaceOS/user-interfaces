import { Injector, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringOrderStateService } from '@placeos/catering';
import {
    OrganisationService,
    setCurrentUser,
    setNotifyOutlet,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';
import { MeetingFlowOptionsComponent } from '../../../app/book/meeting-flow-new/meeting-flow-options.component';

describe('MeetingFlowOptionsComponent', () => {
    let spectator: Spectator<MeetingFlowOptionsComponent>;
    let model: ReturnType<typeof signal<any>>;
    let available_menu: ReturnType<typeof signal<any[]>>;
    let charge_codes: ReturnType<typeof signal<string[]>>;
    let post_form: any;
    let navigate: any;
    let dialog_open: any;
    const snackbar = {
        open: vi.fn(() => ({
            dismiss: vi.fn(),
            onAction: () => ({ subscribe: vi.fn() }),
        })),
    };

    const createComponent = createComponentFactory({
        component: MeetingFlowOptionsComponent,
        detectChanges: false,
        providers: [
            {
                provide: EventFormService,
                useFactory: () => {
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateEventForm(undefined, undefined, injector),
                    );
                    refs.model.set({ ...refs.model(), ...model() });
                    model = refs.model as any;
                    return {
                        model,
                        form: refs.form,
                        postForm: (post_form = vi.fn(() => Promise.resolve())),
                    };
                },
            },
            {
                provide: CateringOrderStateService,
                useFactory: () => ({
                    available_menu,
                    charge_codes,
                }),
            },
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
                time_format: 'h:mm a',
            } as any),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn((ids: string[]) =>
                    ids?.includes('level-1')
                        ? { id: 'level-1', display_name: 'Level 1' }
                        : null,
                ),
                buildings: [
                    { id: 'bld-1', display_name: 'HQ' },
                ] as any,
                get building() {
                    return { timezone: 'Australia/Sydney' };
                },
            } as any),
            MockProvider(Router, { navigate: (navigate = vi.fn()) } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser({ email: 'me@example.com' } as any);
        setNotifyOutlet(snackbar as any, true);
        model = signal({
            title: 'Sync',
            host: 'host@example.com',
            date: Date.now(),
            duration: 60,
            all_day: false,
            resources: [{ id: 'space-1', name: 'Room 1' }],
            recurrence: {},
            attendees: [],
            catering: [],
        });
        available_menu = signal([]);
        charge_codes = signal([]);
        settingSignal('events.allow_daily_allday_recurrence', false).set(false);
        spectator = createComponent();
        // A component-imported dialog module provides a real MatDialog that
        // shadows a root mock, so spy on the actual injected instance.
        dialog_open = vi
            .spyOn(
                spectator.fixture.componentRef.injector.get(MatDialog),
                'open',
            )
            .mockReturnValue({ afterClosed: () => of(null) } as any);
    });

    it('should flag multiday meetings by duration', () => {
        expect(spectator.component.is_multiday).toBe(false);
        model.update((m) => ({ ...m, duration: 48 * 60 }));
        expect(spectator.component.is_multiday).toBe(true);
    });

    it('should reflect catering menu and charge code availability', () => {
        expect(spectator.component.has_catering()).toBe(false);
        expect(spectator.component.has_codes()).toBe(false);
        available_menu.set([{ id: 'item-1' }] as any);
        charge_codes.set(['CODE-1']);
        expect(spectator.component.has_catering()).toBe(true);
        expect(spectator.component.has_codes()).toBe(true);
    });

    it('should filter charge codes by the search term', () => {
        charge_codes.set(['ALPHA', 'BETA', 'ALPINE']);
        spectator.component.code_filter.set('alp');
        expect(spectator.component.filtered_codes()).toEqual([
            'ALPHA',
            'ALPINE',
        ]);
    });

    it('should build a space location from level and building', () => {
        const location = spectator.component.getSpaceLocation({
            level: 'level-1',
            zones: ['bld-1'],
        });
        expect(location).toBe('Level 1, HQ');
    });

    it('should return an empty location for an unknown space', () => {
        expect(spectator.component.getSpaceLocation(null)).toBe('');
    });

    it('should default the host to the current user before posting', async () => {
        model.update((m) => ({ ...m, host: '' }));
        await spectator.component.confirmBooking();
        expect(model().host).toBe('me@example.com');
        expect(post_form).toHaveBeenCalled();
    });

    it('should block a daily all-day recurrence when not permitted', async () => {
        settingSignal('events.allow_daily_allday_recurrence', false).set(false);
        model.update((m) => ({
            ...m,
            all_day: true,
            recurrence: { pattern: 'daily' },
        }));
        await spectator.component.confirmBooking();
        expect(snackbar.open).toHaveBeenCalled();
        expect(post_form).not.toHaveBeenCalled();
    });

    it('should confirm before booking a meeting without a room', async () => {
        dialog_open.mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: signal(''),
            },
            afterClosed: () => of(null),
            close: vi.fn(),
        });
        model.update((m) => ({ ...m, resources: [] }));
        await spectator.component.confirmBooking();
        expect(dialog_open).toHaveBeenCalled();
        expect(post_form).toHaveBeenCalled();
    });

    it('should abort a room-less booking if the confirmation is dismissed', async () => {
        dialog_open.mockReturnValue({
            componentInstance: {
                event: NEVER,
                loading: signal(''),
            },
            afterClosed: () => of({ reason: 'cancel' }),
            close: vi.fn(),
        });
        model.update((m) => ({ ...m, resources: [] }));
        await spectator.component.confirmBooking();
        expect(post_form).not.toHaveBeenCalled();
    });

    it('should navigate to success and notify on a successful booking', async () => {
        await spectator.component.confirmBooking();
        expect(post_form).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(['/book', 'meeting', 'success']);
        expect(snackbar.open).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should surface an error and reset loading when posting fails', async () => {
        post_form.mockRejectedValue('boom');
        await expect(spectator.component.confirmBooking()).rejects.toBeDefined();
        expect(snackbar.open).toHaveBeenCalledWith(
            'boom',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(navigate).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should apply the chosen time and attendees from the availability dialog', () => {
        const new_date = Date.now() + 3600_000;
        dialog_open.mockReturnValue({
            afterClosed: () => of(true),
            componentInstance: {
                date: () => new_date,
                users: () => [{ email: 'a@example.com' }],
                duration: () => 90,
            },
        });
        spectator.component.findAvailableTime();
        expect(dialog_open).toHaveBeenCalled();
        expect(model().date).toBe(new_date);
        expect(model().duration).toBe(90);
        expect(model().attendees).toEqual([{ email: 'a@example.com' }]);
    });

    it('should leave the model untouched when the availability dialog is cancelled', () => {
        const original = model();
        dialog_open.mockReturnValue({
            afterClosed: () => of(null),
            componentInstance: {
                date: () => 0,
                users: () => [],
                duration: () => 0,
            },
        });
        spectator.component.findAvailableTime();
        expect(model()).toBe(original);
    });
});
