import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-not-found',
    styles: [``],
    template: `<div
        class="z-0 flex h-full flex-1 flex-col overflow-y-auto bg-base-200"
    >
        <section
            class="flex h-full flex-col items-center justify-center border-b border-base-200 py-5"
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
                    <span class="text-gray-700 mr-auto text-3xl font-bold">
                        Page not found</span
                    >
                </div>
            </div>
            <div class="mx-3 flex flex-row">
                <span class="flex flex-row">
                    The page
                    <span class="mx-1 font-bold"> {{ router.url }} </span> was
                    not found.
                </span>
            </div>
        </section>
    </div> `,
    standalone: false,
})
export class NotFoundComponent implements OnInit {
    router = inject(Router);

    ngOnInit(): void {}
}
