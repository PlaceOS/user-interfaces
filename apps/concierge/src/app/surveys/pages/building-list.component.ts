import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'building-list',
    template: `
        <section>
            <div class="flex flex-col p-4">
                <div
                    class="flex w-full items-center justify-between py-4 bg-white max-w-[68rem] m-auto"
                >
                    <span class="text-2xl">
                        {{ (buildings$ | async)?.length }} Building{{
                            (buildings$ | async)?.length > 1 ? 's' : ''
                        }}
                    </span>
                </div>
                <div *ngFor="let building of buildings$ | async">
                    <building-list-item
                        [building]="building"
                    ></building-list-item>
                </div>
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: #fff;
            }
        `,
    ],
})
export class BuildingListComponent {
    public readonly buildings$ = this._org.building_list;

    constructor(private _org: OrganisationService) {}
}
