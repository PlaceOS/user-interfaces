import { Component, Injectable, inject, signal } from '@angular/core';

import { AsyncHandler } from '@placeos/common';
import { IconComponent } from '@placeos/components';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

const ICONS: Record<ToastType, string> = {
    success: 'check_circle',
    error: 'cancel',
    info: 'info',
    warning: 'warning',
};

const CLASSES: Record<ToastType, string> = {
    success: 'bg-success-light text-success border-success',
    error: 'bg-error-light text-error border-error',
    info: 'bg-info-light text-info border-info',
    warning: 'bg-warning-light text-warning border-warning',
};

@Injectable({ providedIn: 'root' })
export class ToastService extends AsyncHandler {
    private readonly _toasts = signal<Toast[]>([]);
    private _next_id = 0;

    public readonly toasts = this._toasts.asReadonly();

    /** Shows a toast. A repeat of a visible message restarts its timer instead of stacking. */
    public show(message: string, type: ToastType = 'info', duration = 3000) {
        const existing = this._toasts().find(
            (t) => t.message === message && t.type === type,
        );
        const id = existing?.id ?? ++this._next_id;
        if (!existing)
            this._toasts.update((list) => [...list, { id, message, type }]);
        this.timeout(`toast-${id}`, () => this.dismiss(id), duration);
    }

    public dismiss(id: number) {
        this.clearTimeout(`toast-${id}`);
        this._toasts.update((list) => list.filter((t) => t.id !== id));
    }

    public readonly iconFor = (type: ToastType) => ICONS[type];
    public readonly classFor = (type: ToastType) => CLASSES[type];
}

@Component({
    selector: 'map-studio-toasts',
    template: `
        <!-- Always rendered, so screen readers announce toasts as they arrive -->
        <div
            class="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col gap-2"
            role="status"
            aria-live="polite"
        >
            @for (toast of toasts.toasts(); track toast.id) {
                <div
                    class="pointer-events-auto flex max-w-90 min-w-52 items-center gap-2.5 rounded-lg border py-2.5 pr-2 pl-4 text-sm font-semibold shadow-md"
                    [class]="toasts.classFor(toast.type)"
                >
                    <icon class="text-lg" aria-hidden="true">
                        {{ toasts.iconFor(toast.type) }}
                    </icon>
                    <span class="flex-1">{{ toast.message }}</span>
                    <button
                        class="flex size-6 shrink-0 items-center justify-center rounded opacity-70 hover:opacity-100"
                        aria-label="Dismiss notification"
                        title="Dismiss"
                        (click)="toasts.dismiss(toast.id)"
                    >
                        <icon aria-hidden="true">close</icon>
                    </button>
                </div>
            }
        </div>
    `,
    imports: [IconComponent],
})
export class ToastsComponent {
    public readonly toasts = inject(ToastService);
}
