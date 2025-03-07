import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';
import { take } from 'rxjs/operators';

@Component({
    selector: 'available-rooms-state-modal',
    template: `
        <div>
            <header
                class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.AVAILABLE_ROOMS_HEADER'
                            | translate: { type: type }
                    }}
                </h2>
                <button icon matRipple mat-dialog-close *ngIf="!loading">
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                class="max-h-[65vh] w-[32rem] overflow-auto"
                *ngIf="!loading; else load_state"
            >
                <table class="min-w-[32rem]">
                    <thead class="border-b border-base-200">
                        <tr>
                            <td class="w-12" (click)="toggleRoom('*')">
                                <mat-checkbox
                                    class="pointer-events-none"
                                    [checked]="
                                        (rooms | async)?.length ===
                                        selected.length
                                    "
                                    [indeterminate]="
                                        selected.length > 0 &&
                                        (rooms | async)?.length !==
                                            selected.length
                                    "
                                ></mat-checkbox>
                            </td>
                            <td></td>
                            <td class="text-right text-xs">
                                {{
                                    'APP.CONCIERGE.AVAILABLE_ROOMS_COUNT'
                                        | translate
                                            : { count: (rooms | async)?.length }
                                }}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            *ngFor="let space of rooms | async"
                            class="hover:bg-base-200"
                            (click)="toggleRoom(space.id)"
                        >
                            <td>
                                <mat-checkbox
                                    class="pointer-events-none"
                                    [checked]="selected.includes(space.id)"
                                ></mat-checkbox>
                            </td>
                            <td>{{ space.display_name || space.name }}</td>
                            <td class="text-center">
                                <div
                                    class="ml-auto w-24 rounded-full px-3 py-2 text-sm text-white"
                                    [class.bg-success]="
                                        !disabled_rooms?.includes(space.id)
                                    "
                                    [class.bg-error]="
                                        disabled_rooms?.includes(space.id)
                                    "
                                >
                                    {{
                                        (!disabled_rooms?.includes(space.id)
                                            ? 'COMMON.ENABLED'
                                            : 'COMMON.DISABLED'
                                        ) | translate
                                    }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer
                class="flex items-center justify-end space-x-4 border-t border-base-200 px-4 py-2"
            >
                <button btn matRipple (click)="enableSelected()">
                    {{ 'APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE' | translate }}
                </button>
                <button btn matRipple (click)="disableSelected()">
                    {{ 'APP.CONCIERGE.AVAILABLE_ROOMS_DISABLE' | translate }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main
                class="flex h-48 w-64 flex-col items-center justify-center space-y-2 p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>
                    {{
                        'APP.CONCIERGE.AVAILABLE_ROOMS_SAVING'
                            | translate: { type: type }
                    }}
                </p>
            </main>
        </ng-template>
    `,
    styles: [
        `
            td {
                padding: 0.5rem;
            }
        `,
    ],
    standalone: false,
})
export class AvailableRoomsStateModalComponent {
    @Output() public change = new EventEmitter<string[]>();
    public loading = false;
    public selected: string[] = [];
    public readonly rooms = requestSpacesForZone(this._org.building.id);
    public readonly type: string = this._data.type;
    public disabled_rooms: string[] = this._data.disabled_rooms;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _org: OrganisationService,
    ) {}

    public async toggleRoom(id: string) {
        if (id === '*') {
            const rooms = await this.rooms.pipe(take(1)).toPromise();
            if (this.selected.length !== rooms.length)
                this.selected = rooms.map((_) => _.id);
            else this.selected = [];
        } else {
            if (this.selected.includes(id))
                this.selected = this.selected.filter((_) => _ !== id);
            else this.selected = [...this.selected, id];
        }
    }

    public async enableSelected() {
        this.loading = true;
        const disabled_list = this.disabled_rooms;
        const list = disabled_list.filter((_) => !this.selected.includes(_));
        this.disabled_rooms = list;
        this.change.next(list);
    }

    public async disableSelected() {
        this.loading = true;
        const disabled_list = this.disabled_rooms;
        const list = unique(disabled_list.concat(this.selected));
        this.disabled_rooms = list;
        this.change.next(list);
    }
}
