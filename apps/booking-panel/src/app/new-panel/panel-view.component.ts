import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, RemoteLoggingService, VERSION } from '@placeos/common';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-view',
    template: `
        <button
            class="flex flex-col items-center h-full w-full overflow-hidden"
            (click)="action()"
        >
            <panel-view-details class="flex-1 w-full"></panel-view-details>
            <panel-view-status class="flex-1 w-full"></panel-view-status>
            <div
                *ngIf="show_offline"
                class="absolute inset-0 bg-contain bg-center bg-no-repeat z-40"
                [style.background-color]="offline_color"
                [style.background-image]="
                    'url(' + offline_image + ')' | safe: 'resource'
                "
            >
                <div
                    class="absolute top-4 left-4 w-1/2 flex items-center justify-center p-4 text-5xl bg-warning rounded shadow text-white font-medium"
                >
                    {{
                        name ||
                            (system | async)?.display_name ||
                            (system | async)?.name ||
                            '&lt;Unknown Space&gt;'
                    }}
                </div>
                <div
                    class="absolute bottom-4 right-4 flex items-center flex-col max-w-[25%] text-center"
                >
                    <div class="text-8xl">{{ capacity }}</div>
                    <div class="text-3xl">
                        {{ 'PANEL.ROOM_CAPACITY' | translate }}
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 p-2">
                <div class="text-xs opacity-40 w-full">
                    <ng-container i18n>Version: </ng-container>
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-40 w-full">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </button>
    `,
    styles: [``],
    providers: [PanelStateService],
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
            this._state.setting('disable_book_now_host') === false
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
        private _logger: RemoteLoggingService
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
            })
        );
        document.body.parentElement.classList.add('showing-panel');
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        document.body.parentElement.classList.remove('showing-panel');
    }
}
