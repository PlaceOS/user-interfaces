import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'fullscreen-modal-shell,[fs-modal-shell]',
    template: `
        <div
            class="fixed top-0 left-0 right-0 bottom-0 bg-base-100 flex flex-col overflow-auto"
        >
            <header
                class="sticky flex items-center justify-between top-0 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded"
            >
                <h2 class="text-xl font-medium capitalize">
                    {{ heading }}
                </h2>
                @if (!close?.length) {
                    <button icon matRipple mat-dialog-close *ngIf="!loading">
                        <app-icon>close</app-icon>
                    </button>
                } @else {
                    <a icon matRipple [routerLink]="close" *ngIf="!loading">
                        <app-icon>close</app-icon>
                    </a>
                }
            </header>
            <main
                class="h-1/2 flex-1 px-4 py-2 space-y-8 z-0 max-w-[640px] w-full mx-auto"
            >
                <ng-content></ng-content>
                <div class="w-full h-10"></div>
            </main>
            <footer
                class="fixed bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 mx-auto my-2 max-w-[640px] w-full border-none z-10 bg-base-200 rounded flex items-center justify-end"
                *ngIf="!loading && !hide_confirm"
            >
                <button btn matRipple class="w-32" (click)="confirm.emit()">
                    {{ confirm_text || ('COMMON.SAVE' | translate) }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <div
                class="w-full flex-1 h-1/2 flex flex-col items-center justify-center p-12"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="text-center">{{ loading }}</p>
            </div>
        </ng-template>
    `,
    standalone: false
})
export class FullscreenModalShellComponent {
    @Input() public loading = '';
    @Input() public heading = 'Fullscreen Modal';
    @Input() public confirm_text = '';
    @Input() public close: string[] = [];
    @Input() public hide_confirm = false;
    @Output() public confirm = new EventEmitter();
}
