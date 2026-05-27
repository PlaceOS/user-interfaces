import {
    hasActiveTopMenuFeature,
    hasLoadedTopMenuSettings,
} from '../../app/components/top-menu.component';

describe('hasActiveTopMenuFeature', () => {
    it('allows parking requests when parking is enabled', () => {
        expect(hasActiveTopMenuFeature('parking-requests', ['parking'])).toBe(
            true,
        );
    });

    it('allows parking requests when parking requests are enabled', () => {
        expect(
            hasActiveTopMenuFeature('parking-requests', ['parking-requests']),
        ).toBe(true);
    });

    it('keeps other route feature checks strict', () => {
        expect(hasActiveTopMenuFeature('desks', ['parking'])).toBe(false);
    });
});

describe('hasLoadedTopMenuSettings', () => {
    it('waits for building and region settings overrides', () => {
        expect(
            hasLoadedTopMenuSettings({
                settings_initialised: true,
                org_initialised: true,
                has_region_context: true,
                has_building_context: true,
                override_count: 2,
                required_override_count: 4,
            }),
        ).toBe(false);
        expect(
            hasLoadedTopMenuSettings({
                settings_initialised: true,
                org_initialised: true,
                has_region_context: true,
                has_building_context: true,
                override_count: 4,
                required_override_count: 4,
            }),
        ).toBe(true);
    });

    it('waits for org context before allowing route redirects', () => {
        expect(
            hasLoadedTopMenuSettings({
                settings_initialised: true,
                org_initialised: false,
                has_region_context: true,
                has_building_context: true,
                override_count: 4,
                required_override_count: 4,
            }),
        ).toBe(false);
        expect(
            hasLoadedTopMenuSettings({
                settings_initialised: true,
                org_initialised: true,
                has_region_context: false,
                has_building_context: true,
                override_count: 4,
                required_override_count: 4,
            }),
        ).toBe(false);
        expect(
            hasLoadedTopMenuSettings({
                settings_initialised: true,
                org_initialised: true,
                has_region_context: true,
                has_building_context: false,
                override_count: 4,
                required_override_count: 4,
            }),
        ).toBe(false);
    });
});
