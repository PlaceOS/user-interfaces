import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { LockerStateService } from './locker-state.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { LockersTopbarComponent } from './locker-topbar.component';

@Component({
    selector: '[app-lockers]',
    template: `
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <lockers-topbar class="w-full"></lockers-topbar>
                <div class="relative h-1/2 w-full flex-1 overflow-auto">
                    <router-outlet></router-outlet>
                </div>
                @if (loading() && path() === 'events') {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
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
        LockersTopbarComponent,
        RouterModule,
        MatProgressBarModule,
    ],
})
export class LockersComponent extends AsyncHandler implements OnInit {
    private _state = inject(LockerStateService);
    private _router = inject(Router);

    private readonly _url = signal<unknown>(null);

    public readonly loading = this._state.loading;
    public readonly path = computed(() => {
        this._url();
        const parts = this._router.url.split('/');
        return parts[parts.length - 1].split('?')[0];
    });

    constructor() {
        super();
        this.subscription(
            'router',
            this._router.events.subscribe((event) => this._url.set(event)),
        );
    }

    public ngOnInit() {
        this._state.refresh();
    }
}
