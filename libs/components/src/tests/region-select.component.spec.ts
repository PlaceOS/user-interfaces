import { signal } from '@angular/core';
import type { Mock } from 'vitest';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { CustomTooltipData } from '../lib/custom-tooltip.component';
import { IconComponent } from '../lib/icon.component';
import { RegionSelectComponent } from '../lib/region-select.component';

describe('RegionSelectComponent', () => {
    let spectator: Spectator<RegionSelectComponent>;
    let org: any;
    let tooltip: { data: any; close: Mock };

    const REGIONS = [
        { id: 'region-1', name: 'Asia Pacific' },
        { id: 'region-2', name: 'emea', display_name: 'EMEA' },
    ] as any[];

    const createComponent = createComponentFactory({
        component: RegionSelectComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        org = {
            region_list: signal(REGIONS),
            active_region: signal(REGIONS[0]),
            building: { id: 'bld-1' },
            setRegion: vi.fn().mockResolvedValue(undefined),
            setBuilding: vi.fn(),
        };
        tooltip = { data: null, close: vi.fn() };
        spectator = createComponent({
            providers: [
                { provide: OrganisationService, useValue: org },
                { provide: CustomTooltipData, useValue: tooltip },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list the available regions preferring display names', () => {
        const options = spectator.queryAll('mat-radio-button');
        expect(options).toHaveLength(2);
        expect(options[0]).toContainText('Asia Pacific');
        expect(options[1]).toContainText('EMEA');
    });

    it('should show the active region in the header', () => {
        expect('.leading-tight').toContainText('Asia Pacific');
    });

    it('should change region and reload the building on selection', async () => {
        spectator.click(spectator.queryAll('mat-radio-button')[1]);
        await spectator.fixture.whenStable();
        expect(org.setRegion).toHaveBeenCalledWith(REGIONS[1]);
        expect(org.setBuilding).toHaveBeenCalledWith(org.building, true);
        expect(tooltip.close).toHaveBeenCalled();
    });

    it('should close the tooltip when the container is clicked', () => {
        spectator.click(spectator.query('div'));
        expect(tooltip.close).toHaveBeenCalled();
        expect(org.setRegion).not.toHaveBeenCalled();
    });
});
