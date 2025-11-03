import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MeetingFlowDetailsComponent } from './meeting-flow-details.component';
import { MeetingFlowOptionsComponent } from './meeting-flow-options.component';
import { MeetingFlowSpaceSelectComponent } from './meeting-flow-space-select.component';

@Component({
    selector: 'meeting-flow',
    template: `
        <div class="h-full w-full overflow-auto bg-base-200">
            <div
                class="mx-auto min-h-full w-[64rem] max-w-full space-y-4 px-4 pt-4"
            >
                <div
                    class="w-full rounded-xl border border-base-300 bg-base-100 p-4"
                >
                    <h3 class="mb-4 text-2xl font-medium">
                        Book a meeting room
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
                                <icon>{{ view() > 0 ? 'done' : 'edit' }}</icon>
                            </div>
                            <div class="hidden sm:block">Details</div>
                        </a>
                        <div class="h-0.5 w-16 bg-base-200"></div>
                        <a
                            matRipple
                            class="flex items-center space-x-2 rounded p-2"
                            (click)="view.set(1)"
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
                            <div class="hidden sm:block">Select Room</div>
                        </a>
                        <div class="h-0.5 w-16 bg-base-200"></div>
                        <a
                            matRipple
                            class="flex items-center space-x-2 rounded p-2"
                            [routerLink]="[]"
                            [queryParams]="{ view: 2 }"
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
                            <div class="hidden sm:block">Confirm & Options</div>
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
    `,
    styles: [``],
    imports: [
        IconComponent,
        MatRippleModule,
        MeetingFlowDetailsComponent,
        MeetingFlowSpaceSelectComponent,
        MeetingFlowOptionsComponent,
        RouterModule,
    ],
})
export class MeetingFlowComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);

    public readonly view = signal(0);

    public readonly previous = () =>
        this.view.update((u) => Math.max(0, u - 1));
    public readonly next = () => this.view.update((u) => u + 1);

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('view')) {
                    if (Number.isNaN(+params.get('view'))) return;
                    this.view.update((old) => +params.get('view'));
                }
            }),
        );
    }
}
