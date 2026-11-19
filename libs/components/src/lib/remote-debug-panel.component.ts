import { DatePipe, DecimalPipe, JsonPipe } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
    untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
    AsyncHandler,
    isRemoteDebugCommand,
    isRemoteDebugDeviceOnline,
    isRemoteLogRequest,
    notifySuccess,
    REMOTE_LOG_LEVELS,
    RemoteDebugCommandOptions,
    RemoteDebugCommandResult,
    RemoteDebugCommandType,
    remoteDebugDeviceBinding,
    RemoteDebugDeviceState,
    remoteDebugLogsBinding,
    RemoteDebugMedia,
    remoteDebugMediaUrl,
    remoteDebugResultsBinding,
    RemoteLogEntry,
    RemoteLogLevel,
    RemoteLogsView,
} from '@placeos/common';

import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { openConfirmModal } from './confirm-modal.component';
import { IconComponent } from './icon.component';
import { RemoteDebugViewService } from './remote-debug-view.service';

/** Most log entries that the panel shows. The download has all of them */
const MAX_SHOWN_ENTRIES = 500;
/** Most command results that the panel shows */
const MAX_SHOWN_RESULTS = 20;
/** Entries that a new log request gets from the device buffer */
const LOG_HISTORY = 1000;

/** Colour classes of the log levels */
const LEVEL_CLASSES: Record<RemoteLogLevel, string> = {
    debug: 'bg-base-300 text-base-content',
    info: 'bg-info text-info-content',
    warn: 'bg-warning text-warning-content',
    error: 'bg-error text-error-content',
};

/**
 * Remote debugging of one device, for admin and support users. Shows the logs
 * that the RemoteDebug driver has for the device, and sends log requests and
 * commands to the device. See `docs/remote-debug.md`.
 *
 * Like the other debugging tools, the panel text is in English.
 *
 * ```html
 * <remote-debug-panel [device_id]="'DEV-3F9A0C12B7E4'" />
 * ```
 */
