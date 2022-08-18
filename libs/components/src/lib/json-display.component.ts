import { Component, Input, Optional, SimpleChanges } from "@angular/core";
import { CustomTooltipData } from "./custom-tooltip.component";

@Component({
    selector: 'json-display',
    template: `
        <div class="bg-white dark:bg-neutral-600 shadow rounded overflow-auto max-w-[80vw] max-h-[80vh] p-2">
            <pre class="font-mono text-sm bg-black/10 p-2">{{ formatted_json }}</pre>
        </div>
    `
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
