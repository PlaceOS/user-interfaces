import { Component, Input } from '@angular/core';
import { downloadFile, i18n, jsonToCsv } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { VisitorsReportService } from './visitors-report.service';

@Component({
    selector: 'visitor-report-list',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">
                    {{
                        'APP.CONCIERGE.REPORTS_VISITORS_LIST_HEADER' | translate
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
                [data]="visitor_bookings"
                [columns]="[
                    { key: 'visitor_name', name: 'FORM.NAME' | translate },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    { key: 'host', name: 'FORM.HOST' | translate },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                    {
                        key: 'self_registered',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_SELF_REGISTERED'
                            | translate,
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
        </div>
    `,
    styles: [``],
})
export class VisitorReportListComponent {
    @Input() public print = false;

    public readonly visitor_bookings = this._state.bookings$.pipe(
        map((bookings) => {
            const list = [];
            for (const booking of bookings) {
                list.push({
                    visitor_name:
                        booking.asset_name ||
                        booking.extension_data?.asset_name ||
                        booking.description ||
                        booking.asset_id,
                    date: booking.date,
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
            return list;
        }),
    );

    public readonly download = async () => {
        const data = await this.visitor_bookings.pipe(take(1)).toPromise();
        downloadFile('report-assets-daily-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: VisitorsReportService) {}
}
