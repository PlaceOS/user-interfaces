import { Component, Input, Optional, SimpleChanges } from '@angular/core';
import { CustomTooltipData } from './custom-tooltip.component';

@Component({
    selector: 'json-display',
    template: `
        <div
            class="bg-base-100 shadow rounded overflow-auto max-w-[80vw] max-h-[80vh] p-2 border border-base-300"
        >
            <pre
                class="font-mono text-sm bg-base-200 p-2 rounded break-all w-full"
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
})
export class JsonDisplayComponent {
    @Input() public json: Object;

    public formatted_json: string;

    constructor(@Optional() _data: CustomTooltipData) {
        this.json = _data?.data || '';
        this._updateFormatting();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.json) {
            this._updateFormatting();
        }
    }

    private _updateFormatting() {
        this.formatted_json = JSON.stringify(this.json, undefined, 4);
    }
}
