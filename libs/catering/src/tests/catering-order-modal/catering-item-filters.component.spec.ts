import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, SafePipe } from '@placeos/components';
import { MockComponent, MockModule, MockPipe, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { CateringItemFiltersComponent } from '../../lib/catering-order-modal/catering-item-filters.component';
import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsService } from '@placeos/common';

describe('CateringItemFiltersComponent', () => {
    let spectator: Spectator<CateringItemFiltersComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemFiltersComponent,
        providers: [
            MockProvider(CateringOrderStateService, {
                setFilters: jest.fn(),
                getFilters: jest.fn(() => ({})),
                filters: new BehaviorSubject({ tags: [] }),
                categories: new BehaviorSubject(['meals', 'coffee']),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockPipe(SafePipe),
            MockComponent(DurationFieldComponent),
        ],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatCheckboxModule),
            MockModule(MatTooltipModule),
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow updating search string', () => {
        spectator.triggerEventHandler('input', 'ngModelChange', 'test');
        expect(
            spectator.inject(CateringOrderStateService).setFilters
        ).toBeCalledWith({ search: 'test' });
    });

    it('should allow toggling tag filters', () => {
        expect('[name="meals"]').toExist();
        expect('[name="coffee"]').toExist();
    });
});
