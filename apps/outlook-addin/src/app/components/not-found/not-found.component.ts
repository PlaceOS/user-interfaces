import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-not-found',
    styles: [``],
    template: `<div
        class="flex flex-1 flex-col z-0 bg-base-200 h-full overflow-y-auto"
    >
        <section
            class="flex flex-col border-b border-base-200 py-5 h-full items-center justify-center"
        >
            <div class="mx-3 flex flex-row">
                <img
                    src="assets/not-found.svg"
                    alt="graphic of magnifying glass"
                    width="200px"
                    class="items-center"
                />
            </div>
            <div class="mx-3 flex flex-row">
                <div class="mb-3">
                    <span class="text-3xl font-bold mr-auto text-gray-700">
                        Page not found</span
                    >
                </div>
            </div>
            <div class="mx-3 flex flex-row">
                <span class="flex flex-row">
                    The page
                    <span class="font-bold mx-1"> {{ router.url }} </span> was
                    not found.
                </span>
            </div>
        </section>
    </div> `,
})
export class NotFoundComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit(): void {}
}
