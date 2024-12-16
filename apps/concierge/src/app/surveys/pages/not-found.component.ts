import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-not-found',
    styles: [``],
    template: `<div
        class="flex flex-col items-center justify-center z-0 border border-base-300 shadow w-[32rem] h-[24rem] rounded-xl my-8 mx-auto space-y-4"
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
            <span class="font-bold font-mono">
                {{ router.url }}
            </span>
            was not found.
        </div>
    </div> `,
})
export class NotFoundComponent {
    constructor(public router: Router) {}
}
