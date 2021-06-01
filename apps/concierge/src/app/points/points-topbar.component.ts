import { Component } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';


@Component({
    selector: 'points-topbar',
    template: `
        <div class="flex-1 w-2">
            <ng-content></ng-content>
        </div>
        <!-- <searchbar class="mr-2"></searchbar> -->
        <date-options></date-options>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                background-color: #fff;
                height: 5em;
                padding: 0 1em;
                border-bottom: 1px solid #ccc;
            }

            :host > * + * {
                margin-left: .5rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
    ],
})
export class PointsTopbarComponent extends BaseClass {

    constructor(
        private _org: OrganisationService,
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
    }
}
