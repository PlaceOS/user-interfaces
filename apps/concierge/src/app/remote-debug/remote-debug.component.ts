import { DatePipe } from '@angular/common';
import { Component, computed, inject, Injector, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import {
    isRemoteDebugDeviceOnline,
    RemoteDebugSeenDevice,
    user_group_names,
} from '@placeos/common';
import {
    IconComponent,
    RemoteDebugPanelComponent,
    RemoteDebugViewService,
    TranslatePipe,
} from '@placeos/components';

import { map } from 'rxjs/operators';

import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';

/** User groups that can use remote debugging */
const DEBUG_GROUPS = ['placeos_admin', 'placeos_support'];
/** Most devices that the list shows. Use the filter to find others */
const MAX_SHOWN_DEVICES = 100;
/** Format of new device IDs. See `libs/common/src/lib/device-id.ts` */
const DEVICE_ID_FORMAT = /^DEV-[0-9A-F]{12}$/i;

/** Devices whose ID, app or address contains `query`, ignoring case */
export function filterRemoteDebugDevices(
    devices: readonly RemoteDebugSeenDevice[],
    query: string,
): RemoteDebugSeenDevice[] {
    const text = query.trim().toLowerCase();
    if (!text) return [...devices];
    return devices.filter((_) =>
        [_.id, _.app, _.url].some((value) =>
            value.toLowerCase().includes(text),
        ),
    );
}

/**
 * Remote debugging of fixed devices, such as booking panels, control panels,
 * kiosks and signage displays. Lists the devices that called the RemoteDebug
 * driver, and shows the logs, commands and results of the selected device.
 * The device ID is in the `device` query parameter. Only admin and support
 * users can use the page. See `docs/remote-debug.md`.
 */
@Component({
    selector: 'app-remote-debug',
    template: `
        <div class="flex h-px flex-1">
            <app-sidebar />
            <main class="flex h-full min-w-0 flex-1 flex-col">
                <header class="px-8 pt-4 pb-2">
                    <h2 class="text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.MENU_MANAGE_REMOTE_DEBUG' | translate
                        }}
                    </h2>
                </header>
                @if (!allowed()) {
                    <p class="px-8 py-4 opacity-70" not-allowed>
                        Only admin and support users can use remote debugging.
                    </p>
                } @else if (state() === 'loading') {
                    <p class="px-8 py-4 opacity-70" role="status">Loading…</p>
                } @else if (state() === 'missing') {
                    <p class="px-8 py-4 opacity-70" missing>
                        Remote debugging is off. Add a system with the
                        RemoteDebug driver to the
                        <code>remote_debug</code> binding of the organisation
                        zone.
                    </p>
                } @else if (state() === 'failed') {
                    <div class="flex items-center gap-4 px-8 py-4">
                        <p class="opacity-70">
                            The zone bindings could not be read.
                        </p>
                        <button btn matRipple type="button" (click)="retry()">
                            Try again
                        </button>
                    </div>
                } @else {
                    <div
                        class="flex min-h-0 flex-1 flex-col gap-4 overflow-auto px-8 pb-8 lg:flex-row"
                    >
                        <aside
                            class="flex shrink-0 flex-col gap-2 lg:min-h-0 lg:w-80"
                        >
                            <form
                                class="flex items-center gap-2"
                                (ngSubmit)="openQuery()"
                            >
                                <mat-form-field
                                    appearance="outline"
                                    class="flex-1"
                                    subscriptSizing="dynamic"
                                >
                                    <input
                                        matInput
                                        name="device"
                                        placeholder="Filter or enter a device ID"
                                        aria-label="Filter or enter a device ID"
                                        [ngModel]="query()"
                                        (ngModelChange)="query.set($event)"
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    type="submit"
                                    [disabled]="!openable()"
                                >
                                    Open
                                </button>
                            </form>
                            <p class="text-xs opacity-70" device-count>
                                {{ devices().length }} devices,
                                {{ online_count() }} online.
                                @if (shown().length < matching().length) {
                                    Showing {{ shown().length }} of
                                    {{ matching().length }}.
                                }
                                @if (query().trim() && !openable()) {
                                    Select a device in the list.
                                }
                            </p>
                            <ul
                                class="bg-base-100 border-base-300 flex max-h-72 min-h-0 flex-col overflow-y-auto rounded-lg border lg:max-h-none"
                                aria-label="Devices"
                            >
                                @for (item of shown(); track item.id) {
                                    <li>
                                        <button
                                            matRipple
                                            type="button"
                                            class="hover:bg-base-200 flex w-full flex-col items-start px-4 py-2 text-left"
                                            [class.bg-base-200]="
                                                item.id === device()
                                            "
                                            [attr.aria-current]="
                                                item.id === device()
                                                    ? 'true'
                                                    : null
                                            "
                                            (click)="open(item.id)"
                                        >
                                            <span
                                                class="flex items-center gap-2 font-mono"
                                            >
                                                <span
                                                    class="size-2 shrink-0 rounded-full"
                                                    [class.bg-success]="
                                                        isOnline(item)
                                                    "
                                                    [class.bg-base-300]="
                                                        !isOnline(item)
                                                    "
                                                    [attr.aria-label]="
                                                        isOnline(item)
                                                            ? 'Online'
                                                            : 'Offline'
                                                    "
                                                    role="img"
                                                ></span>
                                                {{ item.id }}
                                            </span>
                                            <span class="text-xs opacity-70">
                                                {{ item.app }} ·
                                                {{
                                                    item.last_seen
                                                        | date: 'MMM d, h:mm a'
                                                }}
                                            </span>
                                        </button>
                                    </li>
                                } @empty {
                                    <li class="px-4 py-6 text-sm opacity-70">
                                        @if (query().trim()) {
                                            No device matches. Select Open to
                                            send a request to this ID.
                                        } @else {
                                            No device is known yet. Fixed
                                            devices register when they start.
                                            Enter a device ID to send it a
                                            request. A device shows its ID on
                                            its setup screen.
                                        }
                                    </li>
                                }
                            </ul>
                        </aside>
                        <section class="min-w-0 flex-1">
                            @if (device()) {
                                <remote-debug-panel [device_id]="device()" />
                            } @else {
                                <div
                                    class="flex flex-col items-center gap-2 p-8 opacity-70"
                                >
                                    <icon class="text-5xl">bug_report</icon>
                                    <p>Select or enter a device to debug.</p>
                                </div>
                            }
                        </section>
                    </div>
                }
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-200);
            }
        `,
    ],
    imports: [
        DatePipe,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        ApplicationSidebarComponent,
        IconComponent,
        RemoteDebugPanelComponent,
        TranslatePipe,
    ],
})
export class RemoteDebugComponent {
    private readonly _injector = inject(Injector);
    private readonly _router = inject(Router);
    private readonly _route = inject(ActivatedRoute);

