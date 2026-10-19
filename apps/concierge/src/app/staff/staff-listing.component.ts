import {
    afterNextRender,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    Injector,
    linkedSignal,
    signal,
    viewChild,
} from '@angular/core';
import { AsyncHandler, StaffUser } from '@placeos/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadErrorComponent, TranslatePipe } from '@placeos/components';
import { StaffDetailsComponent } from './staff-details.component';
import { StaffStateService } from './staff-state.service';

const CHARS = '#abcdefghijklmnopqrstuvwxyz'.split('');
/** Number of user cards added to the list at a time */
const RENDER_STEP = 100;
/** Distance in pixels from the end of the list that shows more cards */
const LOAD_MORE_DISTANCE = 800;

@Component({
    selector: 'staff-listings',
    template: `
        <div class="flex w-full items-center justify-center p-2">
            @for (group of groups; track group) {
                <div
                    letter
                    class="flex h-6 w-6 cursor-pointer items-center justify-center text-xs capitalize"
                    [class.disabled]="user_list()[group].length <= 0"
                    [class.active]="group === active_group()"
                    (click)="scrollTo(group)"
                >
                    {{ group }}
                </div>
            }
        </div>
        <div
            class="relative w-full flex-1 overflow-auto"
            style="height: 50%; overflow-anchor: none"
            #container
            (scroll)="onScroll($event)"
        >
            @if (users_error()) {
                <div class="absolute inset-0 flex items-center justify-center">
                    <load-error (retry)="retry()" />
                </div>
            } @else if (user_count()) {
                @for (group of groups; track group) {
                    @if (visible_list()[group].length) {
                        <div
                            group
                            [id]="'letter-' + (group === '#' ? '0' : group)"
                            class="border-base-300 bg-base-200 sticky top-0 z-10 m-2 rounded-lg border text-sm font-medium capitalize"
                        >
                            {{ group }}
                        </div>
                        @for (
                            user of visible_list()[group];
                            track user;
                            let i = $index
                        ) {
                            <staff-details
                                [id]="'letter-' + group + '-' + i"
                                [user]="user"
                                [onsite]="
                                    events() ? events()[user.email] : false
                                "
                            ></staff-details>
                        }
                    }
                }
            } @else if (!users_loading()) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <p>
                        {{ 'APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
        @if (loading() || users_loading()) {
            <mat-progress-bar mode="indeterminate" />
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 50%;
            }

            [letter] {
                transition:
                    font-size 200ms,
                    color 200ms;
            }

            [group] {
                border-color: #ccc;
                padding: 0.5rem 1.65rem;
            }

            .disabled {
                opacity: 0.2;
                pointer-events: none;
            }

            .active {
                font-size: 1.25rem;
                opacity: 1;
                color: #d81b60;
            }
        `,
    ],
    imports: [
        MatProgressBarModule,
        LoadErrorComponent,
        StaffDetailsComponent,
        TranslatePipe,
    ],
})
export class StaffListingComponent extends AsyncHandler {
    private _state = inject(StaffStateService);

    public readonly active_group = signal('#');

    public readonly groups = CHARS;
    public readonly events = this._state.user_events;
    public readonly loading = this._state.loading;
    public readonly users_loading = this._state.users_loading;
    public readonly users_error = this._state.users_error;
    public readonly filtered_users = this._state.filtered_users;

    public readonly user_count = computed(() => this.filtered_users().length);

    /** All users, grouped by the first letter of their name */
    public readonly user_list = computed(() => {
        const list = this.filtered_users() || [];
        const user_map: Record<string, StaffUser[]> = {};
        for (const char of CHARS) user_map[char] = [];
        for (const user of list) {
            const first = user.name?.toLowerCase()[0];
            user_map[CHARS.includes(first) ? first : '#'].push(user);
        }
        return user_map;
    });

    /**
     * Index of the first user card to show. A jump to a letter moves it, so
     * the cards before that letter do not show until the user scrolls up.
     */
    public readonly render_start = linkedSignal({
        source: this.filtered_users,
        computation: () => 0,
    });

