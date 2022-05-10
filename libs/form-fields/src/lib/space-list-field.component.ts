import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Space } from "@placeos/spaces";

@Component({
    selector: `space-list-field`,
    template: `
    <div>
        <div class="flex items-center flex-wrap sm:space-x-2">
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
    <div>
        <
    </div>
    <button mat-button add-space class="w-full inverse">
        <div class="flex items-center justify-center space-x-2">
            <app-icon>search</app-icon>
            <span>Add Space</span>
        </div>
    </button>`,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SpaceListFieldComponent),
            multi: true,
        }
    ]
})
export class SpaceListFieldComponent implements ControlValueAccessor {
    public room_size = 9;
    public spaces: Space[];
    public disabled = false;

    private _onChange: (_: Space[]) => void;
    private _onTouch: (_: Space[]) => void;

    constructor(private _dialog: MatDialog) {}

    public addSpaceToList() {
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
        this.spaces = value || []
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn: (_: Space[]) => void) => this._onChange = fn;
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn: (_: Space[]) => void) => this._onTouch = fn;
    public readonly setDisabledState = (s: boolean) => this.disabled = s;
}