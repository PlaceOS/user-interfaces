import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { format } from 'date-fns';
import { take } from 'rxjs/operators';

import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-desks-overall-list',
    template: `
        <div class="w-full pb-2">
            <div
                class="m-4 overflow-hidden rounded border border-base-200 bg-base-100"
            >
                <div class="flex items-center border-b border-base-200 p-4">
                    <h3 class="flex-1 text-xl font-bold">
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
                    class="block w-full text-sm"
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
    standalone: false,
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
