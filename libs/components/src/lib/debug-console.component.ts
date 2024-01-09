import { Component, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import {
    ClientEvent,
    RemoteLoggingService,
} from 'libs/common/src/lib/remote-logging.service';
import { JsonDisplayComponent } from './json-display.component';

const COLOR_MAP = {
    console: 'bg-success-light text-black',
    network: 'bg-success text-success-content',
    dom: 'bg-warning-light text-black',

    log: `bg-info-light text-black`,
    info: `bg-info text-info-content`,
    warn: `bg-warning text-warning-content`,
    debug: `bg-base-300 text-base-content`,
    error: `bg-error text-error-content`,
};

const URL_STARTS = [
    'tel:',
    'mailto:',
    'http:',
    'https:',
    'ftp:',
    'ws:',
    'wss:',
];

@Component({
    selector: `debug-console`,
    template: `
        <div
            class="absolute bottom-2 left-2 max-w-[80vw] w-[40rem] border border-base-300 bg-base-200 text-base-content shadow rounded overflow-hidden h-[24rem] max-h-[65vh] flex flex-col z-[998]"
            *ngIf="show"
        >
            <div class="flex items-center justify-between bg-base-100">
                <div class="p-2">Console</div>
                <button icon matRipple (click)="show = false">
                    <app-icon>close</app-icon>
                </button>
            </div>
            <cdk-virtual-scroll-viewport
                itemSize="32"
                class="flex-1 h-[30rem] max-h-full w-full"
            >
                <div
                    class="font-mono h-8 truncate p-2 text-sm flex items-center max-w-full hover:bg-base-100 space-x-1"
                    *cdkVirtualFor="
                        let log of filtered_logs | async;
                        trackBy: trackByFn
                    "
                >
                    <div
                        class="uppercase text-xs p-1 bg-base-100/10 rounded font-mono"
                    >
                        {{ log.timestamp | date: 'MMM d HH:mm:ss' }}
                    </div>
                    <div
                        [class]="
                            'uppercase text-xs p-1 ' +
                            colors[log.type] +
                            ' rounded font-mono'
                        "
                    >
                        {{ log.type }}
                    </div>
                    <div
                        [class]="
                            'capitalize text-xs p-1 ' +
                            colors[log.subtype] +
                            ' rounded font-mono w-16 text-center'
                        "
                    >
                        {{ log.subtype }}
                    </div>
                    <div
                        class="font-mono pl-1"
                        *ngFor="let obj of log.data"
                        [attr.data-type]="type(obj)"
                    >
                        <ng-container [ngSwitch]="type(obj)">
                            <ng-container *ngSwitchCase="'link'">
                                <a
                                    class="font-mono"
                                    [href]="obj | sanitize"
                                    target="_blank"
                                    rel="noopener noreferer"
                                    >{{ obj }}</a
                                >
                            </ng-container>
                            <ng-container *ngSwitchCase="'object'">
                                [<span
                                    class="underline font-mono hover:text-info"
                                    customTooltip
                                    xPosition="center"
                                    yPosition="bottom"
                                    [content]="json_tooltip"
                                    [data]="obj"
                                    [hover]="true"
                                    [backdrop]="false"
                                    >Object</span
                                >]
                            </ng-container>
                            <ng-container *ngSwitchDefault>{{
                                obj
                            }}</ng-container>
                        </ng-container>
                    </div>
                </div>
                <div class="h-8 w-full"></div>
                <div class="h-8 w-full"></div>
            </cdk-virtual-scroll-viewport>
            <div
                class="absolute bottom-0 right-2 rounded-t-lg bg-base-300 p-2 flex items-center space-x-2 w-[20rem] border-t border-x border-base-100"
            >
                <input
                    #search_input
                    name="log-filter"
                    [ngModel]="filter | async"
                    (ngModelChange)="filter.next($event)"
                    placeholder="Filter logs..."
                    class="border-none bg-base-100/10 flex-1 text-sm px-2 py-1 font-mono rounded"
                />
                <div class="font-mono text-xs px-2 text-center">
                    <span class="font-mono" *ngIf="(filter | async)?.length">
                        {{ (filtered_logs | async)?.length || '0' }} of
                    </span>
                    {{ (logs | async)?.length }}
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class DebugConsoleComponent extends AsyncHandler {
    @Input() public show = false;
    public readonly colors = COLOR_MAP;
    public readonly json_tooltip = JsonDisplayComponent;
    public readonly filter = new BehaviorSubject<string>('');
    public readonly logs = new BehaviorSubject<ClientEvent[]>([]);
    public readonly filtered_logs = combineLatest([
        this.filter,
        this.logs,
    ]).pipe(
        map(([s, logs]) =>
            logs.filter(
                (_) =>
                    _.type.toLowerCase().includes(s.toLowerCase()) ||
                    _.subtype.toLowerCase().includes(s.toLowerCase()) ||
                    `${_.data}`.toLowerCase().includes(s.toLowerCase())
            )
        )
    );

    constructor(
        private _logs: RemoteLoggingService,
        private _hotkey: HotkeysService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'logs',
            this._logs.history.subscribe((event) =>
                this.logs.next([...this.logs.getValue(), event])
            )
        );
        this.subscription(
            'toggle',
            this._hotkey.listen(
                ['Control', 'Backquote'],
                () => (this.show = !this.show)
            )
        );
    }

    public type(item: any) {
        if (
            typeof item === 'string' &&
            URL_STARTS.find((start) => item.startsWith(start))
        ) {
            return 'link';
        } else if (item instanceof Object) {
            return 'object';
        }
        return 'string';
    }

    public trackByFn(_: number, item: ClientEvent) {
        return item?.timestamp;
    }
}
