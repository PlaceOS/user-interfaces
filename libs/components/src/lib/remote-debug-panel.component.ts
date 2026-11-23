import { Clipboard } from '@angular/cdk/clipboard';
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
    readRemoteDebugMedia,
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
    remoteDebugSeenText,
    RemoteLogEntry,
    RemoteLogLevel,
    RemoteLogsView,
} from '@placeos/common';

import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { openConfirmModal } from './confirm-modal.component';
import { IconComponent } from './icon.component';
import {
    formatBytes,
    REMOTE_DEBUG_COMMAND_LABELS,
    remoteDebugResultView,
} from './remote-debug-result-view';
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

/** Row colour classes of the log levels. Problems stand out in a long list */
const ROW_CLASSES: Record<RemoteLogLevel, string> = {
    debug: '',
    info: '',
    warn: 'bg-warning/10',
    error: 'bg-error/10',
};

/**
 * Remote debugging of one device, for admin and support users. Shows the logs
 * that the RemoteDebug driver has for the device, and sends log requests and
 * commands to the device. See `docs/remote-debug.md`.
 *
 * The logs and the commands show side by side when the panel is wide, else
 * one above the other. Like the other debugging tools, the panel text is in
 * English.
 *
 * ```html
 * <remote-debug-panel [device_id]="'DEV-3F9A0C12B7E4'" />
 * ```
 */
