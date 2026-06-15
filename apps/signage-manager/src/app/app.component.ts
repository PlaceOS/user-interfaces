import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks, UploadsService } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    TranslatePipe,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    template: `
        <a class="skip-link" href="#main-content">{{
            'SIGNAGE_MANAGER.SKIP_TO_CONTENT' | translate
        }}</a>
        <global-banner />
        <main
            id="main-content"
            tabindex="-1"
            class="relative h-1/2 w-full flex-1"
        >
            <router-outlet></router-outlet>
        </main>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        GlobalBannerComponent,
        RouterOutlet,
        GlobalLoadingComponent,
        TranslatePipe,
    ],
})
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);
    private _uploads = inject(UploadsService);

    public async ngOnInit() {
        setMocks(mocksInit);
        await this._placeos.init();

        this._uploads.init();
    }
}
