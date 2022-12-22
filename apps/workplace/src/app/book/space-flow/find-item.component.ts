import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Space } from '@placeos/spaces';
import { MapLocateModalComponent } from '@placeos/components';

@Component({
    selector: 'space-flow-find-item',
    template: `
        <div
            class="flex items-center bg-white dark:bg-neutral-700 p-2 my-2 shadow w-[640px] max-w-[calc(100%-2rem)] mx-auto rounded"
        >
            <div class="flex flex-col flex-1 space-y-2 ">
                <div class="flex items-center">
                    <div class="p-2 rounded-full bg-gray-300 dark:bg-neutral-600 mr-2">
                        <app-icon>place</app-icon>
                    </div>
                    <span
                        >{{ space?.level?.display_name || space?.level?.name }},
                        {{ space?.display_name || space?.name }}</span
                    >
                </div>
                <div class="flex items-center">
                    <div class="p-2 rounded-full bg-gray-300 dark:bg-neutral-600 mr-2">
                        <app-icon>group</app-icon>
                    </div>
                    <span>{{ space?.capacity || 0 }} People</span>
                </div>
            </div>
            <div class="flex flex-col space-y-2 ml-2">
                <button
                    mat-button
                    book
                    [class.bg-pending]="multiple && book"
                    [class.border-pending]="multiple && book"
                    (click)="bookSpace()"
                >
                    {{ multiple ? (book ? 'Remove' : 'Select') : 'Book' }}
                </button>
                <button
                    locate
                    mat-button
                    class="inverse"
                    (click)="viewLocation()"
                >
                    Map
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            button {
                width: 8rem;
            }
        `,
    ],
})
export class SpaceFlowFindItemComponent {
    /** Space to display details for */
    @Input() public space: Space;
    /** Whether space should be booked */
    @Input() public multiple: boolean;
    /** Whether space should be booked */
    @Input() public book: boolean;
    /** Emitter for changes to book value */
    @Output() public bookChange = new EventEmitter<boolean>();

    constructor(private _dialog: MatDialog) {}

    public bookSpace() {
        this.book = this.multiple ? !this.book : true;
        this.bookChange.emit(this.book);
    }

    public viewLocation() {
        this._dialog.open(MapLocateModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { item: this.space },
        });
    }
}
