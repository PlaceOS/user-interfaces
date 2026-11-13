import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { MockComponent, MockProvider } from 'ng-mocks';

import { CateringItem } from '@placeos/common';
import {
    CateringItemModalComponent,
    CateringItemModalData,
} from '../lib/catering-item-modal.component';

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
            { provide: MAT_DIALOG_DATA, useFactory: () => data },
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

    let data: CateringItemModalData;

    beforeEach(() => (data = { item: new CateringItem() }));

    it('should submit the name typed in the form', async () => {
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
        expect(e.metadata.item.name).toBe('Test');
    });

    it('should keep the ID and other fields of an edited item', () => {
        data = {
            item: new CateringItem({
                id: 'item-1',
                name: 'Coffee',
                unit_price: 400,
                hide_for_zones: ['zone-1'],
            }),
        };
        spectator = createComponent();
        const emit = vi.fn();
        spectator.component.event.subscribe(emit);
        spectator.component.model.update((m) => ({ ...m, name: 'Latte' }));

        spectator.component.saveChanges();

        const item: CateringItem = emit.mock.calls[0][0].metadata.item;
        expect([item.id, item.name, item.unit_price]).toEqual([
            'item-1',
            'Latte',
            400,
        ]);
        expect(item.hide_for_zones).toEqual(['zone-1']);
        expect(spectator.component.loading()).toBe(true);
    });

    it('should add trimmed tags, skip blank tags and remove tags', () => {
        spectator = createComponent();
        const input = { value: 'typed' } as HTMLInputElement;
        const addTag = (value: string) =>
            spectator.component.addTag({
                value,
                input,
            } as unknown as MatChipInputEvent);

        addTag(' Vegan ');
        addTag('  ');
        expect(spectator.component.tag_list()).toEqual(['Vegan']);
        expect(input.value).toBe('');

        spectator.component.removeTag('Vegan');
        expect(spectator.component.tag_list()).toEqual([]);
    });
});
