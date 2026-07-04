import { ApplicationRef, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { BootstrapComponent } from '../app/bootstrap.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        querySystems: jest.fn(),
    };
});

const SYS_ID_KEY = 'PLACEOS.ASSISTANT.system';

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    let org_service: any;

    const create_component = createRoutingFactory({
        component: BootstrapComponent,
        shallow: true,
        providers: [MockProvider(OrganisationService)],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
        sessionStorage.clear();
        org_service = {
            initialised: signal(true),
            organisation: { id: 'org-1' },
            waitUntilInitialised: jest.fn(() => Promise.resolve()),
        };
        (ts_client.querySystems as jest.Mock).mockReturnValue(
            Promise.resolve({
                data: [
                    {
                        id: 'sys-1',
                        name: 'Panel 1',
                        display_name: 'Panel One',
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

    it('should query systems matching the search term', async () => {
        build_component();
        const app_ref = spectator.inject(ApplicationRef);
        spectator.component.system_id.set('pan');
        spectator.detectChanges();
        // Wait for the 300ms search debounce and query to settle
        await app_ref.whenStable();
        spectator.detectChanges();
        await app_ref.whenStable();
        spectator.detectChanges();

        expect(ts_client.querySystems).toHaveBeenCalledWith(
            expect.objectContaining({
                q: 'pan',
                zone_id: 'org-1',
            }),
        );
        expect(spectator.component.space_list().map((_) => _.id)).toEqual([
            'sys-1',
        ]);
    });

    it('should not query systems for short search terms', async () => {
        build_component();
        const app_ref = spectator.inject(ApplicationRef);
        spectator.component.system_id.set('p');
        spectator.detectChanges();
        await app_ref.whenStable();

        expect(ts_client.querySystems).not.toHaveBeenCalled();
        expect(spectator.component.space_list()).toEqual([]);
    });

    it('should store the selected system and navigate to the panel', () => {
        build_component();
        const router = spectator.inject(Router);
        const set_item_spy = jest.spyOn(Storage.prototype, 'setItem');
        spectator.component.system_id.set('sys-1');

        spectator.component.bootstrap();

        expect(set_item_spy).toHaveBeenCalledWith(SYS_ID_KEY, 'sys-1');
        expect(localStorage.getItem('trust')).toBe('true');
        expect(localStorage.getItem('fixed_device')).toBe('true');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/panel', 'sys-1'],
            expect.objectContaining({ queryParamsHandling: 'preserve' }),
        );
        expect(spectator.component.loading()).toBe('');
    });

    it('should redirect immediately when already bootstrapped', () => {
        localStorage.setItem(SYS_ID_KEY, 'sys-existing');
        build_component();
        const router = spectator.inject(Router);

        spectator.detectChanges();

        expect(router.navigate).toHaveBeenCalledWith(
            ['/panel', 'sys-existing'],
            expect.objectContaining({ queryParamsHandling: 'preserve' }),
        );
    });

    it('should bootstrap from the system_id query parameter', () => {
        build_component();
        const bootstrap_spy = jest.spyOn(spectator.component, 'bootstrap');

        spectator.setRouteQueryParam('system_id', 'sys-2');
        spectator.detectChanges();

        expect(spectator.component.system_id()).toBe('sys-2');
        expect(bootstrap_spy).toHaveBeenCalled();
    });

    it('should bootstrap from the legacy sys_id query parameter', () => {
        build_component();
        const bootstrap_spy = jest.spyOn(spectator.component, 'bootstrap');

        spectator.setRouteQueryParam('sys_id', 'sys-3');
        spectator.detectChanges();

        expect(spectator.component.system_id()).toBe('sys-3');
        expect(bootstrap_spy).toHaveBeenCalled();
    });

    it('should clear stored bootstrap details from the query string', () => {
        localStorage.setItem(SYS_ID_KEY, 'sys-old');
        build_component();

        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();

        expect(localStorage.getItem(SYS_ID_KEY)).toBeNull();
    });
});
