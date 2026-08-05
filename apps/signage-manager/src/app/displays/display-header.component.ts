import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@placeos/components';
import { GroupBreadcrumbsComponent } from '../shared/group-breadcrumbs.component';
import { SignageService } from '../signage.service';

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
        </div>
    `,
    imports: [TranslatePipe, GroupBreadcrumbsComponent],
})
export class DisplayHeaderComponent {
    private readonly _service = inject(SignageService);

    public readonly total_count = computed(
        () => this._service.filtered_displays().length,
    );
}
