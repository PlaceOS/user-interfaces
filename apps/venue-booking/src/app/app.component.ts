import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlaceOS_Service, setMocks } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    template: `
        <global-banner />
        <div class="bg-base-100 relative h-1/2 w-full flex-1">
            <router-outlet />
        </div>
        <global-loading />
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [GlobalBannerComponent, GlobalLoadingComponent, RouterModule],
})
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);

    public ngOnInit(): void {
        setMocks(mocksInit);
        this._placeos.init();
    }
}
