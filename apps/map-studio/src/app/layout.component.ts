import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/** Chrome shared by the standard pages. Editor and kiosk render full-screen. */
@Component({
    selector: 'map-studio-layout',
    template: `
        <div class="bg-base-200 flex min-h-full flex-col">
            <header
                class="bg-base-100 border-base-300 sticky top-0 z-10 flex items-center justify-between border-b px-8 py-4 shadow-sm"
            >
                <a routerLink="/" class="no-underline">
                    <h1 class="m-0 text-xl font-bold tracking-tight">
                        Map Studio
                    </h1>
                </a>
                <a
                    routerLink="/settings"
                    class="text-base-content/60 hover:text-base-content text-sm font-medium no-underline"
                >
                    Settings
                </a>
            </header>
            <main class="mx-auto w-full max-w-[87.5rem] flex-1 px-6 py-10">
                <router-outlet />
            </main>
        </div>
    `,
    imports: [RouterLink, RouterOutlet],
})
export class LayoutComponent {}
