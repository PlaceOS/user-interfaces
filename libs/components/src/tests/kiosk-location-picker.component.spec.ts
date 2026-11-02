import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import {
    Building,
    BuildingLevel,
    OrganisationService,
    Region,
} from '@placeos/common';
import {
    KioskLocationPickerComponent,
    saveKioskLocation,
} from '../lib/kiosk-location-picker.component';

describe('KioskLocationPickerComponent', () => {
    let spectator: Spectator<KioskLocationPickerComponent>;
    const createComponent = createComponentFactory({
        component: KioskLocationPickerComponent,
        providers: [
            MockProvider(OrganisationService, {
                region_list: signal([new Region({ name: '1', id: '1' })]),
                active_buildings: signal([
                    new Building({ name: '1', id: '1', parent_id: '1' }),
                ]),
                active_levels: signal([
                    new BuildingLevel({ id: '1' }),
                    new BuildingLevel({ id: '2' }),
                ]),
            }),
        ],
    });

    beforeEach(() => {
        localStorage.clear();
        spectator = createComponent();
    });

    afterEach(() => localStorage.clear());

    it('should allow submit once a level is selected', () => {
        const submitted = vi.fn();
        spectator.output('submitted').subscribe(submitted);
        expect('[level]').not.toExist();
        expect('mat-select').toHaveLength(1);
        expect('button').toBeDisabled();
        spectator.click('[building]');
        spectator.click(document.querySelector('mat-option'));
        spectator.detectChanges();

        expect(spectator.component.active_building()?.id).toBe('1');
        expect(spectator.component.active_level()).toBeFalsy();
        expect('[level]').toExist();
        expect('button').toBeDisabled();
        spectator.click('[level]');
        spectator.click(document.querySelector('mat-option'));
        spectator.detectChanges();
        expect('button').not.toBeDisabled();

        spectator.click('button');
        expect(submitted).toHaveBeenCalledWith({
            building: spectator.component.active_building(),
            level: spectator.component.active_level(),
            orientation: null,
            location: null,
        });
    });

    it('should clear the location when the level changes', () => {
        const [first, second] = [
            new BuildingLevel({
                id: '1',
                locations: [{ id: 'k1', name: 'K1' }],
            }),
            new BuildingLevel({ id: '2' }),
        ];
        spectator.component.setLevel(first);
        spectator.component.active_location.set(first.locations[0]);
        spectator.component.setLevel(second);
        expect(spectator.component.active_level()).toBe(second);
        expect(spectator.component.active_location()).toBeNull();
    });

    it('should save the kiosk location', () => {
        localStorage.setItem('KIOSK.orientation', '180');
        localStorage.setItem('KIOSK.location', 'old-kiosk');
        const level = new BuildingLevel({ id: 'lvl-1', parent_id: 'bld-0' });
        saveKioskLocation({
            building: null,
            level,
            orientation: null,
            location: null,
        });
        expect(localStorage.getItem('KIOSK.building')).toBe('bld-0');
        expect(localStorage.getItem('KIOSK.level')).toBe('lvl-1');
        expect(localStorage.getItem('KIOSK.orientation')).toBeNull();
        expect(localStorage.getItem('KIOSK.location')).toBeNull();

        saveKioskLocation({
            building: new Building({ id: 'bld-1' }),
            level,
            orientation: { id: '90', name: '' },
            location: { id: 'kiosk-1', name: 'South West' },
        });
        expect(localStorage.getItem('KIOSK.building')).toBe('bld-1');
        expect(localStorage.getItem('KIOSK.orientation')).toBe('90');
        expect(localStorage.getItem('KIOSK.location')).toBe('kiosk-1');
    });
});
