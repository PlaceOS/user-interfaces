import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringMenuComponent } from '../lib/catering-menu.component';
import { CateringMenuItemComponent } from '../lib/catering-menu-item.component';
import { CateringStateService } from '../lib/catering-state.service';
import { MatTabsModule } from '@angular/material/tabs';
import { IconComponent } from '@placeos/components';

describe('CateringMenuComponent', () => {
    let spectator: Spectator<CateringMenuComponent>;
    const createComponent = createComponentFactory({
        component: CateringMenuComponent,
        declarations: [
            MockComponent(CateringMenuItemComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(CateringStateService, {
                menu: new BehaviorSubject([]),
                categories: [],
            }),
        ],
        imports: [MockModule(MatTabsModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show tabs', () => {
        expect('mat-tab[label="All Items"]').toExist();
        expect('p').toContainText('No items in menu');
        expect('div[catering-menu-item]').not.toExist();
        const service = spectator.inject(CateringStateService);
        (service.menu as any).next([{}]);
        spectator.detectChanges();
        expect('div[catering-menu-item]').toExist();
        expect('p').not.toContainText('No items in menu');
        (service.categories as any) = ['Second'];
        spectator.detectChanges();
        expect('mat-tab[label="Second"]').toExist();
        spectator.click(document.querySelectorAll('[role="tab"]')[1]);
        spectator.detectChanges();
        expect('div[catering-menu-item]').toHaveLength(1);
        (service.menu as any).next([{}, { category: 'Second' }]);
        spectator.detectChanges();
        expect('div[catering-menu-item]').toHaveLength(3);
    });
});
