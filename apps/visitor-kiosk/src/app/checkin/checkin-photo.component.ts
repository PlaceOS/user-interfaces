import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { notifyError } from '@user-interfaces/common';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-photo',
    template: `
        <div class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center p-4" *ngIf="!loading; else load_state">
            <h3 class="text-xl mb-4">Take a photo to continue</h3>
            <a-take-photo (photoAccepted)="handlePhoto($event)"></a-take-photo>
            <a
                mat-icon-button
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">close</app-icon>
            </a>
        </div>
        <ng-template #load_state>
            <div class="flex flex-col items-center m-auto">
                <mat-spinner [diameter]="48"></mat-spinner>
                <div class="my-4 text-lg text-white">
                    Printing guest pass...
                </div>
            </div>
        </ng-template>
    `,
    styles: [`
        :host {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .absolute {
            position: absolute;
        }
    `]
})
export class CheckinPhotoComponent {
    /** Whether guest pass is being loaded */
    public loading: boolean;

    constructor(private _checkin: CheckinStateService, private _router: Router) { }

    public async handlePhoto(event: any) {
        if (!event) {
            return notifyError('Error saving image, please try again');
        }
        this.loading = true;
        this._checkin.setPhoto(event);
        await this._checkin.printPass().catch((e) => {
            this.loading = false;
            notifyError(e);
            throw e;
        });
        this.loading = false;
        this._router.navigate(['/checkin', 'results']);
    }
}
