import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { MockModule, MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { ScheduleViewEventComponent } from './view-event.component';
import { ApplicationService } from '../../../services/app.service';
import { generateMockAppService } from '../../../shared/utilities/spec-helpers';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { IconComponent } from '../../../ui/icon/icon.component';
import { TopbarHeaderComponent } from '../../../ui/topbar-header/topbar-header.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FooterMenuComponent } from '../../../ui/footer-menu/footer-menu.component';

@Component({
    selector: 'schedule-event-edit',
    template: '',
    styles: [''],
    inputs: ['event'],
})
class MockEventEdit {}

@Component({
    selector: 'schedule-event-details',
    template: '',
    styles: [''],
    inputs: ['event'],
})
class MockEventDetails {}

describe('ViewEventComponent', () => {
    let component: ScheduleViewEventComponent;
    let fixture: ComponentFixture<ScheduleViewEventComponent>;
    let app_service: any;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [
                ScheduleViewEventComponent,
                MockComponent(IconComponent),
                MockComponent(TopbarHeaderComponent),
                MockComponent(FooterMenuComponent),
                MockComponent(EventEditComponent),
                MockComponent(EventDetailsComponent),
                MockComponent(BookingDetailsComponent)
            ],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: app_service,
                },
                {
                    provide: MatDialog,
                    useValue: {
                        open: jest.fn(),
                        afterClosed: jest.fn(),
                    },
                },
            ],
            imports: [MockModule(RouterModule.forRoot([])), MatProgressSpinnerModule],
        }).compileComponents();
        app_service.Bookings.listen.mockReturnValue(of([]));
        app_service.Bookings.show.mockReturnValue(Promise.resolve({}));
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleViewEventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
