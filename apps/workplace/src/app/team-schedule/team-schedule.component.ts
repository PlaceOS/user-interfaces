import { Component, signal } from '@angular/core';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { VirtualConciergeButtonComponent } from '../components/virtual-concierge-button.component';
import { TeamQuickActionsComponent } from './team-quick-actions.component';
import { TeamScheduleFiltersComponent } from './team-schedule-filters.component';
import { TeamScheduleListComponent } from './team-schedule-list.component';
import { TeamScheduleTableComponent } from './team-schedule-table.component';

@Component({
    selector: 'team-schedule',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav()) {
                <topbar />
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
                <virtual-concierge-button />
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
        VirtualConciergeButtonComponent,
        TeamQuickActionsComponent,
        TeamScheduleFiltersComponent,
        TeamScheduleTableComponent,
        TeamScheduleListComponent,
    ],
})
export class TeamScheduleComponent {
    public readonly hide_nav = signal(false);
}
