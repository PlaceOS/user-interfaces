import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { PrintableComponent } from 'libs/components/src/lib/printable.component';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { UserLabelModalComponent } from '../lib/user-label-modal.component';
import { UserLabelComponent } from '../lib/user-label.component';

const STORAGE_KEY = 'PlaceOS.User.LabelSettings';

describe('UserLabelModalComponent', () => {
    let spectator: Spectator<UserLabelModalComponent>;
    const createComponent = createComponentFactory({
        component: UserLabelModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CounterComponent),
            MockComponent(PrintableComponent),
            MockComponent(UserLabelComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { name: 'Jane', email: 'jane@place.tech' },
            },
        ],
    });

    beforeEach(() => {
        localStorage.clear();
        spectator = createComponent();
    });

    afterEach(() => localStorage.clear());

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should default the label dimensions', () => {
        expect(spectator.component.scale()).toBe(4);
        expect(spectator.component.width()).toBe(25);
        expect(spectator.component.height()).toBe(15);
    });

    it('should format values as millimetres', () => {
        expect(spectator.component.format_mm(3.149)).toBe('3.1mm');
        expect(spectator.component.format_mm(10)).toBe('10mm');
    });

    it('should load stored settings on init', () => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ scale: 2, width: 50, height: 30 }),
        );
        const fresh = createComponent();
        expect(fresh.component.scale()).toBe(2);
        expect(fresh.component.width()).toBe(50);
        expect(fresh.component.height()).toBe(30);
    });

    it('should persist settings and trigger printing on print', () => {
        jest.useFakeTimers();
        const print_spy = jest
            .spyOn(window, 'print')
            .mockImplementation(() => undefined);
        spectator.component.scale.set(6);
        spectator.component.width.set(40);
        spectator.component.height.set(20);
        spectator.component.print();
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) as string);
        expect(stored).toEqual({ scale: 6, width: 40, height: 20 });
        jest.runOnlyPendingTimers();
        expect(print_spy).toHaveBeenCalled();
        jest.useRealTimers();
        print_spy.mockRestore();
    });
});