    public readonly allowed = computed(() =>
        user_group_names().some((_) => DEBUG_GROUPS.includes(_)),
    );
    /** The viewer starts only for users who can use the page */
    private readonly _view = computed(() =>
        this.allowed() ? this._injector.get(RemoteDebugViewService) : null,
    );

    /** Device ID from the `device` query parameter */
    public readonly device = toSignal(
        this._route.queryParamMap.pipe(map((_) => _.get('device') ?? '')),
        { initialValue: '' },
    );
    public readonly state = computed(() => this._view()?.state() ?? 'loading');
    public readonly devices = computed(() => this._view()?.devices() ?? []);
    /** Text that filters the list, or a device ID to open */
    public readonly query = signal('');
    public readonly matching = computed(() =>
        filterRemoteDebugDevices(this.devices(), this.query()),
    );
    public readonly shown = computed(() =>
        this.matching().slice(0, MAX_SHOWN_DEVICES),
    );
    public readonly online_count = computed(
        () => this.devices().filter((_) => this.isOnline(_)).length,
    );

    /**
     * Device ID that Open opens: the device with the typed ID, or the only
     * device that matches the filter. Text that matches no device is a
     * device ID. Text that matches more devices only filters the list.
     */
    public readonly openable = computed(() => {
        const text = this.query().trim();
        if (!text) return '';
        const matching = this.matching();
        const device =
            matching.find((_) => _.id.toLowerCase() === text.toLowerCase()) ??
            (matching.length === 1 ? matching[0] : null);
        return device?.id ?? (matching.length ? '' : text);
    });

    public openQuery() {
        this.open(this.openable());
    }

    public open(device_id: string) {
        const trimmed = device_id.trim();
        // A typed ID can be lower case. Older ID formats keep their case
        const id = DEVICE_ID_FORMAT.test(trimmed)
            ? trimmed.toUpperCase()
            : trimmed;
        if (!id) return;
        this.query.set('');
        void this._router.navigate([], {
            queryParams: { device: id },
            queryParamsHandling: 'merge',
        });
    }

    public isOnline(device: RemoteDebugSeenDevice) {
        return isRemoteDebugDeviceOnline(
            device,
            this._view()?.now() ?? Date.now(),
        );
    }

    public retry() {
        void this._view()?.load();
    }
}
