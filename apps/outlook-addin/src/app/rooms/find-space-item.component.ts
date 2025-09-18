import { Component, input, output } from '@angular/core';
import { Space } from '@placeos/common';

@Component({
    selector: 'find-space-item',
    template: `
        <button
            mat-ripple
            class="mx-auto my-2 flex w-[375px] max-w-[calc(100%-2rem)] flex-col space-y-4 rounded bg-base-100 p-4 shadow"
            [class.bg-primary]="selected()"
            [class.text-white]="selected()"
            (click)="toggleSelected()"
        >
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">meeting_room</icon>
                <div>
                    {{ space()?.level?.display_name || space()?.level?.name }},
                    {{ space()?.display_name || space()?.name }}
                </div>
            </div>
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">group</icon>
                <div>{{ space()?.capacity || 0 }} People</div>
            </div>
        </button>
    `,
    styles: [``],
    standalone: false,
})
export class FindSpaceItemComponent {
    public readonly space = input<Space>(undefined);
    public readonly selected = input(false);
    public readonly selectedChange = output<boolean>();

    readonly toggleSelected = () => this.selectedChange.emit(!this.selected());
}
