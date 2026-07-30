import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler, i18n, notifyError } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { MeetingFlowSuccessComponent } from '../meeting-flow/meeting-flow-success.component';
import { MeetingFlowDetailsComponent } from './meeting-flow-details.component';
import { MeetingFlowOptionsComponent } from './meeting-flow-options.component';
import { MeetingFlowSpaceSelectComponent } from './meeting-flow-space-select.component';

@Component({
    selector: 'meeting-flow-new',
    template: `
        @if (flow_view() !== 'success') {
            <div cdkScrollable class="h-full w-full overflow-auto bg-base-200">
                <div
                    class="mx-auto min-h-full w-[80rem] max-w-full space-y-4 px-4 pt-4"
                >
                    <div
                        class="w-full rounded-xl border border-base-300 bg-base-100 p-4"
                    >
                        <h3 class="mb-4 text-2xl font-medium">
                            {{
                                'CALENDAR_EVENT.MEETING_FLOW_HEADER' | translate
                            }}
                        </h3>
                        <div class="flex items-center justify-center space-x-2">
                            <a
                                matRipple
                                class="flex items-center space-x-2 rounded p-2"
                                [routerLink]="[]"
                                [queryParams]="{ view: 0 }"
                            >
                                <div
                                    class="flex h-8 w-8 items-center justify-center rounded-full"
                                    [class.bg-base-200]="view() < 0"
                                    [class.bg-info]="view() === 0"
                                    [class.text-info-content]="view() === 0"
                                    [class.bg-success]="view() > 0"
                                    [class.text-success-content]="view() > 0"
                                >
                                    <icon>{{
                                        view() > 0 ? 'done' : 'edit'
                                    }}</icon>
                                </div>
                                <div class="hidden sm:block">
                                    {{ 'COMMON.DETAILS' | translate }}
                                </div>
                            </a>
                            <div class="h-0.5 w-16 bg-base-200"></div>
                            <a
                                matRipple
                                class="flex cursor-pointer items-center space-x-2 rounded p-2"
                                (click)="navigateToView(1)"
                            >
                                <div
                                    class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                                    [class.bg-base-200]="view() < 1"
                                    [class.bg-info]="view() === 1"
                                    [class.text-info-content]="view() === 1"
                                    [class.bg-success]="view() > 1"
                                    [class.text-success-content]="view() > 1"
                                >
                                    <icon>{{
                                        view() > 1 ? 'done' : 'room_preferences'
                                    }}</icon>
                                </div>
                                <div class="hidden sm:block">
                                    {{
                                        'CALENDAR_EVENT.MEETING_FLOW_STEP_SELECT_ROOM'
                                            | translate
                                    }}
                                </div>
                            </a>
                            <div class="h-0.5 w-16 bg-base-200"></div>
                            <a
                                matRipple
                                class="flex cursor-pointer items-center space-x-2 rounded p-2"
                                (click)="navigateToView(2)"
                            >
                                <div
                                    class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                                    [class.bg-base-200]="view() < 2"
                                    [class.bg-info]="view() === 2"
                                    [class.text-info-content]="view() === 2"
                                    [class.bg-success]="view() > 2"
                                    [class.text-success-content]="view() > 2"
                                >
                                    <icon>{{
                                        view() > 2 ? 'done' : 'task_alt'
                                    }}</icon>
                                </div>
                                <div class="hidden sm:block">
                                    {{
                                        'CALENDAR_EVENT.MEETING_FLOW_STEP_CONFIRM'
                                            | translate
                                    }}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="w-full">
                        @switch (view()) {
                            @case (0) {
                                <meeting-flow-details />
                            }
                            @case (1) {
                                <meeting-flow-space-select
                                    (prev)="previous()"
                                    (next)="next()"
                                />
                            }
                            @case (2) {
                                <meeting-flow-options />
                            }
                        }
                    </div>
                </div>
            </div>
        } @else {
            <meeting-flow-success />
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
            }
        `,
    ],
    imports: [
        CdkScrollable,
        IconComponent,
        MatRippleModule,
        MeetingFlowDetailsComponent,
        MeetingFlowSpaceSelectComponent,
        MeetingFlowOptionsComponent,
        RouterModule,
        TranslatePipe,
        MeetingFlowSuccessComponent,
    ],
})
export class MeetingFlowNewComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _event_form = inject(EventFormService);

    public readonly view = signal(0);
    public readonly flow_view = this._event_form.view;
    public readonly form_value = this._event_form.model;

    public readonly has_title = computed(
        () => !!this.form_value()?.title?.trim(),
    );

    public readonly has_space = computed(
        () =>
            !!this.form_value()?.resources &&
            this.form_value()?.resources.length > 0,
    );

    public readonly previous = () =>
        this.view.update((u) => Math.max(0, u - 1));
    public readonly next = () => this.view.update((u) => u + 1);

    public navigateToView(target_view: number) {
        // Check requirements based on target view
        if (target_view === 1 && !this.has_title()) {
            notifyError(i18n('CALENDAR_EVENT.ERROR_TITLE_REQUIRED_SELECT'));
            return;
        }
        if (target_view === 2 && !this.has_space()) {
            notifyError(i18n('CALENDAR_EVENT.ERROR_ROOM_REQUIRED'));
            return;
        }

        // Navigate if requirements are met
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: target_view },
            queryParamsHandling: 'merge',
        });
    }

    public ngOnInit() {
        this._event_form.loadForm();
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._event_form.setView(param.get('step') as any);
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('view')) {
                    if (Number.isNaN(+params.get('view'))) return;
                    this.view.update((o) => +params.get('view'));
                }
            }),
        );
    }
}
