import { Component, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';

@Component({
    selector: 'map-show-element',
    template: `
        <div
            class="relative w-full h-full border-2"
            [class.border-secondary]="hover"
            [class.border-primary]="!hover"
        >
            <div
                class="opacity-30 absolute inset-0"
                [class.bg-secondary]="hover"
                [class.bg-primary]="!hover"
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
