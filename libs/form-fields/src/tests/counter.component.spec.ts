import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, SafePipe } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { CounterComponent } from '../lib/counter.component';
import { FormsModule } from '@angular/forms';

describe('CounterComponent', () => {
    let spectator: Spectator<CounterComponent>;
    const createComponent = createComponentFactory({
        component: CounterComponent,
        declarations: [MockComponent(IconComponent), SafePipe],
        imports: [FormsModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.component.value = 0;
        spectator.component.registerOnChange((_) => null);
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow adding to count', () => {
        expect('button[increase]').toExist();
        expect('[value]').toExist();
        expect('[value]').toHaveExactText(' 0 ');
        spectator.click('button[increase]');
        expect(spectator.component.value).toBe(1);
        spectator.detectChanges();
        expect('[value]').toHaveExactText(' 1 ');
    });

    it('should allow removing from count', () => {
        spectator.component.value = 10;
        spectator.detectChanges();
        expect('[value]').toExist();
        expect('[value]').toHaveExactText(' 10 ');
        spectator.click('button[decrease]');
        expect(spectator.component.value).toBe(9);
        spectator.detectChanges();
        expect('[value]').toHaveExactText(' 9 ');
    });

    it('should not allow value to go out of range', () => {
        spectator.component.remove();
        expect(spectator.component.value).toBe(0);
        spectator.component.value = spectator.component.max;
        spectator.component.add();
        expect(spectator.component.value).toBe(spectator.component.max);
    });

    it('should allow qualifiers to multiple added/removed value', () => {
        spectator.component.max = 1000;
        spectator.component.value = 5;
        spectator.component.shift_key = true;
        spectator.component.add();
        expect(spectator.component.value).toBe(15);
        spectator.component.ctrl_key = true;
        spectator.component.add();
        expect(spectator.component.value).toBe(115);
        spectator.component.remove();
        expect(spectator.component.value).toBe(15);
        spectator.component.ctrl_key = false;
        spectator.component.remove();
        expect(spectator.component.value).toBe(5);
        spectator.component.shift_key = false;
        spectator.component.remove();
        expect(spectator.component.value).toBe(4);
    });

    it('should allow writing to count', () => {
        expect('button[decrease]').toExist();
        expect('[value]').toExist();
        expect('[value]').toHaveExactText(' 0 ');
        spectator.component.writeValue(10);
        spectator.detectChanges();

        expect('[value]').toHaveExactText(' 10 ');
    });
});
