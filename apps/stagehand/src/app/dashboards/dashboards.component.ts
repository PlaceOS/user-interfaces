import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { StagehandPageComponent } from '../ui/stagehand-page.component';
import { DashboardsService } from './dashboards.service';

@Component({
    selector: `stagehand-dashboards`,
    template: `
        <stagehand-page
            [heading]="
                (page() === 'alerts'
                    ? 'APP.STAGEHAND.DASHBOARD_ALERTS_HEADER'
                    : 'APP.STAGEHAND.DASHBOARD_HEADER'
                ) | translate
            "
        >
            @if (page() === 'alerts') {
                <a
                    page-header-start
                    icon
                    matRipple
                    aria-label="Back to dashboards"
                    [routerLink]="['/dashboards']"
                    [matTooltip]="'APP.STAGEHAND.DASHBOARD_BACK' | translate"
                    matTooltipPosition="right"
                >
                    <icon>arrow_back</icon>
                </a>
            }
            <!-- one element per block, so each goes to its header slot -->
            @if (page() === 'alerts') {
                <div
                    page-header
                    class="bg-base-200 rounded-sm px-2 py-1 text-sm font-medium"
                >
                    {{ dashboard()?.name }}
                </div>
            }
            <div page-header class="w-px flex-1"></div>
            <a
                page-header
                btn
                matRipple
                class="w-40"
                [routerLink]="new_route()"
                >{{
                    (page() === 'alerts'
                        ? 'APP.STAGEHAND.DASHBOARD_ALERTS_ADD'
                        : 'APP.STAGEHAND.DASHBOARD_ADD'
                    ) | translate
                }}</a
            >
            <router-outlet />
        </stagehand-page>
    `,
    styles: [],
    imports: [
        StagehandPageComponent,
        MatRippleModule,
        RouterModule,
        TranslatePipe,
        IconComponent,
        MatTooltipModule,
    ],
})
export class DashboardsComponent extends AsyncHandler implements OnInit {
    private _router = inject(Router);
    private _service = inject(DashboardsService);

    public readonly page = signal('');
    public readonly new_route = computed(() =>
        this.page() === 'alerts'
            ? ['/dashboards', this.dashboard()?.id, 'alerts', 'manage']
            : ['/dashboards', 'manage'],
    );
    public readonly dashboard = this._service.dashboard;

    public ngOnInit() {
        this._updatePage();
        // Update in the same frame as the page change, so the header changes
        // with the page transition
        this.subscription(
            'page',
            this._router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) this._updatePage();
            }),
        );
    }

    private _updatePage() {
        this.page.set(
            this._router.url.includes('/alerts') ? 'alerts' : 'dashboards',
        );
    }
}
