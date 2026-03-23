import { Component, effect, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { getNativeDomain, setNativeDomain } from '@placeos/common';

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
                        Enter the domain of your PlaceOS server to connect this
                        app.
                    </p>
                    @if (error()) {
                        <p
                            class="bg-error/10 text-error rounded-sm px-3 py-2 text-xs"
                        >
                            {{ error() }}
                        </p>
                    }
                    <div class="flex w-full flex-col">
                        <label for="domain">Server Domain</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <icon matPrefix>dns</icon>
                            <input
                                matInput
                                name="domain"
                                [(ngModel)]="domain"
                                placeholder="e.g. my-org.placeos.run"
                                autocapitalize="off"
                                autocomplete="url"
                                spellcheck="false"
                                required
                            />
                        </mat-form-field>
                    </div>
                </main>
                <footer
                    class="bg-base-200 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
                >
                    <button btn matRipple type="submit" class="flex-1">
                        Connect
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
    public readonly domain = signal(getNativeDomain() ?? '');
    public readonly error = signal('');

    constructor() {
        effect(() => {
            const msg = this.serverError();
            if (msg) this.error.set(msg);
        });
    }

    public submit() {
        const raw = this.domain().trim();
        if (!raw) {
            this.error.set('A server domain is required.');
            return;
        }
        const domain = raw.replace(/^https?:\/\//, '').replace(/\/+$/, '');
        setNativeDomain(domain);
        this.domainSet.emit(domain);
    }
}
