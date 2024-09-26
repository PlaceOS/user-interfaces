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
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { take } from 'rxjs/operators';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'email-template-manage',
    template: `
        <div class="absolute inset-0 bg-base-100 overflow-auto p-8">
            <form
                class="max-w-full w-[48rem] mx-auto min-h-full"
                [formGroup]="form"
            >
                <div class="flex items-center space-x-2 mb-8">
                    <a
                        icon
                        matRipple
                        [routerLink]="['/email-templates']"
                        class="-ml-8"
                    >
                        <app-icon>arrow_back</app-icon>
                    </a>
                    <h2 class="text-2xl font-medium">
                        {{ template?.id ? 'Edit' : 'New' }} Email Template
                    </h2>
                    <div class="flex-1"></div>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="w-48"
                        (click)="save()"
                    >
                        Save Template
                    </button>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="flex-1 space-y-2 w-1/4">
                        <label for="zone">Building</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="zone"
                                placeholder="Select Building"
                                formControlName="zone_id"
                            >
                                <mat-option
                                    *ngFor="let bld of buildings | async"
                                    [value]="bld.id"
                                >
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            </mat-select>
                            <mat-error>A building is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1 space-y-2 w-1/4">
                        <label for="category">Category</label>
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
                    </div>
                    <div class="flex-1 space-y-2 w-1/4">
                        <label for="trigger">Trigger</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="trigger"
                                placeholder="Select Trigger"
                                formControlName="trigger"
                            >
                                <mat-option value="">None</mat-option>
                                <mat-option
                                    *ngFor="let template of definitions | async"
                                    [value]="template.id"
                                >
                                    {{ template.name }}
                                </mat-option>
                            </mat-select>
                            <mat-error>A trigger is required</mat-error>
                        </mat-form-field>
                    </div>
                    <button
                        btn
                        matRipple
                        class="flex-1 mt-2"
                        matTooltip="Values that get replaced in the email template when sent"
                        [disabled]="!form.value.trigger"
                    >
                        Placeholders
                    </button>
                    <mat-menu #tracking_menu="matMenu">
                        <button
                            mat-menu-item
                            *ngFor="let field of active_trigger?.fields || []"
                            (click)="copyField(field.name)"
                        >
                            <div class="flex flex-col leading-tight">
                                <div>{{ field.name }}</div>
                                <div class="text-xs opacity-30">
                                    {{ field.description }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            placeholder="Reply to address"
                            formControlName="reply_to"
                        />
                        <mat-error>A reply address is required</mat-error>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            placeholder="From address"
                            formControlName="from"
                        />
                        <mat-error>A from address is required</mat-error>
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
                    <mat-error>A title for the template is required</mat-error>
                </mat-form-field>
                <rich-text-input
                    formControlName="html"
                    placeholder="Body of the email template"
                    [images_allowed]="true"
                    class="min-h-[calc(100vh-28rem)] block"
                ></rich-text-input>
            </form>
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
})
export class EmailTemplateManageComponent extends AsyncHandler {
    public loading = '';
    public template: EmailTemplate;
    public readonly definitions = this._state.template_definitions;
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
                    this.loading = 'Loading email template...';
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
                    const trigger_list = await this.definitions
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
        this._clipboard.copy(field);
        notifySuccess(`Copied field "${field}" to clipboard.`);
    }

    public async save() {
        this.loading = 'Saving email template...';
        await this._state.saveTemplate({
            ...(this.template || {}),
            ...this.form.getRawValue(),
            text: extractTextFromHTML(this.form.getRawValue().html || ''),
        } as any);
        this.loading = '';
        notifySuccess('Successfully saved email template');
        this._router.navigate(['/email-templates']);
    }
}
