import { Component, OnInit } from '@angular/core';

import { ApplicationLink, BaseClass, HashMap, SettingsService } from '@user-interfaces/common';

@Component({
    selector: 'a-help-option-list',
    templateUrl: './option-list.component.html',
    styleUrls: ['./option-list.component.scss']
})
export class HelpOptionListComponent extends BaseClass implements OnInit {
    /** Settings for the help page */
    public settings: HashMap;
    /** Whether to show the overlay menu */
    public show_menu: boolean;
    /** Tiles to display on the help page */
    public get tiles(): ApplicationLink[] {
        return (this.settings || { tiles: [] }).tiles || [];
    }

    /** Min width of a tile */
    public get tile_width(): number {
        const tiles = this.tiles;
        const columns = (this.settings || { columns: 1 }).columns || 1;
        if (tiles.length > 2) {
            return 100 / columns - 1;
        }
        return 99;
    }

    /** Height of each tile */
    public get tile_height(): number {
        const tiles = this.tiles;
        const columns = (this.settings || { columns: 1 }).columns || 1;
        if (tiles.length > 2) {
            return 100 / ((tiles.length + tiles.length % columns) / columns );
        }
        return 50;
    }

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this.settings = this._settings.get('app.help') || {};
    }
}
