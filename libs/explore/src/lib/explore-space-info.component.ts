import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import {
    AsyncHandler,
    CalendarEvent,
    MAP_FEATURE_DATA,
    settingSignal,
    Space,
} from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { UserPipe } from '@placeos/users';
import { isSameDay } from 'date-fns';

import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

export interface SpaceInfoData {
    space: Space;
    events: CalendarEvent[];
    status:
        | 'free'
        | 'busy'
        | 'pending'
        | 'reserved'
        | 'not-bookable'
        | 'unknown'
        | '';
}

@Component({
    selector: 'explore-space-info',
    template: `
        <div
            #tooltip
            customTooltip
            [content]="space_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [attr.id]="space()?.map_id || space()?.id"
            (mouseenter)="updateOffset()"
            class="pointer-events-auto relative hidden h-full w-full cursor-pointer sm:block"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space()?.id"
                class="border-base-300 bg-base-100 pointer-events-none absolute top-0 left-0 w-64 transform overflow-hidden rounded-sm border shadow-sm"
                [class.-translate-x-full]="x_pos() === 'end'"
                [class.-translate-y-full]="y_pos() === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="bg-opacity-20 relative flex w-full items-center justify-center overflow-hidden"
                        [class.bg-neutral]="space().images[0]"
                        [class.h-32]="space().images[0]"
                        [class.h-8]="!space().images[0]"
                    >
                        @if (space().images[0]) {
                            <img
                                auth
                                [source]="space().images[0]"
                                class="min-h-full min-w-full object-cover"
                            />
                        } @else {
                            <div
                                class="bg-base-200 absolute inset-0 opacity-30"
                            ></div>
                        }
                    </div>
                    <div class="absolute top-2 left-2 flex flex-wrap text-sm">
                        <div
                            status
                            [class]="
                                'text-light rounded-sm border border-white p-1 px-2 capitalize shadow-sm ' +
                                status()
                            "
                        >
                            {{
                                (status() === 'not-bookable'
                                    ? 'COMMON.STATUS_NOT_BOOKABLE'
                                    : 'COMMON.STATUS_' + (status() | uppercase)
                                ) | translate
                            }}
                        </div>
                        @if (status() !== 'not-bookable') {
                            <div available-until>
                                {{ available_until }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-col px-2 py-4">
                        <h4 class="mb-2 px-2 text-xl font-medium">
                            {{ space().display_name || space().name }}
                        </h4>
                        @if (space().capacity >= 0) {
                            <div
                                capacity
                                class="mb-2 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>group</icon>
                                <div>
                                    {{
                                        'COMMON.PEOPLE_COUNT'
                                            | translate
                                                : { count: space().capacity }
                                                : space().capacity
                                    }}
                                </div>
                            </div>
                        }
                        @if (space().features?.length > 0 && !hide_features()) {
                            <ul class="flex flex-wrap">
                                @for (
                                    feature of space().features;
                                    track feature
                                ) {
                                    <li
                                        class="bg-base-200 m-1 rounded-2xl px-2 py-1 text-xs font-medium"
                                    >
                                        {{ feature }}
                                    </li>
                                }
                            </ul>
                        }
                        @if (show_event_details() && next()) {
                            @let host = next().host | user | async;
                            <div
                                class="rounded-sm px-2 pb-1 text-xs opacity-30"
                            >
                                {{ current() ? 'Current' : 'Upcoming' }}
                                booking
                            </div>
                            <div
                                class="border-base-300 mb-1 flex flex-col rounded-lg border p-2"
                            >
                                <h3>{{ next().title }}</h3>
                                <div class="text-xs opacity-50">
                                    {{ host?.name || next().host }}
                                </div>
                            </div>
                        }
                        @if (next()) {
                            <div
                                class="mt-1 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>alarm</icon>
                                <div>
                                    Free
                                    {{ next().date > now() ? 'until' : 'at' }}
                                    {{
                                        (next().date > now()
                                            ? next().date
                                            : next().date_end
                                        ) | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [status] {
                background-color: var(--success);
                color: var(--success-content);
            }

            [status].busy {
                background-color: var(--error);
                color: var(--error-content);
            }

            [status].pending {
                background-color: var(--warn);
                color: var(--warn-content);
            }

            [status].not-bookable {
                background-color: var(--base-300);
            }
        `,
    ],

    imports: [
        AsyncPipe,
        DatePipe,
        UpperCasePipe,
        IconComponent,
        CustomTooltipComponent,
        TranslatePipe,
        AuthenticatedImageDirective,
        UserPipe,
    ],
})
export class ExploreSpaceInfoComponent extends AsyncHandler implements OnInit {
    private _details = inject<SpaceInfoData>(MAP_FEATURE_DATA);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly y_pos = signal<'top' | 'bottom'>('top');
    public readonly x_pos = signal<'start' | 'end'>('start');
    /** Space to display details for */
    public readonly space = signal(this._details.space);
    /** List of upcoming events for space */
    public readonly events = signal(this._details.events || []);
    /** List of upcoming events for space */
    public readonly now = signal(Date.now());
    /** List of upcoming events for space */
    public readonly next = computed<CalendarEvent>(() => {
        return [...this.events()]
            .sort((a, b) => a.date - b.date)
            .filter(
                (item) =>
                    item.date_end > this.now() &&
                    isSameDay(item.date, this.now()),
            )[0];
    });
    public readonly current = computed(() =>
        this.next()
            ? this.next()?.date <= this.now() &&
              this.next()?.date_end > this.now()
            : false,
    );
    /** Whether the event details should be display on the tooltip */
    public readonly show_event_details = settingSignal(
        'explore.show_event_details',
        true,
    );
    /** Current status of the space */
    public readonly status = signal(this._details.status);

    public readonly hide_features = settingSignal(
        'spaces.hide_features',
        false,
    );

    public ngOnInit() {
        this.timeout('update_offset', () => this.updateOffset(), 200);
        this.interval('time', () => this.now.set(Date.now()), 5000);
    }

    public updateOffset() {
        const pos = this._element.nativeElement.getBoundingClientRect();
        this.x_pos.set(pos.x < document.body.clientWidth / 2 ? 'start' : 'end');
        this.y_pos.set(
            pos.y < document.body.clientHeight / 2 ? 'top' : 'bottom',
        );
    }

    public get available_until() {
        return '';
    }
}
