import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { SignageService } from '../signage.service';
import { NAV_ITEMS } from './nav-items';

@Component({
    selector: 'nav-footer',
    template: `
        <nav
            aria-label="Primary navigation"
            class="bg-secondary text-secondary-content border-base-100 border-t px-2 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.18)] sm:hidden"
        >
            <div
                class="mx-auto flex max-w-screen-sm items-center justify-around gap-1"
            >
                @for (item of primary_nav_items; track item.route) {
                    <a
                        #route_active="routerLinkActive"
                        class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-1 text-xs"
                        [routerLink]="item.route"
                        routerLinkActive="active bg-primary/30"
                        [attr.aria-label]="item.label"
                        [attr.aria-current]="
                            route_active.isActive ? 'page' : null
                        "
                    >
                        <icon class="text-2xl">{{ item.icon }}</icon>
                        <div class="truncate font-medium">{{ item.label }}</div>
                        <div
                            active
                            class="bg-base-100 absolute inset-x-2 -top-2 left-1 h-1 rounded-b"
                        ></div>
                    </a>
                }
                <button
                    icon
                    type="button"
                    matRipple
                    class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-1 text-xs"
                    [matMenuTriggerFor]="more_menu"
                    aria-label="More navigation options"
                >
                    <icon class="text-2xl">more_horiz</icon>
                    <div class="truncate font-medium">More</div>
                </button>
                <mat-menu #more_menu="matMenu">
                    @for (item of more_nav_items; track item.route) {
                        <a mat-menu-item [routerLink]="item.route">
                            <div class="flex items-center gap-2">
                                <icon class="mr-2 text-2xl">{{
                                    item.icon
                                }}</icon>
                                <span>{{ item.label }}</span>
                            </div>
                        </a>
                    }
                    @if (is_sys_admin() || groups().length) {
                        <div
                            class="border-base-300 my-1 border-t"
                            role="separator"
                        ></div>
                        <div class="w-full px-4 py-2 text-center font-medium">
                            Signage Groups
                        </div>
                        @if (is_sys_admin()) {
                            <button
                                type="button"
                                mat-menu-item
                                [class.bg-secondary]="!selected_group_id()"
                                [attr.aria-current]="
                                    !selected_group_id() ? 'true' : null
                                "
                                (click)="setGroup('')"
                            >
                                <div
                                    class="flex items-center gap-2"
                                    [class.text-secondary-content]="
                                        !selected_group_id()
                                    "
                                >
                                    <icon class="mr-2 text-2xl">
                                        {{
                                            selected_group_id()
                                                ? 'public'
                                                : 'check_circle'
                                        }}
                                    </icon>
                                    <span>All Groups</span>
                                </div>
                            </button>
                        }
                        @for (item of groups(); track item.group.id) {
                            <button
                                type="button"
                                mat-menu-item
                                [class.bg-secondary]="
                                    selected_group_id() === item.group.id
                                "
                                [attr.aria-current]="
                                    selected_group_id() === item.group.id
                                        ? 'true'
                                        : null
                                "
                                (click)="setGroup(item.group.id)"
                            >
                                <div
                                    class="flex items-center gap-2"
                                    [class.text-secondary-content]="
                                        selected_group_id() === item.group.id
                                    "
                                >
                                    <icon class="mr-2 text-2xl">
                                        {{
                                            selected_group_id() ===
                                            item.group.id
                                                ? 'check_circle'
                                                : 'group'
                                        }}
                                    </icon>
                                    <span>{{ item.group.name }}</span>
                                </div>
                            </button>
                        }
                    }
                </mat-menu>
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
    imports: [RouterModule, MatMenuModule, MatRippleModule, IconComponent],
})
export class NavFooterComponent {
    private readonly _service = inject(SignageService);

    public readonly primary_nav_items = NAV_ITEMS.filter(
        (item) => !['/schedules', '/groups'].includes(item.route),
    );
    public readonly more_nav_items = NAV_ITEMS.filter((item) =>
        ['/schedules', '/groups'].includes(item.route),
    );
    public readonly groups = this._service.signage_groups;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly is_sys_admin = this._service.is_sys_admin;

    public setGroup(group_id: string) {
        this._service.setSelectedGroup(group_id);
    }
}
