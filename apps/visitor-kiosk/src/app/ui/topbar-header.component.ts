import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from '@user-interfaces/common';

import * as dayjs from 'dayjs';

@Component({
    selector: 'a-topbar-header',
    template: `
        <div class="flex items-center bg-gray-900 shadow">
            <a
                mat-button
                [routerLink]="['/home']"
                class="h-full flex flex-col justify-center bg-black px-4"
            >
                <img class="h-10 my-2" src="assets/logo-dark.svg" />
            </a>
            <div
                class="ml-auto h-full flex flex-col justify-center text-white px-4"
            >
                {{ time }}
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
export class TopbarHeaderComponent extends BaseClass {
    public get time() {
        return dayjs().format('dddd h:mmA');
    }
}
