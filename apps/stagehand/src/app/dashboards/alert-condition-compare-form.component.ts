import {
    Component,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
    input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import {
    PlaceModule,
    PlaceSystem,
    TriggerConditionOperator,
    TriggerStatusVariable,
    queryModules,
    systemModuleState,
} from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Identity, i18n, notifyError } from '@placeos/common';

import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

type ComparisonSide = 'left' | 'right';

/**
 * Calculate the index of the module
 * @param module_list List of modules in the parent system
 * @param module Module to work out index
 */
export function calculateModuleIndex(
    module_list: PlaceModule[],
    module: PlaceModule,
): number {
    const driver = module.driver || { class_name: 'System' };
    const module_class = module.custom_name || module.name || driver.class_name;
    const modules_with_class = module_list.filter((mod) => {
        const d = mod.driver || { class_name: 'System' };
        const mod_class = mod.custom_name || mod.name || d.class_name;
        return mod_class === module_class;
    });
    return Math.max(
        1,
        modules_with_class.findIndex((mod) => mod.id === module.id) + 1,
    );
}

@Component({
    selector: 'alert-condition-comparison-form',
    template: `@if (form()) {
            <div class="alert-condition form comparison">
                <ng-container
                    *ngTemplateOutlet="
                        status_variable_form;
                        context: { side: 'left' }
                    "
                ></ng-container>
                @if (form().left().touched() && form().left().errors().length) {
                    <div class="error">
                        {{ 'TRIGGERS.COMPARE_VARIABLE_ERROR' | translate }}
                    </div>
                }
                @if (form().operator) {
                    <div class="flex flex-1 flex-col">
                        <mat-form-field appearance="outline">
                            <mat-select
                                [formField]="form().operator"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_OP_SELECT' | translate
                                "
                            >
                                @for (
                                    operation of compare_types();
                                    track operation
                                ) {
                                    <mat-option [value]="operation.id">
                                        {{ operation.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form().operator) {
                    <div class="flex flex-1 flex-col">
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="compared-to"
                                [(ngModel)]="rhs_type"
                                (ngModelChange)="
                                    form().right().value.set('')
                                "
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (type of right_var_type(); track type) {
                                    <mat-option [value]="type.id">
                                        {{ type.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (rhs_type() === 'constant' && form().right) {
                    <div class="flex flex-1 flex-col">
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [formField]="form().right"
                                placeholder="true/false, 'string', 123.456"
                            />
                            <mat-error>{{
                                'TRIGGERS.COMPARE_JSON_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                } @else {
                    <ng-container
                        *ngTemplateOutlet="
                            status_variable_form;
                            context: { side: 'right' }
                        "
                    ></ng-container>
                }
            </div>
        }
        <ng-template #status_variable_form let-side="side">
            <div class="flex space-x-4">
                @if (sideData(side)) {
                    <div class="flex flex-1 flex-col">
                        <label for="type">{{
                            'COMMON.MODULE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="type"
                                [ngModel]="sideData(side).mod"
                                (ngModelChange)="
                                    setSideMod(side, $event);
                                    loadSystemStatusVariables($event, side)
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_MODULE_SELECT' | translate
                                "
                            >
                                @for (mod of module_list(); track mod) {
                                    <mat-option [value]="mod.name">
                                        {{ mod.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (statusVars(side)?.length) {
                    <div class="flex flex-1 flex-col">
                        <label [for]="side + '-status-var'">{{
                            'TRIGGERS.COMPARE_VARIABLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [name]="side + '-status-var'"
                                [ngModel]="sideData(side).status"
                                (ngModelChange)="
                                    setSideStatus(side, $event);
                                    updateFormForSide(side)
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_VARIABLE_SELECT'
                                        | translate
                                "
                            >
                                @for (
                                    mod of statusVars(side);
                                    track mod
                                ) {
                                    <mat-option [value]="mod.name">
                                        {{ mod.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
            @if (statusVars(side)?.length) {
                <div class="flex flex-col">
                    <label [for]="side + '-subkeys'">{{
                        'TRIGGERS.COMPARE_SUBKEYS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="keysFor(side)"
                            (ngModelChange)="
                                setSideKeys(side, $event);
                                updateFormForSide(side)
                            "
                            [name]="side + '-subkeys'"
                            [placeholder]="
                                'TRIGGERS.COMPARE_SUBKEYS_PLACEHOLDER'
                                    | translate
                            "
                        />
                    </mat-form-field>
                </div>
            }
        </ng-template>`,
    styles: [``],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        FormField,
    ],
})
export class AlertConditionComparisonFormComponent
    implements OnChanges, OnInit
{
    /** Group of form fields used for creating the system */
    public readonly form = input<any>(undefined);
    /** Systems used for templating the status variables */
    public readonly system = input<PlaceSystem>(undefined);
    /** List of modules associated with the template system */
    public modules: PlaceModule[] = [];
    /** List of modules available for selection */
    public readonly module_list = signal<Identity[]>([]);
    /** List of status variables associated with the selected left module */
    public readonly left_status_variables = signal<Identity[]>([]);
    /** List of status variables associated with the selected right module */
    public readonly right_status_variables = signal<Identity[]>([]);
    /** Type of value to compare the left hand side to */
    public readonly rhs_type = signal<'constant' | 'status_var'>('constant');
    /** Status variable details for the left side of the comparison */
    public readonly left_side = signal<TriggerStatusVariable>({
        mod: '',
        status: '',
        keys: [],
    });
    /** Status variable details for the right side of the comparison */
    public readonly right_side = signal<TriggerStatusVariable>({
        mod: '',
        status: '',
        keys: [],
    });

    /** Types of trigger conditions */
    public readonly right_var_type = signal<Identity[]>([]);

    /** Allowed comparison operators */
    public readonly compare_types = signal<Identity[]>([]);

    /** Status variable details for the given side of the comparison */
    public sideData(side: ComparisonSide): TriggerStatusVariable {
        return side === 'left' ? this.left_side() : this.right_side();
    }

    /** Available status variables for the given side of the comparison */
    public statusVars(side: ComparisonSide): Identity[] {
        return side === 'left'
            ? this.left_status_variables()
            : this.right_status_variables();
    }

    /** Comma separated sub-keys for the given side of the comparison */
    public keysFor(side: ComparisonSide): string {
        return this.sideData(side)?.keys?.join(',') || '';
    }

    public ngOnInit() {
        this.right_var_type.set([
            { id: 'constant', name: i18n('TRIGGERS.COMPARE_CONSTANT') },
            { id: 'status_var', name: i18n('TRIGGERS.COMPARE_VARIABLE') },
        ]);
        this.compare_types.set([
            {
                id: TriggerConditionOperator.EQ,
                name: i18n('TRIGGERS.COMPARE_OP_EQUAL'),
            },
            {
                id: TriggerConditionOperator.NEQ,
                name: i18n('TRIGGERS.COMPARE_OP_NOT_EQUAL'),
            },
            {
                id: TriggerConditionOperator.GT,
                name: i18n('TRIGGERS.COMPARE_OP_GREATER'),
            },
            {
                id: TriggerConditionOperator.GTE,
                name: i18n('TRIGGERS.COMPARE_OP_GREATER_EQUAL'),
            },
            {
                id: TriggerConditionOperator.LT,
                name: i18n('TRIGGERS.COMPARE_OP_LESS'),
            },
            {
                id: TriggerConditionOperator.LTE,
                name: i18n('TRIGGERS.COMPARE_OP_LESS_EQUAL'),
            },
            {
                id: TriggerConditionOperator.AND,
                name: i18n('TRIGGERS.COMPARE_OP_AND'),
            },
            {
                id: TriggerConditionOperator.OR,
                name: i18n('TRIGGERS.COMPARE_OP_OR'),
            },
            {
                id: TriggerConditionOperator.XOR,
                name: i18n('TRIGGERS.COMPARE_OP_XOR'),
            },
        ]);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system && this.system()) {
            this.loadSystemModules();
        }
    }

    public updateFormForSide(side: ComparisonSide) {
        const form = this.form();
        if (!form?.[side]) return;
        let data = this.sideData(side);
        if (!data.keys) {
            data = { ...data, keys: [] };
            this._setSide(side, data);
        }
        form[side]().value.set(data);
    }

    /** Update the selected module for the given side of the comparison */
    public setSideMod(side: ComparisonSide, mod: string) {
        this._setSide(side, { ...this.sideData(side), mod });
    }

    /** Update the selected status variable for the given side of the comparison */
    public setSideStatus(side: ComparisonSide, status: string) {
        this._setSide(side, { ...this.sideData(side), status });
    }

    /** Update the sub-keys for the given side of the comparison */
    public setSideKeys(side: ComparisonSide, value: string) {
        this._setSide(side, { ...this.sideData(side), keys: value.split(',') });
    }

    /**
     * Load the list of status variables for the given modules
     * @param module Module to list status variables
     */
    public loadSystemStatusVariables(mod_name: string, side: ComparisonSide) {
        const name = (mod_name || '').split('_');
        if (!name[0]?.length) return;
        systemModuleState(
            this.system().id,
            name.length > 1
                ? name.slice(0, name.length - 1).join('_')
                : name[0],
            +name[name.length - 1] || 1,
        ).then(
            (var_map) => {
                if (Object.keys(var_map || {}).length <= 0) {
                    var_map = { connected: true };
                }
                this._setStatusVars(
                    side,
                    Object.keys(var_map).map((key) => ({
                        id: key,
                        name: key,
                    })),
                );
                this.addExistingStatusVariables();
            },
            () =>
                notifyError(
                    i18n('TRIGGERS.COMPARE_VARIABLE_LOAD_ERROR', {
                        system: this.system().id,
                        module: mod_name,
                    }),
                ),
        );
    }

    /**
     * Load the list of modules for the active system
     */
    private loadSystemModules() {
        const system = this.system();
        if (!system) {
            return;
        }
        queryModules({ control_system_id: system.id })
            .then((resp) => resp.data)
            .then((module_list) => {
                this.modules = module_list;
                const mod_list = this.system().modules;
                this.modules.sort(
                    (a, b) => mod_list.indexOf(a.id) - mod_list.indexOf(b.id),
                );
                this.module_list.set(
                    this.modules.map((mod) => {
                        const name = mod.custom_name || mod.name || 'Blank';
                        const index = calculateModuleIndex(this.modules, mod);
                        return {
                            id: mod.id,
                            name: `${name}_${index}`,
                            keys: [],
                        };
                    }),
                );
                this.addExistingModules();
            });
    }

    /**
     * Add pre-exisiting module detail to the available list
     */
    private addExistingModules() {
        const form = this.form();
        if (form.left && form.left().value()) {
            const left_value = form.left().value();
            const module = left_value.mod;
            if (!this.module_list().find((mod) => mod.name === module)) {
                this.module_list.update((list) => [
                    { id: 'old_left_value', name: module, keys: [] },
                    ...list,
                ]);
            }
            this.loadSystemStatusVariables(module, 'left');
            this.left_side.set(left_value);
        }
        if (
            form.right &&
            form.right().value() &&
            form.right().value().mod
        ) {
            this.rhs_type.set('status_var');
            const right_value = form.right().value();
            const module = right_value.mod;
            if (!this.module_list().find((mod) => mod.name === module)) {
                this.module_list.update((list) => [
                    { id: 'old_right_value', name: module, keys: [] },
                    ...list,
                ]);
            }
            this.loadSystemStatusVariables(module, 'right');
            this.right_side.set(right_value);
        }
    }

    /**
     * Add pre-exisiting status variables to the available list
     */
    private addExistingStatusVariables() {
        const left_status = this.left_side().status;
        if (left_status) {
            if (
                !this.left_status_variables().find(
                    (status) => status.name === left_status,
                )
            ) {
                this.left_status_variables.update((list) => [
                    { id: left_status, name: left_status, keys: [] },
                    ...list,
                ]);
            }
        }
        const right_status = this.right_side().status;
        if (right_status) {
            if (
                !this.right_status_variables().find(
                    (status) => status.name === right_status,
                )
            ) {
                this.right_status_variables.update((list) => [
                    { id: right_status, name: right_status, keys: [] },
                    ...list,
                ]);
            }
        }
    }

    private _setSide(side: ComparisonSide, value: TriggerStatusVariable) {
        side === 'left' ? this.left_side.set(value) : this.right_side.set(value);
    }

    private _setStatusVars(side: ComparisonSide, list: Identity[]) {
        side === 'left'
            ? this.left_status_variables.set(list)
            : this.right_status_variables.set(list);
    }
}
