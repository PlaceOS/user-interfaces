import { Component, computed, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { OrganisationService, Space } from '@placeos/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'find-space-item',
    template: `
        <button
            mat-ripple
            class="border-base-300 bg-base-100 hover:border-info mx-auto flex w-full flex-col space-y-2 rounded-lg border p-4"
            [class.bg-base-200]="selected()"
            (click)="toggleSelected()"
        >
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">meeting_room</icon>
                <div>
                    {{ level_name() }},
                    {{ space_name() }}
                </div>
            </div>
            <div class="flex w-full flex-row items-center space-x-2">
                <icon class="text-lg">group</icon>
                <div>{{ capacity() }} People</div>
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
    imports: [MatRippleModule, IconComponent],
})
export class FindSpaceItemComponent {
    private readonly _org = inject(OrganisationService);

    public readonly space = input<Space>(undefined);
    public readonly selected = input(false);
    public readonly selectedChange = output<boolean>();
    public readonly level_name = computed(() => {
        const level = this._org.levelWithID(this.space()?.zones || []);
        return level?.display_name || level?.name || '';
    });
    public readonly space_name = computed(
        () => this.space()?.display_name || this.space()?.name || '',
    );
    public readonly capacity = computed(() => this.space()?.capacity || 0);

    readonly toggleSelected = () => this.selectedChange.emit(!this.selected());
}
