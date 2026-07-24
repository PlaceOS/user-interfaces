import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-unauthorised',
    template: `
        <div unauthorised class="absolute inset-0">
            <div
                class="border-base-300 bg-base-100 text-base-content mx-auto my-4 flex w-104 max-w-[calc(100%-1rem)] flex-col gap-2 rounded-xl border p-4 text-center shadow-lg"
            >
                <h1 class="text-4xl">403</h1>
                <h3>{{ 'COMMON.FORBIDDEN' | translate }}</h3>
                <p class="py-4">
                    {{ 'COMMON.INVALID_PAGE_PERMISSIONS' | translate }}
                </p>
                <p>
                    {{ 'COMMON.CONTACT_ADMIN' | translate }}
                </p>
                <a btn [routerLink]="['/']">Try Again</a>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            [unauthorised] {
                background-image: linear-gradient(
                    to right,
                    #c62828 0%,
                    #ef5350 100%
                );
            }
        `,
    ],
    imports: [TranslatePipe, RouterLink],
})
export class UnauthorisedComponent {}
