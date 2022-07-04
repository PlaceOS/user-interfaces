import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CateringItem } from "../catering-item.class";

@Component({
    selector: 'catering-item-details',
    template: `
    
    `,
    styles: [``]
})
export class CateringItemDetailsComponent {
    @Input() public item?: CateringItem;
    @Input() public active: boolean = false;
    @Input() public fav: boolean = false;

    @Output() public toggleFav = new EventEmitter<void>();
    @Output() public activeChange = new EventEmitter<boolean>();
    @Output() public close = new EventEmitter<void>();
}
