import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { SignageService } from '../signage.service';

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
                    btn
                    type="button"
                    matRipple
                    class="bg-secondary text-secondary-content h-12 shrink-0 rounded-lg px-4"
                    (click)="addZone()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CREATE_NEW_ZONE' | translate
                    "
                >
                    <icon class="mr-2 text-2xl">add</icon>
                    <div>{{ 'SIGNAGE_MANAGER.NEW_ZONE' | translate }}</div>
                </button>
            }
        </div>
    `,
    imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
    ],
})
export class ZoneHeaderComponent {
    private readonly _service = inject(SignageService);
    private readonly _router = inject(Router);

    public readonly total_count = computed(
        () => this._service.filtered_zones().length,
    );
    public readonly can_manage_zones = this._service.can_manage_zones;

    public async addZone() {
        const zone = await this._service.addZone();
        if (zone?.id) await this._router.navigate(['/zones', zone.id]);
    }
}
