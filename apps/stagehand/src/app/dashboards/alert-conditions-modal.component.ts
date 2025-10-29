import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler, DialogEvent, Identity } from '@placeos/common';
import {
    PlaceAlert,
    PlaceSystem,
    TriggerAtTimeCondition,
    TriggerComparison,
    TriggerConditionOperator,
    TriggerCronTimeCondition,
    TriggerStatusVariable,
    TriggerTimeCondition,
    TriggerTimeConditionType,
} from '@placeos/ts-client';
import { FullscreenModalShellComponent } from 'libs/components/src/lib/fullscreen-modal-shell.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { AlertConditionComparisonFormComponent } from './alert-condition-compare-form.component';
import { AlertConditionTimeFormComponent } from './alert-condition-time-form.component';

export interface AlertConditionData {
    /** Item to add/update the trigger on */
    system: PlaceSystem;
    /** Trigger to add/update */
    alert: PlaceAlert;
    /** Trigger Condition to edit */
    condition?: TriggerComparison | TriggerTimeCondition;
}

export function validateJSONString(control: AbstractControl) {
    if (!control || !control.value) {
        return null;
    }
    try {
        const json = JSON.parse(control.value);
    } catch (e) {
        return { json: true };
    }
    return null;
}

/**
 * Validate a side of the comparison pair
 * @param control Control holding the comparison
 */
export function validateCompare(control: AbstractControl) {
    const form = control.parent;
    if (
        form &&
        form instanceof FormGroup &&
        form.controls.condition_type &&
        form.controls.condition_type.value === 'compare'
    ) {
        if (control.value instanceof Object) {
            const value: TriggerStatusVariable = control.value;
            return !value.mod
                ? { module: true }
                : !value.status
                  ? { status: true }
                  : null;
        } else {
            return validateJSONString(control);
        }
    }
    return null;
}

/**
 * Generate form controls for creating a trigger condition
 */
export function generateTriggerConditionForm(
    condition: TriggerComparison | TriggerTimeCondition = {} as any,
) {
    const type = (condition as TriggerTimeCondition).type ? 'time' : 'compare';
    const left =
        typeof (condition as TriggerComparison).left === 'object'
            ? { ...((condition as TriggerComparison).left as any) }
            : (condition as TriggerComparison).left;
    const right =
        typeof (condition as TriggerComparison).right === 'object'
            ? { ...((condition as TriggerComparison).right as any) }
            : (condition as TriggerComparison).right;
    const fields = {
        condition_type: new FormControl(type),
        left: new FormControl({ ...(left || {}) }, [validateCompare]),
        operator: new FormControl(
            (condition as TriggerComparison).operator ||
                TriggerConditionOperator.EQ,
        ),
        right: new FormControl(right || undefined, [validateCompare]),
        time_type: new FormControl(
            (condition as TriggerTimeCondition).type || 'at',
        ),
        time: new FormControl(
            (+(condition as TriggerAtTimeCondition).time || 0) * 1000 ||
                Date.now(),
        ),
        cron: new FormControl(
            (condition as TriggerCronTimeCondition).cron || undefined,
        ),
        timezone: new FormControl(
            (condition as TriggerCronTimeCondition).timezone || '',
        ),
    };
    return new FormGroup(fields);
}

@Component({
    selector: 'alert-condition-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new ? 'TRIGGERS.CONDITION_NEW' : 'TRIGGERS.CONDITION_EDIT')
                    | translate
            "
            [loading]="loading"
            (confirm)="save()"
        >
            @if (form) {
                <form alert-condition class="flex flex-col" [formGroup]="form">
                    @if (form.controls.condition_type) {
                        <div class="flex flex-col">
                            <label for="type">
                                {{
                                    'TRIGGERS.CONDITION_FIELD_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="condition_type"
                                >
                                    @for (type of condition_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{
                                                (type.id === 'compare'
                                                    ? 'TRIGGERS.CONDITION_COMPARE'
                                                    : 'TRIGGERS.CONDITION_TIME'
                                                ) | translate
                                            }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.condition_type.value === 'compare') {
                        <alert-condition-comparison-form
                            [form]="form"
                            [system]="system"
                        ></alert-condition-comparison-form>
                    } @else {
                        <alert-condition-time-form
                            [form]="form"
                        ></alert-condition-time-form>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        AlertConditionComparisonFormComponent,
        AlertConditionTimeFormComponent,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        TranslatePipe,
    ],
})
export class AlertConditionModalComponent extends AsyncHandler {
    private _dialog =
        inject<MatDialogRef<AlertConditionModalComponent>>(MatDialogRef);
    private _data = inject<AlertConditionData>(MAT_DIALOG_DATA);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public loading: boolean;
    /** Form fields for trigger condition */
    public readonly form = generateTriggerConditionForm(this._data.condition);
    /** Store for updated conditions */
    public conditions: any;

    /** Types of trigger conditions */
    public condition_types: Identity[] = [
        { id: 'compare', name: 'Compare values' },
        { id: 'time', name: 'Particular time' },
    ];

    /** Whether the triggers is new or not */
    public get is_new(): boolean {
        return !this._data.condition;
    }

    /** Template system to use for status variable bindings */
    public get system(): PlaceSystem {
        return this._data.system;
    }

    /** Template system to use for status variable bindings */
    public get alert(): PlaceAlert {
        return this._data.alert;
    }

    public async save() {
        console.log('Save Conditions');
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this.loading = true;
        this.form.controls.condition_type.value === 'compare'
            ? this.updateComparisons()
            : this.updateTimeDependents();
        console.log('Saving Conditions:', this.conditions);
        this._dialog.close(this.conditions);
    }

    /**
     * Update the comparison list by replace an exisiting item or add a new item
     */
    private updateComparisons() {
        const old_values = [...this.alert.conditions.comparisons];
        const new_value: TriggerComparison = {
            left:
                typeof this.form.controls.left.value === 'string'
                    ? JSON.parse(this.form.controls.left.value)
                    : this.form.controls.left.value,
            operator: this.form.controls.operator.value,
            right:
                typeof this.form.controls.right.value === 'string'
                    ? JSON.parse(this.form.controls.right.value)
                    : this.form.controls.right.value,
        };
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex(
                (cmp) => JSON.stringify(cmp) === old_value,
            );
            if (index >= 0) {
                old_values.splice(index, 1, new_value);
            }
        } else {
            old_values.push(new_value);
        }
        const updated_conditions = {
            ...this.alert.conditions,
            comparisons: old_values,
        };
        this.conditions = updated_conditions;
    }

    /**
     * Update the time dependent list by replace an exisiting item or add a new item
     */
    private updateTimeDependents() {
        const old_values = [...(this.alert.conditions.time_dependents || [])];
        const new_value = {
            type: this.form.controls.time_type.value,
            time: +(this.form.controls.time.value / 1000).toFixed(0),
            cron: this.form.get('cron').value,
            timezone: this.form.get('timezone')?.value,
        };
        if (new_value.type === TriggerTimeConditionType.CRON) {
            delete new_value.time;
        } else {
            delete new_value.cron;
            delete new_value.timezone;
        }
        new_value.cron ? delete new_value.time : delete new_value.cron;
        if (this._data.condition) {
            const old_value = JSON.stringify(this._data.condition);
            const index = old_values.findIndex(
                (time) => JSON.stringify(time) === old_value,
            );
            if (index >= 0) {
                old_values.splice(index, 1, new_value as any);
            }
        } else {
            old_values.push(new_value as any);
        }
        const updated_conditions = {
            ...this.alert.conditions,
            time_dependents: old_values,
        };
        this.conditions = updated_conditions;
    }
}
