import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks } from '@placeos/common';
import {
    ChatComponent,
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { mocksInit } from '@placeos/mocks';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        ChatComponent,
        GlobalBannerComponent,
        GlobalLoadingComponent,
    ],
    template: `
        <global-banner />
        <div class="relative h-1/2 w-full flex-1">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat) {
            <global-chat />
        }
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
})
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);

    public get has_chat(): boolean {
        return this._placeos.has_chat;
    }

    public ngOnInit(): void {
        setMocks(mocksInit);
        this._placeos.init({ allow_mdm_restart: true });
    }
}
