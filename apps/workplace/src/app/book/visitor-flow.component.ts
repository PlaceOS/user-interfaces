import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-book-space-flow',
    template: `
        <div class="bg-base-200 h-full w-full overflow-auto">
            <div
                class="w-full h-full sm:h-auto max-w-[48rem] mx-auto sm:my-4 bg-base-100 shadow border border-base-200 overflow-hidden"
            >
                <invite-visitor-form (done)="onDone()"></invite-visitor-form>
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
export class VisitorFlowComponent {
    constructor(private _router: Router) {}

    public onDone() {
        this._router.navigate(['/']);
    }
}
