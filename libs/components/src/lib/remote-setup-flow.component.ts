import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    debounced,
    effect,
    inject,
    input,
    linkedSignal,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import {
    PlaceModuleBinding,
    PlaceSystem,
    querySignageTemplates,
    querySystems,
    SignageTemplate,
} from '@placeos/ts-client';

import {
    i18n,
    initialisationComplete,
    isRemoteSetupCommand,
    notifyError,
    notifySuccess,
    OrganisationService,
    REMOTE_SETUP_CLEAR_LIST,
    RemoteSetupApp,
    remoteSetupClearList,
    remoteSetupCommandBinding,
    RemoteSetupConfig,
    RemoteSetupDevice,
    remoteSetupModule,
} from '@placeos/common';

import { openConfirmModal } from './confirm-modal.component';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

/** Most devices that the device list shows */
const MAX_DEVICES_SHOWN = 50;

/** Translation keys of the application names */
const APP_NAMES: Record<RemoteSetupApp, string> = {
    'booking-panel': 'APP.BOOKING_PANEL.BOOTSTRAP_TITLE',
    control: 'APP.CONTROL.BOOTSTRAP_TITLE',
    signage: 'APP.SIGNAGE.BOOTSTRAP_TITLE',
};

/**
 * Remote setup flow for devices that show a setup QR code.
 *
 * The QR code opens this flow with `?device=<id>`. Without the parameter, the
 * flow lists the devices that the RemoteSetup driver knows. For the selected
 * device, the user picks a system and sends it to the device, or clears the
 * configuration on the device. A device that is set up does not register,
 * so the flow can also clear a device ID that the driver does not know.
 * The device list can also clear all devices of an app that show a system.
 *
 * ```html
 * <remote-setup-flow [apps]="['booking-panel', 'control']" />
 * ```
 */
