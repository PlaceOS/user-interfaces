import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CateringItem } from '../catering-item.class';
import { CateringOrderStateService } from './catering-order-state.service';

@Component({
    selector: 'catering-item-list',
    template: `
        <div class="w-full h-full overflow-auto py-2">
            <ng-container *ngIf="(list | async)?.length">
                <h3 class="font-bold px-2">Ordered Items</h3>
                <p count class="text-sm opacity-60 mb-2 px-2">
                    {{ (list | async)?.length || 0 }} items(s)
                </p>

                <ul class="list-style-none space-y-2 p-2">
                    <catering-item-list-item
                        class="block"
                        *ngFor="let item of list | async"
                        [item]="item"
                        [active]="active === item.custom_id"
                        [selected]="true"
                        [favourite]="isFavourite(item.id)"
                        (toggleFav)="toggleFav.emit(item.id)"
                        (select)="selectItem(item, true)"
                    ></catering-item-list-item>
                </ul>
            </ng-container>
            <h3 class="font-bold px-2">Results</h3>
            <p count class="text-sm opacity-60 mb-2 px-2">
                {{ (item_list | async)?.length || 0 }} result(s) found
            </p>
            <ng-container *ngIf="!(loading | async); else load_state">
                <ul
                    class="list-style-none space-y-2 p-2"
                    *ngIf="(item_list | async)?.length; else empty_state"
                >
                    <catering-item-list-item
                        class="block"
                        *ngFor="let item of item_list | async"
                        [item]="item"
                        [active]="active === item.custom_id"
                        [selected]="selected.includes(item.custom_id)"
                        [favourite]="isFavourite(item.id)"
                        [code]="code"
                        (toggleFav)="toggleFav(item.id)"
                        (select)="selectItem(item, true)"
                    ></catering-item-list-item>
                </ul>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center">
                    No available items for selected time and/or filters
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">Finding available items...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class CateringItemListComponent {
    @Input() public active: string = '';
    @Input() public selected: string = '';
    @Input() public selected_items: CateringItem[] = [];
    @Input() public favorites: string[] = [];
    @Output() public toggleFav = new EventEmitter<CateringItem>();
    @Output() public onSelect = new EventEmitter<CateringItem>();

    public readonly list = new BehaviorSubject<CateringItem[]>([]);
    public readonly loading = this._state.loading;
    public readonly item_list = this._state.filtered_menu;

    public get code() {
        return this._state.currency_code;
    }

    constructor(private _state: CateringOrderStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.selected_items) {
            this.list.next(this.selected_items || []);
        }
    }

    public isFavourite(item_id: string) {
        return this.favorites?.includes(item_id);
    }

    public selectItem(item: CateringItem, clear_state: boolean = false) {
        this.onSelect.emit(item);
        if (clear_state) {
            item.options?.forEach((_) => delete _.active);
        }
    }
}
