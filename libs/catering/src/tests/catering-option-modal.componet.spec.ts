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
import {
    CateringItemOptionModalComponent,
    CateringItemOptionModalData,
} from '../lib/catering-option-modal.component';
import { CateringOption } from '../lib/catering.interfaces';

describe('CateringItemOptionModalComponent', () => {
    let spectator: Spectator<CateringItemOptionModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringItemOptionModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SettingsToggleComponent),
        ],
        providers: [{ provide: MAT_DIALOG_DATA, useFactory: () => data }],
        imports: [
            MatAutocompleteModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            ReactiveFormsModule,
        ],
    });

    let data: CateringItemOptionModalData;

    beforeEach(() => {
        data = {
            parent: new CateringItem(),
            option: {} as CateringOption,
            types: [],
        };
    });

    it('should submit updated item option details', async () => {
        spectator = createComponent();
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

    it('should replace the edited option instead of adding a copy', () => {
        const milk = {
            id: 'milk',
            name: 'Milk',
            group: 'Extras',
            multiple: false,
            unit_price: 0,
        };
        const sugar = { ...milk, id: 'sugar', name: 'Sugar' };
        data = {
            parent: new CateringItem({ options: [milk, sugar] }),
            option: milk,
            types: ['Extras'],
        };
        spectator = createComponent();
        const emit = vi.fn();
        spectator.component.event.subscribe(emit);
        spectator.component.model.update((m) => ({ ...m, name: 'Oat milk' }));

        spectator.component.saveChanges();

        const item: CateringItem = emit.mock.calls[0][0].metadata.item;
        expect(item.options.map((o) => [o.id, o.name])).toEqual([
            ['sugar', 'Sugar'],
            ['milk', 'Oat milk'],
        ]);
    });
});
