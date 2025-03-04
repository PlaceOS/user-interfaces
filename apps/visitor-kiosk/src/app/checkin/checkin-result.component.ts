import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, first, map, startWith } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { roundToNearestMinutes, startOfMinute } from 'date-fns';
import { DatePipe } from '@angular/common';
import { generateQRCode } from 'libs/common/src/lib/qr-code';

const DEFAULT_TEMPLATE = `
<p class="text-center">
    Welcome, you have a meeting at {{ time }} with {{ host_name }}.
    <br />{{ host_name }} has been notified and will be with you shortly.
</p>
<p>{{ can_use_lift }}</p>
`;

@Component({
    selector: 'checkin-results',
    template: `
        <div
            class="relative flex w-[36rem] flex-col items-center space-y-4 overflow-hidden rounded bg-base-100 p-4 shadow print:hidden"
            *ngIf="event | async"
        >
            @let details = event | async;
            <h3 class="text-xl">
                {{
                    (details.extension_data?.self_registered
                        ? 'APP.VISITOR_KIOSK.CHECKED_IN_MSG_SELF_REG'
                        : 'APP.VISITOR_KIOSK.CHECKED_IN_MSG'
                    ) | translate
                }}
            </h3>
            <div
                class=""
                [innerHTML]="result_template | async | sanitize: 'html'"
            ></div>
            <div
                printable
                class="print-only relative m-4 h-[14rem] w-[24rem] rounded-xl border border-neutral bg-base-100 p-4"
            >
                <div class="flex h-full flex-col leading-tight">
                    <div
                        class="mb-2 flex h-[4.75rem] w-[4.75rem] items-center justify-center overflow-hidden rounded-full border-base-400 bg-base-200 text-3xl print:border-2"
                    >
                        <a-user-avatar
                            [user]="{
                                name:
                                    (event | async)?.asset_name ||
                                    (event | async)?.description,
                                email: (event | async)?.asset_id,
                            }"
                        ></a-user-avatar>
                    </div>
                    <div class="text-2xl">
                        {{
                            (event | async)?.asset_name ||
                                (event | async)?.description
                        }}
                    </div>
                    <div class="text-sm">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_FOR'
                                | translate: { title: (event | async)?.title }
                        }}
                    </div>
                    <div class="text-sm opacity-60">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_HOST'
                                | translate
                                    : { host_name: (event | async)?.user_name }
                        }}
                    </div>
                </div>
                <div
                    class="absolute bottom-4 left-4 mt-2 w-32 rounded-lg border border-black px-2 py-1 text-center text-sm font-medium uppercase text-black"
                >
                    {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
                </div>
                <div class="absolute right-4 top-4 flex flex-col items-end">
                    <img
                        auth
                        class="h-10"
                        alt="Logo"
                        [src]="logo?.src || logo"
                    />
                    <div class="text-right text-xs" *ngIf="zones | level">
                        {{
                            'APP.VISITOR_KIOSK.LABEL_LOCATION'
                                | translate
                                    : {
                                          location:
                                              (zones | level)?.display_name ||
                                              (zones | level)?.name,
                                      }
                        }}
                    </div>
                    <pre class="text-right">
                        {{ (event | async)?.extension_data?.extra_details }}
                    </pre
                    >
                </div>
                <div class="absolute bottom-4 right-4 flex items-end space-x-2">
                    <div class="text-right font-medium leading-tight">
                        <div>
                            {{
                                (event | async)?.date || date
                                    | date: 'shortTime'
                            }}
                        </div>
                        <div>
                            {{
                                (event | async)?.date || date
                                    | date: 'mediumDate'
                            }}
                        </div>
                    </div>
                    <div
                        class="relative h-16 w-16 rounded-lg border border-base-200 p-2"
                    >
                        <img
                            class="h-12 w-12 object-contain object-center"
                            *ngIf="qr_code"
                            [src]="qr_code"
                        />
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <button
                    btn
                    matRipple
                    class="w-32"
                    *ngIf="allow_printing_label"
                    (click)="print()"
                >
                    {{ 'APP.VISITOR_KIOSK.PRINT_LABEL' | translate }}
                </button>
                <button btn matRipple class="w-32" (click)="next()">
                    {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    providers: [DatePipe],
    standalone: false,
})
export class CheckinResultsComponent extends AsyncHandler implements OnInit {
    public qr_code = '';
    public date = Date.now();
    public zones = [];
    public e;
    public readonly event = this._checkin.event;
    public readonly guest = this._checkin.guest;
    public readonly level = combineLatest([
        this.event,
        this._org.initialised,
    ]).pipe(map(([_]) => (_ ? this._org.levelWithID(_.zones) : null)));

    public readonly result_template = combineLatest([
        this.event,
        this.guest,
    ]).pipe(
        filter(([event, guest]) => !!event && !!guest),
        map(([event, guest]) => {
            let template = this._settings.get('app.checked_in_template');
            if (!template) template = DEFAULT_TEMPLATE;
            let updated_template = template
                .replace(/{{ title }}/g, event?.title || '')
                .replace(
                    /{{ room_name }}/g,
                    event.extension_data?.location_id || '',
                )
                .replace(/{{ host_name }}/g, event?.user_name || '')
                .replace(/{{ host_email }}/g, event?.user_email || '')
                .replace(/{{ visitor_name }}/g, guest?.name || '')
                .replace(/{{ visitor_email }}/g, guest?.email || '')
                .replace(
                    /{{ can_use_lift }}/g,
                    event.extension_data.can_use_lift
                        ? `Please use the vistor access lift over there`
                        : `Please wait in the lobby.`,
                );
            try {
                const date =
                    event.date ||
                    (event as any).event_start * 1000 ||
                    event.booking_start * 1000 ||
                    startOfMinute(Date.now());
                updated_template = updated_template
                    .replace(
                        /{{ date }}/g,
                        this._date.transform(date, 'mediumDate'),
                    )
                    .replace(
                        /{{ time }}/g,
                        this._date.transform(date, this.time_format),
                    );
            } catch {}
            return updated_template;
        }),
        startWith(DEFAULT_TEMPLATE),
    );

    public readonly print = () => {
        this.qr_code = generateQRCode(this.e?.asset_id);
        this.timeout('print', () => window.print());
    };

    public get time_format() {
        return this._settings.time_format;
    }

    public get now() {
        return startOfMinute(
            roundToNearestMinutes(Date.now(), { nearestTo: 5 }),
        );
    }

    public get logo() {
        return this._settings.theme === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }

    public get allow_printing_label() {
        return this._settings.get('app.allow_printing_label') !== false;
    }

    constructor(
        private _org: OrganisationService,
        private _checkin: CheckinStateService,
        private _settings: SettingsService,
        private _router: Router,
        private _date: DatePipe,
    ) {
        super();
    }

    public ngOnInit(): void {
        this.event.pipe(first()).subscribe((event) => {
            !event ? this.previous() : '';
            if (event) {
                this.date = event.date || event.booking_start * 1000;
                this.zones = event.zones;
                this.e = event;
            }
        });
    }

    public previous(): void {
        this._router.navigate(['/checkin']);
    }

    public next(): void {
        this._settings.get('app.allow_beverages')
            ? this._router.navigate(['/checkin', 'preferences'])
            : this._router.navigate(['/welcome']);
    }
}
