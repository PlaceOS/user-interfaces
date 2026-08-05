import {
    Component,
    ElementRef,
    computed,
    effect,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslatePipe } from '@placeos/components';
import { StaffDetailsComponent } from './staff-details.component';
import { StaffStateService } from './staff-state.service';

const CHARS = '#abcdefghijklmnopqrstuvwxyz'.split('');

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
            style="height: 50%"
            #container
            (scroll)="onScroll($event)"
        >
            @if (user_count()) {
                @for (group of groups; track group) {
                    @if (user_list()[group].length) {
                        <div
                            group
                            [id]="'letter-' + (group === '#' ? '0' : group)"
                            class="border-base-300 bg-base-200 sticky top-0 z-10 m-2 rounded-lg border text-sm font-medium capitalize"
                        >
                            {{ group }}
                        </div>
                        @for (
                            user of user_list()[group];
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
            } @else {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <p>
                        {{ 'APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
        @if (loading()) {
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
    imports: [MatProgressBarModule, StaffDetailsComponent, TranslatePipe],
})
export class StaffListingComponent extends AsyncHandler {
    private _state = inject(StaffStateService);

    public readonly active_group = signal('#');

    public readonly groups = CHARS;
    public readonly events = this._state.user_events;
    public readonly loading = this._state.loading;
    public readonly filtered_users = this._state.filtered_users;

    public readonly user_count = computed(() => this.filtered_users().length);

    public readonly user_list = computed(() => {
        const list = this.filtered_users() || [];
        const user_map = {};
        for (const char of CHARS) {
            user_map[char] = list.filter(
                (user) =>
                    user.name.toLowerCase()[0].startsWith(char) ||
                    (char === '#' &&
                        !CHARS.includes(user.name.toLowerCase()[0])),
            );
        }
        return user_map;
    });

    private readonly _el = viewChild<ElementRef<HTMLDivElement>>('container');

    constructor() {
        super();
        effect((onCleanup) => {
            this.user_list();
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
        const scroll_top = container.nativeElement.scrollTop;
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

    public scrollTo(group: string) {
        const el = document.querySelector(`#letter-${group}-0`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.active_group.set(group);
        }
    }
}
