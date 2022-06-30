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

describe('RoomBookingComponent', () => {
    const formModel = {
        title: ['', Validators.required],
        date: 0,
        duration: 0,
        booking_type: '',
        attendees: '' as any,
        patchValue: jest.fn((_) => (formModel.booking_type = _)),
        markAllAsTouched: jest.fn(() => {}),
    };

    const fb = new FormBuilder();
    const form = fb.group(formModel);
    let spectator: Spectator<RoomBookingComponent>;

    class RouterStub {
        navigate = jest.fn((param) => {});
    }

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
                useValue: {
                    setView: jest.fn(),
                    setOptions: jest.fn(),
                    newForm: jest.fn(),
                    resentForm: jest.fn(),
                    clearForm: jest.fn(),
                    storeForm: jest.fn(() => {}),
                    loadForm: jest.fn(),
                    postForm: jest.fn(),
                    view: '',
                    last_success: null,
                    form: form,
                },
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

    it('should set booking type to room on init', () => {
        const event_service: any = spectator.inject(EventFormService);
        spectator.component.ngOnInit();
        expect(event_service.form.value.booking_type).toBe('room');
    });

    it('should not navigate away if the title form field is invalid', () => {
        const event_service: any = spectator.inject(EventFormService);
        const router = spectator.inject(Router);
        const navigate_spy = jest.spyOn(router, 'navigate');
        event_service.newForm();

        event_service.form.controls.duration = 123;
        event_service.form.controls.date = 456;
        event_service.form.controls.title = null;

        spectator.component.findSpace();
        expect(navigate_spy).not.toHaveBeenCalled();
    });

    it('should not navigate away if the date form field is invalid', () => {
        const event_service: any = spectator.inject(EventFormService);
        const router = spectator.inject(Router);
        const navigate_spy = jest.spyOn(router, 'navigate');
        event_service.newForm();

        event_service.form.value.duration = 123;
        event_service.form.value.date = null;
        event_service.form.value.title = 'title';

        spectator.component.findSpace();
        expect(navigate_spy).not.toHaveBeenCalled();
    });

    it('should not navigate away if the duration form field is invalid', () => {
        const event_service: any = spectator.inject(EventFormService);
        const router = spectator.inject(Router);
        const navigate_spy = jest.spyOn(router, 'navigate');
        event_service.newForm();

        event_service.form.value.duration = null;
        event_service.form.value.date = 123;
        event_service.form.value.title = 'title';

        spectator.component.findSpace();
        expect(navigate_spy).not.toHaveBeenCalled();
    });

    // it('should navigate if the required form fields are valid', () => {
    //     const event_service: any = spectator.inject(EventFormService);
    //     const router = spectator.inject(Router);
    //     const navigate_spy = jest.spyOn(router, 'navigate');
    //     spectator.component.ngOnInit();

    //     event_service.form.value.date = 123;
    //     event_service.form.value.duration = 567;
    //     event_service.form.value.attendees = '';

    //     event_service.form.value.title = 'test';

    //     spectator.component.findSpace();
    //     event_service.storeForm();

    //     console.log(spectator.component.form);
    //     expect(navigate_spy).toHaveBeenCalled();
    // });
});
