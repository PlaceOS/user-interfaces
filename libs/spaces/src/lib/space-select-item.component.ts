import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Space } from './space.class';

@Component({
    selector: 'a-space-select-item',
    template: `
        <div
            space
            class="w-full flex items-center p-2 space-x-2 border-b border-gray-100"
            *ngIf="space"
        >
            <div class="flex-1 w-1/2">
                <div class="text-base truncate">{{ space.name }}</div>
                <div class="text-xs">
                    {{ space.level?.display_name || space.level?.name }}
                </div>
            </div>
            <div class="flex items-center" *ngIf="space.capacity !== -1">
                <app-icon>account_circle</app-icon>
                <div>{{ space.capacity }}</div>
            </div>
            <button
                icon
                matRipple
                *ngIf="multiple; else single_button"
                (click)="action.emit()"
            >
                <app-icon>{{
                    type === 'available' ? 'add' : 'close'
                }}</app-icon>
            </button>
        </div>
        <ng-template #single_button>
            <button
                btn
                matRipple
                class="w-32"
                [class.request]="space.by_request"
            >
                {{ space.by_request ? 'Request' : 'Book' }}
            </button>
        </ng-template>
    `,
    styles: [``],
})
export class SpaceSelectItemComponent {
    /** Space to display the details */
    @Input() public space: Space;
    /** Selected state for the space */
    @Input() public type: 'available' | 'selected';
    /** Whether user is allowed to select multiple spaces */
    @Input() public multiple: boolean;
    /** Emitter for selection actions */
    @Output() public action = new EventEmitter();
}
