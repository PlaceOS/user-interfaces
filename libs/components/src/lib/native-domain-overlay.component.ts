import { Component, effect, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    getNativeApiKey,
    getNativeDomain,
    getNativeEmail,
    lookupNativeDomainByEmail,
    normaliseNativeDomain,
    setNativeApiKey,
    setNativeDomain,
    setNativeEmail,
} from '@placeos/common';

import { IconComponent } from './icon.component';

@Component({
    selector: 'native-domain-overlay',
    template: `
        <div
            class="bg-base-200 pointer-events-auto fixed inset-0 z-9999 flex items-center justify-center p-4"
        >
            <form
                class="border-base-300 bg-base-100 flex w-full max-w-md flex-col rounded-sm border shadow-sm"
                (ngSubmit)="submit()"
            >
                <header class="bg-base-200 m-2 rounded-sm border-none p-2">
                    <h2 class="px-2 text-xl font-medium">Connect to Server</h2>
                </header>
                <main class="flex flex-col space-y-4 p-4">
                    <p class="text-sm opacity-60">
                        @if (manual_entry()) {
                            Enter the address of your PlaceOS server to connect
                            this app.
                        } @else {
                            Enter your work email to find your PlaceOS server
                            and connect this app.
                        }
                    </p>
                    @if (error()) {
                        <p
                            class="bg-error/10 text-error rounded-sm px-3 py-2 text-xs"
                        >
                            {{ error() }}
                        </p>
                    }
                    @if (manual_entry()) {
                        <div class="flex w-full flex-col">
                            <label for="server-address">Server Address</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>dns</icon>
                                <input
                                    matInput
                                    name="server-address"
                                    [(ngModel)]="server_address"
                                    placeholder="placeos.company.com"
                                    type="text"
                                    autocapitalize="off"
                                    autocomplete="url"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex w-full flex-col">
                            <label for="api-key">API Key (optional)</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>key</icon>
                                <input
                                    matInput
                                    name="api-key"
                                    [(ngModel)]="api_key"
                                    placeholder="Leave empty to sign in"
                                    type="password"
                                    autocapitalize="off"
                                    autocomplete="off"
                                    spellcheck="false"
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                            <p class="text-xs opacity-60">
                                When set, the app authenticates with this key
                                instead of asking you to sign in.
                            </p>
                        </div>
                    } @else {
                        <div class="flex w-full flex-col">
                            <label for="email">Work Email</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>mail</icon>
                                <input
                                    matInput
                                    name="email"
                                    [(ngModel)]="email"
                                    placeholder="name@company.com"
                                    type="email"
                                    autocapitalize="off"
                                    autocomplete="email"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <button
                        type="button"
                        class="self-start text-sm underline opacity-60"
                        [disabled]="loading()"
                        (click)="toggleManualEntry()"
                    >
                        @if (manual_entry()) {
                            Find my server using my work email
                        } @else {
                            Enter a server address manually
                        }
                    </button>
                </main>
                <footer
                    class="bg-base-200 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
                >
                    <button
                        btn
                        matRipple
                        type="submit"
                        class="flex-1"
                        [disabled]="loading()"
                    >
                        {{ loading() ? 'Looking up...' : 'Connect' }}
                    </button>
                </footer>
            </form>
        </div>
    `,
    imports: [
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
    ],
})
export class NativeDomainOverlayComponent {
    public readonly serverError = input('');
    public readonly domainSet = output<string>();
    public readonly email = signal(getNativeEmail() ?? '');
    public readonly server_address = signal(getNativeDomain() ?? '');
    public readonly api_key = signal(getNativeApiKey() ?? '');
    // Start in manual mode when a server is already known (e.g. pushed via
    // MDM managed config) so the user only has to confirm the settings.
    public readonly manual_entry = signal(!!getNativeDomain());
    public readonly error = signal('');
    public readonly loading = signal(false);

    constructor() {
        effect(() => {
            const msg = this.serverError();
            if (msg) this.error.set(msg);
        });
    }

    public toggleManualEntry() {
        if (this.loading()) return;
        this.manual_entry.update((manual) => !manual);
        this.error.set('');
    }

    public async submit() {
        if (this.loading()) return;
        if (this.manual_entry()) return this.submitManual();
        const raw = this.email().trim();
        if (!raw) {
            this.error.set('A work email is required.');
            return;
        }
        this.loading.set(true);
        this.error.set('');
        try {
            const domain = await lookupNativeDomainByEmail(raw);
            setNativeEmail(raw);
            setNativeDomain(domain);
            setNativeApiKey('');
            this.domainSet.emit(domain);
        } catch {
            this.error.set('Unable to find a server for this email address.');
        } finally {
            this.loading.set(false);
        }
    }

    private submitManual() {
        const domain = normaliseNativeDomain(this.server_address());
        if (!domain) {
            this.error.set('A valid server address is required.');
            return;
        }
        this.error.set('');
        setNativeDomain(domain);
        setNativeApiKey(this.api_key());
        this.domainSet.emit(domain);
    }
}
