import { Component, ElementRef, ViewChild } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { map } from 'rxjs/operators';

import { StaffStateService } from './staff-state.service';

const CHARS = '#abcdefghijklmnopqrstuvwxyz'.split('');

@Component({
    selector: 'staff-listings',
    template: `
        <div class="w-full p-2 flex items-center justify-center">
            <div
                letter
                *ngFor="let group of groups"
                class="capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer"
                [class.disabled]="(user_list | async)[group].length <= 0"
                [class.active]="group === active_group"
                (click)="scrollTo(group)"
            >
                {{ group }}
            </div>
        </div>
        <div
            class="flex-1 overflow-auto w-full relative bg-base-200"
            style="height: 50%"
            #container
            (scroll)="onScroll($event)"
        >
            <ng-container *ngIf="user_count | async; else empty_state">
                <ng-container *ngFor="let group of groups">
                    <ng-container *ngIf="(user_list | async)[group].length">
                        <div
                            group
                            [id]="'letter-' + (group === '#' ? '0' : group)"
                            class="capitalize bg-base-200 border-b text-sm font-medium sticky top-0 z-10"
                        >
                            {{ group }}
                        </div>
                        <staff-details
                            *ngFor="
                                let user of (user_list | async)[group];
                                let i = index
                            "
                            [id]="'letter-' + group + '-' + i"
                            [user]="user"
                            [onsite]="
                                (events | async)
                                    ? (events | async)[user.email]
                                    : false
                            "
                        ></staff-details>
                    </ng-container>
                </ng-container>
            </ng-container>
        </div>
        <mat-progress-bar
            *ngIf="loading | async"
            mode="indeterminate"
        ></mat-progress-bar>
        <ng-template #empty_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center"
            >
                <p>No matching staff members</p>
            </div>
        </ng-template>
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
                transition: font-size 200ms, color 200ms;
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
})
export class StaffListingComponent extends AsyncHandler {
    public active_group = '#';

    public readonly groups = CHARS;
    public readonly events = this._state.user_events;
    public readonly loading = this._state.loading;

    public readonly user_count = this._state.filtered_users.pipe(
        map((list) => list.length)
    );

    public readonly user_list = this._state.filtered_users.pipe(
        map((list) => {
            const user_map = {};
            for (const char of CHARS) {
                user_map[char] = (list || []).filter(
                    (user) =>
                        user.name.toLowerCase()[0].startsWith(char) ||
                        (char === '#' &&
                            !CHARS.includes(user.name.toLowerCase()[0]))
                );
            }
            this.timeout('scroll', () => this.onScroll({}), 30);
            return user_map;
        })
    );

    @ViewChild('container') private _el: ElementRef<HTMLDivElement>;

    constructor(private _state: StaffStateService) {
        super();
    }

    public onScroll(_) {
        const scroll_top = this._el.nativeElement.scrollTop;
        for (const group of CHARS) {
            const el: HTMLDivElement = document.querySelector(
                `#letter-${group === '#' ? '0' : group}`
            );
            if (el) {
                if (el.offsetTop - scroll_top > 0) {
                    break;
                }
                this.active_group = group;
            }
        }
    }

    public scrollTo(group: string) {
        const el = document.querySelector(`#letter-${group}-0`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.active_group = group;
        }
    }
}
