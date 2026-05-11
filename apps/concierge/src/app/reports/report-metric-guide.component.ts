import { Component, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomTooltipComponent, IconComponent } from '@placeos/components';

export interface ReportMetricGuideItem {
    label: string;
    description: string;
}

@Component({
    selector: 'placeos-report-metric-guide',
    template: `
        <div
            class="text-right print:hidden"
            [class.px-4]="!inline()"
            [class.py-2]="!inline()"
            [class.ml-2]="inline()"
        >
            <button
                type="button"
                customTooltip
                [content]="metric_guide_tooltip"
                [xPosition]="'end'"
                [yPosition]="'bottom'"
                [matTooltip]="title()"
                matTooltipPosition="above"
                class="bg-base-100 text-base-content border-base-200 hover:bg-base-200 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-sm"
                [attr.aria-label]="title()"
            >
                <icon class="text-xl">info</icon>
            </button>
        </div>
        <ng-template #metric_guide_tooltip>
            <div
                class="border-base-200 bg-base-100 my-2 w-[min(42rem,calc(100vw-3rem))] rounded-sm border p-4 text-left text-sm shadow-xl"
            >
                <h4 class="mb-3 font-medium">{{ title() }}</h4>
                <div class="grid gap-3 md:grid-cols-2">
                    @for (item of items(); track item.label) {
                        <div>
                            <div class="font-medium">{{ item.label }}</div>
                            <p class="mt-1 opacity-70">{{ item.description }}</p>
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
    imports: [CustomTooltipComponent, IconComponent, MatTooltipModule],
})
export class ReportMetricGuideComponent {
    public readonly inline = input(false);
    public readonly title = input('How metrics are calculated');
    public readonly items = input<ReportMetricGuideItem[]>([]);
}