    /**
     * Index after the last user card to show. A list of 5,000 users made
     * more than 100,000 elements, so cards show in steps as the user scrolls.
     */
    public readonly render_limit = linkedSignal({
        source: this.filtered_users,
        computation: () => RENDER_STEP,
    });

    /** Users from `render_start` to `render_limit`, grouped like `user_list` */
    public readonly visible_list = computed(() => {
        const user_map = this.user_list();
        let skip = this.render_start();
        let remaining = this.render_limit() - skip;
        const visible: Record<string, StaffUser[]> = {};
        for (const char of CHARS) {
            const group = user_map[char].slice(skip);
            skip = Math.max(0, skip - user_map[char].length);
            visible[char] = group.slice(0, Math.max(0, remaining));
            remaining -= visible[char].length;
        }
        return visible;
    });

    private readonly _el = viewChild<ElementRef<HTMLDivElement>>('container');
    private readonly _injector = inject(Injector);
    /** True until the scroll position moves for cards added above */
    private _adding_above = false;

    constructor() {
        super();
        effect((onCleanup) => {
            // Also runs after more cards show, so a list shorter than the
            // view keeps adding cards until it can scroll
            this.visible_list();
            this.timeout('scroll', () => this.onScroll({}), 30);
            // `onScroll` reads the document, so the timer must not outlive the
            // effect. Relying on `ngOnDestroy` alone is not enough: the effect
            // can flush during teardown and schedule a fresh timer after the
            // base class has already cleared them.
            onCleanup(() => this.clearTimeout('scroll'));
        });
    }

    public onScroll(_) {
        const container = this._el();
        if (!container) return;
        const { scrollTop, scrollHeight, clientHeight } =
            container.nativeElement;
        if (
            scrollHeight - scrollTop - clientHeight < LOAD_MORE_DISTANCE &&
            this.render_limit() < this.user_count()
        ) {
            this.render_limit.update((limit) => limit + RENDER_STEP);
        }
        if (
            scrollTop < LOAD_MORE_DISTANCE &&
            this.render_start() > 0 &&
            !this._adding_above
        ) {
            // Move the scroll position down by the height of the new cards,
            // so the cards in view stay in place
            this._adding_above = true;
            const old_height = scrollHeight;
            this.render_start.update((start) =>
                Math.max(0, start - RENDER_STEP),
            );
            afterNextRender(
                () => {
                    const el = container.nativeElement;
                    el.scrollTop += el.scrollHeight - old_height;
                    this._adding_above = false;
                },
                { injector: this._injector },
            );
        }
        const scroll_top = scrollTop;
        for (const group of CHARS) {
            const el: HTMLDivElement = document.querySelector(
                `#letter-${group === '#' ? '0' : group}`,
            );
            if (el) {
                if (el.offsetTop - scroll_top > 0) {
                    break;
                }
                this.active_group.set(group);
            }
        }
    }

    public retry() {
        this._state.loadUsers();
    }

    public scrollTo(group: string) {
        // Show the cards around the start of the group before the scroll
        let first_index = 0;
        for (const char of CHARS) {
            if (char === group) break;
            first_index += this.user_list()[char].length;
        }
        const move =
            first_index < this.render_start() ||
            first_index >= this.render_limit();
        if (move) {
            this.render_start.set(Math.max(0, first_index - RENDER_STEP));
            this.render_limit.set(first_index + RENDER_STEP);
        }
        afterNextRender(
            () => {
                const el = document.querySelector(`#letter-${group}-0`);
                if (el) {
                    // A smooth scroll in a list that changed could start more
                    // cards to show above, which moves the target
                    el.scrollIntoView({
                        behavior: move ? 'auto' : 'smooth',
                        block: 'center',
                    });
                    this.active_group.set(group);
                }
            },
            { injector: this._injector },
        );
    }
}
