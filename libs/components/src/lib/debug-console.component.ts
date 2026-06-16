import {
    Component,
    computed,
    effect,
    inject,
    model,
    signal,
} from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatRippleModule } from '@angular/material/core';
import { OrganisationService, SettingsService } from '@placeos/common';
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
                class="border-base-300 bg-base-200 text-base-content absolute bottom-2 left-2 z-998 flex h-96 max-h-[65vh] w-160 max-w-[80vw] flex-col overflow-hidden rounded-sm border shadow-sm"
            >
                <div
                    class="border-base-300 bg-base-100 flex items-center justify-between border-b"
                >
                    <div class="p-2">{{ 'COMMON.CONSOLE' | translate }}</div>
                    <button icon matRipple (click)="show.set(false)">
                        <icon>close</icon>
                    </button>
                </div>
                @if (filtered_logs()?.length) {
                    <cdk-virtual-scroll-viewport
                        itemSize="32"
                        class="h-120 max-h-full w-full flex-1"
                    >
                        <div
                            class="hover:bg-base-100 flex h-8 max-w-full items-center space-x-1 truncate p-2 font-mono text-sm"
                            *cdkVirtualFor="
                                let log of filtered_logs();
                                trackBy: trackByFn
                            "
                        >
                            <div
                                class="bg-base-100/10 rounded-sm p-1 font-mono text-xs uppercase"
                            >
                                {{ log.timestamp | date: 'MMM d HH:mm:ss' }}
                            </div>
                            <div
                                [class]="
                                    'p-1 text-xs uppercase ' +
                                    colors[log.type] +
                                    ' rounded-sm font-mono'
                                "
                            >
                                {{ log.type }}
                            </div>
                            <div
                                [class]="
                                    'p-1 text-xs capitalize ' +
                                    colors[log.subtype] +
                                    ' w-16 rounded-sm text-center font-mono'
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
                                                class="hover:text-info font-mono underline"
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
                        class="flex h-120 w-full flex-1 flex-col items-center justify-center"
                    >
                        <div class="text-2xl opacity-30">
                            No {{ filter() ? 'matching' : '' }} logs
                        </div>
                    </div>
                }
                <div
                    class="absolute right-1 bottom-1 flex w-[20rem] items-center overflow-hidden rounded-lg p-1"
                >
                    <div
                        class="bg-base-content absolute inset-0 z-0 opacity-60"
                    ></div>
                    <div
                        class="bg-base-content absolute inset-1 z-0 rounded-sm opacity-90"
                    ></div>
                    <input
                        #search_input
                        name="log-filter"
                        [ngModel]="filter()"
                        (ngModelChange)="filter.set($event)"
                        placeholder="Filter logs..."
                        class="text-base-100 relative flex-1 rounded-sm border-none px-2 py-1 font-mono text-sm"
                    />
                    <div
                        class="text-base-100 relative px-2 text-center font-mono text-xs"
                    >
                        @if (filter()?.length) {
                            <span class="font-mono">
                                {{ filtered_logs()?.length || '0' }} of
                            </span>
                        }
                        {{ logs()?.length }}
                    </div>
                </div>
            </div>
        }
        @if (can_activate) {
            <button
                activation
                class="absolute right-0 bottom-0 h-12 w-12"
                (mousedown)="onStart()"
                (touchstart)="onStart()"
                (mouseup)="onEnd()"
                (touchend)="onEnd()"
            ></button>
        }
    `,
    styles: [``],
    imports: [ScrollingModule, MatRippleModule],
})
export class DebugConsoleComponent extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _logs = inject(RemoteLoggingService);
    private _hotkey = inject(HotkeysService);
    private _settings = inject(SettingsService);

    public readonly show = model(false);
    public readonly colors = COLOR_MAP;
    public readonly json_tooltip = JsonDisplayComponent;
    public readonly filter = signal<string>('');
    public readonly logs = signal<ClientEvent[]>([]);
    public readonly filtered_logs = computed(() => {
        const s = this.filter();
        const all_logs = this.logs();
        return all_logs.filter(
            (_) =>
                _.type.toLowerCase().includes(s.toLowerCase()) ||
                _.subtype.toLowerCase().includes(s.toLowerCase()) ||
                `${_.data}`.toLowerCase().includes(s.toLowerCase()),
        );
    });

    public readonly onStart = () =>
        this.timeout('show', () => this.show.set(true), 5000);
    public readonly onEnd = () => this.clearTimeout('show');
    private readonly _can_activate = this._settings.signal(
        'debug_console',
        false,
    );
    private readonly _log_limits = this._settings.signal('log_limits', 20000);

    public get can_activate() {
        return this._can_activate();
    }

    constructor() {
        super();
        effect(() => {
            if (!this._org.initialised()) return;
            this._org.active_building();
            const binding = this._org.binding('remote_logger');
            const system_id = binding instanceof Object ? binding.id : binding;
            this._logs.setSystem(system_id);
        });
        effect(() => {
            const log_list = this._logs.history();
            const limit = this._log_limits();
            this.logs.set(
                log_list.length > limit ? log_list.slice(-limit) : log_list,
            );
        });
    }

    public ngOnInit() {
        this.subscription(
            'toggle',
            this._hotkey.listen(['Control', 'Backquote'], () =>
                this.show.set(!this.show()),
            ),
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
