import { Component } from '@angular/core';
import {
    EmailTemplate,
    EmailTemplatesStateService,
} from './email-templates-state.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, notifySuccess } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'email-template-manage',
    template: `
        <div class="absolute inset-0 bg-base-100 overflow-auto p-8">
            <div class="max-w-full w-[48rem] mx-auto min-h-full">
                <div class="flex items-center space-x-2 mb-8">
                    <a icon matRipple [routerLink]="['/email-templates']">
                        <app-icon>arrow_back</app-icon>
                    </a>
                    <h2 class="text-2xl font-medium">
                        {{ template?.id ? 'Edit' : 'New' }} Email Template
                    </h2>
                    <div class="flex-1"></div>
                    <button btn matRipple (click)="save()">
                        Save Template
                    </button>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="flex-1 space-y-2">
                        <label for="title">Building</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
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
                    <div class="flex-1 space-y-2">
                        <label for="title">Category</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
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
                    <div class="flex-1 space-y-2">
                        <label for="title">Trigger</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                placeholder="Select Trigger"
                                formControlName="trigger"
                            >
                                <mat-option value="none">None</mat-option>
                                <mat-option value="checkout">
                                    Checkout
                                </mat-option>
                                <mat-option value="checkin">Checkin</mat-option>
                                <mat-option value="booking">Booking</mat-option>
                                <mat-option value="event">Event</mat-option>
                            </mat-select>
                            <mat-error>A trigger is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <app-icon matPrefix class="text-2xl relative -left-1">
                        description
                    </app-icon>
                    <input
                        matInput
                        placeholder="Template Title"
                        formControlName="title"
                    />
                    <mat-error>A title for the template is required</mat-error>
                </mat-form-field>
                <rich-text-input
                    formControlName="body"
                    placeholder="Body of the email template"
                    [images_allowed]="true"
                    class="min-h-[calc(100vh-20rem)] block"
                ></rich-text-input>
            </div>
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
    public readonly buildings = this._org.building_list;
    public readonly form = new FormGroup({
        id: new FormControl(''),
        title: new FormControl('', [Validators.required]),
        category: new FormControl('internal'),
        trigger: new FormControl(''),
        body: new FormControl('', [Validators.required]),
        zone_id: new FormControl(''),
    });

    constructor(
        private _org: OrganisationService,
        private _state: EmailTemplatesStateService,
        private _route: ActivatedRoute,
        private _router: Router
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
                        params.get('id')
                    );
                    this.loading = '';
                    if (!this.template) {
                        this._router.navigate(['/email-templates', 'manage']);
                    } else {
                        this.form.patchValue(this.template);
                    }
                }
            })
        );
    }

    public async save() {
        this.loading = 'Saving email template...';
        await this._state.saveTemplate({
            ...(this.template || {}),
            ...this.form.getRawValue(),
        } as any);
        this.loading = '';
        notifySuccess('Successfully saved email template');
        this._router.navigate(['/email-templates']);
    }
}
