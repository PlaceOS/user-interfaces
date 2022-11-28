import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent, SafePipe } from '@placeos/components';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { CateringItemFiltersComponent } from '../../lib/catering-order-modal/catering-item-filters.component';
import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';

describe('CateringItemFiltersComponent', () => {
    let spectator: Spectator<CateringItemFiltersComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemFiltersComponent,
        providers: [
            {
                provide: CateringOrderStateService,
                useValue: {
                    setFilters: jest.fn(),
                    filters: new BehaviorSubject({ tags: [] }),
                    categories: new BehaviorSubject(["meals", "coffee"])
                },
            },
        ],
        declarations: [MockComponent(IconComponent), MockPipe(SafePipe)],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatCheckboxModule),
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow updating search string', () => {
        spectator.triggerEventHandler('input', 'ngModelChange', 'test');
        expect(spectator.inject(CateringOrderStateService).setFilters).toBeCalledWith({ search: 'test' });
    });

    it('should allow toggling tag filters', () => {
        expect('[name="meals"]').toExist();
        expect('[name="coffee"]').toExist();
    });
});
