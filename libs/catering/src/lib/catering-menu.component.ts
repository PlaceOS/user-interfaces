import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { unique } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CateringItem } from './catering-item.class';
import { CateringOrdersService } from './catering-orders.service';
import { CateringStateService } from './catering-state.service';

@Component({
    selector: 'catering-menu',
    template: `
        <simple-table
            class="block w-full min-w-[32rem] text-sm"
            [data]="menu"
            [columns]="[
                {
                    key: 'active',
                    name: ' ',
                    content: active_template,
                    size: '3.5rem',
                    sortable: false,
                },
                { key: 'name', name: 'FORM.NAME' | translate },
                { key: 'category', name: 'COMMON.CATEGORY' | translate },
                {
                    key: 'caterer',
                    name: 'CATERING.CATERER' | translate,
                    show: !filters?.caterer && caterers.length > 1,
                },
                {
                    key: 'unit_price',
                    name: 'CATERING.ITEM_PRICE' | translate,
                    content: price_template,
                    size: '6rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: actions_template,
                    size: '6.5rem',
                    sortable: false,
                },
            ]"
            [filter]="filters?.search"
            [show_children]="show_children"
            [child_template]="child_template"
            [sortable]="true"
            [empty_message]="'CATERING.ITEM_LIST_EMPTY' | translate"
        />
        <ng-template #active_template let-row="row">
            <mat-checkbox
                class="mx-auto"
                [matTooltip]="'CATERING.ORDER_ALLOW' | translate"
                matTooltipPosition="right"
                [ngModel]="isEnabled(row)"
                (ngModelChange)="setEnabled(row, $event)"
            />
        </ng-template>
        <ng-template #price_template let-data="data">
            <div
                class="mx-auto flex items-center rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-content"
            >
                {{ data / 100 | currency: (symbol | async) }}
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    [disabled]="!can_edit"
                    [class.opacity-0]="!can_edit"
                    [matMenuTriggerFor]="menu"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="addOption(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <icon>add</icon>
                            <div>
                                {{ 'CATERING.ITEM_OPTION_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="editItem(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <icon>edit</icon>
                            <div>{{ 'CATERING.ITEM_EDIT' | translate }}</div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        class="flex items-center"
                        (click)="removeItem(row)"
                    >
                        <div class="flex items-center space-x-2 pr-2">
                            <icon class="text-error">delete</icon>
                            <div>{{ 'CATERING.ITEM_REMOVE' | translate }}</div>
                        </div>
                    </button>
                </mat-menu>
                <button
                    icon
                    matRipple
                    [disabled]="!row.options?.length"
                    [matTooltip]="
                        row.options?.length
                            ? ((show_children[row.id]
                                  ? 'CATERING.ITEM_OPTION_HIDE'
                                  : 'CATERING.ITEM_OPTION_SHOW'
                              ) | translate)
                            : ''
                    "
                    (click)="show_children[row.id] = !show_children[row.id]"
                >
                    <icon>
                        {{
                            show_children[row.id]
                                ? 'keyboard_arrow_down'
                                : 'chevron_right'
                        }}
                    </icon>
                </button>
            </div>
        </ng-template>
        <ng-template #child_template let-row="row">
            @for (option of row.options; track option) {
                <div
                    class="relative flex items-center space-x-2 border-b border-solid border-base-200 p-2"
                >
                    <div
                        class="absolute inset-y-0 left-0 w-2 bg-black opacity-10"
                    ></div>
                    <div class="flex-1 pl-4 pr-2">
                        <div class="text">{{ option.name }}</div>
                        <div class="text-xs opacity-60">
                            {{ option.group }}
                        </div>
                    </div>
                    @if (can_edit) {
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'CATERING.ITEM_OPTION_EDIT' | translate
                            "
                            (click)="editOption(row, option)"
                        >
                            <icon>edit</icon>
                        </button>
                    }
                    @if (can_edit) {
                        <button
                            icon
                            matRipple
                            class="!mr-1"
                            [matTooltip]="
                                'CATERING.ITEM_OPTION_REMOVE' | translate
                            "
                            (click)="removeOption(row, option)"
                        >
                            <icon class="text-error">delete</icon>
                        </button>
                    }
                </div>
            }
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
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        IconComponent,
        MatMenuModule,
        MatCheckboxModule,
        MatTooltipModule,
        SimpleTableComponent,
        FormsModule,
    ],
})
export class CateringMenuComponent {
    private _catering = inject(CateringStateService);
    private _orders = inject(CateringOrdersService);

    public show_children: Record<string, boolean> = {};
    /** Observable for the currently active menu */
    public readonly menu = combineLatest([
        this._catering.menu,
        this._orders.order_filters,
    ]).pipe(
        map(([menu, filters]) =>
            menu.filter(
                (item) =>
                    !filters?.caterer ||
                    (filters.caterer === '<empty>' && !item.caterer) ||
                    item.caterer === filters.caterer,
            ),
        ),
    );

    public readonly addOption = (item) => this._catering.addOption(item);

    public readonly editOption = (item, option) =>
        this._catering.addOption(item, option);

    public readonly removeOption = (item, option) =>
        this._catering.deleteOption(item, option);

    public readonly editItem = (item) => this._catering.addItem(item);

    public readonly removeItem = (item) => this._catering.deleteItem(item);

    public get filters() {
        return this._orders.filters;
    }

    public get can_edit() {
        return this._catering.is_editable;
    }

    public get categories() {
        return this._catering.categories;
    }

    public get caterers() {
        return this._catering.caterer_list;
    }

    public isEnabled(item: CateringItem) {
        return !item.hide_for_zones.includes(this._catering.zone);
    }

    public setEnabled(item: CateringItem, state: boolean) {
        let list = item.hide_for_zones;
        if (!state) list = unique([...list, this._catering.zone]);
        else list = list.filter((_) => _ !== this._catering.zone);
        this._catering.updateItem(
            new CateringItem({ ...item, hide_for_zones: list }),
        );
    }
}
