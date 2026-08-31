import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { queryBookings } from '@placeos/bookings';
import {
    Booking,
    BuildingLevel,
    Desk,
    DialogEvent,
    notifyInfo,
    OrganisationService,
    randomString,
    unique,
    User,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ItemListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { showStaff } from '@placeos/users';
import { addMonths, getUnixTime } from 'date-fns';
import { SelectMapItemModalComponent } from '../ui/select-map-item-modal.component';

const CHARS = '0123456789ABCDEF';

type LevelOption = Pick<BuildingLevel, 'id' | 'name' | 'display_name'>;
type DeskModalDesk = Partial<Desk> & {
    assigned_name?: string;
    notes?: string;
};

export interface DeskModalData {
    desk?: DeskModalDesk;
    levels?: readonly LevelOption[];
    zone_id?: string;
}

@Component({
    selector: 'desk-modal',
    template: `
        <div class="w-lg">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.DESKS_EDIT'
                            : 'APP.CONCIERGE.DESKS_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="flex max-h-[65vh] flex-col overflow-auto p-4">
                    @if (is_new) {
                        <label for="level">
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [formField]="form.zone_id"
                                [placeholder]="
                                    'COMMON.LEVEL_SELECT' | translate
                                "
                            >
                                @for (level of levels; track level.id) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'APP.CONCIERGE.ROOMS_LEVEL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    }
                    <div class="w-full">
                        <label for="id">
                            {{ 'APP.CONCIERGE.DESKS_ID' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.id"
                                placeholder="desk-10.123"
                            />
                            <mat-error>{{
                                'FORM.ID_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="name">
                                {{ 'APP.CONCIERGE.DESKS_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.name"
                                    placeholder="e.g. Office Desk"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="map-id">
                                {{ 'EXPLORE.MAP_ID' | translate }}<span>*</span>
                            </label>
                            <div class="flex space-x-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        [formField]="form.map_id"
                                        [placeholder]="
                                            'APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'EXPLORE.MAP_ID_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="border-secondary text-secondary h-12 w-12 min-w-12 rounded-sm border"
                                    [matTooltip]="
                                        'APP.CONCIERGE.POI_MAP_SELECT'
                                            | translate
                                    "
                                    (click)="selectItemfromMap()"
                                >
                                    <icon>place</icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    <label for="user">{{
                        'APP.CONCIERGE.USER_ASSIGNED' | translate
                    }}</label>
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            [formField]="form.assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="clearUser()"
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    @if (future_bookings().length) {
                        <div
                            class="bg-warning/10 border-warning text-warning-content mb-4 flex items-start space-x-2 rounded-sm border p-2 text-sm"
                        >
                            <icon class="text-warning">warning</icon>
                            <p class="flex-1">
                                {{
                                    'APP.CONCIERGE.ASSIGNED_FUTURE_DESK_BOOKINGS'
                                        | translate
                                            : {
                                                  count: future_bookings()
                                                      .length,
                                              }
                                            : future_bookings().length
                                }}
                            </p>
                        </div>
                    }
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            [formField]="form.bookable"
                            class="flex-1"
                            [label]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                    <label for="notes">{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        [formField]="form.groups"
                    ></item-list-field>
                    <label for="notes">{{
                        'COMMON.FEATURES' | translate
                    }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.FEATURES' | translate"
                        [formField]="form.features"
                    ></item-list-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [placeholder]="'FORM.NOTES' | translate"
                            [formField]="form.notes"
                        ></textarea>
                    </mat-form-field>
                    <label for="security">
                        {{ 'APP.CONCIERGE.DESKS_SECURITY' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.DESKS_SECURITY' | translate
                            "
                            [formField]="form.security"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.DESKS_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormField,
        MatProgressSpinnerModule,
        ItemListFieldComponent,
        SettingsToggleComponent,
        UserSearchFieldComponent,
        MatTooltipModule,
    ],
})
export class DeskModalComponent implements OnInit {
    private _data = inject<DeskModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<DeskModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public readonly event = output<DialogEvent>();
    public loading = signal(false);

    /** Future desk bookings for the currently assigned user (excluding this desk) */
    public readonly future_bookings = signal<Booking[]>([]);

    private readonly _assigned_email = computed(() => this.model().assigned_to);

    public get id(): string {
        return this._data?.desk?.id || '';
    }

    public get desk(): DeskModalDesk {
        return this._data?.desk;
    }

    public readonly is_new = !this._data?.desk?.id;
    public readonly levels = this._data?.levels || [];

    public readonly model = signal({
        id: ``,
        name: '',
        map_id: '',
        groups: [] as string[],
        features: [] as string[],
        bookable: false,
        notes: '',
        assigned_user: null as User | null,
        assigned_to: '',
        assigned_name: '',
        security: '',
        zone_id: this._data?.zone_id || '',
    });

    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.map_id);
        if (this.is_new) required(p.zone_id);
    });

    constructor() {
        const desk = this._data?.desk as any;
        if (desk) {
            this.model.update((m) => ({
                ...m,
                id: desk.id ?? m.id,
                name: desk.name ?? m.name,
                map_id: desk.map_id ?? m.map_id,
                groups: desk.groups ?? m.groups,
                features: desk.features ?? m.features,
                bookable: desk.bookable ?? m.bookable,
                notes: desk.notes ?? m.notes,
                assigned_to: desk.assigned_to ?? m.assigned_to,
                assigned_name: desk.assigned_name ?? m.assigned_name,
                security: desk.security ?? m.security,
            }));
        }
        if (!this.model().id) {
            this.model.update((m) => ({
                ...m,
                id: `desk-${randomString(3, CHARS)}_${randomString(5, CHARS)}`,
            }));
        }
        effect(() => this._checkFutureBookings(this._assigned_email()));
    }

    /**
     * Warn when the assigned user already has upcoming desk bookings. The
     * desk being edited is excluded so its own assignment booking does not
     * trigger the warning.
     */
    private async _checkFutureBookings(email: string) {
        if (!email) {
            this.future_bookings.set([]);
            return;
        }
        const now = Date.now();
        const bookings = await queryBookings({
            period_start: getUnixTime(now),
            period_end: getUnixTime(addMonths(now, 12)),
            type: 'desk',
            email,
            include_checked_out: true,
        });
        // Selection changed while the query was in flight; ignore stale result
        if (this._assigned_email() !== email) return;
        this.future_bookings.set(
            bookings.filter((booking) => booking.asset_id !== this.id),
        );
    }

    public async ngOnInit() {
        if (this.desk?.assigned_to) {
            const user = await showStaff(this.desk.assigned_to);
            if (user) {
                this.model.update((m) => ({
                    ...m,
                    assigned_user: user,
                    assigned_to: user.email,
                    assigned_name: user.name,
                }));
            }
        }
    }

    public clearUser() {
        this.model.update((m) => ({
            ...m,
            assigned_user: null,
            assigned_to: '',
            assigned_name: '',
        }));
    }

    public postForm() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        const value: any = { ...this.model() };
        if (value.assigned_user) {
            value.assigned_to = value.assigned_user?.email || value.assigned_to;
            value.assigned_name =
                value.assigned_user?.name || value.assigned_name;
        } else {
            delete value.assigned_to;
            delete value.assigned_name;
        }
        delete value.assigned_user;

        this._dialog_ref.disableClose = true;
        const has_changes = Object.keys(this.desk).some(
            (key) => value[key] !== this.desk[key],
        );
        if (has_changes) {
            this.event.emit({ reason: 'done', metadata: value });
        } else {
            this._dialog_ref.disableClose = false;
            notifyInfo('No changes were made.');
            this._dialog_ref.close();
        }
    }

    public selectItemfromMap() {
        let level = this.desk.zone as any;
        const ref = this._dialog.open(SelectMapItemModalComponent, {
            data: {
                location: this.model().map_id,
                level_id: this.form,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            level = ref.componentInstance.level || level;
            const zones = unique([
                this._org.organisation.id,
                this._org.building.parent_id,
                this._org.building.id,
                level?.id,
            ]);
            this.model.update((m) => ({ ...m, map_id: d }));
        });
    }
}
