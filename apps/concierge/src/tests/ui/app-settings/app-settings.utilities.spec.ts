import { setCurrentUser, SettingsService, StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import {
    applyAppSettings,
    applyBookingFallbacks,
    appMetadataKey,
    appSettingOverrides,
    loadLayeredAppSettings,
    LOCKER_BOOKING_FALLBACKS,
    mergeAppSettings,
    saveAppSettings,
} from '../../../app/ui/app-settings/app-settings.utilities';

vi.mock('@placeos/ts-client', { spy: true });

describe('application settings utilities', () => {
    it('should merge settings at two levels and replace nested values', () => {
        const settings = mergeAppSettings(
            {
                default_route: '/default',
                visitors: {
                    allow_pass_number: false,
                    bookable_period: { start: 8, end: 17 },
                },
            },
            {
                visitors: {
                    allow_printing_label: true,
                    bookable_period: { start: 9 },
                },
            },
        );

        expect(settings).toEqual({
            default_route: '/default',
            visitors: {
                allow_pass_number: false,
                allow_printing_label: true,
                bookable_period: { start: 9 },
            },
        });
    });

    it('should only apply top-level settings supported by the form', () => {
        const model = {
            default_route: '',
            visitors: { allow_pass_number: false },
        };

        expect(
            applyAppSettings(model, {
                title: 'Unsupported',
                default_route: '/visitors',
                visitors: { allow_printing_label: true },
            }),
        ).toEqual({
            default_route: '/visitors',
            visitors: {
                allow_pass_number: false,
                allow_printing_label: true,
            },
        });
    });

    it('should convert legacy logo objects before applying settings', () => {
        const model = {
            logo_light: '',
            logo_dark: '',
            banner: {},
        };

        expect(
            applyAppSettings(model, {
                logo_light: { src: 'https://placeos.com/logo-light.svg' },
                logo_dark: 'https://placeos.com/logo-dark.svg',
                banner: { src: 'https://placeos.com/banner.svg' },
            }),
        ).toEqual({
            logo_light: 'https://placeos.com/logo-light.svg',
            logo_dark: 'https://placeos.com/logo-dark.svg',
            banner: { src: 'https://placeos.com/banner.svg' },
        });
    });

    it('should return only changed setting values', () => {
        const inherited_settings = {
            default_route: '/visitors',
            support_email: 'support@example.com',
            visitors: {
                allow_pass_number: true,
                bookable_period: { start: 8, end: 17 },
            },
        };
        const working_settings = {
            default_route: '/visitors',
            support_email: '',
            nullable_setting: null,
            visitors: {
                allow_pass_number: true,
                bookable_period: { start: 9, end: 17 },
            },
        };

        expect(
            appSettingOverrides(
                working_settings,
                inherited_settings,
                inherited_settings,
                {},
            ),
        ).toEqual({
            support_email: '',
            nullable_setting: null,
            visitors: {
                bookable_period: { start: 9, end: 17 },
            },
        });
    });

    it('should ignore property order when comparing atomic values', () => {
        expect(
            appSettingOverrides(
                { visitors: { bookable_period: { end: 17, start: 8 } } },
                { visitors: { bookable_period: { start: 8, end: 17 } } },
                {},
                {},
            ),
        ).toEqual({});
    });

    it('should not save untouched settings that the zone does not store', () => {
        const initial_settings = {
            default_route: '/visitors',
            lockers: { available_period: 7 },
        };

        expect(
            appSettingOverrides(initial_settings, {}, initial_settings, {}),
        ).toEqual({});
    });

    it('should save a changed setting unless it equals the inherited value', () => {
        const inherited_settings = { lockers: { max_duration: 240 } };
        const initial_settings = {
            lockers: { available_period: 7, max_duration: 480 },
        };

        expect(
            appSettingOverrides(
                { lockers: { available_period: 14, max_duration: 240 } },
                inherited_settings,
                initial_settings,
                {},
            ),
        ).toEqual({ lockers: { available_period: 14 } });
    });

    it('should keep stored settings unless they equal the inherited value', () => {
        const stored_settings = {
            default_route: '/visitors',
            lockers: { available_period: 7, max_duration: 240 },
            unknown_setting: true,
        };

        expect(
            appSettingOverrides(
                stored_settings,
                { lockers: { max_duration: 240 } },
                stored_settings,
                stored_settings,
            ),
        ).toEqual({
            default_route: '/visitors',
            lockers: { available_period: 7 },
            unknown_setting: true,
        });
    });

    it('should show inherited booking values for unset locker settings', () => {
        const model = {
            lockers: { available_period: 90, max_duration: 480 },
        };

        expect(
            applyBookingFallbacks(
                model,
                {
                    bookings: {
                        available_period: 30,
                        max_duration: 240,
                        min_duration: 15,
                    },
                    lockers: { max_duration: 120 },
                },
                'lockers',
                LOCKER_BOOKING_FALLBACKS,
            ),
        ).toEqual({ lockers: { available_period: 30, max_duration: 480 } });
    });

    describe('appMetadataKey', () => {
        const settingsWith = (values: Record<string, string>) =>
            ({ get: (key: string) => values[key] }) as SettingsService;

        it('should use the first key setting that is set', () => {
            const settings = settingsWith({
                'app.concierge_app': 'legacy_concierge',
                'app.visitor_kiosk_metadata_key': 'kiosk_key',
                'app.visitor_kiosk_app': 'legacy_kiosk',
            });
            expect(appMetadataKey(settings, 'concierge')).toBe(
                'legacy_concierge',
            );
            expect(appMetadataKey(settings, 'visitor-kiosk')).toBe('kiosk_key');
        });

        it('should fall back to the default key of each app', () => {
            const settings = settingsWith({ 'app.workplace_app': 'ignored' });
            expect(appMetadataKey(settings, 'concierge')).toBe('concierge_app');
            expect(appMetadataKey(settings, 'workplace')).toBe('workplace_app');
            expect(appMetadataKey(settings, 'visitor-kiosk')).toBe(
                'visitor-kiosk_app',
            );
        });
    });

    describe('loadLayeredAppSettings', () => {
        beforeEach(() => {
            vi.clearAllMocks();
            vi.mocked(ts_client.showMetadata).mockImplementation(
                async (id: string) =>
                    ({ details: { default_route: id } }) as never,
            );
        });

        afterEach(() => vi.restoreAllMocks());

        it('should layer defaults, organisation and parent settings', async () => {
            const layers = await loadLayeredAppSettings(
                { id: 'zone-1', name: 'Zone', parent_id: 'parent-1' },
                'org-1',
                'app_key',
                { default_route: 'default', use_region: true },
            );

            expect(ts_client.showMetadata).toHaveBeenCalledWith(
                'org-1',
                'app_key',
            );
            expect(layers).toEqual({
                inherited: { default_route: 'parent-1', use_region: true },
                stored: { default_route: 'zone-1' },
            });
        });

        it('should skip a parent that is the organisation', async () => {
            const layers = await loadLayeredAppSettings(
                { id: 'zone-1', name: 'Zone', parent_id: 'org-1' },
                'org-1',
                'app_key',
                {},
            );

            expect(ts_client.showMetadata).toHaveBeenCalledTimes(2);
            expect(layers.inherited).toEqual({ default_route: 'org-1' });
        });

        it('should load only the organisation for the organisation', async () => {
            const layers = await loadLayeredAppSettings(
                { id: 'org-1', name: 'Org' },
                'org-1',
                'app_key',
                { default_route: 'default' },
            );

            expect(ts_client.showMetadata).toHaveBeenCalledTimes(1);
            expect(layers).toEqual({
                inherited: { default_route: 'default' },
                stored: { default_route: 'org-1' },
            });
        });
    });

    describe('saveAppSettings', () => {
        const save = () =>
            saveAppSettings(
                'zone-1',
                'app_key',
                'Concierge',
                {
                    inherited: { default_route: '/a', week_start: 1 },
                    stored: { use_region: true },
                },
                { default_route: '/a', week_start: 1 },
                { default_route: '/b', week_start: 1 },
            );

        beforeEach(() => {
            vi.clearAllMocks();
            vi.mocked(ts_client.updateMetadata).mockResolvedValue({} as never);
        });

        afterEach(() => {
            setCurrentUser(null);
            vi.restoreAllMocks();
        });

        it('should save overrides with the editor details', async () => {
            setCurrentUser(
                new StaffUser({
                    id: 'user-1',
                    name: 'Admin User',
                    email: 'admin@example.com',
                    groups: ['placeos_admin'],
                }),
            );

            await save();

            expect(ts_client.updateMetadata).toHaveBeenCalledWith('zone-1', {
                name: 'app_key',
                description: expect.stringMatching(
                    /\|C\] Concierge Application Settings$/,
                ),
                details: {
                    use_region: true,
                    default_route: '/b',
                    edited_by: {
                        id: 'user-1',
                        name: 'Admin User',
                        email: 'admin@example.com',
                        domain: location.hostname,
                        role: 'Admin',
                    },
                },
            });
        });

        it.each([
            [['placeos_support'], 'Support'],
            [[], 'User'],
        ])('should save the role of %j users as %s', async (groups, role) => {
            setCurrentUser(new StaffUser({ id: 'user-1', groups }));

            await save();

            expect(ts_client.updateMetadata).toHaveBeenCalledWith(
                'zone-1',
                expect.objectContaining({
                    details: expect.objectContaining({
                        edited_by: expect.objectContaining({ role }),
                    }),
                }),
            );
        });
    });
});
