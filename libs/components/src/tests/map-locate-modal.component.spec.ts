import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { BuildingLevel, OrganisationService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { InteractiveMapComponent } from '../lib/interactive-map.component';
import {
    Locatable,
    MapLocateModalComponent,
} from '../lib/map-locate-modal.component';

describe('MapLocateModalComponent', () => {
    let spectator: Spectator<MapLocateModalComponent>;
    const zone_level = new BuildingLevel({
        id: 'lvl-2',
        name: 'Level 2',
        map_id: 'map-2.svg',
    });
    const levelWithID = vi.fn((_ids: string[]) => zone_level);

    const createComponent = createComponentFactory({
        component: MapLocateModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: {} },
            { provide: OrganisationService, useValue: { levelWithID } },
        ],
        overrideComponents: [
            [
                MapLocateModalComponent,
                {
                    remove: { imports: [InteractiveMapComponent] },
                    add: { imports: [MockComponent(InteractiveMapComponent)] },
                },
            ],
        ],
    });

    const create = (item: Locatable) =>
        (spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: { item } }],
        }));

    const item = (level: BuildingLevel): Locatable => ({
        id: 'desk-1',
        name: 'Desk 1',
        map_id: 'table-1',
        level,
        zones: ['bld-1', 'lvl-2'],
    });

    afterEach(() => vi.useRealTimers());

    it('should find the level from the zones when the item level has no ID', () => {
        create(item(new BuildingLevel({ name: 'Unknown' })));

        expect(levelWithID).toHaveBeenCalledWith(['bld-1', 'lvl-2']);
        expect(spectator.component.level()).toBe(zone_level);
        expect('interactive-map').toExist();
        expect(spectator.element).toContainText('Level 2');
    });

    it('should pin the item on the map and hide the zone layer', () => {
        vi.useFakeTimers();
        create(item(new BuildingLevel({ id: 'lvl-1', map_id: 'map-1.svg' })));
        expect(spectator.component.level().id).toBe('lvl-1');

        vi.advanceTimersByTime(1000);

        expect(spectator.component.features()).toEqual([
            expect.objectContaining({
                location: 'table-1',
                data: { message: 'Desk 1' },
            }),
        ]);
        expect(spectator.component.style_map()).toEqual({
            '#zones': { display: 'none' },
            '#Zones': { display: 'none' },
        });
    });
});
