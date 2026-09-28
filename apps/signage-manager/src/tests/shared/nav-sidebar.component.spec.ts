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

    async function createFixture(template = '') {
        await TestBed.configureTestingModule({
            imports: [NavSidebarComponent],
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: LocaleService, useValue: locale },
                { provide: SignageService, useValue: service },
            ],
        })
            .overrideComponent(NavSidebarComponent, {
                set: { template, imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(NavSidebarComponent);
    }

    async function createComponent() {
        return (await createFixture()).componentInstance;
    }

    /** Render only the scroll list, with fixed metrics since jsdom has no layout. */
    async function createScrollFixture(metrics: {
        scrollTop: number;
        clientHeight: number;
        scrollHeight: number;
    }) {
        const fixture = await createFixture(
            '<div #scroller><div #scroll_content></div></div>',
        );
        fixture.detectChanges();
        const scroller = fixture.nativeElement.querySelector(
            'div',
        ) as HTMLElement;
        scroller.scrollTop = metrics.scrollTop;
        Object.defineProperty(scroller, 'clientHeight', {
            value: metrics.clientHeight,
        });
        Object.defineProperty(scroller, 'scrollHeight', {
            value: metrics.scrollHeight,
        });
        return { component: fixture.componentInstance, scroller };
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

    describe('nav list overflow', () => {
        beforeEach(() => {
            vi.stubGlobal(
                'ResizeObserver',
                class {
                    observe() {}
                    disconnect() {}
                },
            );
        });

        afterEach(() => vi.unstubAllGlobals());

        it('hides the scroll arrows when the items fit', async () => {
            const { component } = await createScrollFixture({
                scrollTop: 0,
                clientHeight: 400,
                scrollHeight: 400,
            });

            component.updateScrollState();

            expect(component.overflowing()).toBe(false);
        });

        it('enables only the arrows that can move the list', async () => {
            const { component } = await createScrollFixture({
                scrollTop: 0,
                clientHeight: 200,
                scrollHeight: 500,
            });

            component.updateScrollState();
            expect(component.can_scroll_up()).toBe(false);
            expect(component.can_scroll_down()).toBe(true);
        });

        it('scrolls the list by a third of its height', async () => {
            const { component, scroller } = await createScrollFixture({
                scrollTop: 0,
                clientHeight: 300,
                scrollHeight: 900,
            });
            scroller.scrollBy = vi.fn();

            component.scrollNav(1);

            expect(scroller.scrollBy).toHaveBeenCalledWith({
                top: 100,
                behavior: 'smooth',
            });
        });

        it('keeps the list position and arrows for the next page', async () => {
            const { component, scroller } = await createScrollFixture({
                scrollTop: 120,
                clientHeight: 200,
                scrollHeight: 500,
            });
            component.updateScrollState();

            const next = TestBed.createComponent(NavSidebarComponent);
            expect(next.componentInstance.can_scroll_up()).toBe(true);
            expect(next.componentInstance.can_scroll_down()).toBe(true);
            next.detectChanges();
            await next.whenStable();

            const next_scroller = next.nativeElement.querySelector(
                'div',
            ) as HTMLElement;
            expect(next_scroller).not.toBe(scroller);
            expect(next_scroller.scrollTop).toBe(120);
        });

        it('scrolls an active link below the list into view', async () => {
            const { component, scroller } = await createScrollFixture({
                scrollTop: 0,
                clientHeight: 200,
                scrollHeight: 800,
            });
            scroller.getBoundingClientRect = () =>
                ({ top: 100, bottom: 300 }) as DOMRect;
            const link = document.createElement('a');
            link.getBoundingClientRect = () =>
                ({ top: 500, bottom: 572 }) as DOMRect;

            component.onActiveChange(true, link);

            expect(scroller.scrollTop).toBe(280);
        });
    });
});
