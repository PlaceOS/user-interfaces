import {
    Component,
    OnDestroy,
    forwardRef,
    inject,
    input,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import {
    OrganisationService,
    SETTING_KEYS,
    SettingsService,
    Space,
} from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { SpaceSelectModalComponent } from 'libs/events/src/lib/space-select-modal/space-select-modal.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `space-list-field`,
    template: `
        <div>
            <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
                <div class="min-w-[256px] flex-1 space-y-2">
                    <label>
                        {{ 'CALENDAR_EVENT.SPACE_SELECT_SIZE' | translate
                        }}<span>*</span>
                    </label>
                    <div class="flex items-center">
                        <mat-radio-group
                            [attr.aria-label]="
                                'CALENDAR_EVENT.SPACE_SELECT_SIZE' | translate
                            "
                            class="space-x-4"
                            [ngModel]="room_size()"
                            (ngModelChange)="room_size.set($event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-radio-button [value]="1">
                                {{
                                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_1'
                                        | translate
                                }}
                            </mat-radio-button>
                            <mat-radio-button [value]="4">
                                {{
                                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                        | translate: { count: 4 }
                                }}
                            </mat-radio-button>
                            <mat-radio-button [value]="10">
                                {{
                                    'CALENDAR_EVENT.SPACE_SELECT_SIZE_X'
                                        | translate: { count: 10 }
                                }}
                            </mat-radio-button>
                        </mat-radio-group>
                    </div>
                </div>
            </div>
        </div>
        <div list class="space-y-2">
            @for (space of space_list(); track space) {
                <div
                    space
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    <div
                        class="bg-base-200 mr-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (space.images?.length) {
                            <img
                                auth
                                [source]="space.images[0]"
                                class="min-h-full object-cover"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/room-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="pb-4 sm:space-y-2">
                        <div class="font-medium">
                            {{
                                space.display_name ||
                                    space.name ||
                                    'Meeting Space'
                            }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">place</icon>
                            <p>
                                {{ location(space) }}
                            </p>
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">people</icon>
                            <p>
                                {{
                                    'CALENDAR_EVENT.CAPACITY_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      space.capacity < 1
                                                          ? 2
                                                          : space.capacity,
                                              }
                                }}
                            </p>
                        </div>
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-space"
                                class="clear"
                                (click)="changeSpaces()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>edit</icon>
                                    {{ 'COMMON.CHANGE' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                name="remove-space"
                                class="clear"
                                (click)="removeSpace(space)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>close</icon>
                                    {{ 'COMMON.REMOVE' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        name="toggle-space-favourite"
                        class="absolute top-1 right-1"
                        [class.text-info]="favorites.includes(space?.id)"
                        (click)="toggleFavourite(space)"
                    >
                        <icon
                            [className]="
                                favorites.includes(space?.id)
                                    ? 'material-symbols-rounded'
                                    : 'material-symbols-outlined'
                            "
                            >favorite</icon
                        >
                    </button>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            name="add-space"
            class="inverse mt-2 w-full"
            (click)="changeSpaces()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'CALENDAR_EVENT.SPACE_ADD' | translate }}</span>
            </div>
        </button>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SpaceListFieldComponent),
            multi: true,
        },
    ],
    imports: [
        MatRadioModule,
        FormsModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MatDialogModule,
        AuthenticatedImageDirective,
    ],
})
export class SpaceListFieldComponent
    implements ControlValueAccessor, OnDestroy
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    readonly multiday = input(false);
    public readonly room_size = signal(4);
    public readonly spaces = signal<Space[]>([]);
    public readonly space_list = this.spaces.asReadonly();
    public readonly disabled = signal(false);
    public _dialog_ref?: MatDialogRef<SpaceSelectModalComponent>;

    private _onChange: (_: Space[]) => void;
    private _onTouch: (_: Space[]) => void;
    private _favorites_cache: string[] | null = null;

    public get favorites() {
        // Return cache if available for instant updates
        if (this._favorites_cache !== null) return this._favorites_cache;
        return (
            this._settings.signal<string[]>(
                SETTING_KEYS.FAVORITE_ROOMS,
                EMPTY_FAVS,
                true,
            )() || EMPTY_FAVS
        );
    }

    public ngOnDestroy() {
        if (this._dialog_ref) this._dialog_ref.close();
    }

    public level(zones: string[]) {
        return this._org.levelWithID(zones);
    }

    /** Region, building and level labels for a selected space */
    public location(space: Space) {
        const level = this.level(space.zones);
        const building = this._org.buildings.find(
            (_) => space.zones.includes(_.id) || _.id === level?.parent_id,
        );
        const region = this._org.regions.find(
            (_) => _.id === building?.parent_id,
        );
        return [region, building, level]
            .map((_) => _?.display_name || _?.name)
            .filter((_) => !!_)
            .join(' / ');
    }

    /** Add or edit selected spaces */
    public changeSpaces() {
        this._dialog_ref = this._dialog.open(SpaceSelectModalComponent, {
            data: {
                spaces: this.spaces(),
                options: { capacity: this.room_size() },
                multiday: this.multiday(),
            },
        });
        this._dialog_ref.afterClosed().subscribe(() => {
            this.setValue(this._dialog_ref?.componentInstance?.selected());
            this._dialog_ref = undefined;
        });
    }

    /** Remove the selected space from the list */
    public removeSpace(space: Space) {
        this.setValue(this.spaces().filter((_) => _.id !== space.id));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: Space[]) {
        const value = new_value || [];
        this.spaces.set(value);
        if (this._onChange) this._onChange(value);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value?: Space[]) {
        this.spaces.set(value || []);
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn: (_: Space[]) => void) =>
        (this._onChange = fn);
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn: (_: Space[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);

    public toggleFavourite(space: Space) {
        if (!space?.id) return;
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(space.id);
        const updated = new_state
            ? [...fav_list, space.id]
            : fav_list.filter((_) => _ !== space.id);

        // Optimistically update cache for instant UI update
        this._favorites_cache = updated;

        // Save to settings in background
        this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_ROOMS, updated);
    }
}
