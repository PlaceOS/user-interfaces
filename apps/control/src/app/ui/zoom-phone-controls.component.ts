import { Component, ElementRef, input, OnInit, viewChild } from '@angular/core';
import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'zoom-phone-controls',
    template: `
        <div class="h-full w-full overflow-hidden">
            <iframe
                #zoom_phone
                src="https://applications.zoom.us/integration/phone/embeddablephone/home"
                id="zoom-embeddable-phone-iframe"
                allow="clipboard-read; clipboard-write https://applications.zoom.us"
                class="h-full w-full"
            ></iframe>
        </div>
    `,
    styles: [``],
})
export class ZoomPhoneControlsComponent extends AsyncHandler implements OnInit {
    public readonly mod = input('');
    public readonly zoom_phone_el =
        viewChild<ElementRef<HTMLIFrameElement>>('zoom_phone');

    public ngOnInit() {
        const on_event = (e) => this._handleMessage(e);
        window.addEventListener('message', on_event);
        this.subscription('zoom_frame_messages', () =>
            window.removeEventListener('message', on_event),
        );
    }

    private _handleMessage(event: MessageEvent) {
        const data = event.data;
        if (!data) return;
        console.log('Zoom Phone Message Received:', data);
    }
}
