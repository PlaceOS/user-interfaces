import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    EmailTemplate,
    EmailTemplatesFilters,
    EmailTemplatesStateService,
} from './email-templates-state.service';

@Component({
    selector: 'email-templates-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
        @if (!hide_header) {
            <div class="flex items-center justify-between space-x-2 p-8">
                <h2 class="text-2xl font-medium">
                    {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_HEADER' | translate }}
                </h2>
                <div class="flex-1"></div>
                <!-- <mat-form-field appearance="outline" class="w-56 no-subscript">
                <mat-select
                  [ngModel]="(filters | async)?.category"
                  [placeholder]="'COMMON.CATEGORY_ALL' | translate"
                  (ngModelChange)="setFilters({ category: $event })"
                  >
                  <mat-option value="">{{'COMMON.CATEGORY_ALL' | translate}}</mat-option>
                  <mat-option value="internal">{{'COMMON.TYPE_INTERNAL' | translate}}</mat-option>
                  <mat-option value="external">{{'COMMON.TYPE_EXTERNAL' | translate}}</mat-option>
                </mat-select>
              </mat-form-field> -->
                <a btn matRipple [routerLink]="['/email-templates', 'manage']">
                    <div class="ml-2">
                        {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_ADD' | translate }}
                    </div>
                    <icon class="text-2xl">add</icon>
                </a>
            </div>
        }
                <simple-table
                    class="block w-full min-w-[56rem] text-sm mb-8"
                    [data]="templates"
                    empty_message="No group events for selected period"
                    [columns]="[
                        { key: 'subject', name: 'FORM.TITLE' | translate },
                        {
                            key: 'category',
                            name: 'COMMON.CATEGORY' | translate,
                            show: !(filters | async)?.category && false,
                        },
                        {
                            key: 'trigger',
                            name: 'COMMON.TRIGGER' | translate,
                            content: trigger_template,
                        },
                        {
                            key: 'zone_id',
                            name: 'RESOURCE.BUILDING' | translate,
                            content: bld_template,
                        },
                        {
                            key: 'created_at',
                            name: 'COMMON.CREATED_AT' | translate,
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
                    <div class="p-4 opacity-60">
                        {{ data * 1000 | date: 'mediumDate' }}
                    </div>
                </ng-template>
                <ng-template #bld_template let-data="data">
                    <div class="p-4">
                        {{ (data | building)?.display_name }}
                        @if (!(data | building)) {
                            <span class="opacity-30">
                                {{ 'RESOURCE.BUILDING_EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #trigger_template let-data="data">
                    <div class="p-4 font-mono text-xs">
                        {{ data }}
                        @if (!data) {
                            <span class="opacity-30">
                                {{ 'COMMON.TRIGGER_EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <button
                        icon
                        matRipple
                        [matMenuTriggerFor]="menu"
                        class="mx-auto"
                    >
                        <icon>more_vert</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="sendTestEmail(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">send</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST'
                                            | translate
                                    }}
                                </div>
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
                                <icon class="text-2xl">edit</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.EMAIL_TEMPLATES_EDIT'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </a>
                        <button mat-menu-item (click)="removeTemplate(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl text-error">
                                    delete
                                </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </ng-template>
            </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        SimpleTableComponent,
        RouterModule,
        MatMenuModule,
        BuildingPipe,
    ],
})
export class EmailTemplatesListComponent {
    private _state = inject(EmailTemplatesStateService);
    private _org = inject(OrganisationService);

    @Input() hide_header = false;

    public sending_email: string;
    public readonly filters = this._state.filters;
    public readonly templates = this._state.filtered_templates;

    public readonly removeTemplate = (t) => this._state.removeTemplate(t);

    public setFilters(filters: Partial<EmailTemplatesFilters>) {
        this._state.setFilters(filters);
    }

    public async sendTestEmail(template: EmailTemplate) {
        this.sending_email = template.id;
        const mod = this._org.module('smtp', 'Mailer');
        if (!mod) {
            return notifyError(
                i18n('APP.CONCIERGE.EMAIL_TEMPLATES_CONFIG_ERROR'),
            );
        }
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
        notifySuccess(i18n('APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST'));
        this.sending_email = null;
    }
}
