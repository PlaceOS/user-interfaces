import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { AsyncHandler } from '@placeos/common';

import { PlaceOSService, PlaceOSUser } from '../data/placeos.service';

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

                @if (mode() === 'domain') {
                    <p class="text-base-content/60 text-xs">
                        Signed in through
                        <span class="font-semibold">{{ domain() }}</span
                        >. No API key needed.
                    </p>
                } @else {
                    <div class="flex flex-col gap-2">
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
                        <button
                            btn
                            class="mt-1"
                            [disabled]="status() === 'loading' || !api_key()"
                            (click)="save()"
                        >
                            {{
                                status() === 'loading'
                                    ? 'Connecting...'
                                    : status() === 'connected'
                                      ? 'Update Connection'
                                      : 'Connect'
                            }}
                        </button>
                        @if (error(); as message) {
                            <p class="text-error text-xs">{{ message }}</p>
                        }
                        @if (saved()) {
                            <p class="text-success text-xs">
                                Connection saved successfully.
                            </p>
                        }
                        <p class="text-base-content/60 mt-2 text-xs">
                            Leave the domain blank to use the current origin —
                            the workspace dev proxy already forwards
                            <code class="text-mono">/api</code> to PlaceOS.
                        </p>
                    </div>
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

    constructor() {
        super();
        if (this._placeos.config.configured) this._test();
    }

    public async save() {
        if (!this.api_key()) return;
        this.status.set('loading');
        this.error.set('');
        this.saved.set(false);
        this._placeos.setConfig(this.domain(), this.api_key());
        const connected = await this._test();
        if (connected) {
            this.saved.set(true);
            this.timeout('saved', () => this.saved.set(false), 3000);
        }
    }

    private async _test(): Promise<boolean> {
        this.status.set('loading');
        const result = await this._placeos.testConnection();
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
