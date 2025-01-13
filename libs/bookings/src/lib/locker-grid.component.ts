import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { Locker, LockerBank } from './locker.class';

@Component({
    selector: 'locker-grid',
    template: `
        <div
            class="flex-1 grid gap-2 p-2"
            [style.width]="columns * 2.5 + 'rem'"
            [style.grid-template-columns]="'repeat(' + columns + ', 5rem)'"
            [style.grid-template-rows]="'repeat(' + bank?.height + ', 5rem)'"
        >
            <button
                *ngFor="let locker of bank?.lockers || []"
                matRipple
                class="relative border border-base-200 rounded overflow-hidden"
                [class.opacity-60]="selected && selected !== locker.id"
                [style.grid-column-start]="locker.position[0] + 1"
                [style.grid-row-start]="locker.position[1] + 1"
                [style.grid-column-end]="
                    locker.position[0] + (locker.size[0] + 1)
                "
                [style.background-color]="status(locker)"
                [style.grid-row-end]="locker.position[1] + (locker.size[1] + 1)"
                [matTooltip]="locker.name"
                [disabled]="
                    locker.bookable === false || locker?.available === false
                "
                (click)="clicked.emit(locker)"
            >
                <div
                    handle
                    class="absolute top-1/2 -translate-y-1/2 left-2 w-1 h-6 bg-base-400 rounded opacity-60"
                ></div>
                <div
                    vent
                    class="absolute left-1/2 -translate-x-1/2 top-2 w-12 h-1 bg-base-400 rounded-t opacity-60"
                ></div>
                <div
                    vent
                    class="absolute left-1/2 -translate-x-1/2 top-4 w-12 h-1 bg-base-400 rounded-t opacity-60"
                ></div>
                <div
                    vent
                    class="absolute left-1/2 -translate-x-1/2 top-6 w-12 h-1 bg-base-400 rounded-t opacity-60"
                ></div>
                <div
                    class="absolute left-1/2 -translate-x-1/2 top-8 text-[0.6rem] font-medium text-base-content opacity-60"
                >
                    {{ locker.name }}
                </div>

                <div
                    class="absolute inset-0 hover:bg-base-content opacity-10"
                ></div>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            button[disabled] {
                pointer-events: none;
                opacity: 0.75;
                background-color: #ccc !important;
            }
        `,
    ],
    standalone: false
})
export class LockerGridComponent {
    @Input() public show_name = true;
    @Input() public bank: LockerBank;
    @Input() public bank_status: Record<string, string> = {};
    @Input() public selected = '';
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

    public color(status: string) {
        const colours = this._settings.get('app.explore.colors') || {};
        return (
            colours[`lockers-${status}`] ||
            colours[`${status}`] ||
            DEFAULT_COLOURS[`${status}`]
        );
    }

    public status(locker: Locker) {
        if (!locker) return this.color('busy');
        let value = this.bank_status[locker.id] || 'free';
        if (!this.bank_status[locker.id] && !locker?.available) {
            value = 'busy';
        }
        return this.color(value);
    }
}
