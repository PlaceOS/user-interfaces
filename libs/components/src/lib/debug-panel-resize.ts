import { DOCUMENT } from '@angular/common';
import { computed, inject, signal } from '@angular/core';

/** Resize a right-docked panel through its left edge. */
export class DebugPanelResize {
    private readonly _document = inject(DOCUMENT);
    private _start_x = 0;
    private _start_width = 0;

    public readonly min_width = 320;
    public readonly width;
    public readonly panel_width;

    constructor(
        initial_width: number,
        private readonly _max_vw: number,
    ) {
        this.width = signal(initial_width);
        this.panel_width = computed(
            () => `min(${this.width()}px, ${this._max_vw}vw)`,
        );
    }

    public maxWidth(): number {
        return (
            (this._document.documentElement.clientWidth * this._max_vw) / 100
        );
    }

    public start(event: PointerEvent): void {
        if (event.button !== 0 || !event.isPrimary) return;
        const handle = event.currentTarget as HTMLElement;
        this._start_x = event.clientX;
        this._start_width = handle.parentElement.getBoundingClientRect().width;
        handle.setPointerCapture(event.pointerId);
        event.preventDefault();
    }

    public move(event: PointerEvent): void {
        const handle = event.currentTarget as HTMLElement;
        if (!handle.hasPointerCapture(event.pointerId)) return;
        this.setWidth(this._start_width + this._start_x - event.clientX);
    }

    public end(event: PointerEvent): void {
        const handle = event.currentTarget as HTMLElement;
        if (handle.hasPointerCapture(event.pointerId)) {
            handle.releasePointerCapture(event.pointerId);
        }
    }

    public onKeydown(event: KeyboardEvent): void {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        const current_width = Math.min(this.width(), this.maxWidth());
        this.setWidth(current_width + (event.key === 'ArrowLeft' ? 16 : -16));
    }

    private setWidth(width: number): void {
        this.width.set(
            Math.min(this.maxWidth(), Math.max(this.min_width, width)),
        );
    }
}
