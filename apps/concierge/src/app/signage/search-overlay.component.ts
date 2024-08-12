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
            class="absolute inset-0 flex flex-col p-8 items-center"
            (click)="close.next()"
            (window:keydown.esc)="close.next()"
        >
            <div class="absolute inset-0 bg-base-content opacity-80 z-0"></div>
            <div
                class="relative mb-4 w-[32rem] max-w-[calc(100%-2rem)] mx-auto z-10"
                (click)="$event.stopPropagation()"
            >
                <input
                    class="rounded-[4rem] text-xl text-base-content bg-base-100 border border-base-300 shadow pl-14 pr-6 py-4 w-full"
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                    placeholder="Search..."
                />
                <app-icon
                    class="absolute left-3 top-1/2 -translate-y-1/2 text-3xl pointer-events-none"
                >
                    search
                </app-icon>
            </div>
            <div
                class="overflow-auto max-h-[65%] w-[32rem] max-w-[calc(100%-2rem)] mx-auto rounded z-10"
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
                            <div class="p-4 w-full bg-base-100 border">
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
                            No items available to select
                        </div>
                    </button>
                }
            </div>
            <button
                icon
                matRipple
                class="absolute top-10 right-8 text-base-100 text-xl h-12 w-12"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
    `,
    styles: [``],
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
