import {
    Component,
    debounced,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { QueryResponse } from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import { decodeEntityNames } from './decode-entity-names.util';
import { IntersectDirective } from './intersect.directive';

@Component({
    selector: 'display-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.ADD_DISPLAY_TITLE' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.CLOSE_ADD_DISPLAY' | translate
                "
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                    [placeholder]="
                        'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                    "
                />
            </mat-form-field>
            @if (displays().length > 0) {
                @for (display of displays(); track display.id) {
                    <button
                        type="button"
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                        [mat-dialog-close]="display.id"
                    >
                        <icon class="text-base-content/60 shrink-0 text-2xl"
                            >tv</icon
                        >
                        <div class="min-w-0 flex-1">
                            <div class="truncate">
                                {{ display.display_name || display.name }}
                            </div>
                            @if (display.description) {
                                <div
                                    class="text-base-content/70 truncate text-xs"
                                >
                                    {{ display.description }}
                                </div>
                            }
                        </div>
                    </button>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                }
            } @else if (loading()) {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center rounded-lg p-16"
                >
                    <div class="text-base-content/70">
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">tv</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_DISPLAYS' | translate }}
                    </div>
                </div>
            }
        </main>
    `,
    imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
        IntersectDirective,
    ],
})
export class DisplaySelectModalComponent {
    private readonly _data: { zone_id: string } = inject(MAT_DIALOG_DATA);
    private readonly _service = inject(SignageService);

    public readonly search = signal('');
    // Searching runs on the backend so results page like the display list;
    // filtering a loaded set would only ever find the displays already here.
    private readonly _search_debounced = debounced(this.search, 400);

    private readonly _items = signal<any[]>([]);
    public readonly displays = this._items.asReadonly();
    public readonly loading = signal(false);
    public readonly has_more = signal(false);
    private _next: (() => QueryResponse<any> | null) | null = null;
    // Bumped on every new search so pages from a stale query are discarded.
    private _token = 0;

    constructor() {
        effect(() => {
            const term = this._search_debounced.value();
            untracked(() => {
                const token = ++this._token;
                this._items.set([]);
                this._next = null;
                this.has_more.set(false);
                const query = this._service.queryDisplays(term);
                if (query) this._fetchPage(query, token);
            });
        });
    }

    public loadMore() {
        if (this.loading() || !this.has_more()) return;
        const next = this._next?.();
        if (!next) {
            this.has_more.set(false);
            return;
        }
        this._fetchPage(next, this._token);
    }

    private async _fetchPage(query: QueryResponse<any>, token: number) {
        this.loading.set(true);
        try {
            const page = await query;
            if (token !== this._token) return;
            const items = (page.data || [])
                .filter((item: any) => item.signage)
                .map(decodeEntityNames);
            this._items.update((list) =>
                [...list, ...items].sort((a, b) =>
                    (a.display_name || a.name).localeCompare(
                        b.display_name || b.name,
                    ),
                ),
            );
            this._next = page.next;
            this.has_more.set(this._items().length < page.total);
        } catch {
            if (token === this._token) this.has_more.set(false);
        } finally {
            if (token === this._token) this.loading.set(false);
        }
    }
}
