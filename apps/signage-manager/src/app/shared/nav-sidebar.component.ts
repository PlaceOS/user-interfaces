import { Component, computed, inject } from '@angular/core';
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
import { SignageService } from '../signage.service';
import { AiImageService } from '../ai/ai-image.service';
import { filterManageNavItems } from './nav-items';
import { SignageGroupSelectorComponent } from './signage-group-selector.component';

@Component({
    selector: 'nav-sidebar',
    template: `
        <nav
            [attr.aria-label]="'SIGNAGE_MANAGER.PRIMARY_NAV' | translate"
            class="bg-secondary text-secondary-content border-base-100 relative z-30 hidden h-full flex-col border-r p-2 shadow-lg sm:flex"
        >
            <div
                logo
                class="bg-base-300/20 mx-auto flex h-20 w-20 items-center justify-center rounded-xl"
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
            </div>
            <div class="flex flex-1 flex-col gap-4 p-2">
                @for (item of nav_items(); track item.route) {
                    <a
                        #route_active="routerLinkActive"
                        class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                        [routerLink]="item.route"
                        routerLinkActive="active bg-primary/30"
                        [attr.aria-label]="item.label | translate"
                        [attr.aria-current]="
                            route_active.isActive ? 'page' : null
                        "
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
            <div class="p-2">
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
    private readonly _service = inject(SignageService);
    private readonly _ai = inject(AiImageService);
    public readonly locales = this._settings.signal<
        { id: string; name: string; local?: string }[]
    >('locales', []);
    public readonly show_locale_selector = this._settings.signal(
        'show_locale_selector',
        false,
    );

    public readonly nav_items = computed(() =>
        filterManageNavItems(
            this._service.can_manage_all_groups() ||
                !!this._service.manageable_signage_groups().length,
            this._service.templates_enabled(),
            this._ai.enabled(),
        ),
    );
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

    public localeDetails(locale: { id: string; name: string; local?: string }) {
        const name = i18n(locale.name);
        return locale.local && locale.local !== name
            ? `${name} (${locale.local}) · ${locale.id}`
            : `${name} · ${locale.id}`;
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
