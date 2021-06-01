import { Component } from '@angular/core';

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
                'discount_cap'
            ]"
            [display_column]="[
                'Name',
                'Type',
                'Unit Price',
                'Accepts Points',
                'Discount %'
            ]"
            [column_size]="['flex']"
            [template]="{
                type: type_template,
                unit_price: price_template,
                accept_points: accept_template,
                discount_cap: discount_template
            }"
            empty="No priced assets"
        ></custom-table>
        <ng-template #type_template let-data="data">
            <span class="p-2 bg-gray-200 rounded capitalize">{{ data }}</span>
        </ng-template>
        <ng-template #price_template let-data="data">
            <span class="text-xs"> {{ data / 100 | currency }} per hour </span>
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
    public asset_list: PointAsset[] = [
        {
            id: '1',
            name: 'Meeting Room 1.01',
            type: 'space',
            unit_price: 3000,
            accept_points: false,
            discount_cap: 99,
            custom_rates: [],
        },
        {
            id: '2',
            name: 'Meeting Room 1.02',
            type: 'space',
            unit_price: 2800,
            accept_points: true,
            discount_cap: 30,
            custom_rates: [],
        },
    ];
}
