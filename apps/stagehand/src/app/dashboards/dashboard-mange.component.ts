import {
    Component,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    getInvalidSignalFields,
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
                    <form class="flex flex-col">
                        <label for="name"
                            >{{ 'FORM.NAME' | translate
                            }}<span required>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                id="name"
                                matInput
                                placeholder="Dashboard Name"
                                [formField]="form.name"
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
                                placeholder="Description of the dashboard"
                                [formField]="form.description"
                            ></textarea>
                        </mat-form-field>
                        <settings-toggle [formField]="form.enabled">{{
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
        FormField,
    ],
})
export class DashboardManageComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(DashboardsService);

    public readonly loading = signal('');
    public readonly dashboard = this._service.dashboard;
    public readonly model = signal({
        id: '',
        name: '',
        description: '',
        enabled: true,
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
    });

    public ngOnInit() {
        const id = this._route.snapshot.paramMap.get('id');
        if (id) this.setDashboard(id);
    }

    public async setDashboard(id: string) {
        await this._service.setDashboard(id);
        const dash = this._service.dashboard();
        if (dash) this.model.update((m) => ({ ...m, ...dash }));
    }

    public async save() {
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this.model,
                    ),
                }),
            );
        }
        this.loading.set(i18n('STAGEHAND.DASHBOARD_LOADING'));
        const dash = this._service.dashboard() || {};
        const value = this.model();
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
