import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { lastValueFrom } from 'rxjs';
import { SignageService } from '../signage.service';
import { GroupSelectModalComponent } from './group-select-modal.component';
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
                        <button
                            type="button"
                            mat-menu-item
                            aria-label="Select signage group"
                            (click)="selectGroup()"
                        >
                            <div class="flex items-center gap-2 py-1">
                                <icon class="mr-2 text-2xl">group</icon>
                                <div class="min-w-0 leading-tight">
                                    <div class="font-medium">Select Group</div>
                                    <div
                                        class="text-base-content/70 truncate text-xs"
                                    >
                                        {{ selected_label() }}
                                    </div>
                                </div>
                            </div>
                        </button>
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
    private readonly _dialog = inject(MatDialog);

    public readonly primary_nav_items = NAV_ITEMS.filter(
        (item) => !['/schedules', '/groups'].includes(item.route),
    );
    public readonly more_nav_items = NAV_ITEMS.filter((item) =>
        ['/schedules', '/groups'].includes(item.route),
    );
    public readonly groups = this._service.signage_groups;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly selected_group = this._service.selected_group;
    public readonly is_sys_admin = this._service.is_sys_admin;
    public readonly selected_label = computed(
        () => this.selected_group()?.group.name || 'All Groups',
    );

    public async selectGroup() {
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: 'Select signage group',
                groups: this.groups(),
                selected_group_id: this.selected_group_id(),
                show_all_groups: this.is_sys_admin(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await lastValueFrom(ref.afterClosed());
        if (group_id === undefined) return;
        this._service.setSelectedGroup(group_id);
    }
}
