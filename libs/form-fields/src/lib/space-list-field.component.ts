import { ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { Space } from 'libs/spaces/src/lib/space.class';
import { NewSpaceSelectModalComponent } from 'libs/spaces/src/lib/space-select-modal/new-space-select-modal.component';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `space-list-field`,
    template: `
        <div>
            <div class="flex items-center flex-wrap sm:space-x-2 mb-2">
                <div class="flex-1 min-w-[256px] space-y-2">
                    <label i18n>Select Room Size<span>*</span></label>
                    <div class="flex items-center">
                        <mat-radio-group
                            aria-label="Select Room Size"
                            class="space-x-4"
                            [(ngModel)]="room_size"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-radio-button [value]="1" i18n>
                                Min. 2 People
                            </mat-radio-button>
                            <mat-radio-button [value]="4" i18n>
                                Min. 4 People
                            </mat-radio-button>
                            <mat-radio-button [value]="10" i18n>
                                Min. 10 People
                            </mat-radio-button>
                        </mat-radio-group>
                    </div>
                </div>
            </div>
        </div>
        <div list class="space-y-2">
            <div
                space
                class="relative p-2 rounded-lg w-full flex items-center shadow border border-base-200"
                *ngFor="let space of space_list | async"
            >
                <div
                    class="w-24 h-24 rounded-xl bg-base-200 mr-4 overflow-hidden flex items-center justify-center"
                >
                    <img
                        auth
                        *ngIf="space.images?.length; else placeholder"
                        [source]="space.images[0]"
                        class="min-h-full object-cover"
                    />
                    <ng-template #placeholder>
                        <img
                            class="m-auto"
                            src="assets/icons/room-placeholder.svg"
                        />
                    </ng-template>
                </div>
                <div class="sm:space-y-2 pb-4">
                    <div class="font-medium">
                        {{
                            space.display_name || space.name || 'Meeting Space'
                        }}
                    </div>
                    <div class="flex items-center text-sm space-x-2">
                        <app-icon class="text-blue-500">place</app-icon>
                        <p>
                            {{
                                space.location ||
                                    level(space.zones)?.display_name ||
                                    level(space.zones)?.name
                            }}
                        </p>
                    </div>
                    <div class="flex items-center text-sm space-x-2">
                        <app-icon class="text-blue-500">people</app-icon>
                        <p i18n>
                            {{ space.capacity < 1 ? 2 : space.capacity }} {
                            space.capacity, plural, =1 { Person } other { People
                            } }
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
                            <div class="flex items-center space-x-2" i18n>
                                <app-icon>edit</app-icon>
                                Change
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            name="remove-space"
                            class="clear"
                            (click)="removeSpace(space)"
                        >
                            <div class="flex items-center space-x-2" i18n>
                                <app-icon>close</app-icon>
                                Remove
                            </div>
                        </button>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    name="toggle-space-favourite"
                    class="absolute top-1 right-1"
                    [class.text-blue-400]="favorites.includes(space?.id)"
                    (click)="toggleFavourite(space)"
                >
                    <app-icon>{{
                        favorites.includes(space?.id)
                            ? 'favorite'
                            : 'favorite_border'
                    }}</app-icon>
                </button>
            </div>
        </div>
        <button
            btn
            matRipple
            name="add-space"
            class="w-full inverse mt-2"
            (click)="changeSpaces()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span i18n>Add Space</span>
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
})
export class SpaceListFieldComponent implements ControlValueAccessor {
    @Input() multiday = false;
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

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public ngOnDestroy() {
        if (this._dialog_ref) this._dialog_ref.close();
    }

    public level(zones: string[]) {
        return this._org.levelWithID(zones);
    }

    /** Add or edit selected spaces */
    public changeSpaces() {
        this._dialog_ref = this._dialog.open(NewSpaceSelectModalComponent, {
            data: {
                spaces: this.spaces.getValue(),
                options: { capacity: this.room_size },
                multiday: this.multiday,
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
                fav_list.filter((_) => _ !== space.id)
            );
        }
    }
}
