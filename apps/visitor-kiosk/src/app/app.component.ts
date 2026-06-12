import { Component, computed, inject, OnInit } from '@angular/core';
import { PlaceOS_Service, setMocks, settingSignal } from '@placeos/common';
import { VirtualKeyboardComponent } from '@placeos/components';
import { mocksInit } from '@placeos/mocks';
import { parseTokenFromUrl } from './checkin/token-from-url';

@Component({
    selector: 'app-root',
    template: `
        <global-banner />
        <div content class="relative h-1/2 w-full flex-1 overflow-hidden">
            <router-outlet></router-outlet>
        </div>
        @if (has_chat()) {
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
                overflow: hidden;
            }

            [content] > * {
                overflow: hidden;
            }
        `,
    ],
    standalone: false,
})
export class AppComponent implements OnInit {
    private _placeos = inject(PlaceOS_Service);
    private _has_chat = settingSignal<boolean>('chat.enabled', false);

    public readonly has_chat = computed(() => !!this._has_chat());

    public ngOnInit(): void {
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        const on_public = window.location.href.includes('public=true');
        if (on_public) {
            const url_token = parseTokenFromUrl(window.location.href);
            if (url_token) this._placeos.setInitialToken(url_token);
        }

        setMocks(mocksInit);
        this._placeos.init();
    }
}
