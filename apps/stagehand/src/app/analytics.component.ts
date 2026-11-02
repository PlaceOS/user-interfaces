import { Component, linkedSignal } from '@angular/core';
import { AsyncHandler, settingSignal } from '@placeos/common';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, SafePipe, TranslatePipe } from '@placeos/components';
import { StagehandPageComponent } from './ui/stagehand-page.component';

interface AnalyticsPage {
    name: string;
    url: string;
}

@Component({
    selector: 'stagehand-analytics',
    template: `
        <stagehand-page heading="AV Systems Analytics">
            <div page-header>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="analytics-dashboard"
                        [(ngModel)]="page"
                        aria-label="Analytics dashboard"
                    >
                        @for (page of analytics_pages(); track page.name) {
                            <mat-option [value]="page">{{
                                page.name
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            @if (page()?.url; as url) {
                <!-- No allow-top-navigation: a cross-origin dashboard can't send this tab to another page -->
                <iframe
                    class="h-full w-full"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-downloads"
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
        </stagehand-page>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        SafePipe,
        IconComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        StagehandPageComponent,
    ],
})
export class AnalyticsComponent extends AsyncHandler {
    public readonly analytics_pages = settingSignal<AnalyticsPage[]>(
        'analytics_pages',
        [],
    );
    /** Opens on the first page, so the user does not land on an empty view */
    public readonly page = linkedSignal<AnalyticsPage | null>(
        () => this.analytics_pages()[0] || null,
    );
}
