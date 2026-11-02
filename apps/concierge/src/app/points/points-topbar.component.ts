import { Component } from '@angular/core';
import { TranslatePipe } from '@placeos/components';
import { DateOptionsComponent } from '@placeos/form-fields';

@Component({
    selector: 'points-topbar',
    template: `
        <div class="bg-base-100 flex h-20 items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{ 'APP.CONCIERGE.POINTS_HEADER' | translate }}
            </h2>
            <div class="w-px flex-1"></div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options></date-options>
            <div class="pl-2">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
    imports: [DateOptionsComponent, TranslatePipe],
})
export class PointsTopbarComponent {}