@Component({
    selector: 'remote-debug-panel',
    template: `
        <div class="flex flex-col gap-3">
            <section
                class="bg-base-100 border-base-300 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border px-4 py-3"
            >
                <h2 class="font-mono text-lg font-medium">{{ device_id() }}</h2>
                @if (last_seen()) {
                    <span
                        class="rounded-full px-2 py-0.5 text-xs"
                        [class.bg-success]="online()"
                        [class.text-success-content]="online()"
                        [class.bg-base-300]="!online()"
                        online-state
                    >
                        {{ online() ? 'Online' : 'Offline' }}
                    </span>
                }
                @if (device(); as info) {
                    <span class="text-sm opacity-70">{{ info.app }}</span>
                    <span class="text-sm opacity-70">
                        {{ info.version }} ({{ info.build }})
                    </span>
                    <span class="text-sm opacity-70">
                        Loaded {{ info.started_at | date: 'MMM d, h:mm a' }}
                    </span>
                    @if (last_seen(); as seen) {
                        <span class="text-sm opacity-70">
                            Last seen {{ seen | date: 'MMM d, h:mm:ss a' }}
                        </span>
                    }
                    <span class="w-full truncate text-xs opacity-60">
                        {{ info.url }}
                    </span>
                } @else {
                    <span class="text-sm opacity-70">
                        The driver has no details of this device yet. Request
                        logs or send a command to start.
                    </span>
                }
            </section>

            <section
                logs
                class="bg-base-100 border-base-300 flex flex-col rounded-lg border"
            >
                <div class="flex flex-wrap items-center gap-2 px-4 pt-3">
                    <h3 class="flex-1 font-medium">Logs</h3>
                    <mat-form-field
                        appearance="outline"
                        class="w-32"
                        subscriptSizing="dynamic"
                    >
                        <mat-select
                            aria-label="Log level"
                            [ngModel]="level()"
                            (ngModelChange)="setLevel($event)"
                        >
                            @for (option of levels; track option) {
                                <mat-option [value]="option">
                                    {{ option }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    @if (request()) {
                        <button
                            btn
                            matRipple
                            stop-logs
                            type="button"
                            class="inverse"
                            (click)="stopLogs()"
                        >
                            Stop live logs
                        </button>
                    } @else {
                        <button
                            btn
                            matRipple
                            start-logs
                            type="button"
                            (click)="startLogs()"
                        >
                            Start live logs
                        </button>
                    }
                </div>
                <div class="flex flex-wrap items-center gap-2 px-4 py-2">
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            placeholder="Filter logs"
                            aria-label="Filter logs"
                            [ngModel]="filter()"
                            (ngModelChange)="filter.set($event)"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        [disabled]="!entries().length"
                        (click)="loadOlder()"
                    >
                        Load older
                    </button>
                    <button
                        icon
                        matRipple
                        type="button"
                        aria-label="Download logs"
                        [disabled]="!entries().length"
                        (click)="downloadLogs()"
                    >
                        <icon>download</icon>
                    </button>
                </div>
                <p class="px-4 pb-2 text-xs opacity-60">
                    @if (request(); as active) {
                        Live at the {{ active.level }} level.
                    }
                    Showing {{ shown_entries().length }} of
                    {{ entries().length }} entries, newest first.
                </p>
                <ol
                    class="border-base-300 max-h-[32rem] overflow-auto border-t font-mono text-xs"
                >
                    @for (entry of shown_entries(); track entry.seq) {
                        <li
                            class="border-base-200 flex gap-2 border-b px-4 py-1"
                        >
                            <span class="shrink-0 opacity-60">
                                {{ entry.timestamp | date: 'HH:mm:ss.SSS' }}
                            </span>
                            <span
                                class="h-fit shrink-0 rounded px-1 uppercase"
                                [class]="level_classes[entry.level]"
                            >
                                {{ entry.level }}
                            </span>
                            <span
                                class="min-w-0 break-words whitespace-pre-wrap"
                            >
                                {{ entry.message }}
                            </span>
                        </li>
                    } @empty {
                        <li class="px-4 py-6 text-center opacity-60">
                            No log entries
                        </li>
                    }
                </ol>
            </section>

            <section
                commands
                class="bg-base-100 border-base-300 flex flex-col gap-3 rounded-lg border p-4"
            >
                <h3 class="font-medium">Commands</h3>
                <div class="flex flex-wrap gap-2">
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('status')"
                    >
                        Status
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('snapshot')"
                    >
                        Snapshot
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('animation', { format: 'webp' })"
                    >
                        Animation (WebP)
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('animation', { format: 'gif' })"
                    >
                        Animation (GIF)
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        (click)="send('storage')"
                    >
                        Storage keys
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="reload('reload')"
                    >
                        Reload app
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        (click)="reload('clear_cache')"
                    >
                        Clear cache and reload
                    </button>
                </div>
                <form
                    class="flex flex-wrap items-center gap-2"
                    (ngSubmit)="sendSettings()"
                >
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            name="keys"
                            placeholder="Settings keys, such as app.title, app.features"
                            aria-label="Settings keys"
                            [(ngModel)]="settings_keys"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="submit"
                        [disabled]="!settings_keys.trim()"
                    >
                        Get settings
                    </button>
                </form>
                <form
                    class="flex flex-wrap items-center gap-2"
                    (ngSubmit)="sendNavigate()"
                >
                    <mat-form-field
                        appearance="outline"
                        class="min-w-48 flex-1"
                        subscriptSizing="dynamic"
                    >
                        <input
                            matInput
                            name="path"
                            placeholder="App route, such as /bootstrap"
                            aria-label="App route"
                            [(ngModel)]="navigate_path"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        type="submit"
                        [disabled]="!navigate_path.startsWith('/')"
                    >
                        Open route
                    </button>
                </form>
                @if (pending().length) {
                    <p class="text-sm opacity-70" pending>
                        Waiting for the device:
                        @for (command of pending(); track command.id) {
                            <span class="bg-base-200 ml-1 rounded px-2 py-0.5">
                                {{ command.type }}
                            </span>
                        }
                    </p>
                }
            </section>

            <section
                results
                class="bg-base-100 border-base-300 flex flex-col rounded-lg border"
            >
                <h3 class="px-4 pt-3 pb-2 font-medium">Results</h3>
                <ol class="flex flex-col">
                    @for (item of shown_results(); track item.id) {
                        <li
                            class="border-base-200 flex flex-col gap-2 border-t px-4 py-3"
                        >
                            <div class="flex items-center gap-2">
                                <icon
                                    class="text-xl"
                                    [class.text-success]="item.result.ok"
                                    [class.text-error]="!item.result.ok"
                                >
                                    {{
                                        item.result.ok
                                            ? 'check_circle'
                                            : 'error'
                                    }}
                                </icon>
                                <span class="font-medium">{{ item.type }}</span>
                                <span class="text-sm opacity-60">
                                    {{
                                        item.received_at
                                            | date: 'MMM d, h:mm:ss a'
                                    }}
                                </span>
                            </div>
                            @if (!item.result.ok) {
                                <pre
                                    class="text-error max-h-48 overflow-auto text-xs whitespace-pre-wrap"
                                    >{{ item.result.error }}</pre
                                >
                            } @else if (media(item); as file) {
                                <p class="text-sm opacity-70">
                                    {{ file.width }} x {{ file.height }},
                                    {{ file.frames }}
                                    {{
                                        file.frames === 1 ? 'frame' : 'frames'
                                    }},
                                    {{ file.bytes / 1024 | number: '1.0-0' }}
                                    KB,
                                    {{ file.mime }}
                                </p>
                                <img
                                    auth
                                    class="border-base-300 max-h-[32rem] w-fit max-w-full rounded border object-contain"
                                    [source]="mediaUrl(file)"
                                    [alt]="item.type + ' of ' + device_id()"
                                />
                            } @else {
                                <pre
                                    class="bg-base-200 max-h-64 overflow-auto rounded p-2 text-xs"
                                    >{{ item.result.data | json }}</pre
                                >
                            }
                        </li>
                    } @empty {
                        <li class="px-4 pb-6 text-center opacity-60">
                            No results yet
                        </li>
                    }
                </ol>
            </section>
        </div>
    `,
    imports: [
        DatePipe,
        DecimalPipe,
        JsonPipe,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatSelectModule,
        AuthenticatedImageDirective,
        IconComponent,
    ],
})
export class RemoteDebugPanelComponent extends AsyncHandler {
    private readonly _view = inject(RemoteDebugViewService);
    private readonly _dialog = inject(MatDialog);
    private readonly _state = signal<RemoteDebugDeviceState>({});
    private readonly _logs = signal<RemoteLogsView | null>(null);
    private readonly _results = signal<RemoteDebugCommandResult[]>([]);

