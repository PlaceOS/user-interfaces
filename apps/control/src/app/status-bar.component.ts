import { Component } from '@angular/core';

@Component({
    selector: 'control-status-bar',
    template: `
        <div
            recording
            class="text-xs divide-x divide-gray-100 text-white flex items-center"
        >
            <div class="h-12 p-2">Echo 360<br />Recording</div>
            <div class="h-12 w-12 flex items-center justify-center">
                <button mat-icon-button class="rounded-none">
                    <app-icon>fiber_manual_record</app-icon>
                </button>
            </div>
            <div class="h-12 w-12 flex items-center justify-center">
                <button mat-icon-button class="rounded-none">
                    <app-icon>pause</app-icon>
                </button>
            </div>
            <div class="h-12 flex flex-col p-2">
                <div class="bg-error p-2 rounded uppercase">Recording</div>
            </div>
            <div class="h-12 p-2">
                <label>Remaining</label>
                <div class="">00:00:00</div>
            </div>
            <div class="h-12 p-2">
                <label>Next Recording</label>
                <div class="">00:00</div>
            </div>
        </div>
        <div class="flex-1"></div>
        <div class="flex items-center space-x-2 w-64 py-2 px-4">
            <button mat-icon-button><app-icon>volume_up</app-icon></button>
            <mat-slider white class="flex-1"></mat-slider>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ccc8;
                height: 3rem;
                overflow: hidden;
            }
        `,
    ],
})
export class ControlStatusBarComponent {}
