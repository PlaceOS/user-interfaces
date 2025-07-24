import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, viewChild } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler } from '@placeos/common';

import { setMockTime, time } from './media-helpers';

import { FormsModule } from '@angular/forms';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { SettingsToggleComponent } from '../../../../libs/components/src/lib/settings-toggle.component';

@Component({
    selector: 'time-controls',
    template: `
        <button
            matRipple
            customTooltip
            [content]="time_template"
            (click)="edited_time.set(time())"
            class="flex items-center space-x-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 shadow"
        >
            <div class="pl-2">{{ time() | date: 'dd MMM, HH:mm' }}</div>
            <icon class="text-2xl">event</icon>
        </button>
        <ng-template #time_template>
            <div class="p-2">
                <div
                    class="rounded border border-base-300 bg-base-100 p-2 shadow"
                >
                    <div
                        class="mb-2 flex h-12 items-center rounded bg-base-200 p-2"
                    >
                        <h3 class="flex-1 px-2 text-lg font-medium">
                            Set Time
                        </h3>
                        <button icon matRipple (click)="close()">
                            <icon>close</icon>
                        </button>
                    </div>
                    <div class="flex h-14 space-x-2">
                        <a-date-field
                            [ngModel]="edited_time()"
                            (ngModelChange)="edited_time.set($event)"
                            class="w-40 flex-1"
                        />
                        <a-time-field
                            [ngModel]="edited_time()"
                            (ngModelChange)="edited_time.set($event)"
                            class="w-40 flex-1"
                        />
                    </div>
                    <settings-toggle [(ngModel)]="is_static" class="mb-2 w-full"
                        >Static</settings-toggle
                    >
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
        TimeFieldComponent,
        TranslatePipe,
        SettingsToggleComponent,
    ],
})
export class TimeControlsComponent extends AsyncHandler implements OnInit {
    public readonly time = signal(Date.now());
    public readonly edited_time = signal(Date.now());
    public is_static = false;

    private _tooltip = viewChild(CustomTooltipComponent);

    public readonly close = () => this._tooltip()?.close();

    public ngOnInit() {
        this.interval('poll', () => this.time.set(time()), 10 * 1000);
    }

    public clear() {
        setMockTime(0);
        this.edited_time.set(Date.now());
        this.time.set(Date.now());
        this._tooltip()?.close();
    }

    public save() {
        setMockTime(this.edited_time(), !this.is_static);
        this.time.set(this.edited_time());
        this._tooltip()?.close();
    }
}
