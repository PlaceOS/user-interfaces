import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { BaseCheckinComponent, CheckinStage } from '../base-checkin';

import { notifyError, SettingsService } from '@user-interfaces/common';
import { GuestsService } from '@user-interfaces/users';
import { EventsService } from '@user-interfaces/events';

import * as dayjs from 'dayjs';
import * as isBewtween from 'dayjs/plugin/isBetween';
dayjs.extend(isBewtween);

declare let Instascan;

@Component({
    selector: 'checkin-qr-scan',
    templateUrl: './qr-scan.component.html',
    styleUrls: ['./qr-scan.component.scss'],
})
export class CheckinQrScanComponent
    extends BaseCheckinComponent
    implements AfterViewInit, OnDestroy {
    public model: any = { email: '' };

    public scanner = null;
    public unavailable = null;
    private get scanOpts(): any {
        return {
            video: document.getElementById('video'),
            backgroundScan: false,
            scanPeriod: 50,
        };
    }

    @ViewChild('video', { static: false }) private video: ElementRef;

    constructor(
        protected _router: Router,
        protected _settings: SettingsService,
        private _guests: GuestsService,
        private _events: EventsService
    ) {
        super(_router, _settings);
        this.stage = CheckinStage.QRCode;
    }

    public ngAfterViewInit() {
        this.initQR();
    }

    public ngOnDestroy() {
        this.stopFeed();
    }

    public initQR() {
        if (!this.video) {
            return this.timeout('init_qr', () => this.initQR());
        }
        this.timeout(
            'init_qr',
            async () => {
                try {
                    const has_access = await window.navigator.mediaDevices.getUserMedia({
                        video: true,
                    });
                } catch (err) {
                    console.error('Failed to get access to camera', err);
                    this.unavailable = true;
                    return;
                }

                this.scanner = null;
                this.scanner = new Instascan.Scanner(this.scanOpts);
                this.scanner.addListener('scan', (content) => this.processQrCode(content));

                try {
                    const cameras = await Instascan.Camera.getCameras();
                    if (cameras.length > 0) {
                        this.scanner.start(cameras[0]);
                    } else {
                        console.error('CheckinQrScanComponent::initQR No cameras found.');
                    }
                } catch (e) {
                    console.error(e);
                }
            },
            50
        );
    }

    public stopFeed() {
        this.clearTimeout('init_qr');
        if (this.video && this.video.nativeElement.srcObject) {
            const track = this.video.nativeElement.srcObject.getTracks()[0];
            if (track) {
                track.stop();
            }
        }
        if (this.scanner) {
            this.scanner.stop();
            this.scanner = null;
        }
    }

    public processQrCode(code) {
        this.setLoading('Checking QR code...');
        const track = this.video.nativeElement.srcObject.getTracks()[0];
        track.stop();
        const invalidQR = () => {
            this.setLoading(false);
            notifyError('Invalid QRCode');
            this.initQR();
        };
        this.timeout(
            'process',
            async () => {
                this.setLoading(true);
                // code is suposed to be a string of 'email,event_id'
                const chunks = code.split(',');
                if (chunks.length !== 2) {
                    invalidQR();
                } else {
                    this.getGuestAndEvent(true, chunks[0], chunks[1]);
                }
            },
            50
        );
    }

    public async search() {
        this.getGuestAndEvent(false, this.model.email);
    }

    private async getGuestAndEvent(qrCode: boolean, email: string, eventId: string = null) {
        this.setLoading(true);
        let event_id = eventId;
        this.visitor = await this.getGuest(email, qrCode);
        if (!event_id && !this.error) {
            event_id = await this.getGuestUpcoming(email);
        }
        if (!!event_id && !this.error) {
            this.booking = await this.getGuestEvent(event_id);
        }
        this.setLoading(false);
        if (!!this.error) {
            notifyError(this.error);
        }
        this.next();
    }

    private async getGuest(email: string, qrCode: boolean = false) {
        try {
            const visitor = await this._guests.show(email);
            return { ...visitor, qrCode };
        } catch (err) {
            this.error = 'Failed to load guest details';
            return null;
        }
    }

    private async getGuestUpcoming(email: string) {
        if (!!email) {
            let upcoming = [];
            try {
                upcoming = await this._guests.meetings(email);
            } catch (e) {
                this.error = `Failed to load upcoming visits for ${email}`;
                console.error(e);
                return null;
            }
            const start = dayjs();
            const end = dayjs().endOf('day');
            const filtered = upcoming
                .filter((f) => dayjs(f.event_start * 1000).isBetween(start, end))
                .sort((a, b) => a.event_start - b.event_start);
            if (filtered && filtered.length > 0) {
                return filtered[0].event_id;
            } else {
                this.error = `No upcoming events found for ${this.visitor.email} today`;
                return null;
            }
        }
    }

    private async getGuestEvent(eventId: string) {
        try {
            const event = await this._events.show(eventId);
            return event;
        } catch (err) {
            this.error = 'Failed to load event details';
            return null;
        }
    }
}
