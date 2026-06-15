import { signal } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    Building,
    BuildingLevel,
    OrganisationService,
    Region,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BootstrapComponent } from '../app/bootstrap.component';

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        providers: [
            MockProvider(OrganisationService, {
                building: new Building({ id: '1' }),
                buildings: [
                    new Building({ id: '1' }),
                    new Building({ id: '2' }),
                ],
                levelsForBuilding: () => [
                    new BuildingLevel({ id: '1' }),
                    new BuildingLevel({ id: '2' }),
                ],
                levelWithID: () => new BuildingLevel({ id: '1' }),
                region_list: signal([new Region({ name: '1', id: '1' })]),
                active_buildings: signal([
                    new Building({ name: '1', id: '1', parent_id: '1' }),
                ]),
                active_levels: signal([
                    new BuildingLevel({ id: '1' }),
                    new BuildingLevel({ id: '2' }),
                ]),
                initialised: signal(true),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => {
        window.PLACEOS_PUBLIC_MODE = false;
        localStorage.clear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow selecting level', async () => {
        expect('[level]').not.toExist();
        expect('mat-select').toHaveLength(1);
        spectator.click('[building]');
        spectator.click(document.querySelector('mat-option'));
        spectator.detectChanges();

        expect(spectator.component.active_building()?.id).toBe('1');
        expect(spectator.component.active_level()).toBeFalsy();
        expect(spectator.component.levels().length).toBe(2);
        expect('[level]').toExist();
        spectator.click('[level]');
        spectator.click(document.querySelector('mat-option'));
        spectator.detectChanges();
        expect(spectator.component.active_level()).toBeTruthy();
    });

    it('should allow selecting orientations', () => {
        // TODO: Add implementation
    });
    it('should handling bootstrapping', () => {
        const spy = jest.spyOn(Storage.prototype, 'setItem');
        expect(localStorage.setItem).not.toHaveBeenCalled();
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        spectator.component.active_building.set(new Building({ id: 'bld-1' }));
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        spectator.component.active_level.set(
            new BuildingLevel({ id: 'lvl-1' }),
        );
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.building',
            'bld-1',
        );
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.level',
            'lvl-1',
        );
        expect(localStorage.setItem).not.toHaveBeenCalledWith(
            'KIOSK.orientation',
            '90',
        );
        expect(localStorage.setItem).not.toHaveBeenCalledWith(
            'KIOSK.location',
            'kiosk-1',
        );
        spectator.component.active_rotation.set({ id: '90', name: '' });
        spectator.component.active_location.set({
            id: 'kiosk-1',
            name: 'South West',
        });
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.orientation',
            '90',
        );
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.location',
            'kiosk-1',
        );
    });

    it('should handle clearing bootstrap details', () => {
        jest.spyOn(Storage.prototype, 'removeItem');
        expect(localStorage.removeItem).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();
        expect(localStorage.removeItem).toHaveBeenCalledWith('KIOSK.building');
        expect(localStorage.removeItem).toHaveBeenCalledWith('KIOSK.level');
        expect(localStorage.removeItem).toHaveBeenCalledWith(
            'KIOSK.orientation',
        );
    });

    it('should navigate to checkin preferences when action is preferences', () => {
        const router = spectator.inject(Router);
        spectator.setRouteQueryParam('action', 'preferences');
        spectator.setRouteQueryParam('token', 'abc.123');
        spectator.component.active_building.set(new Building({ id: 'bld-1' }));
        spectator.component.active_level.set(
            new BuildingLevel({ id: 'lvl-1' }),
        );
        spectator.detectChanges();

        spectator.component.bootstrapKiosk();

        expect(router.navigate).toHaveBeenCalledWith(
            ['/checkin', 'preferences'],
            {
                queryParams: { action: 'preferences', token: 'abc.123' },
            },
        );
    });

    it('should bypass bootstrap when action is preferences on load', async () => {
        const router = spectator.inject(Router);
        spectator.setRouteQueryParam('action', 'preferences');
        spectator.setRouteQueryParam('token', 'abc.123');
        await spectator.component.ngOnInit();

        expect(router.navigate).toHaveBeenCalledWith(
            ['/checkin', 'preferences'],
            {
                queryParams: { action: 'preferences', token: 'abc.123' },
            },
        );
    });

    it('should re-direct if already bootstrapped', fakeAsync(async () => {
        const router = spectator.inject(Router);
        expect(router.navigate).not.toHaveBeenCalled();
        spectator.component.ngOnInit();
        spectator.tick(1001);
        localStorage.setItem('KIOSK.building', '1');
        localStorage.setItem('KIOSK.level', '1');
        expect(router.navigate).not.toHaveBeenCalled();
        spectator.component.ngOnInit();
        spectator.tick(1001);
        // TODO: Fix
        // expect(router.navigate).toHaveBeenCalled();
    }));

    it('should show public mode blocker when enabled', () => {
        window.PLACEOS_PUBLIC_MODE = true;
        spectator.detectChanges();
        expect(spectator.query('h2')?.textContent?.trim()).toBe(
            'Public mode is enabled',
        );
    });
});
