import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { downloadFile, jsonToCsv } from '@placeos/common';
import { format } from 'date-fns';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ReportsStateService } from '../reports-state.service';

@Component({
    selector: 'report-spaces-overall-list',
    template: `
        <div class="w-full">
            <div
                class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
            >
                <div class="border-base-200 flex items-center border-b p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                    </h3>
                    @if (!print()) {
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
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
                    [data]="day_list()"
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
                    [sortable]="true"
                    [page_size]="print() ? 0 : 10"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                ></simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4">{{ data | date: 'mediumDate' }}</div>
                </ng-template>
                <ng-template #percent_template let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        SimpleTableComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class ReportSpacesOverallListComponent {
    private _state = inject(ReportsStateService);

    public readonly print = input(false);

    public readonly day_list = toSignal(this._state.day_list, {
        initialValue: [],
    });

    public readonly download = async () => {
        let data = this.day_list();
        data = data.map((d) => ({
            ...d,
            date: format(d.date, 'MMMM d, y(EEE)'),
        }));
        downloadFile('spaces-usage.csv', jsonToCsv(data));
    };
}
