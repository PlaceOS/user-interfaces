import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { settingSignal } from '@placeos/common';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { FullscreenEmbedComponent } from '../components/fullscreen-embed.component';
import { TopbarComponent } from '../components/topbar.component';
import { TeamQuickActionsComponent } from './team-quick-actions.component';
import { TeamScheduleFiltersComponent } from './team-schedule-filters.component';
import { TeamScheduleListComponent } from './team-schedule-list.component';
import { TeamScheduleTableComponent } from './team-schedule-table.component';

@Component({
    selector: 'team-schedule',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav()) {
                <topbar class="z-10" />
            }
            <div class="bg-base-200 relative flex h-1/2 flex-1 overflow-auto">
                <div class="mx-auto w-fit min-w-full gap-4 p-4">
                    <team-quick-actions class="mb-4 block" />
                    <team-schedule-filters class="mb-4 block" />
                    <div class="bg-base-100 overflow-hidden rounded-lg shadow">
                        <team-schedule-table class="hidden sm:block" />
                        <team-schedule-list class="block sm:hidden" />
                    </div>
                    <div class="h-4 min-h-px w-full"></div>
                </div>
                @if (virtual_concierge_url()) {
                    <button
                        icon
                        matRipple
                        class="bg-secondary absolute top-1/2 left-2 h-16 w-16 -translate-y-1/2"
                        (click)="viewVirtualConcierge()"
                    >
                        <img
                            class="z-10 h-12"
                            src="assets/icons/ben_icon.svg"
                        />
                    </button>
                }
            </div>
            @if (!hide_nav()) {
                <footer-menu />
            }
            <div></div>
        </div>
    `,
    styles: [``],
    imports: [
        TopbarComponent,
        FooterMenuComponent,
        TeamQuickActionsComponent,
        TeamScheduleFiltersComponent,
        TeamScheduleTableComponent,
        TeamScheduleListComponent,
    ],
})
export class TeamScheduleComponent {
    private _dialog = inject(MatDialog);

    public readonly hide_nav = signal(false);
    public readonly virtual_concierge_url = settingSignal(
        'virtual_concierge_url',
        '',
    );

    public viewVirtualConcierge() {
        this._dialog.open(FullscreenEmbedComponent, {
            data: this.virtual_concierge_url(),
        });
    }
}
