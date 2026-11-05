import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { OrganisationService } from '@placeos/common';
import { CustomTooltipData } from './custom-tooltip.component';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

/**
 * Tooltip content to pick the active building. With the tooltip data
 * `'region'` it picks the active region. Arrow keys only move the
 * selection. A click, Space or Enter picks it and closes the tooltip.
 */
@Component({
    selector: 'building-select',
    template: `
        <div
            class="bg-base-100 relative -top-12 -right-1 flex max-h-[65vh] w-74 flex-col overflow-auto rounded-sm pb-3 shadow-sm"
        >
            <button
                back
                type="button"
                matRipple
                class="border-base-300 flex w-full items-center space-x-2 border-b px-2 py-3 text-left"
                (click)="close()"
            >
                <icon class="text-2xl">arrow_back</icon>
                <div class="leading-tight">
                    <div>
                        {{ active()?.display_name || active()?.name }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{
                            (is_region
                                ? 'RESOURCE.REGION'
                                : 'RESOURCE.BUILDING'
                            ) | translate
                        }}
                    </div>
                </div>
            </button>
            <div class="px-4 py-2 text-xs opacity-60">
                {{ label | translate }}
            </div>
            <mat-radio-group
                [attr.aria-label]="label | translate"
                [ngModel]="active()?.id"
                class="flex flex-col space-y-2 px-2"
                (keydown)="arrow_key = $event.key.startsWith('Arrow')"
                (keyup)="arrow_key = false"
            >
                @for (item of items(); track item) {
                    <mat-radio-button
                        [value]="item.id"
                        (click)="pick(item.id)"
                        (keydown.enter)="pick(item.id)"
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
export class BuildingSelectComponent {
    private _data = inject(CustomTooltipData);
    private _org = inject(OrganisationService);

    public readonly is_region = this._data?.data === 'region';
    public readonly label = this.is_region
        ? 'COMMON.REGION_SELECT'
        : 'COMMON.BUILDING_SELECT';
    public readonly items = this.is_region
        ? this._org.region_list
        : this._org.active_buildings;
    public readonly active = this.is_region
        ? this._org.active_region
        : this._org.active_building;
    /** True while an arrow key is down. Browsers click the radio it moves to. */
    public arrow_key = false;

    /** Make the item with the given ID active, then close the tooltip */
    public async pick(id: string) {
        if (this.arrow_key) return;
        if (this.is_region) {
            const region = this._org.region_list().find((_) => _.id === id);
            await this._org.setRegion(region);
            this._org.setBuilding(this._org.building, true);
        } else {
            const bld = this._org.active_buildings().find((_) => _.id === id);
            this._org.setBuilding(bld, true);
        }
        this.close();
    }

    public readonly close = () => this._data?.close();
}
