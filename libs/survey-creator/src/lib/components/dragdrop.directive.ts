import {
    Directive,
    HostBinding,
    HostListener,
    EventEmitter,
    Output,
} from '@angular/core';

@Directive({
    selector: '[dragDrop]',
})
export class DragdropDirective {
    @Output() fileDropped = new EventEmitter<any>();
    constructor() {}

    @HostListener('dragover', ['$event']) onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('drag over');
    }
    @HostListener('dragleave', ['$event']) public onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();

        console.log('drag leave');
    }
    @HostListener('drop', ['$event']) public ondrop(event) {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
