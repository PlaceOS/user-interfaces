import {
    applyAppSettings,
    applyBookingFallbacks,
    appSettingOverrides,
    LOCKER_BOOKING_FALLBACKS,
    mergeAppSettings,
} from '../../../app/ui/app-settings/app-settings.utilities';

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
});
