import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-overall-list',
    template: `
        <div class="pb-2 w-full">
            <div
                class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
            >
                <div class="border-b border-base-200 p-4 flex items-center">
                    <h3 class="font-bold text-xl flex-1">
                        {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                    </h3>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        *ngIf="!print"
                        (click)="download()"
                    >
                        <app-icon>download</app-icon>
                    </button>
                </div>
                <simple-table
                    class="w-full block text-sm"
                    [data]="day_list"
                    [columns]="[
                        {
                            key: 'date',
                            name: 'FORM.DATE' | translate,
                            content: date_template,
                        },
                        {
                            key: 'approved',
                            name: 'APP.CONCIERGE.REPORTS_APPROVED' | translate,
                        },
                        {
                            key: 'count',
                            name:
                                'APP.CONCIERGE.REPORTS_TOTAL_REQUESTS'
                                | translate,
                        },
                        {
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_template,
                        },
                    ]"
                    [page_size]="print ? 0 : 10"
                    [sortable]="true"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                >
                </simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4">{{ data | date: 'mediumDate' }}</div>
                </ng-template>
                <ng-template #percent_template let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
})
export class ReportDesksOverallListComponent {
    @Input() public print = false;

    public readonly day_list = this._state.day_list;

    public readonly download = async () => {
        let data = await this.day_list.pipe(take(1)).toPromise();
        data = data.map((d) => ({
            ...d,
            date: format(d.date, 'MMM d, y(EEE)'),
        }));
        downloadFile('desks-usage.csv', jsonToCsv(data));
    };

    constructor(private _state: ReportsStateService) {}
}
