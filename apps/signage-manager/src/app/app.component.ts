import {
    afterNextRender,
    Component,
    effect,
    ElementRef,
    inject,
    Injector,
    OnInit,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import {
    ActivatedRouteSnapshot,
    NavigationEnd,
    Router,
    RouterOutlet,
} from '@angular/router';
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

import { CommandPaletteService } from './shared/command-palette.service';
import { blockMissedFileDrop } from './shared/file-drop.directive';
import { NavFooterComponent } from './shared/nav-footer.component';
import { NavSidebarComponent } from './shared/nav-sidebar.component';
import { SignageContextService } from './signage-context.service';

@Component({
    selector: 'app-root',
    template: `
        <a
            class="skip-link"
            href="#main-content"
            (click)="skipToContent($event)"
            >{{ 'SIGNAGE_MANAGER.SKIP_TO_CONTENT' | translate }}</a
        >
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
        <div class="flex h-1/2 w-full flex-1 flex-col sm:flex-row">
            @if (show_nav()) {
                <nav-sidebar class="sm:h-full" />
            }
            <main
                #main
                id="main-content"
                tabindex="-1"
                class="relative min-h-0 min-w-0 flex-1"
            >
                <router-outlet></router-outlet>
            </main>
            @if (show_nav()) {
                <nav-footer />
            }
        </div>
        <global-loading />
        @defer (on idle) {
            <settings-debug-panel-launcher
                [loadSchema]="load_settings_schema"
            />
        }
    `,
    host: {
        '(document:keydown)': 'onKeydown($event)',
        '(window:dragover)': 'blockMissedFileDrop($event)',
        '(window:drop)': 'blockMissedFileDrop($event)',
    },
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
        NavFooterComponent,
        NavSidebarComponent,
        SettingsDebugPanelLauncherComponent,
        TranslatePipe,
    ],
})
export class AppComponent implements OnInit {
    public readonly load_settings_schema = () =>
        import('../environments/settings.schema.json');

    private _placeos = inject(PlaceOS_Service);
    private _uploads = inject(UploadsService);
    private _injector = inject(Injector);
    private _palette = inject(CommandPaletteService);
    private _context = inject(SignageContextService);
    private _router = inject(Router);

    /** Whether the signage groups failed to load. Shows a banner with retry. */
    public readonly groups_failed = this._context.signage_groups_failed;
    /** Whether the current route shows the nav. Routes turn it off with `data: { nav: false }`. */
    public readonly show_nav = signal(false);
    private readonly _main =
        viewChild.required<ElementRef<HTMLElement>>('main');

    constructor() {
        let first_navigation = true;
        this._router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
            if (!(event instanceof NavigationEnd)) return;
            this.show_nav.set(showsNav(this._router.routerState.snapshot.root));
            // Keep the skip link as the first tab stop on page load
            if (first_navigation) {
                first_navigation = false;
                return;
            }
            afterNextRender(() => this._recoverFocus(), {
                injector: this._injector,
            });
        });

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

    /**
     * Move focus to the main content. The app uses hash routes, so the skip
     * link's own `#main-content` would navigate instead of moving focus.
     */
    public skipToContent(event: Event) {
        event.preventDefault();
        this._main().nativeElement.focus();
    }

    /**
     * A navigation can remove the focused element, for example a list row of
     * the page that closed. Move focus to the main content so that keyboard
     * and screen reader users do not start again from the top of the page.
     */
    private _recoverFocus() {
        const active = document.activeElement;
        if (active && active !== document.body) return;
        this._main().nativeElement.focus({ preventScroll: true });
    }

    /** Stop a file dropped outside a drop target from leaving the app */
    public readonly blockMissedFileDrop = blockMissedFileDrop;

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
        // the entry points can hide themselves on a domain without a provider.
        // Loaded on demand to keep the service out of the initial bundle.
        const { ImageGenService } =
            await import('./image-gen/image-gen.service');
        const image_gen = this._injector.get(ImageGenService);
        await image_gen.load(authority()?.config?.org_zone);
        if (image_gen.enabled()) await image_gen.loadRecent();
    }
}

/** Whether no route in the active branch turns the nav off */
function showsNav(route: ActivatedRouteSnapshot | null): boolean {
    for (let depth = 0; route && depth < 32; depth++) {
        if (route.data['nav'] === false) return false;
        route = route.firstChild;
    }
    return true;
}
