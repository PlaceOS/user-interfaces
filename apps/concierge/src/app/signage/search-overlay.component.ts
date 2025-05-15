import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'search-overlay',
    template: `
        <div
            class="absolute inset-0 flex flex-col items-center p-8"
            (click)="close.next()"
            (window:keydown.esc)="close.next()"
        >
            <div class="absolute inset-0 z-0 bg-base-content opacity-70"></div>
            <div
                class="relative z-10 mx-auto mb-4 w-[32rem] max-w-[calc(100%-2rem)]"
                (click)="$event.stopPropagation()"
            >
                <input
                    class="w-full rounded-[4rem] border border-base-300 bg-base-100 py-4 pl-14 pr-6 text-xl text-base-content shadow"
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                    [placeholder]="'COMMON.SEARCH' | translate"
                />
                <icon
                    class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-3xl"
                >
                    search
                </icon>
            </div>
            <div
                class="z-10 mx-auto max-h-[65%] w-[32rem] max-w-[calc(100%-2rem)] overflow-auto rounded"
                (click)="$event.stopPropagation()"
            >
                @for (item of item_list; track item) {
                    <button
                        matRipple
                        class="w-full text-left"
                        (click)="selected.next(item)"
                    >
                        @if (result_template) {
                            <ng-container
                                *ngTemplateOutlet="
                                    result_template;
                                    context: { item: item }
                                "
                            ></ng-container>
                        } @else {
                            <div
                                class="w-full border border-base-300 bg-base-100 p-4 hover:bg-base-200"
                            >
                                {{ item.name || item }}
                            </div>
                        }
                    </button>
                }
                @if (!item_list?.length) {
                    <button
                        matRipple
                        class="w-full p-4 text-base-100"
                        (click)="close.next()"
                    >
                        <div class="opacity-30">
                            {{
                                'APP.CONCIERGE.SIGNAGE_SEARCH_EMPTY' | translate
                            }}
                        </div>
                    </button>
                }
            </div>
            <button
                icon
                matRipple
                class="absolute right-8 top-10 h-12 w-12 text-xl text-base-100"
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class SearchOverlayComponent<T extends {} = any> {
    @Input() public item_list: T[] = [];
    @Input() public result_template: TemplateRef<any>;

    @Output() public selected = new EventEmitter<T>();
    @Output() public close = new EventEmitter<void>();

    public readonly search = new BehaviorSubject('');
    private _items = new BehaviorSubject<T[]>([]);

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item_list) {
            this._items.next(this.item_list || []);
        }
    }
}
