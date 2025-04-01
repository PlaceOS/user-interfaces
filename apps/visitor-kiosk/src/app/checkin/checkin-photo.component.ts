import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { notifyError } from '@placeos/common';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-photo',
    template: `
        <div
            class="relative flex w-[24rem] flex-col items-center overflow-hidden rounded bg-base-100 p-4 shadow"
            *ngIf="!loading; else load_state"
        >
            <h3 class="mb-4 text-xl">
                {{ 'APP.VISITOR_KIOSK.TAKE_PHOTO' | translate }}
            </h3>
            <a-take-photo
                (captured)="handlePhoto($event)"
                [back_text]="'APP.VISITOR_KIOSK.SKIP' | translate"
                (back)="skip()"
            ></a-take-photo>
        </div>
        <ng-template #load_state>
            <div class="m-auto flex flex-col items-center">
                <mat-spinner [diameter]="48"></mat-spinner>
                <div class="my-4 text-lg text-white">
                    {{ 'APP.VISITOR_KIOSK.PRINT_LOADING' | translate }}
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class CheckinPhotoComponent implements OnInit {
    /** Whether guest pass is being loaded */
    public loading = false;

    constructor(
        private _checkin: CheckinStateService,
        private _router: Router,
    ) {}

    public ngOnInit() {
        this.loading = false;
    }

    public skip() {
        this._router.navigate(['/checkin', 'results']);
    }

    public async handlePhoto(event: any) {
        if (!event) return notifyError('Error saving image, please try again');
        this.loading = true;
        this._checkin.setPhoto(event);
        // await this._checkin.printPass().catch((e) => {
        //     this.loading = false;
        //     notifyError(e);
        //     throw e;
        // });
        this.loading = false;
        this._router.navigate(['/checkin', 'results']);
    }
}
