import { RoomBookingComponent } from './room-booking.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { EventFormService } from '@placeos/events';

describe('RoomBookingComponent', () => {
    class routerStub {
        navigate = jest.fn();
    }

    let spectator: Spectator<RoomBookingComponent>;
    let component: RoomBookingComponent;

    const createComponent = createComponentFactory({
        component: RoomBookingComponent,
        imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule],
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
                    form: {},
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
        event_service.form.patchValue.mockImplementation((_) => {
            event_service.form = { _ };
            spectator.detectChanges();
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
