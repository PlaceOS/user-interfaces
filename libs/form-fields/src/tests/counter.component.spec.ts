import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockPipe } from 'ng-mocks';

import { FormsModule } from '@angular/forms';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { CounterComponent } from '../lib/counter.component';

describe('CounterComponent', () => {
    let spectator: Spectator<CounterComponent>;
    const createComponent = createComponentFactory({
        component: CounterComponent,
        declarations: [MockComponent(IconComponent), MockPipe(SafePipe)],
        imports: [FormsModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.component.value.set(0);
        spectator.component.registerOnChange(() => null);
        spectator.detectChanges();
    });

    it('should allow adding to count', () => {
        expect('button[increase]').toExist();
        expect('[value]').toExist();
        expect('[value]').toHaveExactText(' 0 ');
        spectator.click('button[increase]');
        expect(spectator.component.value()).toBe(1);
        spectator.detectChanges();
        expect('[value]').toHaveExactText(' 1 ');
    });

    it('should allow removing from count', () => {
        spectator.component.value.set(10);
        spectator.detectChanges();
        expect('[value]').toExist();
        expect('[value]').toHaveExactText(' 10 ');
        spectator.click('button[decrease]');
        expect(spectator.component.value()).toBe(9);
        spectator.detectChanges();
        expect('[value]').toHaveExactText(' 9 ');
    });

    it('should not allow value to go out of range', () => {
        spectator.component.remove();
        expect(spectator.component.value()).toBe(0);
        spectator.component.value.set(spectator.component.max());
        spectator.component.add();
        expect(spectator.component.value()).toBe(spectator.component.max());
    });

    it('should allow qualifiers to multiple added/removed value', () => {
        spectator.setInput({ max: 1000 });
        spectator.component.value.set(5);
        spectator.component.add({ shiftKey: true });
        expect(spectator.component.value()).toBe(15);
        spectator.component.add({ ctrlKey: true });
        expect(spectator.component.value()).toBe(115);
        spectator.component.remove({ metaKey: true });
        expect(spectator.component.value()).toBe(15);
        spectator.component.remove({ shiftKey: true });
        expect(spectator.component.value()).toBe(5);
        spectator.component.remove();
        expect(spectator.component.value()).toBe(4);
    });

    it('should step from zero when the minimum is negative', () => {
        spectator.setInput({ min: -5 });
        spectator.component.writeValue(0);
        spectator.detectChanges();
        expect(spectator.query('button[decrease]')).not.toBeDisabled();
        spectator.component.remove();
        expect(spectator.component.value()).toBe(-1);
        spectator.component.writeValue(0);
        spectator.component.add();
        expect(spectator.component.value()).toBe(1);
    });

    it('should not send NaN for text that is not a number', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.setValue(Number('abc'));
        expect(on_change).toHaveBeenCalledWith(0);
    });

    it('should step a typed value with the arrow keys and modifiers', () => {
        spectator.setInput({ max: 1000 });
        spectator.component.value.set('5' as unknown as number);
        spectator.detectChanges();
        const input = spectator.query('input');
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
        expect(spectator.component.value()).toBe(6);
        input.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'ArrowUp', shiftKey: true }),
        );
        expect(spectator.component.value()).toBe(16);
        input.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'ArrowDown', ctrlKey: true }),
        );
        expect(spectator.component.value()).toBe(0);
    });

    it('should disable the buttons and input when disabled', async () => {
        spectator.component.writeValue(3);
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(spectator.query('button[increase]')).toBeDisabled();
        expect(spectator.query('button[decrease]')).toBeDisabled();
        expect(spectator.query('input')).toBeDisabled();
    });

    it('should allow writing to count', () => {
        expect('button[decrease]').toExist();
        expect('[value]').toExist();
        expect('[value]').toHaveExactText(' 0 ');
        spectator.component.writeValue(10);
        spectator.detectChanges();

        expect('[value]').toHaveExactText(' 10 ');
    });

    it('should give the input the id that a label can point to', () => {
        expect('[value] input').not.toHaveAttribute('id');
        spectator.setInput({ input_id: 'capacity' });
        expect('[value] input').toHaveAttribute('id', 'capacity');
    });

    it('should stack both step buttons after the value when compact', () => {
        spectator.setInput({ compact: true });
        const buttons = spectator.queryAll('[counter] > div:last-child button');
        expect(buttons.map((_) => _.hasAttribute('increase'))).toEqual([
            true,
            false,
        ]);
        expect(spectator.query('[counter] > button')).toBeNull();
    });
});
