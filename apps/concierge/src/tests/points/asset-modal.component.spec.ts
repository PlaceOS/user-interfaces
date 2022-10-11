import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { CounterComponent, TimeFieldComponent } from '@placeos/form-fields';
import { SpacesService } from '@placeos/spaces';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { DesksStateService } from '../../app/desks/desks-state.service';
import { PointsAssetModalComponent } from '../../app/points/asset-modal.component';

describe('PointsAssetModalComponent', () => {
    let spectator: Spectator<PointsAssetModalComponent>;
    const createComponent = createComponentFactory({
        component: PointsAssetModalComponent,
        providers: [
            MockProvider(SpacesService, { list: new BehaviorSubject([]) }),
            MockProvider(DesksStateService, {
                setFilters: jest.fn(),
                desks: new BehaviorSubject([]),
            }),
            MockProvider(MAT_DIALOG_DATA, {}),
        ],
        declarations: [
            MockComponent(CounterComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MatFormFieldModule,
            MatSelectModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatAutocompleteModule,
            MatCheckboxModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should render prices');
    it.todo('should render percentages');
    it.todo('should allow saving form data');
});
