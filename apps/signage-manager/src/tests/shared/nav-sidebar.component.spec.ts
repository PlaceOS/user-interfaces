import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LocaleService, SettingsService } from '@placeos/common';
import { NavSidebarComponent } from '../../app/shared/nav-sidebar.component';
import { SignageService } from '../../app/signage.service';

describe('NavSidebarComponent', () => {
    const locales_signal = signal<any[]>([]);
    const show_locale_signal = signal(false);
    const can_manage_all_groups = signal(false);
    const manageable_signage_groups = signal<any[]>([]);
    const settings = {
        signal: vi.fn((key: string) =>
            key === 'locales' ? locales_signal : show_locale_signal,
        ),
        get: vi.fn(),
        theme: 'light',
    };
    const locale = {
        locale: 'en',
        setLocale: vi.fn(),
    };
    const templates_enabled = signal(false);
    const service = {
        can_manage_all_groups,
        manageable_signage_groups,
        templates_enabled,
    };

    async function createComponent() {
        await TestBed.configureTestingModule({
            imports: [NavSidebarComponent],
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: LocaleService, useValue: locale },
                { provide: SignageService, useValue: service },
            ],
        })
            .overrideComponent(NavSidebarComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(NavSidebarComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        locales_signal.set([]);
        show_locale_signal.set(false);
        can_manage_all_groups.set(false);
        manageable_signage_groups.set([]);
        templates_enabled.set(false);
        settings.theme = 'light';
        settings.get.mockReset();
        locale.locale = 'en';
        TestBed.resetTestingModule();
    });

    it('hides the group management item when groups are not manageable', async () => {
        const component = await createComponent();

        expect(component.nav_items().map((_) => _.route)).not.toContain(
            '/groups',
        );
    });

    it('shows the group management item when groups are manageable', async () => {
        manageable_signage_groups.set([{ id: 'g1' }]);
        const component = await createComponent();

        expect(component.nav_items().map((_) => _.route)).toContain('/groups');
    });

    it('hides the templates item until the feature flag is enabled', async () => {
        const component = await createComponent();

        expect(component.nav_items().map((_) => _.route)).not.toContain(
            '/templates',
        );

        templates_enabled.set(true);
        expect(component.nav_items().map((_) => _.route)).toContain(
            '/templates',
        );
    });

    it('labels the active locale from the configured list', async () => {
        locales_signal.set([{ id: 'en', name: 'LANGUAGE.ENGLISH' }]);
        const component = await createComponent();

        expect(component.active_locale_label()).toBe('LANGUAGE.ENGLISH');
    });

    it('falls back to English when the active locale is unlisted', async () => {
        locale.locale = 'zz';
        const component = await createComponent();

        expect(component.active_locale_label()).toBe('LANGUAGE.ENGLISH');
    });

    it('formats locale details with the native name when it differs', async () => {
        const component = await createComponent();

        expect(
            component.localeDetails({
                id: 'fr',
                name: 'LANGUAGE.FRENCH',
                local: 'Français',
            }),
        ).toBe('French (Français) · fr');
    });

    it('omits a redundant native name from locale details', async () => {
        const component = await createComponent();

        expect(
            component.localeDetails({ id: 'en', name: 'LANGUAGE.ENGLISH' }),
        ).toBe('English · en');
    });

    it('ignores a locale change to the already active locale', async () => {
        const component = await createComponent();

        component.setLocale('en');

        expect(locale.setLocale).not.toHaveBeenCalled();
    });

    it('applies and persists a new locale selection', async () => {
        const set_item = vi.spyOn(Storage.prototype, 'setItem');
        const component = await createComponent();

        component.setLocale('fr');

        expect(locale.setLocale).toHaveBeenCalledWith('fr');
        expect(set_item).toHaveBeenCalledWith('PLACEOS.locale', 'fr');
        set_item.mockRestore();
    });

    it('reads the light logo from settings by default', async () => {
        settings.get.mockImplementation((key: string) =>
            key === 'app.logo_light' ? 'light.png' : 'dark.png',
        );
        const component = await createComponent();

        expect(component.logo_src).toBe('light.png');
    });

    it('reads the dark logo when the theme is dark', async () => {
        settings.theme = 'dark';
        settings.get.mockImplementation((key: string) =>
            key === 'app.logo_dark' ? { src: 'dark.png' } : 'light.png',
        );
        const component = await createComponent();

        expect(component.logo_src).toBe('dark.png');
    });
});
