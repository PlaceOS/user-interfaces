import { Component } from '@angular/core';
import { notifyError } from '@placeos/common';
import { take } from 'rxjs/operators';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-flow',
    template: `
        <ng-container *ngIf="!loading; else load_state">
            <div
                class="flex flex-col h-full max-w-full w-[48rem] overflow-hidden px-2 py-4 mx-auto"
                *ngIf="!success; else success_state"
            >
                <div class="flex items-center px-4 space-x-4">
                    <a
                        icon
                        matRipple
                        class="bg-white rounded-none border border-solid border-gray-300"
                        [routerLink]="['/asset-manager', 'list']"
                        (click)="clearActiveAsset()"
                    >
                        <app-icon>arrow_back</app-icon>
                    </a>
                    <span>{{ form?.value?.id ? 'Edit' : 'Add' }} Asset</span>
                </div>
                <mat-horizontal-stepper
                    [linear]="false"
                    labelPosition="bottom"
                    class="flex-1 h-1/2"
                >
                    <mat-step>
                        <ng-template matStepLabel>Details</ng-template>
                        <div
                            class="bg-white border border-gray-200 flex flex-col"
                        >
                            <div
                                class="overflow-auto w-full flex-1 h-1/2 max-h-[65vh]"
                            >
                                <asset-flow-details></asset-flow-details>
                            </div>
                            <div
                                class="flex items-center justify-end border-t border-gray-300 p-2 space-x-2 w-full"
                            >
                                <a
                                    button
                                    btn
                                    matRipple
                                    class="inverse w-32"
                                    [routerLink]="['/asset-manager', 'list']"
                                    (click)="clearActiveAsset()"
                                >
                                    Cancel
                                </a>
                                <button
                                    btn
                                    matRipple
                                    matStepperNext
                                    class="w-32"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </mat-step>
                    <mat-step>
                        <ng-template matStepLabel>Specifications</ng-template>
                        <div
                            class="bg-white border border-gray-200 flex flex-col"
                        >
                            <div
                                class="overflow-auto w-full flex-1 h-1/2 max-h-[65vh]"
                            >
                                <asset-flow-specs></asset-flow-specs>
                            </div>
                            <div
                                class="flex items-center justify-end border-t border-gray-200 p-2 space-x-2 w-full"
                            >
                                <button
                                    btn
                                    matRipple
                                    matStepperPrevious
                                    class="inverse w-32"
                                >
                                    Back
                                </button>
                                <button
                                    btn
                                    matRipple
                                    matStepperNext
                                    class="w-32"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </mat-step>
                    <mat-step>
                        <ng-template matStepLabel
                            >Purchase Information</ng-template
                        >
                        <div
                            class="bg-white border border-gray-200 flex flex-col"
                        >
                            <div
                                class="overflow-auto w-full flex-1 h-1/2 max-h-[65vh]"
                            >
                                <asset-flow-purchases></asset-flow-purchases>
                            </div>
                            <div
                                class="flex items-center justify-end border-t border-gray-200 p-2 space-x-2 w-full"
                            >
                                <button
                                    btn
                                    matRipple
                                    matStepperPrevious
                                    class="inverse w-32"
                                >
                                    Back
                                </button>
                                <button
                                    btn
                                    matRipple
                                    matStepperNext
                                    class="w-32"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </mat-step>
                    <mat-step>
                        <ng-template matStepLabel
                            >Consumable Assets</ng-template
                        >
                        <div
                            class="bg-white border border-gray-200 flex flex-col"
                        >
                            <div
                                class="overflow-auto w-full flex-1 h-1/2 max-h-[65vh]"
                            >
                                <asset-flow-consumables></asset-flow-consumables>
                            </div>
                            <div
                                class="flex items-center justify-end border-t border-gray-200 p-2 space-x-2 w-full"
                            >
                                <button
                                    btn
                                    matRipple
                                    matStepperPrevious
                                    class="inverse w-32"
                                >
                                    Back
                                </button>
                                <button
                                    btn
                                    matRipple
                                    class="w-32"
                                    (click)="save()"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </mat-step>
                </mat-horizontal-stepper>
            </div>
        </ng-container>
        <ng-template #load_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Saving asset...</p>
            </div>
        </ng-template>
        <ng-template #success_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center space-y-2"
            >
                <div
                    class="w-[48rem] bg-white rounded p-8 relative space-y-2 flex flex-col items-center"
                >
                    <h2 class="text-2xl">New Asset Created</h2>
                    <img class="w-60" src="assets/asset_success.svg" />
                    <p class="w-3/5 pb-4 text-center">
                        An asset has been created called “{{ data.name }}” and
                        has been added to the {{ data.category }} category.
                    </p>
                    <div class="flex items-center justify-center space-x-2">
                        <button
                            matRipple
                            class="inverse w-32"
                            (click)="success = false"
                        >
                            Add Asset
                        </button>
                        <a
                            button
                            btn
                            matRipple
                            class="w-32"
                            [routerLink]="['/asset-manager', 'view', id]"
                        >
                            View Asset
                        </a>
                    </div>
                    <a
                        icon
                        matRipple
                        class="absolute top-1 right-1 !m-0 opacity-30 hover:opacity-100"
                        [routerLink]="['/asset-manager', 'list']"
                    >
                        <app-icon>close</app-icon>
                    </a>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            mat-horizontal-stepper {
                background: none !important;
            }
        `,
    ],
})
export class AssetFlowComponent {
    public loading = false;
    public success = false;
    public data = {};
    public id = '';

    public readonly form = this._state.form;
    public readonly clearActiveAsset = () => this._state.clearActiveAsset();

    public async save() {
        this.loading = true;
        this.data = this._state.form.value;
        this.id = await this._state.postForm().catch((_) => {
            notifyError(`Error saving asset details. ${JSON.stringify(_)}`);
            throw _;
        });
        this.loading = false;
        if (this.id) this.success = true;
        else notifyError('Some form fields are invalid');
    }

    constructor(private _state: AssetManagerStateService) {}

    public async ngOnInit() {
        const options = await this._state.options.pipe(take(1)).toPromise();
        if (options.active_asset) {
            const asset = await this._state.active_asset
                .pipe(take(1))
                .toPromise();
            this._state.form.patchValue(asset);
        }
    }
}
