import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'searchbar',
    template: `
        <mat-form-field appearance="outline">
            <input
                matInput
                placeholder="Search..."
                [(ngModel)]="model"
                (ngModelChange)="modelChange.emit($event)"
            />
            <app-icon class="text-xl" matSuffix [icon]="{ class: 'material-icons', content: 'search' }"></app-icon>
        </mat-form-field>
    `,
    styles: [`
        :host {
            height: 3.5em;
        }
    `],
})
export class SearchbarComponent {
    /** Currently selected date */
    @Input() public model: string = '';
    /** Emitter for changes to the date */
    @Output() public modelChange = new EventEmitter<string>();
}
