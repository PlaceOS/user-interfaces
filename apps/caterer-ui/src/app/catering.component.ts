import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'app-catering',
    template: `
        <main class="relative flex w-full flex-col bg-base-100">
            @if (page) {
                <catering-topbar class="relative z-10"></catering-topbar>
            }
            @if (page === 'menu') {
                <div
                    class="mx-8 mb-4 flex items-center justify-center rounded bg-info p-2 text-sm text-white"
                >
                    {{ 'CATERING.MENU_EDIT_INFO' | translate }}
                </div>
            }
            <div class="flex h-1/2 flex-1 flex-col overflow-auto px-8">
                @switch (page) {
                    @case ('orders') {
                        <catering-order-list
                            class="flex-1"
                        ></catering-order-list>
                    }
                    @case ('menu') {
                        <catering-menu class="flex-1"></catering-menu>
                    }
                    @default {
                        <div
                            class="my-8 flex h-1/2 w-full flex-1 items-center justify-center rounded-2xl bg-base-200"
                        >
                            <a
                                matRipple
                                class="m-2 flex h-64 w-[28rem] flex-col items-center overflow-hidden rounded border border-base-300 bg-base-100 text-base-content"
                                [routerLink]="['/menu']"
                            >
                                <div
                                    class="relative flex w-full flex-1 items-center justify-center"
                                    [style.background]="
                                        'url(assets/img/menus.jpg)'
                                    "
                                >
                                    <div
                                        class="absolute inset-0 z-0 bg-base-content opacity-40"
                                    ></div>
                                    <div class="z-10 text-2xl text-base-100">
                                        {{ 'CATERING.OPTION_MENU' | translate }}
                                    </div>
                                </div>
                                <div
                                    class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                >
                                    {{
                                        'CATERING.OPTION_MENU_INFO' | translate
                                    }}
                                </div>
                            </a>
                            <a
                                matRipple
                                class="m-2 flex h-64 w-[28rem] flex-col items-center overflow-hidden rounded border border-base-300 bg-base-100 text-base-content"
                                [routerLink]="['/orders']"
                            >
                                <div
                                    class="relative flex w-full flex-1 items-center justify-center"
                                    [style.background]="
                                        'url(assets/img/orders.jpg)'
                                    "
                                >
                                    <div
                                        class="absolute inset-0 z-0 bg-base-content opacity-40"
                                    ></div>
                                    <div class="z-10 text-2xl text-base-100">
                                        {{
                                            'CATERING.OPTION_ORDERS' | translate
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
    standalone: false,
})
export class CateringComponent extends AsyncHandler implements OnInit {
    /** Page being displayed */
    public page: string;

    constructor(private _route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(
                (params) =>
                    (this.page = params.has('view') ? params.get('view') : ''),
            ),
        );
    }
}
