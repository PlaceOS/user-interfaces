import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';

@Component({
    selector: '[app-new-catering]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <catering-topbar class="relative z-10"></catering-topbar>
                <div class="flex h-1/2 flex-1 flex-col px-8">
                    <div
                        class="mb-4 flex items-center justify-center rounded bg-info p-2 text-sm text-white"
                        *ngIf="page === 'menu'"
                    >
                        {{ 'CATERING.MENU_EDIT_INFO' | translate }}
                    </div>
                    <div class="flex h-1/2 w-full flex-1 overflow-auto">
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
                                class="flex flex-1 flex-wrap items-center justify-center"
                            >
                                <a
                                    matRipple
                                    class="flex flex-col items-center rounded bg-base-100 text-black shadow"
                                    [routerLink]="['/catering', 'menu']"
                                >
                                    <div
                                        name="img"
                                        class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                        [style.background-image]="
                                            'url(assets/menus.jpg)'
                                        "
                                    >
                                        <div
                                            class="absolute inset-0 z-0 bg-neutral opacity-60"
                                        ></div>
                                        <span class="z-10"
                                            >Menus and Pricing</span
                                        >
                                    </div>
                                    <div
                                        class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                    >
                                        View and Edit Menus and Pricing
                                    </div>
                                </a>
                                <a
                                    matRipple
                                    class="flex flex-col items-center rounded bg-base-100 text-black shadow"
                                    [routerLink]="['/catering', 'orders']"
                                >
                                    <div
                                        name="img"
                                        class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                        [style.background-image]="
                                            'url(assets/orders.jpg)'
                                        "
                                    >
                                        <div
                                            class="absolute inset-0 z-0 bg-neutral opacity-60"
                                        ></div>
                                        <span class="z-10">Today's Orders</span>
                                    </div>
                                    <div
                                        class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                    >
                                        View Catering Orders and their statuses
                                        upon arrival
                                    </div>
                                </a>
                            </div>
                        </ng-container>
                    </div>
                </div>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }

            a {
                width: 28rem;
                height: 16rem;
                margin-left: 0.5rem;
                text-decoration: none;
                transition: background 200ms;
            }

            a:hover {
                opacity: 0.8;
            }

            a:first-child {
                margin: 0;
            }
        `,
    ],
    standalone: false,
})
export class NewCateringComponent extends AsyncHandler implements OnInit {
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
