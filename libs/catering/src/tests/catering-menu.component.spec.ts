import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringMenuComponent } from '../lib/catering-menu.component';
import { CateringMenuItemComponent } from '../lib/catering-menu-item.component';
import { CateringStateService } from '../lib/catering-state.service';
import { MatTabsModule } from '@angular/material/tabs';

describe('CateringMenuComponent', () => {
    let spectator: Spectator<CateringMenuComponent>;
    const createComponent = createComponentFactory({
        component: CateringMenuComponent,
        declarations: [MockComponent(CateringMenuItemComponent)],
        providers: [
            {
                provide: CateringStateService,
                useValue: {
                    menu: new BehaviorSubject([]),
                    categories: [],
                },
            },
        ],
        imports: [MatTabsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show tabs', () => {
        expect('.mat-tab-label-content').toContainText('All Items');
        expect('p').toContainText('No items in menu');
        expect('div[catering-menu-item]').not.toExist();
        const service = spectator.inject(CateringStateService);
        (service.menu as any).next([{}]);
        spectator.detectChanges();
        expect('div[catering-menu-item]').toExist();
        expect('p').not.toContainText('No items in menu');
        (service.categories as any) = ['Second'];
        spectator.detectChanges();
        expect('.mat-tab-label-content').toContainText('Second');
        spectator.click(document.querySelectorAll('[role="tab"]')[1]);
        spectator.detectChanges();
        expect('div[catering-menu-item]').toHaveLength(1);
        (service.menu as any).next([{}, { category: 'Second' }]);
        spectator.detectChanges();
        expect('div[catering-menu-item]').toHaveLength(2);
    });
});
