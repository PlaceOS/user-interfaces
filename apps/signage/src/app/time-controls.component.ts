import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal, viewChild } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler } from '@placeos/common';

import { mockTimeState, setMockTime } from './media-helpers';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';

@Component({
    selector: 'time-controls',
    template: `
        <button
            matRipple
            customTooltip
            [content]="time_template"
            (click)="edit()"
            class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-full border px-4 py-2 shadow-sm"
            [class.border-warning]="mock_active() || has_changes()"
            [class.bg-warning]="has_changes()"
            [class.text-warning-content]="has_changes()"
        >
            <div class="pl-2">{{ time() | date: 'dd MMM, HH:mm' }}</div>
            @if (mock_active() && speed() !== 1) {
                <div
                    class="bg-info text-info-content rounded-full px-2 py-0.5 font-mono text-xs"
                >
                    {{ speed_label() }}
                </div>
            }
            @if (has_changes()) {
                <div
                    class="bg-warning-content text-warning rounded-full px-2 py-0.5 text-xs font-medium"
                >
                    Unsaved
                </div>
            }
            <icon class="text-2xl">event</icon>
        </button>
        <ng-template #time_template>
            <div class="p-2">
                <div
                    class="border-base-300 bg-base-100 w-[24rem] rounded-sm border p-2 shadow-sm"
                >
                    <div
                        class="bg-base-200 mb-2 flex h-12 items-center rounded-sm p-2"
                    >
                        <h3 class="flex-1 px-2 text-lg font-medium">
                            Debug Time
                        </h3>
                        @if (has_changes()) {
                            <div
                                class="bg-warning text-warning-content mr-2 rounded-full px-2 py-1 text-xs font-medium"
                            >
                                Unsaved changes
                            </div>
                        }
                        <button icon matRipple (click)="close()">
                            <icon>close</icon>
                        </button>
                    </div>
                    <div class="flex w-full gap-2">
                        <a-date-field
                            [from]="1"
                            [ngModel]="edited_time()"
                            (ngModelChange)="edited_time.set($event)"
                            class="no-subscript w-40 flex-1"
                        />
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-40 flex-1"
                        >
                            <input
                                matInput
                                type="time"
                                [ngModel]="edited_time_value()"
                                (ngModelChange)="setEditedTime($event)"
                            />
                        </mat-form-field>
                    </div>
                    <div class="my-2">
                        <div class="mb-1 px-1 text-xs font-medium opacity-60">
                            Progression
                        </div>
                        <div
                            class="border-base-300 bg-base-200 grid grid-cols-7 overflow-hidden rounded-sm border p-1"
                        >
                            @for (value of speed_options; track value) {
                                <button
                                    matRipple
                                    class="h-9 rounded-sm px-2 font-mono text-sm"
                                    [class.bg-base-100]="
                                        edited_speed() === value
                                    "
                                    [class.shadow-sm]="edited_speed() === value"
                                    [class.opacity-50]="
                                        edited_speed() !== value
                                    "
                                    (click)="edited_speed.set(value)"
                                >
                                    {{ speedLabel(value) }}
                                </button>
                            }
                        </div>
                    </div>
                    <div class="mb-2 grid grid-cols-3 gap-2">
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="shiftTime(-60)"
                        >
                            -1h
                        </button>
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="setNow()"
                        >
                            Now
                        </button>
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="shiftTime(60)"
                        >
                            +1h
                        </button>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button
                            btn
                            matRipple
                            class="inverse flex-1"
                            (click)="clear()"
                        >
                            {{ 'COMMON.CLEAR' | translate }}
                        </button>
                        <button btn matRipple class="flex-1" (click)="save()">
                            {{ 'COMMON.SAVE' | translate }}
                        </button>
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        FormsModule,
        CustomTooltipComponent,
        DateFieldComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class TimeControlsComponent extends AsyncHandler implements OnInit {
    public readonly time = signal(Date.now());
    public readonly edited_time = signal(Date.now());
    public readonly speed = signal(1);
    public readonly edited_speed = signal(1);
    public readonly mock_active = signal(false);
    public readonly speed_options = [0, 0.5, 1, 2, 4, 8, 16];
    public readonly edit_started = signal(false);
    public readonly edit_base_time = signal(Date.now());
    public readonly edit_base_speed = signal(1);
    public readonly speed_label = computed(() => this.speedLabel(this.speed()));
    public readonly edited_time_value = computed(() =>
        this.formatTimeInput(this.edited_time()),
    );
    public readonly has_changes = computed(() => {
        if (!this.edit_started()) return false;
        return (
            this.edited_time() !== this.edit_base_time() ||
            this.edited_speed() !== this.edit_base_speed()
        );
    });

    private _tooltip = viewChild(CustomTooltipComponent);

    public readonly close = () => this._tooltip()?.close();

    public ngOnInit() {
        this.refresh();
        this.interval('poll', () => this.refresh(), 1000);
    }

    public edit() {
        this.refresh();
        this.edited_time.set(this.time());
        this.edited_speed.set(this.speed());
        this.edit_base_time.set(this.time());
        this.edit_base_speed.set(this.speed());
        this.edit_started.set(true);
    }

    public setNow() {
        this.edited_time.set(Date.now());
    }

    public shiftTime(minutes: number) {
        this.edited_time.update((value) => value + minutes * 60 * 1000);
    }

    public setEditedTime(value: string) {
        const [hours, minutes] = value.split(':').map(Number);
        const date = new Date(this.edited_time());
        date.setHours(hours || 0, minutes || 0, 0, 0);
        this.edited_time.set(date.valueOf());
    }

    public clear() {
        setMockTime(0);
        this.refresh();
        this.edited_time.set(this.time());
        this.edited_speed.set(1);
        this.edit_base_time.set(this.time());
        this.edit_base_speed.set(1);
        this.edit_started.set(false);
        this._tooltip()?.close();
    }

    public save() {
        setMockTime(this.edited_time(), this.edited_speed());
        this.refresh();
        this.edit_base_time.set(this.time());
        this.edit_base_speed.set(this.speed());
        this.edit_started.set(false);
        this._tooltip()?.close();
    }

    public speedLabel(value: number) {
        return `⨯${value}`;
    }

    public formatTimeInput(value: number) {
        const date = new Date(value);
        const hours = `${date.getHours()}`.padStart(2, '0');
        const minutes = `${date.getMinutes()}`.padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    private refresh() {
        const state = mockTimeState();
        this.time.set(state.time);
        this.speed.set(state.speed);
        this.mock_active.set(state.active);
    }
}
