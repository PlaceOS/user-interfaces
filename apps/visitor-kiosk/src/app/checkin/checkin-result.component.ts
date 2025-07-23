import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncHandler, nextValueFrom, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { roundToNearestMinutes, startOfMinute } from 'date-fns';
import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { combineLatest, firstValueFrom } from 'rxjs';
import { filter, first, map, startWith } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

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
        @if (event | async) {
            <div
                class="relative flex w-[36rem] flex-col items-center space-y-4 overflow-hidden rounded bg-base-100 p-4 shadow print:hidden"
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
                @let ev = event | async;
                @if (printing()) {
                    <div printable class="print-only">
                        <user-label
                            [user]="{
                                name: ev?.asset_name || ev?.description,
                                email: ev?.asset_id,
                                photo: photo | async,
                                title: ev?.title,
                                host: ev?.user_name || ev.user_email,
                                zones: ev?.zones,
                                date: ev?.date || date,
                                extra_details:
                                    ev?.extension_data?.extra_details,
                                pass_number: ev?.extension_data?.pass_number,
                                qr_code: qr_code,
                            }"
                            class="!text-base"
                        />
                    </div>
                }
                <div class="flex items-center space-x-2">
                    @if (allow_printing_label) {
                        <button btn matRipple class="w-32" (click)="print()">
                            {{ 'APP.VISITOR_KIOSK.PRINT_LABEL' | translate }}
                        </button>
                    }
                    @if (allow_beverages()) {
                        <button
                            btn
                            matRipple
                            class="inverse w-32"
                            (click)="next()"
                        >
                            {{ 'APP.VISITOR_KIOSK.BEVERAGES' | translate }}
                        </button>
                    }
                    <button btn matRipple class="w-32" (click)="done()">
                        {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
                    </button>
                </div>
            </div>
        }
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
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);
    private readonly _router = inject(Router);
    private readonly _date = inject(DatePipe);
    private readonly _checkin = inject(CheckinStateService);

    public qr_code = '';
    public date = Date.now();
    public zones = [];
    public e;
    public readonly allow_beverages = signal(false);
    public readonly printing = signal(false);
    public readonly event = this._checkin.event;
    public readonly guest = this._checkin.guest;
    public readonly photo = this._checkin.photo;

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
                    event?.extension_data?.location_id || '',
                )
                .replace(/{{ host_name }}/g, event?.user_name || '')
                .replace(/{{ host_email }}/g, event?.user_email || '')
                .replace(/{{ visitor_name }}/g, guest?.name || '')
                .replace(/{{ visitor_email }}/g, guest?.email || '')
                .replace(
                    /{{ can_use_lift }}/g,
                    event?.extension_data?.can_use_lift
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
        this.printing.set(true);
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

    public async ngOnInit() {
        const event = await firstValueFrom(this.event.pipe(first()));
        !event ? this.previous() : '';
        if (!event) return;
        this.date = event.date || event.booking_start * 1000;
        this.zones = event.zones;
        this.e = event;
        const standalone_location = this._settings.get(
            'app.standalone_visitor_location',
        );
        this.allow_beverages.set(
            this._settings.get('app.allow_beverages') &&
                (event.linked_event || standalone_location),
        );
    }

    public previous(): void {
        this._router.navigate(['/checkin']);
    }

    public done() {
        this._router.navigate(['/welcome']);
    }

    public async next() {
        const event = await nextValueFrom(this.event);
        const standalone_location = this._settings.get(
            'app.standalone_visitor_location',
        );
        this._settings.get('app.allow_beverages') &&
        (event.linked_event || standalone_location)
            ? this._router.navigate(['/checkin', 'preferences'])
            : this._router.navigate(['/welcome']);
    }
}
