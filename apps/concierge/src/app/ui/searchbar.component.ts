import { Component, model, output } from '@angular/core';

@Component({
    selector: 'searchbar',
    template: `
        <mat-form-field appearance="outline" class="no-subscript">
            <input
                matInput
                [placeholder]="'COMMON.SEARCH' | translate"
                [ngModel]="model()"
                (ngModelChange)="modelChange.emit($event); model.set($event)"
            />
            <icon class="text-xl" matSuffix>search</icon>
        </mat-form-field>
    `,
    styles: [``],
    standalone: false,
})
export class SearchbarComponent {
    /** Currently selected date */
    public readonly model = model('');
    /** Emitter for changes to the date */
    public readonly modelChange = output<string>();
}
