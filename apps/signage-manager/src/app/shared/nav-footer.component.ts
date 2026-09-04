import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { dialogClosed, SignageService } from '../signage.service';
import { GroupSelectModalComponent } from './group-select-modal.component';
import { filterManageNavItems } from './nav-items';

@Component({
    selector: 'nav-footer',
    template: `
        <nav
            [attr.aria-label]="'SIGNAGE_MANAGER.PRIMARY_NAV' | translate"
            class="bg-secondary text-secondary-content border-base-100 border-t px-2 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.18)] sm:hidden"
        >
            <div
                class="mx-auto flex max-w-screen-sm items-center justify-around gap-1"
            >
                @for (item of primary_nav_items(); track item.route) {
                    <a
                        #route_active="routerLinkActive"
                        class="hover:bg-base-100/30 focus-visible:bg-base-100/30 relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-1 text-xs"
                        [routerLink]="item.route"
                        routerLinkActive="active bg-primary/30"
                        [attr.aria-label]="item.label | translate"
                        [attr.aria-current]="
                            route_active.isActive ? 'page' : null
                        "
                    >
                        <icon class="text-2xl">{{ item.icon }}</icon>
                        <div class="truncate font-medium">
                            {{ item.label | translate }}
                        </div>
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
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.MORE_NAV_OPTIONS' | translate
                    "
                >
                    <icon class="text-2xl">more_horiz</icon>
                    <div class="truncate font-medium">
                        {{ 'SIGNAGE_MANAGER.MORE' | translate }}
                    </div>
                </button>
                <mat-menu #more_menu="matMenu">
                    @for (item of more_nav_items(); track item.route) {
                        <a mat-menu-item [routerLink]="item.route">
                            <div class="flex items-center gap-2">
                                <icon class="mr-2 text-2xl">{{
                                    item.icon
                                }}</icon>
                                <span>{{ item.label | translate }}</span>
                            </div>
                        </a>
                    }
                    @if (
                        show_selector() && (is_sys_admin() || groups().length)
                    ) {
                        <div
                            class="border-base-300 my-1 border-t"
                            role="separator"
                        ></div>
                        <button
                            type="button"
                            mat-menu-item
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'
                                    | translate
                            "
                            (click)="selectGroup()"
                        >
                            <div class="flex items-center gap-2 py-1">
                                <icon class="mr-2 text-2xl">group</icon>
                                <div class="min-w-0 leading-tight">
                                    <div class="font-medium">
                                        {{
                                            'SIGNAGE_MANAGER.SELECT_GROUP'
                                                | translate
                                        }}
                                    </div>
                                    <div
                                        class="text-base-content/70 truncate text-xs"
                                    >
                                        {{ selected_label() | translate }}
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
    imports: [
        RouterModule,
        MatMenuModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class NavFooterComponent {
    private readonly _service = inject(SignageService);
    private readonly _dialog = inject(MatDialog);

    private readonly can_manage_groups = computed(
        () =>
            this._service.can_manage_all_groups() ||
            !!this._service.manageable_signage_groups().length,
    );
    // Templates joins the overflow menu so the primary row keeps 4 items max.
    private readonly MORE_MENU_ROUTES = ['/templates', '/schedules', '/groups'];
    public readonly primary_nav_items = computed(() =>
        filterManageNavItems(
            this.can_manage_groups(),
            this._service.templates_enabled(),
        ).filter((item) => !this.MORE_MENU_ROUTES.includes(item.route)),
    );
    public readonly more_nav_items = computed(() =>
        filterManageNavItems(
            this.can_manage_groups(),
            this._service.templates_enabled(),
        ).filter((item) => this.MORE_MENU_ROUTES.includes(item.route)),
    );
    public readonly groups = this._service.signage_groups;
    public readonly selected_group_id = this._service.selected_group_id;
    public readonly selected_group = this._service.selected_group;
    public readonly is_sys_admin = this._service.is_sys_admin;
    public readonly show_selector = this._service.show_group_selector;
    public readonly selected_label = computed(
        () => this.selected_group()?.group.name || 'SIGNAGE_MANAGER.ALL_GROUPS',
    );

    public async selectGroup() {
        const ref = this._dialog.open(GroupSelectModalComponent, {
            data: {
                title: i18n('SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP'),
                groups: this.groups(),
                selected_group_id: this.selected_group_id(),
                show_all_groups: this.is_sys_admin(),
            },
            panelClass: 'mobile-fullscreen',
        });
        const group_id = await dialogClosed(ref);
        if (group_id === undefined) return;
        this._service.setSelectedGroup(group_id);
    }
}
