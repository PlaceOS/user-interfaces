import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'app-catering',
    template: `
        <main class="relative w-full flex flex-col bg-base-100">
            <catering-topbar
                *ngIf="page"
                class="relative z-10"
            ></catering-topbar>
            <div
                class="p-2 flex items-center justify-center bg-info text-white text-sm mb-4 mx-8 rounded"
                *ngIf="page === 'menu'"
            >
                To edit the menu de-select all levels from the top left
            </div>
            <div class="flex flex-col flex-1 h-1/2 px-8" [ngSwitch]="page">
                <catering-order-list
                    *ngSwitchCase="'orders'"
                    class="flex-1"
                ></catering-order-list>
                <catering-menu
                    *ngSwitchCase="'menu'"
                    class="flex-1"
                ></catering-menu>
                <div
                    *ngSwitchDefault
                    class="flex flex-1 items-center justify-center h-1/2 w-full my-8 bg-base-200 rounded-2xl"
                >
                    <a
                        matRipple
                        class="w-[28rem] h-64 rounded flex flex-col items-center bg-base-100 text-base-content overflow-hidden m-2 border border-base-300"
                        [routerLink]="['/menu']"
                    >
                        <div
                            class="relative w-full flex flex-1 items-center justify-center"
                            [style.background]="'url(assets/img/menus.jpg)'"
                        >
                            <div
                                class="absolute inset-0 bg-base-content opacity-40 z-0"
                            ></div>
                            <div class="text-2xl text-base-100 z-10">
                                Menus and Pricing
                            </div>
                        </div>
                        <div
                            class="p-2 h-14 w-full text-sm text-center flex items-center justify-center"
                        >
                            View and Edit Menus and Pricing
                        </div>
                    </a>
                    <a
                        matRipple
                        class="w-[28rem] h-64 rounded flex flex-col items-center bg-base-100 text-base-content overflow-hidden m-2 border border-base-300"
                        [routerLink]="['/orders']"
                    >
                        <div
                            class="relative w-full flex flex-1 items-center justify-center"
                            [style.background]="'url(assets/img/orders.jpg)'"
                        >
                            <div
                                class="absolute inset-0 bg-base-content opacity-40 z-0"
                            ></div>
                            <div class="text-2xl text-base-100 z-10">
                                Today's Orders
                            </div>
                        </div>
                        <div
                            class="p-2 h-14 w-full text-sm text-center flex items-center justify-center"
                        >
                            View Catering Orders and their statuses upon arrival
                        </div>
                    </a>
                </div>
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
})
export class CateringComponent extends AsyncHandler {
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
                    (this.page = params.has('view') ? params.get('view') : '')
            )
        );
    }
}
