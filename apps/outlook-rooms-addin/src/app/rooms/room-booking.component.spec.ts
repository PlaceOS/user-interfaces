import { DebugElement } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { BookModule } from './book.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventFormService } from '@placeos/events';
import { RoomBookingComponent } from './room-booking.component';
import { Router } from '@angular/router';

describe('RoomBookingComponent', () => {
    class routerStub {
        navigate = jest.fn();
    }
    let spectator: Spectator<RoomBookingComponent>;
    const createComponent = createComponentFactory({
        component: RoomBookingComponent,
        imports: [FormGroup, ReactiveFormsModule, MatFormFieldModule],
        providers: [
            {
                provide: Router,
                useClass: { routerStub },
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
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
