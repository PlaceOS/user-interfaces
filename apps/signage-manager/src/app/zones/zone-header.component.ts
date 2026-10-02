import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { SignageContextService } from '../signage-context.service';
import { SignageZoneService } from './signage-zone.service';

@Component({
    selector: 'zone-header',
    template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ 'SIGNAGE_MANAGER.ZONES_TITLE' | translate }}
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
            @if (can_manage_zones()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="addZone()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_ZONE' | translate
                    "
                    [matTooltip]="'SIGNAGE_MANAGER.NEW_ZONE' | translate"
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
export class ZoneHeaderComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _zone_service = inject(SignageZoneService);
    private readonly _router = inject(Router);

    public readonly total_count = computed(
        () => this._zone_service.filtered_zones().length,
    );
    public readonly can_manage_zones = this._context.can_manage_zones;

    public async addZone() {
        const zone = await this._zone_service.addZone();
        if (zone?.id) await this._router.navigate(['/zones', zone.id]);
    }
}
