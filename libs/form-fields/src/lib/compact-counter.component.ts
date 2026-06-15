import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    input,
    model,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'compact-counter',
    template: `
        <div
            counter
            class="flex items-center gap-1 text-base"
            (window:keydown.shift)="shift_key.set(true)"
            (window:keydown.control)="ctrl_key.set(true)"
            (window:keydown.meta)="ctrl_key.set(true)"
            (window:keyup.shift)="shift_key.set(false)"
            (window:keyup.control)="ctrl_key.set(false)"
            (window:keyup.meta)="ctrl_key.set(false)"
            [class.disabled]="disabled()"
        >
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center rounded-sm border p-1 focus-within:z-20"
            >
                @if (!focused()) {
                    <span class="px-3">
                        {{
                            (render_fn() ? render_fn()(value()) : value()) ||
                                '0'
                        }}
                    </span>
                }
                <input
                    type="text"
                    class="absolute inset-0 rounded-none p-2 opacity-0 focus:opacity-100"
                    [ngModel]="value()"
                    (ngModelChange)="value.set($event)"
                    (focus)="focused.set(true)"
                    (blur)="setValue(+value()); focused.set(false)"
                    limitInput
                />
            </div>
            <div class="flex flex-col justify-center space-y-1">
                <button
                    increase
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                    [disabled]="value() === max()"
                    (click)="add()"
                >
                    <icon>add</icon>
                </button>
                <button
                    decrease
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                    [disabled]="!value() || value() === min()"
                    (click)="remove()"
                >
                    <icon>remove</icon>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            [counter].disabled {
                @apply pointer-events-none opacity-30;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => CompactCounterComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, IconComponent],
})
export class CompactCounterComponent implements ControlValueAccessor {
    /** Size of a single step */
    public readonly step = input(1);
    /** Maximum amount for the counter */
    public readonly max = input(999);
    /** Minimum amount for the counter */
    public readonly min = input(0);
    /** Custom function for rendering the counter value */
    public readonly render_fn = input<(v: number) => string>(undefined);
    /** Whether form control is disabled */
    public readonly disabled = model<boolean>(undefined);
    /** Current value of the counter */
    public readonly value = signal<number | undefined>(undefined);
    /** Whether shift key is being held by the user */
    public readonly shift_key = signal(false);
    /** Whether control key is being held by the user */
    public readonly ctrl_key = signal(false);
    public readonly focused = signal(false);

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /**
     * Add the `step` to the current value
     */
    public add() {
        let value = this.value();
        if (!value) {
            value = this.min() || 0;
        }
        const step = this.ctrl_key()
            ? 100 * this.step()
            : this.shift_key()
              ? 10 * this.step()
              : this.step() || 1;
        value += step;
        if (value > this.max()) {
            value = this.max() || 10;
        }
        this.setValue(value);
    }

    /** Remove the `step` from the current value */
    public remove() {
        let value = this.value();
        if (!value) {
            value = this.min() || 0;
        }
        const step = this.ctrl_key()
            ? 100 * this.step()
            : this.shift_key()
              ? 10 * this.step()
              : this.step() || 1;
        value -= step;
        if (value < this.min()) {
            value = this.min() || 0;
        }
        this.setValue(value);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number): void {
        if (new_value < this.min()) new_value = this.min();
        if (new_value > this.max()) new_value = this.max();
        if ((new_value / this.step()) % 1 !== 0) {
            new_value =
                Math.round(new_value * (1 / this.step())) / (1 / this.step());
        }
        this.value.set(new_value);
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.value.set(value);
    }

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);
    public readonly setDisabledState = (d) => this.disabled.set(d);
}
