import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { CateringStateService } from '@placeos/catering';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CheckinPreferencesComponent } from '../../app/checkin/checkin-preferences.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinPreferencesComponent', () => {
    let spectator: SpectatorRouting<CheckinPreferencesComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinPreferencesComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: CheckinStateService,
                useValue: { event: of({}), guest: of({}) },
            },
            {
                provide: CateringStateService,
                useValue: { menu: of([]) },
            },
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
