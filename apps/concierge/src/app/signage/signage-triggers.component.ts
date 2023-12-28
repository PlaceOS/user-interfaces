import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-triggers',
    template: ``,
    styles: [``],
})
export class SignageTriggersComponent {
    public readonly loading = this._state.loading;

    constructor(private _state: SignageStateService) {}
}
