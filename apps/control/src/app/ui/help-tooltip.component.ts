import { Component, inject } from '@angular/core';
import { CustomTooltipData } from 'libs/components/src/lib/custom-tooltip.component';

import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-4 shadow"
        >
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.HELP_CONTACT' | translate }}
            </h3>
            <p
                [innerHTML]="
                    'APP.CONTROL.HELP_CONTACT_MSG'
                        | translate
                            : {
                                  contact:
                                      support_contact || ' your administrator',
                                  email: support_email || 'support@place.tech',
                                  phone: support_phone || '0412345678',
                              }
                        | sanitize
                "
            ></p>
        </div>
    `,
    styles: [
        `
            a {
                text-decoration-line: underline;
            }
        `,
    ],
    standalone: false,
})
export class HelpTooltipComponent {
    private _state = inject(ControlStateService);
    private _tooltip = inject(CustomTooltipData);

    public support_contact: string;

    public support_email: string;

    public support_phone: string;

    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();
}
