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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    getInvalidFields,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import { DateFieldComponent } from '@placeos/form-fields';
import { addMonths } from 'date-fns';

import { UploadButtonComponent } from '../ui/app-settings/upload-button.component';
import { DealsService } from './deals.service';

import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: `deals-manage`,
    template: `
        @if (!loading()) {
            <div class="bg-base-100 absolute inset-0 overflow-auto">
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (form.value.id
                                ? 'APP.CONCIERGE.DEALS_EDIT'
                                : 'APP.CONCIERGE.DEALS_NEW'
                            ) | translate
                        }}
                    </h2>
                    @if (!loading()) {
                        <a icon matRipple [routerLink]="['/deals-n-offers']">
                            <icon>close</icon>
                        </a>
                    }
                </header>
                <form
                    class="mx-auto my-2 flex w-160 max-w-full flex-col px-4 pb-16"
                    [formGroup]="form"
                >
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            placeholder="Name of the deal or offer"
                            required
                        />
                        <mat-error>Name is required</mat-error>
                    </mat-form-field>
                    <label for="type"
                        >{{ 'COMMON.TYPE' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="type"
                            formControlName="type"
                            placeholder="Type of the deal or offer"
                            required
                        />
                        <mat-error>Type is required</mat-error>
                    </mat-form-field>
                    <label for="details">{{
                        'COMMON.DETAILS' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="details"
                            formControlName="details"
                            placeholder="Summary of the deal or offer"
                            required
                        />
                    </mat-form-field>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="description"
                            formControlName="description"
                            placeholder="Description of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="terms">{{ 'COMMON.TERMS' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            name="terms"
                            formControlName="terms"
                            placeholder="Terms and conditions of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="code">{{ 'COMMON.CODE' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="code"
                            formControlName="code"
                            placeholder="Deal/Offer Code"
                        />
                    </mat-form-field>
                    <label for="image">{{ 'COMMON.IMAGE' | translate }}</label>
                    <div class="mb-4 flex items-center space-x-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                name="image"
                                formControlName="image"
                                placeholder="Image URL"
                            />
                        </mat-form-field>
                        <upload-button
                            ngModel
                            (ngModelChange)="form.patchValue({ image: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [matTooltip]="'Upload Image'"
                        />
                    </div>

                    <label for="expires_at">{{
                        'FORM.EXPIRES_AT' | translate
                    }}</label>
                    <a-date-field
                        name="expires_at"
                        formControlName="expires_at"
                    />
                </form>
                @if (!loading()) {
                    <footer
                        class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                    >
                        <button btn matRipple class="w-32" (click)="save()">
                            {{ 'COMMON.SAVE' | translate }}
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.DEALS_SAVING' | translate }}</p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule,
        IconComponent,
        DateFieldComponent,
        UploadButtonComponent,
        MatTooltipModule,
    ],
})
export class DealsManageComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private _service = inject(DealsService);

    public readonly loading = signal('');
    public readonly form = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        details: new FormControl(''),
        description: new FormControl(''),
        terms: new FormControl(''),
        code: new FormControl(''),
        image: new FormControl(''),
        expires_at: new FormControl(addMonths(Date.now(), 1).valueOf()),
    });

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) this._loadDeal(params.get('id'));
            }),
        );
    }

    public async save() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form),
                }),
            );
        }
        this.loading.set('APP.CONCIERGE.DEALS_SAVING');
        await this._service.saveDeal(this.form.value).catch((e) => {
            this.loading.set('');
            notifyError(i18n('APP.CONCIERGE.DEALS_SAVE_ERROR', { error: e }));
            throw e;
        });
        this.loading.set('');
        notifySuccess(i18n('APP.CONCIERGE.DEALS_SAVED'));
        this._router.navigate(['/deals-n-offers']);
    }

    private async _loadDeal(id: string) {
        this.loading.set('APP.CONCIERGE.DEALS_LOAD_EXISTING');
        const deal_list = await nextValueFrom(this._service.deals$);
        const deal = deal_list.find((deal) => deal.id === id);
        if (deal) this.form.patchValue(deal);
        else {
            notifyError(i18n('APP.CONCIERGE.DEALS_NOT_FOUND', { id }));
            this._router.navigate(['/deals-n-offers']);
        }
        this.loading.set('');
    }
}
