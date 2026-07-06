import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { MockComponent, MockProvider } from 'ng-mocks';

import { CateringItem } from '@placeos/common';
import { CateringItemModalComponent } from '../lib/catering-item-modal.component';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { ImageListFieldComponent } from 'libs/form-fields/src/lib/image-list-field.component';

describe('CateringItemModalComponent', () => {
    let spectator: Spectator<CateringItemModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringItemModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CounterComponent),
            mockComponent(ImageListFieldComponent),
            MockComponent(SettingsToggleComponent),
        ],
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                item: new CateringItem(),
                catergories: {},
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [
            MatAutocompleteModule,
            MatChipsModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            ReactiveFormsModule,
            MatProgressSpinnerModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
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
        expect(e.metadata.item).toBeTruthy();
        expect(e.metadata.item.name).toBe('Test');
    });
});
