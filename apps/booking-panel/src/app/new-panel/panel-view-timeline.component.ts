import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { PanelStateService } from '../panel-state.service';
import { timelineData, timelineStart } from './helpers';

@Component({
    selector: 'panel-view-timeline',
    template: `
        <aside
            timeline
            class="h-full w-full overflow-hidden text-white"
            [class.horizontal]="horizontal()"
            role="img"
            [attr.aria-label]="'APP.BOOKING_PANEL.SCHEDULE' | translate"
        >
            @let data = timeline();
            <div timeline-track>
                @for (block of data.blocks; track block.id) {
                    <div block [class.hour]="block.on_hour">
                        @if (block.on_hour) {
                            <span hour-label>{{ block.hour }}</span>
                        }
                    </div>
                }
                <div bookings>
                    @for (booking of data.bookings; track booking.id) {
                        <div
                            booking
                            [style.--start]="booking.start + '%'"
                            [style.--size]="booking.size + '%'"
                            [attr.title]="booking.title"
                        ></div>
                    }
                </div>
                <div now [style.--now]="data.now + '%'">
                    <span now-dot></span>
                    <span now-line></span>
                </div>
            </div>
        </aside>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            [timeline] {
                width: 100%;
                height: 100%;
                padding: 0.75rem 0.625rem;
                border: 1px solid rgba(255, 255, 255, 0.14);
                border-radius: 1.5rem;
                background: linear-gradient(
                    180deg,
                    rgba(28, 26, 29, 0.97),
                    rgba(16, 15, 17, 0.97)
                );
                box-shadow:
                    0 1rem 2.5rem rgba(0, 0, 0, 0.35),
                    inset 0 1px 0 rgba(255, 255, 255, 0.08);
            }

            :host(.docked) [timeline] {
                border: 0;
                border-radius: 0;
            }

            :host([timeline-left]) [timeline] {
                border-right: 1px solid rgba(255, 255, 255, 0.14);
            }

            :host([timeline-right]) [timeline] {
                border-left: 1px solid rgba(255, 255, 255, 0.14);
            }

            :host([timeline-bottom]) [timeline] {
                border-top: 1px solid rgba(255, 255, 255, 0.14);
            }

            [timeline-track] {
                position: relative;
                display: flex;
                flex-direction: column;
                height: 100%;
                min-height: 0;
                padding-left: 2.25rem;
            }

            [block] {
                position: relative;
                min-height: 0;
                flex: 1;
                border-top: 1px solid rgba(255, 255, 255, 0.055);
            }

            [block].hour {
                border-color: rgba(255, 255, 255, 0.2);
            }

            [bookings] {
                position: absolute;
                z-index: 1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 2.25rem;
            }

            [booking] {
                position: absolute;
                top: var(--start);
                right: 0;
                left: 0;
                height: var(--size);
                background: var(--error);
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
            }

            [hour-label] {
                position: absolute;
                top: 0;
                right: calc(100% + 0.5rem);
                width: 1.75rem;
                transform: translateY(-50%);
                color: rgba(255, 255, 255, 0.68);
                font-size: 0.625rem;
                font-weight: 500;
                font-variant-numeric: tabular-nums;
                line-height: 1;
                text-align: right;
                letter-spacing: 0.025em;
            }

            [now] {
                position: absolute;
                z-index: 2;
                top: var(--now);
                right: -0.125rem;
                left: 2rem;
                display: flex;
                align-items: center;
                transform: translateY(-50%);
                transition: top 1s linear;
                pointer-events: none;
            }

            [now-dot] {
                width: 0.625rem;
                height: 0.625rem;
                flex: none;
                border: 2px solid rgba(16, 15, 17, 0.95);
                border-radius: 50%;
                background: #f5f3f4;
                box-shadow: 0 0 0 2px rgba(245, 243, 244, 0.24);
            }

            [now-line] {
                height: 2px;
                flex: 1;
                background: #f5f3f4;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
            }

            [timeline].horizontal {
                padding: 0.625rem 0.75rem;
            }

            [timeline].horizontal [timeline-track] {
                flex-direction: row;
                padding-top: 1.5rem;
                padding-left: 0;
            }

            [timeline].horizontal [block] {
                border-top: 0;
                border-left: 1px solid rgba(255, 255, 255, 0.055);
            }

            [timeline].horizontal [block].hour {
                border-color: rgba(255, 255, 255, 0.2);
            }

            [timeline].horizontal [bookings] {
                top: 1.5rem;
                right: 0;
                bottom: 0;
                left: 0;
            }

            [timeline].horizontal [booking] {
                top: 0;
                bottom: 0;
                left: var(--start);
                width: var(--size);
                height: auto;
            }

            [timeline].horizontal [hour-label] {
                top: auto;
                bottom: calc(100% + 0.5rem);
                left: 0;
                right: auto;
                width: max-content;
                transform: translateX(-50%);
                text-align: center;
            }

            [timeline].horizontal [now] {
                top: 1.25rem;
                right: auto;
                bottom: -0.125rem;
                left: var(--now);
                flex-direction: column;
                transform: translateX(-50%);
                transition: left 1s linear;
            }

            [timeline].horizontal [now-line] {
                width: 2px;
                height: auto;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslatePipe],
})
export class PanelViewTimelineComponent extends AsyncHandler {
    private _state = inject(PanelStateService);
    private _clock = signal(Date.now());
    private _timeline_start = signal(timelineStart(this._clock()));

    public readonly timeline = computed(() =>
        timelineData(
            this._state.bookings(),
            this._clock(),
            this._timeline_start(),
        ),
    );
    public readonly horizontal = input(false);

    constructor() {
        super();
        this.interval(
            'clock',
            () => {
                const now = Date.now();
                if (now >= this._timeline_start() + 12 * 60 * 60 * 1000) {
                    this._timeline_start.set(timelineStart(now));
                }
                this._clock.set(now);
            },
            1000,
        );
    }
}
