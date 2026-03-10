import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    input,
    output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent, TranslatePipe } from '@placeos/components';

interface SearchItem {
    id: string;
    name: string;
}

@Component({
    selector: 'search-overlay',
    template: `
        <div
            class="absolute inset-0 flex flex-col items-center p-8"
            (click)="close.emit()"
            (window:keydown.esc)="close.emit()"
        >
            <div class="bg-base-content absolute inset-0 z-0 opacity-70"></div>
            <div
                class="relative z-10 mx-auto mb-4 w-lg max-w-[calc(100%-2rem)]"
                (click)="$event.stopPropagation()"
            >
                <input
                    class="border-base-300 bg-base-100 text-base-content w-full rounded-[4rem] border py-4 pr-6 pl-14 text-xl shadow-sm"
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                    [placeholder]="'COMMON.SEARCH' | translate"
                />
                <icon
                    class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-3xl"
                >
                    search
                </icon>
            </div>
            <div
                class="z-10 mx-auto max-h-[65%] w-lg max-w-[calc(100%-2rem)] overflow-auto rounded-sm"
                (click)="$event.stopPropagation()"
            >
                @for (item of item_list(); track item) {
                    <button
                        matRipple
                        class="w-full text-left"
                        (click)="selected.emit(item)"
                    >
                        @if (result_template()) {
                            <ng-container
                                *ngTemplateOutlet="
                                    result_template();
                                    context: { item: item }
                                "
                            ></ng-container>
                        } @else {
                            <div
                                class="border-base-300 bg-base-100 hover:bg-base-200 w-full border p-4"
                            >
                                {{ item.name || item }}
                            </div>
                        }
                    </button>
                }
                @if (!item_list()?.length) {
                    <button
                        matRipple
                        class="text-base-100 w-full p-4"
                        (click)="close.emit()"
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
                class="text-base-100 absolute top-10 right-8 h-12 w-12 text-xl"
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [``],
    imports: [
        FormsModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        CommonModule,
    ],
})
export class SearchOverlayComponent implements OnChanges {
    public readonly item_list = input<SearchItem[]>([]);
    public readonly result_template = input<TemplateRef<any>>(undefined);

    public readonly selected = output<SearchItem>();
    public readonly close = output<void>();

    public readonly search = signal('');
    private _items = signal<SearchItem[]>([]);

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item_list) {
            this._items.set(this.item_list() || []);
        }
    }
}
