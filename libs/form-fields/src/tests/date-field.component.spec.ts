import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { ADatePickerModule } from '@acaprojects/ngx-date-picker';
import { DateFieldComponent } from './date-field.component';
import { Component } from '@angular/core';

import * as dayjs from 'dayjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-icon',
    template: '',
    inputs: ['icon']
})
class MockAppIconComponent { }


describe('DateFieldComponent', () => {
    let component: DateFieldComponent;
    let fixture: ComponentFixture<DateFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DateFieldComponent, MockAppIconComponent],
            imports: [FormsModule, ADatePickerModule, MatMenuModule, NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DateFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be able to be disabled', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const input_el = compiled.querySelector('.date-field');
        expect(input_el.hasAttribute('disabled')).toBeFalsy();
        component.setDisabledState(true);
        fixture.detectChanges();
        expect(input_el.hasAttribute('disabled')).toBeTruthy();
    });

    it('should handler external changes to the date selected', () => {
        const formatted_date = dayjs().format('DD MMM YYYY');
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const field_element = el.querySelector('.display');
        expect(field_element).toBeTruthy();
        expect(field_element.textContent).toBe(formatted_date);
        const new_date = dayjs().add(Math.floor(Math.random() * 10 + 2), 'd');
        component.writeValue(new_date.valueOf());
        fixture.detectChanges();
        expect(field_element.textContent).toBe(new_date.format('DD MMM YYYY'));
    });
});
