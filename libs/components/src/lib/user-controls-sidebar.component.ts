import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from './icon.component';
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
            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
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
                        class="bg-base-100 relative h-full w-80 max-w-[100vw] overflow-auto pt-4 shadow-xl transition-transform duration-200 ease-out"
                        [class.translate-x-0]="is_open()"
                        [class.translate-x-full]="!is_open()"
                    >
                        <user-controls [sidebar]="true"></user-controls>
                        <button
                            icon
                            matRipple
                            type="button"
                            class="hover:bg-base-200 absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full"
                            (click)="close()"
                        >
                            <icon class="text-2xl">close</icon>
                        </button>
                    </div>
                </div>
            </div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, IconComponent, UserControlsComponent],
})
export class UserControlsSidebarComponent {
    private _close_timeout: ReturnType<typeof setTimeout> | null = null;

    public readonly is_open = signal(false);
    public readonly is_rendered = signal(false);

    public open(): void {
        if (this._close_timeout) {
            clearTimeout(this._close_timeout);
            this._close_timeout = null;
        }
        this.is_rendered.set(true);
        requestAnimationFrame(() => this.is_open.set(true));
    }

    public close(): void {
        this.is_open.set(false);
        this._close_timeout = setTimeout(() => {
            this.is_rendered.set(false);
            this._close_timeout = null;
        }, 200);
    }

    @HostListener('document:keydown.escape')
    public onEscape(): void {
        if (this.is_open()) this.close();
    }
}
