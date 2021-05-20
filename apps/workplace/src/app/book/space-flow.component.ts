import { Component } from '@angular/core';
import { EventStateService } from '@placeos/events';

@Component({
    selector: 'placeos-book-space-flow',
    template: `
        <div class="bg-white h-full w-full">
            <space-flow-form></space-flow-form>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class BookSpaceFlowComponent {
    constructor(private _state: EventStateService) {}

    public ngOnInit() {
        this._state.loadForm();
        if (!this._state.form) this._state.newForm();
    }
}
