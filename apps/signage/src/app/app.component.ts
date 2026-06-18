import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
    OrganisationService,
    PlaceOS_Service,
    setMocks,
} from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, GlobalBannerComponent, GlobalLoadingComponent],
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        <global-loading />
        <!-- <debug-console *ngIf="debug"></debug-console> -->
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
})
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);
    private _org = inject(OrganisationService);

    public ngOnInit(): void {
        setMocks(mocksInit);
        this._placeos.init();
    }
}
