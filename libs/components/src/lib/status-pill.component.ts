import { Component, Input } from '@angular/core';

export type StatusValue = 'success' | 'warning' | 'error' | 'info' | 'neutral';

@Component({
    selector: 'status-pill',
    template: `
        <div
            class="flex items-center bg-opacity-30 rounded-2xl px-2 py-1 text-base space-x-2 font-medium text-black"
            [class.bg-success-light]="status === 'success'"
            [class.bg-warning-light]="status === 'warning'"
            [class.bg-error-light]="status === 'error'"
            [class.bg-info-light]="status === 'info'"
            [class.bg-base-200]="status === 'neutral'"
        >
            <div
                class="rounded-full h-5 w-5 flex items-center justify-center"
                [class.text-success]="status === 'success'"
                [class.text-warning]="status === 'warning'"
                [class.text-error]="status === 'error'"
                [class.text-info]="status === 'info'"
                [class.text-base-content]="status === 'neutral'"
                [class.opacity-40]="status === 'neutral'"
            >
                <app-icon class="text-2xl" [ngSwitch]="status">
                    <ng-container *ngSwitchCase="'success'">
                        check_circle
                    </ng-container>
                    <ng-container *ngSwitchCase="'error'">cancel</ng-container>
                    <ng-container *ngSwitchCase="'neutral'">block</ng-container>
                    <ng-container *ngSwitchCase="'info'">info</ng-container>
                    <ng-container *ngSwitchDefault>warning</ng-container>
                </app-icon>
            </div>
            <div
                [class.opacity-40]="status === 'neutral'"
                [class.text-base-content]="status === 'neutral'"
            >
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [``],
})
export class StatusPillComponent {
    @Input() public status: string;
}
