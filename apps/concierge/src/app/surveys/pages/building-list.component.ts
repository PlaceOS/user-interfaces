import { Component } from '@angular/core';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'building-list',
    template: `
        <sidebar class="h-full"></sidebar>
        <main
            class="flex flex-col flex-1 relative h-full bg-white dark:bg-neutral-600 pt-4 overflow-y-auto"
        >
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
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class BuildingListComponent {
    public readonly buildings$ = this._org.building_list;

    constructor(private _org: OrganisationService) {}
}
