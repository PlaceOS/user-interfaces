import { Component, effect, inject, OnInit, untracked } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterOutlet } from '@angular/router';
import { PlaceOS_Service, setMocks, UploadsService } from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { SettingsDebugPanelLauncherComponent } from '@placeos/components/settings-debug';
import { mocksInit } from '@placeos/mocks';
import { authority } from '@placeos/ts-client';

import { AiImageService } from './ai/ai-image.service';
import { CommandPaletteService } from './shared/command-palette.service';
import { SignageContextService } from './signage-context.service';

@Component({
    selector: 'app-root',
    template: `
        <a class="skip-link" href="#main-content">{{
            'SIGNAGE_MANAGER.SKIP_TO_CONTENT' | translate
        }}</a>
        <global-banner />
        @if (groups_failed()) {
            <div
                role="alert"
                class="bg-error/10 border-error/30 flex items-center gap-3 border-b px-4 py-2 text-sm"
            >
                <icon class="text-error text-xl">error</icon>
                <p class="min-w-0 flex-1">
                    {{ 'SIGNAGE_MANAGER.GROUPS_LOAD_ERROR' | translate }}
                </p>
                <button
                    btn
                    matRipple
                    type="button"
                    class="inverse"
                    (click)="retryGroups()"
                >
                    {{ 'COMMON.RETRY' | translate }}
                </button>
            </div>
        }
        <main
            id="main-content"
            tabindex="-1"
            class="relative h-1/2 w-full flex-1"
        >
            <router-outlet></router-outlet>
        </main>
        <global-loading />
        <settings-debug-panel-launcher [loadSchema]="load_settings_schema" />
    `,
    host: { '(document:keydown)': 'onKeydown($event)' },
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
    imports: [
        GlobalBannerComponent,
        MatRippleModule,
        IconComponent,
        RouterOutlet,
        GlobalLoadingComponent,
        SettingsDebugPanelLauncherComponent,
        TranslatePipe,
    ],
})
export class AppComponent implements OnInit {
    public readonly load_settings_schema = () =>
        import('../environments/settings.schema.json');

    private _placeos = inject(PlaceOS_Service);
    private _uploads = inject(UploadsService);
    private _ai = inject(AiImageService);
    private _palette = inject(CommandPaletteService);
    private _context = inject(SignageContextService);
    private _router = inject(Router);

    /** Whether the signage groups failed to load. Shows a banner with retry. */
    public readonly groups_failed = this._context.signage_groups_failed;

    constructor() {
        // The templates guard only runs on navigation. Leave the section when
        // the selected group turns templates off while it is open.
        effect(() => {
            if (!this._context.features_ready()) return;
            if (
                this._context.templates_enabled() &&
                !this._context.signage_groups_failed()
            ) {
                return;
            }
            untracked(() => {
                if (/^\/templates(\/|\?|#|$)/.test(this._router.url)) {
                    void this._router.navigate(['/media']);
                }
            });
        });
    }

    public retryGroups() {
        this._context.reloadSignageGroups();
    }

    /** Open the command palette on Cmd+K or Ctrl+K, even from a text field */
    public onKeydown(event: KeyboardEvent) {
        if (!(event.metaKey || event.ctrlKey)) return;
        if (event.altKey || event.shiftKey || event.key.toLowerCase() !== 'k') {
            return;
        }
        event.preventDefault();
        void this._palette.toggle();
    }

    public async ngOnInit() {
        setMocks(mocksInit);
        await this._placeos.init();
        this._uploads.init();

        // asks the backend once whether image generation is available here, so
        // the entry points can hide themselves on a domain without a provider
        await this._ai.load(authority()?.config?.org_zone);
        if (this._ai.enabled()) await this._ai.loadRecent();
    }
}
