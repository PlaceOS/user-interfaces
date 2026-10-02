import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { SignageContextService } from '../signage-context.service';
import { SignageDisplayService } from './signage-display.service';

@Component({
    selector: 'display-header',
    template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.DISPLAYS_TITLE' | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    <div class="text-sm opacity-60">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate
                                    : { count: total_count() }
                                    : total_count()
                        }}
                    </div>
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_create()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="addDisplay()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_DISPLAY' | translate
                    "
                    [matTooltip]="'SIGNAGE_MANAGER.NEW_DISPLAY' | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `,
    imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
        MatTooltipModule,
    ],
})
export class DisplayHeaderComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _router = inject(Router);

    /** Server total, as the list holds only the pages loaded so far */
    public readonly total_count = this._display_service.displays_total;
    public readonly can_create = this._context.can_create;

    public async addDisplay() {
        const display = await this._display_service.addDisplay();
        if (display?.id) await this._router.navigate(['/displays', display.id]);
    }
}
