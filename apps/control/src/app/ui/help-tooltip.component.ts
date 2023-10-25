import { Component } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-base-100 shadow rounded flex flex-col items-center space-y-2"
        >
            <h3 class="mb-2 text-xl font-medium">Need help?</h3>
            <p>
                Contact
                <span contact>{{
                    support_contact || ' your administrator'
                }}</span>
                if you require <br />assisatance at
                <a
                    email
                    class="underline"
                    [href]="'mailto:' + (support_email || 'support@place.tech')"
                    >{{ support_email || 'support@place.tech' }}</a
                >
                or phone
                <a
                    phone
                    class="underline"
                    [href]="'tel:' + (support_phone || '0412345678')"
                    >{{ support_phone || '0412345678' }}</a
                >
            </p>
        </div>
    `,
    styles: [``],
})
export class HelpTooltipComponent {
    public support_contact: string;

    public support_email: string;

    public support_phone: string;

    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();

    constructor(
        private _state: ControlStateService,
        private _tooltip: CustomTooltipData
    ) {}
}
