import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, notifyInfo } from '@placeos/common';
import { EventFormService, SpacePipe } from '@placeos/events';
import { MeetingFlowConfirmComponent } from './meeting-flow/meeting-flow-confirm.component';
import { MeetingFlowFormComponent } from './meeting-flow/meeting-flow-form.component';
import { MeetingFlowSuccessComponent } from './meeting-flow/meeting-flow-success.component';

@Component({
    selector: 'placeos-book-meeting-flow',
    template: `
        <div class="bg-base-100 z-50 h-full w-full">
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
    imports: [
        MeetingFlowSuccessComponent,
        MeetingFlowConfirmComponent,
        MeetingFlowFormComponent,
    ],
    providers: [SpacePipe],
})
export class BookMeetingFlowComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventFormService);
    private _route = inject(ActivatedRoute);
    private _space_pipe = inject(SpacePipe);

    public readonly view = this._state.view;
    public readonly last_success = this._state.last_success;

    public ngOnInit() {
        this._state.loadForm();
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._state.setView(param.get('step') as any);
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (param) => {
                if (param.has('success')) this._state.setView('success');
                if (param.has('space_id')) {
                    const space = await this._space_pipe.transform(
                        param.get('space_id'),
                    );
                    if (!space?.id) {
                        return notifyInfo(
                            'Unable to find room with given space ID.',
                        );
                    }
                    this._state.model.update((m) => ({
                        ...m,
                        resources: [space],
                    }));
                }
            }),
        );
    }
}
