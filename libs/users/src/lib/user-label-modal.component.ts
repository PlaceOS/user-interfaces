import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { UserDetails, UserLabelComponent } from './user-label.component';

import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { PrintableComponent } from 'libs/components/src/lib/printable.component';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';

interface UserLabelSettings {
    scale: number;
    width: number;
    height: number;
}

@Component({
    selector: `user-label-modal`,
    template: `
        <div
            class="relative flex h-screen w-screen flex-col items-center space-y-4 overflow-auto bg-base-200 print:hidden"
        >
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2 border border-base-300 bg-base-100"
            >
                <icon>close</icon>
            </button>
            <div class="rounded-lg border border-base-300 bg-base-100 p-2">
                <user-label
                    [user]="details"
                    [width]="width()"
                    [height]="height()"
                    [style.font-size]="scale() + 'mm'"
                />
                <div printable class="print-only">
                    <user-label
                        [user]="details"
                        [width]="width()"
                        [height]="height()"
                        [style.font-size]="scale() + 'mm'"
                    />
                </div>
            </div>
            <div class="rounded-lg border border-base-300 bg-base-100">
                <div class="space-y-4 p-4">
                    <h3 class="text-xl font-medium">Label Properties</h3>
                    <div class="">
                        <label>Unit Size</label>
                        <a-counter
                            [(ngModel)]="scale"
                            [min]="1"
                            [step]="0.1"
                            [render_fn]="format_mm"
                        />
                    </div>
                    <div class="flex space-x-4">
                        <div class="">
                            <label>Width</label>
                            <a-counter
                                [(ngModel)]="width"
                                [min]="1"
                                [max]="100"
                                [step]="1"
                            />
                        </div>
                        <div class="">
                            <label>Height</label>
                            <a-counter
                                [(ngModel)]="height"
                                [min]="1"
                                [max]="100"
                                [step]="1"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 class="font-medium">Output size</h3>
                        <div class="flex space-x-4 p-2">
                            <div class="">
                                <label>Width:</label>
                                {{ format_mm(width() * scale()) }}
                            </div>
                            <div class="">
                                <label>Height:</label>
                                {{ format_mm(height() * scale()) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex justify-end border-t border-base-300 px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="print()">
                        Print
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        UserLabelComponent,
        MatDialogModule,
        FormsModule,
        MatRippleModule,
        CounterComponent,
        IconComponent,
        PrintableComponent,
    ],
})
export class UserLabelModalComponent extends AsyncHandler implements OnInit {
    private readonly STORAGE_KEY = 'PlaceOS.User.LabelSettings';

    public readonly details: UserDetails = inject(MAT_DIALOG_DATA);
    public readonly scale = signal(4);
    public readonly width = signal(25);
    public readonly height = signal(15);

    ngOnInit() {
        this.loadSettings();
    }

    public readonly format_mm = (value: number) =>
        `${Math.floor(value * 10) / 10}mm`;

    public readonly print = () => {
        this.saveSettings();
        this.timeout('print', () => window.print());
    };

    private loadSettings(): void {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                const settings: UserLabelSettings = JSON.parse(stored);
                this.scale.set(settings.scale);
                this.width.set(settings.width);
                this.height.set(settings.height);
            }
        } catch (error) {
            console.warn(
                'Failed to load user label settings from localStorage:',
                error,
            );
        }
    }

    private saveSettings(): void {
        try {
            const settings: UserLabelSettings = {
                scale: this.scale(),
                width: this.width(),
                height: this.height(),
            };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
        } catch (error) {
            console.warn(
                'Failed to save user label settings to localStorage:',
                error,
            );
        }
    }
}
