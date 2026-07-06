import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringItem } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';

import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { CateringItemOptionModalComponent } from '../lib/catering-option-modal.component';

describe('CateringItemOptionModalComponent', () => {
    let spectator: Spectator<CateringItemOptionModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringItemOptionModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SettingsToggleComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    parent: new CateringItem(),
                    option: {},
                },
            },
        ],
        imports: [
            MatAutocompleteModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        spectator.component.loading.set(true);
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should submit updated item option details', async () => {
        const emitted = new Promise<any>((resolve) => {
            spectator.component.event.subscribe((e) => resolve(e));
        });
        const name_input =
            spectator.queryAll<HTMLInputElement>('input[matInput]')[0];
        spectator.typeInElement('Test', name_input);
        spectator.detectChanges();
        spectator.click('footer button');
        const e = await emitted;
        expect(e.reason).toBe('done');
        expect(e.metadata.item.options).toHaveLength(1);
        expect(e.metadata.item.options[0].name).toBe('Test');
    });
});
