import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-book-space-flow',
    template: `
        <div class="h-full w-full overflow-auto bg-base-200">
            <div
                class="mx-auto h-full w-full max-w-[48rem] overflow-hidden border border-base-200 bg-base-100 shadow sm:my-4 sm:h-auto"
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
    standalone: false,
})
export class VisitorFlowComponent {
    private _router = inject(Router);

    public onDone() {
        this._router.navigate(['/']);
    }
}
