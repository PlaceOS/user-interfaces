import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'searchbar',
    template: `
        <mat-form-field appearance="outline" class="no-subscript">
            <input
                matInput
                [placeholder]="'COMMON.SEARCH' | translate"
                [(ngModel)]="model"
                (ngModelChange)="modelChange.emit($event)"
            />
            <icon class="text-xl" matSuffix>search</icon>
        </mat-form-field>
    `,
    styles: [``],
    standalone: false,
})
export class SearchbarComponent {
    /** Currently selected date */
    @Input() public model = '';
    /** Emitter for changes to the date */
    @Output() public modelChange = new EventEmitter<string>();
}
