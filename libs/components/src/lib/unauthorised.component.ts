import { Component } from '@angular/core';

@Component({
    selector: 'app-unauthorised',
    template: `
        <div
            class="unauthorised rounded m-4 text-center bg-base-100 text-black border border-base-200 p-4 shadow"
        >
            <h1 class="text-4xl">403</h1>
            <h3>{{ 'COMMON.FORBIDDEN' | translate }}</h3>
            <p class="py-4">
                {{ 'COMMON.INVALID_PAGE_PERMISSIONS' | translate }}
            </p>
            <p>
                {{ 'COMMON.CONTACT_ADMIN' | translate }}
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
    standalone: false
})
export class UnauthorisedComponent {}
