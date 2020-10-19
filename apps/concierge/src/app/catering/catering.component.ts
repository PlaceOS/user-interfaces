import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseClass } from '@user-interfaces/common';

@Component({
    selector: 'app-catering',
    template: `
        <sidebar></sidebar>
        <main class="relative w-full flex flex-col">
            <catering-topbar class="relative z-10"></catering-topbar>
            <ng-container [ngSwitch]="page">
                <catering-order-list
                    *ngSwitchCase="'orders'"
                    class="flex-1"
                ></catering-order-list>
                <catering-menu *ngSwitchCase="'menu'" class="flex-1"></catering-menu>
                <div *ngSwitchDefault class="flex flex-1 items-center justify-center">
                    <a
                        matRipple
                        class="rounded flex flex-col items-center bg-white shadow text-black"
                        [routerLink]="['/catering', 'menu']"
                    >
                        <div
                            name="img"
                            class="w-full flex flex-1 items-center justify-center text-2xl text-white"
                            [style.background]="'rgba(0,0,0, .45) url(assets/img/menus.jpg)'"
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
                        class="rounded flex flex-col items-center bg-white shadow text-black"
                        [routerLink]="['/catering', 'orders']"
                    >
                        <div
                            name="img"
                            class="w-full flex flex-1 items-center justify-center text-2xl text-white"
                            [style.background]="'rgba(0,0,0, .45) url(assets/img/orders.jpg)'"
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
            </ng-container>
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
export class CateringComponent extends BaseClass {
    /** Page being displayed */
    public page: string;

    constructor(private _route: ActivatedRoute) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(
                (params) => (this.page = params.has('view') ? params.get('view') : '')
            )
        );
    }
}
