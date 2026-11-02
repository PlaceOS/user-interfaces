import { Component, input } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

/**
 * Page shell of the Stagehand pages: the sidebar, a header with the page
 * heading, and the main area that the skip link goes to.
 * Header content with the `page-header-start` attribute shows before the
 * heading, and content with the `page-header` attribute after it. Other content
 * goes in the main area.
 */
@Component({
    selector: 'stagehand-page',
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <sidebar />
            <div class="flex w-px flex-1 flex-col">
                <header
                    class="border-base-400 bg-base-100 flex h-18 w-full items-center justify-between space-x-2 p-4"
                >
                    <ng-content select="[page-header-start]" />
                    <h1 class="text-2xl font-bold">{{ heading() }}</h1>
                    <ng-content select="[page-header]" />
                </header>
                <main
                    id="stagehand-page-content"
                    class="w-full flex-1 overflow-auto"
                >
                    <ng-content />
                </main>
            </div>
        </div>
    `,
    imports: [SidebarComponent],
})
export class StagehandPageComponent {
    /** Page heading */
    public readonly heading = input.required<string>();
}
