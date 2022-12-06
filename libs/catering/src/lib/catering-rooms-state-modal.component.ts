import { Component } from '@angular/core';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';
import { take } from 'rxjs/operators';
import { CateringStateService } from './catering';

@Component({
    selector: 'catering-rooms-state-modal',
    template: `
        <div>
            <header class="flex items-center justify-between p-2">
                <h3 class="p-2">Set Catering Availability for Rooms</h3>
                <button mat-icon-button mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                class="max-h-[65vh] overflow-auto"
                *ngIf="!loading; else load_state"
            >
                <table class="min-w-[32rem]">
                    <thead
                        class="border-b border-gray-200 dark:border-neutral-500"
                    >
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
                            class="hover:bg-black/10 dark:hover:bg-white/5"
                            (click)="toggleRoom(space.id)"
                        >
                            <td>
                                <mat-checkbox
                                    class="pointer-events-none"
                                    [checked]="selected.includes(space.id)"
                                ></mat-checkbox>
                            </td>
                            <td>{{ space.display_name || space.name }}</td>
                            <td class="text-right">
                                <span
                                    class="px-2 py-1 rounded-2xl"
                                    [class.bg-green-600]="
                                        !(availability | async)?.includes(
                                            space.id
                                        )
                                    "
                                    [class.bg-red-600]="
                                        (availability | async)?.includes(
                                            space.id
                                        )
                                    "
                                >
                                    {{
                                        !(availability | async)?.includes(
                                            space.id
                                        )
                                            ? 'Enabled'
                                            : 'Disabled'
                                    }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer
                class="flex items-center p-2 justify-end space-x-2 border-t border-gray-200 dark:border-neutral-500"
            >
                <button mat-button (click)="enableSelected()">Enable Selected</button>
                <button mat-button (click)="disableSelected()">Disable Selected</button>
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
export class CateringRoomsStateModalComponent {
    public loading = false;
    public selected: string[] = [];
    public readonly rooms = requestSpacesForZone(this._org.building.id);
    public readonly availability = this._catering.availability;

    constructor(
        private _catering: CateringStateService,
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
        const disabled_list = await this.availability.pipe(take(1)).toPromise();
        const list = disabled_list.filter((_) => !this.selected.includes(_));
        await this._catering.saveDisabledRooms(list).catch(() => null);
        this.loading = false;
    }

    public async disableSelected() {
        const disabled_list = await this.availability.pipe(take(1)).toPromise();
        const list = unique(disabled_list.concat(this.selected));
        await this._catering.saveDisabledRooms(list).catch(() => null);
        this.loading = false;
    }
}
