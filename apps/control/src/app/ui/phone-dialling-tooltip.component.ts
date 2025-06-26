import { Component, inject } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'phone-dialling-tooltip',
    template: `
        <div
            class="my-2 flex flex-col items-center space-y-2 rounded bg-base-100 p-4 shadow"
        >
            <mat-form-field appearance="outline" class="h-[3.25rem] w-full">
                <input
                    matInput
                    readonly
                    [ngModel]="(system | async)?.phone"
                    [placeholder]="'APP.CONTROL.PHONE' | translate"
                />
                @if ((system | async)?.phone) {
                    <button icon matRipple matSuffix (click)="clear()">
                        <icon>close</icon>
                    </button>
                }
            </mat-form-field>
            <dialpad [inline]="true" (pressed)="handleInput($event)"></dialpad>
            @if (!((system | async)?.offhook || (system | async)?.ringing)) {
                <button btn matRipple class="w-full" (click)="dialPhone()">
                    {{ 'APP.CONTROL.PHONE_DIAL' | translate }}
                </button>
            }
            @if ((system | async)?.offhook || (system | async)?.ringing) {
                <button btn matRipple class="inverse w-full" (click)="hangup()">
                    {{ 'APP.CONTROL.PHONE_HANGUP' | translate }}
                </button>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class PhoneDiallingTooltipComponent {
    private _state = inject(ControlStateService);

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
}
