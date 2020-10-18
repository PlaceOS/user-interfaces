import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { BaseClass } from '@user-interfaces/common';

@Component({
    selector: 'a-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
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
    @ViewChild('input', { static: true }) private input_field: ElementRef<HTMLInputElement>;
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
