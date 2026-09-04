import { Component, computed, inject } from '@angular/core';

import { MapObject } from '../data/types';
import { ALL_STATES, STATE_COLORS } from './availability';
import { EditorStateService } from './editor-state.service';

@Component({
    selector: 'map-studio-availability-panel',
    template: `
        <div class="flex h-full flex-col">
            <div
                class="border-base-300 flex items-center justify-between border-b px-3 py-2.5"
            >
                <span class="text-xs font-bold">Availability Preview</span>
                <label class="flex items-center gap-1.5 text-xs">
                    <input
                        type="checkbox"
                        class="accent-primary h-4 w-4"
                        [checked]="state.availability_enabled()"
                        (change)="toggle($event)"
                    />
                    <span>{{
                        state.availability_enabled() ? 'On' : 'Off'
                    }}</span>
                </label>
            </div>

            @if (!state.availability_enabled()) {
                <p class="text-base-content/60 p-4 text-xs">
                    Enable availability preview to simulate booking states on
                    desks and rooms.
                </p>
            } @else {
                <div class="border-base-300 flex gap-1.5 border-b p-2">
                    <button
                        btn
                        class="inverse min-h-0! flex-1 px-2! py-1! text-xs"
                        (click)="state.randomiseAvailability()"
                    >
                        Randomise
                    </button>
                    <button
                        btn
                        class="inverse min-h-0! flex-1 px-2! py-1! text-xs"
                        (click)="state.resetAvailability()"
                    >
                        Clear
                    </button>
                </div>

                <div class="border-base-300 border-b p-2">
                    <div
                        class="text-base-content/60 mb-1.5 text-xs font-semibold tracking-wide uppercase"
                    >
                        State legend
                    </div>
                    <div class="grid grid-cols-2 gap-1">
                        @for (entry of legend(); track entry.state) {
                            <div class="flex items-center gap-1.5 text-xs">
                                <span
                                    class="h-2.5 w-2.5 shrink-0 rounded-sm"
                                    [style.background]="entry.color"
                                ></span>
                                <span class="flex-1 truncate">
                                    {{ entry.state }}
                                </span>
                                @if (entry.count) {
                                    <span class="text-base-content/60">
                                        {{ entry.count }}
                                    </span>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto">
                    <div
                        class="text-base-content/60 border-base-300 border-b px-3 py-1.5 text-xs font-semibold tracking-wide uppercase"
                    >
                        Bookable objects ({{ state.bookable().length }})
                    </div>
                    @for (object of state.bookable(); track object.id) {
                        <div
                            class="border-base-300 hover:bg-base-200 flex cursor-pointer items-center gap-2 border-b px-3 py-1.5 text-xs"
                            (click)="state.cycleAvailability(object)"
                            (keyup.enter)="state.cycleAvailability(object)"
                            tabindex="0"
                            role="button"
                        >
                            <span
                                class="h-2.5 w-2.5 shrink-0 rounded-full"
                                [style.background]="colorFor(object)"
                            ></span>
                            <div class="min-w-0 flex-1">
                                <div class="truncate">
                                    {{ object.label || object.svg_id }}
                                </div>
                                <div class="text-base-content/60">
                                    {{ object.object_type }}
                                </div>
                            </div>
                            <span class="text-base-content/60">
                                {{ stateOf(object) || '--' }}
                            </span>
                        </div>
                    }
                    @if (!state.bookable().length) {
                        <p class="text-base-content/60 p-4 text-xs">
                            No desks or rooms to preview.
                        </p>
                    }
                </div>
            }
        </div>
    `,
})
export class AvailabilityPanelComponent {
    public readonly state = inject(EditorStateService);

    public readonly legend = computed(() => {
        const counts = new Map<string, number>();
        for (const value of Object.values(this.state.availability_states())) {
            counts.set(value, (counts.get(value) ?? 0) + 1);
        }
        return ALL_STATES.map((state) => ({
            state,
            color: STATE_COLORS[state],
            count: counts.get(state) ?? 0,
        }));
    });

    public readonly stateOf = (object: MapObject) =>
        this.state.availability_states()[object.id];

    public readonly colorFor = (object: MapObject) => {
        const value = this.stateOf(object);
        return value ? STATE_COLORS[value] : 'var(--base-300)';
    };

    public toggle(event: Event) {
        this.state.setAvailabilityEnabled(
            (event.target as HTMLInputElement).checked,
        );
    }
}
