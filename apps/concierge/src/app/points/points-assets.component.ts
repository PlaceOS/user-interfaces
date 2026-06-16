import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { OrganisationService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { of } from 'rxjs';
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
            class="block w-full min-w-lg"
            [data]="asset_list()"
            [columns]="[
                { key: 'name', name: 'FORM.NAME' | translate },
                {
                    key: 'type',
                    name: 'COMMON.TYPE' | translate,
                    content: type_template,
                },
                {
                    key: 'unit_price',
                    name: 'APP.CONCIERGE.POINTS_PRICE' | translate,
                    content: price_template,
                },
                {
                    key: 'accept_points',
                    name: 'APP.CONCIERGE.POINTS_LABEL' | translate,
                    content: bool_template,
                    size: '5.5rem',
                },
                {
                    key: 'discount_cap',
                    name: 'APP.CONCIERGE.POINTS_DISCOUNT' | translate,
                    content: discount_template,
                    size: '9rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '6.5rem',
                },
            ]"
            [sortable]="true"
            [empty_message]="'APP.CONCIERGE.POINTS_ASSETS_EMPTY' | translate"
        />
        <ng-template #type_template let-data="data">
            <div class="p-2">
                <span
                    class="bg-base-200 rounded-sm px-2 py-1 text-sm capitalize"
                >
                    {{ data }}
                </span>
            </div>
        </ng-template>
        <ng-template #price_template let-data="data">
            <span class="p-4 font-mono text-xs">
                {{ data / 100 | currency: code }} p/h
            </span>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div
                [class.bg-error]="!data"
                [class.bg-success]="data"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
            >
                <icon>{{ data ? 'done' : 'close' }}</icon>
            </div>
        </ng-template>
        <ng-template #discount_template let-data="data">
            <div class="p-4 text-right">{{ data }}%</div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center justify-end p-2">
                <button icon matRipple (click)="edit(row)">
                    <icon>edit</icon>
                </button>
                <button icon matRipple (click)="remove(row)">
                    <icon class="text-error">delete</icon>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        SimpleTableComponent,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class PointsAssetsComponent {
    private _state = inject(PointsStateService);
    private _org = inject(OrganisationService);

    public readonly asset_list = toSignal(this._state.assets || of([]), {
        initialValue: [],
    });

    public readonly edit = (d) => this._state.newAsset(d);
    public readonly remove = (d) => this._state.removeAsset(d?.id);

    public get code() {
        return this._org.currency_code;
    }
}
