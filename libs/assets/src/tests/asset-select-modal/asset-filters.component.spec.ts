import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { AssetFiltersComponent } from '../../lib/asset-select-modal/asset-filters.component';

describe('AssetFiltersComponent', () => {
    let spectator: Spectator<AssetFiltersComponent>;
    const createComponent = createRoutingFactory({
        component: AssetFiltersComponent,
        providers: [MockProvider(SettingsService, { get: jest.fn() })],
        declarations: [
            MockComponent(DurationFieldComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(ReactiveFormsModule),
            MockModule(FormsModule),
            MockModule(MatTooltipModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
