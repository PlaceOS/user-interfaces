import {
    appSettingOverrides,
    applyAppSettings,
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
            appSettingOverrides(working_settings, inherited_settings),
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
            ),
        ).toEqual({});
    });
});
