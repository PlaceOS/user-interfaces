import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    Building,
    BuildingLevel,
    OrganisationService,
    Space,
} from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MockProvider } from 'ng-mocks';
import { SpaceDetailsComponent } from '../../lib/space-select-modal/space-details.component';

describe('SpaceDetailsComponent', () => {
    let spectator: Spectator<SpaceDetailsComponent>;
    const level = new BuildingLevel({
        id: 'lvl-1',
        parent_id: 'bld-1',
        name: 'Level 1',
        map_id: 'map-1',
    });
    const building = new Building({ id: 'bld-1', name: 'Building 1' });
    const space = new Space({
        id: 'space-1',
        name: 'Space One',
        map_id: 'area-1',
        zones: ['bld-1', 'lvl-1'],
        capacity: 4,
        features: ['vc'],
    });
    const createComponent = createComponentFactory({
        component: SpaceDetailsComponent,
        providers: [
            MockProvider(OrganisationService, {
                levelWithID: jest.fn((zones: string[]) =>
                    zones?.includes('lvl-1') ? level : null,
                ),
                buildings: [building],
            }),
        ],
        declarations: [
            mockComponent(IconComponent),
            mockComponent(ImageCarouselComponent),
            mockComponent(InteractiveMapComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should show an empty state without a space', () => {
        expect('[empty]').toExist();
        expect('[details]').not.toExist();
    });

    it('should show space details when a space is set', () => {
        spectator.setInput({ space });
        spectator.detectChanges();
        expect('[details]').toExist();
        expect(spectator.query('[actions] h2')).toHaveText('Space One');
    });

    it('should resolve the level and building for the space', () => {
        spectator.setInput({ space });
        expect(spectator.component.level()).toBe(level);
        expect(spectator.component.building()).toBe(building);
    });

    it('should set the map and pin feature from the space', () => {
        spectator.setInput({ space });
        spectator.detectChanges();
        expect(spectator.component.map_url()).toBe('map-1');
        expect(spectator.component.features()).toEqual([
            expect.objectContaining({ location: 'area-1' }),
        ]);
    });

    it('should allow hiding the map', () => {
        spectator.setInput({ space, hide_map: true });
        spectator.detectChanges();
        expect('[map]').not.toExist();
    });

    it('should emit when favourite is toggled', () => {
        spectator.setInput({ space });
        spectator.detectChanges();
        const emit = jest.fn();
        spectator.component.toggleFav.subscribe(emit);
        spectator.click('[name="toggle-space-favourite-details"]');
        expect(emit).toHaveBeenCalled();
    });

    it('should emit when close is pressed', () => {
        spectator.setInput({ space });
        spectator.detectChanges();
        const emit = jest.fn();
        spectator.component.close.subscribe(emit);
        spectator.click('[name="close-space-details"]');
        expect(emit).toHaveBeenCalled();
    });
});