    /** ID of the device to debug */
    public readonly device_id = input.required<string>();

    public readonly levels = REMOTE_LOG_LEVELS;
    public readonly level_classes = LEVEL_CLASSES;
    public readonly level = signal<RemoteLogLevel>('info');
    public readonly filter = signal('');
    public settings_keys = '';
    public navigate_path = '';

    /** Active log request of the device */
    public readonly request = computed(() => {
        const logs = this._state().logs;
        return isRemoteLogRequest(logs) ? logs : null;
    });
    /** Commands that wait for the device */
    public readonly pending = computed(() =>
        (this._state().commands ?? []).filter(isRemoteDebugCommand),
    );
    public readonly entries = computed(() => this._logs()?.entries ?? []);
    public readonly shown_entries = computed(() => {
        const filter = this.filter().trim().toLowerCase();
        const list: RemoteLogEntry[] = [];
        const entries = this.entries();
        // Newest first, so the loop stops after the shown entries
        for (let i = entries.length - 1; i >= 0; i--) {
            const entry = entries[i];
            if (filter && !entry.message.toLowerCase().includes(filter)) {
                continue;
            }
            list.push(entry);
            if (list.length >= MAX_SHOWN_ENTRIES) break;
        }
        return list;
    });
    public readonly shown_results = computed(() =>
        this._results().slice(-MAX_SHOWN_RESULTS).reverse(),
    );
    /** Details of the device, from the device list or its last logs */
    public readonly device = computed(
        () =>
            this._view.devices().find((_) => _.id === this.device_id()) ??
            this._logs()?.device ??
            null,
    );
    public readonly last_seen = computed(
        () =>
            this._view.devices().find((_) => _.id === this.device_id())
                ?.last_seen ?? 0,
    );
    /** Whether the device called the driver recently */
    public readonly online = computed(() =>
        isRemoteDebugDeviceOnline(
            { last_seen: this.last_seen() },
            this._view.now(),
        ),
    );

