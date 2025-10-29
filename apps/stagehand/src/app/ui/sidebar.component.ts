import { Component, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { settingSignal } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';

const COMPACT_SIGNAL = signal(false);

@Component({
    selector: 'sidebar',
    template: `
        <div
            sidebar
            class="flex h-full flex-col bg-secondary text-secondary-content"
            [style.width]="is_compact() ? '3.5rem' : '16rem'"
        >
            <div class="flex items-center px-1">
                <div
                    header
                    class="overflow-hidden"
                    [style.width]="is_compact() ? '0rem' : '13rem'"
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
                    [class.w-14]="is_compact()"
                    (click)="toggleCompact()"
                    [matTooltip]="
                        is_compact() ? 'Expand Sidebar' : 'Collapse Sidebar'
                    "
                    matTooltipPosition="right"
                >
                    <icon class="text-3xl">{{
                        is_compact() ? 'menu' : 'close'
                    }}</icon>
                </button>
            </div>
            <div class="mt-8 flex-1 space-y-1 overflow-auto">
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/alerts']"
                    [matTooltip]="is_compact() ? 'Alerts' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-3xl">notifications</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Alerts</span>
                    }
                </a>
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/remote-support']"
                    [matTooltip]="is_compact() ? 'Remote Support' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-3xl">wifi</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Remote Support</span>
                    }
                </a>
                @if (analytics_pages()?.length > 0) {
                    <a
                        matRipple
                        class="relative flex w-full items-center space-x-4 p-2"
                        routerLinkActive="bg-secondary-focus"
                        [routerLink]="['/analytics']"
                        [matTooltip]="is_compact() ? 'Analytics' : ''"
                        matTooltipPosition="right"
                    >
                        <div
                            class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                        ></div>
                        <icon class="!ml-0 text-3xl">show_chart</icon>
                        @if (!is_compact()) {
                            <span class="truncate">Analytics</span>
                        }
                    </a>
                }
                <a
                    matRipple
                    class="relative flex w-full items-center space-x-4 p-2"
                    routerLinkActive="bg-secondary-focus"
                    [routerLink]="['/dashboards']"
                    [matTooltip]="is_compact() ? 'Manage Dashboards' : ''"
                    matTooltipPosition="right"
                >
                    <div
                        class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                    ></div>
                    <icon class="!ml-0 text-3xl">dashboard</icon>
                    @if (!is_compact()) {
                        <span class="truncate">Manage Dashboards</span>
                    }
                </a>
                @if (show_recorder_view()) {
                    <a
                        matRipple
                        class="relative flex w-full items-center space-x-4 p-2"
                        routerLinkActive="bg-secondary-focus"
                        [routerLink]="['/recorder-grid']"
                        [matTooltip]="is_compact ? 'Recorder Streams' : ''"
                        matTooltipPosition="right"
                    >
                        <div
                            class="absolute inset-0 bg-base-100 opacity-0 hover:opacity-10"
                        ></div>
                        <icon class="!ml-0 text-2xl">stream</icon>
                        @if (!is_compact) {
                            <span class="truncate">Recorder Streams</span>
                        }
                    </a>
                }
            </div>
            <div
                class="flex flex-col space-y-2 py-4"
                [class.px-4]="!is_compact()"
                [class.px-0]="is_compact()"
            >
                <a
                    btn
                    matRipple
                    class="inverse"
                    [class.min-w-0]="is_compact()"
                    [class.base]="!is_compact()"
                    [class.clear]="is_compact()"
                    [matTooltip]="
                        is_compact() ? 'Launch PlaceOS Backoffice' : ''
                    "
                    matTooltipPosition="right"
                    [href]="backoffice_link()"
                    target="_blank"
                    ref="noopener noreferrer"
                >
                    @if (!is_compact()) {
                        <span class="truncate text-sm">
                            Launch PlaceOS Backoffice
                        </span>
                    }
                    @if (is_compact()) {
                        <icon class="text-3xl text-base-100">open_in_new</icon>
                    }
                </a>
                @if (!is_compact()) {
                    <p class="text-center text-xs opacity-40">
                        Access system configuration and management
                    </p>
                }
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
    imports: [MatRippleModule, MatTooltipModule, IconComponent, RouterModule],
})
export class SidebarComponent {
    public readonly is_compact = COMPACT_SIGNAL;
    public readonly backoffice_link = settingSignal(
        'backoffice_link',
        `${location.origin}/backoffice/`,
    );
    public readonly show_recorder_view = settingSignal(
        'show_recorder_view',
        false,
    );
    public readonly analytics_pages = settingSignal('analytics_pages', []);

    public toggleCompact() {
        this.is_compact.update((s) => !s);
    }
}
