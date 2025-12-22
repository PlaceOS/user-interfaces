import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-not-found',
    template: `
        <div
            class="bg-base-200 z-0 flex h-full flex-1 flex-col overflow-y-auto"
        >
            <section
                class="border-base-200 flex h-full flex-col items-center justify-center border-b py-5"
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
                        <span class="mr-auto text-3xl font-bold text-gray-700"
                            >Page not found</span
                        >
                    </div>
                </div>
                <div class="mx-3 flex flex-row">
                    <span class="flex flex-row">
                        The page
                        <span class="mx-1 font-bold"> {{ router.url }} </span>
                        was not found.
                    </span>
                </div>
            </section>
        </div>
    `,
    styles: [``],
    imports: [],
})
export class NotFoundComponent {
    private _router = inject(Router);

    public get router(): Router {
        return this._router;
    }
}
