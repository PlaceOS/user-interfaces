import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
    output,
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
            @if ((list | async)?.length) {
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
                    @for (item of list | async; track item) {
                        <new-catering-item-list-item
                            class="block"
                            [item]="item"
                            [active]="active() === item.custom_id"
                            [selected]="true"
                            [favourite]="isFavourite(item.id)"
                            (toggleFav)="toggleFav.emit(item.id)"
                            (select)="selectItem(item, true)"
                        ></new-catering-item-list-item>
                    }
                </ul>
            }
            <h3 class="px-2 font-bold">{{ 'COMMON.RESULTS' | translate }}</h3>
            <p count class="mb-2 px-2 text-sm opacity-60">
                {{
                    'COMMON.RESULTS_COUNT'
                        | translate: { count: (item_list | async)?.length || 0 }
                }}
            </p>
            @if (!(loading | async)) {
                @if ((item_list | async)?.length) {
                    <ul class="list-style-none space-y-2 p-2">
                        @for (item of item_list | async; track item) {
                            <new-catering-item-list-item
                                class="block"
                                [item]="item"
                                [active]="active() === item.custom_id"
                                [selected]="selected().includes(item.custom_id)"
                                [favourite]="isFavourite(item.id)"
                                [code]="code"
                                (toggleFav)="toggleFav.emit(item.id)"
                                (select)="selectItem(item, true)"
                            ></new-catering-item-list-item>
                        }
                    </ul>
                } @else {
                    <div
                        empty
                        class="flex flex-col items-center justify-center space-y-2 p-16"
                    >
                        <p class="text-center opacity-30">
                            {{ 'CATERING.ORDER_ITEMS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div
                    loading
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'CATERING.ORDER_ITEMS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
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
    private _state = inject(CateringOrderStateService);

    public readonly active = input('');
    public readonly selected = input('');
    public readonly selected_items = input<CateringItem[]>([]);
    public readonly favorites = input<string[]>([]);
    public readonly toggleFav = output<CateringItem>();
    public readonly onSelect = output<CateringItem>();

    public readonly list = new BehaviorSubject<CateringItem[]>([]);
    public readonly loading = this._state.loading;
    public readonly item_list = this._state.filtered_menu;

    public get code() {
        return this._state.currency_code;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.selected_items) {
            this.list.next(this.selected_items() || []);
        }
    }

    public isFavourite(item_id: string) {
        return this.favorites()?.includes(item_id);
    }

    public selectItem(item: CateringItem, clear_state = false) {
        this.onSelect.emit(item);
        if (clear_state) {
            item.options?.forEach((_) => delete _.active);
        }
    }
}
