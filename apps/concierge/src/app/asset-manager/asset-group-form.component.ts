import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import {
    AssetCategory,
    generateAssetGroupForm,
    saveAssetGroup,
    showAssetGroup,
} from '@placeos/assets';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AsyncHandler, notifyError, unique } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'asset-group-form',
    template: `
        <div class="absolute inset-0 bg-base-100">
            <div
                class="h-full max-w-[32rem] mx-auto flex flex-col"
                *ngIf="!loading; else load_state"
            >
                <header class="p-4">
                    <h2 class="text-center text-xl font-medium">
                        {{ form.value.id ? 'Edit' : 'Add' }} Product
                    </h2>
                </header>
                <main class="flex-1 h-1/2 overflow-auto p-2" [formGroup]="form">
                    <div class="flex flex-col space-y-2">
                        <label for="name">Name<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                placeholder="Name of the product"
                                formControlName="name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="name">Category<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="category_id"
                                placeholder="Category of Product"
                                (click)="
                                    current_category = form.value.category_id
                                "
                            >
                                <mat-option
                                    *ngFor="let category of categories | async"
                                    [value]="category.id"
                                >
                                    {{ category.name }}
                                </mat-option>
                                <mat-option
                                    (click)="newCategory()"
                                    class="relative"
                                >
                                    <div class="flex items-center space-x-2">
                                        <app-icon>add</app-icon>
                                        <p>New Category</p>
                                    </div>
                                </mat-option>
                            </mat-select>
                            <mat-error>Category is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="brand">Brand<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="brand"
                                placeholder="Brand of the product"
                                formControlName="brand"
                            />
                            <mat-error>Brand is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="description">Description</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                placeholder="Description of the product"
                                formControlName="description"
                            ></textarea>
                            <mat-error>Description is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="images">Images</label>
                        <image-list-field
                            name="images"
                            formControlName="images"
                        ></image-list-field>
                    </div>
                </main>
                <footer
                    class="flex justify-end space-x-2 p-2 border-t border-base-200"
                >
                    <a
                        btn
                        matRipple
                        class="w-32 inverse"
                        [routerLink]="
                            form.value.id
                                ? [base_route, 'view', form.value.id]
                                : [base_route, 'list', 'items']
                        "
                    >
                        Cancel
                    </a>
                    <button btn matRipple class="w-32" (click)="save()">
                        Save
                    </button>
                </footer>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class AssetGroupFormComponent extends AsyncHandler {
    public readonly form = generateAssetGroupForm();
    public readonly new_category = new BehaviorSubject<AssetCategory>(null);
    public readonly categories = combineLatest([
        this._state.categories,
        this.new_category,
    ]).pipe(
        map(([list, item]) => (item ? unique([...list, item], 'id') : list))
    );
    public loading: string = '';
    public current_category: string;

    public get base_route() {
        return this._state.base_route;
    }

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading = 'Loading Product Details...';
                    const product = await showAssetGroup(params.get('id'))
                        .toPromise()
                        .catch(() => null);
                    if (!product) {
                        notifyError('Unable to load product details.');
                        this._router.navigate([this.base_route]);
                    }
                    this.form.patchValue(product);
                    this.loading = '';
                }
            })
        );
    }

    public async newCategory() {
        this.form.patchValue({ category_id: this.current_category });
        const category = await this._state.editCategory();
        if (!category) return;
        this.new_category.next(category);
        this.form.patchValue({ category_id: category.id });
    }

    public async save() {
        if (!this.form.valid) return;
        this.loading = 'Saving Product...';
        const data = this.form.value;
        const item = await saveAssetGroup(data as any)
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(`Error saving Product: ${e.message}`);
                throw e;
            });
        this.form.reset();
        this.loading = '';
        this._state.postChange();
        this._router.navigate([this.base_route, 'view', item.id]);
    }
}
