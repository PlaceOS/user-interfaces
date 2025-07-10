import { Component, input } from '@angular/core';

@Component({
    selector: 'zoom-phone-controls',
    template: `
        <div class="h-full w-full overflow-hidden">
            <iframe
                src="https://applications.zoom.us/integration/phone/embeddablephone/home"
                id="zoom-embeddable-phone-iframe"
                allow="clipboard-read; clipboard-write https://applications.zoom.us"
                class="h-full w-full"
            ></iframe>
        </div>
    `,
    styles: [``],
})
export class ZoomPhoneControlsComponent {
    public readonly mod = input('');
}
