// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//     FormsModule,
//     ReactiveFormsModule,
//     ControlValueAccessor,
//     NG_VALUE_ACCESSOR
// } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { Component, forwardRef } from '@angular/core';
// import { EditorModule } from '@tinymce/tinymce-angular';

// import { BookingFormComponent } from './booking-form.component';
// import { ApplicationService } from 'src/app/services/app.service';
// import { MatInputModule } from '@angular/material/input';
// import { generateBookingForm } from 'src/app/services/data/bookings/booking.utilities';
// import { Booking } from 'src/app/services/data/bookings/booking.class';
// import { User } from 'src/app/services/data/users/user.class';
// import { MatDialog } from '@angular/material/dialog';
// import { of } from 'rxjs';

// @Component({
//     selector:
//         'a-user-list-field,a-duration-field,a-time-field,an-action-field,a-date-field,a-user-search-field',
//     template: '',
//     inputs: ['placeholder'],
//     providers: [
//         {
//             provide: NG_VALUE_ACCESSOR,
//             useExisting: forwardRef(() => MockFieldComponents),
//             multi: true
//         }
//     ]
// })
// class MockFieldComponents implements ControlValueAccessor {
//     public writeValue(i) {}
//     public registerOnChange(i) {}
//     public registerOnTouched(i) {}
// }

// describe('BookingFormComponent', () => {
//     let component: BookingFormComponent;
//     let fixture: ComponentFixture<BookingFormComponent>;
//     let service: any;
//     let dialog: any;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [BookingFormComponent, MockFieldComponents],
//             providers: [
//                 {
//                     provide: ApplicationService,
//                     useValue: jasmine.createSpyObj('ApplicationService', ['setting'])
//                 },
//                 { provide: MatDialog, useValue: jasmine.createSpyObj('MatDialog', ['open']) }
//             ],
//             imports: [
//                 MatInputModule,
//                 MatFormFieldModule,
//                 MatSelectModule,
//                 EditorModule,
//                 ReactiveFormsModule,
//                 FormsModule
//             ]
//         }).compileComponents();
//     }));

//     beforeEach(() => {
//         dialog = TestBed.get(MatDialog);
//         fixture = TestBed.createComponent(BookingFormComponent);
//         component = fixture.componentInstance;
//         service = TestBed.get(ApplicationService);
//         service.Users = jasmine.createSpyObj('UsersService', ['item', 'addFrom']);
//         service.Users.parent = service;
//         service.Bookings = jasmine.createSpyObj('BookingsService', ['item', 'addFrom']);
//         service.Bookings.parent = service;
//         service.Spaces = jasmine.createSpyObj('SpacesService', ['item', 'addFrom']);
//         service.Spaces.parent = service;
//         service.Organisation = jasmine.createSpyObj('OrganisationService', ['get']);
//         service.Organisation.parent = service;
//     });

//     it('should create', () => {
//         component.form = generateBookingForm(
//             new Booking(service.Bookings, {}),
//             new User(service.Users, { name: 'Test User' }),
//             []
//         );
//         fixture.detectChanges();
//         expect(component).toBeTruthy();
//     });

//     it('should show enabled fields', () => {
//         component.form = generateBookingForm(
//             new Booking(service.Bookings, {}),
//             new User(service.Users, { name: 'Test User' }),
//             []
//         );
//         fixture.detectChanges();
//         const el: HTMLElement = fixture.debugElement.nativeElement;
//         expect(el.querySelector('.field')).toBeFalsy();
//         component.form = generateBookingForm(
//             new Booking(service.Bookings, {}),
//             new User(service.Users, { name: 'Test User' }),
//             ['date']
//         );
//         fixture.detectChanges();
//         expect(el.querySelector('.field')).toBeTruthy();
//         expect(el.querySelector('.field [for="date"]')).toBeTruthy();
//     });

//     it('should allow editing spaces', () => {
//         component.form = generateBookingForm(
//             new Booking(service.Bookings, { id: 'True' }),
//             new User(service.Users, { name: 'Test User' }),
//             ['space_list']
//         );
//         fixture.detectChanges();
//         const el: HTMLElement = fixture.debugElement.nativeElement;
//         const action_field = el.querySelector('.field [name="spaces"]');
//         expect(action_field).toBeTruthy();
//         action_field.dispatchEvent(new Event('onAction'));
//         // expect(dialog.open).toHaveBeenCalledTimes(1);
//     });

//     it('should allow editing catering', () => {
//         component.form = generateBookingForm(
//             new Booking(service.Bookings, {}),
//             new User(service.Users, { name: 'Test User' }),
//             ['catering']
//         );
//         fixture.detectChanges();
//         const el: HTMLElement = fixture.debugElement.nativeElement;
//         const action_field = el.querySelector('.field [name="catering"]');
//         expect(action_field).toBeTruthy();
//         action_field.dispatchEvent(new Event('onAction'));
//         // expect(dialog.open).toHaveBeenCalledTimes(1);
//     });

//     it('should allow editing recurrence', () => {
//         component.form = generateBookingForm(
//             new Booking(service.Bookings, {}),
//             new User(service.Users, { name: 'Test User' }),
//             ['recurrence']
//         );
//         fixture.detectChanges();
//         const el: HTMLElement = fixture.debugElement.nativeElement;
//         const action_field = el.querySelector('.field [name="recurrence"]');
//         expect(action_field).toBeTruthy();
//         action_field.dispatchEvent(new Event('onAction'));
//         // expect(dialog.open).toHaveBeenCalledTimes(1);
//     });

//     it('should allow adding new contacts', () => {
//         component.form = generateBookingForm(
//             new Booking(service.Bookings, {}),
//             new User(service.Users, { name: 'Test User' }),
//             ['attendees']
//         );
//         dialog.open.and.returnValue({
//             close: () => null,
//             componentInstance: { event: of({ reason: 'done', metadata: new User(null, {}) }) }
//         });
//         fixture.detectChanges();
//         const el: HTMLElement = fixture.debugElement.nativeElement;
//         const action_field = el.querySelector('.field [name="attendees"]');
//         expect(action_field).toBeTruthy();
//         action_field.dispatchEvent(new Event('newUser'));
//         expect(dialog.open).toHaveBeenCalledTimes(1);
//     });
// });
