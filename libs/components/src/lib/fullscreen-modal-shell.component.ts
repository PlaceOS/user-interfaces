import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'fullscreen-modal-shell,[fs-modal-shell]',
    template: `
        <div
            class="fixed bottom-0 left-0 right-0 top-0 flex flex-col overflow-auto bg-base-100"
        >
            <header
                class="sticky top-0 z-10 mx-auto my-2 flex h-14 w-full max-w-[640px] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
            >
                <h2 class="text-xl font-medium capitalize">
                    {{ heading }}
                </h2>
                @if (!close?.length) {
                    <button icon matRipple mat-dialog-close *ngIf="!loading">
                        <icon>close</icon>
                    </button>
                } @else {
                    <a icon matRipple [routerLink]="close" *ngIf="!loading">
                        <icon>close</icon>
                    </a>
                }
            </header>
            <main
                class="z-0 mx-auto h-1/2 w-full max-w-[640px] flex-1 space-y-8 px-4 py-2"
            >
                <ng-container *ngIf="!loading; else load_state">
                    <ng-content></ng-content>
                    <div class="h-10 w-full"></div>
                </ng-container>
            </main>
            <footer
                class="fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2"
                *ngIf="!loading && !hide_confirm"
            >
                <button btn matRipple class="w-32" (click)="confirm.emit()">
                    {{ confirm_text || ('COMMON.SAVE' | translate) }}
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <div
                class="flex h-1/2 w-full flex-1 flex-col items-center justify-center space-y-4 p-12"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="text-center opacity-50">{{ loading }}</p>
            </div>
        </ng-template>
    `,
    standalone: false,
})
export class FullscreenModalShellComponent {
    @Input() public loading = '';
    @Input() public heading = 'Fullscreen Modal';
    @Input() public confirm_text = '';
    @Input() public close: string[] = [];
    @Input() public hide_confirm = false;
    @Output() public confirm = new EventEmitter();
}
