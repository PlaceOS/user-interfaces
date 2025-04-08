import { Component } from '@angular/core';

@Component({
    selector: 'stagehand-analytics',
    template: `
        <div class="absolute inset-0 flex bg-base-200">
            <sidebar />
            <div class="flex flex-1 flex-col">
                <header
                    class="flex h-[4.5rem] w-full items-center justify-between border-base-400 bg-base-100 p-4"
                >
                    <h1 class="text-2xl font-bold">AV Systems Monitor</h1>
                    <button btn matRipple>Generate report</button>
                </header>
                <main class="w-full flex-1 overflow-auto"></main>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class AnalyticsComponent {}
