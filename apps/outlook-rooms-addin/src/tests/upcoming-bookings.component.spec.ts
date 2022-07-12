import { UpcomingBookingsComponent } from '../app/rooms/upcoming-bookings/upcoming-bookings.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockInstance, ngMocks } from 'ng-mocks';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import { take, tap, first } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBottomSheetModule,
    MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { CalendarEvent } from '@placeos/events';
import { ExistingBookingsService } from '../app/rooms/existing-bookings.service';
import { ComponentsModule, InteractiveMapComponent } from '@placeos/components';

import {
    mockCalendarEvent,
    mockStaffUser,
    mockExternalCalendarEvent,
    mockGetStaffUser,
} from './test-mocks';

describe('UpcomingBookingsComponent', () => {
    let spectator: Spectator<UpcomingBookingsComponent>;

    const createComponent = createComponentFactory({
        component: UpcomingBookingsComponent,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatBottomSheetModule,
            ComponentsModule,
        ],
        providers: [
            {
                provide: ExistingBookingsService,
                useValue: {
                    loading$: of(false),
                    events: of([mockCalendarEvent, mockCalendarEvent]),
                },
            },
            // {
            //     provide: currentUser,
            //     useValue: mockGetStaffUser,
            // },
        ],
        declarations: [],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should not show bookings that were not organised by the current user', async () => {
        spectator = createComponent();
        spectator.component.user = mockStaffUser;
        spectator.detectChanges();
        const booking_service = spectator.inject(ExistingBookingsService);
        booking_service.loading$ = of(true);
        spectator.detectChanges();
        booking_service.events = of([
            mockCalendarEvent,
            mockCalendarEvent,
            mockCalendarEvent,
        ]) as any;
        spectator.detectChanges();
        await booking_service.events.pipe(take(1)).toPromise();
        booking_service.loading$ = of(false);
        spectator.detectChanges();

        await spectator.component.ngOnInit();
        spectator.detectChanges();

        let service_bookings_count;
        booking_service.events.subscribe(
            // (bookings) => (service_bookings_count = bookings.length)
            (events) =>
                events.map((event) =>
                    console.log(
                        event.organiser.name == spectator.component.user.name
                    )
                )
        );
        console.log(spectator.component.user.name);
        // console.log(service_bookings_count);

        await spectator.component.filter_user_bookings$
            .pipe(take(1))
            .toPromise();
        spectator.detectChanges();

        spectator.component.user_bookings$.subscribe((i) => console.log(i));

        console.log(spectator.debugElement.nativeElement.outerHTML);

        // // expect(bookings_count).toBe(4);

        // booking_service.events = of([
        //     mockExternalCalendarEvent,
        //     mockExternalCalendarEvent,
        //     mockExternalCalendarEvent,
        // ]) as any;
        // spectator.detectChanges();

        let new_bookings_count;
        // spectator.component.bookings$.subscribe((bookings) => {
        //     new_bookings_count = bookings.length;
        // });

        // expect(new_bookings_count).toBe(0);
    });

    it('should say no bookings found if there are no bookings', async () => {
        spectator = createComponent();
        spectator.component.user = mockStaffUser;
        const bookings_service = spectator.inject(ExistingBookingsService);
        bookings_service.loading$ = of(true);
        bookings_service.events = of([null, null, null]);
        bookings_service.loading$ = of(false);
        spectator.detectChanges();

        await spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.debugElement.nativeElement.outerHTML).toContain(
            'No bookings found'
        );
        expect(spectator.debugElement.nativeElement.outerHTML).not.toContain(
            'results found'
        );
    });
});
