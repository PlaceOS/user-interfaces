import { Component, inject, OnInit, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    getInvalidFields,
    i18n,
    notifyError,
} from '@placeos/common';
import { addAlertDashboard, updateAlertDashboard } from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DashboardsService } from './dashboards.service';

@Component({
    selector: `stagehand-dashboard-manage`,
    template: `
        <div class="bg-base-200 fixed inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto min-h-full w-160 max-w-full border-x p-2"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto flex h-14 w-full max-w-156 items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">
                        {{
                            (dashboard()?.id
                                ? 'APP.STAGEHAND.DASHBOARD_EDIT'
                                : 'APP.STAGEHAND.DASHBOARD_NEW'
                            ) | translate
                        }}
                    </h2>
                    <a
                        icon
                        matRipple
                        aria-label="Close dashboard editor"
                        [routerLink]="
                            dashboard()
                                ? ['/dashboards', dashboard().id]
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
                                id="name"
                                matInput
                                name="name"
                                formControlName="name"
                                placeholder="Dashboard Name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                id="description"
                                matInput
                                name="description"
                                formControlName="description"
                                placeholder="Description of the dashboard"
                            ></textarea>
                        </mat-form-field>
                        <settings-toggle formControlName="enabled">{{
                            'COMMON.ENABLED' | translate
                        }}</settings-toggle>
                    </form>
                </main>
                <footer
                    class="bg-base-200 fixed bottom-2 flex w-156 max-w-full justify-end rounded-sm p-2"
                >
                    <button
                        btn
                        type="button"
                        matRipple
                        class="min-w-32"
                        (click)="save()"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            </div>
        </div>
    `,
    styles: [],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        SettingsToggleComponent,
        ReactiveFormsModule,
    ],
})
export class DashboardManageComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(DashboardsService);

    public readonly loading = signal('');
    public readonly dashboard = this._service.dashboard;
    public readonly form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        enabled: new FormControl(true),
    });

    public ngOnInit() {
        this.subscription(
            'route.parms',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this.setDashboard(params.get('id'));
                }
            }),
        );
    }

    public async setDashboard(id: string) {
        await this._service.setDashboard(id);
        const dash = this._service.dashboard();
        if (dash) this.form.patchValue(dash);
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
        this.loading.set(i18n('STAGEHAND.DASHBOARD_LOADING'));
        const dash = this._service.dashboard() || {};
        const value = this.form.getRawValue();
        const new_dash = { ...dash, ...value };
        const method = new_dash.id
            ? updateAlertDashboard(new_dash.id, new_dash)
            : addAlertDashboard(new_dash);
        const result = await method.catch((_) => null);
        this.loading.set('');
        if (result) {
            this._service.loadDashboards();
            this._router.navigate(['/dashboards', result.id]);
        }
    }
}
