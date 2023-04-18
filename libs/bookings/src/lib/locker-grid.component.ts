import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Locker, LockerBank } from './lockers.service';
import { SettingsService } from '@placeos/common';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';

@Component({
    selector: 'locker-grid',
    template: `
        <div
            class="grid gap-2 overflow-hidden max-h-full h-[75vh] min-w-[60vw] p-2"
            [style.grid-template-columns]="'repeat(' + columns + ', 1fr)'"
            [style.grid-template-rows]="'repeat(' + bank?.height + ', 1fr)'"
        >
            <button
                *ngFor="let locker of bank?.lockers || []"
                matRipple
                class="relative border border-black/20 rounded bg-teal-300 overflow-hidden"
                [style.grid-column-start]="locker.position[0] + 1"
                [style.grid-row-start]="locker.position[1] + 1"
                [style.grid-column-end]="
                    locker.position[0] + (locker.size[0] + 1)
                "
                [style.background-color]="status(locker)"
                [style.grid-row-end]="locker.position[1] + (locker.size[1] + 1)"
                [matTooltip]="locker.name"
                [disabled]="locker.bookable === false"
                (click)="clicked.emit(locker)"
            >
                <div
                    handle
                    class="absolute top-1/2 -translate-y-1/2 left-2 w-1 h-6 bg-black/20 rounded"
                ></div>
                <div
                    vent
                    class="absolute left-1/2 -translate-x-1/2 top-2 w-3/5 h-1 bg-black/20 rounded-t"
                ></div>
                <div
                    vent
                    class="absolute left-1/2 -translate-x-1/2 top-4 w-3/5 h-1 bg-black/20 rounded-t"
                ></div>
                <div
                    vent
                    class="absolute left-1/2 -translate-x-1/2 top-6 w-3/5 h-1 bg-black/20 rounded-t"
                ></div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 top-8 text-[0.6rem] font-medium text-black/60"
                >
                    {{ locker.name }}
                </div>

                <div class="absolute inset-0 hover:bg-black/10"></div>
            </button>
        </div>
    `,
    styles: [
        `
            button[disabled] {
                pointer-events: none;
                opacity: 0.75;
                background-color: #ccc !important;
            }
        `,
    ],
})
export class LockerGridComponent {
    @Input() public bank: LockerBank;
    @Input() public bank_status: Record<string, string> = {
        '10': 'busy',
        '7': 'pending',
    };
    @Output() public clicked = new EventEmitter<Locker>();

    public get columns() {
        let columns = 1;
        for (const locker of this.bank?.lockers || []) {
            const x = locker.position[0] + locker.size[0];
            if (x > columns) columns = x;
        }
        return columns;
    }

    constructor(private _settings: SettingsService) {}

    public status(locker: Locker) {
        const colours = this._settings.get('app.explore.colors') || {};
        const value = this.bank_status[locker.id] || 'free';
        return (
            colours[`lockers-${value}`] ||
            colours[`${value}`] ||
            DEFAULT_COLOURS[`${value}`]
        );
    }
}
