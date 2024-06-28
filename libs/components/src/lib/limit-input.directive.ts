import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const ALLOWED_NUMBERS = '0123456789'.split('');
const ALLOWED_DECIMALS = '0123456789.'.split('');
const ALLOWED_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ALLOWED_ALPHANUMERIC = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

@Directive({
    selector: '[limitInput]',
})
export class LimitInputDirective {
    @Input() restriction:
        | 'number'
        | 'decimals'
        | 'letters'
        | 'alphanumeric'
        | 'custom' = 'decimals';
    @Input() custom_list: string[] = [];

    constructor(private _el: ElementRef) {}

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        const e: KeyboardEvent = event;
        const key = e.key;
        if (
            ['ArrowLeft', 'ArrowRight', 'Tab', 'Backspace', 'Home'].indexOf(
                key
            ) !== -1 ||
            // Allow: Ctrl+A
            (e.key === 'a' && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.key === 'c' && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.key === 'v' && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.key === 'x' && (e.ctrlKey || e.metaKey))
        ) {
            // let it happen, don't do anything
            return;
        }
        switch (this.restriction) {
            case 'letters':
                if (ALLOWED_LETTERS.indexOf(key) === -1) {
                    e.preventDefault();
                }
                break;
            case 'alphanumeric':
                if (ALLOWED_ALPHANUMERIC.indexOf(key) === -1) {
                    e.preventDefault();
                }
                break;
            case 'custom':
                if (this.custom_list.indexOf(key) === -1) {
                    e.preventDefault();
                }
                break;
            case 'decimals':
                if (ALLOWED_DECIMALS.indexOf(key) === -1) {
                    e.preventDefault();
                }
                break;
            case 'number':
            default:
                if (ALLOWED_NUMBERS.indexOf(key) === -1) {
                    e.preventDefault();
                }
                break;
        }
    }
}
