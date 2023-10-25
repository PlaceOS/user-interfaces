import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'placeos-book-meeting-flow',
    template: `
        <div class="bg-base-100 h-full w-full z-50" [ngSwitch]="view">
            <meeting-flow-success *ngSwitchCase="'success'">
            </meeting-flow-success>
            <meeting-flow-confirm *ngSwitchCase="'confirm'">
            </meeting-flow-confirm>
            <meeting-flow-form *ngSwitchDefault></meeting-flow-form>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class BookMeetingFlowComponent extends AsyncHandler implements OnInit {
    public get view() {
        return this._state.view;
    }
    public get last_success() {
        return this._state.last_success;
    }

    constructor(
        private _state: EventFormService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this._state.loadForm();
        this._state.listenForStatusChanges();
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._state.setView(param.get('step') as any);
            })
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((param) => {
                if (param.has('success')) this._state.setView('success');
            })
        );
    }
}
