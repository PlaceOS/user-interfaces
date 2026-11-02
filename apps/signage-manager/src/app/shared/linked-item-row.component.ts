import { Component, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';

/**
 * Row that links to a related display or zone, with an icon, the name and
 * the description.
 */
@Component({
    selector: 'linked-item-row',
    template: `
        <a
            matRipple
            class="border-base-300 bg-base-100 hover:bg-base-200 mb-2 flex items-center gap-3 rounded-lg border px-4 py-3 no-underline transition-colors"
            [routerLink]="link()"
            [attr.aria-label]="open_label() | translate: { name: name() }"
        >
            <icon class="shrink-0 text-xl opacity-60">{{ icon() }}</icon>
            <div class="min-w-0 flex-1">
                <div class="truncate text-sm font-medium">{{ name() }}</div>
                @if (description()) {
                    <div class="text-base-content/70 truncate text-xs">
                        {{ description() }}
                    </div>
                }
            </div>
        </a>
    `,
    host: { class: 'block' },
    imports: [MatRippleModule, RouterLink, IconComponent, TranslatePipe],
})
export class LinkedItemRowComponent {
    /** Router link of the item */
    public readonly link = input.required<readonly string[]>();
    /** Material icon name */
    public readonly icon = input.required<string>();
    public readonly name = input.required<string>();
    public readonly description = input<string | undefined>('');
    /** Translation key of the link's accessible name, given `name` */
    public readonly open_label = input.required<string>();
}
