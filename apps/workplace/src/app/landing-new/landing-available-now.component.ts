import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';
import { LandingStateService } from '../landing/landing-state.service';

@Component({
    selector: 'landing-available-now',
    template: `
        <div
            class="space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="px-2 text-lg font-medium">Available Now</h3>
                <button matRipple class="flex items-center rounded px-2 py-1">
                    <div class="ml-2 text-sm underline">Nearby</div>
                    <icon>keyboard_arrow_down</icon>
                </button>
            </div>
            <div
                class="flex w-full items-center space-x-1 rounded bg-base-200 p-1"
            >
                <button
                    btn
                    matRipple
                    class="flex-1 hover:bg-base-300"
                    [class.clear]="active_tab() !== 'desks'"
                    (click)="active_tab.set('desks')"
                >
                    Desks
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1 hover:bg-base-300"
                    [class.clear]="active_tab() !== 'rooms'"
                    (click)="active_tab.set('rooms')"
                >
                    Rooms
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1 hover:bg-base-300"
                    [class.clear]="active_tab() !== 'lockers'"
                    (click)="active_tab.set('lockers')"
                >
                    Lockers
                </button>
            </div>
            <div class="flex flex-col space-y-2 pt-2">
                @for (lvl of levels_free | async; track lvl) {
                    <a btn matRipple class="inverse w-full space-x-4 text-left">
                        <icon class="text-xl">desk</icon>
                        <div class="flex-1">
                            {{ lvl.display_name || lvl.name }}
                        </div>
                        <div class="rounded bg-base-200 px-2 py-1 text-xs">
                            0 free
                        </div>
                        <icon class="text-xl">chevron_right</icon>
                    </a>
                }
            </div>
            <a btn matRipple class="clear w-full underline"> View Live Map </a>
        </div>
    `,
    imports: [CommonModule, MatRippleModule, IconComponent],
})
export class LandingAvailableNowComponent {
    private _state = inject(LandingStateService);

    public readonly active_tab = signal('desks');
    public readonly levels_free = this._state.level_occupancy;
}
