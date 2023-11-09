import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';
import { take } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'catering-rooms-state-modal',
    template: `
        <div>
            <header class="flex items-center justify-between p-2">
                <h3 class="p-2">Set {{ type }} Availability for Rooms</h3>
                <button icon mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                class="max-h-[65vh] overflow-auto"
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
                                {{ (rooms | async)?.length }} Room(s)
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            *ngFor="let space of rooms | async"
                            class="hover:bg-neutral:bg-base-100/5"
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
                                    class="ml-auto px-3 py-1 rounded-2xl text-white w-24"
                                    [class.bg-success]="
                                        !disabled_rooms?.includes(space.id)
                                    "
                                    [class.bg-error]="
                                        disabled_rooms?.includes(space.id)
                                    "
                                >
                                    {{
                                        !disabled_rooms?.includes(space.id)
                                            ? 'Enabled'
                                            : 'Disabled'
                                    }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer
                class="flex items-center p-2 justify-end space-x-2 border-t border-base-200"
            >
                <button btn matRipple (click)="enableSelected()">
                    Enable Selected
                </button>
                <button btn matRipple (click)="disableSelected()">
                    Disable Selected
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <main
                class="w-64 h-48 p-8 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving disabled room list...</p>
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
        private _org: OrganisationService
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
