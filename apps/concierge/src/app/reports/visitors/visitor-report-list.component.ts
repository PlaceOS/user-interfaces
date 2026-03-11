import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, i18n, jsonToCsv, nextValueFrom } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { format } from 'date-fns';
import { map } from 'rxjs/operators';
import { VisitorsReportService } from './visitors-report.service';

@Component({
    selector: 'visitor-report-list',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_VISITORS_LIST_HEADER' | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                        aria-label="Download report"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
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
                [page_size]="print() ? 0 : 10"
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
    imports: [
        SimpleTableComponent,
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatTooltipModule,
    ],
})
export class VisitorReportListComponent {
    private _state = inject(VisitorsReportService);

    public readonly print = input(false);

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
        const data = await nextValueFrom(this.visitor_bookings);
        for (const bkn of data) {
            bkn.date = format(bkn.date, 'yyyy-MM-dd HH:mm');
        }
        downloadFile('report-visitor-daily-usage.csv', jsonToCsv(data));
    };
}
