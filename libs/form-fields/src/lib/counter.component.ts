import { Component, computed, input, model, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { provideValueAccessor } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

/** Event, or its modifier keys, for one counter step */
type StepEvent =
    | Event
    | Partial<Pick<MouseEvent, 'shiftKey' | 'ctrlKey' | 'metaKey'>>;

@Component({
    selector: 'a-counter',
    template: `
        <div
            counter
            class="flex items-center text-base"
            [class.gap-1]="compact()"
            [class.disabled]="disabled()"
        >
            @if (!compact()) {
                <button
                    decrease
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-12 w-12 rounded-l rounded-r-none border"
                    [disabled]="disabled() || at_min()"
                    (click)="remove($event)"
                    [attr.aria-label]="'COMMON.DECREASE' | translate"
                >
                    <icon>remove</icon>
                </button>
            }
            <div
                value
                class="border-secondary relative z-0 -mx-px flex h-12 min-w-16 flex-1 items-center justify-center border focus-within:z-20"
                [class.rounded-none]="!compact()"
                [class.p-2]="!compact()"
                [class.rounded-sm]="compact()"
                [class.p-1]="compact()"
            >
                @if (!focused()) {
                    <span [class.px-3]="compact()">
                        {{
                            (render_fn() ? render_fn()(value()) : value()) ||
                                '0'
                        }}
                    </span>
                }
                <input
                    type="text"
                    inputmode="decimal"
                    class="absolute inset-0 rounded-none p-2 opacity-0 focus:opacity-100"
                    [attr.id]="input_id() || null"
                    [disabled]="disabled()"
                    [ngModel]="value()"
                    (ngModelChange)="value.set($event)"
                    (keydown)="onKeydown($event)"
                    (focus)="focused.set(true)"
                    (blur)="setValue(+value()); focused.set(false)"
                />
            </div>
            @if (compact()) {
                <div class="flex flex-col justify-center space-y-1">
                    <button
                        increase
                        icon
                        matRipple
                        type="button"
                        class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                        [disabled]="disabled() || at_max()"
                        (click)="add($event)"
                        [attr.aria-label]="'COMMON.INCREASE' | translate"
                    >
                        <icon>add</icon>
                    </button>
                    <button
                        decrease
                        icon
                        matRipple
                        type="button"
                        class="border-secondary text-secondary z-10 h-5.5 w-5.5 min-w-0 rounded-sm border text-sm"
                        [disabled]="disabled() || at_min()"
                        (click)="remove($event)"
                        [attr.aria-label]="'COMMON.DECREASE' | translate"
                    >
                        <icon>remove</icon>
                    </button>
                </div>
            } @else {
                <button
                    increase
                    icon
                    matRipple
                    type="button"
                    class="border-secondary text-secondary z-10 h-12 w-12 rounded-l-none rounded-r border"
                    [disabled]="disabled() || at_max()"
                    (click)="add($event)"
                    [attr.aria-label]="'COMMON.INCREASE' | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `,
    styles: [
        `
            [counter].disabled {
                @apply pointer-events-none opacity-30;
            }
        `,
    ],
    providers: [provideValueAccessor(() => CounterComponent)],
    imports: [FormsModule, IconComponent, TranslatePipe],
})
export class CounterComponent implements ControlValueAccessor {
    /** Size of a single step */
    public readonly step = input(1);
    /** Maximum amount for the counter */
    public readonly max = input(999);
    /** Minimum amount for the counter */
    public readonly min = input(0);
    /** Custom function for rendering the counter value */
    public readonly render_fn = input<(v: number) => string>(undefined);
    /** ID of the editable input, so that a `<label for>` can name it */
    public readonly input_id = input<string>(undefined);
    /** Smaller layout with the step buttons stacked to the right */
    public readonly compact = input(false);
    /** Whether form control is disabled */
    public readonly disabled = model<boolean>(undefined);
    /** Current value of the counter */
    public readonly value = signal<number | undefined>(undefined);
    public readonly focused = signal(false);
    /** Whether the value cannot go lower */
    public readonly at_min = computed(
        () => (this.value() ?? this.min()) <= this.min(),
    );
    /** Whether the value cannot go higher */
    public readonly at_max = computed(
        () => (this.value() ?? this.min()) >= this.max(),
    );

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /**
     * Add the `step` to the current value. Hold shift for 10 steps, or
     * ctrl/cmd for 100 steps.
     */
    public add(event?: StepEvent) {
        this.setValue(this._current() + this._stepSize(event));
    }

    /** Remove the `step` from the current value. Modifier keys work as for `add` */
    public remove(event?: StepEvent) {
        this.setValue(this._current() - this._stepSize(event));
    }

    /**
     * Current value as a number. While the user types, the input holds text,
     * so convert it. An empty value counts as the minimum.
     */
    private _current() {
        const value = this.value() as number | string | undefined;
        return value == null || value === '' ? this.min() : Number(value);
    }

    /** Step with ArrowUp and ArrowDown. Modifier keys work as for `add` */
    public onKeydown(event: KeyboardEvent) {
        if (event.key === 'ArrowUp') this.add(event);
        else if (event.key === 'ArrowDown') this.remove(event);
        else return;
        event.preventDefault();
    }

    /** Size of one change, from the modifier keys held for the event */
    private _stepSize(event?: StepEvent) {
        const step = this.step() || 1;
        const keys = event as MouseEvent | undefined;
        if (keys?.ctrlKey || keys?.metaKey) return 100 * step;
        if (keys?.shiftKey) return 10 * step;
        return step;
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number): void {
        // Text that is not a number resets to the minimum
        if (!Number.isFinite(new_value)) new_value = this.min();
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
