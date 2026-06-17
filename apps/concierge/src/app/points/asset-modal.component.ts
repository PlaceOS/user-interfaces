import {
    Component,
    EventEmitter,
    Output,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { disabled, form, FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { AsyncHandler, DialogEvent } from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { SpacesService } from '@placeos/events';
import { CounterComponent, TimeFieldComponent } from '@placeos/form-fields';
import { addHours, startOfHour } from 'date-fns';
import { DesksStateService } from '../desks/desks-state.service';

@Component({
    selector: 'points-asset-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (model().id
                        ? 'APP.CONCIERGE.POINTS_ASSETS_EDIT'
                        : 'APP.CONCIERGE.POINTS_ASSETS_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (form) {
            <main class="min-w-md overflow-hidden px-4 py-2">
                <div class="flex flex-col">
                    <label>{{ 'APP.CONCIERGE.POINTS_TYPE' | translate }}</label>
                    <mat-form-field appearance="outline" class="h-13 flex-1">
                        <mat-select
                            [formField]="form.type"
                            placeholder="Select asset type"
                        >
                            <mat-option value="space">{{
                                'RESOURCE.ROOM' | translate
                            }}</mat-option>
                            <mat-option value="desk">{{
                                'RESOURCE.DESK' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>{{ 'RESOURCE.ASSET' | translate }}</label>
                    <mat-form-field appearance="outline" class="h-13 flex-1">
                        <icon
                            matPrefix
                            class="text-2xl"
                            [class.opacity-30]="!model().type"
                            >search</icon
                        >
                        <input
                            matInput
                            [formField]="form.name"
                            [placeholder]="
                                'APP.CONCIERGE.POINTS_ASSETS_SEARCH' | translate
                            "
                            [matAutocomplete]="auto"
                        />
                        @if (loading()) {
                            <mat-spinner
                                matSuffix
                                [diameter]="32"
                            ></mat-spinner>
                        }
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (option of asset_options(); track option) {
                            <mat-option
                                [value]="
                                    $any(option)?.display_name || option?.name
                                "
                            >
                                {{ $any(option)?.display_name || option?.name }}
                            </mat-option>
                        }
                        @if (!asset_options().length) {
                            <mat-option [disabled]="true">
                                {{
                                    'APP.CONCIERGE.POINTS_ASSETS_SEARCH_EMPTY'
                                        | translate
                                }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                <div class="mb-4 flex items-center">
                    <settings-toggle
                        [label]="'APP.CONCIERGE.POINTS_ACCEPT' | translate"
                        [formField]="form.accept_points"
                        class="w-full"
                    ></settings-toggle>
                </div>
                <div class="mb-4 flex space-x-4">
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'APP.CONCIERGE.POINTS_STANDARD_RATE' | translate
                        }}</label>
                        <a-counter
                            class="w-full"
                            [formField]="form.unit_price"
                            [min]="500"
                            [max]="80000"
                            [step]="500"
                            [render_fn]="renderPrice"
                        ></a-counter>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'APP.CONCIERGE.POINTS_DISCOUNT_CAP' | translate
                        }}</label>
                        <a-counter
                            class="w-full"
                            [formField]="form.discount_cap"
                            [min]="0"
                            [max]="100"
                            [step]="5"
                            [render_fn]="renderPercent"
                        ></a-counter>
                    </div>
                </div>
                <div class="">
                    <label>{{
                        'APP.CONCIERGE.POINTS_RATE_RULES' | translate
                    }}</label>
                    <div>
                        @for (rule of model().custom_rates; track rule) {
                            <div rule class="flex items-center">
                                <div
                                    class="flex w-1/2 flex-1 items-center space-x-2"
                                >
                                    <mat-form-field
                                        appearance="outline"
                                        class="h-13 w-32 flex-2"
                                    >
                                        <mat-select
                                            [(ngModel)]="rule.type"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            <mat-option value="before">
                                                {{
                                                    'APP.CONCIERGE.POINTS_RATE_RULES_BEFORE'
                                                        | translate
                                                }}
                                            </mat-option>
                                            <mat-option value="between">
                                                {{
                                                    'APP.CONCIERGE.POINTS_RATE_RULES_BETWEEN'
                                                        | translate
                                                }}
                                            </mat-option>
                                            <mat-option value="after">
                                                {{
                                                    'APP.CONCIERGE.POINTS_RATE_RULES_AFTER'
                                                        | translate
                                                }}
                                            </mat-option>
                                        </mat-select>
                                    </mat-form-field>
                                    <a-time-field
                                        class="mt-2 w-40 flex-1"
                                        [(ngModel)]="rule.first"
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                    @if (rule.type === 'between') {
                                        <a-time-field
                                            class="mt-2 w-40 flex-1"
                                            [(ngModel)]="rule.second"
                                            [from]="rule.first"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></a-time-field>
                                    }
                                </div>
                                <span class="mx-2">&#64;</span>
                                <a-counter
                                    class="border-base-200 rounded-sm border"
                                    [(ngModel)]="rule.rate"
                                    [ngModelOptions]="{ standalone: true }"
                                    [min]="0"
                                    [max]="300"
                                    [step]="5"
                                    [render_fn]="renderPercent"
                                ></a-counter>
                            </div>
                        }
                    </div>
                    <button
                        btn
                        matRipple
                        class="clear w-full"
                        (click)="newRule()"
                    >
                        <div class="flex w-full items-center justify-center">
                            <icon class="text-lg">add</icon>
                            <span class="underline">{{
                                'APP.CONCIERGE.POINTS_RATE_RULES_NEW'
                                    | translate
                            }}</span>
                        </div>
                    </button>
                </div>
            </main>
        }
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t p-2"
        >
            <button
                btn
                matRipple
                class="w-32"
                [disabled]="!model().name"
                (click)="save()"
            >
                {{ 'COMMON.SAVE' | translate }}
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
    imports: [
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        CounterComponent,
        TimeFieldComponent,
        TimeFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        SettingsToggleComponent,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        FormField,
    ],
})
export class PointsAssetModalComponent extends AsyncHandler {
    private _spaces = inject(SpacesService);
    private _desks = inject(DesksStateService);
    private _data = inject<{
        asset?: any;
    }>(MAT_DIALOG_DATA);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly model = signal({
        id: (this._data.asset?.id || '') as string,
        asset_id: (this._data.asset?.asset_id || '') as string,
        name: (this._data.asset?.name || '') as string,
        type: (this._data.asset?.type || '') as string,
        accept_points: (this._data.asset?.accept_points ?? false) as boolean,
        discount_cap: (this._data.asset?.discount_cap || 50) as number,
        unit_price: (this._data.asset?.unit_price || 1000) as number,
        custom_rates: (this._data.asset?.custom_rates || []) as any[],
    });
    public readonly form = form(this.model, (p) => {
        // The asset name search is only usable once an asset type is chosen.
        disabled(p.name, ({ valueOf }) => !valueOf(p.type));
    });

    public readonly loading = signal(false);

    public readonly asset_options = computed(() => {
        const { type, name } = this.model();
        const spaces = this._spaces.list();
        const desks = this._desks.desks();
        const search = (name || '').toLowerCase();
        return !type
            ? []
            : type === 'space'
              ? spaces.filter((_) => _.name.toLowerCase().includes(search))
              : desks.filter((_) => _.name.toLowerCase().includes(search));
    });

    constructor() {
        super();
        this._desks.setFilters({ zones: ['All'] });
    }

    public renderPrice(value = 0) {
        return `$${(value / 100)?.toFixed(2)}`;
    }

    public renderPercent(value = 0) {
        return `${value}%`;
    }

    public newRule() {
        this.model.update((m) => ({
            ...m,
            custom_rates: [
                ...m.custom_rates,
                {
                    type: 'before',
                    first: startOfHour(new Date()),
                    second: addHours(startOfHour(new Date()), 1),
                    rate: 100,
                },
            ],
        }));
    }

    public save() {
        this.event.emit({ reason: 'done', metadata: { ...this.model() } });
    }
}
