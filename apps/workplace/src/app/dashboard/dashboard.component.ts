import { Component } from '@angular/core';
import { SettingsService } from '@user-interfaces/common';
import { format } from 'date-fns';


@Component({
    selector: 'dashboard',
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
            <div class="top relative flex flex-col justify-center text-white px-12 py-4">
                <div class="row location">Sydney</div>
                <div class="row text-2xl text-bold uppercase">{{ datetime }}</div>
            </div>
        </header>
        <main class="flex flex-1 px-8 flex-wrap overflow-auto">
            <dashboard-availability class="flex-1 min-w-64"></dashboard-availability>
            <dashboard-upcoming class="flex-1 min-w-64"></dashboard-upcoming>
            <dashboard-contacts class="flex-1 min-w-64"></dashboard-contacts>
        </main>
        <footer class="flex">
            <a button mat-button class="tile text-2xl" *ngFor="let tile of tiles" [routerLink]="tile.route">
                <div class="flex flex-col items-center">
                    <app-icon [icon]="tile.icon"></app-icon>
                    <span class="text-lg">{{ tile.name }}</span>
                </div>
            </a>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        main {
            min-height: 50%;
        }

        .top {
            background: transparent linear-gradient(89deg, #004a86 0%, #00a1d8 70%, #6eb95c 100%) 0% 0%
                no-repeat padding-box;
        }

        a[button].tile {
            flex: 1;
            border-radius: 0;
            background-color: #fff;
            color: rgba(0,0,0,.85);
            border: none;
            border-right: 1px solid #ccc;
        }

        a[button].tile:last-child {
            border: none;
        }
    `],
})
export class DashboardComponent {
    /** Whether to show overlay menu */
    public show_menu: boolean;

    public get tiles() {
        return this._settings.get('app.home.tiles') || [];
    }

    public get datetime() {
        return format(new Date(), 'EEEE, h:mma')
    }

    constructor(private _settings: SettingsService) {}
}
