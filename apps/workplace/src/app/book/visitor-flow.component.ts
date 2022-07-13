import { Component } from '@angular/core';

@Component({
    selector: 'placeos-book-space-flow',
    template: `
        <div class="bg-gray-100 h-full w-full overflow-auto">
            <div class="w-full h-full sm:h-auto max-w-[640px] mx-auto sm:my-4 bg-white rounded shadow border border-gray-200">
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
