import { Component } from '@angular/core';

@Component({
    selector: 'app-unauthorised',
    template: `
        <div
            class="unauthorised rounded m-4 text-center bg-white text-black border border-gray-400 p-4 shadow"
        >
            <h1 class="text-4xl">403</h1>
            <h3 class="text-2xl" i18n="@@forbiddenLabel">Access forbidden.</h3>
            <p class="py-4" i18n="@@invalidPermissionLabel">
                You do not have permission to view this page and your access
                attempt has been recorded.
            </p>
            <p i18n="@@contactAdminLabel">
                Contact your Administrator if you feel that you should have
                access.
            </p>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .unauthorised {
                width: 28em;
                max-width: calc(100vw - 1rem);
            }

            @media (prefers-color-scheme: dark) {
                .unauthorised {
                    background-color: #262626;
                    color: #fff;
                }
            }
        `,
    ],
})
export class UnauthorisedComponent {}
