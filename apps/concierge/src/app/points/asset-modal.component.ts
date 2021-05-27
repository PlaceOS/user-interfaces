import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { randomInt } from '@placeos/common';

@Component({
    selector: 'points-asset-modal',
    template: `
        <header>
            <h2>New Points Asset</h2>
        </header>
        <main class="min-w-[24rem] overflow-hidden" *ngIf="form" [formGroup]="form">
            <section class="p-2">
                <div class="flex items-center">
                    <label class="flex-1">Standard hourly rate</label>
                    <a-counter
                        class="border border-gray-200 rounded"
                        formControlName="unit_price"
                        [min]="500"
                        [max]="80000"
                        [step]="500"
                        [render_fn]="renderPrice"
                    ></a-counter>
                </div>
                <div class="">
                    <h2>Rate Rules</h2>
                    <div></div>
                </div>
            </section>
            <section class="border-t border-gray-200 p-2">
                <div class="flex items-center">
                    <label>Accept Points?</label>
                    <mat-checkbox
                        formControlName="accept_points"
                    ></mat-checkbox>
                </div>
                <div class="flex items-center">
                    <label class="flex-1">Discount Cap</label>
                    <a-counter
                        class="border border-gray-200 rounded"
                        formControlName="discount_cap"
                        [min]="0"
                        [max]="100"
                        [step]="5"
                        [render_fn]="renderPercent"
                    ></a-counter>
                </div>
            </section>
        </main>
        <footer
            class="flex items-center justify-center p-2 space-x-2 border-t border-gray-200"
        >
            <button mat-button mat-dialog-close class="inverse flex-1">
                Cancel
            </button>
            <button mat-button class="flex-1">Save</button>
        </footer>
    `,
    styles: [`
        label {
            width: auto;
            min-width: 0;
            margin: 0 1rem 0 0;
        }
    `],
})
export class PointsAssetModalComponent implements OnInit {
    public form: FormGroup;

    public renderPrice(value: number = 0) {
        return `$${(value / 100)?.toFixed(2)}`;
    }

    public renderPercent(value: number = 0) {
        return `${value}%`;
    }

    public ngOnInit() {
        this.form = new FormGroup({
            id: new FormControl(`PA-${randomInt(999_999_999)}`),
            name: new FormControl(''),
            type: new FormControl(''),
            accept_points: new FormControl(false),
            discount_cap: new FormControl(50),
            unit_price: new FormControl(1000),
            custom_rates: new FormControl([]),
        });
    }
}
