import { Component } from '@angular/core';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-misconfigured',
    template: `
        <div
            content
            class="border-base-200 bg-base-100 m-4 rounded-sm border p-4 text-center text-black shadow-sm"
        >
            <h3 class="text-2xl">
                {{ 'COMMON.MISCONFIGURED_TITLE' | translate }}
            </h3>
            <p class="py-4">
                {{ 'COMMON.MISCONFIGURED_MSG' | translate }}
            </p>
            <p>{{ 'COMMON.MISCONFIGURED_CONTACT' | translate }}</p>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            [content] {
                width: 28em;
                max-width: calc(100vw - 1rem);
            }

            @media (prefers-color-scheme: dark) {
                [content] {
                    background-color: #262626;
                    color: #fff;
                }
            }
        `,
    ],
    imports: [TranslatePipe],
})
export class MisconfiguredComponent {}
