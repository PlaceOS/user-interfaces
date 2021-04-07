import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    BaseClass,
    currentUser,
    current_user,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { debounceTime, first, map, shareReplay } from 'rxjs/operators';
import { DeskFlowStateService } from './desk-flow-state.service';

@Component({
    selector: 'desk-flow-listing',
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        </header>
        <main
            class="flex flex-1 flex-col relative"
            *ngIf="!checkin; else checkin_state"
        >
            <desk-flow-form></desk-flow-form>
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
                            <div class="mb-2 text-sm">
                                {{ desk.zone?.display_name || desk.zone?.name }}
                            </div>
                            <button
                                mat-button
                                class="w-full"
                                (click)="bookDesk(desk)"
                            >
                                Book
                            </button>
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
        <ng-template #checkin_state>
            <main
                class="flex-1 flex flex-col items-center justify-center w-full"
            >
                <mat-spinner class="mb-4" [diameter]="48"></mat-spinner>
                <p>Checking in desk...</p>
            </main>
        </ng-template>
        <ng-container *ngIf="success">
            <booking-success
                calendar="desks"
                route="desks"
                type="desk"
            ></booking-success>
        </ng-container>
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

            [desk] {
                width: 240px;
                max-width: calc(100vw - 1rem);
            }
        `,
    ],
})
export class DeskFlowListingComponent extends BaseClass {
    public show_menu: boolean = false;

    public checkin: boolean;

    public success: boolean;
    public readonly available = combineLatest([
        this._desks.desk_availability,
        this._desks.options,
    ]).pipe(
        debounceTime(50),
        map(([desks, { attendees }]) => {
            const count = attendees.length + 1;
            const list = desks.sort((a, b) => a.zone?.name?.localeCompare(b.zone.name) || a.name?.localeCompare(b.name));
            const groups = Math.floor(list.length / count);
            const desk_list = [];
            for (let i = 0; i < groups; i++) {
                const items = list.splice(0, count);
                desk_list.push({
                    id: `group-${i}`,
                    name: `${items
                        .map((_) => _.name)
                        .join(', ')}`,
                    desks: items,
                    zone: items[0].zone,
                });
            }
            return desk_list;
        }),
        shareReplay(1)
    );
    public readonly loading = this._desks.loading;

    public readonly bookDesk = async (d) => {
        const success = await this._desks.bookDesk(d.desks, '');
        if (!success) return;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { success: 'true' },
        });
        this.success = true;
    };

    constructor(
        private _desks: DeskFlowStateService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        await current_user.pipe(first((_) => !!_)).toPromise();
        this._desks.setHost(currentUser());
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('checkin')) {
                    this.checkin = true;
                    const success = await this._desks.checkin(
                        params.get('checkin')
                    );
                    this.checkin = false;
                    if (!success) return notifyError('Error checking in desk.');
                    notifySuccess('Successfully checked in to desk');
                }
                this.success = params.has('success');
            })
        );
    }
}
