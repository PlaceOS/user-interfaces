import { Component, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { SettingsService } from '@placeos/common';
import { DEFAULT_COLOURS } from 'libs/explore/src/lib/explore-spaces.service';
import { Locker, LockerBank } from './locker.class';

@Component({
    selector: 'locker-grid',
    template: `
        <div
            class="grid flex-1 gap-2 p-2"
            [style.width]="columns * 2.5 + 'rem'"
            [style.grid-template-columns]="'repeat(' + columns + ', 5rem)'"
            [style.grid-template-rows]="'repeat(' + bank()?.height + ', 5rem)'"
        >
            @for (locker of bank()?.lockers || []; track locker) {
                <button
                    matRipple
                    class="relative overflow-hidden rounded border border-base-200"
                    [class.opacity-60]="selected() && selected() !== locker.id"
                    [style.grid-column-start]="locker.position[0] + 1"
                    [style.grid-row-start]="locker.position[1] + 1"
                    [style.grid-column-end]="
                        locker.position[0] + (locker.size[0] + 1)
                    "
                    [style.background-color]="status(locker)"
                    [style.grid-row-end]="
                        locker.position[1] + (locker.size[1] + 1)
                    "
                    [matTooltip]="locker.name"
                    [disabled]="
                        locker.bookable === false || locker?.available === false
                    "
                    (click)="clicked.emit(locker)"
                >
                    <div
                        handle
                        class="absolute left-2 top-1/2 h-6 w-1 -translate-y-1/2 rounded bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-4 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        vent
                        class="absolute left-1/2 top-6 h-1 w-12 -translate-x-1/2 rounded-t bg-base-400 opacity-60"
                    ></div>
                    <div
                        class="absolute left-1/2 top-8 -translate-x-1/2 text-[0.6rem] font-medium text-base-content opacity-60"
                    >
                        {{ locker.name }}
                    </div>
                    <div
                        class="absolute inset-0 opacity-10 hover:bg-base-content"
                    ></div>
                </button>
            }
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
            }
        `,
    ],
    imports: [MatRippleModule],
})
export class LockerGridComponent {
    private _settings = inject(SettingsService);

    public readonly show_name = input(true);
    public readonly default_status = input('busy');
    public readonly bank = input<LockerBank>(undefined);
    public readonly bank_status = input<Record<string, string>>({});
    public readonly selected = input('');
    public readonly clicked = output<Locker>();

    public get columns() {
        let columns = 1;
        for (const locker of this.bank()?.lockers || []) {
            const x = locker.position[0] + locker.size[0];
            if (x > columns) columns = x;
        }
        return columns;
    }

    public color(status: string) {
        const colours = this._settings.get('app.explore.colors') || {};
        return (
            colours[`lockers-${status}`] ||
            colours[`${status}`] ||
            DEFAULT_COLOURS[`${status}`]
        );
    }

    public status(locker: Locker) {
        if (!locker) return this.color('not-bookable');
        const selected = this.selected();
        if (selected && locker.id === selected) {
            return this.color('pending');
        }
        let value = this.bank_status()[locker.id] || 'free';
        if (!this.bank_status()[locker.id] && !locker?.available) {
            value = this.default_status();
        }
        return this.color(value);
    }
}
