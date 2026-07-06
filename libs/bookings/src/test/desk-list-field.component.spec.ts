import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DeskListFieldComponent } from '../lib/desk-list-field.component';

describe('DeskListFieldComponent', () => {
    let spectator: Spectator<DeskListFieldComponent>;
    const createComponent = createComponentFactory({
        component: DeskListFieldComponent,
        providers: [
            {
                provide: MatDialog,
                useValue: {
                    open: vi.fn(() => ({
                        afterClosed: () => of([{ id: `1` }]),
                    })),
                },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatRadioModule), FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow adding desks', () => {
        expect(spectator.query('button[name="add-desk"]')).toExist();
        spectator.click('button[name="add-desk"]');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledTimes(1);
    });

    it('should allow removing desks', () => {
        spectator.component.setValue([{} as any]);
        spectator.detectChanges();
        expect(spectator.query('button[name="remove-desk"]')).toExist();
        spectator.click('button[name="remove-desk"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(0);
    });

    it('should handle desk changes', () => {
        let count = 0;
        (spectator.inject(MatDialog).open as any).mockImplementation(
            (_, config) => {
                const itemsSignal = config?.data?.items;
                const items =
                    typeof itemsSignal === 'function'
                        ? itemsSignal()
                        : itemsSignal || [];
                return {
                    afterClosed: () => of([...items, { id: `${count++}` }]),
                } as any;
            },
        );
        spectator.click('button[name="add-desk"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(1);
        spectator.click('button[name="add-desk"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(2);
        spectator.click('button[name="edit-desk"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(3);
    });

    it('should display selected desks', () => {
        expect(spectator.query('div[desk]')).not.toExist();
        spectator.component.setValue([{}] as any);
        spectator.detectChanges();

        expect(spectator.queryAll('div[desk]').length).toBe(1);
        spectator.component.setValue([{}, {}] as any);
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(2);
    });
});
