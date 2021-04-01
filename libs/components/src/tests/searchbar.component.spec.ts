import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { SearchbarComponent } from '../lib/searchbar.component';

describe('SearchbarComponent', () => {
    let spectator: Spectator<SearchbarComponent>;
    const createComponent = createComponentFactory({
        component: SearchbarComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatProgressSpinnerModule, FormsModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