@Component({
    selector: 'remote-debug-panel',
    template: `
        <div class="@container flex flex-col gap-3">
            <section
                device
                class="bg-base-100 border-base-300 flex flex-col gap-2 rounded-lg border px-4 py-3"
            >
                <div class="flex flex-wrap items-center gap-2">
                    <h2 class="font-mono text-lg font-medium">
                        {{ device_id() }}
                    </h2>
                    <button
                        icon
                        matRipple
                        type="button"
                        class="text-base"
                        title="Copy device ID"
                        aria-label="Copy device ID"
                        (click)="copyId()"
                    >
                        <icon>content_copy</icon>
                    </button>
                    <span
                        class="rounded-full px-2 py-0.5 text-xs"
                        [class.bg-success]="online()"
                        [class.text-success-content]="online()"
                        [class.bg-base-300]="!online()"
                        online-state
                    >
                        {{
                            online()
                                ? 'Online'
                                : last_seen()
                                  ? 'Offline'
                                  : 'Not seen'
                        }}
                    </span>
                    @if (request(); as active) {
                        <span
                            live
                            class="bg-info/15 flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs"
                        >
                            <span
                                class="bg-info size-2 animate-pulse rounded-full"
                            ></span>
                            Live logs at {{ active.level }}
                        </span>
                    }
                </div>
                @if (device(); as info) {
                    <dl
                        class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-x-4 gap-y-1 text-sm"
                    >
                        <div>
                            <dt class="text-xs opacity-60">App</dt>
                            <dd>{{ info.app }}</dd>
                        </div>
                        <div>
                            <dt class="text-xs opacity-60">Version</dt>
                            <dd>{{ info.version }} ({{ info.build }})</dd>
                        </div>
                        <div>
                            <dt class="text-xs opacity-60">Loaded</dt>
                            <dd>
                                {{ info.started_at | date: 'MMM d, h:mm a' }}
                            </dd>
                        </div>
                        @if (last_seen(); as seen) {
                            <div>
                                <dt class="text-xs opacity-60">Last seen</dt>
                                <dd [title]="seen | date: 'MMM d, h:mm:ss a'">
                                    {{ last_seen_text() }}
                                </dd>
                            </div>
                        }
                    </dl>
                    <p class="truncate text-xs opacity-60" [title]="info.url">
                        {{ info.url }}
                    </p>
                } @else {
                    <p class="text-sm opacity-70">
                        The driver has no details of this device yet. Request
                        logs or send a command to start.
                    </p>
                }
            </section>

            <div class="grid min-w-0 gap-3 @6xl:grid-cols-[3fr_2fr]">
                <section
                    logs
                    class="bg-base-100 border-base-300 flex min-w-0 flex-col self-start rounded-lg border"
                >
                    <div class="flex flex-wrap items-center gap-2 px-4 pt-3">
                        <h3 class="mr-auto font-medium">Logs</h3>
                        <mat-form-field
                            appearance="outline"
                            class="w-32"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                aria-label="Log level that the device sends"
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
                            title="Download logs"
                            aria-label="Download logs"
                            [disabled]="!entries().length"
                            (click)="downloadLogs()"
                        >
                            <icon>download</icon>
                        </button>
                    </div>
                    <div
                        shown-levels
                        role="group"
                        aria-label="Show entries of one level"
                        class="flex flex-wrap items-center gap-1 px-4 pb-2 text-xs"
                    >
                        <button
                            matRipple
                            type="button"
                            class="border-base-300 rounded-full border px-2 py-0.5"
                            [class.bg-secondary]="!shown_level()"
                            [class.text-secondary-content]="!shown_level()"
                            [attr.aria-pressed]="!shown_level()"
                            (click)="shown_level.set(null)"
                        >
                            All {{ entries().length }}
                        </button>
                        @for (option of shown_levels; track option) {
                            <button
                                matRipple
                                type="button"
                                class="border-base-300 rounded-full border px-2 py-0.5 uppercase"
                                [class]="
                                    shown_level() === option
                                        ? level_classes[option]
                                        : ''
                                "
                                [attr.aria-pressed]="shown_level() === option"
                                (click)="toggleShownLevel(option)"
                            >
                                {{ option }}
                                <span class="opacity-70">
                                    {{ level_counts()[option] }}
                                </span>
                            </button>
                        }
                        <span class="ml-auto opacity-60">
                            Showing {{ shown_entries().length }} of
                            {{ entries().length }}, newest first.
                            @if (older_than() !== null) {
                                Older than entry {{ older_than() }}.
                            }
                        </span>
                    </div>
                    <ol
                        class="border-base-300 max-h-[32rem] overflow-auto border-t font-mono text-xs @6xl:max-h-[48rem]"
                    >
                        @for (entry of shown_entries(); track entry.seq) {
                            <li
                                class="border-base-200 flex gap-2 border-b px-4 py-1"
                                [class]="row_classes[entry.level]"
                            >
                                <span class="shrink-0 opacity-60">
                                    {{ entry.timestamp | date: 'HH:mm:ss.SSS' }}
                                </span>
                                <span
                                    class="h-fit w-12 shrink-0 rounded px-1 text-center uppercase"
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
                                @if (entries().length) {
                                    No entry matches the filter
                                } @else if (request()) {
                                    Waiting for entries from the device
                                } @else {
                                    No log entries. Start live logs to get them
                                    from the device.
                                }
                            </li>
                        }
                    </ol>
                </section>

                <section
                    commands
                    class="bg-base-100 border-base-300 flex min-w-0 flex-col self-start rounded-lg border"
                >
                    <div class="flex flex-col gap-3 p-4">
                        <h3 class="font-medium">Commands</h3>
                        @if (last_seen() && !online()) {
                            <p
                                offline-note
                                class="bg-warning/10 flex items-start gap-2 rounded px-3 py-2 text-sm"
                            >
                                <icon class="text-warning text-lg">
                                    cloud_off
                                </icon>
                                The device is offline. Commands wait until it
                                connects again, or until the driver removes
                                them.
                            </p>
                        }
                        <div class="flex flex-col gap-2">
                            <h4
                                class="text-xs font-medium uppercase opacity-60"
                            >
                                Inspect
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    (click)="send('status')"
                                >
                                    <icon class="mr-1">info</icon>
                                    Status
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    (click)="send('snapshot')"
                                >
                                    <icon class="mr-1">photo_camera</icon>
                                    Snapshot
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    title="Short animation of the screen, as WebP"
                                    (click)="
                                        send('animation', { format: 'webp' })
                                    "
                                >
                                    <icon class="mr-1">animated_images</icon>
                                    Animation (WebP)
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    title="Short animation of the screen, as GIF"
                                    (click)="
                                        send('animation', { format: 'gif' })
                                    "
                                >
                                    <icon class="mr-1">gif_box</icon>
                                    Animation (GIF)
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse"
                                    (click)="send('storage')"
                                >
                                    <icon class="mr-1">database</icon>
                                    Storage keys
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
                                    class="inverse"
                                    [disabled]="!settings_keys.trim()"
                                >
                                    Get settings
                                </button>
                            </form>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h4
                                class="text-xs font-medium uppercase opacity-60"
                            >
                                Change the device
                            </h4>
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
                                    class="inverse"
                                    [disabled]="!navigate_path.startsWith('/')"
                                >
                                    Open route
                                </button>
                            </form>
                            <div class="flex flex-wrap gap-2">
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse error"
                                    (click)="reload('reload')"
                                >
                                    <icon class="mr-1">refresh</icon>
                                    Reload app
                                </button>
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse error"
                                    (click)="reload('clear_cache')"
                                >
                                    <icon class="mr-1">restart_alt</icon>
                                    Clear cache and reload
                                </button>
                            </div>
                        </div>
                    </div>

                    <div results class="border-base-300 border-t">
                        <h3 class="px-4 pt-3 pb-2 font-medium">Results</h3>
                        @if (pending().length) {
                            <ul
                                pending
                                class="flex flex-wrap items-center gap-2 px-4 pb-3 text-sm"
                                aria-label="Waiting for the device"
                            >
                                @for (command of pending(); track command.id) {
                                    <li
                                        class="bg-base-200 flex items-center gap-1 rounded px-2 py-0.5"
                                    >
                                        <icon class="animate-spin text-base">
                                            progress_activity
                                        </icon>
                                        {{ command_labels[command.type] }}
                                    </li>
                                }
                                <li class="text-xs opacity-60">
                                    Waiting for the device
                                </li>
                            </ul>
                        }
                        <ol class="flex flex-col">
                            @for (item of shown_results(); track item.id) {
                                <li
                                    class="border-base-200 flex min-w-0 flex-col gap-2 border-t px-4 py-3"
                                >
                                    <div class="flex items-center gap-2">
                                        <icon
                                            class="text-xl"
                                            [class.text-success]="
                                                item.result.ok
                                            "
                                            [class.text-error]="!item.result.ok"
                                        >
                                            {{
                                                item.result.ok
                                                    ? 'check_circle'
                                                    : 'error'
                                            }}
                                        </icon>
                                        <span class="font-medium">
                                            {{ command_labels[item.type] }}
                                        </span>
                                        <span class="text-sm opacity-60">
                                            {{
                                                item.received_at
                                                    | date: 'MMM d, h:mm:ss a'
                                            }}
                                        </span>
                                    </div>
                                    @switch (item.view.kind) {
                                        @case ('error') {
                                            <pre
                                                class="text-error max-h-48 overflow-auto text-xs whitespace-pre-wrap"
                                                >{{ item.result.error }}</pre
                                            >
                                        }
                                        @case ('media') {
                                            <div
                                                class="flex items-center gap-2"
                                            >
                                                <p
                                                    class="flex-1 text-sm opacity-70"
                                                >
                                                    {{ item.view.file.width }}
                                                    x
                                                    {{ item.view.file.height }},
                                                    {{ item.view.file.frames }}
                                                    {{
                                                        item.view.file
                                                            .frames === 1
                                                            ? 'frame'
                                                            : 'frames'
                                                    }},
                                                    {{
                                                        format_bytes(
                                                            item.view.file.bytes
                                                        )
                                                    }},
                                                    {{ item.view.file.mime }}
                                                </p>
                                                <button
                                                    icon
                                                    matRipple
                                                    type="button"
                                                    title="Save file"
                                                    aria-label="Save file"
                                                    (click)="
                                                        saveMedia(image, item)
                                                    "
                                                >
                                                    <icon>download</icon>
                                                </button>
                                            </div>
                                            <img
                                                #image
                                                auth
                                                class="border-base-300 max-h-[32rem] w-fit max-w-full rounded border object-contain"
                                                [source]="item.view.url"
                                                [alt]="
                                                    item.type +
                                                    ' of ' +
                                                    device_id()
                                                "
                                            />
                                        }
                                        @case ('status') {
                                            <dl
                                                status
                                                class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm"
                                            >
                                                @for (
                                                    row of item.view.rows;
                                                    track row.label
                                                ) {
                                                    <dt class="opacity-60">
                                                        {{ row.label }}
                                                    </dt>
                                                    <dd
                                                        class="min-w-0 break-words"
                                                        [class.text-error]="
                                                            row.warn
                                                        "
                                                    >
                                                        {{ row.value }}
                                                    </dd>
                                                }
                                            </dl>
                                            <details>
                                                <summary
                                                    class="cursor-pointer text-xs opacity-60"
                                                >
                                                    All data
                                                </summary>
                                                <pre
                                                    class="bg-base-200 mt-1 max-h-64 overflow-auto rounded p-2 text-xs"
                                                    >{{
                                                        item.result.data | json
                                                    }}</pre
                                                >
                                            </details>
                                        }
                                        @case ('storage') {
                                            <table
                                                storage
                                                class="w-full text-left text-xs"
                                            >
                                                <thead>
                                                    <tr class="opacity-60">
                                                        <th
                                                            class="py-1 font-normal"
                                                        >
                                                            Key
                                                        </th>
                                                        <th
                                                            class="py-1 text-right font-normal"
                                                        >
                                                            Characters
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @for (
                                                        storage of item.view
                                                            .items;
                                                        track storage.key
                                                    ) {
                                                        <tr
                                                            class="border-base-200 border-t"
                                                        >
                                                            <td
                                                                class="py-1 font-mono break-all"
                                                            >
                                                                {{
                                                                    storage.key
                                                                }}
                                                            </td>
                                                            <td
                                                                class="py-1 pl-2 text-right"
                                                            >
                                                                {{
                                                                    storage.length
                                                                        | number
                                                                }}
                                                            </td>
                                                        </tr>
                                                    } @empty {
                                                        <tr>
                                                            <td
                                                                class="py-1 opacity-60"
                                                            >
                                                                No keys
                                                            </td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        }
                                        @case ('data') {
                                            <pre
                                                class="bg-base-200 max-h-64 overflow-auto rounded p-2 text-xs"
                                                >{{
                                                    item.result.data | json
                                                }}</pre
                                            >
                                        }
                                    }
                                </li>
                            } @empty {
                                <li class="px-4 pb-6 text-center opacity-60">
                                    No results yet. Results of the commands show
                                    here.
                                </li>
                            }
                        </ol>
                    </div>
                </section>
            </div>
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
    private readonly _clipboard = inject(Clipboard);
    private readonly _state = signal<RemoteDebugDeviceState>({});
    private readonly _logs = signal<RemoteLogsView | null>(null);
    private readonly _results = signal<RemoteDebugCommandResult[]>([]);

    /** ID of the device to debug */
    public readonly device_id = input.required<string>();

    public readonly levels = REMOTE_LOG_LEVELS;
    /** Levels of the chips that filter the list, most severe first */
    public readonly shown_levels = [...REMOTE_LOG_LEVELS].reverse();
    public readonly level_classes = LEVEL_CLASSES;
    public readonly row_classes = ROW_CLASSES;
    public readonly command_labels = REMOTE_DEBUG_COMMAND_LABELS;
    public readonly format_bytes = formatBytes;
    /** Level that the device sends */
    public readonly level = signal<RemoteLogLevel>('info');
    /** Level of the entries that the list shows. `null` shows all levels */
    public readonly shown_level = signal<RemoteLogLevel | null>(null);
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
    /** Number of entries of each level */
    public readonly level_counts = computed(() => {
        const counts: Record<RemoteLogLevel, number> = {
            debug: 0,
            info: 0,
            warn: 0,
            error: 0,
        };
        for (const entry of this.entries()) counts[entry.level]++;
        return counts;
    });
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
    /** Whether a call failed since the queue was last empty */
    private _failed = false;
    /** `seq` that a request for older entries asked for. The page moves when older entries arrive */
    private _older_wanted: number | null = null;
    /** ID of the log request in the binding, to find a new request */
    private _request_id = '';
    /** Whether an entry matches the text filter and the shown level */
    private readonly _matches = computed(() => {
        const text = this.filter().trim().toLowerCase();
        const level = this.shown_level();
        return (entry: RemoteLogEntry) =>
            (!level || entry.level === level) &&
            (!text || entry.message.toLowerCase().includes(text));
    });
    public readonly shown_entries = computed(() => {
        const matches = this._matches();
        const older_than = this.older_than() ?? Infinity;
        const list: RemoteLogEntry[] = [];
        const entries = this.entries();
        // Newest first, so the loop stops after the shown entries
        for (let i = entries.length - 1; i >= 0; i--) {
            const entry = entries[i];
            if (entry.seq >= older_than || !matches(entry)) continue;
            list.push(entry);
            if (list.length >= MAX_SHOWN_ENTRIES) break;
        }
        return list;
    });
    /** Newest results first, with the view of each result */
    public readonly shown_results = computed(() =>
        this._results()
            .slice(-MAX_SHOWN_RESULTS)
            .reverse()
            .map((item) => ({ ...item, view: remoteDebugResultView(item) })),
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
    /** Time since the device last called the driver, such as `5 minutes ago` */
    public readonly last_seen_text = computed(() =>
        remoteDebugSeenText(this.last_seen(), this._view.now()),
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

    /** Show only the entries of `level`, or all entries when it shows already */
    public toggleShownLevel(level: RemoteLogLevel) {
        this.shown_level.set(this.shown_level() === level ? null : level);
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
     * Run a driver call after the calls before it. Resolves `undefined` when
     * the call fails, which the view service shows. A call that did not
     * start when the panel closes does not run, so a reload is not sent
     * later.
     *
     * When the last call finishes, the level shows the level in the binding
     * if a call failed, or if the binding changed during the last call. Else
     * the binding can still show the old level, and its next value sets the
     * level.
     */
    private _queue<T>(call: () => Promise<T>): Promise<T | undefined> {
        this._pending++;
        let seen: RemoteDebugDeviceState | null = null;
        const next = this._requests
            .then(() => {
                if (this._closed) return undefined;
                seen = this._state();
                return call();
            })
            .catch(() => {
                this._failed = true;
                return undefined;
            })
            .finally(() => {
                if (--this._pending) return;
                const state = this._state();
                if (this._failed || state !== seen) {
                    if (isRemoteLogRequest(state.logs)) {
                        this.level.set(state.logs.level);
                    }
                }
                this._failed = false;
            });
        this._requests = next;
        return next;
    }

    protected override destroy() {
        this._closed = true;
        super.destroy();
    }

    /** Whether an entry before `seq` matches the filter and the shown level */
    private _hasMatchBefore(seq: number) {
        const matches = this._matches();
        return this.entries().some((_) => _.seq < seq && matches(_));
    }

    /** Copy the device ID, for example to paste in a support ticket */
    public copyId() {
        const id = this.device_id();
        if (this._clipboard.copy(id)) notifySuccess(`Copied ${id}`);
        else notifyError('The device ID could not be copied');
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

    /**
     * Save the file of a snapshot or animation. The image already has the
     * file as a local URL after it loads, so the save needs no new request
     */
    public saveMedia(image: HTMLImageElement, item: RemoteDebugCommandResult) {
        const url = image.currentSrc || image.src;
        if (!url) {
            notifyError('The file did not load yet');
            return;
        }
        const file = this.media(item);
        const extension = file?.mime.split('/')[1] ?? 'webp';
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.device_id()}-${item.type}-${item.received_at}.${extension}`;
        link.click();
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
        const label = REMOTE_DEBUG_COMMAND_LABELS[type];
        if (id) notifySuccess(`Sent ${label} to ${device_id}`);
        else {
            notifyError(
                `The driver did not take the ${label} command. The device can have 20 waiting commands maximum.`,
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
        return readRemoteDebugMedia(item.result.data);
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
        this.shown_level.set(null);
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
