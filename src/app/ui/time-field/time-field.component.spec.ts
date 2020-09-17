import { async, ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SimpleChange } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MockComponent, MockModule } from 'ng-mocks';

import { IconComponent } from '../../icon/icon.component';
import { TimeFieldComponent } from './time-field.component';

import * as dayjs from 'dayjs';

describe('TimeFieldComponent', () => {
    let component: TimeFieldComponent;
    let fixture: ComponentFixture<TimeFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimeFieldComponent, MockComponent(IconComponent)],
            imports: [FormsModule, MatFormFieldModule, MatSelectModule, NoopAnimationsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeFieldComponent);
        component = fixture.componentInstance;
        component.no_past_times = false;
        component.show_select = false;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow the user to select a time', fakeAsync(() => {
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const icon_el = el.querySelector('.icon');
        component.registerOnChange((_) => null);
        icon_el.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        tick(300);
        fixture.detectChanges();
        const option_elements = document.querySelectorAll('mat-option');
        expect(option_elements.length).toBeGreaterThan(0);
        option_elements[0].dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.time).toBe(`${component.time_options[0].id}`);
        component.writeValue(dayjs().startOf('d').valueOf());
        expect(component.time).toBe(`00:00`);
        flush();
    }));

    it('should allow the user to manually input a time', () => {
        const el: HTMLElement = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        const input_el = el.querySelector('input');
        expect(input_el).toBeTruthy();
        input_el.value = '00:00';
        input_el.dispatchEvent(new Event('input'));
        expect(component.time).toBe('00:00');
    });

    it('should allow customising the step between time options', () => {
        component.step = 5;
        component.ngOnChanges({ step: new SimpleChange(15, 5, false) });
        fixture.detectChanges();
        expect(component._time_options[1].id).toBe('00:05');
        const step = Math.floor(Math.random() * 4 + 1) * 5;
        component.step = step;
        component.ngOnChanges({ no_past_times: new SimpleChange(5, step, false) });
        fixture.detectChanges();
        expect(component._time_options[1].id).toBe(
            dayjs().startOf('d').add(step, 'm').format('HH:mm')
        );
    });

    it('should allow the current time as an option', () => {
        let date = dayjs();
        const date_str = date.format('HH:mm');
        const option = component.time_options.find((block) => block.id === date_str);
        expect(option).toBeTruthy();
    });

    it('should allow preventing past times from being selected', () => {
        component.no_past_times = true;
        component.ngOnChanges({ no_past_times: new SimpleChange(false, true, false) });
        fixture.detectChanges();
        const date = dayjs();
        const date_str = date.format('HH:mm');
        expect(date_str.localeCompare(`${component.time_options[0].id}`)).toBeLessThanOrEqual(0);
    });
});
