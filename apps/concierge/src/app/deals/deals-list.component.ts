import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { DateFieldComponent } from '@placeos/form-fields';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { Deal, DealsService } from './deals.service';

@Component({
    selector: `deals-list`,
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div class="flex items-center justify-between px-8 py-4 pt-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.DEALS_HEADER' | translate }}
                </h2>
                <a btn matRipple [routerLink]="['/deals-n-offers', 'manage']">
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.DEALS_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </a>
            </div>
            <div filters class="flex space-x-2 px-8 pb-4">
                <div class="flex items-center">
                    <button
                        btn
                        matRipple
                        name="deals-list"
                        class="rounded-l rounded-r-none px-2"
                        [class.inverse]="display() !== 'list'"
                        (click)="display.set('list')"
                        [matTooltip]="'COMMON.LIST' | translate"
                    >
                        <icon class="text-2xl">list</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        name="deals-grid"
                        class="rounded-l-none rounded-r px-2"
                        [class.inverse]="display() !== 'grid'"
                        (click)="display.set('grid')"
                        [matTooltip]="'COMMON.GRID' | translate"
                    >
                        <icon class="text-2xl">browse</icon>
                    </button>
                </div>
                <a-date-field
                    [(ngModel)]="date"
                    class="no-subscript"
                ></a-date-field>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select placeholder="All Types">
                        <mat-option value="all">All Types</mat-option>
                        <mat-option value="active">Active</mat-option>
                        <mat-option value="inactive">Inactive</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                @if (display() === 'grid') {
                    <div
                        class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    >
                        @for (deal of deals | async; track deal.id) {
                            <div>
                                <button
                                    class="mx-auto flex flex-col items-center overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow"
                                    (click)="view(deal)"
                                >
                                    <div
                                        class="relative h-36 w-48 max-w-full overflow-hidden rounded-b-lg bg-base-200"
                                    >
                                        <img
                                            [src]="deal.image"
                                            alt="Deal Image"
                                            class="h-full w-full object-cover"
                                        />
                                        @if (deal.details) {
                                            <div
                                                class="absolute bottom-2 left-2 max-w-full truncate rounded bg-info px-2 py-1 text-xs text-info-content shadow"
                                            >
                                                {{ deal.details }}
                                            </div>
                                        }
                                    </div>
                                    <div class="w-full px-4 py-2 text-left">
                                        <h3 class="truncate font-bold">
                                            {{ deal.name }}
                                        </h3>
                                        <p class="text-sm opacity-50">
                                            {{
                                                deal.expires_at
                                                    | date: 'mediumDate'
                                            }}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        }
                        @if ((deals | async)?.length <= 0) {
                            <div
                                class="col-span-6 flex w-full flex-col items-center justify-center rounded-lg bg-base-200 p-16"
                            >
                                <img
                                    src="assets/icons/no-deals.svg"
                                    alt="No Deals or Offers Available"
                                    class="mb-8 w-48"
                                />
                                <div
                                    class="flex flex-col items-center space-y-4 text-center"
                                >
                                    <p class="text-lg font-bold">
                                        No Deals or Offers Available
                                    </p>
                                    <p class="text-sm opacity-50">
                                        Add a new deal or offer to get started.
                                    </p>
                                    <button
                                        btn
                                        matRipple
                                        [routerLink]="[
                                            '/deals-n-offers',
                                            'manage',
                                        ]"
                                    >
                                        Add a Deal or Offer
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                } @else {
                    <div class="min-w-[56rem]">
                        <simple-table
                            [data]="deals | async"
                            class="text-sm"
                            [sortable]="true"
                            [columns]="[
                                {
                                    key: 'image',
                                    name: 'COMMON.IMAGE' | translate,
                                    content: image_template,
                                    size: '5.5rem',
                                    sortable: false,
                                },
                                {
                                    key: 'name',
                                    name: 'FORM.NAME' | translate,
                                },
                                {
                                    key: 'description',
                                    name: 'COMMON.DESCRIPTION' | translate,
                                    content: description_template,
                                },
                                {
                                    key: 'expires_at',
                                    name: 'COMMON.VALID_UNTIL' | translate,
                                    content: valid_until_template,
                                },
                                {
                                    key: 'terms',
                                    name: 'COMMON.TERMS' | translate,
                                    content: description_template,
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    size: '3.5rem',
                                    content: actions_template,
                                    sortable: false,
                                },
                            ]"
                        ></simple-table>
                    </div>
                    <ng-template #image_template let-deal="row">
                        <div
                            class="flex h-full w-full items-center justify-center p-2"
                        >
                            <img
                                class="h-16 w-16 rounded bg-base-200 object-cover"
                                [src]="deal.image"
                                alt="{{ deal.name }}"
                            />
                        </div>
                    </ng-template>
                    <ng-template #description_template let-data="data">
                        <div class="flex px-4 py-2 text-sm">
                            {{ data }}
                            @if (!data) {
                                <span class="opacity-30"
                                    >No description available</span
                                >
                            }
                        </div>
                    </ng-template>
                    <ng-template #valid_until_template let-date="data">
                        <div class="flex p-4">
                            {{ date | date: 'mediumDate' }}
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-deal="row">
                        <div
                            class="flex h-full w-full items-center justify-end p-1"
                        >
                            <button
                                icon
                                matRipple
                                class="h-12 w-12 rounded"
                                [matMenuTriggerFor]="menu"
                            >
                                <icon>more_vert</icon>
                            </button>
                        </div>
                        <mat-menu #menu="matMenu">
                            <button
                                mat-menu-item
                                class="min-w-48"
                                (click)="view(deal)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">visibility</icon>
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_VIEW'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <a
                                mat-menu-item
                                [routerLink]="[
                                    '/deals-n-offers',
                                    'manage',
                                    deal.id,
                                ]"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">edit</icon>
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_EDIT'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove(deal)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl text-error"
                                        >delete</icon
                                    >
                                    <div>
                                        {{
                                            'APP.CONCIERGE.DEALS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </ng-template>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        RouterModule,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        DateFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleTableComponent,
        MatMenuModule,
    ],
})
export class DealsListComponent {
    private _deals = inject(DealsService);

    public readonly display = signal<'list' | 'grid'>('list');
    public readonly deals = this._deals.deals$;
    public date = Date.now();

    public readonly remove = (deal: Deal) => this._deals.removeDeal(deal);
    public readonly view = (d) => this._deals.viewDeal(d);
}
