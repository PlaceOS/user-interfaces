import { Component } from '@angular/core';

@Component({
    selector: 'app-event-manage',
    template: `
        <div class="absolute inset-0 bg-white overflow-auto">
            <a
                icon
                matRipple
                class="absolute top-2 right-2"
                [routerLink]="['/entertainment', 'events']"
            >
                <app-icon>close</app-icon>
            </a>
            <div class="flex flex-col w-[32rem] max-w-full mx-auto "></div>
        </div>
    `,
    styles: [``],
})
export class EventManageComponent {}
