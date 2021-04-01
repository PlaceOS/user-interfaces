import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockComponent } from 'ng-mocks';

import { ActionIconComponent } from '../lib/action-icon.component';
import { IconComponent } from '../lib/icon.component';
import { SafePipe } from '../lib/safe.pipe';

describe('ActionIconComponent', () => {
    let spectator: Spectator<ActionIconComponent>;
    const createComponent = createComponentFactory({
        component: ActionIconComponent,
        declarations: [MockComponent(IconComponent), SafePipe],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
