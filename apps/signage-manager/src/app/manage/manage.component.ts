import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@placeos/components';
import { AiImageService } from '../ai/ai-image.service';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';

/**
 * Manage section. Shows the content report and branding as tabs, each on
 * its own child route.
 */
@Component({
    selector: 'manage-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="bg-base-100 flex min-h-0 min-w-0 flex-1 flex-col">
                <nav
                    class="border-base-300 flex shrink-0 gap-2 border-b px-4"
                    [attr.aria-label]="'SIGNAGE_MANAGER.NAV_MANAGE' | translate"
                >
                    @for (tab of tabs(); track tab.route) {
                        <a
                            class="aria-[current=page]:border-primary aria-[current=page]:text-primary -mb-px border-b-2 border-transparent px-4 py-3 text-sm font-medium opacity-60 aria-[current=page]:opacity-100"
                            routerLinkActive
                            ariaCurrentWhenActive="page"
                            queryParamsHandling="merge"
                            [routerLink]="tab.route"
                        >
                            {{ tab.label | translate }}
                        </a>
                    }
                </nav>
                <div class="relative min-h-0 flex-1">
                    <router-outlet />
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        TranslatePipe,
        NavFooterComponent,
        NavSidebarComponent,
    ],
})
export class ManageSectionComponent {
    private readonly _ai = inject(AiImageService);

    /** Branding needs image generation, so its tab hides without it */
    public readonly tabs = computed(() => [
        { route: '/manage/report', label: 'SIGNAGE_MANAGER.NAV_REPORT' },
        ...(this._ai.enabled()
            ? [
                  {
                      route: '/manage/branding',
                      label: 'SIGNAGE_MANAGER.NAV_BRANDING',
                  },
              ]
            : []),
    ]);
}
