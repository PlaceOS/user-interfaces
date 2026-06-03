import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { VirtualKeyboardComponent } from '@placeos/components';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, firstValueFrom, of } from 'rxjs';

import { BootstrapComponent } from '../app/bootstrap.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        querySystems: jest.fn(),
    };
});

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    let org_service: any;

    const create_component = createRoutingFactory({
        component: BootstrapComponent,
        shallow: true,
        providers: [MockProvider(OrganisationService)],
    });

    beforeEach(() => {
        localStorage.clear();
        sessionStorage.clear();
        VirtualKeyboardComponent.enabled = false;
        org_service = {
            initialised: new BehaviorSubject(true),
            organisation: { id: 'org-1' },
            buildings: [{ id: 'building-1', name: 'HQ' }],
            building_list: of([{ id: 'building-1', name: 'HQ' }]),
            levelWithID: jest.fn(() => ({ id: 'level-1', name: 'Level 1' })),
            limit_init: false,
        };
        (ts_client.querySystems as jest.Mock).mockReturnValue(
            of({
                data: [
                    {
                        id: 'display-1',
                        name: 'Display 1',
                        display_name: 'Display One',
                        zones: ['level-1', 'building-1'],
                    },
                ],
            } as any),
        );
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    function build_component() {
        spectator = create_component({
            providers: [MockProvider(OrganisationService, org_service)],
        });
        return spectator;
    }

    it('should create the component', () => {
        expect(build_component().component).toBeTruthy();
    });

    it('should resolve building and level details for a display', () => {
        build_component();
        const system = {
            id: 'display-1',
            zones: ['level-1', 'building-1'],
        } as any;

        expect(spectator.component.level(system)?.id).toBe('level-1');
        expect(spectator.component.building(system)?.id).toBe('building-1');
    });

    it('should request zones for bootstrap display locations', async () => {
        build_component();

        await firstValueFrom(spectator.component.displays);

        expect(ts_client.querySystems).toHaveBeenCalledWith(
            expect.objectContaining({
                fields: 'id,name,display_name,email,zones',
            }),
        );
    });

    it('should handle displays with no zones in bootstrap location helpers', () => {
        build_component();
        const system = { id: 'display-1' } as any;

        expect(spectator.component.level(system)?.id).toBe('level-1');
        expect(spectator.component.building(system)).toBeUndefined();
        expect(org_service.levelWithID).toHaveBeenCalledWith([]);
    });

    it('should store the selected display and navigate to signage', async () => {
        build_component();
        const router = spectator.inject(Router);
        const set_item_spy = jest.spyOn(Storage.prototype, 'setItem');
        spectator.component.active_display = 'display-1';

        await spectator.component.bootstrapPanel();

        expect(set_item_spy).toHaveBeenCalledWith(
            'PlaceOS.SIGNAGE.display',
            'display-1',
        );
        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-1']);
        expect(spectator.component.loading()).toBe('');
    });

    it('should not bootstrap without a selected display', async () => {
        build_component();
        const router = spectator.inject(Router);
        const set_item_spy = jest.spyOn(Storage.prototype, 'setItem');

        await spectator.component.bootstrapPanel();

        expect(set_item_spy).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('should clear stored bootstrap details from the query string', () => {
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-1');
        localStorage.setItem('PlaceOS.SIGNAGE.building', 'building-1');
        build_component();

        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();

        expect(localStorage.getItem('PlaceOS.SIGNAGE.display')).toBeNull();
        expect(localStorage.getItem('PlaceOS.SIGNAGE.building')).toBeNull();
    });

    it('should bootstrap immediately from the display query parameter', () => {
        build_component();
        const bootstrap_spy = jest.spyOn(spectator.component, 'bootstrapPanel');

        spectator.setRouteQueryParam('display', 'display-2');
        spectator.detectChanges();

        expect(spectator.component.active_display).toBe('display-2');
        expect(bootstrap_spy).toHaveBeenCalled();
    });

    it('should redirect when the app is already bootstrapped', async () => {
        jest.useFakeTimers();
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-3');
        localStorage.setItem('OSK.enabled', 'true');
        build_component();
        const router = spectator.inject(Router);
        await Promise.resolve();

        jest.advanceTimersByTime(1001);

        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-3']);
        expect(VirtualKeyboardComponent.enabled).toBe(true);
        jest.useRealTimers();
    });
});
