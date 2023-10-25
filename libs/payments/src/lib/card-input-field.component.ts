import { DatePipe } from '@angular/common';
import { Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR,
    Validators,
} from '@angular/forms';
import { AsyncHandler } from '@placeos/common';
import { addYears, setMonth } from 'date-fns';

export interface PaymentCardDetails {
    card_number: string;
    cardholder: string;
    cvv: string;
    exp_month: string;
    exp_year: string;
}

const BLANK_CARD = { card_number: '                ', cardholder: '', cvv: '' };
const DATE_PIPE = new DatePipe('en-us', '');

@Component({
    selector: 'card-input-field',
    template: `
        <form [formGroup]="details" (window:keyup)="onInput($event)">
            <div class="flex flex-col">
                <label for="card-number" i18n>Card Number</label>
                <div
                    tabindex="0"
                    class="border border-base-200 p-2 h-12 mb-4 focus-within:shadow focus-within:border-base-200 flex items-center font-mono w-full rounded relative"
                    (focus)="focusInput()"
                >
                    <pre class="flex-1">{{ card_display }}</pre>
                    <input
                        #input
                        class="hidden absolute"
                        type="tel"
                        [value]="details.value.card_number?.trim()"
                        (keydown)="(false)"
                        maxlength="17"
                    />
                    <img
                        *ngIf="card_type"
                        [src]="'assets/icons/' + card_type + '.svg'"
                        class="h-8"
                    />
                </div>
            </div>
            <div class="flex flex-col flex-1">
                <label for="cardholder" i18n>Name on Card</label>
                <mat-form-field appearance="outline">
                    <input
                        name="cardholder"
                        matInput
                        placeholder="Mr John Smith"
                        formControlName="cardholder"
                    />
                    <mat-error i18n>Cardholder name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex flex-col flex-1 w-1/4">
                    <label for="cardholder" i18n>Expiry Month</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="MM"
                            formControlName="exp_month"
                        >
                            <mat-option
                                *ngFor="let item of months"
                                [value]="item[0]"
                            >
                                {{ item[1] }} ({{ item[0] }})
                            </mat-option>
                        </mat-select>
                        <mat-error i18n>Expiry month is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col flex-1 w-1/4">
                    <label for="cardholder">Expiry Year</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="YYYY"
                            formControlName="exp_year"
                        >
                            <mat-option
                                *ngFor="let item of years"
                                [value]="item"
                                >{{ item }}</mat-option
                            >
                        </mat-select>
                        <mat-error i18n>Expiry year is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="cvv">CVV</label>
                    <mat-form-field appearance="outline" class="w-20">
                        <input
                            name="cvv"
                            matInput
                            formControlName="cvv"
                            maxlength="4"
                        />
                        <mat-error i18n>Invalid security code</mat-error>
                    </mat-form-field>
                </div>
            </div>
        </form>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => CardInputFieldComponent),
            multi: true,
        },
    ],
})
export class CardInputFieldComponent
    extends AsyncHandler
    implements ControlValueAccessor
{
    public details = new FormGroup({
        card_number: new FormControl(Array(16).fill('X').join()),
        cardholder: new FormControl(''),
        exp_month: new FormControl(''),
        exp_year: new FormControl(''),
        cvv: new FormControl('', [
            Validators.minLength(3),
            Validators.maxLength(4),
        ]),
    });
    public disabled = false;

    public readonly months = Array(12)
        .fill(0)
        .map((_, idx) => [
            DATE_PIPE.transform(setMonth(Date.now(), idx), 'MM'),
            DATE_PIPE.transform(setMonth(Date.now(), idx), 'MMM'),
        ]);
    public readonly years = Array(12)
        .fill(0)
        .map((_, idx) =>
            DATE_PIPE.transform(addYears(Date.now(), idx), 'yyyy')
        );
    public readonly digits = Array(16).fill(0);
    private _index = 0;

    @ViewChild('input', { static: true })
    private _input_el!: ElementRef<HTMLInputElement>;

    private _onChange?: (_: PaymentCardDetails) => void;
    private _onTouch?: (_: PaymentCardDetails) => void;

    public get is_amex() {
        const no = this.details.value?.card_number || '';
        return no.startsWith('3');
    }

    public get card_type() {
        const no = this.details.value?.card_number || '';
        if (no.startsWith('3')) return 'amex';
        if (no.startsWith('4')) return 'visa';
        if (no.startsWith('5')) return 'mastercard';
        return '';
    }

    public get card_display() {
        let no = this.details.value?.card_number || '';
        if (this.card_focused)
            no =
                no.substring(0, this._index) +
                '⯐' +
                no.substring(this._index + 1);
        return this.is_amex
            ? `${no.substring(0, 4)}-${no.substring(4, 10)}-${no.substring(10)}`
            : `${no.substring(0, 4)}-${no.substring(4, 8)}-${no.substring(
                  8,
                  12
              )}-${no.substring(12)}`;
    }

    public get card_focused() {
        return (
            document.activeElement === this._input_el.nativeElement ||
            document.activeElement ===
                this._input_el.nativeElement.parentElement
        );
    }

    public ngOnInit() {
        this.subscription(
            'changes',
            this.details.valueChanges.subscribe((v) =>
                this.timeout('update', () =>
                    this.setValue(this.details.getRawValue())
                )
            )
        );
    }

    public focusInput() {
        this._input_el.nativeElement.focus();
        this._index = this._input_el.nativeElement.selectionStart || 0;
    }

    public onInput(event: KeyboardEvent) {
        if (!event || !this.card_focused) return;
        const idx = this._index;
        if (idx < 0 || idx > 16) return;
        let card_number = this.details.value.card_number!;
        if (
            (event.code.startsWith('Digit') ||
                event.code.startsWith('Numpad')) &&
            idx < (this.is_amex ? 15 : 16)
        ) {
            card_number =
                card_number.substring(0, idx) +
                event.key +
                card_number.substring(idx + 1);
            this.details.patchValue({ card_number });
            this._focusChange(idx, 1);
        } else if (event.code === 'Backspace' && idx > 0) {
            let card_number = this.details.value.card_number!;
            card_number =
                card_number.substring(0, idx) +
                ' ' +
                card_number.substring(idx + 1);
            this.details.patchValue({ card_number });
            this._focusChange(idx, -1);
        } else if (event.code === 'ArrowLeft') {
            this._focusChange(idx, -1);
        } else if (event.code === 'ArrowRight' && card_number[idx] !== ' ') {
            this._focusChange(idx, 1);
        }
    }

    private _focusChange(idx: number, dir: 1 | -1) {
        this._index = Math.min(16, Math.max(0, idx + dir));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: PaymentCardDetails) {
        if (this._onChange) this._onChange(new_value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value?: PaymentCardDetails) {
        this.details.patchValue(value || BLANK_CARD);
    }

    public readonly registerOnChange = (fn: (_: PaymentCardDetails) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: PaymentCardDetails) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);
}
