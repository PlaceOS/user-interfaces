import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';

import {
    CateringMenuComponent,
    CateringOrderListComponent,
} from '@placeos/catering';
import { TranslatePipe } from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { CateringTopbarComponent } from './catering-topbar.component';

@Component({
    selector: '[app-new-catering]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <catering-topbar class="relative z-10"></catering-topbar>
                <div class="flex h-1/2 flex-1 flex-col px-8">
                    @if (page === 'menu') {
                        <div
                            class="bg-info mb-4 flex items-center justify-center rounded-sm p-2 text-sm text-white"
                        >
                            {{ 'CATERING.MENU_EDIT_INFO' | translate }}
                        </div>
                    }
                    <div class="flex h-1/2 w-full flex-1 overflow-auto">
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
                                    class="flex flex-1 flex-wrap items-center justify-center"
                                >
                                    <a
                                        matRipple
                                        class="bg-base-100 flex flex-col items-center rounded-sm text-black shadow-sm"
                                        [routerLink]="['/catering', 'menu']"
                                    >
                                        <div
                                            name="img"
                                            class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                            [style.background-image]="'url(assets/menus.jpg)'"
                                        >
                                            <div
                                                class="bg-neutral absolute inset-0 z-0 opacity-60"
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
                                        class="bg-base-100 flex flex-col items-center rounded-sm text-black shadow-sm"
                                        [routerLink]="['/catering', 'orders']"
                                    >
                                        <div
                                            name="img"
                                            class="relative flex w-full flex-1 items-center justify-center bg-cover bg-center text-2xl text-white"
                                            [style.background-image]="'url(assets/orders.jpg)'"
                                        >
                                            <div
                                                class="bg-neutral absolute inset-0 z-0 opacity-60"
                                            ></div>
                                            <span class="z-10"
                                                >Today's Orders</span
                                            >
                                        </div>
                                        <div
                                            class="flex h-14 w-full items-center justify-center p-2 text-center text-sm"
                                        >
                                            View Catering Orders and their
                                            statuses upon arrival
                                        </div>
                                    </a>
                                </div>
                            }
                        }
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
                background-color: var(--base-100);
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
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        MatRippleModule,
        RouterModule,
        CateringTopbarComponent,
        TranslatePipe,
        CateringOrderListComponent,
        CateringMenuComponent,
    ],
})
export class CateringComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);

    /** Page being displayed */
    public page: string;

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
