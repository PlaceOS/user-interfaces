import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-zones',
    template: ``,
    styles: [``],
})
export class SignageZonesComponent {
    public readonly loading = this._state.loading;

    constructor(private _state: SignageStateService) {}
}
