import { Component, Input } from '@angular/core';
import { ApplicationLink } from '@placeos/common';

@Component({
    selector: 'status-overlay',
    template: `
        <div
            status-overlay
            class="fixed inset-0 flex flex-col bg-secondary items-center justify-center z-50 text-white"
        >
            <ng-container *ngIf="!loading; else load_state">
                <div
                    class="text-4xl rounded-full bg-base-100 mb-4"
                    [class.text-success]="!error"
                    [class.text-error]="error"
                >
                    <app-icon>{{ error ? 'close' : 'done' }}</app-icon>
                </div>
                <div class="text-center text-lg mb-4">
                    <ng-container *ngIf="!error; else error_msg">
                        <ng-content></ng-content>
                    </ng-container>
                </div>
                <div class="flex items-center space-x-2">
                    <a
                        btn
                        matRipple
                        class="w-32"
                        *ngFor="let link of links"
                        [routerLink]="[link.route]"
                    >
                        {{ link.name }}
                    </a>
                </div>
            </ng-container>
        </div>
        <ng-template #error_msg
            ><p error>{{ error }}</p></ng-template
        >
        <ng-template #load_state>
            <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
            <p loading class="text-center text-lg">{{ loading }}</p>
        </ng-template>
    `,
    styles: [``],
})
export class StatusOverlayComponent {
    /** Whether overlay is loading */
    @Input() public loading: string = '';
    /** Details about any errors that have occurred */
    @Input() public error: string = '';
    /** Links to display on success */
    @Input() public links: ApplicationLink[] = [];
}
