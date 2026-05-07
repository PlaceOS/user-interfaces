import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    OnInit,
    WritableSignal,
    computed,
    inject,
    signal,
} from '@angular/core';
import { AsyncHandler, Booking } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { isSameDay } from 'date-fns';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

type DeskStatus =
    | 'free'
    | 'busy'
    | 'pending'
    | 'reserved'
    | 'not-bookable'
    | 'unknown'
    | '';

export interface DeskInfoData {
    id: string;
    map_id: string;
    user: WritableSignal<string>;
    name: string;
    start?: number;
    end?: number;
    department?: string;
    date?: number;
    status: WritableSignal<DeskStatus>;
    bookings: WritableSignal<Booking[]>;
}

@Component({
    selector: 'explore-desk-info',
    template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id()"
            [attr.map_id]="map_id()"
            (mouseenter)="updatePosition()"
            (touchdown)="updatePosition()"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id()"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <div class="border-base-200 rounded-md border p-1">
                    <div class="triangle absolute"></div>
                    <div class="flex w-full items-center space-x-4">
                        <div class="flex flex-1 flex-col px-2 py-1">
                            <h4 map-id class="m-0 truncate font-medium">
                                {{ name() || map_id() || id() }}
                            </h4>
                            @if (display_user()) {
                                <p user class="text-xs">
                                    {{ display_user() }}
                                </p>
                            }
                            @if (display_user() && department()) {
                                <p user class="text-xs">
                                    {{ department() }}
                                </p>
                            }
                        </div>
                        @if (status()) {
                            <div class="relative flex flex-wrap text-sm">
                                <div
                                    status
                                    [class]="
                                        'text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm ' +
                                        status()
                                    "
                                >
                                    {{
                                        (status() === 'not-bookable'
                                            ? 'COMMON.STATUS_NOT_BOOKABLE'
                                            : 'COMMON.STATUS_' +
                                              (status() | uppercase)
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                    @if (next_booking() || current_booking()) {
                        <div
                            class="mt-1 flex items-center space-x-2 px-2 pb-2 text-sm"
                        >
                            <icon>alarm</icon>
                            <div>
                                Free
                                {{ current_booking() ? 'at' : 'until' }}
                                {{
                                    (current_booking()
                                        ? current_booking().date_end
                                        : next_booking().date
                                    ) | date: 'shortTime'
                                }}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            .top.left {
                border-radius: 0 0.5rem 0.5rem 0.5rem;
            }

            .top.right {
                border-radius: 0.5rem 0 0.5rem 0.5rem;
            }

            .bottom.left {
                border-radius: 0.5rem 0.5rem 0.5rem 0;
            }

            .bottom.right {
                border-radius: 0.5rem 0.5rem 0 0.5rem;
            }

            .triangle {
                width: 0px;
                height: 0px;
                border-style: solid;
                transform: rotate(0deg);
            }

            .top.left {
                .triangle {
                    top: 0.25rem;
                    left: 0.25rem;
                    border-width: 0.5rem 0.5rem 0 0;
                    border-color: currentColor transparent transparent
                        transparent;
                }
            }

            .top.right {
                .triangle {
                    top: 0.25rem;
                    right: 0.25rem;
                    border-width: 0.5rem 0 0 0.5rem;
                    border-color: currentColor transparent transparent
                        transparent;
                }
            }

            .bottom.left {
                .triangle {
                    bottom: 0.25rem;
                    left: 0.25rem;
                    border-width: 0 0.5rem 0.5rem 0;
                    border-color: transparent transparent currentColor
                        transparent;
                }
            }

            .bottom.right {
                .triangle {
                    bottom: 0.25rem;
                    right: 0.25rem;
                    border-width: 0 0 0.5rem 0.5rem;
                    border-color: transparent transparent currentColor
                        transparent;
                }
            }

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
        CommonModule,
        CustomTooltipComponent,
        IconComponent,
        TranslatePipe,
    ],
})
export class ExploreDeskInfoComponent extends AsyncHandler implements OnInit {
    private _details = inject<DeskInfoData>(MAP_FEATURE_DATA);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

    /** Space to display details for */
    public readonly status = computed(() => this._details.status?.());
    public readonly id = signal(this._details.id);
    public readonly map_id = signal(this._details.map_id);
    public readonly name = signal(this._details.name);
    public readonly user = this._details.user;
    public readonly start = signal(this._details.start);
    public readonly end = signal(this._details.end);
    public readonly department = signal(this._details.department);
    public readonly bookings = this._details.bookings;
    public readonly date = signal(this._details.date || Date.now());
    public readonly now = signal(Date.now());
    public readonly active_time = computed(() =>
        isSameDay(this.date(), Date.now()) ? this.now() : this.date(),
    );
    public readonly next_booking = computed(
        () =>
            this.bookings()
                .filter(
                    (booking) =>
                        booking.date > this.active_time() &&
                        isSameDay(booking.date, this.date()),
                )
                .sort((a, b) => a.date - b.date)[0],
    );
    public readonly current_booking = computed(() =>
        this.bookings().find(
            (booking) =>
                this.active_time() >= booking.date &&
                this.active_time() < booking.date_end,
        ),
    );
    public readonly display_booking = computed(
        () => this.next_booking() || null,
    );
    public readonly display_user = computed(
        () =>
            this.display_booking()?.user_name ||
            this.display_booking()?.booked_by_name ||
            this.user(),
    );
    public readonly display_start = computed(
        () => this.display_booking()?.date || this.start(),
    );
    public readonly display_end = computed(
        () => this.display_booking()?.date_end || this.end(),
    );

    public y_pos = signal<'top' | 'bottom'>('top');

    public x_pos = signal<'left' | 'right'>('left');

    public ngOnInit(tries = 0) {
        if (tries > 10) return;
        setTimeout(() => this.updatePosition(), 200);
        this.interval('time', () => this.now.set(Date.now()), 5000);
    }

    public updatePosition(tries = 0) {
        const parent = this._element.nativeElement.parentElement?.parentElement;
        if (!parent) return setTimeout(() => this.updatePosition(++tries), 200);
        const box = parent?.getBoundingClientRect();
        const wbox = document.body?.getBoundingClientRect();
        this.y_pos.set(box.y >= wbox.height / 2 ? 'bottom' : 'top');
        this.x_pos.set(box.x >= wbox.width / 2 ? 'right' : 'left');
    }
}
