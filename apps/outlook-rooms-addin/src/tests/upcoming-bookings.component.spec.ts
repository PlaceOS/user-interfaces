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
    mockExternalUser,
} from './test-mocks';
import { consoleHasColours } from '@placeos/ts-client';

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
                    events: of(null) as any,
                },
            },
        ],
        declarations: [],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the correct number of bookings for the current user', async () => {
        spectator.component.user = mockStaffUser;
        const bookings_service = spectator.inject(ExistingBookingsService);
        bookings_service.loading$ = of(true);
        bookings_service.events = of([
            mockCalendarEvent,
            mockCalendarEvent,
            mockCalendarEvent,
            mockCalendarEvent,
        ]);
        spectator.detectChanges();
        bookings_service.loading$ = of(false);
        spectator.detectChanges();

        await spectator.component.getBookingsFromService();
        await spectator.component.user_bookings$.pipe(take(1)).toPromise();

        let service_bookings;
        let bookings_displayed;

        service_bookings = await bookings_service.events
            .pipe(take(1))
            .toPromise();

        bookings_displayed = await spectator.component.user_bookings$
            .pipe(take(1))
            .toPromise();

        expect(bookings_displayed.length).toBe(service_bookings.length);

        bookings_service.events.subscribe((events) =>
            events.forEach((event) =>
                expect(event.organiser.name).toBe(spectator.component.user.name)
            )
        );
    });

    it('should not show bookings that were not organised by the current user', async () => {
        spectator.component.user = mockExternalUser;
        const bookings_service = spectator.inject(ExistingBookingsService);
        bookings_service.loading$ = of(true);
        bookings_service.events = of([
            mockCalendarEvent,
            mockCalendarEvent,
            mockCalendarEvent,
            mockCalendarEvent,
        ]);
        spectator.detectChanges();
        bookings_service.loading$ = of(false);
        spectator.detectChanges();

        await spectator.component.getBookingsFromService();

        let service_bookings;
        let bookings_displayed;

        service_bookings = await bookings_service.events
            .pipe(take(1))
            .toPromise();

        bookings_displayed = await spectator.component.user_bookings$
            .pipe(take(1))
            .toPromise();

        expect(service_bookings.length).toBe(4);

        expect(bookings_displayed.length).toBe(0);
        bookings_service.events.subscribe((events) =>
            events.forEach((event) =>
                expect(event.organiser.name).not.toBe(
                    spectator.component.user.name
                )
            )
        );
    });

    it('should say -no bookings found- if there are no bookings', async () => {
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
