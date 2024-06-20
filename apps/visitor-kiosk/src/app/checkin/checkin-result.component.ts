import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, first, map, startWith } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { roundToNearestMinutes, startOfMinute } from 'date-fns';
import { DatePipe } from '@angular/common';

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
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4 space-y-4"
            *ngIf="event | async"
        >
            <h3 class="text-xl">You are checked in!</h3>
            <div
                class=""
                [innerHTML]="result_template | async | sanitize: 'html'"
            ></div>
            <div
                printable
                class="relative w-[24rem] h-[14rem] rounded-xl border border-neutral m-4 p-4 bg-base-100 print-only"
            >
                <div class="flex flex-col h-full">
                    <div
                        class="h-[4.75rem] w-[4.75rem] rounded-full bg-base-200 flex items-center justify-center"
                    >
                        <a-user-avatar
                            class="text-3xl"
                            [user]="{}"
                        ></a-user-avatar>
                    </div>
                    <div class="text-2xl">
                        {{ (event | async)?.asset_name }}
                    </div>
                    <div class="text-sm mt-1">
                        For: {{ (event | async)?.title }}
                    </div>
                    <div class="text-sm opacity-60">
                        Seeing {{ (event | async)?.user_name }}
                    </div>
                    <div
                        class="rounded-lg bg-black text-white px-2 py-1 text-sm mt-2 w-32 text-center"
                    >
                        Visitor
                    </div>
                </div>
                <div class="absolute top-4 right-4 flex flex-col items-end">
                    <img logo class="h-10" [src]="logo?.src" alt="Logo" />
                    <div class="text-xs text-right" *ngIf="level | async">
                        Cleared for
                        {{
                            (level | async)?.display_name ||
                                (level | async)?.name
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
                                (event | async)?.date || '' | date: 'shortTime'
                            }}
                        </div>
                        <div>
                            {{
                                (event | async)?.date || '' | date: 'mediumDate'
                            }}
                        </div>
                    </div>
                    <div
                        class="h-16 w-16 rounded-lg border border-base-200"
                    ></div>
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
                    Print Label
                </button>
                <button btn matRipple class="w-32" (click)="next()">
                    Done
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
})
export class CheckinResultsComponent implements OnInit {
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
                    event.extension_data?.location_id || ''
                )
                .replace(/{{ host_name }}/g, event?.user_name || '')
                .replace(/{{ host_email }}/g, event?.user_email || '')
                .replace(/{{ visitor_name }}/g, guest?.name || '')
                .replace(/{{ visitor_email }}/g, guest?.email || '')
                .replace(
                    /{{ can_use_lift }}/g,
                    event.extension_data.can_use_lift
                        ? `Please use the vistor access lift over there`
                        : `Please wait in the lobby.`
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
                        this._date.transform(date, 'mediumDate')
                    )
                    .replace(
                        /{{ time }}/g,
                        this._date.transform(date, this.time_format)
                    );
            } catch {}
            return updated_template;
        }),
        startWith(DEFAULT_TEMPLATE)
    );

    public readonly print = () => window.print();

    public get time_format() {
        return this._settings.time_format;
    }

    public get now() {
        return startOfMinute(
            roundToNearestMinutes(Date.now(), { nearestTo: 5 })
        );
    }

    /** Application logo to display */
    public get logo() {
        return this._settings.get('app.logo_light');
    }
    public get allow_printing_label() {
        return this._settings.get('app.allow_printing_label') !== false;
    }

    constructor(
        private _org: OrganisationService,
        private _checkin: CheckinStateService,
        private _settings: SettingsService,
        private _router: Router,
        private _date: DatePipe
    ) {}

    public ngOnInit(): void {
        this.event.pipe(first()).subscribe((_) => (!_ ? this.previous() : ''));
    }

    public previous(): void {
        this._router.navigate(['/checkin']);
    }

    public next(): void {
        // this._settings.get('app.allow_beverages')
        //     ? this._router.navigate(['/checkin', 'preferences']) :
        this._router.navigate(['/welcome']);
    }
}
