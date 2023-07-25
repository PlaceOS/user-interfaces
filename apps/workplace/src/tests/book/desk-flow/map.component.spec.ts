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
import { MockComponent, MockProvider } from 'ng-mocks';

import { DeskFlowDetailedFormComponent } from 'apps/workplace/src/app/book/desk-flow/detailed-form.component';
import { DeskFlowMapComponent } from 'apps/workplace/src/app/book/desk-flow/map.component';
import { MatMenuModule } from '@angular/material/menu';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from '@placeos/common';

describe('DeskFlowMapComponent', () => {
    let spectator: SpectatorRouting<DeskFlowMapComponent>;
    const createComponent = createRoutingFactory({
        component: DeskFlowMapComponent,
        providers: [
            MockProvider(BookingFormService, {
                setOptions: jest.fn(),
                form: generateBookingForm(new Booking()),
                resources: new BehaviorSubject([]),
                options: new BehaviorSubject({}),
                available_resources: new BehaviorSubject([]),
                loading: new BehaviorSubject(false),
            } as any),
            MockProvider(ExploreStateService, {
                setOptions: jest.fn(),
                map_url: new BehaviorSubject(''),
                map_styles: new BehaviorSubject({}),
                map_positions: new BehaviorSubject({}),
                map_features: new BehaviorSubject({}),
                map_actions: new BehaviorSubject({}),
                map_labels: new BehaviorSubject({}),
                level: new BehaviorSubject({}),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
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

    it('should list available desks', () => {
        expect('li').toHaveLength(0);
        const service = spectator.inject(BookingFormService);
        (service as any).available_resources.next([{ id: '1' }, { id: '2' }]);
        spectator.detectChanges();
        expect('li').toHaveLength(2);
    });
});
