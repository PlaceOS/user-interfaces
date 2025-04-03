import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
        <div class="absolute inset-0 flex bg-base-200">
            <sidebar />
            <main class="flex flex-1 flex-col">
                <header
                    class="flex w-full items-center justify-between border-base-400 bg-base-100 p-4"
                >
                    <h1 class="text-2xl font-bold">AV Systems Monitor</h1>
                    <button btn matRipple>Generate report</button>
                </header>
            </main>
        </div>
    `,
    styles: [],
    standalone: false,
})
export class DashboardComponent {}
