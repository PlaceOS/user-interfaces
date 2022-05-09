import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'find-space-item',
    templateUrl: './find-space-item.component.html',
    styles: [``],
})
export class FindSpaceItemComponent implements OnInit {
    @Input() public space: Space;
    @Input() public book: boolean;
    @Output() public bookChange = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    bookSpace(spaceId) {
        this.bookChange.emit(this.book);
    }
}
