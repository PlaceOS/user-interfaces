import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Space, NewSpaceSelectModalComponent } from '@placeos/spaces';

@Component({
    selector: `space-list-field`,
    template: `
        <div>
            <div class="flex items-center flex-wrap sm:space-x-2 mb-2">
                <div class="flex-1 min-w-[256px] space-y-2">
                    <label>Select Room Size<span>*</span></label>
                    <div class="flex items-center">
                        <mat-radio-group
                            aria-label="Select Room Size"
                            class="space-x-4"
                            [(ngModel)]="room_size"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-radio-button [value]="2">
                                1-2 People
                            </mat-radio-button>
                            <mat-radio-button [value]="9">
                                3-9 People
                            </mat-radio-button>
                            <mat-radio-button [value]="100">
                                10+ People
                            </mat-radio-button>
                        </mat-radio-group>
                    </div>
                </div>
            </div>
        </div>
        <div list class="space-y-2">
            <div
                space
                class="relative p-2 rounded-lg w-full flex items-center shadow border border-gray-200"
                *ngFor="let space of spaces"
            >
                <div class="w-24 h-24 rounded-xl bg-black/20 mr-4"></div>
                <div class="space-y-2 pb-4">
                    <div class="font-medium">
                        {{ space.name || 'Meeting Space' }}
                    </div>
                    <div class="flex items-center text-sm space-x-2">
                        <app-icon class="text-blue-500">place</app-icon>
                        <p>{{ space.location }}</p>
                    </div>
                    <div class="flex items-center text-sm space-x-2">
                        <app-icon class="text-blue-500">people</app-icon>
                        <p>
                            {{ space.capacity < 1 ? 2 : space.capacity }} People
                        </p>
                    </div>
                    <div
                        class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                    >
                        <button
                            mat-button
                            edit-space
                            class="clear"
                            (click)="changeSpaces(space)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon>edit</app-icon>
                                Change
                            </div>
                        </button>
                        <button
                            mat-button
                            remove-space
                            class="clear"
                            (click)="removeSpace(space)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon>close</app-icon>
                                Remove
                            </div>
                        </button>
                    </div>
                </div>
                <button mat-icon-button fav class="absolute top-1 right-1">
                    <app-icon>favorite_border</app-icon>
                </button>
            </div>
        </div>
        <button
            mat-button
            add-space
            class="w-full inverse mt-2"
            (click)="changeSpaces()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span>Add Space</span>
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
    public room_size = 9;
    public spaces: Space[] = [];
    public disabled = false;

    private _onChange: (_: Space[]) => void;
    private _onTouch: (_: Space[]) => void;

    constructor(private _dialog: MatDialog) {}

    /** Add or edit selected spaces */
    public changeSpaces(edit_space?: Space) {
        const ref = this._dialog.open(NewSpaceSelectModalComponent, {
            data: edit_space,
        });
        ref.afterClosed().subscribe((space?: Space) => {
            if (!space) return;
            this.setValue([
                ...this.spaces.filter((_) => _.id !== space.id),
                space,
            ]);
        });
    }

    /** Remove the selected space from the list */
    public removeSpace(space: Space) {
        this.setValue(this.spaces.filter((_) => _.id !== space.id));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: Space[]) {
        this.spaces = new_value;
        if (this._onChange) this._onChange(this.spaces);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: Space[]) {
        this.spaces = value || [];
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn: (_: Space[]) => void) =>
        (this._onChange = fn);
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn: (_: Space[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);
}
