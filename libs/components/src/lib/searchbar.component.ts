import {
    Component,
    Input,
    EventEmitter,
    Output,
    ViewChild,
    ElementRef,
    SimpleChanges,
    OnChanges,
} from '@angular/core';
import { BaseClass } from '@placeos/common';

@Component({
    selector: 'a-searchbar',
    template: `
        <div
            class="flex items-center h-12 rounded-3xl border border-gray-200 bg-white text-black px-2 w-full shadow"
            tabindex="0"
            (focus)="focusField()"
            (click)="focusField()"
        >
            <app-icon class="text-2xl">search</app-icon>
            <input
                #input
                type="text"
                class="flex-1 w-1/2 outline-none border-none"
                [(ngModel)]="value"
                (ngModelChange)="valueChange.emit($event)"
                [placeholder]="placeholder || 'Search...'"
            />
            <mat-spinner [diameter]="32" *ngIf="loading"></mat-spinner>
        </div>
    `,
    styles: [`
        :host {
            width: 768px;
            max-width: calc(100vw - 2rem);
        }
    `],
})
export class SearchbarComponent extends BaseClass implements OnChanges {
    /** Current contents of the searchbar input */
    @Input('value') public value: string;
    /** Current contents of the searchbar input */
    @Input() public placeholder: string;
    /** Whether external changes are being processed */
    @Input() public loading: boolean;
    /** Whether external changes are being processed */
    @Input() public autofocus: boolean;
    /** Emitter for changes to the searchbar value */
    @Output() public valueChange = new EventEmitter<string>();
    /** Input field reference */
    @ViewChild('input', { static: true }) private input_field: ElementRef<
        HTMLInputElement
    >;
    /** if flat is true then remove border radius and box-shadow */
    @Input() public flat = false;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.autofocus && this.autofocus) {
            this.focusField();
        }
    }

    public focusField() {
        if (this.input_field && this.input_field.nativeElement) {
            this.input_field.nativeElement.focus();
        }
    }
}
