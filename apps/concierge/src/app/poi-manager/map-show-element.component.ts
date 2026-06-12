import { Component, inject, signal } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/common';

@Component({
    selector: 'map-show-element',
    template: `
        <div
            class="relative h-full w-full border-4"
            [class.border-warning]="hover()"
            [class.border-success]="!hover()"
        >
            <div
                class="absolute inset-0 opacity-40"
                [class.bg-warning]="hover()"
                [class.bg-success]="!hover()"
            ></div>
        </div>
    `,
    styles: [``],
    imports: [],
})
export class MapShowElementComponent {
    private _data = inject<{
        hover: boolean;
    }>(MAP_FEATURE_DATA);

    public readonly hover = signal(!!this._data?.hover);
}
