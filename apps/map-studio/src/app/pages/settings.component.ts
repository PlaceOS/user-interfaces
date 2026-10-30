import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { AsyncHandler } from '@placeos/common';

import {
    PlaceOSService,
    PlaceOSSettings,
    PlaceOSUser,
} from '../data/placeos.service';

type ConnectionStatus = 'idle' | 'loading' | 'connected' | 'error';

@Component({
    selector: 'map-studio-settings',
    template: `
        <div class="mx-auto max-w-[37.5rem]">
            <h2 class="mb-6 text-xl font-bold">Settings</h2>

            <div
                class="bg-base-100 border-base-300 rounded-lg border p-6 shadow-sm"
            >
                <div class="mb-4 flex items-center justify-between">
                    <h3 class="text-sm font-bold">PlaceOS Connection</h3>
                    @if (status() === 'connected') {
                        <span
                            class="bg-success-light text-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                        >
                            <span
                                class="bg-success h-1.5 w-1.5 rounded-full"
                            ></span>
                            Connected
                        </span>
                    }
                </div>

                @if (status() === 'connected' && user(); as account) {
                    <div
                        class="bg-base-200 border-base-300 mb-4 rounded-lg border p-3 text-xs"
                    >
                        <div class="mb-0.5 font-semibold">
                            {{ account.name }}
                        </div>
                        <div class="text-base-content/60">
                            {{ account.email }}
                        </div>
                        <div class="text-base-content/60 mt-1">
                            {{ domain() || 'current origin' }}
                        </div>
                    </div>
                }

                <p class="text-base-content/60 mb-4 text-xs">
                    A PlaceOS connection lets you publish floor plans to
                    building levels and show live space availability in the
                    kiosk.
                </p>

                @if (mode() === 'domain') {
                    <p class="text-base-content/60 text-xs">
                        Signed in through
                        <span class="font-semibold">{{ domain() }}</span
                        >. No API key needed.
                    </p>
                    @if (status() === 'loading') {
                        <p
                            class="text-base-content/60 mt-2 text-xs"
                            role="status"
                        >
                            Checking connection...
                        </p>
                    }
                } @else {
                    <form
                        class="flex flex-col gap-2"
                        (submit)="$event.preventDefault(); save()"
                    >
                        <label for="placeos-domain">PlaceOS Domain</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                id="placeos-domain"
                                name="domain"
                                placeholder="https://placeos-dev.aca.im"
                                [(ngModel)]="domain"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                        <label for="placeos-key">API Key</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <input
                                matInput
                                id="placeos-key"
                                type="password"
                                name="api_key"
                                placeholder="Enter API key"
                                [(ngModel)]="api_key"
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                        <div class="mt-1 flex flex-wrap gap-2">
                            <button
                                btn
                                type="submit"
                                class="flex-1"
                                [disabled]="
                                    status() === 'loading' || !api_key()
                                "
                            >
                                {{
                                    status() === 'loading'
                                        ? 'Connecting...'
                                        : status() === 'connected'
                                          ? 'Update Connection'
                                          : 'Connect'
                                }}
                            </button>
                            @if (has_saved_key()) {
                                <button
                                    btn
                                    type="button"
                                    class="inverse"
                                    [disabled]="status() === 'loading'"
                                    (click)="disconnect()"
                                >
                                    Disconnect
                                </button>
                            }
                        </div>
                        @if (saved()) {
                            <p class="text-success text-xs" role="status">
                                Connection saved successfully.
                            </p>
                        }
                        <p class="text-base-content/60 mt-2 text-xs">
                            Leave the domain blank to use the current origin —
                            the workspace dev proxy already forwards
                            <code class="text-mono">/api</code> to PlaceOS.
                        </p>
                    </form>
                }
                <!-- Outside the mode branches, so a failed check shows in domain mode too -->
                @if (error(); as message) {
                    <p class="text-error mt-2 text-xs" role="alert">
                        {{ message }}
                    </p>
                }
            </div>
        </div>
    `,
    imports: [FormsModule, MatFormField, MatInput],
})
export class SettingsComponent extends AsyncHandler {
    private readonly _placeos = inject(PlaceOSService);

    public readonly mode = this._placeos.mode;
    public readonly domain = signal(this._placeos.config.domain);
    public readonly api_key = signal(this._placeos.settings().api_key);
    public readonly status = signal<ConnectionStatus>('idle');
    public readonly user = signal<PlaceOSUser | null>(null);
    public readonly error = signal('');
    public readonly saved = signal(false);
    /** True when a domain and API key are stored */
    public readonly has_saved_key = computed(
        () => !!this._placeos.settings().api_key,
    );

    constructor() {
        super();
        if (this._placeos.config.configured) this._test();
    }

    /** Tests the entered credentials and stores them only if they work */
    public async save() {
        if (!this.api_key()) return;
        this.error.set('');
        this.saved.set(false);
        const settings = { domain: this.domain(), api_key: this.api_key() };
        const connected = await this._test(settings);
        if (!connected) return;
        this._placeos.setConfig(settings.domain, settings.api_key);
        this.saved.set(true);
        this.timeout('saved', () => this.saved.set(false), 3000);
    }

    /** Forgets the stored credentials */
    public disconnect() {
        if (
            !confirm(
                'Disconnect from PlaceOS? You will need to enter the API key again to reconnect.',
            )
        )
            return;
        this._placeos.clearConfig();
        this.domain.set('');
        this.api_key.set('');
        this.user.set(null);
        this.error.set('');
        this.saved.set(false);
        this.status.set('idle');
    }

    private async _test(settings?: PlaceOSSettings): Promise<boolean> {
        this.status.set('loading');
        const result = await this._placeos.testConnection(settings);
        if (result.ok && result.user) {
            this.user.set(result.user);
            this.status.set('connected');
            return true;
        }
        this.status.set(result.error ? 'error' : 'idle');
        this.error.set(result.error ?? '');
        return false;
    }
}
