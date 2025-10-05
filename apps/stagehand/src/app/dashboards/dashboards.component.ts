import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { SidebarComponent } from '../ui/sidebar.component';

@Component({
    selector: `stagehand-dashboards`,
    template: `
        <div class="absolute inset-0 flex bg-base-200">
            <sidebar />
            <div class="flex w-1/2 flex-1 flex-col">
                <header
                    class="flex h-[4.5rem] w-full items-center justify-between border-base-400 bg-base-100 p-4"
                >
                    <h1 class="text-2xl font-bold">
                        {{ 'APP.STAGEHAND.DASHBOARD_HEADER' | translate }}
                    </h1>
                    <a btn matRipple [routerLink]="['/dashboards', 'manage']">{{
                        'APP.STAGEHAND.DASHBOARD_ADD' | translate
                    }}</a>
                </header>
                <main class="w-full flex-1 overflow-auto">
                    <router-outlet />
                </main>
            </div>
        </div>
    `,
    styles: [],
    imports: [SidebarComponent, MatRippleModule, RouterModule, TranslatePipe],
})
export class DashboardsComponent {}
