import {
    afterNextRender,
    Component,
    computed,
    DestroyRef,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { i18n, LocaleService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { CommandPaletteService } from './command-palette.service';
import { injectNavItems } from './nav-items';
import { SignageGroupSelectorComponent } from './signage-group-selector.component';

@Component({
    selector: 'nav-sidebar',
    template: `
        <nav
            [attr.aria-label]="'SIGNAGE_MANAGER.PRIMARY_NAV' | translate"
            class="bg-secondary text-secondary-content border-base-100 relative z-30 hidden h-full flex-col border-r p-2 shadow-lg sm:flex"
        >
            <a
                logo
                class="bg-base-100/80 mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl shadow-xl"
                [routerLink]="['/']"
            >
                @if (logo_src; as logo) {
                    <img
                        auth
                        class="max-h-18 max-w-18 object-contain"
                        [alt]="'SIGNAGE_MANAGER.LOGO_ALT' | translate"
                        [source]="logo"
                    />
                } @else {
                    <div class="opacity-20">
                        {{ 'SIGNAGE_MANAGER.LOGO_ALT' | translate }}
                    </div>
                }
            </a>
            <button
                type="button"
                matRipple
                class="hover:bg-base-100/30 focus-visible:bg-base-100/30 mx-auto mt-2 flex h-10 w-18 shrink-0 items-center justify-center gap-1 rounded-xl"
                [matTooltip]="
                    ('SIGNAGE_MANAGER.PALETTE_OPEN' | translate) +
                    ' (' +
                    palette_shortcut +
                    ')'
                "
                matTooltipPosition="right"
                [attr.aria-label]="'SIGNAGE_MANAGER.PALETTE_OPEN' | translate"
                [attr.aria-keyshortcuts]="palette_aria_shortcut"
                (click)="openPalette()"
            >
                <icon class="text-2xl">search</icon>
            </button>
            @if (overflowing()) {
                <button
                    type="button"
                    matRipple
                    scroll-up
                    class="hover:bg-base-100/30 mx-auto mt-2 flex h-6 w-18 shrink-0 items-center justify-center rounded-lg disabled:opacity-30"
                    aria-hidden="true"
                    tabindex="-1"
                    [disabled]="!can_scroll_up()"
                    (click)="scrollNav(-1)"
                >
                    <icon class="text-2xl">keyboard_arrow_up</icon>
                </button>
            }
            <div
                #scroller
                class="no-scrollbar min-h-0 w-[calc(100%+0.5rem)] flex-1 overflow-x-hidden overflow-y-auto p-2"
                (scroll)="updateScrollState()"
            >
                <div #scroll_content class="flex flex-col gap-4">
                    @for (item of nav_items(); track item.route) {
                        <a
                            #nav_link
                            class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-18 w-18 shrink-0 flex-col items-center justify-center rounded-xl"
                            [routerLink]="item.route"
                            routerLinkActive="active bg-primary/30"
                            (isActiveChange)="onActiveChange($event, nav_link)"
                            [attr.aria-label]="item.label | translate"
                            ariaCurrentWhenActive="page"
                        >
                            <icon class="text-3xl">{{ item.icon }}</icon>
                            <div class="text-center text-xs font-medium">
                                {{ item.label | translate }}
                            </div>
                            <div
                                active
                                class="bg-base-100 absolute inset-y-0 top-0 -right-4 w-2 rounded-l-lg"
                            ></div>
                        </a>
                    }
                </div>
            </div>
            @if (overflowing()) {
                <button
                    type="button"
                    matRipple
                    scroll-down
                    class="hover:bg-base-100/30 mx-auto mb-2 flex h-6 w-18 shrink-0 items-center justify-center rounded-lg disabled:opacity-30"
                    aria-hidden="true"
                    tabindex="-1"
                    [disabled]="!can_scroll_down()"
                    (click)="scrollNav(1)"
                >
                    <icon class="text-2xl">keyboard_arrow_down</icon>
                </button>
            }
            <div class="shrink-0 p-2">
                @if (show_locale_selector() && locales().length > 1) {
                    <button
                        type="button"
                        matRipple
                        class="hover:bg-base-100/30 focus-visible:bg-base-100/30 mb-2 flex h-18 w-18 flex-col items-center justify-center rounded-xl text-center"
                        [matMenuTriggerFor]="language_menu"
                        [matTooltip]="active_locale_details()"
                        matTooltipPosition="right"
                        [attr.aria-label]="'COMMON.LANGUAGE_SELECT' | translate"
                    >
                        <icon class="text-3xl">language</icon>
                        <div
                            class="mt-1 line-clamp-2 w-full px-1 text-xs leading-tight font-medium"
                        >
                            {{ active_locale_label() | translate }}
                        </div>
                    </button>
                    <mat-menu #language_menu="matMenu" xPosition="after">
                        @for (lang of locales(); track lang.id) {
                            <button
                                type="button"
                                mat-menu-item
                                (click)="setLocale(lang.id)"
                                [matTooltip]="localeDetails(lang)"
                                matTooltipPosition="right"
                                [class.font-semibold]="
                                    active_locale() === lang.id
                                "
                            >
                                <div
                                    class="flex max-w-64 min-w-44 items-center gap-3"
                                >
                                    <icon class="text-xl">
                                        {{
                                            active_locale() === lang.id
                                                ? 'check'
                                                : 'language'
                                        }}
                                    </icon>
                                    <div class="min-w-0 leading-tight">
                                        <div>{{ lang.name | translate }}</div>
                                        @if (
                                            lang.local &&
                                            (lang.name | translate) !==
                                                lang.local
                                        ) {
                                            <div
                                                class="text-base-content/60 truncate text-xs"
                                            >
                                                {{ lang.local }}
                                            </div>
                                        }
                                    </div>
                                </div>
                            </button>
                        }
                    </mat-menu>
                }
                <signage-group-selector />
            </div>
        </nav>
    `,
    styles: [
        `
            a [active] {
                transition: opacity 300ms;
            }

            a:not(.active) [active] {
                opacity: 0;
            }
            a.active [active] {
                opacity: 1;
            }

            .no-scrollbar {
                scrollbar-width: none;
            }
            .no-scrollbar::-webkit-scrollbar {
                display: none;
            }
        `,
    ],
    imports: [
        RouterModule,
        MatMenuModule,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
        SignageGroupSelectorComponent,
        TranslatePipe,
    ],
})
export class NavSidebarComponent {
    private readonly _settings = inject(SettingsService);
    private readonly _locale = inject(LocaleService);
    public readonly locales = this._settings.signal<
        { id: string; name: string; local?: string }[]
    >('locales', []);
    public readonly show_locale_selector = this._settings.signal(
        'show_locale_selector',
        false,
    );

    public readonly nav_items = injectNavItems();
    private readonly _scroller = viewChild<ElementRef<HTMLElement>>('scroller');
    private readonly _scroll_content =
        viewChild<ElementRef<HTMLElement>>('scroll_content');
    private _active_link?: HTMLElement;
    public readonly can_scroll_up = signal(false);
    public readonly can_scroll_down = signal(false);
    /** Show the scroll arrows when the nav items do not fit. */
    public readonly overflowing = computed(
        () => this.can_scroll_up() || this.can_scroll_down(),
    );
    private readonly _palette = inject(CommandPaletteService);
    private readonly _is_apple = /Mac|iPhone|iPad/.test(navigator.userAgent);
    public readonly palette_shortcut = this._is_apple ? '⌘K' : 'Ctrl+K';
    public readonly palette_aria_shortcut = this._is_apple
        ? 'Meta+K'
        : 'Control+K';
    public readonly active_locale = computed(() => this._locale.locale);
    public readonly active_locale_label = computed(() => {
        const active_locale = this.active_locale();
        const locale = this.locales().find((item) => item.id === active_locale);
        return locale?.name || 'LANGUAGE.ENGLISH';
    });
    public readonly active_locale_details = computed(() => {
        const active_locale = this.active_locale();
        const locale = this.locales().find((item) => item.id === active_locale);
        return locale
            ? this.localeDetails(locale)
            : `${i18n('COMMON.LANGUAGE')}: ${active_locale}`;
    });

    constructor() {
        const destroy_ref = inject(DestroyRef);
        afterNextRender(() => {
            const scroller = this._scroller()?.nativeElement;
            const content = this._scroll_content()?.nativeElement;
            if (!scroller || !content) return;
            // Arrows and item changes resize the list, which can hide the
            // active link or change overflow.
            const observer = new ResizeObserver(() => {
                this.updateScrollState();
                this.revealActiveLink();
            });
            observer.observe(scroller);
            observer.observe(content);
            destroy_ref.onDestroy(() => observer.disconnect());
        });
    }

    /** Sync arrow state with the scroll position of the nav list. */
    public updateScrollState() {
        const el = this._scroller()?.nativeElement;
        if (!el) return;
        // 1px tolerance for fractional scroll positions.
        this.can_scroll_up.set(el.scrollTop > 1);
        this.can_scroll_down.set(
            el.scrollTop + el.clientHeight < el.scrollHeight - 1,
        );
    }

    /** Scroll the nav list by a third of its height, like mat-tabs. */
    public scrollNav(direction: 1 | -1) {
        const el = this._scroller()?.nativeElement;
        if (!el) return;
        el.scrollBy({
            top: (direction * el.clientHeight) / 3,
            behavior: 'smooth',
        });
    }

    public onActiveChange(active: boolean, link: HTMLElement) {
        if (active) this._active_link = link;
        else if (this._active_link === link) this._active_link = undefined;
        this.revealActiveLink();
    }

    /**
     * Scroll the nav list the minimum distance to show the active link.
     * Sets scrollTop on the list only, so parent containers do not move.
     */
    private revealActiveLink() {
        const scroller = this._scroller()?.nativeElement;
        const link = this._active_link;
        if (!scroller || !link) return;
        const outer = scroller.getBoundingClientRect();
        const inner = link.getBoundingClientRect();
        const padding = 8;
        if (inner.top < outer.top + padding) {
            scroller.scrollTop -= outer.top + padding - inner.top;
        } else if (inner.bottom > outer.bottom - padding) {
            scroller.scrollTop += inner.bottom - outer.bottom + padding;
        }
    }

    public localeDetails(locale: { id: string; name: string; local?: string }) {
        const name = i18n(locale.name);
        return locale.local && locale.local !== name
            ? `${name} (${locale.local}) · ${locale.id}`
            : `${name} · ${locale.id}`;
    }

    public openPalette() {
        void this._palette.toggle();
    }

    public setLocale(code: string) {
        if (code === this.active_locale()) return;
        this._locale.setLocale(code);
        localStorage.setItem('PLACEOS.locale', code);
        setTimeout(() => location.reload(), 300);
    }

    public get logo_src(): string {
        const logo = this._settings.get<string | { src?: string }>(
            this._settings.theme === 'dark'
                ? 'app.logo_dark'
                : 'app.logo_light',
        );
        return typeof logo === 'string' ? logo : logo?.src || '';
    }
}
