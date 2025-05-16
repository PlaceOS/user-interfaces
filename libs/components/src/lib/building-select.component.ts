import { Component, Inject } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'building-select',
    template: `
        <div
            class="relative -right-1 -top-12 flex max-h-[65vh] w-[18.5rem] flex-col overflow-auto rounded bg-base-100 p-2 shadow"
            (click)="close()"
        >
            <div class="flex items-center space-x-2">
                <icon class="text-2xl">arrow_back</icon>
                <div class="">
                    {{
                        (building | async)?.display_name ||
                            (building | async)?.name
                    }}
                </div>
            </div>
            <div class="mb-4 px-2 text-xs opacity-60">
                {{ 'COMMON.BUILDING_SELECT' | translate }}
            </div>
            <mat-radio-group
                [ngModel]="(building | async)?.id"
                class="flex flex-col space-y-2 px-2"
            >
                <mat-radio-button
                    *ngFor="let bld of buildings | async"
                    [value]="bld.id"
                    (click)="setBuilding(bld)"
                >
                    {{ bld.display_name || bld.name }}
                </mat-radio-button>
            </mat-radio-group>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class BuildingSelectComponent {
    public readonly buildings = this._org.active_buildings;
    public readonly building = this._org.active_building;

    public readonly setBuilding = (b) => {
        this._org.setBuilding(b, true);
        this._data?.close();
    };

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _org: OrganisationService,
    ) {}
}
