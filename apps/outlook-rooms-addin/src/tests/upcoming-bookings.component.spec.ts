import { UpcomingBookingsComponent } from '../app/rooms/upcoming-bookings/upcoming-bookings.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockInstance, ngMocks } from 'ng-mocks';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
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

import { currentUser } from '@placeos/common';
import { ExistingBookingsService } from '../app/rooms/existing-bookings.service';
import { ComponentsModule, InteractiveMapComponent } from '@placeos/components';

import { mockCalendarEvent } from './test-mocks';

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
                    loading$: of(true),
                    events: of(mockCalendarEvent),
                },
            },
            {
                provide: currentUser,
                useValue: jest.fn(() => {}),
            },
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

    it('should not show bookings that were not organised by the current user', () => {
        spectator = createComponent();
    });
});
