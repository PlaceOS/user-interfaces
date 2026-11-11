import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TriggerConditionOperator } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import {
    AlertConditionModalComponent,
    generateTriggerConditionForm,
    validateCompareValue,
} from '../../app/dashboards/alert-conditions-modal.component';

describe('generateTriggerConditionForm', () => {
    it('should default to a compare condition with an empty status variable', () => {
        const value = generateTriggerConditionForm();
        expect(value.operator).toBe(TriggerConditionOperator.EQ);
        expect(value.left).toEqual({ mod: '', status: '', keys: [] });
        expect(value.right).toBe('');
    });

    it('should preserve an existing comparison condition', () => {
        const value = generateTriggerConditionForm({
            left: { mod: 'Display_1', status: 'power', keys: [] },
            operator: TriggerConditionOperator.NEQ,
            right: true,
        });
        expect(value.left).toEqual({
            mod: 'Display_1',
            status: 'power',
            keys: [],
        });
        expect(value.operator).toBe(TriggerConditionOperator.NEQ);
        expect(value.right).toBe(true);
    });
});

describe('validateCompareValue', () => {
    it('should flag a status variable missing its module', () => {
        expect(validateCompareValue({ mod: '', status: 'power' })).toEqual({
            kind: 'module',
        });
    });

    it('should flag a status variable missing its status key', () => {
        expect(validateCompareValue({ mod: 'Display_1', status: '' })).toEqual({
            kind: 'status',
        });
    });

    it('should accept a fully specified status variable', () => {
        expect(
            validateCompareValue({ mod: 'Display_1', status: 'power' }),
        ).toBeUndefined();
    });

    it('should reject a value that is not valid JSON', () => {
        expect(validateCompareValue('not json')).toEqual({ kind: 'json' });
    });

    it('should accept a valid JSON string value', () => {
        expect(validateCompareValue('"connected"')).toBeUndefined();
        expect(validateCompareValue('false')).toBeUndefined();
    });
});

describe('AlertConditionModalComponent', () => {
    let spectator: Spectator<AlertConditionModalComponent>;
    const dialog_close = vi.fn();

    const create_component = createComponentFactory({
        component: AlertConditionModalComponent,
        shallow: true,
        detectChanges: false,
        // Disable the zoneless auto-tick: these tests assert on component
        // signals/methods, not the DOM. Auto change-detection would render the
        // experimental signal-forms + mat-select template and emit benign async
        // rxjs/material errors that vitest reports as unhandled.
        providers: [
            MockProvider(MatDialogRef, { close: dialog_close }),
            { provide: ComponentFixtureAutoDetect, useValue: false },
        ],
    });

    const base_alert = () => ({
        id: 'alert-1',
        name: 'My Alert',
        conditions: { comparisons: [] as unknown[] },
    });

    const build = (data: unknown) =>
        create_component({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        });

    beforeEach(() => dialog_close.mockClear());

    it('should treat a modal without a condition as new', () => {
        spectator = build({ system: {}, alert: base_alert() });
        expect(spectator.component.is_new).toBe(true);
    });

    it('should treat a modal with a condition as an edit', () => {
        spectator = build({
            system: {},
            alert: base_alert(),
            condition: {
                left: 'connected',
                operator: TriggerConditionOperator.EQ,
                right: false,
            },
        });
        expect(spectator.component.is_new).toBe(false);
    });

    it('should not close the dialog when a compare condition is invalid', async () => {
        spectator = build({ system: {}, alert: base_alert() });
        // default model has an empty status variable on the left -> invalid
        await spectator.component.save();
        expect(dialog_close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should append a new comparison and close the dialog on save', async () => {
        const alert = base_alert();
        spectator = build({ system: {}, alert });
        spectator.component.model.set({
            ...spectator.component.model(),
            left: '"connected"',
            operator: TriggerConditionOperator.EQ,
            right: 'false',
        });

        await spectator.component.save();

        expect(dialog_close).toHaveBeenCalledTimes(1);
        const conditions = dialog_close.mock.calls[0][0];
        expect(conditions.comparisons).toHaveLength(1);
        expect(conditions.comparisons[0]).toEqual({
            left: 'connected',
            operator: TriggerConditionOperator.EQ,
            right: false,
        });
    });

    it('should replace the edited comparison rather than adding one', async () => {
        const existing = {
            left: 'connected',
            operator: TriggerConditionOperator.EQ,
            right: false,
        };
        const alert = base_alert();
        alert.conditions.comparisons = [existing];
        spectator = build({ system: {}, alert, condition: existing });
        spectator.component.model.set({
            ...spectator.component.model(),
            left: '"connected"',
            operator: TriggerConditionOperator.NEQ,
            right: 'true',
        });

        await spectator.component.save();

        const conditions = dialog_close.mock.calls[0][0];
        expect(conditions.comparisons).toHaveLength(1);
        expect(conditions.comparisons[0]).toEqual({
            left: 'connected',
            operator: TriggerConditionOperator.NEQ,
            right: true,
        });
    });

    it('should ignore save while an action is already loading', async () => {
        spectator = build({ system: {}, alert: base_alert() });
        spectator.component.loading.set(true);
        await spectator.component.save();
        expect(dialog_close).not.toHaveBeenCalled();
    });
});
