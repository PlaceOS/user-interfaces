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
    isRemoteDebugDeviceOnline,
    RemoteDebugSeenDevice,
    remoteDebugSeenText,
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
 * driver saw it on a player route of the display: `#/signage/<id>` or
 * `#/template/<template_id>/<id>`.
 */
export function displayDeviceIds(
    display_id: string,
    debug_devices: readonly RemoteDebugSeenDevice[],
    setup_devices: readonly RemoteSetupDevice[],
): string[] {
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
        if (playerDisplayId(device.url) === display_id) {
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

/** ID of the display in a Signage player address. Empty for other addresses */
function playerDisplayId(url: string) {
    const route = url.split('#')[1]?.split('?')[0] ?? '';
    const [, page, first, second] = route.split('/');
    const id = page === 'signage' ? first : page === 'template' ? second : '';
    try {
        return decodeURIComponent(id ?? '');
    } catch {
        return '';
    }
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
                    @for (chip of device_chips(); track chip.id) {
                        <button
                            matRipple
                            type="button"
                            class="border-base-300 flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-sm"
                            [class.bg-secondary]="chip.id === selected()"
                            [class.text-secondary-content]="
                                chip.id === selected()
                            "
                            [attr.aria-pressed]="chip.id === selected()"
                            [title]="chip.details"
                            (click)="pick(chip.id)"
                        >
                            <span
                                class="size-2 shrink-0 rounded-full"
                                [class.bg-success]="chip.online"
                                [class.bg-base-300]="!chip.online"
                                [attr.aria-label]="
                                    chip.online ? 'Online' : 'Offline'
                                "
                                role="img"
                            ></span>
                            {{ chip.id }}
                        </button>
                    } @empty {
                        <span class="text-sm opacity-70" no-devices>
                            No device is known to show this display. Enter the
                            ID from the setup screen of the device.
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
    /**
     * Device that the panel shows. Starts at the newest device of the
     * display, and stays when the order changes, so a heartbeat does not
     * change the device while the user works. Another display starts again.
     */
    public readonly selected = linkedSignal<
        { display_id: string; ids: string[] },
        string
    >({
        source: () => ({
            display_id: this.display_id(),
            ids: this.device_ids(),
        }),
        computation: ({ display_id, ids }, previous) =>
            previous?.value && previous.source.display_id === display_id
                ? previous.value
                : (ids[0] ?? ''),
    });
    /**
     * Devices of the display with their online state, and the app and last
     * seen time for the tooltip
     */
    public readonly device_chips = computed(() => {
        const now = this._view.now();
        const seen = new Map(this._view.devices().map((_) => [_.id, _]));
        return this.device_ids().map((id) => {
            const device = seen.get(id);
            return {
                id,
                online: !!device && isRemoteDebugDeviceOnline(device, now),
                details: device
                    ? `${device.app}, last seen ${remoteDebugSeenText(device.last_seen, now)}`
                    : 'Remote setup knows this device. The driver did not see it yet.',
            };
        });
    });
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
        this.selected.set(device_id);
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
