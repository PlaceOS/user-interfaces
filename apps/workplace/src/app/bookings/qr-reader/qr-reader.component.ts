import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserQRCodeReader } from '@zxing/library';
import { BaseClass } from '@user-interfaces/common';

@Component({
    selector: 'qr-reader',
    templateUrl: './qr-reader.component.html',
    styleUrls: ['./qr-reader.component.scss'],
})
export class QrReaderComponent extends BaseClass implements OnInit {
    /** Whether to show the overlay menu */
    public show_menu: boolean;
    /** Boolean to toggle scan/code */
    public is_scanning: boolean = true;
    /** Room Code input value */
    public room_code: string;
    /** Menu event */
    @Output() public menu = new EventEmitter(false);
    /** Device ID of Camera */
    private device_id: string;

    constructor(private _router: Router) {
        super();
    }

    public ngOnInit(): void {
        const codeReader = new BrowserQRCodeReader();
        codeReader.getVideoInputDevices().then((videoInputDevices) => {
            this.device_id = videoInputDevices[0].deviceId;
            codeReader
                .decodeFromInputVideoDevice(this.device_id, 'video')
                .then((result): any => {
                    const url = result['text'];
                    const hashindex = url.indexOf('/#/');
                    // could just whole page redirect to url
                    if (hashindex > 0) {
                        let regex = /[?&]([^=#]+)=([^&#]*)/g,
                            params = {},
                            match;
                        while ((match = regex.exec(url))) {
                            params[match[1]] = match[2];
                        }
                        this._router.navigate([url.split('/#')[1].split('?')[0]], params);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        });
    }
}
