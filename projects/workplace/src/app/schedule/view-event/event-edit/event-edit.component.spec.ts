import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';

import { EventEditComponent } from './event-edit.component';
import { ApplicationService } from '../../../../services/app.service';
import { generateMockBooking } from 'src/app/bookings/booking.utilities';
import { generateMockAppService } from '../../../../shared/utilities/spec-helpers';
import { CalendarEvent } from 'src/app/events/event.class';
import { BookingFormComponent } from '../../../../ui/forms/booking-form/booking-form.component';
import { BookingEditComponent } from '../../../../ui/forms/booking-edit/booking-edit.component';

@Component({
    selector: 'a-booking-form',
    template: '',
    styles: [''],
    inputs: ['form'],
})
class MockBookingFormComponent {}

describe('EventEditComponent', () => {
    let component: EventEditComponent;
    let fixture: ComponentFixture<EventEditComponent>;
    let service: any;
    let dialog: any;

    beforeEach(async(() => {
        service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [
                EventEditComponent,
                MockComponent(BookingFormComponent),
                MockComponent(BookingEditComponent),
            ],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: service,
                },
                {
                    provide: MatDialog,
                    useValue: {
                        open: jest.fn(),
                    },
                },
            ],
            imports: [FormsModule, ReactiveFormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        service = TestBed.inject(ApplicationService);
        dialog = TestBed.inject(MatDialog);
        dialog.open.mockReturnValue({
            componentInstance: { event: of({ reason: 'success' }) },
            close: jest.fn(),
        });
        service.Bookings.parent = service;
        service.Organisation = {
            addFrom: jest.fn(),
            current: jest.fn(),
            item: jest.fn(),
        };
        service.Organisation.parent = service;
        fixture = TestBed.createComponent(EventEditComponent);
        component = fixture.componentInstance;
        component.event = new CalendarEvent(generateMockBooking());
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show form', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('booking-edit')).toBeTruthy();
    });

    it('should allow user to progress', (done) => {
        component.form = new FormGroup({ name: new FormControl('') });
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element: HTMLFormElement = compiled.querySelector('form');
        expect(element).toBeTruthy();
        component.change.subscribe((event) => {
            if (event.type === 'view') {
                done();
            }
        });
        element.dispatchEvent(new Event('ngSubmit'));
        expect(dialog.open).toHaveBeenCalled();
    });

    it('should allow user to cancel', (done) => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element: HTMLFormElement = compiled.querySelector('button[name="cancel"]');
        expect(element).toBeTruthy();
        component.change.subscribe((event) => {
            if (event.type === 'cancel_edit') {
                done();
            }
        });
        element.dispatchEvent(new Event('click'));
    });
});
