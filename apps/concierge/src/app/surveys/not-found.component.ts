import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-not-found',
    styles: [``],
    template: `<div
        class="z-0 mx-auto my-8 flex h-[24rem] w-[32rem] flex-col items-center justify-center space-y-4 rounded-xl border border-base-300 shadow"
    >
        <div class="mx-3 flex flex-row">
            <img
                src="assets/icons/not-found.svg"
                alt="graphic of magnifying glass"
                class="w-48"
            />
        </div>
        <div class="text-3xl font-bold">Page not found</div>
        <div>
            The page
            <span class="font-mono font-bold">
                {{ router.url }}
            </span>
            was not found.
        </div>
    </div> `,
    standalone: false,
})
export class NotFoundComponent {
    constructor(public router: Router) {}
}
