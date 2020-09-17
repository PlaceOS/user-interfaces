import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { DurationFieldComponent } from './duration-field.component';

import * as dayjs from 'dayjs';
import { timeFormatString } from 'src/app/shared/utilities/general.utilities';

describe('DurationFieldComponent', () => {
    let component: DurationFieldComponent;
    let fixture: ComponentFixture<DurationFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DurationFieldComponent],
            imports: [MatSelectModule, NoopAnimationsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DurationFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be able to be disabled', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const input_el: HTMLSelectElement = compiled.querySelector('.duration-field');
        expect(input_el.hasAttribute('disabled')).toBeFalsy();
        component.setDisabledState(true);
        fixture.detectChanges();
        expect(input_el.hasAttribute('disabled')).toBeTruthy();
    });

    it('should allow changing the min duration', () => {
        component.min = 60;
        component.ngOnChanges({ min: {} as any });
        fixture.detectChanges();
        expect(component.duration_options[0].id).toBe(60);
        component.min = Math.floor(Math.random() * 10 + 2) * 15;
        component.ngOnChanges({ min: {} as any });
        fixture.detectChanges();
        expect(component.duration_options[0].id).toBe(component.min);
    });

    it('should allow changing the max duration', () => {
        component.max = 240;
        component.ngOnChanges({ max: {} as any });
        fixture.detectChanges();
        expect(component.duration_options[component.duration_options.length - 2].id).toBe(240);
        component.max = Math.floor(Math.random() * 10 + 10) * 15;
        component.ngOnChanges({ max: {} as any });
        fixture.detectChanges();
        expect(component.duration_options[component.duration_options.length - 2].id).toBe(
            component.max
        );
    });

    it('should allow changing the duration step', () => {
        component.step = 10;
        component.ngOnChanges({ step: {} as any });
        fixture.detectChanges();
        let diff = +component.duration_options[1].id - +component.duration_options[0].id;
        expect(diff).toBe(10);
        component.step = Math.floor(Math.random() * 10 + 1) * 5;
        component.ngOnChanges({ step: {} as any });
        fixture.detectChanges();
        diff = +component.duration_options[1].id - +component.duration_options[0].id;
        expect(diff).toBe(component.step);
    });

    it('should allow changing the reference time', () => {
        component.time = dayjs().startOf('m').valueOf();
        component.ngOnChanges({ time: {} as any });
        fixture.detectChanges();
        expect(component.duration_options[0].name).toContain(
            dayjs(component.time)
                .add(+component.duration_options[0].id, 'm')
                .format(timeFormatString())
        );
        component.time = dayjs().add(1, 'h').startOf('m').valueOf();
        component.ngOnChanges({ time: {} as any });
        fixture.detectChanges();
        expect(component.duration_options[0].name).toContain(
            dayjs(component.time)
                .add(+component.duration_options[0].id, 'm')
                .format(timeFormatString())
        );
    });

    it('should allow setting the value', (done) => {
        const duration = 35;
        component.registerOnChange((value) => {
            expect(value).toBe(35);
            done();
        });
        component.setValue(duration);
    });
});
