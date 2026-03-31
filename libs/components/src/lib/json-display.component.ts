import {
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'json-display',
    template: `
        <div
            class="border-base-300 bg-base-100 max-h-[80vh] max-w-[80vw] overflow-auto rounded-sm border p-2 shadow-sm"
        >
            <pre
                class="bg-base-200 w-full rounded-sm p-2 font-mono text-sm break-all"
                >{{ formatted_json() }}</pre
            >
        </div>
    `,
    styles: [
        `
            pre {
                white-space: pre-wrap; /* Since CSS 2.1 */
                white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
                white-space: -pre-wrap; /* Opera 4-6 */
                white-space: -o-pre-wrap; /* Opera 7 */
                word-wrap: break-word; /* Internet Explorer 5.5+ */
            }
        `,
    ],
})
export class JsonDisplayComponent {
    public readonly json = input<Object>(undefined);

    private readonly _json = signal<any>(undefined);

    public readonly formatted_json = computed(() =>
        JSON.stringify(this._json(), undefined, 4),
    );

    constructor() {
        const _data = inject(CustomTooltipData, { optional: true });

        if (_data?.data) {
            this._json.set(_data.data);
        }

        effect(() => {
            const value = this.json();
            if (value !== undefined) {
                this._json.set(value);
            }
        });
    }
}
