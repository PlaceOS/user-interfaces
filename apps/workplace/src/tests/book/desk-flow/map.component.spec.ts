import { FormsModule } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    Booking,
    BookingFormService,
    generateBookingForm,
} from '@placeos/bookings';
import { IconComponent, InteractiveMapComponent } from '@placeos/components';
import { ExploreStateService } from '@placeos/explore';
import { ActionFieldComponent } from '@placeos/form-fields';
import { MockComponent } from 'ng-mocks';

import { DeskFlowDetailedFormComponent } from 'apps/workplace/src/app/book/desk-flow/detailed-form.component';
import { DeskFlowMapComponent } from 'apps/workplace/src/app/book/desk-flow/map.component';
import { MatMenuModule } from '@angular/material/menu';
import { BehaviorSubject } from 'rxjs';

describe('DeskFlowMapComponent', () => {
    let spectator: SpectatorRouting<DeskFlowMapComponent>;
    const createComponent = createRoutingFactory({
        component: DeskFlowMapComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    setOptions: jest.fn(),
                    form: generateBookingForm(new Booking()),
                    available_assets: new BehaviorSubject([]),
                },
            },
            {
                provide: ExploreStateService,
                useValue: { setOptions: jest.fn() },
            },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ActionFieldComponent),
            MockComponent(DeskFlowDetailedFormComponent),
            MockComponent(InteractiveMapComponent),
        ],
        imports: [FormsModule, MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it('should list available desks', () => {
        expect('li').toHaveLength(0);
        const service = spectator.inject(BookingFormService);
        (service as any).available_assets.next([{ id: '1' }, { id: '2' }]);
        spectator.detectChanges();
        expect('li').toHaveLength(2);
    });
});
