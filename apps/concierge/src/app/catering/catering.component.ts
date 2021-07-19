import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';

@Component({
    selector: '[app-catering]',
    template: `
        <sidebar></sidebar>
        <main class="relative w-full flex flex-col">
            <catering-topbar class="relative z-10"></catering-topbar>
            <ng-container [ngSwitch]="page">
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
                    class="flex flex-1 items-center justify-center"
                >
                    <a
                        matRipple
                        class="rounded flex flex-col items-center bg-white shadow text-black"
                        [routerLink]="['/catering', 'menu']"
                    >
                        <div
                            name="img"
                            class="relative w-full flex flex-1 items-center justify-center text-2xl text-white bg-center bg-cover"
                            [style.background-image]="'url(assets/menus.jpg)'"
                        >
                            <div
                                class="absolute inset-0 bg-black opacity-60 z-0"
                            ></div>
                            <span class="z-10">Menus and Pricing</span>
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
                            class="relative w-full flex flex-1 items-center justify-center text-2xl text-white bg-center bg-cover"
                            [style.background-image]="'url(assets/orders.jpg)'"
                        >
                            <div
                                class="absolute inset-0 bg-black opacity-60 z-0"
                            ></div>
                            <span class="z-10">Today's Orders</span>
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
                background: var(--bg);
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
        `,
    ],
})
export class CateringComponent extends BaseClass implements OnInit {
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
