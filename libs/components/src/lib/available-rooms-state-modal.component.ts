import { CommonModule } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { nextValueFrom, unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { requestSpacesForZone } from 'libs/spaces/src/lib/space.utilities';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'available-rooms-state-modal',
    template: `
        <div>
            <header
                class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.AVAILABLE_ROOMS_HEADER'
                            | translate: { type: type }
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[65vh] w-[32rem] overflow-auto">
                    <table class="min-w-[32rem]">
                        <thead class="border-b border-base-200">
                            <tr>
                                <td class="w-12 py-1" (click)="toggleRoom('*')">
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
                                <td class="px-8 text-right text-xs">
                                    @let rm_list = rooms | async;
                                    {{
                                        'APP.CONCIERGE.AVAILABLE_ROOMS_COUNT'
                                            | translate
                                                : {
                                                      count: rm_list?.length,
                                                  }
                                                : rm_list?.length
                                    }}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            @for (space of rooms | async; track space) {
                                <tr
                                    class="hover:bg-base-200"
                                    (click)="toggleRoom(space.id)"
                                >
                                    <td>
                                        <mat-checkbox
                                            class="pointer-events-none"
                                            [checked]="
                                                selected.includes(space.id)
                                            "
                                        ></mat-checkbox>
                                    </td>
                                    <td>
                                        {{ space.display_name || space.name }}
                                    </td>
                                    <td class="text-center">
                                        <div
                                            class="ml-auto w-24 rounded-full px-3 py-2 text-sm text-white"
                                            [class.bg-success]="
                                                !disabled_rooms?.includes(
                                                    space.id
                                                )
                                            "
                                            [class.bg-error]="
                                                disabled_rooms?.includes(
                                                    space.id
                                                )
                                            "
                                        >
                                            {{
                                                (!disabled_rooms?.includes(
                                                    space.id
                                                )
                                                    ? 'COMMON.ENABLED'
                                                    : 'COMMON.DISABLED'
                                                ) | translate
                                            }}
                                        </div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </main>
                <footer
                    class="flex items-center justify-end space-x-2 border-t border-base-200 p-2"
                >
                    <button btn matRipple (click)="enableSelected()">
                        {{ 'APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse"
                        (click)="disableSelected()"
                    >
                        {{
                            'APP.CONCIERGE.AVAILABLE_ROOMS_DISABLE' | translate
                        }}
                    </button>
                </footer>
            } @else {
                <main
                    class="flex h-48 w-full min-w-64 flex-col items-center justify-center space-y-2 p-16 text-center"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>
                        {{
                            'APP.CONCIERGE.AVAILABLE_ROOMS_SAVING'
                                | translate: { type: type }
                        }}
                    </p>
                </main>
            }
        </div>
    `,
    styles: [
        `
            td {
                padding: 0.5rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatCheckboxModule,
        MatDialogModule,
        TranslatePipe,
        IconComponent,
    ],
})
export class AvailableRoomsStateModalComponent {
    private _data = inject(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);

    public readonly change = output<string[]>();
    public readonly loading = signal(false);
    public selected: string[] = [];
    public readonly rooms = requestSpacesForZone(this._org.building.id);
    public readonly type: string = this._data.type;
    public disabled_rooms: string[] = this._data.disabled_rooms;

    public async toggleRoom(id: string) {
        if (id === '*') {
            const rooms = await nextValueFrom(this.rooms);
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
        this.loading.set(true);
        const disabled_list = this.disabled_rooms;
        const list = disabled_list.filter((_) => !this.selected.includes(_));
        this.disabled_rooms = list;
        this.change.emit(list);
    }

    public async disableSelected() {
        this.loading.set(true);
        const disabled_list = this.disabled_rooms;
        const list = unique(disabled_list.concat(this.selected));
        this.disabled_rooms = list;
        this.change.emit(list);
    }
}
