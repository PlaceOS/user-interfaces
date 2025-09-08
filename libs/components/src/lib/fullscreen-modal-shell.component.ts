import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'fullscreen-modal-shell,[fs-modal-shell]',
    template: `
        <div
            class="flex h-screen w-screen flex-col items-center overflow-auto bg-base-200"
        >
            <div
                class="fixed top-0 mx-auto h-screen w-[40rem] max-w-full border-x border-base-300 bg-base-100"
            ></div>
            <header
                class="sticky top-0 z-10 mx-auto my-2 flex h-14 w-full max-w-[39rem] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
            >
                <h2 class="text-xl font-medium capitalize">
                    {{ heading() }}
                </h2>
                @if (!close()?.length) {
                    @if (!loading()) {
                        <button icon matRipple mat-dialog-close>
                            <icon>close</icon>
                        </button>
                    }
                } @else {
                    @if (!loading()) {
                        <a icon matRipple [routerLink]="close()">
                            <icon>close</icon>
                        </a>
                    }
                }
            </header>
            <main
                class="z-0 mx-auto h-1/2 w-full max-w-[39rem] flex-1 space-y-8 p-2"
            >
                @if (!loading()) {
                    <ng-content></ng-content>
                    <div class="h-10 w-full"></div>
                } @else {
                    <div
                        class="flex h-1/2 w-full flex-1 flex-col items-center justify-center space-y-4 p-12"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p class="text-center opacity-50">{{ loading() }}</p>
                    </div>
                }
            </main>
            @if (!loading() && !hide_confirm()) {
                <footer
                    class="fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[39rem] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="confirm.emit()">
                        {{ confirm_text() || ('COMMON.SAVE' | translate) }}
                    </button>
                </footer>
            }
        </div>
    `,
    styles: [
        `
            main {
                scroll-margin-top: 60px;
            }
        `,
    ],
    imports: [
        TranslatePipe,
        MatProgressSpinnerModule,
        IconComponent,
        MatDialogModule,
        MatRippleModule,
        RouterModule,
    ],
})
export class FullscreenModalShellComponent {
    public readonly loading = input('');
    public readonly heading = input('Fullscreen Modal');
    public readonly confirm_text = input('');
    public readonly close = input<string[]>([]);
    public readonly hide_confirm = input(false);
    public readonly confirm = output();
    public readonly closed = output();
}
