import { Component, computed, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { IconComponent, TranslatePipe } from '@placeos/components';
import { PaymentsService } from '@placeos/payments';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';

/** Pages of the payments area, in tab order */
const PAYMENT_PAGES = [
    { route: 'list', name: 'PAYMENTS.TAB_PAYMENTS' },
    { route: 'invoices', name: 'PAYMENTS.TAB_INVOICES' },
    { route: 'products', name: 'PAYMENTS.TAB_PRODUCTS' },
] as const;

/**
 * Shell of the payments area. Shows the pages only when the building has a
 * payment driver and the driver says that the user is privileged.
 */
@Component({
    selector: 'app-payments',
    template: `
        <div class="flex h-px flex-1">
            <app-sidebar />
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header class="flex h-20 items-center px-8 py-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'PAYMENTS.HEADER' | translate }}
                    </h2>
                </header>
                @if (!enabled()) {
                    <div
                        class="m-8 flex flex-col items-center gap-2 rounded-lg p-16 text-center opacity-70"
                    >
                        <icon class="text-5xl">payments</icon>
                        <p>{{ 'PAYMENTS.NOT_ENABLED' | translate }}</p>
                    </div>
                } @else if (config_error()) {
                    <div
                        class="m-8 flex flex-col items-center gap-2 rounded-lg p-16 text-center opacity-70"
                    >
                        <icon class="text-5xl">error</icon>
                        <p>{{ config_error() }}</p>
                    </div>
                } @else if (!config()) {
                    <div class="flex justify-center p-16">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                } @else if (!privileged()) {
                    <div
                        class="m-8 flex flex-col items-center gap-2 rounded-lg p-16 text-center opacity-70"
                    >
                        <icon class="text-5xl">lock</icon>
                        <p>{{ 'PAYMENTS.NO_ACCESS' | translate }}</p>
                    </div>
                } @else {
                    <div class="mb-4 px-8">
                        <div class="bg-base-200 overflow-hidden rounded-sm">
                            <nav mat-tab-nav-bar [tabPanel]="panel">
                                @for (page of pages(); track page.route) {
                                    <a
                                        mat-tab-link
                                        routerLinkActive
                                        #rla="routerLinkActive"
                                        [active]="rla.isActive"
                                        [routerLink]="['/payments', page.route]"
                                    >
                                        {{ page.name | translate }}
                                    </a>
                                }
                            </nav>
                        </div>
                    </div>
                    <mat-tab-nav-panel
                        #panel
                        class="relative h-1/2 w-full flex-1 overflow-auto px-8"
                    >
                        <router-outlet />
                    </mat-tab-nav-panel>
                }
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
        `,
    ],
    imports: [
        ApplicationSidebarComponent,
        IconComponent,
        MatProgressSpinnerModule,
        MatTabsModule,
        RouterModule,
        TranslatePipe,
    ],
})
export class PaymentsComponent {
    private _payments = inject(PaymentsService);

    /** Invoices show only when the driver supports them */
    public readonly pages = computed(() =>
        PAYMENT_PAGES.filter(
            (page) =>
                page.route !== 'invoices' ||
                this._payments.hasCapability('invoices'),
        ),
    );
    public readonly enabled = this._payments.is_enabled;
    public readonly config = this._payments.config;
    public readonly config_error = this._payments.config_error;
    public readonly privileged = this._payments.privileged;
}
