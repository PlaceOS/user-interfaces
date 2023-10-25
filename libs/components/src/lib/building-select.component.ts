import { Component, Inject } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'building-select',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-base-100 shadow p-2 relative -top-12 -right-1 overflow-auto max-h-[65vh]"
            (click)="close()"
        >
            <div class="flex items-center space-x-2">
                <app-icon class="text-2xl">arrow_back</app-icon>
                <div class="">
                    {{
                        (building | async)?.display_name ||
                            (building | async)?.name
                    }}
                </div>
            </div>
            <div class="text-xs opacity-60 mb-4 px-2" i18n>
                Select a building location
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
})
export class BuildingSelectComponent {
    public readonly buildings = this._org.active_buildings;
    public readonly building = this._org.active_building;

    public readonly setBuilding = (b) => {
        this._org.building = b;
        this._org.saveBuilding(b.id);
        this._data?.close();
    };

    public readonly close = () => this._data?.close();

    constructor(
        @Inject(CustomTooltipData) private _data: any,
        private _org: OrganisationService
    ) {}
}
