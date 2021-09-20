import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomTooltipData } from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { take } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { VideoCallStateService } from '../video-call/video-call-state.service';

@Component({
    selector: 'video-conf-tooltip',
    template: `
        <div
            class=" my-2 bg-white shadow rounded flex flex-col items-center"
            *ngIf="!(call | async); else enabled_state"
        >
            <ng-container *ngIf="!loading; else load_state">
                <p class="px-4 pt-4">Enter your video conference code</p>
                <div class="p-4 w-full">
                    <mat-form-field appearance="outline" class="h-12 w-full">
                        <input
                            matInput
                            [(ngModel)]="dial_number"
                            placeholder="Dial number..."
                        />
                    </mat-form-field>
                </div>
                <dialpad (pressed)="addDigit($event)"></dialpad>
                <div class="p-4 w-full">
                    <button
                        mat-button
                        class="w-full"
                        [disabled]="!dial_number"
                        (click)="joinConference()"
                    >
                        Join
                    </button>
                </div>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div
                class="flex flex-col items-center justify-center p-16 space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Joining video conference...</p>
            </div>
        </ng-template>
        <ng-template #enabled_state>
            <div
                class=" my-2 p-2 bg-white shadow rounded flex flex-col items-center space-y-2"
            >
                <h3 class="p-2 w-full text-center font-medium">In Call</h3>
                <a
                    button
                    mat-button
                    class="w-40"
                    [routerLink]="['/panel', id, 'call']"
                    routerLinkActive="inverse"
                >
                    View Call
                </a>
                <a
                    button
                    mat-button
                    class="w-40"
                    [routerLink]="['/panel', id]"
                    [routerLinkActiveOptions]="{exact: true}"
                    routerLinkActive="inverse"
                    >View Inputs</a
                >
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class VideoConferenceTooltipComponent {
    public dial_number = '';
    public loading = false;
    public readonly call = this._call.call;

    public get id() {
        return this._control.id;
    }

    constructor(
        private _control: ControlStateService,
        private _call: VideoCallStateService,
        @Inject(CustomTooltipData) private _ref: any,
        private _router: Router,
        private _route: ActivatedRoute
    ) {}

    public addDigit(digit: string) {
        this.dial_number += digit;
    }

    public async joinConference() {
        if (!this.dial_number) return;
        const system_id = this._control.id;
        const mod = getModule(system_id, 'VidConf');
        this.loading = true;
        await mod.execute('dial', [this.dial_number]);
        this.loading = false;
        this._router.navigate(['call'], { relativeTo: this._route });
        this._ref.close();
    }
}
