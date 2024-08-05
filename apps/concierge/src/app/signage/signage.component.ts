import { Component, OnInit } from '@angular/core';

import { SignageStateService } from './signage-state.service';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';

@Component({
    selector: '[app-new-staff]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <div class="p-8 h-28 flex items-center justify-between">
                    <h2 class="text-2xl font-medium">
                        Digital Signage Management
                    </h2>
                    <button
                        btn
                        matRipple
                        class="w-40 relative"
                        *ngIf="active_link === 'Media'"
                        (change)="previewFile($event)"
                    >
                        <input
                            type="file"
                            accept="image/*,video/*"
                            class="absolute inset-0 opacity-0"
                        />
                        Add Media
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        (click)="newItem(active_link)"
                        *ngIf="active_link !== 'Media'"
                    >
                        Add {{ singular(active_link) }}
                    </button>
                </div>
                <div class="px-8">
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        @for (link of links; track link) {
                            <a
                                mat-tab-link
                                [routerLink]="'/signage/' + (link | lowercase)"
                                (click)="active_link = link"
                                [active]="active_link == link"
                            >
                                {{ link }}
                            </a>
                        }
                    </nav>
                </div>
                <mat-tab-nav-panel
                    class="flex-1 h-1/2 overflow-auto px-8 py-4"
                    #tabPanel
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
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
        `,
    ],
})
export class SignageComponent extends AsyncHandler implements OnInit {
    public readonly loading = this._state.loading;
    public links = ['Media', 'Playlists'];
    public active_link = this.links[0];

    public readonly previewFile = (event) =>
        this._state.previewFileFromInput(event);

    public singular(name: string) {
        return name.replace(/s$/, '');
    }

    public newItem(name: string) {
        switch (name) {
            case 'Playlists':
                this._state.editPlaylist();
                break;
        }
    }

    constructor(
        private _state: SignageStateService,
        private _router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.active_link = this.links.find((_) =>
                        this._router.url.includes(_.toLowerCase()),
                    );
                }
            }),
        );
        this.active_link = this.links.find((_) =>
            this._router.url.includes(_.toLowerCase()),
        );
    }
}
