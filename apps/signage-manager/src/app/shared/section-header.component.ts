import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { GroupBreadcrumbsComponent } from './group-breadcrumbs.component';

/**
 * Sticky header of a list page. Shows the page title, the item count, the
 * group breadcrumbs and an icon button that emits `add`. Projected content
 * shows before the add button.
 */
@Component({
    selector: 'section-header',
    template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ heading() | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    @let total = count();
                    @if (total !== null) {
                        <div class="text-sm opacity-60">
                            {{
                                'COMMON.ITEM_COUNT'
                                    | translate: { count: total } : total
                            }}
                        </div>
                    }
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            <ng-content />
            @if (can_add()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="add.emit()"
                    [attr.aria-label]="add_label() | translate"
                    [matTooltip]="add_tooltip() | translate"
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
export class SectionHeaderComponent {
    /** Translation key of the page title. Not `title`, which would also set the native tooltip. */
    public readonly heading = input.required<string>();
    /** Number of items, or null to hide the count while it is not known */
    public readonly count = input.required<number | null>();
    public readonly can_add = input(false);
    /** Translation key of the add button's accessible name */
    public readonly add_label = input.required<string>();
    /** Translation key of the add button's tooltip */
    public readonly add_tooltip = input.required<string>();

    public readonly add = output();
}
