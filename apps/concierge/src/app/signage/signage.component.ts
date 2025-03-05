import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { AsyncHandler, i18n } from '@placeos/common';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: '[app-new-staff]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex h-28 items-center justify-between p-8">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.SIGNAGE_HEADER' | translate }}
                    </h2>
                    <button
                        btn
                        matRipple
                        class="w-40"
                        *ngIf="
                            active_link === 'Media' ||
                            active_link === 'Displays'
                        "
                        (click)="newItem(active_link)"
                    >
                        {{
                            (active_link === 'Displays'
                                ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_ADD'
                                : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                            ) | translate
                        }}
                    </button>
                </div>
                <div class="px-8">
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        @for (link of links; track link) {
                            <a
                                mat-tab-link
                                [routerLink]="
                                    '/signage/' + (link.id | lowercase)
                                "
                                (click)="active_link = link.id"
                                [active]="active_link == link.id"
                            >
                                {{ link.name }}
                            </a>
                        }
                    </nav>
                </div>
                <mat-tab-nav-panel
                    class="h-1/2 flex-1 overflow-auto px-8 py-4"
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
    standalone: false,
})
export class SignageComponent extends AsyncHandler implements OnInit {
    public readonly loading = this._state.loading;
    public links = [];
    public active_link = this.links[0];

    public readonly previewFile = (event) =>
        this._state.previewFileFromInput(event);

    public async newItem(name: string) {
        let result = null;
        switch (name) {
            case 'Media':
            case 'Playlists':
                result = await this._state.editPlaylist();
                if (result) {
                    this._router.navigate(['/signage/media'], {
                        queryParams: { playlist: result.id },
                    });
                }
                break;
            case 'Displays':
                result = await this._state.editDisplay();
                if (!result) return;
                this._router.navigate(['/signage/displays'], {
                    queryParams: { display: result.id },
                });
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
        this.links = [
            { id: 'Media', name: i18n('APP.CONCIERGE.SIGNAGE_MEDIA') },
            { id: 'Displays', name: i18n('APP.CONCIERGE.SIGNAGE_DISPLAYS') },
            { id: 'Zones', name: i18n('APP.CONCIERGE.SIGNAGE_ZONES') },
        ];
        this.active_link = this.links[0].id;
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
