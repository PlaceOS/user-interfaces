import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CateringItem } from '../catering-item.class';
import { CateringStateService } from '../catering-state.service';
import { CateringOrderStateService } from './catering-order-state.service';

@Component({
    selector: 'catering-item-list',
    template: ``,
    styles: [``],
})
export class CateringItemListComponent {
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public toggleFav = new EventEmitter<CateringItem>();
    @Output() public onSelect = new EventEmitter<CateringItem>();

    public readonly loading = this._state.loading;
    public readonly item_list = this._state.filtered_menu;

    constructor(private _state: CateringOrderStateService) {}

    public isFavourite(asset_id: string) {
        return this.favorites.includes(asset_id);
    }

    public selectAsset(item: CateringItem) {
        this.onSelect.emit(item);
    }
}
