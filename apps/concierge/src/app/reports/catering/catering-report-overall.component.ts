import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { OrganisationService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { CateringReportStateService } from './catering-report-state.service';

@Component({
    selector: 'catering-report-overall',
    template: `
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div count class="text-3xl">
                {{ stats().order_count || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div unique class="text-3xl">
                {{ stats().unique_items || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ITEMS_UNIQUE' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div items class="text-3xl">
                {{ stats().item_count || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div total class="text-3xl">
                {{ stats().total_cost / 100 || 0 | currency: code }}
            </div>
            <div class="text-sm">
                {{ 'CATERING.TOTAL_COST' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div average class="text-3xl">
                {{ stats().avg_cost / 100 || 0 | currency: code }}
            </div>
            <div class="text-sm">
                {{
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_AVERAGE' | translate
                }}
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                max-width: 64rem;
                margin: 0 auto;
            }

            [item] {
                border: 1px solid var(--base-200);
                border-radius: 0.5rem;
                padding: 1rem;
                margin: 0.5rem;
                height: 6rem;
                width: 12rem;
                min-width: 7rem;
            }
        `,
    ],
    imports: [CommonModule, TranslatePipe],
})
export class CateringReportOverallComponent {
    private _report = inject(CateringReportStateService);
    private _org = inject(OrganisationService);

    public readonly stats = toSignal(this._report.stats, {
        initialValue: {
            order_count: 0,
            unique_items: 0,
            item_count: 0,
            total_cost: 0,
            avg_cost: 0,
        },
    });

    public get code() {
        return this._org.currency_code;
    }
}
