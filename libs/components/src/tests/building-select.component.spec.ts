import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { OrganisationService } from '@placeos/common';
import { BuildingSelectComponent } from '../lib/building-select.component';
import { CustomTooltipData } from '../lib/custom-tooltip.component';

describe('BuildingSelectComponent', () => {
    let spectator: Spectator<BuildingSelectComponent>;

    const buildings = [
        { id: 'bld-1', name: 'Alpha' },
        { id: 'bld-2', name: 'Beta', display_name: 'Beta Tower' },
    ] as any[];
    const org_mock = {
        active_buildings: signal(buildings),
        active_building: signal(buildings[0]),
        setBuilding: jest.fn(),
    };
    const tooltip_mock = { data: null, close: jest.fn() };

    const createComponent = createComponentFactory({
        component: BuildingSelectComponent,
        providers: [
            { provide: OrganisationService, useValue: org_mock },
            { provide: CustomTooltipData, useValue: tooltip_mock },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        org_mock.active_building.set(buildings[0]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the active building in the header', () => {
        expect('div[matRipple]').toContainText('Alpha');
        org_mock.active_building.set(buildings[1]);
        spectator.detectChanges();
        expect('div[matRipple]').toContainText('Beta Tower');
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
        spectator.click('div[matRipple]');
        expect(tooltip_mock.close).toHaveBeenCalled();
        expect(org_mock.setBuilding).not.toHaveBeenCalled();
    });
});
