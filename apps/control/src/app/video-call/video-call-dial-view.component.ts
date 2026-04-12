import {
    Component,
    computed,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';
import { DialpadComponent } from '../ui/dialpad.component';
import { VideoCallStateService } from './video-call-state.service';

@Component({
    selector: 'video-call-dial-view',
    template: `
        <div class="flex justify-center">
            @if (!loading()) {
                <ng-container class="">
                    <dialpad (pressed)="addDigit($event)"></dialpad>
                    <div class="flex flex-col" [class.pt-8]="!redirect()">
                        <p class="px-2 pt-4">
                            {{ 'APP.CONTROL.VC_ENTER_CODE' | translate }}
                        </p>
                        <div class="w-full p-2">
                            <mat-form-field
                                appearance="outline"
                                class="h-12 w-full"
                            >
                                <input
                                    matInput
                                    [(ngModel)]="dial_number"
                                    [placeholder]="
                                        'APP.CONTROL.VC_DIAL' | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="w-full p-2">
                            <button
                                btn
                                matRipple
                                class="w-full"
                                [disabled]="!dial_number"
                                (click)="joinConference()"
                            >
                                {{ 'APP.CONTROL.JOIN' | translate }}
                            </button>
                        </div>
                        <div class="w-full px-2">
                            @let show_pip = show_camera_pip();
                            <button
                                btn
                                matRipple
                                class="w-full"
                                (click)="toggleCamera()"
                                [class.inverse]="show_pip"
                            >
                                <div class="flex items-center space-x-4">
                                    <icon>{{
                                        !show_pip
                                            ? 'visibility_off'
                                            : 'visibility'
                                    }}</icon>
                                    <span>{{
                                        show_pip
                                            ? 'Hide Camera PIP'
                                            : 'Show Camera PIP'
                                    }}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </ng-container>
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'APP.CONTROL.VC_JOINING' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        DialpadComponent,
    ],
})
export class VideoCallDialViewComponent {
    private _control = inject(ControlStateService);
    private _call = inject(VideoCallStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly redirect = input(true);
    public readonly close = output<void>();

    public dial_number = '';
    public readonly loading = signal(false);
    public readonly call = this._call.call;
    private readonly _show_camera_pip = toSignal(this._call.show_camera_pip, {
        initialValue: null,
    });
    public readonly show_camera_pip = computed(() => !!this._show_camera_pip());

    public readonly toggleCamera = async () =>
        this._call.showCameraPIP(!this.show_camera_pip());

    public get id() {
        return this._control.id;
    }

    public addDigit(digit: string) {
        digit && digit !== '\b'
            ? (this.dial_number += digit)
            : (this.dial_number = this.dial_number.substr(
                  0,
                  this.dial_number.length - 1,
              ));
    }

    public async joinConference() {
        if (!this.dial_number) return;
        const system_id = this._control.id;
        const mod = getModule(system_id, 'VidConf');
        this.loading.set(true);
        await mod.execute('dial', [this.dial_number]);
        this.loading.set(false);
        if (this.redirect()) {
            this._router.navigate(['call'], { relativeTo: this._route });
        }
        // TODO: The 'emit' function requires a mandatory void argument
        this.close.emit();
        this.dial_number = '';
    }
}
