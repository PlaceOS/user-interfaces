import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent, InteractiveMapComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { SpaceSelectMapComponent } from '../../lib/space-select-modal/space-map.component';
import { Space } from '../../lib/spaces';

describe('SpaceSelectMapComponent', () => {
    let spectator: Spectator<SpaceSelectMapComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceSelectMapComponent,
        providers: [
            MockProvider(EventFormService, {
                available_spaces: new BehaviorSubject([]),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show a map', () => expect('i-map').toExist());

    it('should show a zoom controls', () => expect('[zoom]').toExist());

    it('should show a level select', () => expect('[levels]').toExist());

    it('should allow changing the zoom level', () => {
        expect(spectator.component.zoom).toBe(1);
        spectator.click('[name="space-map-zoom-in"]');
        expect(spectator.component.zoom).toBe(1.1);
        spectator.click('[name="space-map-zoom-out"]');
        expect(spectator.component.zoom).toBe(1);
    });

    it('should allow selecting spaces', (done) => {
        const test_space = new Space({ id: 'test' });
        spectator.component.onSelect.subscribe((space) => {
            expect(space).toBe(test_space);
            done();
        });
        (spectator.inject(EventFormService).available_spaces as any).next([
            test_space,
        ]);
        spectator.component.actions.pipe(take(1)).subscribe((actions) => {
            expect(actions).toHaveLength(1);
            actions[0].callback();
        });
    });
});
