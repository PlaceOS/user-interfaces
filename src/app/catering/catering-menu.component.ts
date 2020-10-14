import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CateringStateService } from './catering-state.service';

@Component({
    selector: 'catering-menu',
    template: `
        <mat-tab-group class="h-full" (selectedIndexChange)="shown_tab.next($event === 0 ? '' : categories[$event - 1])">
            <mat-tab label="All Items">
                <ng-container *ngIf="(menu | async)?.length; else empty_state">
                    <ng-container *ngFor="let item of menu | async">
                        <div catering-menu-item [item]="item"></div>
                    </ng-container>
                </ng-container>
            </mat-tab>
            <mat-tab *ngFor="let group of categories" [label]="group">
                <ng-container *ngFor="let item of (tab_menu | async)[group]">
                    <div catering-menu-item [item]="item"></div>
                </ng-container>
            </mat-tab>
        </mat-tab-group>
        <ng-template #empty_state>
            <div class="info-block">
                <div class="icon">
                    <app-icon [icon]="{ class: 'material-icons', content: 'close' }"></app-icon>
                </div>
                <div class="text">No items in menu</div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 90%;
                width: 100%;
            }
        `
    ]
})
export class CateringMenuComponent {
    /** Observable for the currently active menu */
    public readonly menu = this._catering.menu;
    /** Store for the currently selected tab */
    public readonly shown_tab = new BehaviorSubject<string>('');
    /** Observable for the menu list for the selected tab */
    public readonly tab_menu = this.menu.pipe(map((menu) => {
        const menu_map = {};
        for (const group of this.categories) {
            menu_map[group] = menu.filter(item => item.category === group);
        }
        return menu_map;
    }));

    public get categories() {
        return this._catering.categories;
    }

    constructor(private _catering: CateringStateService) {}
}
