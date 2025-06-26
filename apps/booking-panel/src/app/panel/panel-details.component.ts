import { Component, inject } from '@angular/core';

import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-details',
    template: `
        <h1 class="mb-8 text-4xl font-medium">
            {{
                (space | async)?.display_name ||
                    (space | async)?.name ||
                    '&lt;Unknown Space&gt;'
            }}
        </h1>
        @if ((space | async)?.description) {
            <p>
                {{ (space | async)?.description }}
            </p>
        }
        @if (!(options | async)?.hide_actions) {
            <div class="flex flex-col items-center space-y-2">
                @if (!(options | async)?.disable_book_now) {
                    <button
                        event
                        btn
                        matRipple
                        class="w-48"
                        (click)="newEvent()"
                    >
                        <div class="flex items-center justify-center">
                            <icon class="text-xl">add_circle_outline</icon>
                            <span class="mx-2">New Event</span>
                        </div>
                    </button>
                }
                @if ((options | async)?.control_ui) {
                    <button
                        control
                        btn
                        matRipple
                        class="w-48"
                        (click)="viewControl()"
                    >
                        <div class="flex items-center justify-center">
                            <icon class="text-xl">settings_remote</icon>
                            <span class="mx-2">View Control</span>
                        </div>
                    </button>
                }
                @if ((options | async)?.catering_ui) {
                    <button
                        waiter
                        btn
                        matRipple
                        class="w-48"
                        (click)="callWaiter()"
                    >
                        <div class="flex items-center justify-center">
                            <icon class="text-xl">room_service</icon>
                            <span class="mx-2">Call Waiter</span>
                        </div>
                    </button>
                }
            </div>
        } @else {
            <div class="flex flex-col items-center">
                <p>No available actions for this space</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `,
    ],
    standalone: false,
})
export class PanelDetailsComponent {
    private _state = inject(PanelStateService);

    public readonly space = this._state.space;
    public readonly options = this._state.settings;
    public readonly newEvent = () => this._state.newBooking();

    public readonly callWaiter = () => this._state.confirmWaiter();

    public readonly viewControl = () => this._state.viewControl();
}
