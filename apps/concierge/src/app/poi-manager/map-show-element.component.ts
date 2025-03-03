import { Component, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';

@Component({
    selector: 'map-show-element',
    template: `
        <div
            class="relative h-full w-full border-4"
            [class.border-warning]="hover"
            [class.border-success]="!hover"
        >
            <div
                class="absolute inset-0 opacity-40"
                [class.bg-warning]="hover"
                [class.bg-success]="!hover"
            ></div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class MapShowElementComponent {
    constructor(@Inject(MAP_FEATURE_DATA) private _data: { hover: boolean }) {}

    public get hover() {
        return !!this._data?.hover;
    }
}
