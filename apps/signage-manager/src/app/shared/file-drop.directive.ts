import { Directive, input, output, signal } from '@angular/core';

/** Whether a drag carries files from outside the page */
export function isFileDrag(event: DragEvent) {
    return Array.from(event.dataTransfer?.types || []).includes('Files');
}

/**
 * Accept files dragged onto an element. The element has the
 * `file-drop-over` class while files are over it.
 *
 * A drop it takes is marked handled with `preventDefault`, and still bubbles,
 * so a page-wide drop handler can tidy up and skip it.
 */
@Directive({
    selector: '[fileDrop]',
    host: {
        '(dragenter)': 'onDragEnter($event)',
        '(dragover)': 'onDragOver($event)',
        '(dragleave)': 'onDragLeave($event)',
        '(drop)': 'onDrop($event)',
        '[class.file-drop-over]': 'over()',
    },
})
export class FileDropDirective {
    /** Turns the drop target off, such as when the user cannot upload */
    public readonly disabled = input(false, { alias: 'fileDropDisabled' });
    /** The dropped files */
    public readonly fileDrop = output<File[]>();
    public readonly over = signal(false);
    /** Entering a child fires before leaving the parent, so count them */
    private _depth = 0;

    private _accepts(event: DragEvent) {
        return !this.disabled() && isFileDrag(event);
    }

    public onDragEnter(event: DragEvent) {
        if (!this._accepts(event)) return;
        event.preventDefault();
        this._depth += 1;
        this.over.set(true);
    }

    public onDragOver(event: DragEvent) {
        if (!this._accepts(event)) return;
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
        this.over.set(true);
    }

    public onDragLeave(event: DragEvent) {
        if (!this._accepts(event)) return;
        this._depth = Math.max(0, this._depth - 1);
        if (!this._depth) this.over.set(false);
    }

    public onDrop(event: DragEvent) {
        if (!this._accepts(event) || event.defaultPrevented) return;
        event.preventDefault();
        this._depth = 0;
        this.over.set(false);
        const files = Array.from(event.dataTransfer?.files || []);
        if (files.length) this.fileDrop.emit(files);
    }
}
