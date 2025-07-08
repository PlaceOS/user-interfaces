import { Component, OnInit, inject, model } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
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
        @if (show()) {
            <div
                class="absolute bottom-2 left-2 z-[998] flex h-[24rem] max-h-[65vh] w-[40rem] max-w-[80vw] flex-col overflow-hidden rounded border border-base-300 bg-base-200 text-base-content shadow"
            >
                <div
                    class="flex items-center justify-between border-b border-base-300 bg-base-100"
                >
                    <div class="p-2">{{ 'COMMON.CONSOLE' | translate }}</div>
                    <button icon matRipple (click)="show = false()">
                        <icon>close</icon>
                    </button>
                </div>
                @if ((filtered_logs | async)?.length) {
                    <cdk-virtual-scroll-viewport
                        itemSize="32"
                        class="h-[30rem] max-h-full w-full flex-1"
                    >
                        <div
                            class="flex h-8 max-w-full items-center space-x-1 truncate p-2 font-mono text-sm hover:bg-base-100"
                            *cdkVirtualFor="
                                let log of filtered_logs | async;
                                trackBy: trackByFn
                            "
                        >
                            <div
                                class="bg-base-100/10 rounded p-1 font-mono text-xs uppercase"
                            >
                                {{ log.timestamp | date: 'MMM d HH:mm:ss' }}
                            </div>
                            <div
                                [class]="
                                    'p-1 text-xs uppercase ' +
                                    colors[log.type] +
                                    ' rounded font-mono'
                                "
                            >
                                {{ log.type }}
                            </div>
                            <div
                                [class]="
                                    'p-1 text-xs capitalize ' +
                                    colors[log.subtype] +
                                    ' w-16 rounded text-center font-mono'
                                "
                            >
                                {{ log.subtype }}
                            </div>
                            @for (obj of log.data; track obj) {
                                <div
                                    class="pl-1 font-mono"
                                    [attr.data-type]="type(obj)"
                                >
                                    @switch (type(obj)) {
                                        @case ('link') {
                                            <a
                                                class="font-mono"
                                                [href]="obj | sanitize"
                                                target="_blank"
                                                rel="noopener noreferer"
                                                >{{ obj }}</a
                                            >
                                        }
                                        @case ('object') {
                                            [<span
                                                class="font-mono underline hover:text-info"
                                                customTooltip
                                                xPosition="center"
                                                yPosition="bottom"
                                                [content]="json_tooltip"
                                                [data]="obj"
                                                [hover]="true"
                                                [backdrop]="false"
                                                >Object</span
                                            >]
                                        }
                                        @default {
                                            {{ obj }}
                                        }
                                    }
                                </div>
                            }
                        </div>
                        <div class="h-8 w-full"></div>
                    </cdk-virtual-scroll-viewport>
                } @else {
                    <div
                        class="flex h-[30rem] w-full flex-1 flex-col items-center justify-center"
                    >
                        <div class="text-2xl opacity-30">
                            No {{ filter.getValue() ? 'matching' : '' }} logs
                        </div>
                    </div>
                }
                <div
                    class="absolute bottom-1 right-1 flex w-[20rem] items-center overflow-hidden rounded-lg p-1"
                >
                    <div
                        class="absolute inset-0 z-0 bg-base-content opacity-60"
                    ></div>
                    <div
                        class="absolute inset-1 z-0 rounded bg-base-content opacity-90"
                    ></div>
                    <input
                        #search_input
                        name="log-filter"
                        [ngModel]="filter | async"
                        (ngModelChange)="filter.next($event)"
                        placeholder="Filter logs..."
                        class="relative flex-1 rounded border-none px-2 py-1 font-mono text-sm text-base-100"
                    />
                    <div
                        class="relative px-2 text-center font-mono text-xs text-base-100"
                    >
                        @if ((filter | async)?.length) {
                            <span class="font-mono">
                                {{ (filtered_logs | async)?.length || '0' }} of
                            </span>
                        }
                        {{ (logs | async)?.length }}
                    </div>
                </div>
            </div>
        }
        @if (can_activate) {
            <button
                activation
                class="absolute bottom-0 right-0 h-12 w-12"
                (mousedown)="onStart()"
                (touchstart)="onStart()"
                (mouseup)="onEnd()"
                (touchend)="onEnd()"
            ></button>
        }
    `,
    styles: [``],
    standalone: false,
})
export class DebugConsoleComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);
    private _logs = inject(RemoteLoggingService);
    private _hotkey = inject(HotkeysService);
    private _settings = inject(SettingsService);

    public readonly show = model(false);
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
                    `${_.data}`.toLowerCase().includes(s.toLowerCase()),
            ),
        ),
    );

    public readonly onStart = () =>
        this.timeout('show', () => this.show.set(true), 5000);
    public readonly onEnd = () => this.clearTimeout('show');

    public get can_activate() {
        return !!this._settings.get('app.debug_console');
    }

    constructor() {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'binding',
            this._org.active_building.subscribe(() => {
                const binding = this._org.binding('remote_logger');
                const system_id =
                    binding instanceof Object ? binding.id : binding;
                this._logs.setSystem(system_id);
            }),
        );
        this.subscription(
            'logs',
            this._logs.history.subscribe((event) => {
                const logs = this.logs.getValue();
                if (
                    logs.length >
                    (this._settings.get('app.log_limits') || 20000)
                )
                    logs.splice(0, 1);
                this.logs.next([...logs, event]);
            }),
        );
        this.subscription(
            'toggle',
            this._hotkey.listen(['Control', 'Backquote'], () =>
                this.show.set(!this.show()),
            ),
        );
        const binding = this._org.binding('remote_logger');
        const system_id = binding instanceof Object ? binding.id : binding;
        this._logs.setSystem(system_id);
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
