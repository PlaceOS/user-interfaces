import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BehaviorSubject } from 'rxjs';
import { CateringItem } from '../catering-item.class';
import { CateringOrderStateService } from '../catering-order-modal/catering-order-state.service';
import { NewCateringItemListItemComponent } from './new-catering-item-list-item.component';

@Component({
    selector: 'new-catering-item-list',
    template: `
        <div class="h-full w-full py-2">
            <ng-container *ngIf="(list | async)?.length">
                <h3 class="px-2 font-bold">
                    {{ 'CATERING.ORDER_SELECTED_HEADER' | translate }}
                </h3>
                <p count class="mb-2 px-2 text-sm opacity-60">
                    {{
                        'CATERING.ORDER_SELECTED_COUNT'
                            | translate: { count: (list | async)?.length || 0 }
                    }}
                </p>

                <ul class="list-style-none space-y-2 p-2">
                    <new-catering-item-list-item
                        class="block"
                        *ngFor="let item of list | async"
                        [item]="item"
                        [active]="active === item.custom_id"
                        [selected]="true"
                        [favourite]="isFavourite(item.id)"
                        (toggleFav)="toggleFav.emit(item.id)"
                        (select)="selectItem(item, true)"
                    ></new-catering-item-list-item>
                </ul>
            </ng-container>
            <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
            <p count class="mb-2 px-2 text-sm opacity-60">
                {{
                    'COMMON.RESULTS_COUNT'
                        | translate: { count: (item_list | async)?.length || 0 }
                }}
            </p>
            <ng-container *ngIf="!(loading | async); else load_state">
                <ul
                    class="list-style-none space-y-2 p-2"
                    *ngIf="(item_list | async)?.length; else empty_state"
                >
                    <new-catering-item-list-item
                        class="block"
                        *ngFor="let item of item_list | async"
                        [item]="item"
                        [active]="active === item.custom_id"
                        [selected]="selected.includes(item.custom_id)"
                        [favourite]="isFavourite(item.id)"
                        [code]="code"
                        (toggleFav)="toggleFav(item.id)"
                        (select)="selectItem(item, true)"
                    ></new-catering-item-list-item>
                </ul>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'CATERING.ORDER_ITEMS_EMPTY' | translate }}
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'CATERING.ORDER_ITEMS_LOADING' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        NewCateringItemListItemComponent,
    ],
})
export class NewCateringItemListComponent implements OnChanges {
    @Input() public active = '';
    @Input() public selected = '';
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

    public selectItem(item: CateringItem, clear_state = false) {
        this.onSelect.emit(item);
        if (clear_state) {
            item.options?.forEach((_) => delete _.active);
        }
    }
}
