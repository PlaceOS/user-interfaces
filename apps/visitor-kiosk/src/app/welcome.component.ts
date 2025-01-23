import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsyncHandler, LocaleService, SettingsService } from '@placeos/common';

@Component({
    selector: 'app-welcome',
    template: `
        <div class="absolute inset-0 p-8 flex items-center">
            <img
                auth
                [source]="background"
                class="absolute min-h-[100%] min-w-[100%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
            <div class="flex flex-col justify-center space-y-8 z-10 w-[60%]">
                <h3
                    class="mb-4 text-white text-6xl space-y-4"
                    [innerHTML]="
                        welcome_message ||
                            ('APP.VISITOR_KIOSK.WELCOME_MESSAGE' | translate)
                            | sanitize: 'html'
                    "
                ></h3>
                <div class="flex items-center space-x-4 font-medium">
                    <a
                        btn
                        matRipple
                        [routerLink]="['/checkin']"
                        class="base w-40"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'APP.VISITOR_KIOSK.CHECK_IN' | translate }}
                            </div>
                            <app-icon class="text-2xl">chevron_right</app-icon>
                        </div>
                    </a>
                    <a
                        btn
                        matRipple
                        [routerLink]="['/register']"
                        class="base w-40"
                        *ngIf="can_register"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'APP.VISITOR_KIOSK.REGISTER' | translate }}
                            </div>
                            <app-icon class="text-2xl">chevron_right</app-icon>
                        </div>
                    </a>
                    <a
                        *ngIf="level"
                        btn
                        matRipple
                        [routerLink]="['/explore', level]"
                        class="base w-40"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'APP.VISITOR_KIOSK.EXPLORE' | translate }}
                            </div>
                            <app-icon class="text-2xl">place</app-icon>
                        </div>
                    </a>
                </div>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now | date: 'mediumDate' }} {{ now | date: 'shortTime' }}
            </div>
            <button
                class="absolute top-4 left-4"
                *ngIf="locales.length > 1"
                [matMenuTriggerFor]="menu"
            >
                <div class="flex items-center justify-between">
                    <app-icon class="text-2xl text-white">language</app-icon>
                    <div class="text-white text-left ml-2">
                        <div>{{ 'COMMON.LANGUAGE' | translate }}</div>
                        <div
                            *ngIf="
                                ('COMMON.LANGUAGE' | translate) !== 'Language'
                            "
                            class="text-xs opacity-30"
                        >
                            Language
                        </div>
                    </div>
                    <div
                        class="text-sm px-2 py-1 rounded bg-base-200 max-w-24 truncate ml-4"
                        [matTooltip]="active_locale | translate"
                    >
                        {{ active_locale | translate }}
                    </div>
                </div>
            </button>
            <mat-menu #menu="matMenu">
                <button
                    mat-menu-item
                    *ngFor="let lang of locales"
                    (click)="setLocale(lang.id)"
                >
                    <div
                        class="flex items-center justify-between space-x-8 h-14"
                    >
                        <div>
                            <div>{{ lang.name | translate }}</div>
                            <div
                                *ngIf="(lang.name | translate) !== lang.local"
                                class="text-xs opacity-30"
                            >
                                {{ lang.local }}
                            </div>
                        </div>
                        <div class="text-3xl">{{ lang.flag }}</div>
                    </div>
                </button>
            </mat-menu>
            <img
                src="assets/img/building.png"
                class="absolute w-[60%] bottom-0 right-0"
            />
        </div>
    `,
    styles: [
        `
            a {
                height: 3.5rem;
                background-color: rgba(255, 255, 255, 0.25);
            }
        `,
    ],
    standalone: false,
})
export class WelcomeComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public now = Date.now();
    /** Level to initially load on explore */
    public level = '';

    public readonly setLocale = (code: string) => {
        this._locale.setLocale(code);
        localStorage.setItem('PLACEOS.locale', code);
        setTimeout(() => location.reload(), 300);
    };

    public get background() {
        return this._settings.get('app.welcome_background');
    }

    public get can_register() {
        return this._settings.get('app.allow_self_registration');
    }

    public get welcome_message() {
        return this._settings.get('app.welcome_message');
    }

    public get active_locale(): string {
        const locale_list = this.locales;
        const locale = this._locale.locale;
        for (const item of locale_list) {
            if (item.id === locale) return item.name;
        }
        return 'LANGUAGE.ENGLISH';
    }

    public get locales(): { id: string; name: string }[] {
        return this._settings.get('app.locales') || [];
    }

    constructor(
        private route: ActivatedRoute,
        private _settings: SettingsService,
        private _locale: LocaleService,
        private _cdr: ChangeDetectorRef,
    ) {
        super();
    }

    public ngOnInit() {
        this.interval('time', () => (this.now = Date.now()), 30 * 1000);
        this.subscription(
            'level',
            this._settings
                .listen('KIOSK.level')
                .subscribe((lvl) => (this.level = lvl)),
        );
        this.level = localStorage?.getItem('KIOSK.level');
        this.subscription(
            'route.params',
            this.route.paramMap.subscribe((params) => {
                if (params.has('level')) {
                    this.level = params.get('level');
                }
            }),
        );
        this.timeout('check', () => this._cdr.detectChanges(), 1000);
    }
}
