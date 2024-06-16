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
                    class="flex flex-1 items-center justify-center h-1/2 w-full bg-base-200 rounded-2xl"
                >
                    <a
                        matRipple
                        class="rounded flex flex-col items-center bg-base-100 text-black overflow-hidden m-2 border border-base-300"
                        [routerLink]="['/menu']"
                    >
                        <div
                            name="img"
                            class="w-full flex flex-1 items-center justify-center text-2xl text-white"
                            [style.background]="
                                'rgba(0,0,0, .45) url(assets/img/menus.jpg)'
                            "
                        >
                            Menus and Pricing
                        </div>
                        <div
                            class="p-2 h-14 w-full text-sm text-center flex items-center justify-center"
                        >
                            View and Edit Menus and Pricing
                        </div>
                    </a>
                    <a
                        matRipple
                        class="rounded flex flex-col items-center bg-base-100 text-black overflow-hidden m-2 border border-base-300"
                        [routerLink]="['/orders']"
                    >
                        <div
                            name="img"
                            class="w-full flex flex-1 items-center justify-center text-2xl text-white"
                            [style.background]="
                                'rgba(0,0,0, .45) url(assets/img/orders.jpg)'
                            "
                        >
                            Today's Orders
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

            a {
                width: 28rem;
                height: 16rem;
                margin-left: 0.5rem;
                text-decoration: none;
                transition: background 200ms;
            }

            a:hover {
                background-color: #00000001 !important;
            }

            a:first-child {
                margin: 0;
            }

            [name='img'] {
                background: rgba(0, 0, 0, 0.45);
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
