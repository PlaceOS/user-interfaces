import { Component } from '@angular/core';
import { ApplicationLink, BaseClass, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'nav-menu',
    template: `
        <div class="absolute hidden sm:w-56"></div>
        <div
            class="flex sm:flex-col bg-white overflow-auto text-black shadow divide-y divide-gray-100 w-full sm:w-auto h-auto sm:h-full border-t sm:border-t border-gray-300 relative p-2"
            (mouseenter)="hidden ? entered() : ''"
        >
            <div class="sm:hidden block h-16 min-w-[4rem] relative -left-1 top-1">
                <ng-container
                    *ngTemplateOutlet="building_button"
                ></ng-container>
            </div>
            <a
                mat-icon-button
                class="h-16 w-16 sm:h-12 rounded sm:mb-2 sm:hover:bg-gray-200"
                *ngFor="let item of menu_items"
                [routerLink]="[item.route]"
                [class.sm:w-56]="!hidden"
                [class.sm:w-12]="hidden"
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
        <div class="hidden sm:block">
            <ng-container *ngTemplateOutlet="building_button"></ng-container>
        </div>
        <ng-template #building_button>
            <button
                mat-icon-button
                *ngIf="(buildings | async)?.length > 0"
                [matMenuTriggerFor]="menu"
                class="absolute bottom-1 left-1 h-16 w-16 sm:h-12 rounded sm:mb-2 sm:hover:bg-gray-200"
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
        </ng-template>
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
