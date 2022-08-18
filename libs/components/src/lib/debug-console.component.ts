import { Component, Input } from '@angular/core';
import { format } from 'date-fns';

import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { BaseClass } from 'libs/common/src/lib/base.class';
import {
    ClientEvent,
    RemoteLoggingService,
} from 'libs/common/src/lib/remote-logging.service';

@Component({
    selector: `debug-console`,
    template: `
        <div
            class="absolute bottom-2 inset-x-2 bg-black/80 text-white shadow rounded overflow-hidden h-[32rem] max-h-65vh flex flex-col"
            *ngIf="show"
        >
            <cdk-virtual-scroll-viewport
                itemSize="32"
                class="flex-1 h-1/2 w-full"
            >
                <div
                    class="font-mono h-8 truncate p-2 text-sm flex items-center max-w-full hover:bg-white/10"
                    *cdkVirtualFor="let message of logs"
                    [innerHTML]="logDisplay(message) | safe"
                ></div>
            </cdk-virtual-scroll-viewport>
        </div>
    `,
    styles: [``],
})
export class DebugConsoleComponent extends BaseClass {
    @Input() public show = false;
    public readonly logs: ClientEvent[] = [];

    constructor(
        private _logs: RemoteLoggingService,
        private _hotkey: HotkeysService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'logs',
            this._logs.history.subscribe((event) => this.logs.push(event))
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
            <span class="text-xs p-1 bg-white/10 rounded">${format(
                log.timestamp,
                'yyyy/MM/dd h:mma'
            )}</span>
            &nbsp;
            <span class="uppercase text-xs p-1 bg-purple-600/30 rounded">${
                log.type
            }</span>
            &nbsp;
            <span class="capitalize text-xs p-1 bg-blue-600/30 rounded w-16 text-center">${
                log.subtype
            }</span>
            &nbsp;
            ${log.data}
        `;
    }
}
