import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';
import { MockComponent, MockModule } from 'ng-mocks';

import { MatTooltipModule } from '@angular/material/tooltip';
import { PointsOverviewComponent } from '../../app/points/points-overview.component';

describe('PointsOverviewComponent', () => {
    let spectator: Spectator<PointsOverviewComponent>;
    const createComponent = createComponentFactory({
        component: PointsOverviewComponent,
        providers: [],
        declarations: [
            MockComponent(CounterComponent),
            MockComponent(IconComponent),
        ],
        imports: [FormsModule, MockModule(MatTooltipModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should load points');

    it.todo('should store points');
});
