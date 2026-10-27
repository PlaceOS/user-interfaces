import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { startOfMinute } from 'date-fns';

import { AsyncHandler } from '@placeos/common';
import { generateQRCode } from '@placeos/common/qr-code';

import { CommonModule } from '@angular/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { PanelStateService } from '../panel-state.service';
import { endingSoon } from './helpers';

@Component({
    selector: 'panel-view-details',
    template: `
        <div class="relative h-full w-full overflow-hidden bg-black text-white">
            @let cur = current();
            @let sys = system();
            @if (room_image) {
                <div class="absolute inset-0">
                    <img
                        auth
                        class="h-full w-full object-cover object-center"
                        [source]="room_image"
                    />
                </div>
            }
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="absolute top-4 left-4">
                <div name class="text-4xl font-medium">
                    {{ sys?.display_name || sys?.name || '' }}
                </div>
                @if (capacity) {
                    <div
                        capacity
                        class="mt-2 flex items-center space-x-2 text-2xl"
                        [attr.aria-label]="
                            ('APP.BOOKING_PANEL.ROOM_CAPACITY' | translate) +
                            ': ' +
                            capacity
                        "
                    >
                        <icon>group</icon>
                        <span>{{ capacity }}</span>
                    </div>
                }
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
            @if (cur && !hide_meeting_details && !hide_meeting_title) {
                <div
                    class="absolute inset-x-0 bottom-0 p-4 text-center text-3xl text-white"
                >
                    <div class="bg-neutral absolute inset-0 opacity-30"></div>
                    <div class="relative">
                        {{ cur?.title }}
                        <span class="font-light">{{
                            'APP.BOOKING_PANEL.MEETING_IN_PROGRESS' | translate
                        }}</span>
                    </div>
                </div>
            }
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-4 font-normal"
                [class.pb-8]="
                    cur && !hide_meeting_details && !hide_meeting_title
                "
            >
                <p class="text-3xl">
                    {{ time() | date: 'EEE, MMM d, y ' + time_format() }}
                </p>
                @if (cur && !hide_meeting_details) {
                    <p class="text-4xl">
                        {{ 'APP.BOOKING_PANEL.HOST' | translate }}
                        {{ cur?.organiser?.name || cur?.host }}
                    </p>
                }
                @if (ending_next(); as upcoming) {
                    <p
                        ending-warning
                        class="bg-warning text-warning-content rounded-sm px-4 py-2 text-2xl"
                    >
                        {{
                            'APP.BOOKING_PANEL.NEXT_STARTS_AT'
                                | translate
                                    : {
                                          time:
                                              upcoming.date
                                              | date: time_format(),
                                      }
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
    imports: [
        CommonModule,
        TranslatePipe,
        AuthenticatedImageDirective,
        IconComponent,
    ],
})
export class PanelViewDetailsComponent extends AsyncHandler implements OnInit {
    private _state = inject(PanelStateService);

    public readonly system = this._state.space;
    public readonly current = this._state.current;
    private readonly _qr_url = computed(
        () => this._state.settings().custom_qr_url,
    );
    private readonly _qr_color = computed(
        () => this._state.settings().custom_qr_color,
    );
    /** Check-in QR code. Encoded again only when the QR settings or system change. */
    public readonly qr_code = computed(() => {
        const system_id = this._state.system;
        const url =
            this._qr_url()?.replace('{system_id}', system_id) ||
            `${location.origin}${location.pathname}#/checkin/${system_id}`;
        return generateQRCode(url, '#fff0', this._qr_color() || '#fff');
    });

    public readonly time = signal(Date.now());
    public readonly time_format = this._state.time_format;

    /** Next booking when the `ending_warning` feature is on and the current booking ends soon */
    public readonly ending_next = computed(() => {
        const now = this._state.clock();
        if (!this._state.hasFeature('ending_warning')) return null;
        return endingSoon(this._state.current(), this._state.next(), now);
    });

    public get hide_meeting_details() {
        return this._state.setting('hide_meeting_details');
    }

    public get hide_meeting_title() {
        return this._state.setting('hide_meeting_title');
    }

    public get capacity() {
        return this._state.setting('room_capacity');
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
    }
}
