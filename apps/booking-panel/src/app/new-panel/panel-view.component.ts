import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, RemoteLoggingService, VERSION } from '@placeos/common';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-view',
    template: `
        <button
            class="flex h-full w-full flex-col items-center overflow-hidden"
            (click)="action()"
        >
            <panel-view-details class="w-full flex-1"></panel-view-details>
            <panel-view-status class="w-full flex-1"></panel-view-status>
            <div
                *ngIf="show_offline"
                class="absolute inset-0 z-40 bg-contain bg-center bg-no-repeat"
                [style.background-color]="offline_color"
                [style.background-image]="
                    'url(' + offline_image + ')' | safe: 'resource'
                "
            >
                <div
                    class="absolute left-4 top-4 flex w-1/2 items-center justify-center rounded bg-warning p-4 text-5xl font-medium text-white shadow"
                >
                    {{
                        name ||
                            (system | async)?.display_name ||
                            (system | async)?.name ||
                            '&lt;Unknown Space&gt;'
                    }}
                </div>
                <div
                    class="absolute bottom-4 right-4 flex max-w-[25%] flex-col items-center text-center"
                >
                    <div class="text-8xl">{{ capacity }}</div>
                    <div class="text-3xl">
                        {{ 'APP.BOOKING_PANEL.ROOM_CAPACITY' | translate }}
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 p-2">
                <div class="w-full text-xs opacity-40">
                    <ng-container
                        >{{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    </ng-container>
                    {{ version.hash }}
                </div>
                <div class="w-full text-xs opacity-40">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </button>
    `,
    styles: [``],
    providers: [PanelStateService],
    standalone: false,
})
export class PanelViewComponent extends AsyncHandler {
    public readonly system = this._state.space;

    public get version() {
        return VERSION;
    }

    public get name() {
        return this._state.setting('room_name');
    }

    public get show_offline() {
        return (
            this._state.setting('disable_book_now') &&
            this._state.setting('offline_image')
        );
    }

    public get offline_image() {
        return (
            this._state.setting('offline_image') ||
            this._state.setting('room_image')
        );
    }

    public get offline_color() {
        return this._state.setting('offline_color') || '#FFFFFF';
    }

    public get capacity() {
        return this._state.setting('room_capacity');
    }

    public get can_book() {
        return this._state.setting('disable_book_now') !== true;
    }

    public readonly book = () =>
        this._state.newBooking(
            Date.now(),
            this._state.setting('disable_book_now_host') === false,
        );
    public readonly checkin = () => this._state.checkin();
    public readonly endMeeting = () => this._state.confirmEnd();

    public action() {
        this.timeout('action', () => {
            const status = this._state.setting('status');
            if (status === 'busy') {
                if (this._state.setting('enable_end_meeting_button') === true) {
                    this.endMeeting();
                }
            } else if (this.can_book) {
                status === 'pending' ? this.checkin() : this.book();
            }
        });
    }

    constructor(
        private _state: PanelStateService,
        private _route: ActivatedRoute,
        private _logger: RemoteLoggingService,
    ) {
        super();
    }

    public ngOnInit() {
        this._state.system = '';
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this._state.system = params.get('system_id');
                    this._logger.setMetadata(params.get('system_id'));
                }
            }),
        );
        document.body.parentElement.classList.add('showing-panel');
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        document.body.parentElement.classList.remove('showing-panel');
    }
}
