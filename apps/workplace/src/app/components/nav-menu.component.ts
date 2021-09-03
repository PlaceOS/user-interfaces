import { Component } from '@angular/core';
import { ApplicationLink, BaseClass, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'nav-menu',
    template: `
        <div class="absolute hidden sm:w-56"></div>
        <div
            class="hidden sm:flex flex-col h-full bg-white overflow-auto text-black shadow divide-y divide-gray-100 relative p-2"
            (mouseenter)="hidden ? entered() : ''"
        >
            <a
                mat-icon-button
                class="h-12 rounded mb-2 hover:bg-gray-200"
                *ngFor="let item of menu_items"
                [routerLink]="[item.route]"
                [class.w-56]="!hidden"
                [class.w-12]="hidden"
                routerLinkActive="active"
            >
                <div
                    class="flex flex-col sm:flex-row items-center justify-start w-16 px-2"
                    [class.sm:w-56]="!hidden"
                >
                    <app-icon [icon]="item.icon"></app-icon>
                    <div
                        text
                        class="text-sm font-normal h-0 sm:h-auto overflow-hidden opacity-0 text-left"
                        [class.sm:w-0]="hidden"
                        [class.sm:w-48]="!hidden"
                        [class.sm:opacity-100]="!hidden"
                        [class.sm:ml-2]="!hidden"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </a>
        </div>
        <button
            mat-icon-button
            *ngIf="(buildings | async)?.length > 0"
            [matMenuTriggerFor]="menu"
            class="absolute hidden sm:block bottom-1 left-1 h-16 w-16 sm:h-12 rounded sm:mb-2 sm:hover:bg-gray-200"
            [class.sm:w-56]="!hidden"
            [class.sm:w-12]="hidden"
        >
            <div
                class="flex flex-col sm:flex-row items-center justify-start w-16 px-2"
                [class.sm:w-56]="!hidden"
            >
                <app-icon>business</app-icon>
                <div
                    text
                    class="text-sm font-normal h-0 sm:h-auto overflow-hidden opacity-0 text-left flex items-center"
                    [class.sm:w-0]="hidden"
                    [class.sm:w-48]="!hidden"
                    [class.sm:opacity-100]="!hidden"
                    [class.sm:ml-2]="!hidden"
                >
                    <div class="truncate flex-1 w-px">Building</div>
                    <div
                        class="text-xs ml-2 px-2 py-1 bg-primary text-white rounded"
                    >
                        {{
                            (building | async)?.display_name ||
                                (building | async)?.name
                        }}
                    </div>
                </div>
            </div>
        </button>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                class="w-48"
                (click)="setBuilding(bld)"
                *ngFor="let bld of buildings | async"
            >
                <div class="flex items-center">
                    <div class="flex-1">
                        {{ bld?.display_name || bld?.name }}
                    </div>
                    <app-icon *ngIf="bld.id === (building | async)?.id">
                        done
                    </app-icon>
                </div>
            </button>
        </mat-menu>
        <button
            mat-icon-button
            class="hidden sm:block absolute bottom-2 right-0 transform translate-x-1/2 bg-white shadow w-8 h-8 text-xs"
            (click)="hidden = !hidden"
        >
            <app-icon>
                {{ hidden ? 'chevron_right' : 'chevron_left' }}
            </app-icon>
        </button>
        <div class="flex items-center sm:hidden bg-white border-t border-gray-300">
            <a
                *ngFor="let item of menu_items | slice: 0:3"
                [routerLink]="[item.route]"
                class="flex items-center justify-center h-12 w-16 flex-1"
                routerLinkActive="active"
            >
                <app-icon class="text-2xl" [icon]="item.icon"></app-icon>
            </a>
            <button
                mat-icon-button
                class="rounded h-12 w-16"
                [matMenuTriggerFor]="mobile_menu"
            >
                <app-icon>more_vert</app-icon>
            </button>
            <mat-menu #mobile_menu="matMenu">
                <a
                    mat-menu-item
                    *ngFor="let item of menu_items | slice: 3"
                    [routerLink]="[item.route]"
                routerLinkActive="active"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-xl" [icon]="item.icon"></app-icon>
                        <div>{{ item.name }}</div>
                    </div>
                </a>
                <button
                    mat-menu-item
                    *ngIf="(buildings | async)?.length > 0"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex items-center w-48 space-x-2">
                        <app-icon class="text-xl">business</app-icon>
                        <div
                            text
                            class="flex items-center flex-1"
                        >
                            <div class="truncate flex-1 w-px">Building</div>
                            <div
                                class="text-xs ml-2 px-2 py-1 bg-primary text-white rounded"
                            >
                                {{
                                    (building | async)?.display_name ||
                                        (building | async)?.name
                                }}
                            </div>
                        </div>
                    </div>
                </button>
            </mat-menu>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
            }
            [text] {
                transition: opacity 200ms, height 200ms, width 300ms;
            }

            :host > div,
            a {
                transition: width 200ms, height 200ms;
            }

            .active {
                background-color: var(--primary) !important;
                color: #fff;
            }

            .active [text],
            a:hover [text] {
                opacity: 1 !important;
            }
        `,
    ],
})
export class NavMenuComponent extends BaseClass {
    public get hidden(): boolean {
        return this._settings.value('nav.small');
    }

    public set hidden(value: boolean) {
        this._settings.post('nav.small', value);
        this.clearTimeout('entered');
    }

    public get menu_items(): ApplicationLink[] {
        return this._settings.get('app.general.menu_items') || [];
    }

    public readonly buildings = this._org.building_list;
    public readonly building = this._org.active_building;

    public readonly setBuilding = (b) => (this._org.building = b);

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {
        super();
        this.entered();
    }

    public entered() {
        this.hidden = false;
        this.timeout('entered', () => (this.hidden = true), 5 * 1000);
    }
}
