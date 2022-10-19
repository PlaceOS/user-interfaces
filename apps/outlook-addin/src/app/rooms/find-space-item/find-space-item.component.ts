import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'find-space-item',
    templateUrl: './find-space-item.component.html',
    styles: [``],
})
export class FindSpaceItemComponent {
    @Input() public space: Space;
    @Input() public selected: boolean = false;
    @Output() public selectedChange = new EventEmitter<boolean>();

    readonly toggleSelected = () => this.selectedChange.emit(!this.selected);
}
