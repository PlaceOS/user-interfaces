import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
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
                <main class="w-full flex-1 overflow-auto">
                    <div
                        class="grid w-full flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">Total Rooms</h3>
                                <icon class="text-3xl text-info">sensors</icon>
                            </div>
                            <div class="text-4xl font-bold">24</div>
                            <div class="text-sm opacity-40">+2 this month</div>
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">
                                    Active Alerts
                                </h3>
                                <icon class="text-3xl text-error">warning</icon>
                            </div>
                            <div class="text-4xl font-bold">3</div>
                            <div class="text-sm opacity-40">2 critical</div>
                        </div>
                        <div
                            class="rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                        >
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-medium">
                                    System Uptime
                                </h3>
                                <icon class="text-3xl text-success"
                                    >show_chart</icon
                                >
                            </div>
                            <div class="text-4xl font-bold">99.9%</div>
                            <div class="text-sm opacity-40">Last 30 days</div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    `,
    styles: [],
    standalone: false,
})
export class DashboardComponent {}
