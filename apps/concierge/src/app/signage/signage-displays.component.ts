import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-displays',
    template: ``,
    styles: [``],
})
export class SignageDisplaysComponent {
    public readonly loading = this._state.loading;

    constructor(private _state: SignageStateService) {}
}
