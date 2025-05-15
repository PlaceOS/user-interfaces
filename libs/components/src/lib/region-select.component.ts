import { Component, Inject } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'region-select',
    template: `
        <div
            class="relative -right-1 -top-12 flex max-h-[65vh] w-[18.5rem] flex-col overflow-auto rounded bg-base-100 p-2 shadow"
            (click)="close()"
        >
            <div class="flex items-center space-x-2">
                <icon class="text-2xl">arrow_back</icon>
                <div class="">
                    {{
                        (region | async)?.display_name || (region | async)?.name
                    }}
                </div>
            </div>
            <div class="mb-4 px-2 text-xs opacity-60">
                {{ 'COMMON.REGION_SELECT' | translate }}
            </div>
            <mat-radio-group
                [ngModel]="(region | async)?.id"
                class="flex flex-col space-y-2 px-2"
            >
                <mat-radio-button
                    *ngFor="let item of regions | async"
                    [value]="item.id"
                    (click)="setRegion(item)"
                >
                    {{ item.display_name || item.name }}
                </mat-radio-button>
            </mat-radio-group>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class RegionSelectComponent {
    public readonly regions = this._org.region_list;
    public readonly region = this._org.active_region;

    public readonly setRegion = async (i) => {
        await this._org.setRegion(i);
        this._org.setBuilding(this._org.building, true);
        this._data?.close();
    };

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _org: OrganisationService,
    ) {}
}
