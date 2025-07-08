import { Component, SimpleChanges, inject, input } from '@angular/core';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'json-display',
    template: `
        <div
            class="max-h-[80vh] max-w-[80vw] overflow-auto rounded border border-base-300 bg-base-100 p-2 shadow"
        >
            <pre
                class="w-full break-all rounded bg-base-200 p-2 font-mono text-sm"
                >{{ formatted_json }}</pre
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
    standalone: false,
})
export class JsonDisplayComponent {
    public readonly json = input<Object>(undefined);

    public formatted_json: string;

    constructor() {
        const _data = inject(CustomTooltipData, { optional: true });

        this.json = _data?.data || '';
        this._updateFormatting();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.json) {
            this._updateFormatting();
        }
    }

    private _updateFormatting() {
        this.formatted_json = JSON.stringify(this.json(), undefined, 4);
    }
}
