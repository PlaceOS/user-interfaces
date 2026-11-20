import {
    Component,
    computed,
    inject,
    input,
    linkedSignal,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    AsyncHandler,
    RemoteDebugSeenDevice,
    RemoteSetupDevice,
    remoteSetupModule,
} from '@placeos/common';
import {
    IconComponent,
    RemoteDebugPanelComponent,
    RemoteDebugViewService,
} from '@placeos/components';

/** Most devices that the tab lists for one display */
const MAX_DEVICES = 20;

/**
 * IDs of the devices that show a display, newest first. A device shows the
 * display when remote setup set it up with the display, or when the RemoteDebug
 * driver saw it on the player route of the display (`#/signage/<id>`).
 */
export function displayDeviceIds(
    display_id: string,
    debug_devices: readonly RemoteDebugSeenDevice[],
    setup_devices: readonly RemoteSetupDevice[],
): string[] {
    const route = `#/signage/${encodeURIComponent(display_id)}`;
    const ids = new Map<string, number>();
    for (const device of setup_devices) {
        if (
            device.app === 'signage' &&
            device.config?.system_id === display_id
        ) {
            ids.set(device.id, device.last_seen);
        }
    }
    for (const device of debug_devices) {
        const index = device.url.indexOf(route);
        const next = device.url.charAt(index + route.length);
        // The route ends at the end of the address, a query or a sub-route
        if (index >= 0 && (next === '' || next === '?' || next === '/')) {
            ids.set(
                device.id,
                Math.max(ids.get(device.id) ?? 0, device.last_seen),
            );
        }
    }
    return Array.from(ids.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, MAX_DEVICES)
        .map(([id]) => id);
}

/**
 * Admin tab of a display: remote debugging of the devices that show it. Only
 * admin and support users see the tab. Like the other debugging tools, the
 * tab text is in English. See `docs/remote-debug.md`.
 */
@Component({
    selector: 'display-admin',
    template: `
        <div class="flex flex-col gap-3 p-3">
            @if (state() === 'loading') {
                <p class="opacity-70" role="status">Loading…</p>
            } @else if (state() === 'missing') {
                <p class="opacity-70" missing>
                    Remote debugging is off. Add a system with the RemoteDebug
                    driver to the <code>remote_debug</code> binding of the
                    organisation zone.
                </p>
            } @else if (state() === 'failed') {
                <div class="flex items-center gap-4">
                    <p class="opacity-70">
                        The zone bindings could not be read.
                    </p>
                    <button btn matRipple type="button" (click)="retry()">
                        Try again
                    </button>
                </div>
            } @else {
                <div class="flex flex-wrap items-center gap-2">
                    <span class="text-sm opacity-70">Devices:</span>
                    @for (id of device_ids(); track id) {
                        <button
                            matRipple
                            type="button"
                            class="border-base-300 rounded-full border px-3 py-1 font-mono text-sm"
                            [class.bg-secondary]="id === selected()"
                            [class.text-secondary-content]="id === selected()"
                            [attr.aria-pressed]="id === selected()"
                            (click)="pick(id)"
                        >
                            {{ id }}
                        </button>
                    } @empty {
                        <span class="text-sm opacity-70" no-devices>
                            No device is known to show this display.
                        </span>
                    }
                    <form
                        class="ml-auto flex items-center gap-2"
                        (ngSubmit)="openTyped()"
                    >
                        <mat-form-field
                            appearance="outline"
                            subscriptSizing="dynamic"
                        >
                            <input
                                matInput
                                name="device"
                                placeholder="Other device ID"
                                aria-label="Other device ID"
                                [(ngModel)]="typed_id"
                            />
                        </mat-form-field>
                        <button
                            btn
                            matRipple
                            type="submit"
                            [disabled]="!typed_id.trim()"
                        >
                            Open
                        </button>
                    </form>
                </div>
                @if (selected()) {
                    <remote-debug-panel [device_id]="selected()" />
                } @else {
                    <div
                        class="flex flex-col items-center gap-2 p-8 opacity-70"
                    >
                        <icon class="text-5xl">bug_report</icon>
                        <p>Select or enter a device to debug.</p>
                    </div>
                }
            }
        </div>
    `,
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        IconComponent,
        RemoteDebugPanelComponent,
    ],
})
export class DisplayAdminComponent extends AsyncHandler {
    private readonly _view = inject(RemoteDebugViewService);
    private readonly _setup_devices = signal<RemoteSetupDevice[]>([]);

    /** ID of the display */
    public readonly display_id = input.required<string>();
    public readonly state = this._view.state;
    public readonly device_ids = computed(() =>
        displayDeviceIds(
            this.display_id(),
            this._view.devices(),
            this._setup_devices(),
        ),
    );
    /** Device that the user picked. Another display clears it */
    private readonly _picked = linkedSignal({
        source: this.display_id,
        computation: () => '',
    });
    /** Device that the panel shows: the picked device, else the newest device of the display */
    public readonly selected = computed(
        () => this._picked() || this.device_ids()[0] || '',
    );
    public typed_id = '';

    constructor() {
        super();
        const setup = remoteSetupModule();
        if (setup) {
            this.subscription(
                'setup_devices',
                setup
                    .variable<unknown>('devices')
                    .bindThenSubscribe((value) =>
                        this._setup_devices.set(
                            value && typeof value === 'object'
                                ? Object.values(
                                      value as Record<
                                          string,
                                          RemoteSetupDevice
                                      >,
                                  )
                                : [],
                        ),
                    ),
            );
        }
    }

    public pick(device_id: string) {
        this._picked.set(device_id);
    }

    public openTyped() {
        const id = this.typed_id.trim();
        if (!id) return;
        this.pick(id);
        this.typed_id = '';
    }

    public retry() {
        void this._view.load();
    }
}
