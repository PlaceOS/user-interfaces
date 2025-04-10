import { Component } from '@angular/core';

let compact_state = false;

@Component({
    selector: 'sidebar',
    template: `
        <div
            sidebar
            class="flex h-full flex-col bg-secondary text-secondary-content"
            [style.width]="is_compact ? '3rem' : '16rem'"
        >
            <div class="flex items-center px-1">
                <div
                    header
                    class="overflow-hidden"
                    [style.width]="is_compact ? '0rem' : '13rem'"
                >
                    <div class="px-2 py-4">
                        <div class="truncate text-2xl font-medium">
                            Stagehand
                        </div>
                        <div class="truncate text-xs opacity-40">
                            by PlaceOS
                        </div>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="rounded"
                    (click)="toggleCompact()"
                    [matTooltip]="
                        is_compact ? 'Expand Sidebar' : 'Collapse Sidebar'
                    "
                    matTooltipPosition="right"
                >
                    <icon class="text-2xl">{{
                        is_compact ? 'menu' : 'close'
                    }}</icon>
                </button>
            </div>
            <div class="mt-8 flex-1 overflow-auto">
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/dashboard']"
                    [matTooltip]="is_compact ? 'Dashboard' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-2xl">dashboard</icon>
                    <span class="truncate" *ngIf="!is_compact">Dashboard</span>
                </a>
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/alerts']"
                    [matTooltip]="is_compact ? 'Alerts' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-2xl">notifications</icon>
                    <span class="truncate" *ngIf="!is_compact">Alerts</span>
                </a>
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/remote-support']"
                    [matTooltip]="is_compact ? 'Remote Support' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-2xl">wifi</icon>
                    <span class="truncate" *ngIf="!is_compact"
                        >Remote Support</span
                    >
                </a>
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/analytics']"
                    [matTooltip]="is_compact ? 'Analytics' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-2xl">show_chart</icon>
                    <span class="truncate" *ngIf="!is_compact">Analytics</span>
                </a>
            </div>
            <div
                class="flex flex-col space-y-2 py-4"
                [class.px-4]="!is_compact"
                [class.px-0]="is_compact"
            >
                <a
                    btn
                    matRipple
                    class="inverse"
                    [class.min-w-0]="is_compact"
                    [class.base]="!is_compact"
                    [class.clear]="is_compact"
                    [matTooltip]="is_compact ? 'Launch PlaceOS Backoffice' : ''"
                    matTooltipPosition="right"
                    [href]="backoffice_link"
                    target="_blank"
                    ref="noopener noreferrer"
                >
                    <span class="truncate text-sm" *ngIf="!is_compact">
                        Launch PlaceOS Backoffice
                    </span>
                    <icon class="text-2xl text-base-100" *ngIf="is_compact"
                        >open_in_new</icon
                    >
                </a>
                <p class="text-center text-xs opacity-40" *ngIf="!is_compact">
                    Access system configuration and management
                </p>
            </div>
        </div>
    `,
    styles: [
        `
            [sidebar],
            [header] {
                transition: width 200ms;
            }
        `,
    ],
    standalone: false,
})
export class SidebarComponent {
    public get is_compact() {
        return compact_state;
    }

    public get backoffice_link() {
        return `${location.origin}/backoffice/`;
    }

    public toggleCompact() {
        compact_state = !compact_state;
    }
}
