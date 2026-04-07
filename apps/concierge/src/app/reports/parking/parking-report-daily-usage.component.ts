import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ParkingReportService } from './parking-report.service';

@Component({
    selector: 'parking-report-daily-usage',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="daily_stats()"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'APP.CONCIERGE.REPORTS_UNIQUE_HEADER' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER'
                            | translate,
                    },
                    {
                        key: 'booked_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
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
        CommonModule,
        TranslatePipe,
        SimpleTableComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class ParkingReportDailyUsageComponent {
    private _state = inject(ParkingReportService);
    private readonly _daily_stats = toSignal(this._state.daily_stats$, {
        initialValue: {},
    });

    public readonly print = input<boolean>(false);

    public readonly daily_stats = computed(() => {
        const days = this._daily_stats();
        const list = [];
        for (const date in days) {
            list.push({
                date,
                booking_count: unique(days[date].bookings, 'asset_id').length,
                host_count: unique(days[date].bookings, 'user_email').length,
                booked_count: days[date].bookings.length,
            });
        }
        list.sort((a, b) => a.date.localeCompare(b.date));
        return list;
    });

    public readonly download = async () => {
        const data = this.daily_stats();
        downloadFile('report-parking-daily-usage.csv', jsonToCsv(data));
    };
}
