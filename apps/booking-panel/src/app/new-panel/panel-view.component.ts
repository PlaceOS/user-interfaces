import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, RemoteLoggingService, VERSION } from '@placeos/common';
import { SafePipe, TranslatePipe } from '@placeos/components';
import {
    PanelStateService,
    PanelTimelinePosition,
} from '../panel-state.service';
import { PanelViewDetailsComponent } from './panel-view-details.component';
import { PanelViewStatusComponent } from './panel-view-status.component';
import { PanelViewTimelineComponent } from './panel-view-timeline.component';

@Component({
    selector: 'panel-view',
    template: `
        <button
            class="relative flex h-full w-full items-stretch overflow-hidden"
            (click)="action()"
        >
            @let position = timeline_position;
            @if (show_timeline && position === 'left') {
                <panel-view-timeline
                    timeline-left
                    class="docked h-full w-28 shrink-0"
                ></panel-view-timeline>
            }
            <div class="flex h-full min-w-0 flex-1 flex-col">
                <div class="relative flex min-h-0 flex-1 flex-col">
                    <panel-view-details
                        class="min-h-0 w-full flex-1"
                    ></panel-view-details>
                    <panel-view-status
                        class="min-h-0 w-full flex-1"
                    ></panel-view-status>
                    <div
                        class="absolute right-0 bottom-0 p-2"
                        [style.bottom.rem]="
                            show_timeline && position === 'floating-bottom'
                                ? 6.5
                                : 0
                        "
                    >
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
                </div>
                @if (show_timeline && position === 'bottom') {
                    <panel-view-timeline
                        timeline-bottom
                        class="docked h-24 w-full shrink-0"
                        [horizontal]="true"
                    ></panel-view-timeline>
                }
            </div>
            @if (show_timeline && position === 'right') {
                <panel-view-timeline
                    timeline-right
                    class="docked h-full w-28 shrink-0"
                ></panel-view-timeline>
            }
            @if (show_timeline && position === 'floating-left') {
                <panel-view-timeline
                    timeline-floating-left
                    class="absolute inset-y-24 left-5 z-30 w-28"
                ></panel-view-timeline>
            }
            @if (show_timeline && position === 'floating-bottom') {
                <panel-view-timeline
                    timeline-floating-bottom
                    class="absolute inset-x-24 bottom-5 z-30 h-20"
                    [horizontal]="true"
                ></panel-view-timeline>
            }
            @if (show_offline) {
                <div
                    class="absolute inset-0 z-40 bg-contain bg-center bg-no-repeat"
                    [style.background-color]="offline_color"
                    [style.background-image]="
                        'url(' + offline_image + ')' | safe: 'resource'
                    "
                >
                    <div
                        class="bg-warning absolute top-4 left-4 flex w-1/2 items-center justify-center rounded-sm p-4 text-5xl font-medium text-white shadow-sm"
                    >
                        {{
                            name ||
                                system()?.display_name ||
                                system()?.name ||
                                '&lt;Unknown Space&gt;'
                        }}
                    </div>
                    <div
                        class="absolute right-4 bottom-4 flex max-w-[25%] flex-col items-center text-center"
                    >
                        <div class="text-8xl">{{ capacity }}</div>
                        <div class="text-3xl">
                            {{ 'APP.BOOKING_PANEL.ROOM_CAPACITY' | translate }}
                        </div>
                    </div>
                </div>
            }
        </button>
    `,
    styles: [``],
    providers: [PanelStateService],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        PanelViewStatusComponent,
        PanelViewDetailsComponent,
        PanelViewTimelineComponent,
        CommonModule,
        TranslatePipe,
        SafePipe,
    ],
})
export class PanelViewComponent extends AsyncHandler {
    private _state = inject(PanelStateService);
    private _route = inject(ActivatedRoute);
    private _logger = inject(RemoteLoggingService);

    public readonly system = this._state.space;
    public readonly version = VERSION;

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

    public get show_timeline() {
        return this._state.setting('show_timeline') === true;
    }

    public get timeline_position(): PanelTimelinePosition {
        return this._state.setting('timeline_position') || 'floating-left';
    }

    public get can_book() {
        return this._state.setting('disable_book_now') !== true;
    }

    public readonly book = () =>
        this._state.newBooking(
            Date.now(),
            this._state.setting('disable_book_now_host') !== false,
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

    public ngOnInit() {
        this._state.system = '';
        const params = this._route.snapshot.paramMap;
        if (params.has('system_id')) {
            this._state.system = params.get('system_id');
            this._logger.setMetadata(params.get('system_id'));
        }
        document.body.parentElement.classList.add('showing-panel');
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        document.body.parentElement.classList.remove('showing-panel');
    }
}
