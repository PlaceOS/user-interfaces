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
    downloadFile,
    isRemoteDebugCommand,
    isRemoteDebugDeviceOnline,
    isRemoteLogRequest,
    notifyError,
    notifySuccess,
    readRemoteDebugResults,
    readRemoteLogsView,
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
                        [disabled]="!can_load_older()"
                        (click)="loadOlder()"
                    >
                        Load older
                    </button>
                    @if (older_than() !== null) {
                        <button
                            btn
                            matRipple
                            newest
                            type="button"
                            class="inverse"
                            (click)="showNewest()"
                        >
                            Newest
                        </button>
                    }
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
                    @if (older_than() !== null) {
                        Older than entry {{ older_than() }}.
                    }
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
    /** Show only entries with a lower `seq`. `null` shows the newest entries */
    public readonly older_than = signal<number | null>(null);
    /**
     * Driver calls (logs, level, older entries, commands) run one at a time,
     * so they reach the driver in the order the user made them. ts-client
     * also joins a call with the same arguments while it runs, and it shows
     * each object argument as `[object Object]`. So without the queue, quick
     * calls such as WebP and GIF animations would join into one call
     */
    private _requests: Promise<unknown> = Promise.resolve();
    /** Calls in the queue that did not finish */
    private _pending = 0;
    /** Whether the panel closed. Calls that did not start do not run */
    private _closed = false;
    /** `seq` that a request for older entries asked for. The page moves when older entries arrive */
    private _older_wanted: number | null = null;
    /** ID of the log request in the binding, to find a new request */
    private _request_id = '';
    public readonly shown_entries = computed(() => {
        const filter = this.filter().trim().toLowerCase();
        const older_than = this.older_than() ?? Infinity;
        const list: RemoteLogEntry[] = [];
        const entries = this.entries();
        // Newest first, so the loop stops after the shown entries
        for (let i = entries.length - 1; i >= 0; i--) {
            const entry = entries[i];
            if (entry.seq >= older_than) continue;
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
        // Live entries are newer than any page, so show the newest entries
        this.older_than.set(null);
        this._older_wanted = null;
        const device_id = this.device_id();
        // The level is read when the call runs, so a level that the user
        // selects while calls wait is used
        await this._queue(() =>
            this._view.call('request_logs', [
                device_id,
                this.level(),
                { history: LOG_HISTORY },
            ]),
        );
    }

    public async stopLogs() {
        const device_id = this.device_id();
        await this._queue(() => this._view.call('stop_logs', [device_id]));
    }

    /** Select a level. When logs are live, send the level to the device */
    public async setLevel(level: RemoteLogLevel) {
        this.level.set(level);
        // The binding can still show an older level, so always send it. The
        // device ignores a level that does not change
        if (!this.request()) return;
        const device_id = this.device_id();
        await this._queue(() =>
            this._view.call('set_level', [device_id, level]),
        );
    }

    /**
     * Show older entries. When the driver has more entries than the panel
     * shows, show the page before the oldest shown entry. Otherwise ask the
     * device for the entries before the oldest entry of the driver.
     */
    public async loadOlder() {
        const oldest = this.entries()[0];
        if (!oldest) return;
        const oldest_shown = this.shown_entries().at(-1);
        if (oldest_shown && this._canPageLocally()) {
            this.older_than.set(oldest_shown.seq);
            return;
        }
        // The device has no entries before the first one
        if (oldest.seq <= 1) return;
        // The page stays until older entries arrive. A driver with a full
        // store can drop them, and the page must not go blank
        this._older_wanted = oldest.seq;
        const device_id = this.device_id();
        await this._queue(() =>
            this._view.call('request_logs', [
                device_id,
                this.level(),
                { history: LOG_HISTORY, before: oldest.seq },
            ]),
        );
    }

    /** Whether the panel or the device can have entries older than the page */
    public readonly can_load_older = computed(() => {
        const oldest = this.entries()[0];
        return !!oldest && (oldest.seq > 1 || this._canPageLocally());
    });

    /**
     * Whether the panel has older matching entries than the shown page. Only
     * a full page can have them. Otherwise the page shows all entries before
     * the cursor that match the filter
     */
    private _canPageLocally() {
        const shown = this.shown_entries();
        const oldest_shown = shown.at(-1);
        return (
            !!oldest_shown &&
            shown.length >= MAX_SHOWN_ENTRIES &&
            this._hasMatchBefore(oldest_shown.seq)
        );
    }

    /** Show the newest entries, also when older entries are on the way */
    public showNewest() {
        this.older_than.set(null);
        this._older_wanted = null;
    }

    /**
     * Run a driver call after the calls before it. A call that did not start
     * when the panel closes does not run, so a reload is not sent later.
     * When the last call finishes, the level shows the level in the binding.
     */
    private _queue<T>(call: () => Promise<T>): Promise<T | undefined> {
        this._pending++;
        const next = this._requests
            .then(() => (this._closed ? undefined : call()))
            .finally(() => {
                if (--this._pending) return;
                const logs = this._state().logs;
                if (isRemoteLogRequest(logs)) this.level.set(logs.level);
            });
        this._requests = next.catch(() => undefined);
        return next;
    }

    protected override destroy() {
        this._closed = true;
        super.destroy();
    }

    /** Whether an entry before `seq` matches the filter */
    private _hasMatchBefore(seq: number) {
        const filter = this.filter().trim().toLowerCase();
        return this.entries().some(
            (_) =>
                _.seq < seq &&
                (!filter || _.message.toLowerCase().includes(filter)),
        );
    }

    /** Save the log entries as a text file */
    public downloadLogs() {
        const text = this.entries()
            .map(
                (_) =>
                    `${new Date(_.timestamp).toISOString()} ${_.level.toUpperCase()} ${_.message}`,
            )
            .join('\n');
        downloadFile(`${this.device_id()}-logs.txt`, text);
    }

    public async send(
        type: RemoteDebugCommandType,
        options: RemoteDebugCommandOptions = {},
        device_id = this.device_id(),
    ) {
        const id = await this._queue(() =>
            this._view.call<string | null>('send_command', [
                device_id,
                type,
                options,
            ]),
        );
        // `undefined` is a failed call, which the view service already shows
        if (id === undefined) return;
        if (id) notifySuccess(`Sent ${type} to ${device_id}`);
        else {
            notifyError(
                `The driver did not take the ${type} command. The device can have 20 waiting commands maximum.`,
            );
        }
    }

    /** Reload the app on the device, after the user confirms */
    public async reload(type: 'reload' | 'clear_cache') {
        // The device can change while the dialog is open, so keep the one it names
        const device_id = this.device_id();
        const result = await openConfirmModal(
            {
                title: type === 'reload' ? 'Reload app' : 'Clear cache',
                content:
                    type === 'reload'
                        ? `Reload the app on ${device_id}?`
                        : `Remove the app caches on ${device_id} and reload it? The device must be online to load the app again.`,
                icon: { type: 'icon', content: 'restart_alt' },
                destructive: true,
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.close();
        await this.send(type, {}, device_id);
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
        this.older_than.set(null);
        this._older_wanted = null;
        this._request_id = '';
        const mod = this._view.module();
        if (!connected || !mod || !device_id) return;
        this.subscription(
            'state',
            mod
                .variable<unknown>(remoteDebugDeviceBinding(device_id))
                .bindThenSubscribe((value) => {
                    const state: RemoteDebugDeviceState =
                        value && typeof value === 'object' ? value : {};
                    // A new request sets the selected level. While calls
                    // wait, a binding value can be older than the level that
                    // the user selected, so the level stays until they finish
                    const logs = isRemoteLogRequest(state.logs)
                        ? state.logs
                        : null;
                    if (
                        logs &&
                        (logs.id !== this._request_id || !this._pending)
                    ) {
                        this.level.set(logs.level);
                    }
                    this._request_id = logs?.id ?? '';
                    this._state.set(state);
                }),
        );
        this.subscription(
            'logs',
            mod
                .variable<unknown>(remoteDebugLogsBinding(device_id))
                .bindThenSubscribe((raw) => {
                    const value = readRemoteLogsView(raw);
                    // A reloaded device starts its `seq` again, so the cursor no longer applies
                    const started_at = value?.device?.started_at;
                    if (started_at !== this._logs()?.device?.started_at) {
                        this.older_than.set(null);
                        this._older_wanted = null;
                    }
                    this._logs.set(value);
                    // Show the older entries when they arrive, if one
                    // matches the filter, so the page does not go blank
                    const wanted = this._older_wanted;
                    if (wanted !== null && this._hasMatchBefore(wanted)) {
                        this.older_than.set(wanted);
                        this._older_wanted = null;
                    }
                }),
        );
        this.subscription(
            'results',
            mod
                .variable<unknown>(remoteDebugResultsBinding(device_id))
                .bindThenSubscribe((value) =>
                    this._results.set(readRemoteDebugResults(value)),
                ),
        );
    }
}
