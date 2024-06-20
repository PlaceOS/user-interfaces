import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncHandler, DialogEvent } from '@placeos/common';
import { SpacesService } from '@placeos/spaces';
import { addHours, startOfHour } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { DesksStateService } from '../desks/desks-state.service';

@Component({
    selector: 'points-asset-modal',
    template: `
        <header>
            <h2 class="text-lg">
                {{ form?.value?.id ? 'Edit' : 'New' }} Points Asset
            </h2>
        </header>
        <main
            class="min-w-[24rem] overflow-hidden"
            *ngIf="form"
            [formGroup]="form"
        >
            <section class="p-2">
                <div class="flex items-center">
                    <label class="w-24">Asset Type</label>
                    <mat-form-field
                        appearance="outline"
                        class="flex-1 h-[3.25rem]"
                    >
                        <mat-select
                            formControlName="type"
                            placeholder="Select asset type"
                        >
                            <mat-option value="space">Space</mat-option>
                            <mat-option value="desk">Desk</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex items-center">
                    <label class="w-24">Asset</label>
                    <mat-form-field
                        appearance="outline"
                        class="flex-1 h-[3.25rem]"
                    >
                        <app-icon
                            matPrefix
                            class="text-2xl"
                            [class.opacity-30]="!form.get('type').value"
                            >search</app-icon
                        >
                        <input
                            matInput
                            formControlName="name"
                            placeholder="Search for asset..."
                            [matAutocomplete]="auto"
                        />
                        <mat-spinner
                            *ngIf="loading"
                            matSuffix
                            [diameter]="32"
                        ></mat-spinner>
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        <mat-option
                            *ngFor="let option of asset_options | async"
                            [value]="option?.display_name || option?.name"
                        >
                            {{ option?.display_name || option?.name }}
                        </mat-option>
                        <mat-option
                            [disabled]="true"
                            *ngIf="!(asset_options | async)?.length"
                        >
                            No matching options
                        </mat-option>
                    </mat-autocomplete>
                </div>
            </section>
            <section class="border-t border-base-200 p-2">
                <div class="flex items-center">
                    <label class="flex-1">Standard hourly rate</label>
                    <a-counter
                        class="border border-base-200 rounded"
                        formControlName="unit_price"
                        [min]="500"
                        [max]="80000"
                        [step]="500"
                        [render_fn]="renderPrice"
                    ></a-counter>
                </div>
                <div class="">
                    <h2>Rate Rules</h2>
                    <div>
                        <div
                            rule
                            class="flex items-center"
                            *ngFor="
                                let rule of form.get('custom_rates')?.value ||
                                    []
                            "
                        >
                            <div
                                class="flex items-center flex-1 w-1/2 space-x-2"
                            >
                                <mat-form-field
                                    appearance="outline"
                                    class="flex-2 h-[3.25rem] w-32"
                                >
                                    <mat-select
                                        [(ngModel)]="rule.type"
                                        [ngModelOptions]="{ standalone: true }"
                                    >
                                        <mat-option value="before">
                                            Before
                                        </mat-option>
                                        <mat-option value="between">
                                            Between
                                        </mat-option>
                                        <mat-option value="after">
                                            After
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                                <a-time-field
                                    class="flex-1 mt-2 w-40"
                                    [(ngModel)]="rule.first"
                                    [ngModelOptions]="{ standalone: true }"
                                ></a-time-field>
                                <a-time-field
                                    class="flex-1 mt-2 w-40"
                                    [(ngModel)]="rule.second"
                                    [from]="rule.first"
                                    [ngModelOptions]="{ standalone: true }"
                                    *ngIf="rule.type === 'between'"
                                ></a-time-field>
                            </div>
                            <span class="mx-2">&#64;</span>
                            <a-counter
                                class="border border-base-200 rounded"
                                [(ngModel)]="rule.rate"
                                [ngModelOptions]="{ standalone: true }"
                                [min]="0"
                                [max]="300"
                                [step]="5"
                                [render_fn]="renderPercent"
                            ></a-counter>
                        </div>
                    </div>
                    <button
                        btn
                        matRipple
                        class="clear w-full"
                        (click)="newRule()"
                    >
                        <div class="flex items-center justify-center w-full">
                            <app-icon class="text-lg">add</app-icon>
                            <span class="underline">Add new rule</span>
                        </div>
                    </button>
                </div>
            </section>
            <section class="border-t border-base-200 p-2">
                <div class="flex items-center">
                    <label>Accept Points?</label>
                    <mat-checkbox
                        formControlName="accept_points"
                    ></mat-checkbox>
                </div>
                <div class="flex items-center">
                    <label class="flex-1">Discount Cap</label>
                    <a-counter
                        class="border border-base-200 rounded"
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
            class="flex items-center justify-end p-2 space-x-2 border-t border-base-200"
        >
            <button btn matRipple mat-dialog-close class="inverse w-32">
                Cancel
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!form.value.name"
                (click)="save()"
            >
                Save
            </button>
        </footer>
    `,
    styles: [
        `
            label {
                width: auto;
                min-width: 0;
                margin: 0 1rem 0 0;
            }
        `,
    ],
})
export class PointsAssetModalComponent extends AsyncHandler {
    @Output() public event = new EventEmitter<DialogEvent>();

    public form = new FormGroup({
        id: new FormControl(this._data.asset?.id || ''),
        asset_id: new FormControl(this._data.asset?.asset_id || ''),
        name: new FormControl(this._data.asset?.name || ''),
        type: new FormControl(this._data.asset?.type || ''),
        accept_points: new FormControl(
            this._data.asset?.accept_points ?? false
        ),
        discount_cap: new FormControl(this._data.asset?.discount_cap || 50),
        unit_price: new FormControl(this._data.asset?.unit_price || 1000),
        custom_rates: new FormControl(this._data.asset?.custom_rates || []),
    });

    public loading: boolean;

    public readonly asset_options = combineLatest([
        this.form.valueChanges,
        this._spaces.list,
        this._desks.desks,
    ]).pipe(
        map(([{ type, name }, spaces, desks]) => {
            this.loading = true;
            const search = (name || '').toLowerCase();
            return !type
                ? []
                : type === 'space'
                ? spaces.filter((_) => _.name.toLowerCase().includes(search))
                : desks.filter((_) => _.name.toLowerCase().includes(search));
        }),
        tap(() => (this.loading = false)),
        shareReplay(1)
    );

    constructor(
        private _spaces: SpacesService,
        private _desks: DesksStateService,
        @Inject(MAT_DIALOG_DATA) private _data: { asset?: any }
    ) {
        super();
        this._desks.setFilters({ zones: ['All'] });
        this.subscription(
            'type_change',
            this.form.get('type').valueChanges.subscribe((v) => {
                const field = this.form.get('name');
                v ? field.enable() : field.disable();
            })
        );
    }

    public renderPrice(value: number = 0) {
        return `$${(value / 100)?.toFixed(2)}`;
    }

    public renderPercent(value: number = 0) {
        return `${value}%`;
    }

    public newRule() {
        this.form.get('custom_rates').setValue([
            ...this.form.get('custom_rates').value,
            {
                type: 'before',
                first: startOfHour(new Date()),
                second: addHours(startOfHour(new Date()), 1),
                rate: 100,
            },
        ]);
    }

    public save() {
        this.event.emit({ reason: 'done', metadata: { ...this.form.value } });
    }
}
