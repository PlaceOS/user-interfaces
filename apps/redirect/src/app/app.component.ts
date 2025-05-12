import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { authority, setAPI_Key } from '@placeos/ts-client';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { first, lastValueFrom } from 'rxjs';

import { setupPlace } from 'libs/common/src/lib/placeos';
import { current_user, currentUser } from 'libs/common/src/lib/user-state';

@Component({
    imports: [RouterModule],
    selector: 'app-root',
    template: `
        <article>
            <div id="redirect-message">
                <p>Redirecting</p>
            </div>
        </article>
    `,
    styles: [
        `
            article {
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 1em;
                border: 1px solid #ccc;
                border-radius: 4px;
                overflow: hidden;
                width: 24em;
                background-color: #fff;
            }

            p {
                margin: 4rem;
                font-family: Arial, sans-serif;
            }

            p:after {
                display: inline-block;
                content: '';
                vertical-align: bottom;
                width: 1.5rem;
                text-align: left;
                animation: ellipsis-animation 1.4s steps(4, end) infinite;
            }

            @keyframes ellipsis-animation {
                0% {
                    content: '';
                }
                25% {
                    content: '.';
                }
                50% {
                    content: '..';
                }
                75% {
                    content: '...';
                }
                100% {
                    content: '';
                }
            }

            @media (prefers-color-scheme: dark) {
                article {
                    background-color: #424242;
                    border-color: #888;
                }

                input {
                    border-color: #666;
                    color: #fff;
                }
            }
        `,
    ],
    providers: [SettingsService],
})
export class AppComponent implements OnInit {
    private _continue = '';
    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute,
    ) {}

    public async ngOnInit() {
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('continue')) {
                this._continue = params.get('continue') || '';
                // Only allow paths
                if (!this._continue.startsWith('/')) this._continue = '';
            }
            if (params.has('x-api-key')) {
                setAPI_Key(params.get('x-api-key') || '');
            }
        });
        await lastValueFrom(this._settings.initialised.pipe(first((_) => _)));
        const settings = this._settings.get('composer') || {};
        settings.mock =
            !!this._settings.get('mock') ||
            location.origin.includes('demo.place.tech');
        await setupPlace(settings).catch((_) => console.error(_));
        await lastValueFrom(current_user.pipe(first((_) => !!_)));
        this._checkForDomainRedirects();
    }

    private _checkForDomainRedirects() {
        const autho = authority();
        if (!autho) return;
        const user = currentUser();
        const mappings = autho.config['redirect_mappings'] || {};
        const user_domain = user.email.split('@')[1];
        const redirect_domain = mappings[user_domain] || location.host;
        const url = `${location.protocol}//${redirect_domain}${this._continue}`;
        // Redirect user
        console.log('Redirect:', url);
        location.href = url;
    }
}
