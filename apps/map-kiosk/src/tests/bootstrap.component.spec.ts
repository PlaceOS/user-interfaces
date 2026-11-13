import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    SpectatorRouting,
    createRoutingFactory,
} from '@ngneat/spectator/vitest';
import { Building, BuildingLevel, OrganisationService } from '@placeos/common';
import {
    KioskLocationPickerComponent,
    SettingsToggleComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { BootstrapComponent } from '../app/bootstrap.component';

const KIOSK_KEYS = [
    'KIOSK.building',
    'KIOSK.level',
    'KIOSK.orientation',
    'KIOSK.location',
    'KIOSK.parking',
];

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    let router: Router;
    /** Promise that `waitUntilInitialised` returns */
    let org_ready: Promise<void>;
    const org = {
        waitUntilInitialised: vi.fn(() => org_ready),
        levelWithID: vi.fn(
            (): BuildingLevel | null =>
                new BuildingLevel({ id: 'lvl-q', parent_id: 'bld-q' }),
        ),
        region_list: signal([]),
        active_buildings: signal([]),
        active_levels: signal<BuildingLevel[]>([]),
        initialised: signal(true),
    };
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        detectChanges: false,
        providers: [MockProvider(OrganisationService, org)],
    });

    /** Create the component and let `ngOnInit` finish its async start */
    const setup = async () => {
        spectator = createComponent();
        router = spectator.inject(Router);
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(0);
    };

    beforeEach(() => {
        vi.useFakeTimers();
        vi.clearAllMocks();
        org_ready = Promise.resolve();
        org.active_levels.set([]);
        localStorage.clear();
        VirtualKeyboardComponent.enabled = false;
    });

    afterEach(() => {
        vi.useRealTimers();
        localStorage.clear();
        VirtualKeyboardComponent.enabled = false;
    });

    it('should save the location and route to explore or parking', async () => {
        await setup();
        const kiosk = {
            building: null,
            level: new BuildingLevel({ id: 'lvl-1', parent_id: 'bld-1' }),
            orientation: null,
            location: null,
        };
        spectator.component.parking.set(true);
        spectator.component.bootstrapKiosk(kiosk);
        expect(localStorage.getItem('KIOSK.building')).toBe('bld-1');
        expect(localStorage.getItem('KIOSK.level')).toBe('lvl-1');
        expect(localStorage.getItem('KIOSK.parking')).toBe('true');
        expect(router.navigate).toHaveBeenLastCalledWith(['/parking']);

        spectator.component.parking.set(false);
        spectator.component.bootstrapKiosk(kiosk);
        expect(localStorage.getItem('KIOSK.parking')).toBeNull();
        expect(router.navigate).toHaveBeenLastCalledWith(['/explore']);
    });

    it('should offer the parking display only for a parking level', async () => {
        const office = new BuildingLevel({ id: 'lvl-1', parent_id: 'bld-1' });
        const parking = new BuildingLevel({
            id: 'lvl-p',
            parent_id: 'bld-1',
            tags: ['parking'],
        });
        org.active_levels.set([office, parking]);
        await setup();
        const picker = spectator.query(KioskLocationPickerComponent);
        picker.setBuilding(new Building({ id: 'bld-1' }));
        picker.setLevel(office);
        spectator.detectChanges();
        expect('settings-toggle').not.toExist();

        picker.setLevel(parking);
        spectator.detectChanges();
        spectator.query(SettingsToggleComponent).setValue(true);
        picker.submit();
        expect(localStorage.getItem('KIOSK.level')).toBe('lvl-p');
        expect(localStorage.getItem('KIOSK.parking')).toBe('true');
        expect(router.navigate).toHaveBeenCalledWith(['/parking']);
    });

    it('should remove the saved setup when clear=true', async () => {
        for (const key of KIOSK_KEYS) localStorage.setItem(key, 'x');
        await setup();
        spectator.setRouteQueryParam('clear', 'false');
        spectator.detectChanges();
        expect(localStorage.getItem('KIOSK.level')).toBe('x');

        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();
        for (const key of KIOSK_KEYS) {
            expect(localStorage.getItem(key)).toBeNull();
        }
    });

    it('should replace a saved parking setup with the level param', async () => {
        localStorage.setItem('KIOSK.level', 'lvl-old');
        localStorage.setItem('KIOSK.parking', 'true');
        await setup();
        spectator.setRouteQueryParam('clear', 'true');
        spectator.setRouteQueryParam('level', 'lvl-q');
        spectator.detectChanges();
        expect(localStorage.getItem('KIOSK.level')).toBe('lvl-q');
        expect(localStorage.getItem('KIOSK.parking')).toBeNull();
        expect(router.navigate).toHaveBeenLastCalledWith(['/explore']);
    });

    it('should save the on-screen keyboard state from the osk param', async () => {
        await setup();
        spectator.setRouteQueryParam('osk', 'true');
        spectator.detectChanges();
        expect(localStorage.getItem('OSK.enabled')).toBe('true');

        spectator.setRouteQueryParam('osk', 'no');
        spectator.detectChanges();
        expect(localStorage.getItem('OSK.enabled')).toBe('false');
    });

    it('should bootstrap from the level param once the org is ready', async () => {
        let resolveOrg!: () => void;
        org_ready = new Promise((resolve) => (resolveOrg = resolve));
        await setup();
        spectator.setRouteQueryParam('level', 'lvl-q');
        spectator.detectChanges();
        expect(router.navigate).not.toHaveBeenCalled();

        resolveOrg();
        await vi.advanceTimersByTimeAsync(0);
        spectator.detectChanges();
        expect(org.levelWithID).toHaveBeenCalledWith(['lvl-q']);
        expect(localStorage.getItem('KIOSK.level')).toBe('lvl-q');
        expect(localStorage.getItem('KIOSK.building')).toBe('bld-q');
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
    });

    it('should ignore a level param that matches no level', async () => {
        org.levelWithID.mockReturnValueOnce(null);
        await setup();
        spectator.setRouteQueryParam('level', 'missing');
        spectator.detectChanges();
        expect(localStorage.getItem('KIOSK.level')).toBeNull();
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should redirect after a second when a setup is saved', async () => {
        localStorage.setItem('KIOSK.building', 'bld-1');
        localStorage.setItem('KIOSK.level', 'lvl-1');
        localStorage.setItem('KIOSK.parking', 'true');
        localStorage.setItem('OSK.enabled', 'true');
        await setup();
        await vi.advanceTimersByTimeAsync(999);
        expect(router.navigate).not.toHaveBeenCalled();

        await vi.advanceTimersByTimeAsync(1);
        expect(router.navigate).toHaveBeenCalledWith(['/parking']);
        expect(VirtualKeyboardComponent.enabled).toBe(true);
    });

    it('should redirect a saved non-parking setup to explore', async () => {
        localStorage.setItem('KIOSK.building', 'bld-1');
        localStorage.setItem('KIOSK.level', 'lvl-1');
        VirtualKeyboardComponent.enabled = true;
        await setup();
        await vi.advanceTimersByTimeAsync(1000);
        expect(router.navigate).toHaveBeenCalledWith(['/explore']);
        expect(VirtualKeyboardComponent.enabled).toBe(false);
    });

    it('should stay on setup when only part of a setup is saved', async () => {
        localStorage.setItem('KIOSK.level', 'lvl-1');
        await setup();
        await vi.advanceTimersByTimeAsync(1000);
        expect(router.navigate).not.toHaveBeenCalled();
    });
});
