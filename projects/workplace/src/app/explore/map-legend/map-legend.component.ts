import { Component, OnInit } from '@angular/core';

import { BaseClass } from 'src/app/common/base.class';
import { HashMap } from 'src/app/common/types';
import { ANIMATION_SHOW_CONTRACT_EXPAND } from 'src/app/common/angular-animations';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'a-map-legend',
    template: `
        <div
            name="map-legend"
            class="relative mt-2 bg-white rounded-t"
            *ngIf="group_names && group_names.length"
        >
            <div class="absolute top-0 left-0 -translate-y-full overflow-hidden p-2 pb-0">
                <div
                    name="title"
                    class="flex items-center shadow flex-1 text-sm -mb-px py-2 px-4 bg-white rounded-t"
                    (click)="show_legend = !show_legend"
                >
                    <div class="text">{{ show_legend ? 'Hide' : 'Show' }} Legend</div>
                    <app-icon class="text-lg" className="material-icons">{{
                        show_legend ? 'arrow_drop_up' : 'arrow_drop_down'
                    }}</app-icon>
                </div>
            </div>
            <div
                name="contents"
                class="overflow-hidden px-2 shadow rounded-t"
                [@show]="show_legend ? 'show' : 'hide'"
                [style.padding-bottom]="show_legend ? '1em' : ''"
                [style.padding-bottom]="show_legend ? '.5em' : ''"
                [style.overflow]="show_legend ? 'hidden auto' : 'hidden'"
            >
                <ul class="list-none p-0 m-0">
                    <ng-container *ngFor="let group of group_names">
                        <li
                            name="group"
                            class="flex items-center py-2 px-1 text-dark-fade bg-none"
                            *ngIf="show_group_names"
                        >
                            <div class="flex-1 w-px h-px"></div>
                            <div name="name" class="my-2">{{ group }}</div>
                            <div class="flex-1 w-px h-px bg-gray-200"></div>
                        </li>
                        <li
                            name="item"
                            [id]="item.key"
                            class="flex items-center text-xs rounded px-4 py-2"
                            *ngFor="let item of legend_items[group]"
                        >
                            <div
                                name="ref"
                                class="relative flex items-center justify-center mr-2 rounded-full bg-white overflow-hidden"
                            >
                                <ng-container *ngIf="item.icon; else colour_display">
                                    <app-icon class="text-lg" [icon]="item.icon"></app-icon>
                                </ng-container>
                                <ng-template #colour_display>
                                    <div
                                        class="absolute inset-0"
                                        [style.background-color]="item.color || colours[item.key]"
                                    ></div>
                                </ng-template>
                            </div>
                            <div class="name">{{ item.name }}</div>
                        </li>
                    </ng-container>
                </ul>
            </div>
        </div>
    `,
    styles: [
        `
            [name='title'] {
                min-width: 50%;
            }

            [name='contents'] {
                max-height: 50vh;
            }

            [name="group"] {
                color: rgba(#000, 0.65);
            }

            [name="group"] .name {
                margin: 0 0.5em;
            }

            li:nth-child(2n) {
                background-color: rgba(#000, 0.05);
            }

            [name="ref"] {
                height: 20px;
                width: 20px;
                border: 1px solid rgba(#000, 0.35);
            }
        `,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class ExploreMapLegendComponent extends BaseClass implements OnInit {
    /** Mapping of legend item groups */
    public legend_items: HashMap<any[]> = {};
    /** Mapping of map colours */
    public colours: HashMap<string> = {};
    /** Whether group names should be displayed */
    public show_group_names: boolean;
    /** Whether the legend items should be shown */
    public show_legend = false;

    /** List of group names for legend items */
    public get group_names(): string[] {
        return Object.keys(this.legend_items || {});
    }

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        const explore_settings = this._settings.get('app.explore') || ({} as any);
        this.legend_items = explore_settings.legend || {};
        this.colours = explore_settings.colors || {};
        this.show_group_names = !!explore_settings.show_legend_group_names;
    }
}
