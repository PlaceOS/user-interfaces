import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CompactCounterComponent } from '../lib/compact-counter.component';

describe('CompactCounterComponent', () => {
    let spectator: Spectator<CompactCounterComponent>;
    const createComponent = createComponentFactory({
        component: CompactCounterComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [FormsModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.component.value.set(0);
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should emit the value when a step is added', () => {
        const on_change = jest.fn();
        spectator.component.registerOnChange(on_change);
        spectator.click('button[increase]');
        expect(spectator.component.value()).toBe(1);
        expect(on_change).toHaveBeenCalledWith(1);
    });

    it('should emit the value when a step is removed', () => {
        const on_change = jest.fn();
        spectator.component.value.set(5);
        spectator.detectChanges();
        spectator.component.registerOnChange(on_change);
        spectator.click('button[decrease]');
        expect(spectator.component.value()).toBe(4);
        expect(on_change).toHaveBeenCalledWith(4);
    });

    it('should not allow the value to exceed the bounds', () => {
        spectator.setInput({ max: 3, min: 1 });
        spectator.component.value.set(3);
        spectator.component.add();
        expect(spectator.component.value()).toBe(3);
        spectator.component.value.set(1);
        spectator.component.remove();
        expect(spectator.component.value()).toBe(1);
    });

    it('should apply modifier keys to the step size', () => {
        spectator.setInput({ max: 1000 });
        spectator.component.value.set(5);
        spectator.component.shift_key.set(true);
        spectator.component.add();
        expect(spectator.component.value()).toBe(15);
        spectator.component.ctrl_key.set(true);
        spectator.component.add();
        expect(spectator.component.value()).toBe(115);
    });

    it('should snap values to the configured step', () => {
        spectator.setInput({ step: 5, max: 100 });
        spectator.component.setValue(12);
        expect(spectator.component.value()).toBe(10);
    });

    it('should render the value using the custom render function', () => {
        spectator.setInput({ render_fn: (v: number) => `#${v}` });
        spectator.component.value.set(7);
        spectator.component.focused.set(false);
        spectator.detectChanges();
        expect(spectator.query('[value] span')).toContainText('#7');
    });

    it('should write external values into the field', () => {
        spectator.component.writeValue(42);
        spectator.detectChanges();
        expect(spectator.component.value()).toBe(42);
        expect(spectator.query('[value] span')).toContainText('42');
    });

    it('should reflect the disabled state', () => {
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect(spectator.query('[counter]')).toHaveClass('disabled');
    });
});
