import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent, MockModule } from 'ng-mocks';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';

import { DeskConfirmModalComponent } from '../lib/desk-confirm-modal.component';

describe('DeskConfirmModalComponent', () => {
    let spectator: Spectator<DeskConfirmModalComponent>;
    const createComponent = createComponentFactory({
        component: DeskConfirmModalComponent,
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(UserSearchFieldComponent),
        ],
        providers: [
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: MAT_DIALOG_DATA, useValue: {} },
        ],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatProgressSpinnerModule),
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));
    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow setting the date', () => {
        expect('[date]').toExist();
        expect('[date] div').toExist();
        expect('a-date-field').not.toExist();
        (spectator.component as any).can_set_date = true;
        spectator.detectChanges();
        expect('[date] div').not.toExist();
        expect('a-date-field').toExist();
    });

    it('should allow setting the host', () => {
        expect('[host]').not.toExist();
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(() => true);
        spectator.detectChanges();
        expect('[host]').toExist();
    });

    it('should show load state', () => {
        expect('footer button').toExist();
        expect('[load]').not.toExist();
        spectator.click('footer button');
        spectator.detectChanges();
        expect('footer button').not.toExist();
        expect('[load]').toExist();
        expect('[load]').toContainText('Requesting desk booking...');
    });
});
