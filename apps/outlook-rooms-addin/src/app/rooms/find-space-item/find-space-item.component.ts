import { Component, OnInit, Input } from '@angular/core';
import { Space } from '@placeos/spaces';

@Component({
    selector: 'find-space-item',
    templateUrl: './find-space-item.component.html',
    styles: [``],
})
export class FindSpaceItemComponent implements OnInit {
    @Input() public space: Space;

    constructor() {}

    ngOnInit(): void {}
}
