import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    CalendarEvent,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MeetingFlowDetailsComponent } from 'apps/workplace/src/app/book/meeting-flow-new/meeting-flow-details.component';
import { addDays, endOfDay } from 'date-fns';
import {
    EventFormValue,
    generateEventForm,
} from 'libs/events/src/lib/event-form';
import { MockProvider } from 'ng-mocks';

describe('MeetingFlowDetailsComponent', () => {
    let spectator: SpectatorRouting<MeetingFlowDetailsComponent>;
    let model: WritableSignal<EventFormValue>;
    let event: CalendarEvent;
    const createComponent = createRoutingFactory({
        component: MeetingFlowDetailsComponent,
        shallow: true,
        providers: [
            MockProvider(
                SettingsService as any,
                {
                    get: vi.fn(() => false),
                } as any,
            ),
            MockProvider(
                OrganisationService as any,
                {
                    building: { timezone: '' },
                } as any,
            ),
            {
                provide: EventFormService,
                useFactory: () => {
                    // Build a real signal-forms event form, mirroring the
                    // production wiring of `EventFormService` +
                    // `generateEventForm`, so the component can read
                    // `form.date().disabled()` and `model()`.
                    const injector = TestBed.inject(Injector);
                    const { model: m, form } = TestBed.runInInjectionContext(
                        () => generateEventForm(event, undefined, injector),
                    );
                    model = m;
                    return {
                        form,
                        model,
                        filters: signal({ capacity: -1 }),
                        setFilters: vi.fn(),
                    };
                },
            },
        ],
    });

    beforeEach(() => {
        // Default: a fresh editable event.
        event = new CalendarEvent({
            id: '',
            title: 'Weekly sync',
            date: Date.now(),
            duration: 60,
        });
    });

    it('should disable the start time when editing an in-progress meeting', () => {
        // A saved (has id) event with a start time in the recent past is
        // `started`/`in_progress`, which the form schema locks the start time
        // for while keeping the duration editable.
        event = new CalendarEvent({
            id: 'event-1',
            title: 'Weekly sync',
            date: Date.now() - 5 * 60 * 1000,
            duration: 60,
        });
        spectator = createComponent();
        const original_date = spectator.component.form_value().date;
        const original_duration = spectator.component.form_value().duration;
        spectator.detectChanges();

        expect(spectator.component.start_time_disabled()).toBe(true);
        expect(spectator.component.form_value().date).toBe(original_date);
        expect(spectator.component.form_value().duration).toBe(
            original_duration,
        );
        expect(spectator.component.form.duration().disabled()).toBe(false);
    });

    it('should keep the start time enabled for editable meetings', () => {
        spectator = createComponent();
        expect(spectator.component.start_time_disabled()).toBe(false);
    });

    it('should filter rooms with the minimum and the maximum of the selected size', () => {
        spectator = createComponent();
        const { setFilters } = spectator.inject(EventFormService);

        spectator.component.setCapacity(1);
        expect(setFilters).toHaveBeenLastCalledWith({
            capacity: 1,
            capacity_max: 2,
        });

        spectator.component.setCapacity(3);
        expect(setFilters).toHaveBeenLastCalledWith({
            capacity: 3,
            capacity_max: 4,
        });

        spectator.component.setCapacity(9);
        expect(setFilters).toHaveBeenLastCalledWith({
            capacity: 9,
            capacity_max: undefined,
        });

        spectator.component.setCapacity(-1);
        expect(setFilters).toHaveBeenLastCalledWith({
            capacity: -1,
            capacity_max: undefined,
        });
    });

    it('should mark the title field as invalid when searching without a title', () => {
        event = new CalendarEvent({ id: '', title: '', date: Date.now() });
        spectator = createComponent();
        const navigate = vi.spyOn(spectator.router, 'navigate');
        expect(spectator.component.title_error.isErrorState(null, null)).toBe(
            false,
        );

        spectator.component.searchRooms();

        expect(spectator.component.title_error.isErrorState(null, null)).toBe(
            true,
        );
        expect(navigate).not.toHaveBeenCalled();
    });

    it('should limit the date to the allowed future days setting', () => {
        spectator = createComponent();
        settingSignal('events.allowed_future_days').set(30);

        expect(spectator.component.end_date()).toBe(
            endOfDay(addDays(Date.now(), 30)).valueOf(),
        );
    });
});
