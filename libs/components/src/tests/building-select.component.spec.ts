import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { BuildingSelectComponent } from '../lib/building-select.component';
import { CustomTooltipData } from '../lib/custom-tooltip.component';
import { IconComponent } from '../lib/icon.component';

describe('BuildingSelectComponent', () => {
    let spectator: Spectator<BuildingSelectComponent>;

    const buildings = [
        { id: 'bld-1', name: 'Alpha' },
        { id: 'bld-2', name: 'Beta', display_name: 'Beta Tower' },
    ] as unknown[];
    const regions = [
        { id: 'region-1', name: 'Asia Pacific' },
        { id: 'region-2', name: 'emea', display_name: 'EMEA' },
    ] as unknown[];
    const org_mock = {
        active_buildings: signal(buildings),
        active_building: signal(buildings[0]),
        region_list: signal(regions),
        active_region: signal(regions[0]),
        building: { id: 'bld-1' },
        setBuilding: vi.fn(),
        setRegion: vi.fn().mockResolvedValue(undefined),
    };
    const tooltip_mock = { data: null as unknown, close: vi.fn() };

    const createComponent = createComponentFactory({
        component: BuildingSelectComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            { provide: OrganisationService, useValue: org_mock },
            { provide: CustomTooltipData, useValue: tooltip_mock },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        tooltip_mock.data = null;
        org_mock.active_building.set(buildings[0]);
        spectator = createComponent();
    });

    it('should show the active building in the header', () => {
        expect('button[back]').toContainText('Alpha');
        org_mock.active_building.set(buildings[1]);
        spectator.detectChanges();
        expect('button[back]').toContainText('Beta Tower');
    });

    it('should list an option for each building', () => {
        const options = spectator.queryAll('mat-radio-button');
        expect(options).toHaveLength(2);
        expect(options[0]).toContainText('Alpha');
        expect(options[1]).toContainText('Beta Tower');
    });

    it('should set the active building when an option is selected', () => {
        const options = spectator.queryAll('mat-radio-button');
        spectator.click(options[1]);
        expect(org_mock.setBuilding).toHaveBeenCalledWith(buildings[1], true);
        expect(tooltip_mock.close).toHaveBeenCalled();
    });

    it('should close the tooltip when clicked', () => {
        spectator.click('button[back]');
        expect(tooltip_mock.close).toHaveBeenCalled();
        expect(org_mock.setBuilding).not.toHaveBeenCalled();
    });

    it('should only pick a building on Enter after arrow keys move the selection', () => {
        const group = spectator.query('mat-radio-group');
        const option = spectator.queryAll('mat-radio-button')[1];
        const key = (el: Element, type: string, key: string) =>
            el.dispatchEvent(new KeyboardEvent(type, { key, bubbles: true }));
        // Browsers click the radio that an arrow key moves to
        key(group, 'keydown', 'ArrowDown');
        spectator.click(option);
        key(group, 'keyup', 'ArrowDown');
        expect(org_mock.setBuilding).not.toHaveBeenCalled();
        expect(tooltip_mock.close).not.toHaveBeenCalled();

        key(option, 'keydown', 'Enter');
        expect(org_mock.setBuilding).toHaveBeenCalledWith(buildings[1], true);
        expect(tooltip_mock.close).toHaveBeenCalled();
    });

    describe('with region data', () => {
        beforeEach(() => {
            tooltip_mock.data = 'region';
            spectator = createComponent();
        });

        it('should list the regions and show the active one', () => {
            const options = spectator.queryAll('mat-radio-button');
            expect(options).toHaveLength(2);
            expect(options[0]).toContainText('Asia Pacific');
            expect(options[1]).toContainText('EMEA');
            expect('button[back]').toContainText('Asia Pacific');
        });

        it('should change region and reload the building on selection', async () => {
            spectator.click(spectator.queryAll('mat-radio-button')[1]);
            await spectator.fixture.whenStable();
            expect(org_mock.setRegion).toHaveBeenCalledWith(regions[1]);
            expect(org_mock.setBuilding).toHaveBeenCalledWith(
                org_mock.building,
                true,
            );
            expect(tooltip_mock.close).toHaveBeenCalled();
        });
    });
});
