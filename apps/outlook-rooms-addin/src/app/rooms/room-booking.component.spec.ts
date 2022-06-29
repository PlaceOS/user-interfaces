import { RoomBookingComponent } from './room-booking.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    FormBuilder,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from './book.module';
import { Router } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { EventFormService } from '@placeos/events';

describe('RoomBookingComponent', () => {
    class routerStub {
        navigate = jest.fn();
    }

    const formModel = {
        title: '',
        date: 123,
        duration: 234,
        booking_type: '',
        attendees: '' as any,
        patchValue: jest.fn((_) => (formModel.booking_type = _)),
        markAllAsTouched: jest.fn(() => {}),
    };

    const fb = new FormBuilder();
    const form = fb.group(formModel);

    let spectator: SpectatorRouting<RoomBookingComponent>;
    let component: RoomBookingComponent;

    const createComponent = createRoutingFactory({
        component: RoomBookingComponent,
        params: { url: 'book' },
        data: { title: 'book' },
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
        ],
        providers: [
            {
                provide: Router,
                useValue: routerStub,
            },
            {
                provide: EventFormService,
                useValue: {
                    setView: jest.fn(),
                    setOptions: jest.fn(),
                    newForm: jest.fn(),
                    resentForm: jest.fn(),
                    clearForm: jest.fn(),
                    storeForm: jest.fn(),
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
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should create a new form on component init', () => {
        const event_service: any = spectator.inject(EventFormService);
        expect(event_service.newForm()).toBeCalled;
    });

    it('should set booking type to room on init', () => {
        const event_service: any = spectator.inject(EventFormService);
        spectator.component.ngOnInit();
        expect(event_service.form.patchValue).toBeCalled;
        expect(event_service.form.value.booking_type).toBe('room');
    });

    it('should exit if the title form field is invalid', () => {
        const event_service: any = spectator.inject(EventFormService);
        event_service.form.title = null;
        expect(spectator.component.findSpace()).toBeFalsy;
    });

    it('should exit if the date form field is invalid', () => {
        const event_service: any = spectator.inject(EventFormService);
        event_service.newForm();
        event_service.form.date = null;
        expect(spectator.component.findSpace()).toBeFalsy;
    });

    it('should exit the findSpace() method if the duration form field is invalid', () => {
        const event_service: any = spectator.inject(EventFormService);
        event_service.newForm();
        event_service.form.duration = null;
        expect(spectator.component.findSpace()).toBeFalsy;
    });

    it('should not exit the findSpace() method if the required form fields are valid', () => {
        const event_service: any = spectator.inject(EventFormService);
        event_service.newForm();
        event_service.form.title = 'test';
        event_service.form.date = 123;
        event_service.form.duration = 567;
        expect(spectator.component.findSpace()).toBeTruthy;
        expect(event_service.storeForm()).toBeCalled;
    });
});
