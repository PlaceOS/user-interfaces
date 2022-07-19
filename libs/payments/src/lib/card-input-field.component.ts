import { DatePipe } from '@angular/common';
import {
    Component,
    ElementRef,
    forwardRef,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALUE_ACCESSOR,
    Validators,
} from '@angular/forms';
import { BaseClass } from '@placeos/common';
import { addYears, format, setMonth } from 'date-fns';

export interface PaymentCardDetails {
    card_number: string;
    cardholder: string;
    cvv: string;
}

const BLANK_CARD = { card_number: '                ', cardholder: '', cvv: '' };
const DATE_PIPE = new DatePipe('en-us', '')

@Component({
    selector: 'card-input-field',
    template: `
        <form [formGroup]="details" (window:keyup)="onInput($event)">
            <div class="flex flex-col">
                <label for="card-number">Card Number</label>
                <div name="card-number" class="flex items-center mb-2">
                    <div
                        #card_number_digit
                        tabindex="0"
                        class="w-5 h-10 flex-1 flex items-center justify-center border-y border-solid border-gray-200 focus:outline-2 focus:outline focus:border-black"
                        *ngFor="let _ of digits; let i = index"
                    >
                        {{ details.value.card_number![i] || '' }}
                    </div>
                </div>
            </div>
            <div class="flex flex-col flex-1">
                <label for="cardholder">Name on Card</label>
                <mat-form-field appearance="outline">
                    <input
                        name="cardholder"
                        matInput
                        placeholder="Mr John Smith"
                        formControlName="cardholder"
                    />
                </mat-form-field>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex flex-col flex-1 w-1/4">
                    <label for="cardholder">Expiry Month</label>
                    <mat-form-field appearance="outline">
                        <mat-select placeholder="MM">
                            <mat-option *ngFor="let item of months" [value]="item[0]">
                                {{ item[1] }} ({{item[0]}})
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col flex-1 w-1/4">
                    <label for="cardholder">Expiry Year</label>
                    <mat-form-field appearance="outline">
                        <mat-select placeholder="YYYY">
                            <mat-option *ngFor="let item of years" [value]="item">{{ item }}</mat-option>
                        </mat-select>
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
                    </mat-form-field>
                </div>
            </div>
        </form>
    `,
    styles: [
        `
            [name='card-number'] div:nth-child(4n + 1):not(:first-child) {
                margin-left: 0.25rem !important;
            }

            [name='card-number'] div:nth-child(4n) {
                border-right-width: 1px;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }

            [name='card-number'] div:nth-child(4n + 1) {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                border-left-width: 1px;
            }

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
    extends BaseClass
    implements ControlValueAccessor
{
    public details = new FormGroup({
        card_number: new FormControl('                '),
        cardholder: new FormControl(''),
        expiry_month: new FormControl(''),
        expiry_year: new FormControl(''),
        cvv: new FormControl('', [
            Validators.minLength(3),
            Validators.maxLength(4),
        ]),
    });
    public disabled = false;

    public readonly months = Array(12).fill(0).map((_, idx) => [DATE_PIPE.transform(setMonth(Date.now(), idx), 'MM'), DATE_PIPE.transform(setMonth(Date.now(), idx), 'MMM')]);
    public readonly years = Array(12).fill(0).map((_, idx) => DATE_PIPE.transform(addYears(Date.now(), idx), 'yyyy'));
    public readonly digits = Array(16).fill(0);

    @ViewChildren('card_number_digit') private _digit_el_list =
        {} as QueryList<ElementRef>;

    private _onChange?: (_: PaymentCardDetails) => void;
    private _onTouch?: (_: PaymentCardDetails) => void;

    public onInput(event: KeyboardEvent) {
        if (!event || !this._digit_el_list.length || !document.activeElement)
            return;
        const idx = this._digit_el_list
            .toArray()
            .findIndex((el) => el?.nativeElement === document.activeElement);
        if (idx < 0) return;
        let card_number = this.details.value.card_number!;
        if (event.code.startsWith('Digit') || event.code.startsWith('Numpad')) {
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
        this._digit_el_list.get(idx + dir)?.nativeElement.focus();
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: PaymentCardDetails) {
        this.details.patchValue(new_value || BLANK_CARD);
        if (this._onChange) this._onChange(this.details.getRawValue() as any);
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
