import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'nav-sidebar',
    template: `
        <div
            class="bg-secondary text-secondary-content border-base-100 relative z-30 h-full border-r p-2 shadow-lg"
        >
            <div
                logo
                class="bg-base-300/30 mx-auto flex h-20 w-20 items-center justify-center rounded-xl"
            >
                <div class="opacity-20">LOGO</div>
            </div>
            <div class="flex flex-col gap-4 p-2">
                <a
                    class="hover:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                    [routerLink]="['/media']"
                    routerLinkActive="active bg-primary/30"
                >
                    <icon class="text-3xl">stock_media</icon>
                    <div class="text-sm font-medium">Media</div>
                    <div
                        active
                        class="bg-base-100 absolute inset-y-0 top-0 -right-4 w-2 rounded-l-lg"
                    ></div>
                </a>
                <a
                    class="hover:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                    [routerLink]="['/playlists']"
                    routerLinkActive="active bg-primary/30"
                >
                    <icon class="text-3xl">playlist_play</icon>
                    <div class="text-sm font-medium">Playlists</div>
                    <div
                        active
                        class="bg-base-100 absolute inset-y-0 top-0 -right-4 w-2 rounded-l-lg"
                    ></div>
                </a>
                <a
                    class="hover:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                    [routerLink]="['/displays']"
                    routerLinkActive="active bg-primary/30"
                >
                    <icon class="text-3xl">display_settings</icon>
                    <div class="text-sm font-medium">Displays</div>
                    <div
                        active
                        class="bg-base-100 absolute inset-y-0 top-0 -right-4 w-2 rounded-l-lg"
                    ></div>
                </a>
                <a
                    class="hover:bg-base-100/30 relative flex h-18 w-18 flex-col items-center justify-center rounded-xl"
                    [routerLink]="['/zones']"
                    routerLinkActive="active bg-primary/30"
                >
                    <icon class="text-3xl">layers</icon>
                    <div class="text-sm font-medium">Zones</div>
                    <div
                        active
                        class="bg-base-100 absolute inset-y-0 top-0 -right-4 w-2 rounded-l-lg"
                    ></div>
                </a>
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
export class NavSidebarComponent {}
