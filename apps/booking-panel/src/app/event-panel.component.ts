import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { startOfMinute } from 'date-fns';

import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { generateQRCode } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    SafePipe,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';
import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'event-panel',
    template: `
        <div class="bg-base-100 absolute inset-0 flex flex-col items-center">
            <header class="flex w-full items-center justify-between p-8">
                <h1 class="text-3xl font-medium">{{ space_name() }}</h1>
                <div class="flex items-center space-x-4 portrait:hidden">
                    <p class="text-2xl">
                        {{ time() | date: 'shortTime' }}
                    </p>
                    <img
                        auth
                        class="h-10"
                        alt="Logo"
                        [source]="logo()?.src || logo() || ''"
                    />
                </div>
            </header>
            <main
                class="relative flex h-1/2 w-full flex-1 justify-between space-x-8 overflow-hidden bg-cover p-8 portrait:flex-col portrait:space-y-4 portrait:space-x-0"
                [style.background-color]="background_color | safe"
                [style.color]="text_color | safe"
                [style.background-image]="
                    'url(' + background_image + ')' | safe
                "
            >
                <div class="flex-1 overflow-hidden">
                    @let current_bkn = current();
                    @if (current_bkn) {
                        <h2 class="line-clamp-5 text-2xl font-medium">
                            {{ current_bkn?.title }}
                        </h2>
                        <p class="mb-4 text-2xl lowercase">
                            ending &#64;
                            {{ current_bkn?.event_end * 1000 | date: 'h:mma' }}
                        </p>
                        @if (!hide_meeting_details) {
                            <p class="text-xl">
                                {{ 'APP.BOOKING_PANEL.HOST' | translate }}
                                {{
                                    current_bkn?.organiser?.name ||
                                        current_bkn?.host
                                }}
                            </p>
                        }
                        <p
                            class="line-clamp-6 text-base portrait:line-clamp-8"
                            [innerHTML]="current_bkn?.body | sanitize: 'html'"
                        ></p>
                    } @else {
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                        </p>
                    }
                </div>
                <div class="min-w-[40%] flex-1">
                    <h2 class="text-2xl font-medium uppercase">
                        {{ 'COMMON.NEXT' | translate }}
                    </h2>
                    <hr class="mb-8" />
                    @let next_bkn = next();
                    @if (next_bkn) {
                        <h2 class="line-clamp-4 text-2xl font-medium">
                            {{ next_bkn?.title }}
                        </h2>
                        <p class="text-2xl lowercase">
                            starting &#64;
                            {{ next_bkn?.event_start * 1000 | date: 'h:mma' }}
                        </p>
                    } @else {
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_UPCOMING' | translate }}
                        </p>
                    }
                </div>
            </main>
            <footer
                class="bg-base-100 flex w-full items-center justify-between px-8 py-3 landscape:hidden"
            >
                <img
                    auth
                    class="h-10"
                    alt="Logo"
                    [source]="logo()?.src || logo()"
                />
                <p class="text-2xl">
                    {{ time() | date: 'shortTime' }}
                </p>
            </footer>
            @if (!hide_qr() && checkin) {
                <div
                    class="fixed top-1/2 -right-px flex -translate-y-1/2 items-center"
                >
                    <button
                        book-tag
                        matRipple
                        (click)="toggleQRShow()"
                        class="border-base-300 bg-base-100 relative z-20 h-28 w-12 rounded-l-lg border-y border-l uppercase"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </button>
                    <div
                        qr-code-out
                        class="border-base-300 bg-base-100 z-10 overflow-hidden rounded-l-lg border shadow-sm"
                        [class.w-0]="!show_qr()"
                        [class.w-56]="show_qr()"
                    >
                        <div qr-checkin class="z-50 w-56 p-3">
                            <img auth class="w-full" [source]="qr_code()" />
                        </div>
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            [book-tag] {
                writing-mode: vertical-rl;
                text-orientation: upright;
            }

            [qr-code-out] {
                transition: width 300ms;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        MatRippleModule,
        AuthenticatedImageDirective,
        TranslatePipe,
        SanitizePipe,
        SafePipe,
    ],
})
export class EventPanelComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _state = inject(PanelStateService);
    private _org = inject(OrganisationService);

    public system_id = signal<string>('');
    public show_qr = signal<boolean>(false);
    public qr_code = signal<any>(null);
    public hide_qr = signal<boolean>(false);
    public readonly time = signal(Date.now());

    public current = this._state.current;
    public next = this._state.next;

    public readonly space_name = computed(
        () =>
            this._state.space()?.display_name ||
            this._state.space()?.name ||
            '',
    );

    public readonly logo = computed(
        () => (
            this._org.active_building(),
            (this._settings.theme
                ? this._settings.get('app.logo_light')
                : this._settings.get('app.logo_dark')) || {}
        ),
    );

    public get text_color() {
        return this._settings.get('app.text_color') || '#FFFFFF';
    }

    public get background_color() {
        return this._settings.get('app.background_color') || '#483285';
    }

    public get background_image() {
        return this._settings.get('app.background_image');
    }

    public get hide_meeting_details() {
        return this._state.setting('hide_meeting_details');
    }

    public get checkin() {
        return this._state.setting('show_qr_code') !== false;
    }

    public get custom_qr() {
        return !!this._state.setting('custom_qr_url');
    }

    constructor() {
        super();
        effect(() => {
            const { custom_qr_url, custom_qr_color } = this._state.settings();
            if (custom_qr_url) {
                this.qr_code.set(
                    generateQRCode(
                        custom_qr_url,
                        '#0000',
                        custom_qr_color || '#000',
                    ),
                );
            } else if (!this.qr_code()) {
                const url = `${location.origin}${location.pathname}#/checkin/${this._state.system}?user=true`;
                this.qr_code.set(
                    generateQRCode(url, '#0000', custom_qr_color || '#000'),
                );
            }
        });
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        const params = this._route.snapshot.paramMap;
        this.system_id.set(params.get('system_id') || '');
        this._state.system = this.system_id();
        const query = this._route.snapshot.queryParamMap;
        this.hide_qr.set(!!query.get('hide_qr_code'));
        this.timeout(
            'size',
            () =>
                this._settings.overrideCssVariable(
                    'font-size',
                    '3.5vmin',
                    true,
                ),
            1000,
        );
        this.interval(
            'time',
            () => this.time.set(startOfMinute(Date.now()).valueOf()),
            5 * 1000,
        );
    }

    public toggleQRShow() {
        this.show_qr.update((v) => !v);
        this.timeout('close', () => this.show_qr.set(false), 60 * 1000);
    }
}
