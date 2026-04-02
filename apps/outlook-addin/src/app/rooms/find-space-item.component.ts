import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Space } from '@placeos/common';
import { IconComponent, LevelPipe } from '@placeos/components';

@Component({
    selector: 'find-space-item',
    template: `
        @let level = space()?.zones | level;
        <button
            mat-ripple
            class="border-base-300 bg-base-100 hover:border-info mx-auto flex w-full flex-col space-y-2 rounded-lg border p-4"
            [class.bg-base-200]="selected()"
            (click)="toggleSelected()"
        >
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">meeting_room</icon>
                <div>
                    {{ level?.display_name || level?.name }},
                    {{ space()?.display_name || space()?.name }}
                </div>
            </div>
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">group</icon>
                <div>{{ space()?.capacity || 0 }} People</div>
            </div>
        </button>
    `,
    styles: [
        `
            :host {
                padding: 0 0.5rem;
            }
        `,
    ],
    imports: [MatRippleModule, IconComponent, LevelPipe],
})
export class FindSpaceItemComponent {
    public readonly space = input<Space>(undefined);
    public readonly selected = input(false);
    public readonly selectedChange = output<boolean>();

    readonly toggleSelected = () => this.selectedChange.emit(!this.selected());
}
