import { Component, Input } from '@angular/core';
import { format } from 'date-fns';

import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { BaseClass } from 'libs/common/src/lib/base.class';
import {
    ClientEvent,
    RemoteLoggingService,
} from 'libs/common/src/lib/remote-logging.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const COLOR_MAP = {
    console: 'bg-purple-600/30',
    network: 'bg-green-600/30',
    dom: 'bg-indigo-600/30',

    log: `bg-blue-600/50`,
    info: `bg-blue-600/50`,
    warn: `bg-orange-600/50`,
    debug: `bg-gray-600/50`,
    error: `bg-red-600/50`,
};

@Component({
    selector: `debug-console`,
    template: `
        <div
            class="absolute bottom-2 inset-x-2 bg-black/80 text-white shadow rounded overflow-hidden h-[32rem] max-h-65vh flex flex-col z-[10000]"
            *ngIf="show"
        >
            <cdk-virtual-scroll-viewport
                itemSize="32"
                class="flex-1 h-[30rem] max-h-full w-full"
            >
                <div
                    class="font-mono h-8 truncate p-2 text-sm flex items-center max-w-full hover:bg-white/10"
                    *cdkVirtualFor="let message of filtered_logs | async"
                    [innerHTML]="logDisplay(message) | safe"
                ></div>
            </cdk-virtual-scroll-viewport>
            <div
                class="absolute top-0 right-2 rounded-b-lg bg-black/80 p-2 flex items-center space-x-2"
            >
                <input
                    #search_input
                    [ngModel]="filter | async"
                    (ngModelChange)="filter.next($event)"
                    placeholder="Filter logs..."
                    class="border-none bg-white/10 flex-1 text-base px-2 py-1 font-mono"
                />
                <div *ngIf="(filter | async)?.length" class="font-mono text-xs">
                    {{ (filtered_logs | async)?.length || '0' }}/{{
                        (logs | async)?.length
                    }}
                    Matches
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class DebugConsoleComponent extends BaseClass {
    @Input() public show = false;
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

    public logDisplay(log: ClientEvent) {
        return `
            <span class="uppercase text-xs p-1 bg-white/10 rounded font-mono">${format(
                log.timestamp,
                'MMM dd HH:mm:ss'
            )}</span>
            &nbsp;
            <span class="uppercase text-xs p-1 ${
                COLOR_MAP[log.type]
            } rounded font-mono">${log.type}</span>
            &nbsp;
            <span class="capitalize text-xs p-1 ${
                COLOR_MAP[log.subtype]
            } rounded w-16 text-center font-mono">${log.subtype}</span>
            &nbsp;
            ${log.data}
        `;
    }
}
