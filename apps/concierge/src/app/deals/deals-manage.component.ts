import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { form, FormField, required } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    AsyncHandler,
    getInvalidSignalFields,
    i18n,
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
                            (model().id
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
                >
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.name"
                            placeholder="Name of the deal or offer"
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
                            [formField]="form.type"
                            placeholder="Type of the deal or offer"
                        />
                        <mat-error>Type is required</mat-error>
                    </mat-form-field>
                    <label for="details">{{
                        'COMMON.DETAILS' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.details"
                            placeholder="Summary of the deal or offer"
                        />
                    </mat-form-field>
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [formField]="form.description"
                            placeholder="Description of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="terms">{{ 'COMMON.TERMS' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            [formField]="form.terms"
                            placeholder="Terms and conditions of the deal or offer"
                        ></textarea>
                    </mat-form-field>
                    <label for="code">{{ 'COMMON.CODE' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.code"
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
                                [formField]="form.image"
                                placeholder="Image URL"
                            />
                        </mat-form-field>
                        <upload-button
                            ngModel
                            (ngModelChange)="
                                model.update((m) => ({ ...m, image: $event }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [matTooltip]="'Upload Image'"
                        />
                    </div>

                    <label for="expires_at">{{
                        'FORM.EXPIRES_AT' | translate
                    }}</label>
                    <a-date-field [formField]="form.expires_at" />
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FormField,
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
    private readonly _params = toSignal(this._route.paramMap, {
        initialValue: this._route.snapshot.paramMap,
    });

    private readonly _ready = signal(false);
    public readonly loading = signal('');
    public readonly model = signal({
        id: '',
        name: '',
        type: '',
        details: '',
        description: '',
        terms: '',
        code: '',
        image: '',
        expires_at: addMonths(Date.now(), 1).valueOf(),
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.type);
    });

    constructor() {
        super();
        effect(() => {
            if (!this._ready()) return;
            const id = this._params().get('id');
            if (id) this._loadDeal(id);
        });
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this._ready.set(true);
    }

    public async save() {
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(this.form, this.model),
                }),
            );
        }
        this.loading.set('APP.CONCIERGE.DEALS_SAVING');
        await this._service.saveDeal(this.model()).catch((e) => {
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
        const deal_list = await this._service.getDeals();
        const deal = deal_list.find((deal) => deal.id === id) as any;
        if (deal) {
            this.model.update((m) => ({
                ...m,
                id: deal.id ?? m.id,
                name: deal.name ?? m.name,
                type: deal.type ?? m.type,
                details: deal.details ?? m.details,
                description: deal.description ?? m.description,
                terms: deal.terms ?? m.terms,
                code: deal.code ?? m.code,
                image: deal.image ?? m.image,
                expires_at: deal.expires_at ?? m.expires_at,
            }));
        } else {
            notifyError(i18n('APP.CONCIERGE.DEALS_NOT_FOUND', { id }));
            this._router.navigate(['/deals-n-offers']);
        }
        this.loading.set('');
    }
}
