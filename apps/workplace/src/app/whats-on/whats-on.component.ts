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
                    class="flex flex-col flex-1 px-0 sm:px-8 overflow-y-auto overflow-x-hidden h-px sm:h-auto"
                >
                    <whats-on-header></whats-on-header>
                    <whats-on-event-list class="mb-4"></whats-on-event-list>
                    <whats-on-event-list title="Ongoing"></whats-on-event-list>
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
        `,
    ],
})
export class WhatsOnComponent {}
