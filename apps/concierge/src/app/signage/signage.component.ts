import { Component, OnInit, inject } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AsyncHandler, i18n } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: '[app-new-staff]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex h-28 items-center justify-between p-8">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.SIGNAGE_HEADER' | translate }}
                    </h2>
                    @if (
                        active_link === 'Media' || active_link === 'Displays'
                    ) {
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="newItem(active_link)"
                        >
                            {{
                                (active_link === 'Displays'
                                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_ADD'
                                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                ) | translate
                            }}
                        </button>
                    }
                </div>
                <div class="px-8">
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        @for (link of links; track link.id) {
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
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        TranslatePipe,
        MatRippleModule,
        MatTabsModule,
        RouterModule,
    ],
})
export class SignageComponent extends AsyncHandler implements OnInit {
    private _state = inject(SignageStateService);
    private _router = inject(Router);

    public readonly loading = this._state.loading;
    public links = [];
    public active_link = this.links[0]?.id;

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
                    this.active_link =
                        this.links.find((_) =>
                            this._router.url.includes(_.id.toLowerCase()),
                        )?.id || this.active_link;
                }
            }),
        );
        this.active_link =
            this.links.find((_) =>
                this._router.url.includes(_.id.toLowerCase()),
            )?.id || this.active_link;
    }
}
