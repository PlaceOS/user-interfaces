import { Component, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import {
    ClientEvent,
    RemoteLoggingService,
} from 'libs/common/src/lib/remote-logging.service';
import { JsonDisplayComponent } from './json-display.component';
import { OrganisationService } from '@placeos/organisation';
import { SettingsService } from '@placeos/common';

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
            <div
                class="flex items-center justify-between bg-base-100 border-b border-base-300"
            >
                <div class="p-2">Console</div>
                <button icon matRipple (click)="show = false">
                    <app-icon>close</app-icon>
                </button>
            </div>
            <cdk-virtual-scroll-viewport
                itemSize="32"
                *ngIf="(filtered_logs | async)?.length; else empty_state"
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
            </cdk-virtual-scroll-viewport>
            <div
                class="absolute bottom-1 right-1 rounded-lg p-1 flex items-center w-[20rem] overflow-hidden"
            >
                <div
                    class="absolute inset-0 bg-base-content opacity-60 z-0"
                ></div>
                <div
                    class="absolute inset-1 bg-base-content opacity-90 rounded z-0"
                ></div>
                <input
                    #search_input
                    name="log-filter"
                    [ngModel]="filter | async"
                    (ngModelChange)="filter.next($event)"
                    placeholder="Filter logs..."
                    class="relative border-none flex-1 text-sm px-2 py-1 font-mono rounded text-base-100"
                />
                <div
                    class="relative font-mono text-xs px-2 text-center text-base-100"
                >
                    <span class="font-mono" *ngIf="(filter | async)?.length">
                        {{ (filtered_logs | async)?.length || '0' }} of
                    </span>
                    {{ (logs | async)?.length }}
                </div>
            </div>
        </div>
        <button
            activation
            *ngIf="can_activate"
            class="absolute bottom-0 right-0 h-12 w-12"
            (mousedown)="onStart()"
            (touchstart)="onStart()"
            (mouseup)="onEnd()"
            (touchend)="onEnd()"
        ></button>
        <ng-template #empty_state>
            <div
                class="flex-1 flex flex-col items-center justify-center h-[30rem] w-full"
            >
                <div class="text-2xl opacity-30">
                    No {{ filter.getValue() ? 'matching' : '' }} logs
                </div>
            </div>
        </ng-template>
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

    public readonly onStart = () =>
        this.timeout('show', () => (this.show = true), 5000);
    public readonly onEnd = () => this.clearTimeout('show');

    public get can_activate() {
        return !!this._settings.get('app.debug_console');
    }

    constructor(
        private _org: OrganisationService,
        private _logs: RemoteLoggingService,
        private _hotkey: HotkeysService,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'binding',
            this._org.active_building.subscribe(() => {
                console.log('Binding:', this._org.binding('remote_logger'));
                this._logs.setSystem(this._org.binding('remote_logger'));
            })
        );
        this.subscription(
            'logs',
            this._logs.history.subscribe((event) => {
                let logs = this.logs.getValue();
                if (
                    logs.length >
                    (this._settings.get('app.log_limits') || 20000)
                )
                    logs.splice(0, 1);
                this.logs.next([...logs, event]);
            })
        );
        this.subscription(
            'toggle',
            this._hotkey.listen(
                ['Control', 'Backquote'],
                () => (this.show = !this.show)
            )
        );
        console.log('Binding:', this._org.binding('remote_logger'));
        this._logs.setSystem(this._org.binding('remote_logger'));
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
