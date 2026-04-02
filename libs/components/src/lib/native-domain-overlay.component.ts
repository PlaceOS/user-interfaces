import { Component, effect, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    getNativeEmail,
    lookupNativeDomainByEmail,
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
                        Enter your work email to find your PlaceOS server and
                        connect this app.
                    </p>
                    @if (error()) {
                        <p
                            class="bg-error/10 text-error rounded-sm px-3 py-2 text-xs"
                        >
                            {{ error() }}
                        </p>
                    }
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
    public readonly error = signal('');
    public readonly loading = signal(false);

    constructor() {
        effect(() => {
            const msg = this.serverError();
            if (msg) this.error.set(msg);
        });
    }

    public async submit() {
        if (this.loading()) return;
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
            this.domainSet.emit(domain);
        } catch {
            this.error.set('Unable to find a server for this email address.');
        } finally {
            this.loading.set(false);
        }
    }
}
