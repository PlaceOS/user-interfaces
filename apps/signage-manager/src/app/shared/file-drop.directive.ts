import { Directive, input, output, signal } from '@angular/core';

/** Drag events a `fileDrop` target took. Kept weakly, as each lives briefly */
const taken_drags = new WeakSet<Event>();

/** Whether a drag carries files from outside the page */
export function isFileDrag(event: DragEvent) {
    return Array.from(event.dataTransfer?.types || []).includes('Files');
}

/**
 * Whether a `fileDrop` target took this drag event. Page-wide drag handlers
 * use it to leave a drag over a playlist to that playlist.
 */
export function isFileDragTaken(event: DragEvent) {
    return taken_drags.has(event);
}

/**
 * Stop the browser opening files dropped outside a drop target, which would
 * leave the app. Bind it to the window `dragover` and `drop` events.
 */
export function blockMissedFileDrop(event: DragEvent) {
    if (!isFileDrag(event) || event.defaultPrevented) return;
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'none';
}

/**
 * Accept files dragged onto an element. The element has the
 * `file-drop-over` class while files are over it.
 *
 * A drag event it takes is marked with `isFileDragTaken`, and still bubbles,
 * so a page-wide drop handler can tidy up and skip it.
 */
@Directive({
    selector: '[fileDrop]',
    host: {
        '(dragenter)': 'onDragEnter($event)',
        '(dragover)': 'onDragOver($event)',
        '(dragleave)': 'onDragLeave($event)',
        '(drop)': 'onDrop($event)',
        '[class.file-drop-over]': 'over() && !disabled()',
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

    /** Take the event for this target, if it can accept it */
    private _take(event: DragEvent) {
        // An inner target that took the event already called preventDefault
        if (this.disabled() || event.defaultPrevented) return false;
        event.preventDefault();
        taken_drags.add(event);
        return true;
    }

    public onDragEnter(event: DragEvent) {
        if (!isFileDrag(event)) return;
        // Counted even when disabled, so the count stays right if that changes
        this._depth += 1;
        if (!this._take(event)) return;
        this.over.set(true);
    }

    public onDragOver(event: DragEvent) {
        if (!isFileDrag(event) || !this._take(event)) return;
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
        this.over.set(true);
    }

    public onDragLeave(event: DragEvent) {
        if (!isFileDrag(event)) return;
        this._depth = Math.max(0, this._depth - 1);
        if (!this._depth) this.over.set(false);
    }

    public onDrop(event: DragEvent) {
        if (!isFileDrag(event)) return;
        // The drag ends here, so clear the highlight even if the drop is not taken
        this._depth = 0;
        this.over.set(false);
        if (!this._take(event)) return;
        const files = Array.from(event.dataTransfer?.files || []);
        if (files.length) this.fileDrop.emit(files);
    }
}
