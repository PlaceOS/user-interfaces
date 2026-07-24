import { signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent, SettingsToggleComponent } from '@placeos/components';
import { SpacesService } from '@placeos/events';
import { CounterComponent, TimeFieldComponent } from '@placeos/form-fields';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { DesksStateService } from '../../app/desks/desks-state.service';
import { PointsAssetModalComponent } from '../../app/points/asset-modal.component';

describe('PointsAssetModalComponent', () => {
    let spectator: Spectator<PointsAssetModalComponent>;
    const createComponent = createComponentFactory({
        component: PointsAssetModalComponent,
        providers: [
            MockProvider(SpacesService, { list: new BehaviorSubject([]) } as any),
            MockProvider(DesksStateService, {
                setFilters: vi.fn(),
                desks: signal([]),
            } as any),
            MockProvider(MAT_DIALOG_DATA, {}),
        ],
        declarations: [
            mockComponent(CounterComponent),
            mockComponent(TimeFieldComponent),
            mockComponent(IconComponent),
            mockComponent(SettingsToggleComponent),
        ],
        imports: [
            NoopAnimationsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatInputModule,
            MatProgressSpinnerModule,
            MatAutocompleteModule,
            MatCheckboxModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it.todo('should create component');

    it.todo('should render prices');
    it.todo('should render percentages');
    it.todo('should allow saving form data');
});
