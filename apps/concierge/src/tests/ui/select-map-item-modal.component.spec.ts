import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    BuildingLevel,
    MapsPeopleService,
    OrganisationService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { SelectMapItemModalComponent } from '../../app/ui/select-map-item-modal.component';

describe('SelectMapItemModalComponent', () => {
    let spectator: Spectator<SelectMapItemModalComponent>;
    const levels = signal<any[]>([
        new BuildingLevel({ id: 'lvl-1', name: 'Level 1', map_id: 'map-1' }),
        new BuildingLevel({ id: 'lvl-2', name: 'Level 2', map_id: 'map-2' }),
    ]);

    const createComponent = createComponentFactory({
        component: SelectMapItemModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, {}),
            MockProvider(MapsPeopleService, {
                available: signal(false),
            } as any),
            MockProvider(OrganisationService, {
                active_levels: levels,
            } as any),
        ],
    });

    const withData = (data: any) =>
        createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        });

    it('should map a maps-indoors item into a simplified entry', () => {
        spectator = createComponent();
        const item = spectator.component.itemFromMapsIndoorsItem({
            id: 'raw-id',
            properties: {
                externalId: 'ext-1',
                name: 'Meeting Room',
                building: 'HQ',
                floorName: '3',
            },
            geometry: { bbox: [0, 0, 2, 4] },
        });
        expect(item.id).toBe('ext-1');
        expect(item.name).toBe('Meeting Room');
        expect(item.location).toBe('HQ, Level 3');
        expect(item.area).toBe(8);
    });

    it('should record map info bounds', () => {
        spectator = createComponent();
        const bounds = { 'poi-1': { x: 0, y: 0, w: 1, h: 1 } } as any;
        spectator.component.setMapInfo(bounds);
        expect(spectator.component.map_info()).toBe(bounds);
    });

    it('should bump the changed marker on selection change', () => {
        spectator = createComponent();
        expect(spectator.component.changed()).toBe(0);
        spectator.component.onChange();
        expect(spectator.component.changed()).toBeGreaterThan(0);
    });

    it('should build map features for the selected and hovered ids', () => {
        spectator = createComponent();
        spectator.component.selected.set('poi-selected');
        spectator.component.hovered.set('poi-hovered');
        const locations = spectator.component
            .features()
            .map((_: any) => _.location);
        expect(locations).toContain('poi-selected');
        expect(locations).toContain('poi-hovered');
    });

    it('should seed the selected location from dialog data on init', async () => {
        spectator = withData({ location: 'poi-from-data' });
        await spectator.component.ngOnInit();
        expect(spectator.component.selected()).toBe('poi-from-data');
    });

    it('should pick the level referenced by the dialog data', async () => {
        spectator = withData({ level_id: 'lvl-2' });
        await spectator.component.ngOnInit();
        expect(spectator.component.level().id).toBe('lvl-2');
    });
});
