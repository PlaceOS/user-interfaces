import {
    ChangeDetectionStrategy,
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    input,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
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
            <div class="alert-condition form comparison" [formGroup]="form()">
                <ng-container
                    *ngTemplateOutlet="
                        status_variable_form;
                        context: { side: 'left' }
                    "
                ></ng-container>
                @if (
                    form().controls.left.touched && form().controls.left.errors
                ) {
                    <div class="error">
                        {{ 'TRIGGERS.COMPARE_VARIABLE_ERROR' | translate }}
                    </div>
                }
                @if (form().controls.operator) {
                    <div class="flex flex-1 flex-col">
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="operator"
                                formControlName="operator"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_OP_SELECT' | translate
                                "
                            >
                                @for (
                                    operation of compare_types;
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
                @if (form().controls.operator) {
                    <div class="flex flex-1 flex-col">
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="compared-to"
                                [(ngModel)]="rhs_type"
                                (ngModelChange)="
                                    form().controls.right.setValue(null)
                                "
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (type of right_var_type; track type) {
                                    <mat-option [value]="type.id">
                                        {{ type.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (rhs_type === 'constant' && form().controls.right) {
                    <div class="flex flex-1 flex-col">
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="constant"
                                formControlName="right"
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
                @if (this[side + '_side']) {
                    <div class="flex flex-1 flex-col">
                        <label for="type">{{
                            'COMMON.MODULE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="type"
                                [(ngModel)]="this[side + '_side'].mod"
                                (ngModelChange)="
                                    loadSystemStatusVariables($event, side)
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_MODULE_SELECT' | translate
                                "
                            >
                                @for (mod of module_list; track mod) {
                                    <mat-option [value]="mod.name">
                                        {{ mod.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (this[side + '_status_variables']?.length) {
                    <div class="flex flex-1 flex-col">
                        <label [for]="side + '-status-var'">{{
                            'TRIGGERS.COMPARE_VARIABLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [name]="side + '-status-var'"
                                [(ngModel)]="this[side + '_side'].status"
                                (ngModelChange)="updateFormForSide(side)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_VARIABLE_SELECT'
                                        | translate
                                "
                            >
                                @for (
                                    mod of this[side + '_status_variables'];
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
            @if (
                this[side + '_status_variables'] &&
                this[side + '_status_variables'].length
            ) {
                <div class="flex flex-col">
                    <label [for]="side + '-subkeys'">{{
                        'TRIGGERS.COMPARE_SUBKEYS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="this[side + '_keys']"
                            (ngModelChange)="
                                this[side + '_side'].keys = $event.split(',');
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
})
export class AlertConditionComparisonFormComponent
    implements OnChanges, OnInit
{
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
    /** Systems used for templating the status variables */
    public readonly system = input<PlaceSystem>(undefined);
    /** List of modules associated with the template system */
    public modules: PlaceModule[] = [];
    /** List of status variables associated with the selected module */
    public module_list: Identity[] = [];
    /** List of status variables associated with the selected module */
    public left_status_variables: Identity[] = [];
    /** List of status variables associated with the selected module */
    public right_status_variables: Identity[] = [];
    /** Type of value to compare the left hand side to */
    public rhs_type: 'constant' | 'status_var' = 'constant';
    /** Type of value to compare the left hand side to */
    public rhs_value: string;
    /** Status variable details for the left side of the comparison */
    public left_side: TriggerStatusVariable = { mod: '', status: '', keys: [] };
    /** Status variable details for the right side of the comparison */
    public right_side: TriggerStatusVariable = {
        mod: '',
        status: '',
        keys: [],
    };

    /** Types of trigger conditions */
    public right_var_type: Identity[] = [];

    /** Allowed comparison operators */
    public compare_types: Identity[] = [];

    public get left_keys(): string {
        return this.left_side?.keys?.join(',') || '';
    }
    public get right_keys(): string {
        return this.right_side?.keys?.join(',') || '';
    }

    public ngOnInit() {
        this.right_var_type = [
            { id: 'constant', name: i18n('TRIGGERS.COMPARE_CONSTANT') },
            { id: 'status_var', name: i18n('TRIGGERS.COMPARE_VARIABLE') },
        ];
        this.compare_types = [
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
        ];
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system && this.system()) {
            this.loadSystemModules();
        }
    }

    public updateFormForSide(side: 'left' | 'right') {
        const form = this.form();
        if (form.controls[side]) {
            if (!this[side + '_side'].keys) {
                this[side + '_side'].keys = [];
            }
            form.controls[side].setValue(this[side + '_side']);
        }
    }

    /**
     * Load the list of status variables for the given modules
     * @param module Module to list status variables
     */
    public loadSystemStatusVariables(mod_name: string, side: 'left' | 'right') {
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
                this[`${side}_status_variables`] = Object.keys(var_map).map(
                    (key) => ({
                        id: key,
                        name: key,
                    }),
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
                this.module_list = this.modules.map((mod) => {
                    const name = mod.custom_name || mod.name || 'Blank';
                    const index = calculateModuleIndex(this.modules, mod);
                    return {
                        id: mod.id,
                        name: `${name}_${index}`,
                        keys: [],
                    };
                });
                this.addExistingModules();
            });
    }

    /**
     * Add pre-exisiting module detail to the available list
     */
    private addExistingModules() {
        const form = this.form();
        if (form.controls.left && form.controls.left.value) {
            const module = form.controls.left.value.mod;
            if (!this.module_list.find((mod) => mod.name === module)) {
                this.module_list.unshift({
                    id: 'old_left_value',
                    name: module,
                    keys: [],
                });
            }
            this.loadSystemStatusVariables(module, 'left');
            this.left_side = form.controls.left.value;
        }
        if (
            form.controls.right &&
            form.controls.right.value &&
            form.controls.right.value.mod
        ) {
            this.rhs_type = 'status_var';
            const module = form.controls.right.value.mod;
            if (!this.module_list.find((mod) => mod.name === module)) {
                this.module_list.unshift({
                    id: 'old_right_value',
                    name: module,
                    keys: [],
                });
            }
            this.loadSystemStatusVariables(module, 'right');
            this.right_side = form.controls.right_side.value;
        }
    }

    /**
     * Add pre-exisiting status variables to the available list
     */
    private addExistingStatusVariables() {
        if (this.left_side.status) {
            if (
                !this.left_status_variables.find(
                    (status) => status.name === this.left_side.status,
                )
            ) {
                this.left_status_variables.unshift({
                    id: this.left_side.status,
                    name: this.left_side.status,
                    keys: [],
                });
            }
        }
        if (this.right_side.status) {
            if (
                !this.right_status_variables.find(
                    (status) => status.name === this.right_side.status,
                )
            ) {
                this.right_status_variables.unshift({
                    id: this.right_side.status,
                    name: this.right_side.status,
                    keys: [],
                });
            }
        }
    }
}
