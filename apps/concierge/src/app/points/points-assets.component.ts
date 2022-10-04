import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';
import { PointsStateService } from './points-state.service';

export interface CustomRate {
    rate: number;
    conditions: any;
}

export interface PointAsset {
    id: string;
    name: string;
    type: 'space' | 'desk' | 'parking';
    accept_points: boolean;
    discount_cap: number;
    unit_price: number;
    custom_rates: CustomRate[];
}

@Component({
    selector: 'points-assets',
    template: `
        <custom-table
            class="w-full h-full"
            [dataSource]="asset_list"
            [columns]="[
                'name',
                'type',
                'unit_price',
                'accept_points',
                'discount_cap',
                'actions'
            ]"
            [display_column]="[
                'Name',
                'Type',
                'Unit Price',
                'Accepts Points',
                'Discount %',
                ' '
            ]"
            [column_size]="['flex']"
            [template]="{
                type: type_template,
                unit_price: price_template,
                accept_points: accept_template,
                discount_cap: discount_template,
                actions: action_template
            }"
            empty="No priced assets"
        ></custom-table>
        <ng-template #type_template let-data="data">
            <span class="p-2 bg-gray-200 rounded capitalize">{{ data }}</span>
        </ng-template>
        <ng-template #price_template let-data="data">
            <span class="text-xs"> {{ data / 100 | currency:code }} per hour </span>
        </ng-template>
        <ng-template #accept_template let-data="data">
            <div class="flex justify-center h-px">
                <app-icon
                    class="text-2xl"
                    [class.text-success]="data"
                    [class.text-error]="!data"
                >
                    {{ data ? 'check_circle' : 'cancel' }}
                </app-icon>
            </div>
        </ng-template>
        <ng-template #discount_template let-data="data">
            <div class="text-right px-4">{{ data }}%</div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="h-6 flex items-center justify-end">
                <button mat-icon-button (click)="edit(row)"><app-icon>edit</app-icon></button>
                <button mat-icon-button (click)="remove(row)"><app-icon>delete</app-icon></button>
            </div>
        </ng-template>
    `,
    styles: [`
        :host {
            height: 100%;
            width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
        }
    `],
})
export class PointsAssetsComponent {
    public asset_list = this._state.assets;

    public readonly edit = (d) => this._state.newAsset(d);
    public readonly remove = (d) => this._state.removeAsset(d?.id);

    public get code() {
        return this._org.currency_code;
    }

    constructor(private _state: PointsStateService, private _org: OrganisationService) {}
}
