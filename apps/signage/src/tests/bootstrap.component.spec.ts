import { signal, type WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { VirtualKeyboardComponent } from '@placeos/components';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { BootstrapComponent } from '../app/bootstrap.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    let org_service: any;
    let templates_enabled: WritableSignal<boolean>;

    const create_component = createRoutingFactory({
        component: BootstrapComponent,
        shallow: true,
        providers: [MockProvider(OrganisationService)],
    });

    beforeEach(() => {
        localStorage.clear();
        sessionStorage.clear();
        VirtualKeyboardComponent.enabled = false;
        templates_enabled = signal(false);
        org_service = {
            initialised: signal(true),
            organisation: { id: 'org-1' },
            buildings: [{ id: 'building-1', name: 'HQ' }],
            building_list: signal([{ id: 'building-1', name: 'HQ' }]),
            levelWithID: vi.fn(() => ({ id: 'level-1', name: 'Level 1' })),
            limit_init: false,
        };
        (ts_client.querySystems as any).mockReturnValue(
            Promise.resolve({
                data: [
                    {
                        id: 'display-1',
                        name: 'Display 1',
                        display_name: 'Display One',
                        zones: ['level-1', 'building-1'],
                    },
                ],
            }),
        );
        (ts_client.querySignageTemplates as any).mockResolvedValue({
            data: [
                { id: 'template-2', name: 'Template B' },
                { id: 'template-1', name: 'Template A' },
            ],
        });
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    function build_component(enable_templates = false) {
        templates_enabled.set(enable_templates);
        spectator = create_component({
            providers: [
                MockProvider(OrganisationService, org_service),
                MockProvider(SettingsService, {
                    signal: (() =>
                        templates_enabled) as SettingsService['signal'],
                }),
            ],
        });
        return spectator;
    }

    it('should resolve the building of a display from its zones', () => {
        build_component();

        expect(
            spectator.component.building({
                id: 'display-1',
                zones: ['level-1', 'building-1'],
            } as any)?.id,
        ).toBe('building-1');
        expect(
            spectator.component.building({ id: 'display-1' } as any),
        ).toBeUndefined();
    });

    it('should request zones for bootstrap display locations', async () => {
        build_component();

        spectator.detectChanges();
        await spectator.fixture.whenStable();

        expect(ts_client.querySystems).toHaveBeenCalledWith(
            expect.objectContaining({
                fields: 'id,name,display_name,email,zones',
            }),
        );
        expect(spectator.component.displays().map((_) => _.id)).toEqual([
            'display-1',
        ]);
    });

    it('should list displays by display name, or by name without one', async () => {
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [
                { id: 'c', name: 'Zeta', display_name: 'Charlie' },
                { id: 'b', name: 'Bravo' },
                { id: 'a', name: 'Yankee', display_name: 'Alpha' },
            ],
        } as any);
        build_component();

        await vi.waitFor(() => {
            expect(spectator.component.displays().map((_) => _.id)).toEqual([
                'a',
                'b',
                'c',
            ]);
        });
    });

    it('should hide and not load templates when templates are disabled', async () => {
        build_component();

        spectator.detectChanges();
        await spectator.fixture.whenStable();

        expect(spectator.query('[name="template"]')).toBeNull();
        expect(ts_client.querySignageTemplates).not.toHaveBeenCalled();
        expect(spectator.component.templates()).toEqual([]);
    });

    it('should show and load templates when templates are enabled', async () => {
        build_component(true);

        spectator.detectChanges();
        await vi.waitFor(() => {
            expect(spectator.component.templates()).toHaveLength(2);
        });

        expect(spectator.query('[name="template"]')).not.toBeNull();
        expect(ts_client.querySignageTemplates).toHaveBeenCalledWith({
            limit: 500,
        });
        expect(spectator.component.templates().map((item) => item.id)).toEqual([
            'template-1',
            'template-2',
        ]);
    });

    it('should store the selected display and navigate to signage', async () => {
        build_component();
        const router = spectator.inject(Router);
        vi.mocked(router.navigate).mockResolvedValue(true);
        spectator.component.active_display.set('display-1');

        await spectator.component.bootstrapPanel();

        expect(localStorage.getItem('PlaceOS.SIGNAGE.display')).toBe(
            'display-1',
        );
        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-1']);
        // The picker stays hidden until the player route takes over
        expect(spectator.component.loading()).not.toBe('');
    });

    it.each([
        ['is refused', () => Promise.resolve(false)],
        ['fails', () => Promise.reject(new Error('Guard failed'))],
    ])(
        'should show the picker again when opening the player %s',
        async (_, navigate) => {
            build_component();
            const router = spectator.inject(Router);
            vi.mocked(router.navigate).mockImplementation(navigate);
            spectator.component.active_display.set('display-1');

            await spectator.component.bootstrapPanel();

            expect(spectator.component.loading()).toBe('');
        },
    );

    it('should show an error with a retry when displays fail to load', async () => {
        vi.mocked(ts_client.querySystems).mockRejectedValueOnce(
            new Error('Service unavailable'),
        );
        build_component();
        await vi.waitFor(() => {
            spectator.detectChanges();
            expect(spectator.query('load-error')).not.toBeNull();
        });
        expect(spectator.query('main')).toBeNull();

        spectator.click('load-error button');

        await vi.waitFor(() => {
            expect(spectator.component.displays()).toHaveLength(1);
        });
        spectator.detectChanges();
        expect(spectator.query('load-error')).toBeNull();
        expect(spectator.query('main')).not.toBeNull();
    });

    it('should store and open a template bootstrap', async () => {
        build_component(true);
        const router = spectator.inject(Router);
        spectator.setRouteQueryParam('template', 'template-1');
        spectator.component.active_display.set('display-1');

        await spectator.component.bootstrapPanel();

        expect(localStorage.getItem('PlaceOS.SIGNAGE.template')).toBe(
            'template-1',
        );
        expect(router.navigate).toHaveBeenCalledWith([
            '/template',
            'template-1',
            'display-1',
        ]);
    });

    it('should not bootstrap without a selected display', async () => {
        build_component();
        const router = spectator.inject(Router);

        await spectator.component.bootstrapPanel();

        expect(localStorage.getItem('PlaceOS.SIGNAGE.display')).toBeNull();
        expect(router.navigate).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('should clear stored bootstrap details from the query string', () => {
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-1');
        localStorage.setItem('PlaceOS.SIGNAGE.building', 'building-1');
        localStorage.setItem('PlaceOS.SIGNAGE.template', 'template-1');
        build_component();

        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();

        expect(localStorage.getItem('PlaceOS.SIGNAGE.display')).toBeNull();
        expect(localStorage.getItem('PlaceOS.SIGNAGE.building')).toBeNull();
        expect(localStorage.getItem('PlaceOS.SIGNAGE.template')).toBeNull();
    });

    it('should bootstrap immediately from the display query parameter', () => {
        build_component();
        const router = spectator.inject(Router);

        spectator.setRouteQueryParam('display', 'display-2');

        expect(localStorage.getItem('PlaceOS.SIGNAGE.display')).toBe(
            'display-2',
        );
        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-2']);
    });

    it('should redirect when the app is already bootstrapped', async () => {
        vi.useFakeTimers();
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-3');
        localStorage.setItem('OSK.enabled', 'true');
        build_component();
        const router = spectator.inject(Router);
        await Promise.resolve();

        vi.advanceTimersByTime(1001);

        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-3']);
        expect(VirtualKeyboardComponent.enabled).toBe(true);
        vi.useRealTimers();
    });

    it('should keep the loading state while opening a stored display', async () => {
        vi.useFakeTimers();
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-3');
        build_component();
        const router = spectator.inject(Router);
        // The route guard is still waiting on the backend
        vi.mocked(router.navigate).mockReturnValue(new Promise(() => {}));
        spectator.detectChanges();
        expect(spectator.query('main')).toBeNull();

        vi.advanceTimersByTime(1001);
        spectator.detectChanges();

        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-3']);
        expect(spectator.component.loading()).toBeTruthy();
        expect(spectator.query('main')).toBeNull();
        vi.useRealTimers();
    });

    it('should not navigate again after bootstrapping from the URL', async () => {
        vi.useFakeTimers();
        build_component();
        const router = spectator.inject(Router);
        vi.mocked(router.navigate).mockReturnValue(new Promise(() => {}));

        spectator.setRouteQueryParam('display', 'display-2');
        vi.advanceTimersByTime(1001);

        expect(router.navigate).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-2']);
        vi.useRealTimers();
    });

    it('should redirect an existing template bootstrap to its player', async () => {
        vi.useFakeTimers();
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-3');
        localStorage.setItem('PlaceOS.SIGNAGE.template', 'template-2');
        build_component(true);
        const router = spectator.inject(Router);
        await Promise.resolve();

        vi.advanceTimersByTime(1001);

        expect(router.navigate).toHaveBeenCalledWith([
            '/template',
            'template-2',
            'display-3',
        ]);
        vi.useRealTimers();
    });

    it('should prefer a template from the current bootstrap URL', async () => {
        vi.useFakeTimers();
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-3');
        localStorage.setItem('PlaceOS.SIGNAGE.template', 'template-old');
        build_component(true);
        const router = spectator.inject(Router);
        spectator.setRouteQueryParam('template', 'template-new');
        await Promise.resolve();

        vi.advanceTimersByTime(1001);

        expect(localStorage.getItem('PlaceOS.SIGNAGE.template')).toBe(
            'template-new',
        );
        expect(router.navigate).toHaveBeenCalledWith([
            '/template',
            'template-new',
            'display-3',
        ]);
        vi.useRealTimers();
    });

    it('should ignore a stored template when templates are disabled', async () => {
        vi.useFakeTimers();
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-3');
        localStorage.setItem('PlaceOS.SIGNAGE.template', 'template-2');
        build_component();
        const router = spectator.inject(Router);
        await Promise.resolve();

        vi.advanceTimersByTime(1001);

        expect(router.navigate).toHaveBeenCalledWith(['/signage', 'display-3']);
        vi.useRealTimers();
    });
});
