import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import {
    disabled,
    form,
    FormField,
} from '@angular/forms/signals';
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

function validateJSONValue(value: any) {
    if (!value) return undefined;
    if (value instanceof Object) return undefined;
    try {
        JSON.parse(value);
    } catch (e) {
        return { kind: 'json' };
    }
    return undefined;
}

/**
 * Validate a side of the comparison pair
 * @param control Control holding the comparison
 */
export function validateCompareValue(value: any) {
    if (value instanceof Object) {
        const status_var: TriggerStatusVariable = value;
        return !status_var.mod
            ? { kind: 'module' }
            : !status_var.status
              ? { kind: 'status' }
              : undefined;
    }
    return validateJSONValue(value);
}

export interface AlertConditionFormValue {
    condition_type: 'compare' | 'time';
    left: any;
    operator: TriggerConditionOperator;
    right: any;
    time_type: TriggerTimeConditionType;
    time: number;
    cron: string;
    timezone: string;
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
    return {
        condition_type: type as 'compare' | 'time',
        left: left || { mod: '', status: '', keys: [] },
        operator:
            (condition as TriggerComparison).operator ||
            TriggerConditionOperator.EQ,
        right: right || '',
        time_type:
            (condition as TriggerTimeCondition).type ||
            TriggerTimeConditionType.AT,
        time:
            (+(condition as TriggerAtTimeCondition).time || 0) * 1000 ||
            Date.now(),
        cron: (condition as TriggerCronTimeCondition).cron || '',
        timezone: (condition as TriggerCronTimeCondition).timezone || '',
    } satisfies AlertConditionFormValue;
}

@Component({
    selector: 'alert-condition-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (is_new ? 'TRIGGERS.CONDITION_NEW' : 'TRIGGERS.CONDITION_EDIT')
                    | translate
            "
            [loading]="loading() ? 'Loading...' : ''"
            (confirm)="save()"
        >
            @if (form) {
                <form alert-condition class="flex flex-col">
                    @if (form.condition_type) {
                        <div class="flex flex-col">
                            <label for="type">
                                {{
                                    'TRIGGERS.CONDITION_FIELD_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form.condition_type"
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
                    @if (model().condition_type === 'compare') {
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
        FormField,
        TranslatePipe,
    ],
})
export class AlertConditionModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog =
        inject<MatDialogRef<AlertConditionModalComponent>>(MatDialogRef);
    private _data = inject<AlertConditionData>(MAT_DIALOG_DATA);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether actions are loading */
    public readonly loading = signal(false);
    /** Form fields for trigger condition */
    public readonly model = signal(
        generateTriggerConditionForm(this._data.condition),
    );
    public readonly form = form(this.model, (p) => {
        disabled(p.condition_type);
    });
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

    public ngOnInit() {}

    public async save() {
        if (this.loading()) return;
        console.log('Save Conditions');
        this.form().markAsTouched();
        if (
            this.model().condition_type === 'compare' &&
            (validateCompareValue(this.model().left) ||
                validateCompareValue(this.model().right))
        ) {
            return;
        }
        if (!this.form().valid()) return;
        this.loading.set(true);
        this.model().condition_type === 'compare'
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
        const model = this.model();
        const new_value: TriggerComparison = {
            left:
                typeof model.left === 'string'
                    ? JSON.parse(model.left)
                    : model.left,
            operator: model.operator,
            right:
                typeof model.right === 'string'
                    ? JSON.parse(model.right)
                    : model.right,
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
        const model = this.model();
        const new_value = {
            type: model.time_type,
            time: +(model.time / 1000).toFixed(0),
            cron: model.cron,
            timezone: model.timezone,
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
