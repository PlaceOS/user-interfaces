import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { NAV_ITEMS } from './nav-items';

@Component({
    selector: 'nav-sidebar',
    template: `
        <nav
            aria-label="Primary navigation"
            class="bg-secondary text-secondary-content border-base-100 relative z-30 hidden h-full border-r p-2 shadow-lg sm:block"
        >
            <div
                logo
                class="bg-base-300/30 mx-auto flex h-20 w-20 items-center justify-center rounded-xl"
            >
                <div class="opacity-20">LOGO</div>
            </div>
            <div class="flex flex-col gap-4 p-2">
                @for (item of nav_items; track item.route) {
                    <a
                        #route_active="routerLinkActive"
                        class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                        [routerLink]="item.route"
                        routerLinkActive="active bg-primary/30"
                        [attr.aria-label]="item.label"
                        [attr.aria-current]="
                            route_active.isActive ? 'page' : null
                        "
                    >
                        <icon class="text-3xl">{{ item.icon }}</icon>
                        <div class="text-sm font-medium">{{ item.label }}</div>
                        <div
                            active
                            class="bg-base-100 absolute inset-y-0 top-0 -right-4 w-2 rounded-l-lg"
                        ></div>
                    </a>
                }
            </div>
        </nav>
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
export class NavSidebarComponent {
    public readonly nav_items = NAV_ITEMS;
}
