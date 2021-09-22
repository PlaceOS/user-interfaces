import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';
import { VideoCallStateService } from './video-call-state.service';

@Component({
    selector: 'video-call-dial-view',
    template: `
        <div class="flex flex-col">
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
    `,
    styles: [``],
})
export class VideoCallDialViewComponent {
    @Output() public close = new EventEmitter<void>();

    public dial_number = '';
    public loading = false;
    public readonly call = this._call.call;

    public get id() {
        return this._control.id;
    }

    constructor(
        private _control: ControlStateService,
        private _call: VideoCallStateService,
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
        this.close.emit();
    }}
