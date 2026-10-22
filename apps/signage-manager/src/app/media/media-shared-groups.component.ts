import {
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    input,
    resource,
    signal,
    viewChild,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { IntersectDirective } from '../shared/intersect.directive';
import { SignageContextService } from '../signage-context.service';
import {
    listSignageSharedGroups,
    signage_shared_groups_change,
    SignageSharedGroup,
} from '../signage-shared-groups.util';

/**
 * Groups a media item is shared with, shown in a media list row. The groups
 * load once the row scrolls into view. When the chips do not fit the space
 * left in the row they collapse to a group count, listing the groups on hover.
 */
@Component({
    // Existing signage-manager components use feature selectors without the app prefix.
    selector: 'media-shared-groups',
    template: `
        @if (visible()) {
            <ul
                #list
                class="flex w-max list-none items-center gap-1 p-0"
                [class.invisible]="collapsed()"
                [class.absolute]="collapsed()"
                [attr.aria-hidden]="collapsed() || null"
                [attr.aria-label]="'SIGNAGE_MANAGER.SHARED_WITH' | translate"
            >
                @for (group of shared_groups(); track group.id) {
                    <li
                        class="bg-base-200 text-base-content/80 max-w-32 truncate rounded-full px-2 py-1 text-[0.625rem] font-medium"
                    >
                        {{ group.name }}
                    </li>
                }
            </ul>
            @if (collapsed()) {
                <button
                    type="button"
                    class="bg-base-200 text-base-content/80 flex items-center gap-1 rounded-full px-2 py-1 text-[0.625rem] font-medium"
                    [matTooltip]="group_names()"
                    #tooltip="matTooltip"
                    (click)="tooltip.toggle()"
                    [attr.aria-label]="
                        ('SIGNAGE_MANAGER.SHARED_WITH' | translate) +
                        ': ' +
                        group_names()
                    "
                >
                    <icon class="text-sm">groups</icon>
                    {{ shared_groups().length }}
                </button>
            }
        }
    `,
    host: {
        class: 'relative flex flex-1 justify-end self-stretch items-center overflow-hidden',
        '[class.-ml-3]': '!visible()',
        '[style.max-width.px]': 'max_width()',
        '[style.min-width]': "collapsed() ? 'min-content' : '1px'",
        '(intersect)': 'in_view.set(true)',
    },
    hostDirectives: [{ directive: IntersectDirective, outputs: ['intersect'] }],
    imports: [IconComponent, MatTooltipModule, TranslatePipe],
})
export class MediaSharedGroupsComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _el = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _list = viewChild<ElementRef<HTMLElement>>('list');

    public readonly item_id = input.required<string>();
    /** Set once the row scrolls into view, so off-screen rows load nothing */
    public readonly in_view = signal(false);
    /** Width of the chips when they are not clipped */
    public readonly natural_width = signal(0);
    public readonly collapsed = signal(false);

    private readonly _shared_groups = resource({
        params: () =>
            this.in_view()
                ? {
                      id: this.item_id(),
                      group_id: this._context.api_group_id(),
                      shared_groups_change: signage_shared_groups_change(),
                  }
                : undefined,
        loader: ({ params }) =>
            listSignageSharedGroups('media', params.id, params.group_id),
        defaultValue: [] as SignageSharedGroup[],
    });

    public readonly shared_groups = computed(
        () => this._shared_groups.value() ?? [],
    );

    public readonly group_names = computed(() =>
        this.shared_groups()
            .map(({ name }) => name)
            .join(', '),
    );

    /** Hidden while the item only lives in the group being viewed, as in the preview */
    public readonly visible = computed(() => {
        const groups = this.shared_groups();
        if (!groups.length) return false;
        return (
            groups.length > 1 || groups[0].id !== this._context.api_group_id()
        );
    });

    /** Takes no more of the row than the chips need. Hidden rows keep a 1px
     * sliver so the intersection observer still sees them. */
    public readonly max_width = computed(() =>
        this.visible() ? this.natural_width() : 1,
    );

    constructor() {
        const observer = new ResizeObserver(() => this._measure());
        observer.observe(this._el.nativeElement);
        effect((on_cleanup) => {
            const list = this._list()?.nativeElement;
            if (!list) return;
            observer.observe(list);
            on_cleanup(() => observer.unobserve(list));
        });
        inject(DestroyRef).onDestroy(() => observer.disconnect());
    }

    private _measure() {
        const list = this._list()?.nativeElement;
        if (!list) return;
        const natural_width = Math.ceil(list.getBoundingClientRect().width);
        this.natural_width.set(natural_width);
        this.collapsed.set(natural_width > this._el.nativeElement.clientWidth);
    }
}
