import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'searchbar',
    template: `
        <mat-form-field appearance="outline" class="no-subscript">
            <input
                matInput
                placeholder="Search..."
                [(ngModel)]="model"
                (ngModelChange)="modelChange.emit($event)"
            />
            <app-icon class="text-xl" matSuffix>search</app-icon>
        </mat-form-field>
    `,
    styles: [``],
})
export class SearchbarComponent {
    /** Currently selected date */
    @Input() public model: string = '';
    /** Emitter for changes to the date */
    @Output() public modelChange = new EventEmitter<string>();
}
