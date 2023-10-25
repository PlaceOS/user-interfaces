import { Component, Inject } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'region-select',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-base-100 shadow p-2 relative -top-12 -right-1 overflow-auto max-h-[65vh]"
            (click)="close()"
        >
            <div class="flex items-center space-x-2">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="">
                    {{
                        (region | async)?.display_name || (region | async)?.name
                    }}
                </div>
            </div>
            <div class="text-xs opacity-60 mb-4 px-2" i18n>Select a region</div>
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
})
export class RegionSelectComponent {
    public readonly regions = this._org.region_list;
    public readonly region = this._org.active_region;

    public readonly setRegion = async (i) => {
        await this._org.setRegion(i);
        this._org.saveBuilding(this._org.building.id);
        this._data?.close();
    };

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _org: OrganisationService
    ) {}
}
