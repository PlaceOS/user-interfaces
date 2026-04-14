import { Component, computed, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import {
    CustomTooltipData,
    SanitizePipe,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'help-tooltip',
    template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-4 shadow-sm"
        >
            <h3 class="mb-2 text-xl font-medium">
                {{ 'APP.CONTROL.HELP_CONTACT' | translate }}
            </h3>
            <p
                [innerHTML]="
                    'APP.CONTROL.HELP_CONTACT_MSG'
                        | translate
                            : {
                                  contact: support_details().contact,
                                  email: support_details().email,
                                  phone: support_details().phone,
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
    imports: [TranslatePipe, SanitizePipe],
})
export class HelpTooltipComponent {
    private _settings = inject(SettingsService);
    private _tooltip = inject(CustomTooltipData);

    public readonly support_details = computed(() => ({
        contact:
            this._settings.get('app.support_contact') || ' your administrator',
        email: this._settings.get('app.support_email') || 'support@place.tech',
        phone: this._settings.get('app.support_phone') || '0412345678',
    }));

    /** Close the tooltip */
    public readonly close = () => this._tooltip.close();
}
