import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CateringItem, CateringStateService } from '@placeos/catering';
import { notifyError, notifySuccess } from '@placeos/common';
import { first, map } from 'rxjs/operators';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-preferences',
    template: `
        <div
            class="bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4"
        >
            <h3 class="text-xl mb-2 w-full">Would you like a drink?</h3>
            <div class="w-full">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        [(ngModel)]="beverage"
                        placeholder="Select beverage"
                    >
                        <mat-option
                            *ngFor="let item of menu | async"
                            [value]="item"
                        >
                            {{ item.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <button btn matRipple class="w-32" (click)="update()">
                {{ beverage ? 'Update' : 'Continue' }}
            </button>
            <a
                icon
                matRipple
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon>close</app-icon>
            </a>
        </div>
    `,
    styles: [
        `
            :host > div {
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
})
export class CheckinPreferencesComponent {
    public beverage: CateringItem;

    public readonly menu = this._catering.menu.pipe(
        map((l) => {
            return l.filter((_) =>
                _.tags.find(
                    (_) =>
                        _.toLowerCase() === 'drink' ||
                        _.toLowerCase() === 'drinks' ||
                        _.toLowerCase() === 'beverage'
                )
            );
        })
    );

    constructor(
        private _router: Router,
        private _checkin: CheckinStateService,
        private _catering: CateringStateService
    ) {}

    public async update() {
        if (!this.beverage) return this.next();
        const event = await this._checkin.event
            .pipe(first((_) => !!_))
            .toPromise();
        if (!event) return notifyError('Unable to load event data.');
        // const order =
        //     (event.ext('catering') ? event.ext('catering')[0] : null) ||
        //     new CateringOrder();
        // await updateEvent(
        //     event.id,
        //     new CalendarEvent({
        //         ...event,
        //         extension_data: {
        //             ...event.extension_data,
        //             catering: [
        //                 ...(event.extension_data.catering?.filter(
        //                     (_) => _.id !== order.id
        //                 ) || []),
        //                 new CateringOrder({
        //                     ...order,
        //                     items: [
        //                         ...order.items,
        //                         new CateringItem({
        //                             ...this.beverage,
        //                             quantity: 1,
        //                         }),
        //                     ],
        //                 }),
        //             ],
        //         },
        //     })
        // ).toPromise();
        notifySuccess('Successfully update event.');
        this.next();
    }

    public next() {
        this._router.navigate(['/welcome']);
    }
}
