import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { themedLogo } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    TranslatePipe,
} from '@placeos/components';

/**
 * Scroll area of a report page: the logo header bar, then a loading
 * spinner, an empty message or the report body.
 *
 * Put the report body in a child `<ng-template>`. It is created only when
 * the report is not loading and has data, so its components do not run
 * while the page is loading or empty.
 *
 * ```html
 * <report-page header="APP.CONCIERGE.REPORTS_DESKS_HEADER" [loading]="!!loading()" [has_data]="has_data()">
 *     <ng-template>...</ng-template>
 * </report-page>
 * ```
 */
@Component({
    selector: 'report-page',
    host: {
        class: 'relative block h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible',
    },
    template: `
        <div class="w-full">
            <div class="bg-base-200 m-4 flex items-center rounded-sm p-4">
                <img alt="" auth class="h-12" [source]="logo()" />
                <div class="flex-1"></div>
                <h2 class="px-2 text-2xl font-medium">
                    {{ header() | translate }}
                </h2>
            </div>
        </div>
        @if (!loading()) {
            @if (has_data()) {
                <ng-container [ngTemplateOutlet]="content()" />
            } @else {
                <div
                    class="screen-only flex h-full w-full flex-col items-center p-8"
                >
                    <p class="opacity-70">
                        {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div class="flex h-full w-full flex-col items-center p-8">
                <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                <p class="opacity-70">
                    {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                </p>
            </div>
        }
    `,
    imports: [
        NgTemplateOutlet,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
        TranslatePipe,
    ],
})
export class ReportPageComponent {
    /** Translation key of the report title */
    public readonly header = input.required<string>();
    public readonly loading = input(false);
    public readonly has_data = input(false);

    public readonly content = contentChild.required(TemplateRef);
    public readonly logo = themedLogo();
}
