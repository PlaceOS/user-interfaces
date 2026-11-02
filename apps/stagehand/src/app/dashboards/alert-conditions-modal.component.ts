import { Component, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AsyncHandler } from '@placeos/common';
import {
    PlaceAlert,
    PlaceSystem,
    TriggerComparison,
    TriggerConditionOperator,
    TriggerStatusVariable,
} from '@placeos/ts-client';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { AlertConditionComparisonFormComponent } from './alert-condition-compare-form.component';

export interface AlertConditionData {
    /** Item to add/update the trigger on */
    system: PlaceSystem;
    /** Trigger to add/update */
    alert: PlaceAlert;
    /** Trigger Condition to edit */
    condition?: TriggerComparison;
}

function validateJSONValue(value: any) {
    if (!value) return undefined;
    if (value instanceof Object) return undefined;
    try {
        JSON.parse(value);
    } catch {
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
    left: any;
    operator: TriggerConditionOperator;
    right: any;
}

/**
 * Generate form controls for creating a trigger comparison condition
 */
export function generateTriggerConditionForm(
    condition: TriggerComparison = {} as any,
) {
    const left =
        typeof condition.left === 'object'
            ? { ...(condition.left as any) }
            : condition.left;
    const right =
        typeof condition.right === 'object'
            ? { ...(condition.right as any) }
            : condition.right;
    return {
        left: left || { mod: '', status: '', keys: [] },
        operator: condition.operator || TriggerConditionOperator.EQ,
        right: right || '',
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
                    <alert-condition-comparison-form
                        [form]="form"
                        [system]="system"
                    ></alert-condition-comparison-form>
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        AlertConditionComparisonFormComponent,
        TranslatePipe,
    ],
})
export class AlertConditionModalComponent extends AsyncHandler {
    private _dialog =
        inject<MatDialogRef<AlertConditionModalComponent>>(MatDialogRef);
    private _data = inject<AlertConditionData>(MAT_DIALOG_DATA);

    /** Whether actions are loading */
    public readonly loading = signal(false);
    /** Form fields for trigger condition */
    public readonly model = signal(
        generateTriggerConditionForm(this._data.condition),
    );
    public readonly form = form(this.model);
    /** Store for updated conditions */
    public conditions: any;

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
        if (this.loading()) return;
        this.form().markAsTouched();
        if (
            validateCompareValue(this.model().left) ||
            validateCompareValue(this.model().right)
        ) {
            return;
        }
        if (!this.form().valid()) return;
        this.loading.set(true);
        this.updateComparisons();
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
}
