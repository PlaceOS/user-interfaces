import { Component } from '@angular/core';

@Component({
    selector: '[dashboard]',
    template: `
        <topbar></topbar>
        <div class="flex-1 flex sm:flex-row flex-col-reverse h-1/2 bg-gray-200">
            <nav-menu class="relative z-10"></nav-menu>
            <div
                class="relative z-0 flex flex-col flex-1 h-1/2 sm:h-auto overflow-hidden"
            >
                <main
                    class="flex flex-1 px-0 sm:px-8 flex-wrap overflow-auto h-px sm:h-auto"
                >
                    <a-dashboard-availability
                        class="flex-1 min-w-64"
                    ></a-dashboard-availability>
                    <a-dashboard-upcoming
                        class="flex-1 min-w-64"
                    ></a-dashboard-upcoming>
                    <a-dashboard-contacts
                        class="flex-1 min-w-64"
                    ></a-dashboard-contacts>
                </main>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                min-height: 50%;
            }

            .top {
                background-color: #007ac8;
            }

            a[button].tile {
                flex: 1;
                border-radius: 0;
                background-color: #fff;
                color: rgba(0, 0, 0, 0.85);
                border: none;
                border-right: 1px solid #ccc;
            }

            a[button].tile:last-child {
                border: none;
            }
        `,
    ],
})
export class DashboardComponent {}
