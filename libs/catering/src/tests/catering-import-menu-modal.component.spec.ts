import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringItem, DialogEvent } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';

import { CateringImportMenuModalComponent } from '../lib/catering-import-menu-modal.component';

describe('CateringImportMenuModalComponent', () => {
    let spectator: Spectator<CateringImportMenuModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringImportMenuModalComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    /** Import the CSV text and wait for the modal to emit the items */
    const importCsv = (csv: string) => {
        const emitted = new Promise<DialogEvent>((resolve) =>
            spectator.component.event.subscribe(resolve),
        );
        const file = new File([csv], 'menu.csv', { type: 'text/csv' });
        spectator.component.handleFileEvent({
            target: { files: [file] },
        } as unknown as Event);
        return emitted;
    };

    it('should make menu items with the options that point to them', async () => {
        const csv = [
            'ID,Type,Name,Unit Price,Category,Caterer,Description,Tags,Multiple',
            'item-1,Item,Coffee,200,Drinks,Cafe,Hot,,',
            // Options link to an item in the tags or description column
            'option-1,option,Oat milk,50,Milk,,,item-1,false',
            'option-2,OPTION,Sugar,0,Sweet,,item-1,,true',
            'option-3,option,Gravy,0,Sauce,,,item-9,false',
        ].join('\n');

        const event = await importCsv(csv);
        const items = event.metadata as CateringItem[];

        expect(event.reason).toBe('done');
        expect(
            items.map((item) => [item.id, item.name, item.unit_price]),
        ).toEqual([['item-1', 'Coffee', 200]]);
        expect(
            items[0].options.map((o) => [o.id, o.name, o.group, o.multiple]),
        ).toEqual([
            ['option-1', 'Oat milk', 'Milk', false],
            ['option-2', 'Sugar', 'Sweet', true],
        ]);
        expect(spectator.component.loading()).toBe('');
    });

    it('should stop loading when no file is chosen', () => {
        const emit = vi.fn();
        spectator.component.event.subscribe(emit);

        spectator.component.handleFileEvent({
            target: { files: [] },
        } as unknown as Event);

        expect(spectator.component.loading()).toBe('');
        expect(emit).not.toHaveBeenCalled();
    });
});
