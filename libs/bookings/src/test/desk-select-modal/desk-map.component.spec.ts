import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import {
    IconComponent,
    IndoorMapsComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import { Desk } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { DeskMapComponent } from '../../lib/desk-select-modal/desk-map.component';
import { MapsPeopleService, SettingsService } from '@placeos/common';

describe('DeskMapComponent', () => {
    let spectator: Spectator<DeskMapComponent>;
    const createComponent = createComponentFactory({
        component: DeskMapComponent,
        providers: [
            MockProvider(BookingFormService, {
                resources: new BehaviorSubject([]),
                options: new BehaviorSubject({}),
                available_resources: new BehaviorSubject([]),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(MapsPeopleService, {
                use_mapsindoors$: new BehaviorSubject(false),
            } as any),
        ],
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
            MockComponent(IndoorMapsComponent),
        ],
        imports: [
            MockModule(FormsModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show a map', () => expect('interactive-map').toExist());

    it('should show a level select', () => expect('[levels]').toExist());

    it('should allow selecting desk', (done) => {
        const test_space = new Desk({ id: '1' });
        spectator.component.onSelect.subscribe((space) => {
            expect(space).toBe(test_space);
            done();
        });
        (spectator.inject(BookingFormService).available_resources as any).next([
            test_space,
        ]);
        spectator.component.actions.pipe(take(1)).subscribe((actions) => {
            expect(actions).toHaveLength(1);
            actions[0].callback();
        });
    });
});
