import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { startOfMinute } from 'date-fns';
import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { debounceTime, first, map } from 'rxjs/operators';
import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'event-panel',
    template: `
        <div class="absolute inset-0 flex flex-col items-center bg-base-100">
            <header class="flex w-full items-center justify-between p-8">
                <h1 class="text-3xl font-medium">{{ space_name | async }}</h1>
                <div class="flex items-center space-x-4 portrait:hidden">
                    <p class="text-2xl">
                        {{ time | date: 'shortTime' }}
                    </p>
                    <img
                        auth
                        class="h-10"
                        alt="Logo"
                        [source]="(logo | async)?.src || (logo | async) || ''"
                    />
                </div>
            </header>
            <main
                class="relative flex h-1/2 w-full flex-1 justify-between space-x-8 overflow-hidden bg-cover p-8 portrait:flex-col portrait:space-x-0 portrait:space-y-4"
                [style.background-color]="background_color | safe"
                [style.color]="text_color | safe"
                [style.background-image]="
                    'url(' + background_image + ')' | safe
                "
            >
                <div class="overflow-hidden">
                    <ng-container
                        *ngIf="current | async; else current_empty_state"
                    >
                        <h2 class="text-2xl font-medium">
                            {{ (current | async)?.title }}
                        </h2>
                        <p class="mb-4 text-2xl lowercase">
                            ending &#64;
                            {{
                                (current | async)?.event_end * 1000
                                    | date: 'h:mma'
                            }}
                        </p>
                        <p
                            class="line-clamp-6 text-base portrait:line-clamp-8"
                            [innerHTML]="
                                (current | async)?.body | sanitize: 'html'
                            "
                        ></p>
                    </ng-container>
                    <ng-template #current_empty_state>
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_CURRENT' | translate }}
                        </p>
                    </ng-template>
                </div>
                <div class="min-w-[40%]">
                    <h2 class="text-2xl font-medium uppercase">
                        {{ 'APP.BOOKING_PANEL.NEXT' | translate }}
                    </h2>
                    <hr class="mb-8" />
                    <ng-container *ngIf="next | async; else next_empty_state">
                        <h2 class="text-2xl font-medium">
                            {{ (next | async)?.title }}
                        </h2>
                        <p class="text-2xl lowercase">
                            starting &#64;
                            {{
                                (next | async)?.event_start * 1000
                                    | date: 'h:mma'
                            }}
                        </p>
                    </ng-container>
                    <ng-template #next_empty_state>
                        <p class="text-2xl font-medium opacity-60">
                            {{ 'APP.BOOKING_PANEL.NO_UPCOMING' | translate }}
                        </p>
                    </ng-template>
                </div>
            </main>
            <footer
                class="flex w-full items-center justify-between bg-base-100 px-8 py-3 landscape:hidden"
            >
                <img
                    auth
                    class="h-10"
                    alt="Logo"
                    [source]="(logo | async)?.src || (logo | async)"
                />
                <p class="text-2xl">
                    {{ time | date: 'shortTime' }}
                </p>
            </footer>
            <div
                class="absolute -right-[2px] top-1/2 -translate-y-1/2"
                *ngIf="!hide_qr && checkin"
            >
                <button
                    book-tag
                    matRipple
                    (click)="toggleQRShow()"
                    class="absolute left-px top-1/2 z-20 -translate-x-full -translate-y-1/2 rounded-l-lg border-y border-l border-base-300 bg-base-100 px-1 py-4 uppercase"
                >
                    {{ 'COMMON.BOOK' | transition }}
                </button>
                <div
                    qr-code-out
                    class="z-10 overflow-hidden rounded-l-lg border border-base-300 bg-base-100 shadow"
                    [class.w-0]="!show_qr"
                    [class.w-56]="show_qr"
                >
                    <div qr-checkin class="z-50 w-56 p-3">
                        <img class="w-full" [src]="qr_code" />
                    </div>
                </div>
            </div>
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
    standalone: false,
})
export class EventPanelComponent extends AsyncHandler implements OnInit {
    public system_id = '';
    public show_qr = false;
    public room_name: string | null = '';
    public current = this._state.current;
    public next = this._state.next;
    public qr_code: any;
    public hide_qr = false;
    public readonly space_name = this._state.space.pipe(
        map((_) => _?.display_name || _?.name || ''),
    );

    public get time() {
        return startOfMinute(Date.now());
    }

    public get text_color() {
        return this._settings.get('app.text_color') || '#FFFFFF';
    }

    public get background_color() {
        return this._settings.get('app.background_color') || '#483285';
    }

    public get background_image() {
        return this._settings.get('app.background_image');
    }

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

    public get checkin() {
        return this._state.setting('show_qr_code') !== false;
    }

    public get custom_qr() {
        return !!this._state.setting('custom_qr_url');
    }

    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute,
        private _state: PanelStateService,
        private _org: OrganisationService,
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                this.system_id = params.get('system_id') || '';
                this._state.system = this.system_id;
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                this.hide_qr = !!params.get('hide_qr_code');
            }),
        );
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
        this._state.current.subscribe();
        this._state.settings.subscribe(({ custom_qr_url, custom_qr_color }) => {
            if (custom_qr_url) {
                this.qr_code = generateQRCode(
                    custom_qr_url,
                    '#0000',
                    custom_qr_color || '#000',
                );
            } else if (!this.qr_code) {
                const url = `${location.origin}${location.pathname}#/checkin/${this._state.system}?user=true`;
                this.qr_code = generateQRCode(
                    url,
                    '#0000',
                    custom_qr_color || '#000',
                );
            }
        });
    }

    public toggleQRShow() {
        this.show_qr = !this.show_qr;
        this.timeout('close', () => (this.show_qr = false), 60 * 1000);
    }

    public asCalendarEvent(data: any) {
        return data ? new CalendarEvent(data) : null;
    }
}
