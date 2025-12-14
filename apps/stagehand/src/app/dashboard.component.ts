import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { SidebarComponent } from './ui/sidebar.component';

@Component({
    selector: 'app-dashboard',
    template: `
        <div class="bg-base-200 absolute inset-0 flex">
            <sidebar />
            <div class="flex flex-1 flex-col">
                <header
                    class="border-base-400 bg-base-100 flex h-18 w-full items-center justify-between p-4"
                >
                    <h1 class="text-2xl font-bold">AV Systems Monitor</h1>
                    <button btn matRipple>Generate report</button>
                </header>
                <main class="w-full flex-1 overflow-auto"></main>
            </div>
        </div>
    `,
    styles: [],
    imports: [MatRippleModule, SidebarComponent],
})
export class DashboardComponent {}
