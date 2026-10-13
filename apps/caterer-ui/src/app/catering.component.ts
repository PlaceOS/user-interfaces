import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { MatTooltipModule } from '@angular/material/tooltip';
import {
    CateringKitchenBoardComponent,
    CateringMenuComponent,
    CateringOrderListComponent,
    CateringPrepSummaryComponent,
} from '@placeos/catering';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { CateringTopbarComponent } from './catering-topbar.component';

@Component({
    selector: 'app-catering',
    template: `
        @if (page() === 'kitchen') {
            <catering-kitchen-board class="flex-1">
                <a
                    icon
                    matRipple
                    class="h-12 w-12"
                    [matTooltip]="'COMMON.BACK' | translate"
                    [routerLink]="['/orders']"
                >
                    <icon class="text-2xl">arrow_back</icon>
                </a>
            </catering-kitchen-board>
        } @else {
            <main class="bg-base-100 relative flex w-full flex-col">
                @if (page()) {
                    <catering-topbar class="relative z-10"></catering-topbar>
                }
                @if (page() === 'menu') {
                    <div
                        class="bg-info mx-8 mb-4 flex items-center justify-center rounded-sm p-2 text-sm text-white"
                    >
                        {{ 'CATERING.MENU_EDIT_INFO' | translate }}
                    </div>
                }
                <div class="flex h-1/2 flex-1 flex-col overflow-auto px-8">
                    @switch (page()) {
                        @case ('orders') {
                            <div class="flex min-h-0 flex-1 gap-4">
                                <catering-order-list
                                    class="min-w-0 flex-1"
                                    [can_print]="true"
                                ></catering-order-list>
                                @if (show_summary()) {
                                    <catering-prep-summary
                                        class="border-base-300 mb-4 w-80 shrink-0 rounded-sm border"
                                    />
                                }
                            </div>
                        }
                        @case ('menu') {
                            <catering-menu class="flex-1"></catering-menu>
                        }
                        @default {
                            <div
                                class="bg-base-200 my-8 flex h-1/2 w-full flex-1 items-center justify-center rounded-2xl"
                            >
                                <a
                                    matRipple
                                    class="border-base-300 bg-base-100 text-base-content m-2 flex h-64 w-md flex-col items-center overflow-hidden rounded-sm border"
                                    [routerLink]="['/menu']"
                                >
                                    <div
                                        class="relative flex w-full flex-1 items-center justify-center"
                                        [style.background]="'url(assets/img/menus.jpg)'"
                                    >
                                        <div
                                            class="bg-base-content absolute inset-0 z-0 opacity-40"
                                        ></div>
                                        <div
                                            class="text-base-100 z-10 text-2xl"
                                        >
                                            {{
                                                'CATERING.OPTION_MENU'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                    >
                                        {{
                                            'CATERING.OPTION_MENU_INFO'
                                                | translate
                                        }}
                                    </div>
                                </a>
                                <a
                                    matRipple
                                    class="border-base-300 bg-base-100 text-base-content m-2 flex h-64 w-md flex-col items-center overflow-hidden rounded-sm border"
                                    [routerLink]="['/orders']"
                                >
                                    <div
                                        class="relative flex w-full flex-1 items-center justify-center"
                                        [style.background]="'url(assets/img/orders.jpg)'"
                                    >
                                        <div
                                            class="bg-base-content absolute inset-0 z-0 opacity-40"
                                        ></div>
                                        <div
                                            class="text-base-100 z-10 text-2xl"
                                        >
                                            {{
                                                'CATERING.OPTION_ORDERS'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                    <div
                                        class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                    >
                                        {{
                                            'CATERING.OPTION_ORDERS_INFO'
                                                | translate
                                        }}
                                    </div>
                                </a>
                            </div>
                        }
                    }
                </div>
            </main>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        TranslatePipe,
        MatRippleModule,
        RouterModule,
        CateringMenuComponent,
        CateringOrderListComponent,
        CateringTopbarComponent,
        CateringKitchenBoardComponent,
        CateringPrepSummaryComponent,
        IconComponent,
        MatTooltipModule,
    ],
})
export class CateringComponent {
    private _route = inject(ActivatedRoute);

    /** Page being displayed */
    private _param_map = toSignal(this._route.paramMap, {
        initialValue: this._route.snapshot.paramMap,
    });
    public page = computed(() => this._param_map().get('view') || '');
    private _query_map = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });
    /** Whether to show the prep summary panel next to the orders */
    public show_summary = computed(
        () => this._query_map().get('summary') === 'true',
    );
}
