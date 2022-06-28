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

    let form = new FormGroup({
        title: new FormControl(''),
        date: new FormControl(new Date()),
        duration: new FormControl(234),
    });

    // const form = new FormBuilder(\);

    // class form {
    //     patchValue = jest.fn((i: Object) => jest.fn());
    // }

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
                    form: form,
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
