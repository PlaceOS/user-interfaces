import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { CateringItem } from '../lib/catering-item.class';

import { CateringMenuItemComponent } from '../lib/catering-menu-item.component';
import { CateringStateService } from '../lib/catering-state.service';

describe('CateringMenuItemComponent', () => {
    let spectator: Spectator<CateringMenuItemComponent>;
    const createComponent = createComponentFactory({
        component: CateringMenuItemComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(CateringStateService, {
                addOption: jest.fn(),
                deleteOption: jest.fn(),
                addItem: jest.fn(),
                removeItem: jest.fn(),
                currency: of('USD'),
                is_editable: true
            } as any),
        ],
        imports: [MatMenuModule, MockModule(MatCheckboxModule), FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show item and item actions', () => {
        const service = spectator.inject(CateringStateService);
        expect('[item]').not.toExist();
        spectator.setInput({
            item: new CateringItem({ name: 'Item', category: 'Test Menu' }),
        });
        spectator.detectChanges();
        expect('[item]').toExist();
        expect('[options] > div').not.toExist();
        spectator.setInput({
            item: new CateringItem({
                name: 'Item 2',
                category: 'Test Menu',
                options: [{} as any],
            }),
        });
        spectator.detectChanges();
        expect('[options] > div').toExist();
        spectator.click('[options] > div button[edit]');
        expect(service.addOption).toHaveBeenCalledTimes(1);
        spectator.click('[options] > div button[remove]');
        expect(service.deleteOption).toHaveBeenCalledTimes(1);
        // TODO: check item buttons work
    });
});
