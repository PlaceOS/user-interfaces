import { Component, Input } from '@angular/core';
import { downloadFile, i18n, jsonToCsv } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { LockersReportService } from './lockers-report.service';

@Component({
    selector: 'lockers-report-list',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">
                    {{
                        'APP.CONCIERGE.REPORTS_LOCKERS_UTIL_HEADER' | translate
                    }}
                </h3>
                <button
                    icon
                    matRipple
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                    (click)="download()"
                    *ngIf="!print"
                >
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="lockers_bookings"
                [columns]="[
                    {
                        key: 'lockers_name',
                        name: 'RESOURCE.LOCKER' | translate,
                    },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'duration',
                        name: 'FORM.DURATION' | translate,
                        content: duration_template,
                    },
                    {
                        key: 'host',
                        name: 'APP.CONCIERGE.BOOKED_FOR' | translate,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
            <ng-template #duration_template let-row="row">
                <div class="p-4">
                    {{
                        row.duration > 12 * 60 || row.all_day
                            ? ('COMMON.ALL_DAY' | translate)
                            : (row.duration | duration: true)
                    }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export class LockersReportListComponent {
    @Input() public print = false;

    public readonly lockers_bookings = this._state.bookings$.pipe(
        map((bookings) => {
            const list = [];
            for (const booking of bookings) {
                list.push({
                    lockers_name:
                        booking.asset_name ||
                        booking.extension_data?.asset_name ||
                        booking.description ||
                        booking.asset_id,
                    date: booking.date,
                    duration: booking.duration,
                    all_day: booking.all_day,
                    host: booking.user_name || booking.user_email,
                    checked_in: i18n(
                        booking.checked_in ? 'COMMON.TRUE' : 'COMMON.FALSE',
                    ),
                    self_registered: i18n(
                        booking.extension_data?.self_registered
                            ? 'COMMON.TRUE'
                            : 'COMMON.FALSE',
                    ),
                });
            }
            list.sort((a, b) => a.date - b.date);
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.lockers_bookings.pipe(take(1)).toPromise();
        downloadFile('report-assets-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: LockersReportService) {}
}
