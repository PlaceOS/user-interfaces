import { Component, inject, OnInit, signal } from '@angular/core';
import { startOfMinute } from 'date-fns';

import { AsyncHandler, generateQRCode } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@placeos/components';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-view-details',
    template: `
        <div class="relative h-full w-full bg-black text-white">
            @if (room_image) {
                <div
                    class="absolute inset-0 bg-cover bg-center"
                    [style.background-image]="'url(' + room_image + ')'"
                ></div>
            }
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div name class="absolute top-4 left-4 text-4xl font-medium">
                @let sys = system | async;
                {{ sys?.display_name || sys?.name || '' }}
            </div>
            @if (checkin) {
                <div
                    qr-checkin
                    class="absolute top-4 right-4 z-50 w-40 space-y-4 text-xl"
                >
                    <img class="w-full" [src]="qr_code()" />
                    @if (!hide_qr_text) {
                        <div class="w-full text-lg">
                            {{ 'APP.BOOKING_PANEL.SCAN_QR_CODE' | translate }}
                        </div>
                    }
                </div>
            }
            @if (
                (current | async) &&
                !hide_meeting_details &&
                !hide_meeting_title
            ) {
                <div
                    class="absolute inset-x-0 bottom-0 p-4 text-center text-3xl text-white"
                >
                    <div class="bg-neutral absolute inset-0 opacity-30"></div>
                    <div class="relative">
                        {{ (current | async)?.title }}
                        <span class="font-light">{{
                            'APP.BOOKING_PANEL.MEETING_IN_PROGRESS' | translate
                        }}</span>
                    </div>
                </div>
            }
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 text-center font-normal"
                [class.pb-8]="
                    (current | async) &&
                    !hide_meeting_details &&
                    !hide_meeting_title
                "
            >
                <p class="text-3xl">
                    {{ time() | date: 'EEE, MMM d, y h:mm a' }}
                </p>
                @if ((current | async) && !hide_meeting_details) {
                    <p class="text-4xl">
                        {{ 'APP.BOOKING_PANEL.HOST' | translate }}
                        {{
                            (current | async)?.organiser?.name ||
                                (current | async)?.host
                        }}
                    </p>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [CommonModule, TranslatePipe],
})
export class PanelViewDetailsComponent extends AsyncHandler implements OnInit {
    private _state = inject(PanelStateService);

    public readonly system = this._state.space;
    public readonly current = this._state.current;
    public readonly qr_code = signal('');

    public readonly time = signal(Date.now());

    public get hide_meeting_details() {
        return this._state.setting('hide_meeting_details');
    }

    public get hide_meeting_title() {
        return this._state.setting('hide_meeting_title');
    }

    public get room_image() {
        return this._state.setting('room_image');
    }

    public get checkin() {
        return this._state.setting('show_qr_code') !== false;
    }

    public get custom_qr() {
        return !!this._state.setting('custom_qr_url');
    }

    public get hide_qr_text() {
        return this._state.setting('hide_qr_text');
    }

    public async ngOnInit() {
        this.interval(
            'time',
            () => this.time.set(startOfMinute(Date.now()).valueOf()),
            5 * 1000,
        );
        this.subscription('current', this._state.current.subscribe());
        this.subscription(
            'settings',
            this._state.settings.subscribe(
                ({ custom_qr_url, custom_qr_color, disable_book_now_host }) => {
                    if (custom_qr_url) {
                        this.qr_code.set(
                            generateQRCode(
                                custom_qr_url.replace(
                                    '{system_id}',
                                    this._state.system,
                                ),
                                '#fff0',
                                custom_qr_color || '#fff',
                            ),
                        );
                    } else if (!this.qr_code()) {
                        const url = `${location.origin}${location.pathname}#/checkin/${this._state.system}`;
                        this.qr_code.set(
                            generateQRCode(
                                url,
                                '#fff0',
                                custom_qr_color || '#fff',
                            ),
                        );
                    }
                },
            ),
        );
    }
}
