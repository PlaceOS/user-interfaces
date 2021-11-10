import { Component } from '@angular/core';

@Component({
    selector: 'asset-flow',
    template: `
        <div
            class="flex flex-col h-full max-w-full w-[768px] overflow-hidden px-2 py-4 mx-auto"
        >
            <div class="flex items-center px-4 space-x-4">
                <button mat-icon-button class="bg-white rounded-none border border-solid border-gray-300">
                    <app-icon>arrow_back</app-icon>
                </button>
                <span>Add Asset</span>
            </div>
            <mat-horizontal-stepper
                [linear]="false"
                labelPosition="bottom"
                class="flex-1 h-1/2"
            >
                <mat-step>
                    <ng-template matStepLabel>Details</ng-template>
                    <div class="bg-white border border-gray-200">
                        <div class="overflow-auto w-full">
                            <asset-flow-details></asset-flow-details>
                        </div>
                        <div
                            class="flex items-center justify-end border-t border-gray-300 p-2 space-x-2 w-full"
                        >
                            <a
                                button
                                mat-button
                                class="inverse"
                                [routerLink]="['/asset-manager', 'list']"
                            >
                                Cancel
</a>
                            <button mat-button matStepperNext>Next</button>
                        </div>
                    </div>
                </mat-step>
                <mat-step>
                    <ng-template matStepLabel>Specifications</ng-template>
                    <div class="bg-white border border-gray-200">
                        <div class="overflow-auto w-full">
                            <asset-flow-specs></asset-flow-specs>
                        </div>
                        <div
                            class="flex items-center justify-end border-t border-gray-200 p-2 space-x-2 w-full"
                        >
                            <button
                                mat-button
                                matStepperPrevious
                                class="inverse"
                            >
                                Back
                            </button>
                            <button mat-button matStepperNext>Next</button>
                        </div>
                    </div>
                </mat-step>
                <mat-step>
                    <ng-template matStepLabel>Purchase Information</ng-template>
                    <div class="bg-white border border-gray-200">
                        <div class="overflow-auto w-full">
                            <asset-flow-purchases></asset-flow-purchases>
                        </div>
                        <div
                            class="flex items-center justify-end border-t border-gray-200 p-2 space-x-2 w-full"
                        >
                            <button
                                mat-button
                                matStepperPrevious
                                class="inverse"
                            >
                                Back
                            </button>
                            <button mat-button matStepperNext>Next</button>
                        </div>
                    </div>
                </mat-step>
                <mat-step>
                    <ng-template matStepLabel>Consumable Assets</ng-template>
                    <div class="bg-white border border-gray-200">
                        <div class="overflow-auto w-full">
                            <asset-flow-consumables></asset-flow-consumables>
                        </div>
                        <div
                            class="flex items-center justify-end border-t border-gray-200 p-2 space-x-2 w-full"
                        >
                            <button
                                mat-button
                                matStepperPrevious
                                class="inverse"
                            >
                                Back
                            </button>
                            <button mat-button>Save</button>
                        </div>
                    </div>
                </mat-step>
            </mat-horizontal-stepper>
        </div>
    `,
    styles: [
        `
            mat-horizontal-stepper {
                background: none !important;
            }
        `,
    ],
})
export class AssetFlowComponent {}
