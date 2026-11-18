import { Pipe, PipeTransform } from '@angular/core';

/** Number of decimal digits of the currency, e.g. 2 for AUD and 0 for JPY */
export function currencyDigits(currency: string): number {
    try {
        return (
            new Intl.NumberFormat('en', {
                style: 'currency',
                currency,
            }).resolvedOptions().maximumFractionDigits ?? 2
        );
    } catch {
        return 2;
    }
}

/** Convert an amount in the minor unit, e.g. cents, to the major unit */
export function toMajorUnits(amount: number, currency: string) {
    return amount / 10 ** currencyDigits(currency);
}

/** Convert an amount in the major unit to the minor unit, e.g. cents */
export function toMinorUnits(amount: number, currency: string) {
    return Math.round(amount * 10 ** currencyDigits(currency));
}

/** Format an amount in the minor unit of the currency */
export function formatAmount(amount: number, currency: string) {
    const code = currency?.toUpperCase() || 'USD';
    try {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: code,
        }).format(toMajorUnits(amount || 0, code));
    } catch {
        return `${toMajorUnits(amount || 0, code).toFixed(2)} ${code}`;
    }
}

/** Locale key of the name of a price unit, e.g. `per hour` */
export function unitKey(unit: string) {
    return `PAYMENTS.UNIT_${(unit || 'item').toUpperCase()}`;
}

/** Show a payment amount, e.g. `1250 | amount: 'AUD'` shows `$12.50` */
@Pipe({ name: 'amount' })
export class PaymentAmountPipe implements PipeTransform {
    public transform(amount: number | null | undefined, currency: string) {
        return formatAmount(amount ?? 0, currency);
    }
}
