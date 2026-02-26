import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { NAV_ITEMS } from './nav-items';

@Component({
    selector: 'nav-footer',
    template: `
        <div
            class="bg-secondary text-secondary-content border-base-100 border-t px-2 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.18)] sm:hidden"
        >
            <div
                class="mx-auto flex max-w-screen-sm items-center justify-around gap-1"
            >
                @for (item of nav_items; track item.route) {
                    <a
                        class="hover:bg-base-100/30 relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-1 text-xs"
                        [routerLink]="item.route"
                        routerLinkActive="active bg-primary/30"
                    >
                        <icon class="text-2xl">{{ item.icon }}</icon>
                        <div class="truncate font-medium">{{ item.label }}</div>
                        <div
                            active
                            class="bg-base-100 absolute inset-x-2 -top-2 left-1 h-1 rounded-b"
                        ></div>
                    </a>
                }
            </div>
        </div>
    `,
    styles: [
        `
            a [active] {
                transition: opacity 300ms;
            }

            a:not(.active) [active] {
                opacity: 0;
            }

            a.active [active] {
                opacity: 1;
            }
        `,
    ],
    imports: [RouterModule, IconComponent],
})
export class NavFooterComponent {
    public readonly nav_items = NAV_ITEMS;
}
