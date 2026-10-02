import { DatePipe } from '@angular/common';
import {
    afterRenderEffect,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    LOCALE_ID,
    signal,
    viewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    DateFromPipe,
    IconComponent,
    LoadErrorComponent,
    TranslatePipe,
} from '@placeos/components';
import { isSameDay } from 'date-fns';
import { IntersectDirective } from '../shared/intersect.directive';
import { isDisplayOnline } from './display-status.util';
import { SignageDisplayService } from './signage-display.service';

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
                        [(ngModel)]="search"
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
                        <div
                            class="relative shrink-0"
                            role="img"
                            [matTooltip]="
                                statusLabel(display)
                                    | translate: { time: lastSeen(display) }
                            "
                            [attr.aria-label]="
                                statusLabel(display)
                                    | translate: { time: lastSeen(display) }
                            "
                        >
                            <icon class="text-2xl">tv</icon>
                            <span
                                class="border-base-100 absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2"
                                [class.bg-success]="isOnline(display)"
                                [class.bg-error]="!isOnline(display)"
                            ></span>
                        </div>
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
                } @else if (error()) {
                    <load-error (retry)="retry()" />
                } @else if (!loading()) {
                    <div class="text-base-content/50 p-3 text-center text-xs">
                        {{ 'COMMON.END_OF_LIST' | translate }}
                    </div>
                }
            } @else if (loading()) {
                <div
                    class="text-base-content/70 flex flex-1 flex-col items-center justify-center p-8"
                    role="status"
                >
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            } @else if (error()) {
                <load-error (retry)="retry()" />
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
        MatTooltipModule,
        IconComponent,
        LoadErrorComponent,
        TranslatePipe,
        IntersectDirective,
    ],
})
export class DisplayListComponent {
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _display_items =
        viewChildren<ElementRef<HTMLAnchorElement>>('display_item');

    public readonly search = this._display_service.display_search_term;
    public readonly displays = this._display_service.filtered_displays;
    public readonly selected = this._display_service.selected_display;

    // Backend pagination: fetches the next page as the sentinel scrolls in.
    public readonly has_more = this._display_service.displays_has_more;
    public readonly loading = this._display_service.displays_loading;
    public readonly error = this._display_service.displays_error;

    // Ticks each minute so a display that stops checking in turns offline
    // without a reload.
    private readonly _now = signal(Date.now());
    private readonly _date_from = new DateFromPipe();
    private readonly _date = new DatePipe(inject(LOCALE_ID));

    constructor() {
        const timer = setInterval(() => this._now.set(Date.now()), 60 * 1000);
        inject(DestroyRef).onDestroy(() => clearInterval(timer));

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
        this._display_service.loadMoreDisplays();
    }

    public retry() {
        this._display_service.retryDisplays();
    }

    public isOnline(display: { signage_last_seen?: number }) {
        return isDisplayOnline(display.signage_last_seen, this._now());
    }

    /** Translation key for the status tooltip of a display */
    public statusLabel(display: { signage_last_seen?: number }) {
        if (!display.signage_last_seen) {
            return 'SIGNAGE_MANAGER.DISPLAY_STATUS_NEVER_SEEN';
        }
        return this.isOnline(display)
            ? 'SIGNAGE_MANAGER.DISPLAY_STATUS_ONLINE'
            : 'SIGNAGE_MANAGER.DISPLAY_STATUS_OFFLINE';
    }

    /**
     * When the display's player last checked in: minutes ago within the last
     * hour, the time earlier today, and the date and time before today.
     */
    public lastSeen(display: { signage_last_seen?: number }) {
        const now = this._now();
        if (!display.signage_last_seen) return '';
        const last_seen = display.signage_last_seen * 1000;
        if (now - last_seen < 60 * 60 * 1000) {
            return this._date_from.transform(last_seen);
        }
        const date_format = isSameDay(last_seen, now) ? 'shortTime' : 'short';
        return this._date.transform(last_seen, date_format) || '';
    }
}
