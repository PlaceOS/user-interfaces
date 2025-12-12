import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { OrganisationService } from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'building-select',
    template: `
        <div
            class="relative -right-1 -top-12 flex max-h-[65vh] w-74 flex-col overflow-auto rounded-sm bg-base-100 pb-3 shadow-sm"
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
                            (building | async)?.display_name ||
                                (building | async)?.name
                        }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{ 'RESOURCE.BUILDING' | translate }}
                    </div>
                </div>
            </div>
            <div class="px-4 py-2 text-xs opacity-60">
                {{ 'COMMON.BUILDING_SELECT' | translate }}
            </div>
            <mat-radio-group
                [ngModel]="(building | async)?.id"
                class="flex flex-col space-y-2 px-2"
            >
                @for (bld of buildings | async; track bld) {
                    <mat-radio-button
                        [value]="bld.id"
                        (click)="setBuilding(bld)"
                    >
                        {{ bld.display_name || bld.name }}
                    </mat-radio-button>
                }
            </mat-radio-group>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRadioModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        FormsModule,
    ],
})
export class BuildingSelectComponent {
    private _data = inject(CustomTooltipData);
    private _org = inject(OrganisationService);

    public readonly buildings = this._org.active_buildings;
    public readonly building = this._org.active_building;

    public readonly setBuilding = (b) => {
        this._org.setBuilding(b, true);
        this._data?.close();
    };

    public readonly close = () => this._data?.close();
}
