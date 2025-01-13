import { Component } from '@angular/core';
import {
    EmailTemplate,
    EmailTemplatesStateService,
} from './email-templates-state.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AsyncHandler,
    extractTextFromHTML,
    i18n,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { take } from 'rxjs/operators';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'email-template-manage',
    template: `
        <div class="absolute inset-0 bg-base-100 overflow-auto">
            <header
                class="sticky flex items-center justify-between top-0 px-4 py-2 mx-auto my-2 max-w-[40rem] w-full border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium">
                    {{
                        (template?.id
                            ? 'APP.CONCIERGE.EMAIL_TEMPLATES_EDIT'
                            : 'APP.CONCIERGE.EMAIL_TEMPLATES_NEW'
                        ) | translate
                    }}
                </h2>
                <a
                    icon
                    matRipple
                    [routerLink]="['/email-templates']"
                    *ngIf="!loading"
                >
                    <app-icon>close</app-icon>
                </a>
            </header>
            <form
                class="mx-auto my-2 max-w-[40rem] w-full z-0 p-4 overflow-visible"
                [formGroup]="form"
            >
                <div class="flex items-center space-x-4">
                    <div class="flex-1 space-y-2 w-1/4">
                        <label for="zone">
                            {{ 'RESOURCE.BUILDING' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="zone"
                                [placeholder]="
                                    'COMMON.BUILDING_SELECT' | translate
                                "
                                formControlName="zone_id"
                            >
                                <mat-option value="">{{
                                    'COMMON.BUILDING_EMPTY' | translate
                                }}</mat-option>
                                <mat-option
                                    *ngFor="let bld of buildings | async"
                                    [value]="bld.id"
                                >
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            </mat-select>
                            <mat-error>{{
                                'COMMON.BUILDING_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <!-- <div class="flex-1 space-y-2 w-1/4">
                        <label for="category">{{'COMMON.CATEGORY' | translate}}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="category"
                                placeholder="Select Category"
                                formControlName="category"
                            >
                                <mat-option value="internal">
                                    Internal
                                </mat-option>
                                <mat-option value="external">
                                    External
                                </mat-option>
                            </mat-select>
                            <mat-error>A category is required</mat-error>
                        </mat-form-field>
                    </div> -->
                    <div class="flex-1 space-y-2 w-1/4 pb-6">
                        <label for="trigger">
                            {{ 'COMMON.TRIGGER' | translate }}
                        </label>
                        <button
                            duration-field
                            class="flex items-center justify-between border border-neutral rounded h-12 w-full px-2"
                            matRipple
                            [matMenuTriggerFor]="trigger_menu"
                            (click)="form.controls.trigger.markAsTouched()"
                        >
                            <div
                                class="flex flex-col leading-tight px-2 text-left flex-1 w-1/2"
                            >
                                <div class="truncate">
                                    {{
                                        active_trigger?.name ||
                                            active_trigger?.module_name
                                    }}
                                </div>
                                <div
                                    class="opacity-30 truncate"
                                    *ngIf="!active_trigger"
                                >
                                    {{ 'COMMON.TRIGGER_SELECT' | translate }}
                                </div>
                            </div>
                            <app-icon class="text-2xl">
                                arrow_drop_down
                            </app-icon>
                        </button>
                        <mat-menu #trigger_menu="matMenu" class="max-h-[24rem]">
                            <button
                                mat-menu-item
                                (click)="form.patchValue({ trigger: '' })"
                            >
                                {{ 'COMMON.NONE' | translate }}
                            </button>
                            <ng-container
                                *ngFor="let group of definitions | async"
                            >
                                <label class="p-4">{{ group.name }}</label>
                                <button
                                    mat-menu-item
                                    *ngFor="let tmpl of group.items"
                                    (click)="
                                        form.patchValue({ trigger: tmpl.id })
                                    "
                                >
                                    <div
                                        class="flex items-center space-x-2 pl-2"
                                    >
                                        <div
                                            class="flex flex-col-reverse leading-tight my-2 flex-1"
                                        >
                                            <div class="text-xs opacity-30">
                                                {{ tmpl.description }}
                                            </div>
                                            <div class="text-sm">
                                                {{
                                                    tmpl.name ||
                                                        tmpl.module_name
                                                }}
                                                <span class="opacity-0">:</span>
                                            </div>
                                        </div>
                                        <app-icon
                                            class="text-2xl"
                                            *ngIf="
                                                form.value.trigger === tmpl.id
                                            "
                                            >done</app-icon
                                        >
                                    </div>
                                </button>
                            </ng-container>
                        </mat-menu>
                    </div>
                    <button
                        btn
                        matRipple
                        class="flex-1 mt-2"
                        matTooltip="Values that get replaced in the email template when sent"
                        [disabled]="!form.value.trigger"
                        [matMenuTriggerFor]="tracking_menu"
                    >
                        {{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS'
                                | translate
                        }}
                    </button>
                    <mat-menu #tracking_menu="matMenu" class="max-h-[24rem]">
                        <button
                            mat-menu-item
                            *ngFor="let field of active_trigger?.fields || []"
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
                        <button
                            mat-menu-item
                            *ngIf="!(active_trigger?.fields || []).length"
                            [disabled]="true"
                        >
                            {{
                                'APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS_EMPTY'
                                    | translate
                            }}
                        </button>
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
                    <app-icon matPrefix class="text-2xl relative -left-1">
                        description
                    </app-icon>
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
                    class="min-h-[calc(100vh-32rem)] block"
                ></rich-text-input>
            </form>
            <footer
                class="fixed bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded flex items-center justify-end"
                *ngIf="!loading"
            >
                <button btn matRipple class="w-40" (click)="save()">
                    {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_SAVE' | translate }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <div class="absolute inset-0 bg-base-100">
                <div
                    class="h-full w-full flex flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false
})
export class EmailTemplateManageComponent extends AsyncHandler {
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

    constructor(
        private _org: OrganisationService,
        private _state: EmailTemplatesStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _clipboard: Clipboard,
    ) {
        super();
    }

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
                    const trigger_list = await this._state.template_definitions
                        .pipe(take(1))
                        .toPromise();
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
        await this._state
            .saveTemplate({
                ...(this.template || {}),
                ...this.form.getRawValue(),
                text: extractTextFromHTML(this.form.getRawValue().html || ''),
            } as any)
            .catch((e) => {
                this.loading = '';
                throw e;
            });
        this.loading = '';
        this._router.navigate(['/email-templates']);
    }
}
