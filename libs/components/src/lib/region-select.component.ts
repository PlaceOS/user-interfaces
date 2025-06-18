import { Component, inject } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'region-select',
    template: `
        <div
            class="relative -right-1 -top-12 flex max-h-[65vh] w-[18.5rem] flex-col overflow-auto rounded bg-base-100 pb-3 shadow"
            (click)="close()"
        >
            <div
                matRipple
                class="flex items-center space-x-2 border-b border-base-300 px-2 py-3"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="leading-tight">
                    <div>
                        {{
                            (region | async)?.display_name ||
                                (region | async)?.name
                        }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{ 'RESOURCE.REGION' | translate }}
                    </div>
                </div>
            </div>
            <div class="px-4 py-2 text-xs opacity-60">
                {{ 'COMMON.REGION_SELECT' | translate }}
            </div>
            <mat-radio-group
                [ngModel]="(region | async)?.id"
                class="flex flex-col space-y-2 px-2"
            >
                @for (item of regions | async; track item) {
                    <mat-radio-button
                        [value]="item.id"
                        (click)="setRegion(item)"
                    >
                        {{ item.display_name || item.name }}
                    </mat-radio-button>
                }
            </mat-radio-group>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RegionSelectComponent {
    private _data = inject(CustomTooltipData);
    private _org = inject(OrganisationService);

    public readonly regions = this._org.region_list;
    public readonly region = this._org.active_region;

    public readonly setRegion = async (i) => {
        await this._org.setRegion(i);
        this._org.setBuilding(this._org.building, true);
        this._data?.close();
    };

    public readonly close = () => this._data?.close();
}
