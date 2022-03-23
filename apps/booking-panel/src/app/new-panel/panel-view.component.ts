import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-view',
    template: `
        <div class="flex flex-col items-center h-full w-full overflow-hidden">
            <panel-view-details class="flex-1 w-full"> </panel-view-details>
            <panel-view-status class="flex-1 w-full"> </panel-view-status>
            <div
                *ngIf="show_offline"
                class="absolute inset-0 bg-contain bg-center bg-no-repeat"
                [style.background-color]="offline_color"
                [style.background-image]="
                    'url(' + offline_image + ')' | safe: 'resource'
                "
            >
                <div
                    class="absolute top-4 left-4 w-1/2 flex items-center justify-center p-8 text-3xl bg-pending rounded shadow"
                >
                    {{
                        (system | async)?.display_name ||
                            (system | async)?.name ||
                            '&lt;Unknown Space&gt;'
                    }}
                </div>
                <div class="absolute bottom-4 right-4 flex items-center flex-col max-w-[25%]">
                    <div class="">Please ensure that no more than</div>
                    <div class="">{{ capacity }}</div>
                    <div class="">people are using this meeting space at any one time</div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    providers: [PanelStateService],
})
export class PanelViewComponent extends BaseClass {
    public readonly system = this._state.space;

    public get show_offline() {
        return (
            this._state.setting('disable_book_now') &&
            this._state.setting('offline_image')
        );
    }

    public get offline_image() {
        return this._state.setting('offline_image');
    }

    public get offline_color() {
        return this._state.setting('offline_color');
    }

    public get capacity() {
        return this._state.setting('room_capacity');
    }

    constructor(
        private _state: PanelStateService,
        private _route: ActivatedRoute
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
