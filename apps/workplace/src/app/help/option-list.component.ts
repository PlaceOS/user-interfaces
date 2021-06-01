import { Component, OnInit } from '@angular/core';

import {
    ApplicationLink,
    BaseClass,
    HashMap,
    SettingsService,
} from '@placeos/common';

@Component({
    selector: 'a-help-option-list',
    template: `
        <div
            class="flex items-center flex-wrap h-full w-full bg-gray-200 bg-cover bg-center p-2 overflow-auto"
            [style.background-image]="
                'url(' + settings?.background + ')' | safe: 'style'
            "
        >
            <ng-container *ngFor="let item of tiles">
                <a
                    class="relative flex flex-1"
                    [href]="item.link || item.route"
                    [target]="item.link ? '_blank' : ''"
                    [style.min-width]="tile_width + '%'"
                    [style.height]="tile_height + '%'"
                >
                    <div
                        inner
                        class="relative rounded-lg flex flex-col items-center justify-center bg-black hover:bg-opacity-30 bg-opacity-60 text-white overflow-hidden bg-center bg-cover m-auto shadow cursor-pointer"
                        [style.background-image]="
                            'url(' + item?.background + ')' | safe: 'style'
                        "
                    >
                        <div
                            overlay
                            class="absolute inset-0 bg-black hover:bg-opacity-30 bg-opacity-60 z-0"
                            *ngIf="item?.background"
                        ></div>
                        <app-icon
                            class="relative text-7xl mb-2 z-10"
                            [icon]="item?.icon"
                        ></app-icon>
                        <p class="relative text-2xl z-10">{{ item?.name }}</p>
                    </div>
                </a>
            </ng-container>
        </div>
    `,
    styles: [
        `
            [inner] {
                width: 786px;
                max-width: calc(100% - 1em);
                height: calc(100% - 1em);
                transition: box-shadow 200ms, background-color 200ms,
                    color 200ms;
            }

            [overlay] {
                transition: background-color 200ms;
            }

            .active [inner] {
                position: fixed;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                background-color: #fff;
                color: rgba(var(--primary), 0.85);
                z-index: 2;
            }
        `,
    ],
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
            return 100 / ((tiles.length + (tiles.length % columns)) / columns);
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
