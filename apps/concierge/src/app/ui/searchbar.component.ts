import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'searchbar',
    template: `
        <mat-form-field appearance="outline" class="no-subscript">
            <mat-label>{{ 'COMMON.SEARCH' | translate }}</mat-label>
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
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class SearchbarComponent {
    /** Currently selected date */
    public readonly model = model('');
    /** Emitter for changes to the date */
    public readonly modelChange = output<string>();
}
