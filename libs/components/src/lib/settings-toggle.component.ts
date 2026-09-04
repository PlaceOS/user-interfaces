import { Component, forwardRef, input, signal } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from './icon.component';

@Component({
    selector: 'settings-toggle',
    template: `
        <button
            type="button"
            matRipple
            class="hover:bg-base-200 relative flex flex-1 items-center space-x-2 overflow-hidden rounded-sm border py-1 pr-1 pl-2"
            [class.border-base-300]="!value()"
            [class.border-info]="value()"
            (click)="setValue(!value())"
        >
            <div
                class="z-10 flex flex-1 items-center space-x-2 px-2 text-left"
                [class.py-2]="!inline()"
                [class.py-1]="inline()"
            >
                <div
                    class="flex h-full w-full flex-col justify-center leading-none"
                >
                    <div>{{ label() }}<ng-content></ng-content></div>
                    @if (info() && inline()) {
                        <div class="text-xs opacity-30">{{ info() }}</div>
                    }
                </div>
                @if (info() && !inline()) {
                    <icon [matTooltip]="info()">info</icon>
                }
            </div>
            @if (value()) {
                <div class="bg-info absolute inset-0 z-0 m-0! opacity-10"></div>
            }
            @if (toggle()) {
                <div class="px-2">
                    <div
                        toggle
                        class="border-base-400 relative h-8 w-12 rounded-full border-2"
                        [class.bg-base-200]="!value()"
                        [class.bg-info]="value()"
                        [class.border-info!]="value()"
                    >
                        <div
                            class="absolute top-1/2 flex h-6 w-6 -translate-x-0.5 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-sm"
                            [class.left-1]="!value()"
                            [class.left-5]="value()"
                            [class.bg-base-400]="!value()"
                            [class.bg-info-light]="value()"
                        >
                            <icon>{{ value() ? 'done' : 'remove' }}</icon>
                        </div>
                    </div>
                </div>
            } @else {
                <mat-checkbox
                    [ngModel]="value()"
                    (ngModelChange)="setValue($event)"
                    class="pointer-events-none"
                ></mat-checkbox>
            }
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
            }

            [toggle] {
                transition:
                    background 200ms,
                    left 200ms;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SettingsToggleComponent),
            multi: true,
        },
    ],
    imports: [MatCheckboxModule, FormsModule, IconComponent, MatTooltipModule],
})
export class SettingsToggleComponent implements ControlValueAccessor {
    public readonly toggle = input<boolean>(undefined);
    public readonly label = input<string>(undefined);
    public readonly info = input<string>(undefined);
    public readonly inline = input(true);

    public value = signal<boolean>(undefined);

    /** Form control on change handler */
    private _onChange: (_: boolean) => void;
    /** Form control on touch handler */
    private _onTouch: (_: boolean) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: boolean): void {
        this.value.set(new_value);
        /* istanbul ignore else */
        if (this._onChange) this._onChange(new_value);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: boolean) {
        this.value.set(value);
    }
}
