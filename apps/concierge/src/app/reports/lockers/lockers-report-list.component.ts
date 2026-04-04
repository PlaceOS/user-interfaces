import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { downloadFile, i18n, jsonToCsv } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { format } from 'date-fns';
import { DurationPipe } from 'libs/components/src/lib/duration.pipe';
import { LockersReportService } from './lockers-report.service';

@Component({
    selector: 'lockers-report-list',
    template: `
        <div
            class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_LOCKERS_UTIL_HEADER' | translate
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
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="lockers_bookings()"
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
                        key: 'type',
                        name: 'COMMON.TYPE' | translate,
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
    imports: [
        CommonModule,
        DurationPipe,
        TranslatePipe,
        SimpleTableComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
    ],
})
export class LockersReportListComponent {
    private _state = inject(LockersReportService);
    private readonly _bookings = toSignal(this._state.bookings$, {
        initialValue: [],
    });

    public readonly print = input(false);

    public readonly lockers_bookings = computed(() => {
        const list = [];
        for (const booking of this._bookings()) {
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
                type:
                    booking.extension_data?.tags?.[0] ||
                    booking.tags?.[0] ||
                    '',
            });
        }
        list.sort((a, b) => a.date - b.date);
        return list;
    });

    public readonly download = async () => {
        const data = this.lockers_bookings();
        for (const bkn of data) {
            bkn.date = format(bkn.date, 'yyyy-MM-dd HH:mm');
        }
        downloadFile('report-lockers-daily-usage.csv', jsonToCsv(data));
    };
}
