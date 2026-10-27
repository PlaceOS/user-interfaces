import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    Building,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { legacyFlowsGuard } from '../app/legacy-flows.guard';

describe('legacyFlowsGuard', () => {
    type Settings = Record<string, unknown>;

    /**
     * Runs the guard against an org whose active building has `building`
     * settings, with `overrides` as the override stack of the settings
     * service. `org_value` stands for an organisation-level value.
     */
    function setup(
        building: Settings,
        overrides: Settings[],
        org_value?: boolean,
    ) {
        const stack = signal(overrides);
        TestBed.configureTestingModule({
            providers: [
                MockProvider(OrganisationService, {
                    initialised: signal(true),
                    active_building: signal(new Building({ id: 'bld-1' })),
                    active_building_loaded: signal(true),
                    buildingSettings: () => building,
                }),
                MockProvider(SettingsService, {
                    overrides: stack,
                    get: ((key: string) =>
                        key === 'app.use_legacy_flows'
                            ? (stack()[0]?.use_legacy_flows ?? org_value)
                            : undefined) as SettingsService['get'],
                }),
            ],
        });
        return {
            result: TestBed.runInInjectionContext(legacyFlowsGuard),
            stack,
        };
    }

    afterEach(() => vi.useRealTimers());

    it('matches when use_legacy_flows is set', async () => {
        const building = { use_legacy_flows: true };
        expect(await setup(building, [building]).result).toBe(true);
    });

    it('does not match when use_legacy_flows is not set', async () => {
        const building = {};
        expect(await setup(building, [building]).result).toBe(false);
    });

    it('waits for building settings that land after initialisation', async () => {
        vi.useFakeTimers();
        const building = { use_legacy_flows: true };
        const { result, stack } = setup(building, [{}]);
        let value: boolean | undefined;
        result.then((_) => (value = _));
        await vi.advanceTimersByTimeAsync(1000);
        expect(value).toBeUndefined();
        stack.set([building]);
        TestBed.tick();
        expect(await result).toBe(true);
    });

    it('stops waiting for settings that do not load', async () => {
        vi.useFakeTimers();
        const { result } = setup({}, [], true);
        await vi.advanceTimersByTimeAsync(20 * 1000);
        expect(await result).toBe(true);
    });
});
