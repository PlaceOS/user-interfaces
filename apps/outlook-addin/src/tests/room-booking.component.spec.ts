import { Location } from '@angular/common';
import { Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { CalendarEvent, SettingsService } from '@placeos/common';
import {
    eventFormValue,
    EventFormService,
    generateEventForm,
} from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { RoomBookingComponent } from '../app/rooms/room-booking.component';
import { UpcomingBookingsComponent } from '../app/rooms/upcoming-bookings.component';

describe('RoomBookingComponent', () => {
    let spectator: SpectatorRouting<RoomBookingComponent>;
    // A real signal-forms ref backs the mocked service so the component
    // captures stable `model`/`form` references. Built in `beforeEach` so the
    // generator runs inside an Angular injection context.
    let form_ref: ReturnType<typeof generateEventForm>;

    // Signal forms only create child field nodes for properties present in the
    // model, so seed every bound field (title/date/duration/attendees).
    const baseEvent = () =>
        new CalendarEvent({
            title: '',
            date: Date.now(),
            duration: 30,
        } as any);

    const createComponent = createRoutingFactory({
        component: RoomBookingComponent,
        imports: [FormsModule, MatFormFieldModule, NativeDateModule],
        providers: [
            {
                provide: EventFormService,
                // Built inside an injection context so `form()` can `inject()`.
                useFactory: (injector: Injector) => {
                    form_ref = generateEventForm(
                        baseEvent(),
                        undefined,
                        injector,
                    );
                    return {
                        setView: jest.fn(() => {}),
                        newForm: jest.fn(() => {}),
                        clearForm: jest.fn(),
                        storeForm: jest.fn(() => {}),
                        loadForm: jest.fn(),
                        postForm: jest.fn(),
                        view: '',
                        model: form_ref.model,
                        form: form_ref.form,
                    } as any;
                },
                deps: [Injector],
            },
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        stubsEnabled: false,
        routes: [
            {
                path: '',
                component: RoomBookingComponent,
            },
            {
                path: 'schedule/view',
                component: UpcomingBookingsComponent,
            },
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        const event_service: any = spectator.inject(EventFormService);
        event_service.setView.mockImplementation((_) => {
            event_service.view = _;
            spectator.detectChanges();
        });
        event_service.newForm.mockImplementation(() => {
            form_ref.model.set(eventFormValue(baseEvent()));
            form_ref.form().reset();
        });
        event_service.storeForm.mockImplementation(() => {
            const value = form_ref.model();
            if (
                value.title === undefined ||
                value.date === undefined ||
                value.duration === undefined
            )
                return null;
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should create a new form on component init', () => {
        const event_service: any = spectator.inject(EventFormService);
        const spy = jest.spyOn(spectator.component, 'ngOnInit');
        const new_form_spy = jest.spyOn(event_service, 'newForm');
        spectator.component.ngOnInit();
        expect(spy).toHaveBeenCalled();
        expect(new_form_spy).toHaveBeenCalled();
        expect(event_service.form).toExist();
    });

    it('should not navigate away if the booking is in the past', async () => {
        const event_service: any = spectator.inject(EventFormService);
        await event_service.newForm();

        form_ref.model.update((m) => ({
            ...m,
            host: 'host@test.com',
            title: 'test',
            date: Date.now() - 60 * 60 * 1000,
            duration: 30,
        }));

        spectator.component.findSpace();
        expect(form_ref.form.duration().invalid()).toBeTruthy();
        expect(form_ref.form().valid()).toBeFalsy();
        expect(spectator.inject(Location).path()).toBe('/');
    });

    it('should navigate if the required form fields are valid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        await spectator.component.ngOnInit();

        form_ref.model.update((m) => ({
            ...m,
            host: 'host@test.com',
            date: Date.now() + 60 * 60 * 1000,
            duration: 120,
            attendees: [],
            title: 'test',
        }));

        expect(form_ref.form().valid()).toBeTruthy();
        await spectator.component.findSpace();
        expect(spectator.inject(Location).path()).toBe('/schedule/view');
    });
});
