import {
    afterRenderEffect,
    Component,
    ElementRef,
    inject,
    viewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { IntersectDirective } from '../shared/intersect.directive';
import { SignageService } from '../signage.service';

@Component({
    selector: 'display-list',
    template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r sm:max-w-80"
        >
            <div class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                        "
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                        "
                    />
                </mat-form-field>
            </div>
            @if (displays().length > 0) {
                @for (display of displays(); track display.id) {
                    <a
                        #display_item
                        matRipple
                        class="border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === display.id"
                        [class.text-primary-content]="
                            selected()?.id === display.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== display.id
                        "
                        [routerLink]="['/displays', display.id]"
                        queryParamsHandling="merge"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.OPEN_DISPLAY'
                                | translate
                                    : {
                                          name:
                                              display.display_name ||
                                              display.name,
                                      }
                        "
                    >
                        <icon class="shrink-0 text-2xl">tv</icon>
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ display.display_name || display.name }}
                            </div>
                            @if (display.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-70]="
                                        selected()?.id !== display.id
                                    "
                                    [class.opacity-90]="
                                        selected()?.id === display.id
                                    "
                                >
                                    {{ display.description }}
                                </div>
                            }
                        </div>
                    </a>
                }
                @if (has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="loadMore()"
                    ></div>
                } @else {
                    <div class="text-base-content/50 p-3 text-center text-xs">
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center space-y-2 p-8"
                >
                    <icon class="text-6xl">tv</icon>
                    <p>{{ 'SIGNAGE_MANAGER.NO_DISPLAYS' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    imports: [
        FormsModule,
        RouterLink,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
        IntersectDirective,
    ],
})
export class DisplayListComponent {
    private readonly _service = inject(SignageService);
    private readonly _display_items =
        viewChildren<ElementRef<HTMLAnchorElement>>('display_item');

    public readonly search = this._service.display_search_term;
    public readonly displays = this._service.filtered_displays;
    public readonly selected = this._service.selected_display;

    // Backend pagination: fetches the next page as the sentinel scrolls in.
    public readonly has_more = this._service.displays_has_more;

    constructor() {
        afterRenderEffect({
            earlyRead: () => {
                const selected_id = this.selected()?.id;
                if (!selected_id) return;
                const display_index = this.displays().findIndex(
                    ({ id }) => id === selected_id,
                );
                return this._display_items()[display_index]?.nativeElement;
            },
            write: (selected_item) => {
                selected_item()?.scrollIntoView?.({
                    behavior: 'instant',
                    block: 'nearest',
                    inline: 'nearest',
                });
            },
        });
    }

    public loadMore() {
        this._service.loadMoreDisplays();
    }
}
