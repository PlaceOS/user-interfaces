import { Component, inject, OnInit, signal } from '@angular/core';
import {
    current_user,
    currentUser,
    SettingsService,
    setupPlace,
} from '@placeos/common';
import { authority, queryApplications, setAPI_Key } from '@placeos/ts-client';
import { first, lastValueFrom } from 'rxjs';

import {
    appInitial,
    type ApplicationRestriction,
    buildLauncherApplications,
    type LauncherApplication,
} from './application-loader.util';

@Component({
    selector: 'app-root',
    template: `
        <main class="bg-base-200 flex min-h-full justify-center p-4 sm:p-6">
            <section
                class="border-base-300 bg-base-100 w-full max-w-210 rounded-xl border p-5 shadow-lg sm:p-6"
            >
                @if (loading()) {
                    <div
                        class="border-base-300 bg-base-200 text-base-content grid min-h-72 place-items-center gap-4 rounded-xl border border-dashed p-8 text-center"
                        aria-live="polite"
                    >
                        <div
                            class="border-base-300 border-t-primary h-10 w-10 animate-spin rounded-full border-[3px]"
                            aria-hidden="true"
                        ></div>
                        <p>Loading applications...</p>
                    </div>
                } @else if (error()) {
                    <div
                        class="border-base-300 bg-base-200 text-base-content grid min-h-72 place-items-center gap-4 rounded-xl border border-dashed p-8 text-center"
                        aria-live="polite"
                    >
                        <p>{{ error() }}</p>
                    </div>
                } @else if (!applications().length) {
                    <div
                        class="border-base-300 bg-base-200 text-base-content grid min-h-72 place-items-center gap-4 rounded-xl border border-dashed p-8 text-center"
                        aria-live="polite"
                    >
                        <p>No applications configured for this domain.</p>
                    </div>
                } @else {
                    <div class="app-grid">
                        @for (app of applications(); track app.id) {
                            <a
                                class="border-base-300 bg-base-200 text-base-content hover:border-primary focus-visible:border-primary flex flex-col items-center gap-3 rounded-xl border p-4 text-center no-underline transition hover:-translate-y-0.5 hover:shadow-md focus-visible:shadow-md focus-visible:outline-none"
                                [href]="uri(app.redirect_uri)"
                            >
                                <div
                                    class="bg-base-300 text-base-content flex h-15 w-15 items-center justify-center overflow-hidden rounded-2xl text-xl font-bold uppercase"
                                    aria-hidden="true"
                                >
                                    @if (currentIcon(app)) {
                                        <img
                                            class="h-full w-full object-contain p-1.5"
                                            [src]="currentIcon(app)"
                                            [alt]="app.name"
                                            (error)="loadNextIcon(app)"
                                        />
                                    } @else {
                                        <span>{{ appInitial(app.name) }}</span>
                                    }
                                </div>
                                <div class="app-name">{{ app.name }}</div>
                            </a>
                        }
                    </div>
                }
            </section>
        </main>
    `,
    styles: [
        `
            :host {
                display: block;
                min-height: 100%;
            }

            .app-grid {
                display: grid;
                gap: 0.75rem;
                grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
            }

            .app-name {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.35;
                text-align: center;
                word-break: break-word;
            }
        `,
    ],
    providers: [SettingsService],
})
export class AppComponent implements OnInit {
    private _settings = inject(SettingsService);

    public readonly loading = signal(true);
    public readonly error = signal('');
    public readonly applications = signal<LauncherApplication[]>([]);

    public readonly appInitial = appInitial;

    public async ngOnInit() {
        const params = new URLSearchParams(location.search);
        const api_key = params.get('x-api-key');
        if (api_key) setAPI_Key(api_key);
        try {
            await lastValueFrom(
                this._settings.initialised.pipe(first((_) => _)),
            );
            const settings = { ...(this._settings.get('composer') || {}) };
            settings.mock =
                !!this._settings.get('mock') ||
                location.origin.includes('demo.place.tech');
            await setupPlace(settings);
            await lastValueFrom(current_user.pipe(first((_) => !!_)));

            const active_authority = authority();
            if (!active_authority?.id) return;

            const response = await queryApplications({
                authority_id: active_authority.id,
            } as Record<string, unknown>);
            const restrictions = (this._settings.get(
                'app.application_restrictions',
            ) || []) as ApplicationRestriction[];
            const user_groups = currentUser()?.groups || [];
            this.applications.set(
                buildLauncherApplications(response?.data || [], {
                    current_uri: location.href,
                    restrictions,
                    user_groups,
                }),
            );
        } catch (error) {
            console.error(error);
            this.error.set('Unable to load applications right now.');
        } finally {
            this.loading.set(false);
        }
    }

    public currentIcon(item: LauncherApplication) {
        return item.icon_urls[item.icon_index] || '';
    }

    public uri(uri: string) {
        return uri.replace('oauth-resp.html', '');
    }

    public loadNextIcon(item: LauncherApplication) {
        this.applications.update((applications) =>
            applications.map((app) =>
                app.id === item.id
                    ? {
                          ...app,
                          icon_index: Math.min(
                              app.icon_index + 1,
                              app.icon_urls.length,
                          ),
                      }
                    : app,
            ),
        );
    }
}
