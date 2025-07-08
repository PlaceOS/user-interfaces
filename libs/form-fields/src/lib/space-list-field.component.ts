import { CommonModule } from '@angular/common';
import { Component, OnDestroy, forwardRef, inject, input } from '@angular/core';
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
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { OrganisationService } from '@placeos/organisation';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { NewSpaceSelectModalComponent } from 'libs/spaces/src/lib/new-space-select-modal/new-space-select-modal.component';
import { Space } from 'libs/spaces/src/lib/space.class';

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
                            [(ngModel)]="room_size"
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
            @for (space of space_list | async; track space) {
                <div
                    space
                    class="relative flex w-full items-center rounded-lg border border-base-200 p-2 shadow"
                >
                    <div
                        class="mr-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl bg-base-200"
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
                                {{
                                    space.location ||
                                        level(space.zones)?.display_name ||
                                        level(space.zones)?.name
                                }}
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
                            class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-space"
                                class="clear"
                                (click)="changeSpaces(space)"
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
                        class="absolute right-1 top-1"
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
        CommonModule,
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
    public room_size = 4;
    public spaces = new BehaviorSubject<Space[]>([]);
    public space_list = this.spaces.pipe(debounceTime(300));
    public disabled = false;
    public _dialog_ref?: MatDialogRef<NewSpaceSelectModalComponent>;

    private _onChange: (_: Space[]) => void;
    private _onTouch: (_: Space[]) => void;

    public get favorites() {
        return this._settings.get<string[]>('favourite_spaces') || EMPTY_FAVS;
    }

    public ngOnDestroy() {
        if (this._dialog_ref) this._dialog_ref.close();
    }

    public level(zones: string[]) {
        return this._org.levelWithID(zones);
    }

    /** Add or edit selected spaces */
    public changeSpaces() {
        this._dialog_ref = this._dialog.open(NewSpaceSelectModalComponent, {
            // this._dialog_ref = this._dialog.open(SpaceSelectModalComponent, {
            data: {
                spaces: this.spaces.getValue(),
                options: { capacity: this.room_size },
                multiday: this.multiday(),
            },
        });
        this._dialog_ref.afterClosed().subscribe(() => {
            this.setValue(this._dialog_ref?.componentInstance?.selected);
            this._dialog_ref = undefined;
        });
    }

    /** Remove the selected space from the list */
    public removeSpace(space: Space) {
        this.setValue(this.spaces.getValue().filter((_) => _.id !== space.id));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: Space[]) {
        this.spaces.next(new_value || []);
        if (this._onChange) this._onChange(new_value || []);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value?: Space[]) {
        this.spaces.next(value || []);
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn: (_: Space[]) => void) =>
        (this._onChange = fn);
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn: (_: Space[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);

    public toggleFavourite(space: Space) {
        if (!space?.id) return;
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(space.id);
        if (new_state) {
            this._settings.saveUserSetting('favourite_spaces', [
                ...fav_list,
                space.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'favourite_spaces',
                fav_list.filter((_) => _ !== space.id),
            );
        }
    }
}
