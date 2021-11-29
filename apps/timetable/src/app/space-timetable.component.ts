import { Component, Input } from "@angular/core";
import { Space } from "@placeos/spaces";

@Component({
    selector: 'space-timetable',
    template: `
        <div class="w-full min-h-[3rem] bg-[#212121] border-b border-white/50 flex items-center justify-center text-white text-xl font-medium">
            {{ space?.display_name || space?.name || 'Unnamed Space' }}
        </div>
    `,
    styles: [`
        :host {
            display: block;
            height: 100%;
            min-height: 51rem;
        }
    `]
})
export class SpaceTimetableComponent {
    @Input() public space?: Space;

    constructor() {}
}
