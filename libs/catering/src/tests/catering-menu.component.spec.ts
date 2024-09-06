import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringMenuComponent } from '../lib/catering-menu.component';
import { CateringStateService } from '../lib/catering-state.service';
import { MatTabsModule } from '@angular/material/tabs';
import { IconComponent } from '@placeos/components';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';

describe('CateringMenuComponent', () => {
    let spectator: Spectator<CateringMenuComponent>;
    const createComponent = createComponentFactory({
        component: CateringMenuComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
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

    it('should show table', () => {
        expect('simple-table').toExist();
    });
});
