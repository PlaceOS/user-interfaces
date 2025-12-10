import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    getInvalidFields,
    i18n,
    notifyError,
} from '@placeos/common';
import {
    addAlert,
    TriggerComparison,
    TriggerConditions,
    TriggerTimeCondition,
    updateAlert,
} from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { lastValueFrom } from 'rxjs';
import { AlertConditionModalComponent } from './alert-conditions-modal.component';
import { DashboardsService } from './dashboards.service';
import { SystemSearchFieldComponent } from './system-search-field.component';

export type AlertSeverity = 'low' | 'medium' | 'high' | 'critical';
export type AlertType = 'threshold' | 'status' | 'custom';

@Component({
    selector: `stagehand-dashboard-alert-manage`,
    template: `
        <div class="fixed inset-0 overflow-auto bg-base-200">
            <div
                class="mx-auto min-h-full w-[40rem] max-w-full border-x border-base-300 bg-base-100 p-2"
            >
                <header
                    class="sticky top-0 z-10 mx-auto flex h-14 w-full max-w-[39rem] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">
                        {{
                            (alert()?.id
                                ? 'APP.STAGEHAND.DASHBOARD_ALERTS_EDIT'
                                : 'APP.STAGEHAND.DASHBOARD_ALERTS_NEW'
                            ) | translate
                        }}
                    </h2>
                    <a
                        icon
                        matRipple
                        [routerLink]="
                            dashboard()
                                ? ['/dashboards', dashboard().id, 'alerts']
                                : ['/dashboards']
                        "
                    >
                        <icon>close</icon>
                    </a>
                </header>
                <main class="p-2">
                    <form [formGroup]="form" class="flex flex-col">
                        <label for="name"
                            >{{ 'FORM.NAME' | translate
                            }}<span required>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                formControlName="name"
                                placeholder="Alert Name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                formControlName="description"
                                placeholder="Description of the alert"
                            ></textarea>
                        </mat-form-field>
                        <div class="mb-4 flex flex-col gap-2 sm:flex-row">
                            <settings-toggle
                                class="flex-1"
                                formControlName="enabled"
                                >{{
                                    'COMMON.ENABLED' | translate
                                }}</settings-toggle
                            >
                            <settings-toggle
                                class="flex-1"
                                formControlName="any_match"
                                >{{
                                    'APP.STAGEHAND.ALERT_MATCH_ANY' | translate
                                }}</settings-toggle
                            >
                        </div>
                        <div class="flex space-x-4">
                            <div class="flex flex-1 flex-col">
                                <label for="severity">{{
                                    'APP.STAGEHAND.ALERT_FIELD_SEVERITY'
                                        | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        name="severity"
                                        formControlName="severity"
                                        [placeholder]="
                                            'APP.STAGEHAND.ALERT_FIELD_SEVERITY'
                                                | translate
                                        "
                                    >
                                        @for (
                                            option of severity_options;
                                            track option
                                        ) {
                                            <mat-option [value]="option">{{
                                                'APP.STAGEHAND.ALERT_SEVERITY_' +
                                                    option
                                                    | uppercase
                                                    | translate
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-1 flex-col">
                                <label for="type">{{
                                    'APP.STAGEHAND.ALERT_FIELD_TYPE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <mat-select
                                        name="type"
                                        formControlName="alert_type"
                                        [placeholder]="
                                            'APP.STAGEHAND.ALERT_FIELD_TYPE'
                                                | translate
                                        "
                                    >
                                        @for (
                                            option of type_options;
                                            track option
                                        ) {
                                            <mat-option [value]="option">{{
                                                'APP.STAGEHAND.ALERT_TYPE_' +
                                                    option
                                                    | uppercase
                                                    | translate
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>
                        <label for="description">{{
                            'APP.STAGEHAND.ALERT_CONDITIONS' | translate
                        }}</label>
                        <div class="mb-4 flex space-x-2">
                            <system-search-field
                                [placeholder]="
                                    'APP.STAGEHAND.ALERT_SYSTEM_SEARCH'
                                        | translate
                                "
                                class="w-1/2 flex-1"
                                [(ngModel)]="template_system"
                                [ngModelOptions]="{ standalone: true }"
                            ></system-search-field>
                            <button
                                btn
                                matRipple
                                type="button"
                                [disabled]="!template_system()"
                                (click)="editCondition()"
                            >
                                Add Condition
                            </button>
                        </div>
                        <section>
                            <simple-table
                                class="mb-4 block w-full min-w-[32rem] text-sm"
                                [data]="
                                    form.value.conditions?.comparisons || []
                                "
                                [columns]="[
                                    {
                                        key: 'operator',
                                        name:
                                            'TRIGGERS.FIELD_VAR_COMPARE'
                                            | translate,
                                        content: comparison_template,
                                    },
                                    {
                                        key: 'actions',
                                        name: ' ',
                                        size: '6rem',
                                        sortable: false,
                                        content: actions_template,
                                    },
                                ]"
                                [sortable]="true"
                                [empty_message]="
                                    'TRIGGERS.CONDITION_COMPARE_EMPTY'
                                        | translate
                                "
                            ></simple-table>
                            <!-- <simple-table
                                class="block w-full min-w-[32rem] text-sm"
                                [data]="
                                    form.value.conditions?.time_dependents || []
                                "
                                [columns]="[
                                    {
                                        key: 'time',
                                        name:
                                            'TRIGGERS.FIELD_TIME_DEPS'
                                            | translate,
                                        content: time_dep_template,
                                    },
                                    {
                                        key: 'actions',
                                        name: ' ',
                                        size: '6rem',
                                        sortable: false,
                                        content: actions_template,
                                    },
                                ]"
                                [sortable]="true"
                                [empty_message]="
                                    'TRIGGERS.CONDITION_TIME_EMPTY' | translate
                                "
                            ></simple-table> -->
                            <ng-template #time_dep_template let-row="row">
                                <div
                                    class="mono flex items-center space-x-2 p-4 text-sm"
                                >
                                    {{ row.type === 'at' ? 'At time' : 'CRON' }}
                                    {{
                                        row.type === 'at' ? row.time : row.cron
                                    }}
                                </div>
                            </ng-template>
                            <ng-template #comparison_template let-row="row">
                                <div
                                    class="mono flex items-center space-x-4 p-4 text-xs"
                                >
                                    <pre>{{ row.left | json }}</pre>
                                    <code
                                        class="bg-success text-success-content"
                                    >
                                        {{ row.operator }}
                                    </code>
                                    <pre>{{ row.right | json }}</pre>
                                </div>
                            </ng-template>
                            <ng-template #actions_template let-row="row">
                                <div
                                    class="mx-auto flex items-center space-x-2 p-2"
                                >
                                    <button
                                        icon
                                        matRipple
                                        [disabled]="!template_system()"
                                        matTooltip="Edit Condition"
                                        (click)="editCondition(row)"
                                    >
                                        <icon>edit</icon>
                                    </button>
                                    <button
                                        icon
                                        matRipple
                                        matTooltip="Remove Condition"
                                        (click)="removeCondition(row)"
                                    >
                                        <icon class="text-error">delete</icon>
                                    </button>
                                </div>
                            </ng-template>
                        </section>
                    </form>
                    <div class="h-20 w-full"></div>
                </main>
                <footer
                    class="fixed bottom-2 flex w-[39rem] max-w-full justify-end rounded bg-base-200 p-2"
                >
                    <button btn matRipple class="min-w-32" (click)="save()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            </div>
        </div>
    `,
    styles: [],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        SettingsToggleComponent,
        MatSelectModule,
        SimpleTableComponent,
        SystemSearchFieldComponent,
        MatTooltipModule,
    ],
})
export class DashboardAlertManageComponent
    extends AsyncHandler
    implements OnInit
{
    private _service = inject(DashboardsService);
    private _dialog = inject(MatDialog);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public readonly severity_options = ['medium', 'high', 'critical'];
    public readonly type_options = ['threshold', 'status', 'custom'];

    public readonly loading = signal('');
    public readonly template_system = signal(null);
    public readonly alert = this._service.alert;
    public readonly dashboard = this._service.dashboard;
    public readonly form = new FormGroup({
        id: new FormControl(''),
        alert_dashboard_id: new FormControl(''),
        authority_id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        enabled: new FormControl(true),
        conditions: new FormControl<TriggerConditions>({
            comparisons: [],
            time_dependents: [],
        }),
        any_match: new FormControl(false),
        severity: new FormControl<AlertSeverity>('medium'),
        alert_type: new FormControl<AlertType>('threshold'),
        debounce_period: new FormControl(0),
    });

    public ngOnInit() {
        this.subscription(
            'route.parms',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this._service.setDashboard(params.get('id'));
                    this.form.patchValue({
                        alert_dashboard_id: params.get('id'),
                    });
                }
                if (params.has('alert_id')) {
                    this.setAlert(params.get('alert_id'));
                }
            }),
        );
        this.timeout('redirect', () => {
            if (!this.dashboard()) this._router.navigate(['/dashboards']);
        });
    }

    public async setAlert(id: string) {
        await this._service.setAlert(id);
        const dash = this._service.alert();
        if (dash) this.form.patchValue(dash);
    }

    public removeCondition(
        condition: TriggerComparison | TriggerTimeCondition = null,
    ) {
        const old_conditions = this.form.getRawValue().conditions;
        const new_conditions: TriggerConditions = {
            comparisons: old_conditions.comparisons.filter(
                (_) => _ !== condition,
            ),
            time_dependents: old_conditions.time_dependents.filter(
                (_) => _ !== condition,
            ),
        };
        this.form.patchValue({ conditions: new_conditions });
    }

    public async editCondition(
        condition: TriggerComparison | TriggerTimeCondition = null,
    ) {
        const system = this.template_system();
        if (!system) return;
        const ref = this._dialog.open(AlertConditionModalComponent, {
            data: {
                alert: this.form.getRawValue(),
                condition: condition
                    ? JSON.parse(JSON.stringify(condition))
                    : undefined,
                system: system,
            },
        });
        const result: TriggerConditions | null = (await Promise.race([
            lastValueFrom(ref.afterClosed()),
        ])) as any;
        if (!result) return;
        const old_conditions = this.form.getRawValue().conditions;
        const new_conditions: TriggerConditions = {
            comparisons: [
                ...old_conditions.comparisons.filter((_) => _ !== condition),
                ...result.comparisons,
            ],
            time_dependents: [
                ...old_conditions.time_dependents.filter(
                    (_) => _ !== condition,
                ),
                ...result.time_dependents,
            ],
        };
        this.form.patchValue({ conditions: new_conditions });
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form),
                }),
            );
        }
        const dashboard = this._service.dashboard();
        if (!dashboard) return;
        this.loading.set(i18n('STAGEHAND.DASHBOARD_ALERTS_LOADING'));
        const alert = this._service.alert() || {};
        const value = this.form.getRawValue();
        const new_alert = {
            ...alert,
            ...value,
            alert_dashboard_id: dashboard.id,
        };
        const method = new_alert.id
            ? updateAlert(new_alert.id, new_alert)
            : addAlert(new_alert);
        const result = await lastValueFrom(method).catch((_) => null);
        this.loading.set('');
        if (result?.id) {
            this._service.setDashboard(dashboard.id);
            this._router.navigate(['/dashboards', result.id, 'alerts']);
        }
    }
}
