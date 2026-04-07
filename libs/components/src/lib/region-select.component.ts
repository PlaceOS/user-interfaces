import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { OrganisationService } from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'region-select',
    template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex max-h-[65vh] w-74 flex-col overflow-auto rounded-sm pb-3 shadow-sm"
            (click)="close()"
        >
            <div
                matRipple
                class="border-base-300 flex items-center space-x-2 border-b px-2 py-3"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="leading-tight">
                    <div>
                        {{ region()?.display_name || region()?.name }}
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
                [ngModel]="region()?.id"
                class="flex flex-col space-y-2 px-2"
            >
                @for (item of regions(); track item) {
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
    imports: [
        MatRadioModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        FormsModule,
    ],
})
export class RegionSelectComponent {
    private _data = inject(CustomTooltipData);
    private _org = inject(OrganisationService);

    public readonly regions = toSignal(this._org.region_list);
    public readonly region = toSignal(this._org.active_region);

    public readonly setRegion = async (i) => {
        await this._org.setRegion(i);
        this._org.setBuilding(this._org.building, true);
        this._data?.close();
    };

    public readonly close = () => this._data?.close();
}
