import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'searchbar',
    template: `
        <mat-form-field appearance="outline" class="no-subscript">
            <input
                matInput
                [placeholder]="'COMMON.SEARCH' | translate"
                [ngModel]="value()"
                (ngModelChange)="setValue($event)"
            />
            <icon class="text-xl" matSuffix>search</icon>
        </mat-form-field>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class SearchbarComponent {
    private readonly _internal_model = signal('');

    /** Current search value. Bound parents control this input. */
    public readonly model = input<string | undefined>(undefined);
    /** Value displayed in the search input. */
    public readonly value = computed(() => {
        const external_value = this.model();
        return external_value === undefined
            ? this._internal_model()
            : external_value;
    });
    /** Emit user-entered search changes. */
    public readonly modelChange = output<string>();

    public setValue(value: string) {
        this._internal_model.set(value);
        this.modelChange.emit(value);
    }
}
