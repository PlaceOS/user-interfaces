import { Component, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from 'src/app/common/settings.service';
import { HashMap, Identity } from 'src/app/common/types';
import { ANIMATION_SHOW_CONTRACT_EXPAND } from 'src/app/common/angular-animations';


@Component({
    selector: 'a-map-legend',
    templateUrl: './map-legend.component.html',
    styleUrls: ['./map-legend.component.scss'],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND]
})
export class ExploreMapLegendComponent extends BaseClass implements OnInit {
    /** Mapping of legend item groups */
    public legend_items: HashMap<Identity[]> = {};
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
