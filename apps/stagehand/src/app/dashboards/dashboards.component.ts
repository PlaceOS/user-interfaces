import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { SidebarComponent } from '../ui/sidebar.component';
import { DashboardsService } from './dashboards.service';

@Component({
    selector: `stagehand-dashboards`,
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <sidebar />
            <div class="flex w-1/2 flex-1 flex-col">
                <header
                    class="border-base-400 bg-base-100 flex h-18 w-full items-center space-x-2 p-4"
                >
                    @if (page() === 'alerts' || page() === 'view') {
                        <a
                            icon
                            matRipple
                            aria-label="Back to dashboards"
                            [routerLink]="['/dashboards']"
                            [matTooltip]="
                                'APP.STAGEHAND.DASHBOARD_BACK' | translate
                            "
                            matTooltipPosition="right"
                        >
                            <icon>arrow_back</icon>
                        </a>
                    }
                    <h1 class="text-2xl font-bold">
                        {{
                            (page() === 'alerts'
                                ? 'APP.STAGEHAND.DASHBOARD_ALERTS_HEADER'
                                : page() === 'view'
                                  ? dashboard()?.name
                                  : 'APP.STAGEHAND.DASHBOARD_HEADER'
                            ) | translate
                        }}
                    </h1>
                    @if (page() === 'alerts') {
                        <div
                            class="bg-base-200 rounded-sm px-2 py-1 text-sm font-medium"
                        >
                            {{ dashboard()?.name }}
                        </div>
                    }
                    <div class="w-px flex-1"></div>
                    @if (page() !== 'view') {
                        <a
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
                    }
                </header>
                <main
                    id="stagehand-page-content"
                    class="w-full flex-1 overflow-auto"
                >
                    <router-outlet />
                </main>
            </div>
        </div>
    `,
    styles: [],
    imports: [
        SidebarComponent,
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

    private readonly _page_sync = effect(() => {
        this._router.currentNavigation();
        this._updatePage();
    });

    public ngOnInit() {
        this._updatePage();
    }

    private _updatePage() {
        this.timeout(
            'page',
            () => {
                console.log('Route:', this._router.url);
                this.page.set(
                    this._router.url.includes('/alerts')
                        ? 'alerts'
                        : this._router.url.includes('/view')
                          ? 'view'
                          : 'dashboards',
                );
            },
            50,
        );
    }
}
