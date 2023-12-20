import { RoomBookingComponent } from '../app/rooms/room-booking.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { Location } from '@angular/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { EventFormService } from '@placeos/events';
import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { SettingsService } from '@placeos/common';
import { Router } from '@angular/router';

describe('RoomBookingComponent', () => {
    const formModel = {
        id: 1,
        host: ['host@test.com', Validators.required],
        organiser: ['organiser@test.com', Validators.required],
        creator: ['creator@test.com', Validators.required],
        title: ['', Validators.required],
        date: [0, Validators.required],
        duration: 0,
        attendees: '' as any,
        markAllAsTouched: jest.fn(() => {}),
    };
    const fb = new FormBuilder();
    const form = fb.group(formModel);

    let spectator: SpectatorRouting<RoomBookingComponent>;

    const createComponent = createRoutingFactory({
        component: RoomBookingComponent,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
        ],
        providers: [
            MockProvider(EventFormService, {
                setView: jest.fn(() => {}),
                newForm: jest.fn(() => {}),
                clearForm: jest.fn(),
                storeForm: jest.fn(() => {}),
                loadForm: jest.fn(),
                postForm: jest.fn(),
                view: '',
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [MockComponent(FindSpaceComponent)],
        stubsEnabled: false,
        routes: [
            {
                path: '',
                component: RoomBookingComponent,
            },
            {
                path: 'schedule/view',
                component: FindSpaceComponent,
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
        event_service.newForm.mockImplementation((_) => {
            event_service.form = fb.group(formModel);
        });
        event_service.storeForm.mockImplementation((_) => {
            if (
                !event_service.form.contains('title') ||
                !event_service.form.contains('date') ||
                !event_service.form.contains('duration')
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

    it('should not navigate away if the title form field is invalid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        await event_service.newForm();

        event_service.form.patchValue({
            duration: 120,
            date: 1656641112,
        });

        spectator.component.findSpace();
        expect(event_service.form.controls.title.status).toBe('INVALID');
        expect(event_service.form.valid).toBeFalsy();
        expect(spectator.inject(Location).path()).toBe('/');
    });

    it('should not navigate away if the date form field is invalid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        await event_service.newForm();

        event_service.form.patchValue({
            duration: 120,
            date: 1656641112,
        });
        event_service.form.controls['date'].setErrors({ incorrect: true });

        spectator.component.findSpace();
        expect(event_service.form.controls.date.status).toBe('INVALID');
        expect(event_service.form.valid).toBeFalsy();
        expect(spectator.inject(Location).path()).toBe('/');
    });

    it('should not navigate away if the duration form field is invalid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        await event_service.newForm();

        event_service.form.patchValue({
            title: 'test',
        });

        event_service.form.controls['duration'].setErrors({ incorrect: true });

        spectator.component.findSpace();

        expect(event_service.form.controls.duration.status).toBe('INVALID');
        expect(event_service.form.valid).toBeFalsy();
        expect(spectator.inject(Location).path()).toBe('/');
    });

    it('should navigate if the required form fields are valid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        await spectator.component.ngOnInit();

        event_service.form.patchValue({
            date: 1656641112,
            duration: 120,
            attendees: '',
            title: 'test',
        });

        spectator.component.findSpace();
        await event_service.storeForm();
        expect(event_service.form.valid).toBeTruthy();

        await spectator.fixture.whenStable();
        expect(spectator.inject(Location).path()).toBe('/schedule/view');
    });
});
