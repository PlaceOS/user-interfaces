import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    extractTextFromHTML,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { RichTextInputComponent } from '@placeos/form-fields';
import {
    EmailTemplate,
    EmailTemplatesStateService,
} from './email-templates-state.service';

@Component({
    selector: 'email-template-manage',
    template: `
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 absolute top-0 left-1/2 h-full w-164 max-w-full -translate-x-1/2 border-x"
            ></div>
            <header
                class="bg-base-200 sticky top-0 z-20 mx-auto my-2 flex w-full max-w-160 items-center justify-between rounded-sm border-none px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    {{
                        (template?.id
                            ? 'APP.CONCIERGE.EMAIL_TEMPLATES_EDIT'
                            : 'APP.CONCIERGE.EMAIL_TEMPLATES_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <a icon matRipple [routerLink]="['/email-templates']">
                        <icon>close</icon>
                    </a>
                }
            </header>
            <form
                class="relative z-10 mx-auto w-full max-w-160 overflow-visible p-2"
                [formGroup]="form"
            >
                <div class="mb-2 flex items-center gap-2">
                    <div class="w-1/4 flex-1 gap-2">
                        <label for="zone">
                            {{ 'RESOURCE.BUILDING' | translate }}
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                name="zone"
                                [placeholder]="
                                    'COMMON.BUILDING_SELECT' | translate
                                "
                                formControlName="zone_id"
                            >
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld.id">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'COMMON.BUILDING_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="w-1/4 flex-1 gap-2">
                        <label for="trigger">
                            {{ 'COMMON.TRIGGER' | translate }}
                        </label>
                        <button
                            class="inverse border-base-300 flex h-12 w-full items-center justify-between rounded-sm border px-2"
                            btn
                            matRipple
                            [matMenuTriggerFor]="trigger_menu"
                            (click)="form.controls.trigger.markAsTouched()"
                        >
                            <div
                                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
                            >
                                <div class="truncate">
                                    {{
                                        active_trigger?.name ||
                                            active_trigger?.module_name
                                    }}
                                </div>
                                @if (!active_trigger) {
                                    <div class="truncate opacity-30">
                                        {{
                                            'COMMON.TRIGGER_SELECT' | translate
                                        }}
                                    </div>
                                }
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </button>
                        <mat-menu #trigger_menu="matMenu" class="max-h-96">
                            <button
                                mat-menu-item
                                (click)="form.patchValue({ trigger: '' })"
                            >
                                {{ 'COMMON.NONE' | translate }}
                            </button>
                            @for (group of definitions | async; track group) {
                                <label class="p-4">{{ group.name }}</label>
                                @for (tmpl of group.items; track tmpl) {
                                    <button
                                        mat-menu-item
                                        (click)="
                                            form.patchValue({
                                                trigger: tmpl.id,
                                            })
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2 pl-2"
                                        >
                                            <div
                                                class="my-2 flex flex-1 flex-col-reverse leading-tight"
                                            >
                                                <div class="text-xs opacity-30">
                                                    {{ tmpl.description }}
                                                </div>
                                                <div class="text-sm">
                                                    {{
                                                        tmpl.name ||
                                                            tmpl.module_name
                                                    }}
                                                    <span class="opacity-0"
                                                        >:</span
                                                    >
                                                </div>
                                            </div>
                                            @if (
                                                form.value.trigger === tmpl.id
                                            ) {
                                                <icon class="text-2xl"
                                                    >done</icon
                                                >
                                            }
                                        </div>
                                    </button>
                                }
                            }
                        </mat-menu>
                    </div>
                    <button
                        btn
                        matRipple
                        class="mt-5.5 flex-1"
                        matTooltip="Values that get replaced in the email template when sent"
                        [disabled]="!form.value.trigger"
                        [matMenuTriggerFor]="tracking_menu"
                    >
                        {{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS'
                                | translate
                        }}
                    </button>
                    <mat-menu #tracking_menu="matMenu" class="max-h-96">
                        @for (
                            field of active_trigger?.fields || [];
                            track field
                        ) {
                            <button
                                mat-menu-item
                                (click)="copyField(field.name)"
                            >
                                <div class="flex flex-col leading-tight">
                                    <div class="font-mono text-sm">
                                        {{ field.name }}
                                    </div>
                                    <div class="text-xs opacity-30">
                                        {{ field.description }}
                                    </div>
                                </div>
                            </button>
                        }
                        @if (!(active_trigger?.fields || []).length) {
                            <button mat-menu-item [disabled]="true">
                                {{
                                    'APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS_EMPTY'
                                        | translate
                                }}
                            </button>
                        }
                    </mat-menu>
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO'
                                    | translate
                            "
                            formControlName="reply_to"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.EMAIL_TEMPLATES_FROM' | translate
                            "
                            formControlName="from"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_FROM_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <icon matPrefix class="relative -left-1 text-2xl">
                        description
                    </icon>
                    <input
                        matInput
                        placeholder="Template Subject"
                        formControlName="subject"
                    />
                    <mat-error>{{
                        'APP.CONCIERGE.EMAIL_TEMPLATES_SUBJECT_REQUIRED'
                            | translate
                    }}</mat-error>
                </mat-form-field>
                <rich-text-input
                    formControlName="html"
                    [placeholder]="
                        'APP.CONCIERGE.EMAIL_TEMPLATES_BODY' | translate
                    "
                    [images_allowed]="true"
                    class="block min-h-[calc(100vh-32rem)]"
                ></rich-text-input>
            </form>
            @if (!loading) {
                <footer
                    class="bg-base-200 fixed bottom-0 left-1/2 z-20 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                >
                    <button btn matRipple class="w-40" (click)="save()">
                        {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
        <ng-template #load_state>
            <div class="bg-base-100 absolute inset-0">
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        RouterModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        ReactiveFormsModule,
        RichTextInputComponent,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatTooltipModule,
        IconComponent,
    ],
})
export class EmailTemplateManageComponent
    extends AsyncHandler
    implements OnInit
{
    private _org = inject(OrganisationService);
    private _state = inject(EmailTemplatesStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _clipboard = inject(Clipboard);

    public loading = '';
    public template: EmailTemplate;
    public readonly definitions = this._state.template_groups;
    public readonly buildings = this._org.building_list;
    public readonly form = new FormGroup({
        id: new FormControl(''),
        reply_to: new FormControl(''),
        from: new FormControl(''),
        subject: new FormControl('', [Validators.required]),
        category: new FormControl('internal'),
        trigger: new FormControl(''),
        html: new FormControl('', [Validators.required]),
        zone_id: new FormControl(''),
    });
    public active_trigger = null;

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    this.loading = i18n(
                        'APP.CONCIERGE.EMAIL_TEMPLATES_LOADING',
                    );
                    this.template = await this._state.loadTemplate(
                        params.get('id'),
                    );
                    this.loading = '';
                    console.log('Template:', this.template);
                    if (!this.template) {
                        this._router.navigate(['/email-templates', 'manage']);
                    } else {
                        this.form.patchValue(this.template);
                    }
                }
            }),
        );
        this.subscription(
            'trigger',
            this.form.valueChanges.subscribe(async (value) => {
                if (value.trigger) {
                    const trigger_list = await nextValueFrom(
                        this._state.template_definitions,
                    );
                    this.active_trigger = trigger_list.find(
                        (_) => _.id === value.trigger,
                    );
                }
            }),
        );
    }

    public copyField(field: string) {
        this._clipboard.copy(`%{${field}}`);
        notifySuccess(
            i18n('APP.CONCIERGE.EMAIL_TEMPLATES_COPIED_FIELD', { field }),
        );
    }

    public async save() {
        this.loading = i18n('APP.CONCIERGE.EMAIL_TEMPLATES_SAVING');
        const zone =
            this.template?.zone_id !== this.form.value.zone_id
                ? this.template?.zone_id
                : '';
        await this._state
            .saveTemplate(
                {
                    ...(this.template || {}),
                    ...this.form.getRawValue(),
                    text: extractTextFromHTML(
                        this.form.getRawValue().html || '',
                    ),
                } as any,
                zone,
            )
            .catch((e) => {
                this.loading = '';
                notifyError(i18n(e));
                throw e;
            });
        this.loading = '';
        this._router.navigate(['/email-templates']);
    }
}
