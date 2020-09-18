
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, convertToParamMap, RouterModule } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { of } from "rxjs";
import { subMinutes, startOfMinute, addMinutes, isAfter, isBefore } from 'date-fns';
import { MockModule } from 'ng-mocks';

import { BookingPanelSelectComponent } from "./panel-select.component";
import { setMockBookingStartDatetime } from '../services/bookings/booking.utilities';
import { generateMockSpace } from 'src/app/spaces/space.utilities';

@Component({
    selector: 'app-booking-panel',
    template: '<p>Mock Booking Panel Component</p>',

})
class MockBookingPanelComponent {
    /** ID of the active system */
    @Input() public system_id: string;
    /** Whether the status is on the right side */
    @Input() public reverse: boolean;
    /** Whether to show the time at the bottom of the status */
    @Input() public show_time: boolean = true;
}

describe('BookingPanelSelectComponent', () => {
    let fixture: ComponentFixture<BookingPanelSelectComponent>;
    let component: BookingPanelSelectComponent;
    let route: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MockBookingPanelComponent,
                BookingPanelSelectComponent
            ],
            providers: [
                { provide: ActivatedRoute, useValue: {
                    'queryParamMap': jest.fn()
                } },
            ],
            imports: [CommonModule, RouterModule.forRoot([]), MockModule(MatProgressSpinnerModule), HttpClientModule]
        }).compileComponents();
        fixture = TestBed.createComponent(BookingPanelSelectComponent);
        route = TestBed.inject(ActivatedRoute);
        setMockBookingStartDatetime(subMinutes(new Date(), 30).valueOf());
        const space = generateMockSpace();
        component = fixture.debugElement.componentInstance;
    });

    it('should display an array of panel options', () => {
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0,sys-A2' }));
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const panels = compiled.querySelectorAll('.item');
        expect(panels.length).toBe(2);
    });

    it('should display loading before options have initialised', () => {
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0,sys-A2' }));
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const panels = compiled.querySelectorAll('a-spinner');
        expect(panels.length).toBe(2);
    });

    it('should show the system\'s status', () => {
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0' }));
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.icon').classList.contains('test')).toBeFalsy();
        component.system_status['sys-A0'] = 'test';
        fixture.detectChanges();
        expect(compiled.querySelector('.icon').classList.contains('test')).toBeTruthy();
    });

    it('should update the system\'s status', () => {
        const bookings = [];
        component.updateStatus('test', bookings);
        const now = startOfMinute(new Date());
        const current = bookings.find(i => {
            const date = startOfMinute(new Date(i.date));
            const end = addMinutes(date, i.duration);
            return isAfter(now, date) || isBefore(now, end);
        });
        if (current) {
            expect(component.system_status.test).toBe('unavailable');
        } else {
            expect(component.system_status.test).toBe('available');
        }
    });

    it('should allow for selecting one panel', () => {
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0' }));
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        // Check that panel can't be opened until system name has loaded
        const button = compiled.querySelector('.item');
        expect(button).toBeTruthy();
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(compiled.querySelector('app-booking-panel')).toBeFalsy();
        component.system_name['sys-A0'] = 'Test System';
        fixture.detectChanges();
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(compiled.querySelector('app-booking-panel')).toBeTruthy();
    });

    it('should close open panel after time', () => {
        jest.useFakeTimers();
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0' }));
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        component.system_name['sys-A0'] = 'Test System';
        const button = compiled.querySelector('.item');
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(compiled.querySelector('app-booking-panel')).toBeTruthy();
        jest.runOnlyPendingTimers();
        fixture.detectChanges();
        expect(compiled.querySelector('app-booking-panel')).toBeFalsy();
        jest.useRealTimers();
    });

});
