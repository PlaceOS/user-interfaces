import { Component } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'phone-dialling-tooltip',
    template: `
        <div
            class="p-4 my-2 bg-base-100 shadow rounded flex flex-col items-center space-y-2"
        >
            <mat-form-field appearance="outline" class="w-full h-[3.25rem]">
                <input
                    matInput
                    readonly
                    [ngModel]="(system | async)?.phone"
                    placeholder="Phone Number"
                />
                <button
                    *ngIf="(system | async)?.phone"
                    icon
                    matRipple
                    matSuffix
                    (click)="clear()"
                >
                    <app-icon>close</app-icon>
                </button>
            </mat-form-field>
            <dialpad [inline]="true" (pressed)="handleInput($event)"></dialpad>
            <button
                btn
                matRipple
                class="w-full"
                (click)="dialPhone()"
                *ngIf="
                    !((system | async)?.offhook || (system | async)?.ringing)
                "
            >
                Dial Phone
            </button>
            <button
                *ngIf="(system | async)?.offhook || (system | async)?.ringing"
                btn
                matRipple
                class="w-full inverse"
                (click)="hangup()"
            >
                Hangup
            </button>
        </div>
    `,
    styles: [``],
})
export class PhoneDiallingTooltipComponent {
    public phone = '';
    public system = this._state.system;

    public get sys_id() {
        return this._state.id;
    }

    public async handleInput(char: string) {
        const mod = getModule(this._state.id, 'System');
        await mod.execute('qsc_dial_pad', [char]);
    }

    public async action(method: string) {
        const mod = getModule(this._state.id, 'System');
        await mod.execute(method);
    }

    public readonly dialPhone = () => this.action('qsc_dial_makecall');
    public readonly hangup = () => this.action('qsc_dial_hangup');
    public readonly clear = () => this.action('qsc_dial_pad_clear');

    constructor(private _state: ControlStateService) {}
}
