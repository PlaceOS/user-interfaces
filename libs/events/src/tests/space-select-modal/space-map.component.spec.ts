import { fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService, Space } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { SpaceSelectMapComponent } from '../../lib/space-select-modal/space-map.component';

describe('SpaceSelectMapComponent', () => {
    let spectator: Spectator<SpaceSelectMapComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceSelectMapComponent,
        providers: [
            MockProvider(EventFormService, {
                spaces$: new BehaviorSubject([]),
                available_spaces: new BehaviorSubject([]),
                options$: new BehaviorSubject({}),
                setOptions: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_building: new BehaviorSubject({}),
                active_region: new BehaviorSubject({}),
                buildings: [],
                levelWithID: jest.fn(() => ({})),
                region_list: new BehaviorSubject([]),
                levelsForRegion: jest.fn(() => []),
                levelsForBuilding: jest.fn(() => []),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [MockComponent(InteractiveMapComponent)],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show a map', () => expect('interactive-map').toExist());

    it('should allow selecting spaces', fakeAsync(() => {
        const test_space = new Space({ id: 'test', map_id: 'test-map' });
        const emitted: Space[] = [];
        spectator.component.onSelect.subscribe((space) => {
            emitted.push(space);
        });
        (spectator.inject(EventFormService).available_spaces as any).next([
            test_space,
        ]);
        spectator.detectChanges();
        tick(500);
        const actions = spectator.component.actions();
        expect(actions).toHaveLength(1);
        actions[0].callback();
        expect(emitted).toHaveLength(1);
        expect(emitted[0]).toBe(test_space);
    }));
});
