import { RoomBookingComponent } from '../app/rooms/room-booking.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { Router } from '@angular/router';
import { EventFormService } from '@placeos/events';
import { mockForm, mockEventFormService, mockRouterStub } from './test-mocks';

describe('RoomBookingComponent', () => {
    const formModel = mockForm;
    const fb = new FormBuilder();
    const form = fb.group(formModel);

    const RouterStub = mockRouterStub;
    const EventFormServiceStub = mockEventFormService;
    let spectator: Spectator<RoomBookingComponent>;

    const createComponent = createComponentFactory({
        component: RoomBookingComponent,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
        ],
        providers: [
            {
                provide: Router,
                useClass: RouterStub,
            },
            {
                provide: EventFormService,
                useClass: EventFormServiceStub,
            },
        ],
        declarations: [],
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
                event_service.form.controls.title == null ||
                event_service.form.controls.date == null ||
                event_service.form.controls.duration == null
            )
                return null;
        });
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
        const router = spectator.inject(Router);
        const navigate_spy = jest.spyOn(router, 'navigate');
        await event_service.newForm();

        event_service.form.patchValue({
            duration: 120,
            date: 1656641112,
        });

        spectator.component.findSpace();
        expect(event_service.form.controls.title.status).toBe('INVALID');
        expect(event_service.form.status).toBe('INVALID');
        expect(navigate_spy).not.toHaveBeenCalled();
    });

    it('should not navigate away if the date form field is invalid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        const router = spectator.inject(Router);
        const navigate_spy = jest.spyOn(router, 'navigate');
        await event_service.newForm();

        event_service.form.patchValue({
            duration: 120,
            date: 1656641112,
        });
        event_service.form.controls['date'].setErrors({ incorrect: true });

        spectator.component.findSpace();
        expect(event_service.form.controls.date.status).toBe('INVALID');
        expect(event_service.form.status).toBe('INVALID');
        expect(navigate_spy).not.toHaveBeenCalled();
    });

    it('should not navigate away if the duration form field is invalid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        const router = spectator.inject(Router);
        const navigate_spy = jest.spyOn(router, 'navigate');
        await event_service.newForm();

        event_service.form.patchValue({
            title: 'test',
        });

        event_service.form.controls['duration'].setErrors({ incorrect: true });

        spectator.component.findSpace();

        console.log(event_service.form);
        expect(event_service.form.controls.duration.status).toBe('INVALID');
        expect(event_service.form.status).toBe('INVALID');
        expect(navigate_spy).not.toHaveBeenCalled();
    });

    it('should navigate if the required form fields are valid', async () => {
        const event_service: any = spectator.inject(EventFormService);
        const router = spectator.inject(Router);
        const navigate_spy = jest.spyOn(router, 'navigate');
        await spectator.component.ngOnInit();

        event_service.form.patchValue({
            date: 1656641112,
            duration: 120,
            attendees: '',
            title: 'test',
        });

        spectator.component.findSpace();
        await event_service.storeForm();
        expect(event_service.form.status).toBe('VALID');
        expect(navigate_spy).toHaveBeenCalled();
    });
});