@Component({
    selector: 'remote-setup-flow',
    template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center overflow-y-auto p-2 sm:p-4"
        >
            <div
                class="bg-base-100 border-base-300 flex w-full max-w-xl flex-col overflow-hidden rounded-sm border shadow-md"
            >
                <header
                    class="bg-secondary text-secondary-content flex items-center gap-2 px-4 py-3"
                >
                    @if (device_id()) {
                        <button
                            icon
                            matRipple
                            class="-ml-2"
                            [attr.aria-label]="'COMMON.BACK' | translate"
                            (click)="selectDevice('')"
                        >
                            <icon>arrow_back</icon>
                        </button>
                    }
                    <h1 class="text-xl font-medium">
                        {{ 'COMMON.REMOTE_SETUP_TITLE' | translate }}
                    </h1>
                </header>
                @switch (state()) {
                    @case ('loading') {
                        <div class="flex justify-center p-8">
                            <mat-spinner [diameter]="32" aria-hidden="true" />
                        </div>
                    }
                    @case ('unavailable') {
                        <p unavailable class="p-4">
                            {{ 'COMMON.REMOTE_SETUP_UNAVAILABLE' | translate }}
                        </p>
                    }
                    @case ('list') {
                        <form
                            class="flex items-start gap-2 px-4 pt-4"
                            (ngSubmit)="selectDevice(device_input())"
                        >
                            <mat-form-field
                                appearance="outline"
                                class="min-w-0 flex-1"
                            >
                                <mat-label>
                                    {{
                                        'COMMON.REMOTE_SETUP_DEVICE_ID'
                                            | translate
                                    }}
                                </mat-label>
                                <input
                                    matInput
                                    name="device"
                                    autocomplete="off"
                                    [(ngModel)]="device_input"
                                    placeholder="DEV-..."
                                />
                            </mat-form-field>
                            <button
                                btn
                                matRipple
                                type="submit"
                                class="h-14"
                                [disabled]="!device_input().trim()"
                            >
                                {{ 'COMMON.REMOTE_SETUP_OPEN' | translate }}
                            </button>
                        </form>
                        <h2 class="px-4 pb-2 font-medium">
                            {{ 'COMMON.REMOTE_SETUP_DEVICES' | translate }}
                        </h2>
                        <ul class="flex flex-col pb-2">
                            @for (item of devices(); track item.id) {
                                <li>
                                    <button
                                        device
                                        matRipple
                                        class="hover:bg-base-200 flex w-full items-center gap-3 px-4 py-3 text-left"
                                        (click)="selectDevice(item.id)"
                                    >
                                        <div
                                            class="flex min-w-0 flex-1 flex-col"
                                        >
                                            <div class="font-mono">
                                                {{ item.id }}
                                            </div>
                                            <div
                                                class="truncate text-sm opacity-70"
                                            >
                                                {{
                                                    appName(item.app)
                                                        | translate
                                                }}
                                                ·
                                                {{
                                                    item.config?.system_id ||
                                                        ('COMMON.REMOTE_SETUP_NOT_SET_UP'
                                                            | translate)
                                                }}
                                            </div>
                                        </div>
                                        <div class="text-xs opacity-60">
                                            {{ item.last_seen | date: 'short' }}
                                        </div>
                                        <icon aria-hidden="true">
                                            chevron_right
                                        </icon>
                                    </button>
                                </li>
                            } @empty {
                                <li class="px-4 pb-4 text-sm opacity-70">
                                    {{
                                        'COMMON.REMOTE_SETUP_NO_DEVICES'
                                            | translate
                                    }}
                                </li>
                            }
                        </ul>
                        <form
                            clear-system
                            class="border-base-300 flex flex-col gap-2 border-t p-4"
                            (ngSubmit)="clearSystem()"
                        >
                            <h2 class="font-medium">
                                {{
                                    'COMMON.REMOTE_SETUP_CLEAR_SYSTEM'
                                        | translate
                                }}
                            </h2>
                            <p class="pb-2 text-sm opacity-70">
                                {{
                                    'COMMON.REMOTE_SETUP_CLEAR_SYSTEM_INFO'
                                        | translate
                                }}
                            </p>
                            @if (apps().length > 1) {
                                <mat-form-field appearance="outline">
                                    <mat-label>
                                        {{
                                            'COMMON.REMOTE_SETUP_APP'
                                                | translate
                                        }}
                                    </mat-label>
                                    <mat-select
                                        name="clear_app"
                                        [(ngModel)]="clear_app"
                                    >
                                        @for (app of apps(); track app) {
                                            <mat-option [value]="app">
                                                {{ appName(app) | translate }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            }
                            <mat-form-field appearance="outline">
                                <mat-label>
                                    {{ 'COMMON.BOOTSTRAP_LABEL' | translate }}
                                </mat-label>
                                <input
                                    matInput
                                    name="clear_system"
                                    autocomplete="off"
                                    [(ngModel)]="clear_system_id"
                                    [matAutocomplete]="clear_auto"
                                    [placeholder]="
                                        'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                            <mat-autocomplete #clear_auto="matAutocomplete">
                                @for (option of systems(); track option.id) {
                                    <mat-option [value]="option.id">
                                        <div
                                            class="flex w-full items-center gap-4 leading-tight"
                                        >
                                            <div
                                                class="min-w-0 flex-1 truncate"
                                            >
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                                            >
                                                {{ option.id }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                            <button
                                btn
                                matRipple
                                type="submit"
                                class="inverse"
                                [disabled]="
                                    sending() || !clear_system_id().trim()
                                "
                            >
                                {{ 'COMMON.REMOTE_SETUP_CLEAR' | translate }}
                            </button>
                        </form>
                    }
                    @case ('missing') {
                        <p missing class="p-4">
                            {{
                                'COMMON.REMOTE_SETUP_DEVICE_MISSING'
                                    | translate: { id: device_id() }
                            }}
                        </p>
                        <div class="flex flex-col gap-2 px-4 pb-4">
                            <ng-container [ngTemplateOutlet]="status" />
                            <button
                                btn
                                matRipple
                                clear
                                type="button"
                                class="inverse"
                                [disabled]="sending() || pending()"
                                (click)="clear()"
                            >
                                {{ 'COMMON.REMOTE_SETUP_CLEAR' | translate }}
                            </button>
                        </div>
                    }
                    @case ('other-app') {
                        <p other-app class="p-4">
                            {{
                                'COMMON.REMOTE_SETUP_OTHER_APP'
                                    | translate
                                        : {
                                              app:
                                                  (appName(raw_device()!.app)
                                                  | translate),
                                          }
                            }}
                        </p>
                    }
                    @case ('device') {
                        @let item = device()!;
                        <section
                            class="border-base-300 flex flex-col gap-1 border-b p-4"
                        >
                            <div class="font-mono text-lg">{{ item.id }}</div>
                            <div class="text-sm opacity-70">
                                {{ appName(item.app) | translate }}
                            </div>
                            <div current class="text-sm">
                                {{ 'COMMON.REMOTE_SETUP_CURRENT' | translate }}:
                                @if (item.config; as config) {
                                    <span class="font-mono">{{
                                        config.system_id
                                    }}</span>
                                    @if (config.template_id) {
                                        <span class="font-mono">
                                            ({{ config.template_id }})
                                        </span>
                                    }
                                } @else {
                                    {{
                                        'COMMON.REMOTE_SETUP_NOT_SET_UP'
                                            | translate
                                    }}
                                }
                            </div>
                        </section>
                        <form
                            class="flex flex-col gap-2 p-4"
                            (ngSubmit)="apply()"
                        >
                            <mat-form-field appearance="outline">
                                <mat-label>
                                    {{ 'COMMON.BOOTSTRAP_LABEL' | translate }}
                                </mat-label>
                                <input
                                    matInput
                                    name="system"
                                    autocomplete="off"
                                    [(ngModel)]="system_id"
                                    [matAutocomplete]="auto"
                                    [placeholder]="
                                        'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                            <mat-autocomplete #auto="matAutocomplete">
                                @for (option of systems(); track option.id) {
                                    <mat-option [value]="option.id">
                                        <div
                                            class="flex w-full items-center gap-4 leading-tight"
                                        >
                                            <div
                                                class="min-w-0 flex-1 truncate"
                                            >
                                                {{
                                                    option.display_name ||
                                                        option.name
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                                            >
                                                {{ option.id }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                            @if (item.app === 'signage') {
                                <mat-form-field appearance="outline">
                                    <mat-label>
                                        {{
                                            'APP.SIGNAGE.BOOTSTRAP_TEMPLATE'
                                                | translate
                                        }}
                                    </mat-label>
                                    <mat-select
                                        name="template"
                                        [(ngModel)]="template_id"
                                    >
                                        <mat-option value="">
                                            {{
                                                'APP.SIGNAGE.BOOTSTRAP_TEMPLATE_NONE'
                                                    | translate
                                            }}
                                        </mat-option>
                                        @for (
                                            option of templates();
                                            track option.id
                                        ) {
                                            <mat-option [value]="option.id">
                                                {{ option.name }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            }
                            @if (item.app === 'booking-panel') {
                                <mat-checkbox
                                    name="event_view"
                                    class="pb-2"
                                    [(ngModel)]="event_view"
                                >
                                    {{
                                        'COMMON.REMOTE_SETUP_EVENT_VIEW'
                                            | translate
                                    }}
                                </mat-checkbox>
                            }
                            <ng-container [ngTemplateOutlet]="status" />
                            <div
                                class="flex flex-col-reverse gap-2 sm:flex-row"
                            >
                                <button
                                    btn
                                    matRipple
                                    clear
                                    type="button"
                                    class="inverse flex-1"
                                    [disabled]="sending() || pending()"
                                    (click)="clear()"
                                >
                                    {{
                                        'COMMON.REMOTE_SETUP_CLEAR' | translate
                                    }}
                                </button>
                                <button
                                    btn
                                    matRipple
                                    apply
                                    type="submit"
                                    class="flex-1"
                                    [disabled]="
                                        sending() || !system_id().trim()
                                    "
                                >
                                    {{
                                        'COMMON.REMOTE_SETUP_APPLY' | translate
                                    }}
                                </button>
                            </div>
                        </form>
                    }
                }
            </div>
        </div>
        <ng-template #status>
            @if (pending()) {
                <div
                    pending
                    role="status"
                    class="bg-base-200 flex items-center gap-2 rounded-sm p-3 text-sm"
                >
                    <mat-spinner [diameter]="20" aria-hidden="true" />
                    {{ 'COMMON.REMOTE_SETUP_PENDING' | translate }}
                </div>
            } @else if (done()) {
                <div
                    done
                    role="status"
                    class="bg-success/10 flex items-center gap-2 rounded-sm p-3 text-sm"
                >
                    <icon class="text-success" aria-hidden="true">
                        check_circle
                    </icon>
                    {{ 'COMMON.REMOTE_SETUP_DONE' | translate }}
                </div>
            }
        </ng-template>
    `,
    styles: [
        `
            button[btn] {
                min-height: 3rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
    ],
})
export class RemoteSetupFlowComponent {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private readonly _query_params = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    /** Applications that this flow sets up */
    public readonly apps = input.required<RemoteSetupApp[]>();

    private readonly _module = signal<PlaceModuleBinding | null>(null);
    /** Whether the driver is connected. `null` until the binding loads */
    private readonly _connected = signal<boolean | null>(null);
    private readonly _devices = signal<Record<string, RemoteSetupDevice>>({});
    private readonly _command = signal<unknown>(null);
    private readonly _clear_list = signal<string[]>([]);

    /** Device ID in the `device` query parameter, as typed */
    private readonly _requested_id = computed(
        () => this._query_params().get('device')?.trim() || '',
    );
    /**
     * ID of the selected device. A known device ID that matches the
     * `device` query parameter, ignoring case, replaces the typed ID.
     */
    public readonly device_id = computed(() => {
        const id = this._requested_id();
        const devices = this._devices();
        if (!id || devices[id]) return id;
        const lower = id.toLowerCase();
        return (
            Object.keys(devices).find((key) => key.toLowerCase() === lower) ||
            id
        );
    });
    /** Device ID typed in the device list */
    public readonly device_input = signal('');
    /** Details of the selected device, for any application */
    public readonly raw_device = computed(
        () => this._devices()[this.device_id()] || null,
    );
    /** Details of the selected device, when this flow can set it up */
    public readonly device = computed(() => {
        const device = this.raw_device();
        return device && this.apps().includes(device.app) ? device : null;
    });
    /** Known devices of the applications of this flow, last seen first */
    public readonly devices = computed(() => {
        const apps = this.apps();
        return Object.values(this._devices())
            .filter((device) => apps.includes(device.app))
            .sort((a, b) => b.last_seen - a.last_seen)
            .slice(0, MAX_DEVICES_SHOWN);
    });
    /** View that the flow shows */
    public readonly state = computed(() => {
        if (!this._module()) {
            return initialisationComplete()() ? 'unavailable' : 'loading';
        }
        if (this._connected() === null) return 'loading';
        if (!this._connected()) return 'unavailable';
        if (!this.device_id()) return 'list';
        if (this.device()) return 'device';
        return this.raw_device() ? 'other-app' : 'missing';
    });

    /** System to send to the device. Starts as the system on the device */
    public readonly system_id = linkedSignal({
        source: () => this.device()?.id,
        computation: () =>
            untracked(() => this.device()?.config?.system_id || ''),
    });
    /** Signage template to send to the device */
    public readonly template_id = linkedSignal({
        source: () => this.device()?.id,
        computation: () =>
            untracked(() => this.device()?.config?.template_id || ''),
    });
    /** Whether a booking panel opens the events view */
    public readonly event_view = linkedSignal({
        source: () => this.device()?.id,
        computation: () => untracked(() => !!this.device()?.config?.event_view),
    });

    /** Whether a command is being sent to the driver */
    public readonly sending = signal(false);
    /** ID of the last configure command sent to the selected device */
    private readonly _sent_id = linkedSignal({
        source: this.device_id,
        computation: () => '',
    });
    /** Whether this page sent a clear to the selected device */
    private readonly _clear_sent = linkedSignal({
        source: this.device_id,
        computation: () => false,
    });
    /** Whether the driver listed the clear that this page sent */
    private readonly _clear_listed = linkedSignal({
        source: this.device_id,
        computation: () => false,
    });
    /** Whether the selected device is in the clear list of the driver */
    public readonly clearing = computed(() =>
        this._clear_list().includes(this.device_id()),
    );
    /** Whether the device has a change that it has not applied */
    public readonly pending = computed(
        () => isRemoteSetupCommand(this._command()) || this.clearing(),
    );
    /** Whether the device applied the last change sent from this page */
    public readonly done = computed(() =>
        this._sent_id()
            ? this.device()?.last_command === this._sent_id()
            : this._clear_listed() && !this.clearing(),
    );

    /** Application of the devices to clear by system */
    public readonly clear_app = linkedSignal(() => this.apps()[0]);
    /** System whose devices to clear */
    public readonly clear_system_id = signal('');

    /** Text of the system search. The device list searches for a clear */
    private readonly _search = computed(() =>
        this.state() === 'list' ? this.clear_system_id() : this.system_id(),
    );
    private readonly _debounced_search = debounced(this._search, 300);
    private readonly _systems = resource({
        params: () => ({
            q: this._org.initialised() ? this._debounced_search.value() : '',
            signage:
                (this.device()?.app ??
                    (this.state() === 'list' ? this.clear_app() : '')) ===
                'signage',
        }),
        loader: async ({ params }) => {
            if (params.q.length < 2) return [] as PlaceSystem[];
            const { data } = await querySystems({
                q: params.q,
                limit: 20,
                zone_id: this._org.organisation?.id,
                fields: ['id', 'name', 'display_name'].join(','),
                ...(params.signage ? { signage: true } : {}),
            });
            return data;
        },
    });
    /** Systems that match the system search */
    public readonly systems = computed(() =>
        this._systems.hasValue() ? this._systems.value() : [],
    );

    private readonly _templates = resource({
        params: () => this.device()?.app === 'signage',
        loader: async ({ params: enabled }) => {
            if (!enabled) return [] as SignageTemplate[];
            const { data } = await querySignageTemplates({ limit: 500 }).catch(
                () => ({ data: [] as SignageTemplate[] }),
            );
            return data.sort((a, b) => a.name.localeCompare(b.name));
        },
    });
    /** Signage templates for a signage device */
    public readonly templates = computed(() => this._templates.value() ?? []);

    constructor() {
        // A clear is done when its device ID leaves the clear list. Wait
        // until the ID is in the list, so the list from before the clear
        // does not count.
        effect(() => {
            if (this._clear_sent() && this.clearing()) {
                untracked(() => this._clear_listed.set(true));
            }
        });
        effect((on_cleanup) => {
            if (!initialisationComplete()()) return;
            const mod = untracked(() => remoteSetupModule());
            this._module.set(mod);
            if (!mod) return;
            const unbind_connected = mod
                .variable<boolean>('connected')
                .bindThenSubscribe((value) =>
                    this._connected.set(value === undefined ? null : !!value),
                );
            const unbind_clear_list = mod
                .variable<unknown>(REMOTE_SETUP_CLEAR_LIST)
                .bindThenSubscribe((value) =>
                    this._clear_list.set(remoteSetupClearList(value)),
                );
            const unbind_devices = mod
                .variable<Record<string, RemoteSetupDevice> | null>('devices')
                .bindThenSubscribe((value) =>
                    this._devices.set(
                        value && typeof value === 'object' ? value : {},
                    ),
                );
            on_cleanup(() => {
                unbind_connected();
                unbind_clear_list();
                unbind_devices();
            });
        });
        effect((on_cleanup) => {
            const mod = this._module();
            const device_id = this.device_id();
            this._command.set(null);
            if (!mod || !device_id) return;
            const unbind = mod
                .variable<unknown>(remoteSetupCommandBinding(device_id))
                .bindThenSubscribe((value) => this._command.set(value));
            on_cleanup(unbind);
        });
    }

    /** Translation key of the name of an application */
    public appName(app: RemoteSetupApp) {
        return APP_NAMES[app] || app;
    }

    /** Open a device. An empty ID goes back to the device list */
    public selectDevice(id: string) {
        this.device_input.set('');
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { device: id.trim() || null },
            queryParamsHandling: 'merge',
        });
    }

    /** Send the configuration in the form to the device */
    public async apply() {
        const device = this.device();
        const system_id = this.system_id().trim();
        if (!device || !system_id) return;
        const config: RemoteSetupConfig = { system_id };
        if (device.app === 'signage' && this.template_id()) {
            config.template_id = this.template_id();
        }
        if (device.app === 'booking-panel') {
            config.event_view = this.event_view();
        }
        await this._send('configure', [device.id, config]);
    }

    /**
     * Remove the configuration from the device, after the user confirms.
     * The driver keeps the device ID in its clear list until the device
     * registers from its setup screen.
     */
    public async clear() {
        const state = this.state();
        if (state !== 'device' && state !== 'missing') return;
        const device_id = this.device_id();
        const result = await openConfirmModal(
            {
                title: i18n('COMMON.REMOTE_SETUP_CLEAR'),
                content: i18n('COMMON.REMOTE_SETUP_CLEAR_CONFIRM', {
                    id: device_id,
                }),
                icon: { type: 'icon', content: 'restart_alt' },
                destructive: true,
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.close();
        this._sent_id.set('');
        this._clear_listed.set(false);
        await this._send('clear', [device_id]);
    }

    /**
     * Clear all devices of an application that show a system, after the
     * user confirms. Only devices that are on before the driver time limit
     * clear.
     */
    public async clearSystem() {
        const app = this.clear_app();
        const system_id = this.clear_system_id().trim();
        const mod = this._module();
        if (!mod || !app || !system_id) return;
        const result = await openConfirmModal(
            {
                title: i18n('COMMON.REMOTE_SETUP_CLEAR_SYSTEM'),
                content: i18n('COMMON.REMOTE_SETUP_CLEAR_SYSTEM_CONFIRM', {
                    app: i18n(this.appName(app)),
                    id: system_id,
                }),
                icon: { type: 'icon', content: 'restart_alt' },
                destructive: true,
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.close();
        this.sending.set(true);
        try {
            await mod.execute('clear_system', [app, system_id]);
            this.clear_system_id.set('');
            notifySuccess(i18n('COMMON.REMOTE_SETUP_CLEAR_SYSTEM_SENT'));
        } catch (error) {
            notifyError(
                i18n('COMMON.REMOTE_SETUP_SEND_ERROR', {
                    error: `${error?.message || error}`,
                }),
            );
        } finally {
            this.sending.set(false);
        }
    }

    private async _send(method: 'configure' | 'clear', args: unknown[]) {
        const mod = this._module();
        if (!mod) return;
        this.sending.set(true);
        try {
            const id = await mod.execute<unknown>(method, args);
            if (method === 'configure') {
                this._sent_id.set(typeof id === 'string' ? id : '');
            } else {
                this._clear_sent.set(true);
            }
        } catch (error) {
            notifyError(
                i18n('COMMON.REMOTE_SETUP_SEND_ERROR', {
                    error: `${error?.message || error}`,
                }),
            );
        } finally {
            this.sending.set(false);
        }
    }
}
