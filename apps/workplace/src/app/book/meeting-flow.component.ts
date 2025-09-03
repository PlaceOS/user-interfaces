import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'placeos-book-meeting-flow',
    template: `
        <div class="z-50 h-full w-full bg-base-100">
            @switch (view()) {
                @case ('success') {
                    <meeting-flow-success> </meeting-flow-success>
                }
                @case ('confirm') {
                    <meeting-flow-confirm> </meeting-flow-confirm>
                }
                @default {
                    <meeting-flow-form></meeting-flow-form>
                }
            }
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
    standalone: false,
})
export class BookMeetingFlowComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventFormService);
    private _route = inject(ActivatedRoute);

    public readonly view = signal('form');
    public readonly last_success = this._state.last_success;

    public ngOnInit() {
        this._state.loadForm();
        this.subscription(
            'state:view',
            this._state.view$.subscribe((v) => this.view.set(v)),
        );
        this.subscription(
            'state:rooms',
            this._state.available_spaces.subscribe(),
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._state.setView(param.get('step') as any);
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((param) => {
                if (param.has('success')) this._state.setView('success');
            }),
        );
    }
}
