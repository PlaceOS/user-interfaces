import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MockComponent, MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { SpaceListFieldComponent } from '../lib/space-list-field.component';
import { Space } from 'libs/spaces/src/lib/space.class';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { fakeAsync } from '@angular/core/testing';

describe('SpaceListFieldComponent', () => {
    let spectator: Spectator<SpaceListFieldComponent>;
    const createComponent = createComponentFactory({
        component: SpaceListFieldComponent,
        providers: [
            {
                provide: MatDialog,
                useValue: { open: jest.fn(() => ({ afterClosed: () => of([{}]) })) },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } }
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatRadioModule), FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow adding spaces', () => {
        expect(spectator.query('button[add-space]')).toExist();
        spectator.click('button[add-space]');
        expect(spectator.inject(MatDialog).open).toBeCalledTimes(1);
    });

    it('should allow removing spaces', () => {
        spectator.component.setValue([new Space()]);
        spectator.detectChanges();
        expect(spectator.query('button[remove-space]')).toExist();
        spectator.click('button[remove-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(0);
    });

    it('should handle space changes', fakeAsync(() => {
        let count = 0;
        spectator
            .inject(MatDialog)
            .open.mockImplementation(
                (_, { data: { spaces } }) =>
                    ({
                        afterClosed: () =>
                            of([...(spaces || []), new Space({ id: `${count++}` })]),
                    } as any)
            );
        spectator.click('button[add-space]');
        spectator.tick(1001);
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(1);
        spectator.click('button[add-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(2);
        spectator.click('button[edit-space]');
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(3);
    }));

    it('should display selected spaces', () => {
        expect(spectator.query('div[space]')).not.toExist();
        spectator.component.setValue([new Space()]);
        spectator.detectChanges();

        expect(spectator.queryAll('div[space]').length).toBe(1);
        spectator.component.setValue([new Space(), new Space()]);
        spectator.detectChanges();
        expect(spectator.queryAll('div[space]').length).toBe(2);
    });
});
