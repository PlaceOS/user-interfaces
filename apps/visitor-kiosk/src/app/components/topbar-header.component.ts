import { Component } from '@angular/core';
import { format, startOfMinute } from 'date-fns';

@Component({
    selector: 'a-topbar-header',
    template: `
        <div class="flex items-center justify-between bg-gray-800 shadow">
            <a
                matRipple
                [routerLink]="['/']"
                class="h-full flex flex-col justify-center px-4"
            >
                <img class="h-10 my-2" src="assets/logo-dark.svg" />
            </a>
            <div
                class="ml-auto h-full flex flex-col justify-center text-white px-4"
            >
                {{ time | date: 'fullDate' }}
            </div>
        </div>
    `,
    styles: [
        `
            :host > div {
                height: 3.5rem;
            }

            a {
                border-radius: 0;
            }

            img {
                max-height: 2.5rem;
                max-width: 50vw;
            }
        `,
    ],
})
export class TopbarHeaderComponent {
    public date: number;

    public get time() {
        return startOfMinute(Date.now());
    }
}
