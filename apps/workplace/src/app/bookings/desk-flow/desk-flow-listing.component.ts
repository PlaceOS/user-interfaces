import { Component } from '@angular/core';
import { OrganisationService } from '@user-interfaces/organisation';
import { first } from 'rxjs/operators';
import { DeskFlowStateService } from './desk-flow-state.service';

@Component({
    selector: 'desk-flow-listing',
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        </header>
        <main class="flex flex-1 flex-col relative">
            <div class="w-full bg-gray-800 text-white p-4">
                <div options class="m-auto">
                    <h2 class="text-xl font-medium mb-4 text-center">
                        Request a desk
                    </h2>
                    <div class="flex items-center space-x-2">
                        <div class="flex flex-col flex-1 w-40">
                            <label>Building</label>
                            <mat-form-field overlay appearance="outline">
                                <mat-select
                                    placeholder="Select Building..."
                                    [ngModel]="(options | async).zones[0]"
                                    (ngModelChange)="
                                        setOptions({ zones: [$event] })
                                    "
                                >
                                    <mat-option
                                        *ngFor="let bld of buildings | async"
                                        [value]="bld.id"
                                    >
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col flex-1 w-40">
                            <label>Date</label>
                            <a-date-field
                                [ngModel]="(options | async).date"
                                class="text-black"
                                (ngModelChange)="setOptions({ date: $event })"
                            ></a-date-field>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label>Reason</label>
                        <mat-form-field overlay appearance="outline">
                            <input
                                [(ngModel)]="reason"
                                matInput
                                placeholder="Reason for booking"
                            />
                        </mat-form-field>
                    </div>
                </div>
            </div>
            <div class="flex-1 overflow-auto w-full bg-gray-200 relative">
                <ng-container *ngIf="!(loading | async); else load_state">
                    <div
                        list
                        *ngIf="(available | async)?.length; else empty_state"
                        class="flex flex-wrap p-2 justify-center m-auto"
                    >
                        <div
                            desk
                            *ngFor="let desk of available | async"
                            class="bg-white rounded shadow p-2 m-1"
                        >
                            <div>{{ desk.name }}</div>
                            <div class="mb-2 text-sm">{{ desk.zone?.display_name || desk.zone?.name }}</div>
                            <button mat-button class="w-full" (click)="bookDesk(desk)">Book</button>
                        </div>
                    </div>
                </ng-container>
            </div>
        </main>
        <footer class="flex">
            <a-footer-menu class="w-full"></a-footer-menu>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
        <ng-template #empty_state>
            <div
                class="absolute flex flex-col inset-0 items-center justify-center"
            >
                No desks available for selected building and time
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                class="absolute flex flex-col inset-0 items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Retrieving available desks for building and time...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                max-height: calc(100vh - 6.15rem);
            }

            [list] {
                width: 768px;
                max-width: 100vw;
            }

            [options] {
                width: 480px;
                max-width: calc(100vw - 2rem);
            }

            [desk] {
                width: 240px;
                max-width: calc(100vw - 1rem);
            }
        `,
    ],
})
export class DeskFlowListingComponent {
    /** Reason for making the booking */
    public reason: string;

    public show_menu: boolean = false;

    public readonly buildings = this._org.building_list;

    public readonly available = this._desks.desk_availability;

    public readonly options = this._desks.options;

    public readonly loading = this._desks.loading;

    public readonly setOptions = (o) => this._desks.setOptions(o);

    public readonly bookDesk = (d) => this._desks.bookDesk(d, this.reason);

    constructor(
        private _desks: DeskFlowStateService,
        private _org: OrganisationService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first(_ => _)).toPromise();
        this.setOptions({ zones: [this._org.building.id] });
    }
}
