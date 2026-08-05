import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    computed,
    effect,
    inject,
    OnDestroy,
    OnInit,
    signal,
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';

import {
    AsyncHandler,
    isPublicMode,
    LocaleService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    SanitizePipe,
    TranslatePipe,
    VirtualKeyboardComponent,
} from '@placeos/components';

@Component({
    selector: 'app-welcome',
    template: `
        <div class="absolute inset-0 flex items-center overflow-hidden p-8">
            <img
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            <div class="z-10 flex w-[60%] flex-col justify-center space-y-8">
                <h3
                    class="mb-4 space-y-4 text-6xl text-white"
                    [innerHTML]="
                        welcome_message() ||
                            ('APP.VISITOR_KIOSK.WELCOME_MESSAGE' | translate)
                            | sanitize: 'html'
                    "
                ></h3>
                <div class="flex items-center space-x-4 font-medium">
                    <a
                        btn
                        matRipple
                        [routerLink]="['/checkin']"
                        class="bg-base-100 border-base-100 text-base-content w-40 border"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'COMMON.CHECK_IN' | translate }}
                            </div>
                            <icon class="text-2xl">chevron_right</icon>
                        </div>
                    </a>
                    <a
                        btn
                        matRipple
                        [routerLink]="['/checkout']"
                        class="bg-base-100 border-base-100 text-base-content w-40 border"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="ml-2">
                                {{ 'COMMON.CHECK_OUT' | translate }}
                            </div>
                            <icon class="text-2xl">chevron_right</icon>
                        </div>
                    </a>
                    @if (can_register()) {
                        <a
                            btn
                            matRipple
                            [routerLink]="['/register']"
                            class="bg-base-100 border-base-100 text-base-content w-40 border"
                        >
                            <div class="flex items-center space-x-2">
                                <div class="ml-2">
                                    {{
                                        'APP.VISITOR_KIOSK.REGISTER' | translate
                                    }}
                                </div>
                                <icon class="text-2xl">chevron_right</icon>
                            </div>
                        </a>
                    }
                    @if (level() && !hide_explore()) {
                        <a
                            btn
                            matRipple
                            [routerLink]="['/explore', level()]"
                            class="bg-base-100 border-base-100 text-base-content w-40 border"
                        >
                            <div class="flex items-center space-x-2">
                                <div class="ml-2">
                                    {{
                                        'APP.VISITOR_KIOSK.EXPLORE' | translate
                                    }}
                                </div>
                                <icon class="text-2xl">place</icon>
                            </div>
                        </a>
                    }
                </div>
            </div>
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now() | date: 'mediumDate' }} {{ now() | date: 'shortTime' }}
            </div>
            @if (locales().length > 1) {
                <button
                    class="absolute top-4 left-4"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex items-center justify-between">
                        <icon class="text-2xl text-white">language</icon>
                        <div class="ml-2 text-left leading-tight text-white">
                            <div>{{ 'COMMON.LANGUAGE' | translate }}</div>
                            @if (
                                ('COMMON.LANGUAGE' | translate) !== 'Language'
                            ) {
                                <div class="text-xs opacity-30">Language</div>
                            }
                        </div>
                        <div
                            class="bg-base-200 ml-4 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                            [matTooltip]="active_locale() | translate"
                        >
                            {{ active_locale() | translate }}
                        </div>
                    </div>
                </button>
            }
            <mat-menu #menu="matMenu">
                @for (lang of locales(); track lang) {
                    <button mat-menu-item (click)="setLocale(lang.id)">
                        <div
                            class="flex h-14 min-w-[24rem] items-center justify-between space-x-8"
                        >
                            <div
                                class="leading-tight"
                                [class.mt-2]="
                                    (lang.name | translate) !== lang.local
                                "
                            >
                                <div>{{ lang.name | translate }}</div>
                                @if ((lang.name | translate) !== lang.local) {
                                    <div class="text-xs opacity-30">
                                        {{ lang.local }}
                                    </div>
                                }
                            </div>
                            <!-- <div class="text-3xl">{{ lang.flag }}</div> -->
                        </div>
                    </button>
                }
            </mat-menu>
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.png"
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
            @if (is_public_mode()) {
                <div
                    class="bg-base-300/90 text-base-content absolute inset-0 z-20 flex items-center justify-center p-8 text-center"
                >
                    <div class="max-w-xl space-y-2">
                        <h2 class="text-3xl font-semibold">
                            Public mode is enabled
                        </h2>
                        <p class="text-lg opacity-80">
                            Welcome actions are disabled while this kiosk is in
                            public mode.
                        </p>
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            a {
                height: 3.5rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatMenuModule,
        MatTooltipModule,
        RouterModule,
        AuthenticatedImageDirective,
        SanitizePipe,
    ],
})
export class WelcomeComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private route = inject(ActivatedRoute);
    private _settings = inject(SettingsService);
    private _locale = inject(LocaleService);
    private _cdr = inject(ChangeDetectorRef);

    public readonly now = signal(Date.now());
    /** Level to initially load on explore */
    public readonly level = signal('');
    private readonly _level_sync = effect(() =>
        this.level.set(this._settings.listen('KIOSK.level')()),
    );

    public readonly hide_explore = settingSignal('hide_explore');
    public readonly background = settingSignal('welcome_background');
    public readonly can_register = settingSignal('allow_self_registration');
    public readonly hide_building_image = settingSignal('hide_building_image');
    public readonly welcome_message = settingSignal('welcome_message');
    public readonly locales = settingSignal('locales', []);
    public readonly is_public_mode = isPublicMode;
    public readonly locale = signal(this._locale.locale);
    public readonly active_locale = computed(() => {
        const locale_list = this.locales();
        const locale = this.locale();
        for (const item of locale_list) {
            if (item.id === locale) return item.name;
        }
        return 'LANGUAGE.ENGLISH';
    });

    public readonly setLocale = (code: string) => {
        this.locale.set(code);
        this._locale.setLocale(code);
        localStorage.setItem('PLACEOS.locale', code);
        setTimeout(() => location.reload(), 300);
    };

    public ngOnInit() {
        this.interval('time', () => this.now.set(Date.now()), 30 * 1000);
        this.level.set(localStorage?.getItem('KIOSK.level'));
        const params = this.route.snapshot.paramMap;
        if (params.has('level')) {
            this.level.set(params.get('level'));
        }
        const query_params = this.route.snapshot.queryParamMap;
        if (query_params.has('osk')) {
            const osk_enabled = query_params.get('osk') === 'true';
            localStorage.setItem('OSK.enabled', `${osk_enabled}`);
            VirtualKeyboardComponent.enabled = osk_enabled;
        }
        this.timeout('check', () => this._cdr.detectChanges(), 1000);
    }
}
