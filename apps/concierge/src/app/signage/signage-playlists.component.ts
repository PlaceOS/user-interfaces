import { Component } from '@angular/core';

import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-playlists',
    template: ``,
    styles: [``],
})
export class SignagePlaylistsComponent {
    public readonly loading = this._state.loading;

    constructor(private _state: SignageStateService) {}
}
