import {
    afterRenderEffect,
    Component,
    computed,
    ElementRef,
    inject,
    output,
    signal,
    viewChild,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganisationService, unique } from '@placeos/common';
import { requestSpacesForZone } from 'libs/events/src/lib/space.utilities';
import { AnnounceDirective } from './announce.directive';
import { DIALOG_TITLE_STYLES } from './confirm-modal.component';
import { IconComponent } from './icon.component';
import { LoadErrorComponent } from './load-error.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'available-rooms-state-modal',
    template: `
        <div>
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2
                    #heading
                    mat-dialog-title
                    tabindex="-1"
                    class="px-2 text-xl font-medium focus:outline-none"
                >
                    {{
                        'APP.CONCIERGE.AVAILABLE_ROOMS_HEADER'
                            | translate: { type: type }
                    }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        matRipple
                        mat-dialog-close
                        [attr.aria-label]="'COMMON.CLOSE' | translate"
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (rooms_error()) {
                <main class="w-lg max-w-full">
                    <load-error (retry)="reloadRooms()" />
                </main>
            } @else if (!rooms()) {
                <main
                    class="flex h-48 w-lg max-w-full flex-col items-center justify-center space-y-2 text-center"
                >
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <p announce>{{ 'COMMON.LOADING' | translate }}</p>
                </main>
            } @else if (!loading()) {
                <main class="max-h-[65vh] w-lg overflow-auto">
                    <table class="min-w-lg">
                        <thead class="border-base-200 border-b">
                            <tr>
                                <td class="w-12 py-1" (click)="toggleRoom('*')">
                                    <mat-checkbox
                                        [aria-label]="
                                            'COMMON.SELECT_ALL' | translate
                                        "
                                        (click)="$event.stopPropagation()"
                                        (change)="toggleRoom('*')"
                                        [checked]="
                                            rooms()?.length ===
                                            selected().length
                                        "
                                        [indeterminate]="
                                            selected().length > 0 &&
                                            rooms()?.length !==
                                                selected().length
                                        "
                                    ></mat-checkbox>
                                </td>
                                <td></td>
                                <td class="px-8 text-right text-xs">
                                    @let rm_list = rooms();
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
                            @for (space of rooms(); track space) {
                                <tr
                                    class="hover:bg-base-200"
                                    (click)="toggleRoom(space.id)"
                                >
                                    <td>
                                        <mat-checkbox
                                            [aria-label]="
                                                space.display_name || space.name
                                            "
                                            (click)="$event.stopPropagation()"
                                            (change)="toggleRoom(space.id)"
                                            [checked]="
                                                selected().includes(space.id)
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
                                                !disabled_rooms()?.includes(
                                                    space.id
                                                )
                                            "
                                            [class.bg-error]="
                                                disabled_rooms()?.includes(
                                                    space.id
                                                )
                                            "
                                        >
                                            {{
                                                (!disabled_rooms()?.includes(
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
                    class="border-base-200 flex items-center justify-end space-x-2 border-t p-2"
                >
                    <button
                        btn
                        matRipple
                        [disabled]="!selected().length"
                        (click)="enableSelected()"
                    >
                        {{ 'APP.CONCIERGE.AVAILABLE_ROOMS_ENABLE' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse"
                        [disabled]="!selected().length"
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
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <p announce>
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
        DIALOG_TITLE_STYLES,
        `
            td {
                padding: 0.5rem;
            }
        `,
    ],
    imports: [
        MatProgressSpinnerModule,
        MatRippleModule,
        MatCheckboxModule,
        MatDialogModule,
        TranslatePipe,
        IconComponent,
        AnnounceDirective,
        LoadErrorComponent,
    ],
})
export class AvailableRoomsStateModalComponent {
    private _data = inject(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);

    public readonly change = output<string[]>();
    public readonly loading = signal(false);
    public selected = signal<string[]>([]);
    private readonly _rooms = rxResource({
        stream: () => requestSpacesForZone(this._org.building.id),
    });
    /** Rooms in the building. `undefined` until the list loads. */
    public readonly rooms = computed(() =>
        this._rooms.hasValue() ? this._rooms.value() : undefined,
    );
    /** Whether the room list failed to load */
    public readonly rooms_error = computed(() => !!this._rooms.error());
    public readonly type: string = this._data.type;
    public disabled_rooms = signal<string[]>(this._data.disabled_rooms);

    private readonly _heading =
        viewChild.required<ElementRef<HTMLElement>>('heading');
    /** Saving removes the focused button. Move focus to the title. */
    private readonly _focus_on_save = afterRenderEffect(() => {
        if (this.loading()) this._heading().nativeElement.focus();
    });

    /**
     * Request the room list again after it fails to load. The loading view
     * removes the focused Retry button, so move focus to the title first.
     */
    public reloadRooms() {
        this._heading().nativeElement.focus();
        this._rooms.reload();
    }

    public async toggleRoom(id: string) {
        if (id === '*') {
            const rooms = this.rooms() || [];
            if (this.selected().length !== rooms.length)
                this.selected.set(rooms.map((_) => _.id));
            else this.selected.set([]);
        } else {
            if (this.selected().includes(id))
                this.selected.set(this.selected().filter((_) => _ !== id));
            else this.selected.set([...this.selected(), id]);
        }
    }

    public async enableSelected() {
        this.loading.set(true);
        const disabled_list = this.disabled_rooms();
        const list = disabled_list.filter((_) => !this.selected().includes(_));
        this.disabled_rooms.set(list);
        this.change.emit(list);
    }

    public async disableSelected() {
        this.loading.set(true);
        const disabled_list = this.disabled_rooms();
        const list = unique(disabled_list.concat(this.selected()));
        this.disabled_rooms.set(list);
        this.change.emit(list);
    }
}
