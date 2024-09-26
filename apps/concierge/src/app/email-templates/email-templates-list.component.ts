import { Component } from '@angular/core';
import {
    EmailTemplate,
    EmailTemplatesFilters,
    EmailTemplatesStateService,
} from './email-templates-state.service';
import { OrganisationService } from '@placeos/organisation';
import { currentUser, notifyError, notifySuccess } from '@placeos/common';
import { getModule } from '@placeos/ts-client';

@Component({
    selector: 'email-templates-list',
    template: ` <div class="absolute inset-0 flex flex-col">
        <div class="flex items-center justify-between p-8 space-x-2">
            <h2 class="text-2xl font-medium">Email Templates</h2>
            <div class="flex-1"></div>
            <mat-form-field appearance="outline" class="w-56 no-subscript">
                <mat-select
                    [ngModel]="(filters | async)?.category"
                    placeholder="All Categories"
                    (ngModelChange)="setFilters({ category: $event })"
                >
                    <mat-option value="">All Categories</mat-option>
                    <mat-option value="internal">Internal</mat-option>
                    <mat-option value="external">External</mat-option>
                </mat-select>
            </mat-form-field>
            <a btn matRipple [routerLink]="['/email-templates', 'manage']">
                <div class="ml-2">Create Template</div>
                <app-icon class="text-2xl">add</app-icon>
            </a>
        </div>
        <div class="h-1/2 flex-1 w-full px-8 overflow-y-auto relative">
            <div class="w-full min-h-full overflow-x-auto">
                <simple-table
                    class="min-w-[56rem] w-full block text-sm"
                    [data]="templates"
                    empty_message="No group events for selected period"
                    [columns]="[
                        { key: 'subject', name: 'Title' },
                        {
                            key: 'category',
                            name: 'Category',
                            show: !(filters | async)?.category,
                        },
                        {
                            key: 'trigger',
                            name: 'Trigger',
                            empty: 'No Trigger',
                        },
                        {
                            key: 'zone_id',
                            name: 'Building',
                            content: bld_template,
                        },
                        {
                            key: 'created_at',
                            name: 'Created',
                            size: '8rem',
                            content: date_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '3.5rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                >
                </simple-table>
                <ng-template #date_template let-data="data">
                    <div class="opacity-60 p-4">
                        {{ data * 1000 | date: 'mediumDate' }}
                    </div>
                </ng-template>
                <ng-template #bld_template let-data="data">
                    <div class="p-4">
                        {{ (data | building)?.display_name }}
                        <span class="opacity-30" *ngIf="!(data | building)">
                            No Building
                        </span>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <button
                        icon
                        matRipple
                        [matMenuTriggerFor]="menu"
                        class="mx-auto"
                    >
                        <app-icon>more_vert</app-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="sendTestEmail(row)">
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">send</app-icon>
                                <div>Send Test Email</div>
                            </div>
                        </button>
                        <a
                            mat-menu-item
                            [routerLink]="[
                                '/email-templates',
                                'manage',
                                row.id,
                            ]"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">edit</app-icon>
                                <div>Edit Template</div>
                            </div>
                        </a>
                        <button mat-menu-item (click)="removeTemplate(row)">
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl text-error">
                                    delete
                                </app-icon>
                                <div>Delete Template</div>
                            </div>
                        </button>
                    </mat-menu>
                </ng-template>
            </div>
        </div>
    </div>`,
    styles: [``],
})
export class EmailTemplatesListComponent {
    public sending_email: string;
    public readonly filters = this._state.filters;
    public readonly templates = this._state.filtered_templates;

    public readonly removeTemplate = (t) => this._state.removeTemplate(t);

    constructor(
        private _state: EmailTemplatesStateService,
        private _org: OrganisationService,
    ) {}

    public setFilters(filters: Partial<EmailTemplatesFilters>) {
        this._state.setFilters(filters);
    }

    public async sendTestEmail(template: EmailTemplate) {
        this.sending_email = template.id;
        const stmp_system = this._org.binding('smtp');
        if (!stmp_system) {
            return notifyError(
                'Mailing system not configured for application.',
            );
        }
        const mod = getModule(stmp_system, 'Mailer');
        await mod.execute('send_mail', [
            currentUser()?.email,
            template.subject,
            template.text,
            template.html,
            [], // resource attachments
            [], // attachments
            [], // cc
            [], // bcc
            template.reply_to || null, // reply_to
            template.from || currentUser()?.email, // from
        ]);
        notifySuccess('Successfully sent test email');
        this.sending_email = null;
    }
}
