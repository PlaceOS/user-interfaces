import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockModule } from 'ng-mocks';

import { DeskConfirmModalComponent } from '../lib/desk-confirm-modal.component';

describe('DeskConfirmModalComponent', () => {
    let spectator: Spectator<DeskConfirmModalComponent>;
    const createComponent = createComponentFactory({
        component: DeskConfirmModalComponent,
        shallow: true,
        providers: [
            { provide: SettingsService, useValue: createSettingsServiceMock() },
            { provide: MAT_DIALOG_DATA, useValue: {} },
        ],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatProgressSpinnerModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));
    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow setting the date', () => {
        expect('[date]').toExist();
        expect('div[date]').toExist();
        expect('a-date-field').not.toExist();
    });

    it('should allow setting the host', () => {
        expect('[host]').not.toExist();
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(() => true);
        spectator.detectChanges();
        expect('[host]').toExist();
    });

    it('should show date field', () => {
        spectator.component.can_set_date.set(true);
        spectator.detectChanges();
        expect('div[date]').not.toExist();
        expect('a-date-field').toExist();
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
