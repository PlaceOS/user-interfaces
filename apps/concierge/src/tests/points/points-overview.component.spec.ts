import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';
import { MockComponent } from 'ng-mocks';

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
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should load points');

    it.todo('should store points');
});
