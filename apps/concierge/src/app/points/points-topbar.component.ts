import { Component } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';

@Component({
    selector: 'points-topbar',
    template: `
        <div
            class="flex items-center bg-white dark:bg-neutral-700 h-20 px-4 border-b border-gray-300 dark:border-neutral-500 space-x-2"
        >
            <div class="flex-1 w-2">
                <ng-content></ng-content>
            </div>
            <!-- <searchbar class="mr-2"></searchbar> -->
            <date-options></date-options>
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
})
export class PointsTopbarComponent extends BaseClass {
    constructor(private _org: OrganisationService) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
    }
}
