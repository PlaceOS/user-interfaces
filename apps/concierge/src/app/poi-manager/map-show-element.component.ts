import { Component, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';

@Component({
    selector: 'map-show-element',
    template: `
        <div
            class="relative w-full h-full border-4"
            [class.border-warning]="hover"
            [class.border-success]="!hover"
        >
            <div
                class="opacity-40 absolute inset-0"
                [class.bg-warning]="hover"
                [class.bg-success]="!hover"
            ></div>
        </div>
    `,
    styles: [``],
})
export class MapShowElementComponent {
    constructor(@Inject(MAP_FEATURE_DATA) private _data: { hover: boolean }) {}

    public get hover() {
        return !!this._data?.hover;
    }
}
