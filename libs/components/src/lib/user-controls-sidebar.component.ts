import { CdkTrapFocus } from '@angular/cdk/a11y';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
    Component,
    ElementRef,
    HostListener,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';
import { UserControlsComponent } from './user-controls.component';

@Component({
    selector: 'user-controls-sidebar',
    template: `
        <button
            icon
            matRipple
            avatar
            type="button"
            name="user-controls"
            aria-haspopup="dialog"
            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
            [attr.aria-label]="'COMMON.USER_CONTROLS' | translate"
            [attr.aria-expanded]="is_open()"
            (click)="open()"
        >
            <ng-content>
                <icon class="text-2xl">person</icon>
            </ng-content>
        </button>
        @if (is_rendered()) {
            <div class="fixed inset-0 z-9999 overflow-hidden">
                <button
                    type="button"
                    aria-label="Close user controls"
                    class="absolute inset-0 bg-black transition-opacity duration-200"
                    [class.opacity-50]="is_open()"
                    [class.opacity-0]="!is_open()"
                    (click)="close()"
                ></button>
                <div class="absolute inset-y-0 right-0 flex max-w-full">
                    <div
                        #panel
                        role="dialog"
                        aria-modal="true"
                        tabindex="-1"
                        cdkTrapFocus
                        class="bg-base-100 relative h-full w-80 max-w-[100vw] overflow-auto pt-[calc(env(safe-area-inset-top)+1rem)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] shadow-xl transition-transform duration-200 ease-out focus:outline-hidden"
                        [attr.aria-label]="'COMMON.USER_CONTROLS' | translate"
                        [class.translate-x-0]="is_open()"
                        [class.translate-x-full]="!is_open()"
                    >
                        <user-controls [sidebar]="true"></user-controls>
                        <button
                            icon
                            default
                            matRipple
                            type="button"
                            class="absolute top-[calc(env(safe-area-inset-top)+0.5rem)] right-[calc(env(safe-area-inset-right)+0.5rem)]"
                            [attr.aria-label]="'COMMON.CLOSE' | translate"
                            (click)="close()"
                        >
                            <icon class="text-2xl">close</icon>
                        </button>
                    </div>
                </div>
            </div>
        }
    `,
    imports: [
        CdkTrapFocus,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        UserControlsComponent,
    ],
})
export class UserControlsSidebarComponent {
    private _overlay_container = inject(OverlayContainer);
    private _close_timeout: ReturnType<typeof setTimeout> | null = null;
    /** Element that had focus before the sidebar opened */
    private _return_focus: HTMLElement | null = null;
    private readonly _panel = viewChild<ElementRef<HTMLElement>>('panel');

    public readonly is_open = signal(false);
    public readonly is_rendered = signal(false);

    /** Show the sidebar and move keyboard focus into it */
    public open(): void {
        if (this.is_open()) return;
        if (this._close_timeout) {
            clearTimeout(this._close_timeout);
            this._close_timeout = null;
        }
        this._return_focus = document.activeElement as HTMLElement;
        this.is_rendered.set(true);
        requestAnimationFrame(() => {
            this.is_open.set(true);
            // The panel is still off screen, so do not scroll to it
            this._panel()?.nativeElement.focus({ preventScroll: true });
        });
    }

    /** Hide the sidebar and give focus back to the element that opened it */
    public close(): void {
        this.is_open.set(false);
        this._return_focus?.focus();
        this._return_focus = null;
        this._close_timeout = setTimeout(() => {
            this.is_rendered.set(false);
            this._close_timeout = null;
        }, 200);
    }

    /**
     * Escape closes only the top layer. Menus, dialogs and tooltips over the
     * sidebar handle the key first, so leave it to them.
     */
    @HostListener('document:keydown.escape', ['$event'])
    public onEscape(event: Event): void {
        if (!this.is_open() || event.defaultPrevented) return;
        const overlays = this._overlay_container.getContainerElement();
        if (overlays.contains(event.target as Node)) return;
        this.close();
    }
}
