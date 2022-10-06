import { Component } from '@angular/core';

@Component({
    selector: 'placeos-book-space-flow',
    template: `
        <div class="bg-gray-100 dark:bg-neutral-600 h-full w-full overflow-auto">
            <div class="w-full h-full sm:h-auto max-w-[640px] mx-auto sm:my-4 bg-white shadow border border-gray-200 dark:border-neutral-500 overflow-hidden">
                <invite-visitor-form></invite-visitor-form>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class VisitorFlowComponent {}
