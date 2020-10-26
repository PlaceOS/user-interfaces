
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { BookingPanelArrayComponent } from "./panel-array.component";

@Component({
    selector: 'app-booking-panel',
    template: '<p class="booking-panel">Mock Booking Panel Component</p>',

})
class MockBookingPanelComponent {
    /** ID of the active system */
    @Input() public system_id: string;
    /** Whether the status is on the right side */
    @Input() public reverse: boolean;
    /** Whether to show the time at the bottom of the status */
    @Input() public show_time: boolean = true;
}

describe('BookingPanelArrayComponent', () => {
    let fixture: ComponentFixture<BookingPanelArrayComponent>;
    let component: BookingPanelArrayComponent;
    let route: any;
    let service: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MockBookingPanelComponent,
                BookingPanelArrayComponent
            ],
            providers: [
                { provide: ActivatedRoute, useValue: {
                    'queryParamMap': jest.fn()
                } }
            ],
            imports: [CommonModule]
        }).compileComponents();
        fixture = TestBed.createComponent(BookingPanelArrayComponent);
        route = TestBed.inject(ActivatedRoute);
        service.initialised = of(true);
        component = fixture.debugElement.componentInstance;
    });

    it('should display one panel', () => {
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0' }));
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const panels = compiled.querySelectorAll('.booking-panel');
        expect(panels.length).toBe(1);
    });

    it('shold display two panels', () => {
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0,sys-A1' }));
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const panels = compiled.querySelectorAll('.booking-panel');
        expect(panels.length).toBe(2);
    });

    it('should display four panels', () => {
        route.queryParamMap = of(convertToParamMap({ system_ids: 'sys-A0,sys-A1,sys-A2,sys-A3' }));
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const panels = compiled.querySelectorAll('.booking-panel');
        expect(panels.length).toBe(4);
    });

    it('should show message when no panels', () => {
        route.queryParamMap = of(convertToParamMap({}));
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const panels = compiled.querySelectorAll('.booking-panel');
        expect(panels.length).toBe(0);
        expect(compiled.querySelector('.info-block')).toBeTruthy();
    });

});
