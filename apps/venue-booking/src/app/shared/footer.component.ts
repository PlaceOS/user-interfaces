import { Component } from '@angular/core';
import { settingSignal } from '@placeos/common';

@Component({
    selector: 'app-footer',
    template: `
        <div
            class="bg-neutral text-neutral-content flex items-center justify-center p-4"
        >
            {{ copyright() }}
        </div>
    `,
    styles: [``],
    imports: [],
})
export class FooterComponent {
    public readonly copyright = settingSignal(
        'copyright',
        `© ${new Date().getFullYear()} PlaceOS`,
    );
}
