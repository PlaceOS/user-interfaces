import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { fakeAsync } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MockComponent, MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { DeskListFieldComponent } from '../lib/desk-list-field.component';

describe('DeskListFieldComponent', () => {
    let spectator: Spectator<DeskListFieldComponent>;
    const createComponent = createComponentFactory({
        component: DeskListFieldComponent,
        providers: [
            {
                provide: MatDialog,
                useValue: {
                    open: jest.fn(() => ({
                        afterClosed: () => of([{ id: `1` }]),
                    })),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
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
        expect(spectator.inject(MatDialog).open).toBeCalledTimes(1);
    });

    it('should allow removing desks', () => {
        spectator.component.setValue([{} as any]);
        spectator.detectChanges();
        expect(spectator.query('button[name="remove-desk"]')).toExist();
        spectator.click('button[name="remove-desk"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(0);
    });

    it('should handle desk changes', fakeAsync(() => {
        let count = 0;
        (spectator.inject(MatDialog).open as any).mockImplementation(
            (_, { data: { items } }) =>
                ({
                    afterClosed: () =>
                        of([...(items || []), { id: `${count++}` }]),
                } as any)
        );
        spectator.click('button[name="add-desk"]');
        spectator.tick(1001);
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(1);
        spectator.click('button[name="add-desk"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(2);
        spectator.click('button[name="edit-desk"]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[desk]').length).toBe(3);
    }));

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
