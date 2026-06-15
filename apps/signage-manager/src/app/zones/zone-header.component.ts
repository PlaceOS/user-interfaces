import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
} from '@angular/core';
import { TranslatePipe } from '@placeos/components';
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
                <div class="text-sm opacity-60">
                    {{
                        'COMMON.ITEM_COUNT'
                            | translate
                                : { count: total_count() }
                                : total_count()
                    }}
                </div>
            </div>
            <div class="w-px flex-1"></div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslatePipe],
})
export class ZoneHeaderComponent {
    private readonly _service = inject(SignageService);

    public readonly total_count = computed(
        () => this._service.filtered_zones().length,
    );
}
