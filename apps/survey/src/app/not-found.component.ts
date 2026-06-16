import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthenticatedImageDirective } from '@placeos/components';

@Component({
    selector: 'app-not-found',
    template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center p-4"
        >
            <div
                class="border-base-300 bg-base-100 flex w-lg max-w-full flex-col items-center justify-center space-y-8 rounded-xl border p-8 text-center shadow-sm"
            >
                <h1 class="text-4xl font-bold">Survey not found</h1>
                <img
                    auth
                    source="assets/icons/not-found.svg"
                    class="w-56"
                    alt="404 Not Found"
                />
                <p class="text-xl">Unable to find the requested survey</p>
            </div>
        </div>
    `,
    styles: [''],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [AuthenticatedImageDirective],
})
export class NotFoundComponent {}