    constructor() {
        super();
        effect(() => {
            const mod = this._view.module();
            const id = this.device_id();
            untracked(() => this._bind(id, mod !== null));
        });
    }

    /** Start a log request at the selected level, with the buffered entries */
    public async startLogs() {
        await this._view.call('request_logs', [
            this.device_id(),
            this.level(),
            { history: LOG_HISTORY },
        ]);
    }

    public async stopLogs() {
        await this._view.call('stop_logs', [this.device_id()]);
    }

    /** Select a level. An active request changes its level */
    public async setLevel(level: RemoteLogLevel) {
        this.level.set(level);
        if (this.request()) {
            await this._view.call('set_level', [this.device_id(), level]);
        }
    }

    /** New request for the entries before the oldest entry that the driver has */
    public async loadOlder() {
        const oldest = this.entries()[0];
        if (!oldest) return;
        await this._view.call('request_logs', [
            this.device_id(),
            this.request()?.level ?? this.level(),
            { history: LOG_HISTORY, before: oldest.seq },
        ]);
    }

    /** Save the log entries as a text file */
    public downloadLogs() {
        const text = this.entries()
            .map(
                (_) =>
                    `${new Date(_.timestamp).toISOString()} ${_.level.toUpperCase()} ${_.message}`,
            )
            .join('\n');
        const url = URL.createObjectURL(
            new Blob([text], { type: 'text/plain' }),
        );
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.device_id()}-logs.txt`;
        link.click();
        URL.revokeObjectURL(url);
    }

    public async send(
        type: RemoteDebugCommandType,
        options: RemoteDebugCommandOptions = {},
    ) {
        const id = await this._view.call<string | null>('send_command', [
            this.device_id(),
            type,
            options,
        ]);
        if (id) notifySuccess(`Sent ${type} to ${this.device_id()}`);
    }

    /** Reload the app on the device, after the user confirms */
    public async reload(type: 'reload' | 'clear_cache') {
        const result = await openConfirmModal(
            {
                title: type === 'reload' ? 'Reload app' : 'Clear cache',
                content:
                    type === 'reload'
                        ? `Reload the app on ${this.device_id()}?`
                        : `Remove the app caches on ${this.device_id()} and reload it? The device must be online to load the app again.`,
                icon: { type: 'icon', content: 'restart_alt' },
                destructive: true,
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.close();
        await this.send(type);
    }

    public async sendSettings() {
        const keys = this.settings_keys
            .split(',')
            .map((_) => _.trim())
            .filter((_) => _);
        if (keys.length) await this.send('settings', { keys });
    }

    public async sendNavigate() {
        const path = this.navigate_path.trim();
        if (path.startsWith('/')) await this.send('navigate', { path });
    }

    /** File details of a snapshot or animation result. `null` for other results */
    public media(item: RemoteDebugCommandResult): RemoteDebugMedia | null {
        if (item.type !== 'snapshot' && item.type !== 'animation') return null;
        const data = item.result.data as RemoteDebugMedia | undefined;
        return typeof data?.upload_id === 'string' ? data : null;
    }

    public mediaUrl(file: RemoteDebugMedia) {
        return remoteDebugMediaUrl(file.upload_id);
    }

    /** Listen to the bindings of the device */
    private _bind(device_id: string, connected: boolean) {
        this.unsub('state');
        this.unsub('logs');
        this.unsub('results');
        this._state.set({});
        this._logs.set(null);
        this._results.set([]);
        const mod = this._view.module();
        if (!connected || !mod || !device_id) return;
        this.subscription(
            'state',
            mod
                .variable<unknown>(remoteDebugDeviceBinding(device_id))
                .bindThenSubscribe((value) =>
                    this._state.set(
                        value && typeof value === 'object' ? value : {},
                    ),
                ),
        );
        this.subscription(
            'logs',
            mod
                .variable<RemoteLogsView | null>(
                    remoteDebugLogsBinding(device_id),
                )
                .bindThenSubscribe((value) => this._logs.set(value ?? null)),
        );
        this.subscription(
            'results',
            mod
                .variable<
                    RemoteDebugCommandResult[] | null
                >(remoteDebugResultsBinding(device_id))
                .bindThenSubscribe((value) =>
                    this._results.set(Array.isArray(value) ? value : []),
                ),
        );
    }
}
