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
        <simple-table
            class="block min-w-[32rem] w-full"
            [data]="asset_list"
            [columns]="[
                { key: 'name', name: 'Name' },
                { key: 'type', name: 'Type', content: type_template },
                {
                    key: 'unit_price',
                    name: 'Unit Price',
                    content: price_template
                },
                {
                    key: 'accept_points',
                    name: 'Points',
                    content: bool_template,
                    size: '5.5rem'
                },
                {
                    key: 'discount_cap',
                    name: 'Discount %',
                    content: discount_template,
                    size: '9rem'
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '6.5rem'
                }
            ]"
            [sortable]="true"
            empty_message="No priced assets"
        >
        </simple-table>
        <ng-template #type_template let-data="data">
            <div class="p-2">
                <span class="bg-base-200 rounded capitalize px-2 py-1 text-sm">
                    {{ data }}
                </span>
            </div>
        </ng-template>
        <ng-template #price_template let-data="data">
            <span class="text-xs p-4 font-mono">
                {{ data / 100 | currency: code }} p/h
            </span>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div
                [class.bg-error]="!data"
                [class.bg-success]="data"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl text-white mx-auto"
            >
                <app-icon>{{ data ? 'done' : 'close' }}</app-icon>
            </div>
        </ng-template>
        <ng-template #discount_template let-data="data">
            <div class="text-right p-4">{{ data }}%</div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end p-2 mx-auto">
                <button icon matRipple (click)="edit(row)">
                    <app-icon>edit</app-icon>
                </button>
                <button icon matRipple (click)="remove(row)">
                    <app-icon class="text-error">delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                overflow-x: auto;
                overflow-y: hidden;
            }
        `,
    ],
})
export class PointsAssetsComponent {
    public asset_list = this._state.assets;

    public readonly edit = (d) => this._state.newAsset(d);
    public readonly remove = (d) => this._state.removeAsset(d?.id);

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _state: PointsStateService,
        private _org: OrganisationService
    ) {}
}
