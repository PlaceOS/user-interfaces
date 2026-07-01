import {
    Component,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { notifyError } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { TakePhotoComponent } from '../components/take-photo.component';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-photo',
    template: `
        @if (!loading()) {
            <div
                class="bg-base-100 relative flex w-[24rem] flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
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
        } @else {
            <div class="m-auto flex flex-col items-center">
                <mat-spinner [diameter]="48"></mat-spinner>
                <div class="my-4 text-lg text-white">
                    {{ 'APP.VISITOR_KIOSK.PRINT_LOADING' | translate }}
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [TranslatePipe, MatProgressSpinnerModule, TakePhotoComponent],
})
export class CheckinPhotoComponent implements OnInit {
    private _checkin = inject(CheckinStateService);
    private _router = inject(Router);

    /** Whether guest pass is being loaded */
    public loading = signal(false);

    public ngOnInit() {
        this.loading.set(false);
    }

    public skip() {
        this._router.navigate(['/checkin', 'results']);
    }

    public async handlePhoto(event: any) {
        if (!event) return notifyError('Error saving image, please try again');
        this.loading.set(true);
        this._checkin.setPhoto(event);
        // await this._checkin.printPass().catch((e) => {
        //     this.loading.set(false);
        //     notifyError(e);
        //     throw e;
        // });
        this.loading.set(false);
        this._router.navigate(['/checkin', 'results']);
    }
}
