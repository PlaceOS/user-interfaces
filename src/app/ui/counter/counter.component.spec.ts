import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { CounterComponent } from './counter.component';
import { IconComponent } from '../icon/icon.component';

describe('CounterComponent', () => {
    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CounterComponent, MockComponent(IconComponent)]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        component.value = 0;
        component.registerOnChange(_ => null)
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow adding to count', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const button_el: HTMLButtonElement = compiled.querySelector('button[name="add"]');
        const value_el: HTMLButtonElement = compiled.querySelector('.value');
        expect(button_el).toBeTruthy();
        expect(value_el).toBeTruthy();
        expect(value_el.textContent).toBe(' 0 ');
        button_el.dispatchEvent(new Event('click'));
        expect(component.value).toBe(1);
        fixture.detectChanges();
        expect(value_el.textContent).toBe(' 1 ');
    });

    it('should allow removing from count', () => {
        component.value = 10;
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const button_el: HTMLButtonElement = compiled.querySelector('button[name="remove"]');
        const value_el: HTMLButtonElement = compiled.querySelector('.value');
        expect(button_el).toBeTruthy();
        expect(value_el).toBeTruthy();
        expect(value_el.textContent).toBe(' 10 ');
        button_el.dispatchEvent(new Event('click'));
        expect(component.value).toBe(9);
        fixture.detectChanges();
        expect(value_el.textContent).toBe(' 9 ');
    });

    it('should not allow value to go out of range', () => {
        component.remove();
        expect(component.value).toBe(0);
        component.value = component.max;
        component.add();
        expect(component.value).toBe(component.max);
    });

    it('should allow qualifiers to multiple added/removed value', () => {
        component.max = 1000;
        component.value = 5
        component.shift_key = true;
        component.add();
        expect(component.value).toBe(15);
        component.ctrl_key = true;
        component.add();
        expect(component.value).toBe(115);
        component.remove();
        expect(component.value).toBe(15);
        component.ctrl_key = false;
        component.remove();
        expect(component.value).toBe(5);
        component.shift_key = false;
        component.remove();
        expect(component.value).toBe(4);
    });

    it('should allow writing to count', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const button_el: HTMLButtonElement = compiled.querySelector('button[name="remove"]');
        const value_el: HTMLButtonElement = compiled.querySelector('.value');
        expect(button_el).toBeTruthy();
        expect(value_el).toBeTruthy();
        expect(value_el.textContent).toBe(' 0 ');
        component.writeValue(10);
        fixture.detectChanges();
        expect(value_el.textContent).toBe(' 10 ');
    });
});
