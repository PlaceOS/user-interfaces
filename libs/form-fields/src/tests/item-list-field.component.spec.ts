import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { ItemListFieldComponent } from '../lib/item-list-field.component';

describe('ItemListFieldComponent', () => {
    let spectator: Spectator<ItemListFieldComponent>;
    const createComponent = createComponentFactory({
        component: ItemListFieldComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatChipsModule, MatFormFieldModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow adding items', () => {
        const input: HTMLInputElement = spectator.query('input');
        expect(spectator.component.value).toHaveLength(0);
        spectator.typeInElement('MyElement', 'input');
        expect(spectator.component.value).toHaveLength(0);
        spectator.component.add({ input, value: input.value } as any);
        spectator.detectChanges();
        expect(spectator.component.value).toHaveLength(1);
        expect('mat-chip-row').toExist();
        expect('mat-chip-row').toContainText('MyElement');
    });

    it('should allow removing items', () => {
        spectator.component.value = ['Element1', 'Element2'];
        spectator.detectChanges();
        expect('mat-chip-row').toHaveLength(2);
        spectator.dispatchFakeEvent('mat-chip-row', 'removed');
        spectator.detectChanges();
        expect('mat-chip-row').toHaveLength(1);
        expect(
            spectator.component.value.find((_) => _ === 'Element1')
        ).toBeFalsy();
        expect(
            spectator.component.value.find((_) => _ === 'Element2')
        ).toBeTruthy();
    });

    it('should allow updating from external values', () => {
        expect('mat-chip-row').toHaveLength(0);
        spectator.component.writeValue(['Element1', 'Element2']);
        spectator.detectChanges();
        expect('mat-chip-row').toHaveLength(2);
    });
});
