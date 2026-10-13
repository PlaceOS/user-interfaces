import {
    Component,
    inject,
    signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, settingSignal } from '@placeos/common';

import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';
import { SidebarComponent } from './ui/sidebar.component';

interface AnalyticsPage {
    name: string;
    url: string;
}

@Component({
    selector: 'stagehand-analytics',
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <sidebar />
            <div class="flex flex-1 flex-col">
                <header
                    class="border-base-400 bg-base-100 flex h-18 w-full items-center justify-between p-4"
                >
                    <h1 class="text-2xl font-bold">AV Systems Analytics</h1>
                    <div>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select
                                id="analytics-dashboard"
                                [(ngModel)]="page"
                                aria-label="Analytics dashboard"
                            >
                                @for (
                                    page of analytics_pages();
                                    track page.name
                                ) {
                                    <mat-option [value]="page">{{
                                        page.name
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                </header>
                <main
                    id="stagehand-page-content"
                    class="w-full flex-1 overflow-auto"
                >
                    @if (page()?.url; as url) {
                        <iframe
                            class="h-full w-full"
                            [title]="page()?.name || 'Analytics dashboard'"
                            [src]="url | safe: 'resource'"
                        ></iframe>
                    } @else {
                        <div
                            class="stagehand-subtle flex h-full w-full flex-col items-center justify-center space-y-4 p-12"
                        >
                            <icon class="text-8xl">arrow_warm_up</icon>
                            <p>
                                {{
                                    'Select an analytics dashboard from above'
                                        | translate
                                }}
                            </p>
                        </div>
                    }
                </main>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        TranslatePipe,
        SafePipe,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SidebarComponent,
        FormsModule,
    ],
})
export class AnalyticsComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public readonly analytics_pages = settingSignal<AnalyticsPage[]>(
        'analytics_pages',
        [],
    );
    public readonly page = signal<AnalyticsPage | null>(null);
}
