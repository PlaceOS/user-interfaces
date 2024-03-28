import { Component } from '@angular/core';

@Component({
    selector: `group-events-sidebar`,
    template: `
        <div class="bg-base-100 w-[18rem] h-full">
            <date-calendar></date-calendar>
            <hr class="border-base-200 w-[calc(100%-1rem)] mx-auto" />
        </div>
    `,
    styles: [``],
})
export class GroupEventsSidebarComponent {
    constructor() {}

    public ngOnInit(): void {}
}
