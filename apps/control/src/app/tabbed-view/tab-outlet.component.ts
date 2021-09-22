import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { VideoCallStateService } from '../video-call/video-call-state.service';

@Component({
    selector: 'tab-outlet,[tab-outlet]',
    template: `
        <div
            class="h-full w-full flex flex-col items-center overflow-auto px-2 pt-2"
        >
            <div class="flex items-center w-full px-1 pt-2 overflow-hidden">
                <a
                    mat-button
                    class="h-24 w-32 rounded-t rounded-b-none shadow mx-1 flex flex-col border-t border-l border-r items-center justify-center leading-tight overflow-hidden"
                    [routerLink]="['/tabbed', id, tab.id || tab.icon]"
                    routerLinkActive="border-primary bg-white text-primary"
                    *ngFor="let tab of tabs | async"
                >
                    <app-icon class="text-5xl">{{ tab.icon }}</app-icon>
                    <p>{{ tab.name }}</p>
                </a>
            </div>
            <div
                class="flex-1 h-1/2 w-full bg-white rounded shadow flex items-center divide-x divide-gray-200 text-black"
            >
                <div
                    class="flex-1 h-full space-y-2 px-4 pt-2 pb-4 overflow-auto"
                    *ngIf="(inputs | async)?.length !== 1"
                >
                    <h3 class="text-center p-2 font-medium text-lg">
                        Available Inputs
                    </h3>
                    <button
                        mat-button
                        class="w-full"
                        *ngFor="let input of inputs | async"
                        (click)="setInput(input)"
                    >
                        {{ input?.name }}
                    </button>
                    <div
                        class="flex-1 h-1/2 w-full p-8 flex items-center justify-center opacity-30"
                        *ngIf="!(inputs | async)?.length"
                    >
                        No inputs available for category
                    </div>
                </div>
                <div
                    style="flex: 2"
                    class="h-full relative overflow-auto min-h-full"
                >
                    <ng-container [ngSwitch]="(tab | async)?.controls">
                        <ng-container *ngSwitchCase="'vidconf-controls'">
                            <ng-template #no_call_state>
                                <video-call-dial-view></video-call-dial-view>
                            </ng-template>
                            <div
                                *ngIf="call | async; else no_call_state"
                                video-call-page
                            ></div>
                        </ng-container>
                        <ng-container *ngSwitchCase="'help'">
                            <div class="p-4">{{ help | async | markdown }}</div>
                        </ng-container>
                        <ng-container *ngSwitchDefault>
                            <div
                                class="h-full w-full flex items-center justify-center"
                            >
                                <p>
                                    No controls available for this input source
                                </p>
                            </div>
                        </ng-container>
                    </ng-container>
                </div>
            </div>
            <div class="w-full">
                <device-output-list></device-output-list>
            </div>
        </div>
    `,
    styles: [
        `
            a {
                background-color: #eee;
                color: #000;
            }
        `,
    ],
})
export class TabOutletComponent extends BaseClass {
    public readonly active_tab = new BehaviorSubject('');
    public readonly tabs = this._service.tabs;
    public readonly call = this._vc_state.call;
    public readonly tab = combineLatest([
        this._service.tabs,
        this.active_tab,
    ]).pipe(map(([_, id]) => _.find((t: any) => (t.id || t.icon) === id)));
    public readonly help = combineLatest([
        this._service.help_items,
        this.tab,
    ]).pipe(map(([_, t]) => _.find((h: any) => h.id === t.help)));

    public readonly inputs = combineLatest([
        this.active_tab,
        this.tabs,
        this._service.input_list,
    ]).pipe(
        map(([id, tabs, inputs]) => {
            const tab = tabs.find((_: any) => (_.id || _.icon) === id);
            console.log('Inputs:', id, tabs, inputs, tab);
            if (!tab) return inputs;
            return inputs.filter(
                (_) =>
                    (!tab.inputs && (!tab.type || _.type === tab.type)) ||
                    (tab.inputs &&
                        (tab.inputs.includes(_.id) ||
                            tab.inputs.includes(_.mod)))
            );
        })
    );

    public setInput = (s) => this._service.setOutputSource(s.id);

    public get id() {
        return this._service.id;
    }

    constructor(
        private _service: ControlStateService,
        private _vc_state: VideoCallStateService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) =>
                this.active_tab.next(
                    params.get('tab') || this.active_tab.getValue()
                )
            )
        );
    }
}
