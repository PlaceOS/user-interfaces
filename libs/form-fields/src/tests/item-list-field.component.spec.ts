import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';
import { ItemListFieldComponent } from '../lib/item-list-field.component';

const chipEvent = (input: HTMLInputElement, value: string): MatChipInputEvent =>
    ({ input, value }) as unknown as MatChipInputEvent;

describe('ItemListFieldComponent', () => {
    let spectator: Spectator<ItemListFieldComponent<any>>;
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
        expect(spectator.component.value()).toHaveLength(0);
        spectator.typeInElement('MyElement', 'input');
        expect(spectator.component.value()).toHaveLength(0);
        spectator.component.add(chipEvent(input, input.value));
        spectator.detectChanges();
        expect(spectator.component.value()).toHaveLength(1);
        expect('mat-chip-row').toExist();
        expect('mat-chip-row').toContainText('MyElement');
    });

    it('should not allow adding duplicate items', () => {
        const input: HTMLInputElement = spectator.query('input');
        spectator.component.writeValue(['Element1']);
        spectator.component.add(
            chipEvent(input, 'Element1, Element2, Element1'),
        );

        expect(spectator.component.value()).toEqual(['Element1', 'Element2']);
    });

    it('should allow removing items', () => {
        spectator.component.writeValue(['Element1', 'Element2']);
        spectator.detectChanges();
        expect('mat-chip-row').toHaveLength(2);
        spectator.dispatchFakeEvent('mat-chip-row', 'removed');
        spectator.detectChanges();
        expect('mat-chip-row').toHaveLength(1);
        expect(
            spectator.component.value().find((_) => _ === 'Element1'),
        ).toBeFalsy();
        expect(
            spectator.component.value().find((_) => _ === 'Element2'),
        ).toBeTruthy();
    });

    it('should allow updating from external values', () => {
        expect('mat-chip-row').toHaveLength(0);
        spectator.component.writeValue(['Element1', 'Element2']);
        spectator.detectChanges();
        expect('mat-chip-row').toHaveLength(2);
    });

    it('should not mutate external values when adding items', () => {
        const value = ['Element1'];
        const input: HTMLInputElement = spectator.query('input');
        spectator.component.writeValue(value);
        spectator.component.add(chipEvent(input, 'Element2'));

        expect(value).toEqual(['Element1']);
        expect(spectator.component.value()).toEqual(['Element1', 'Element2']);
    });

    it('should not mutate external values when removing items', () => {
        const value = ['Element1', 'Element2'];
        spectator.component.writeValue(value);
        spectator.component.remove('Element1');

        expect(value).toEqual(['Element1', 'Element2']);
        expect(spectator.component.value()).toEqual(['Element2']);
    });

    it('should remove the selected item when duplicate values exist', () => {
        spectator.component.writeValue(['Element1', 'Element2', 'Element1']);
        spectator.detectChanges();
        spectator.dispatchFakeEvent(
            spectator.queryAll('mat-chip-row')[2],
            'removed',
        );

        expect(spectator.component.value()).toEqual(['Element1', 'Element2']);
    });

    it('should suggest matching options that have not been added', () => {
        spectator.setInput('options', ['Lobby', 'News', 'Lift Lobby']);
        expect(spectator.component.matching_options()).toEqual([
            'Lobby',
            'News',
            'Lift Lobby',
        ]);
        spectator.component.search.set('lob');
        expect(spectator.component.matching_options()).toEqual([
            'Lobby',
            'Lift Lobby',
        ]);
        spectator.component.writeValue(['Lobby']);
        expect(spectator.component.matching_options()).toEqual(['Lift Lobby']);
    });

    it('should add items picked from the suggestions', () => {
        spectator.setInput('options', ['Lobby', 'News']);
        spectator.typeInElement('lob', 'input');
        spectator.component.addSuggestion('Lobby');
        spectator.detectChanges();

        expect(spectator.component.value()).toEqual(['Lobby']);
        expect(spectator.component.search()).toBe('');
        expect(spectator.query<HTMLInputElement>('input').value).toBe('');
    });

    it('should still allow adding items that are not suggested', () => {
        const input: HTMLInputElement = spectator.query('input');
        spectator.setInput('options', ['Lobby', 'News']);
        spectator.component.add(chipEvent(input, 'Cafeteria'));

        expect(spectator.component.value()).toEqual(['Cafeteria']);
    });
});
