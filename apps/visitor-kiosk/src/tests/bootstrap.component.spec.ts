import { fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
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
                initialised: of(true),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow selecting level', () => {
        expect('[level]').not.toExist();
        expect('mat-select').toHaveLength(1);
        spectator.click('[building]');
        spectator.click(document.querySelector('mat-option'));
        spectator.detectChanges();

        expect(spectator.component.active_building.id).toBe('1');
        expect(spectator.component.active_level).toBeFalsy();
        expect(spectator.component.levels.length).toBe(2);
        expect('[level]').toExist();
        spectator.click('[level]');
        spectator.click(document.querySelector('mat-option'));
        spectator.detectChanges();
        expect(spectator.component.active_level).toBeTruthy();
    });

    it('should allow selecting orientations', () => {
        // TODO: Add implementation
    });
    it('should handling bootstrapping', () => {
        const spy = jest.spyOn(Storage.prototype, 'setItem');
        expect(localStorage.setItem).not.toHaveBeenCalled();
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        spectator.component.active_building = new Building({ id: 'bld-1' });
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).not.toHaveBeenCalled();
        spectator.component.active_level = new BuildingLevel({ id: 'lvl-1' });
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.building',
            'bld-1'
        );
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.level',
            'lvl-1'
        );
        expect(localStorage.setItem).not.toHaveBeenCalledWith(
            'KIOSK.orientation',
            '90'
        );
        expect(localStorage.setItem).not.toHaveBeenCalledWith(
            'KIOSK.location',
            'kiosk-1'
        );
        spectator.component.active_rotation = { id: '90', name: '' };
        spectator.component.active_location = {
            id: 'kiosk-1',
            name: 'South West',
        };
        spectator.component.bootstrapKiosk();
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.orientation',
            '90'
        );
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'KIOSK.location',
            'kiosk-1'
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
            'KIOSK.orientation'
        );
    });

    it('should re-direct if already bootstrapped', fakeAsync(() => {
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
        // expect(router.navigate).toHaveBeenCalledWith(['/welcome']);
    }));
});
