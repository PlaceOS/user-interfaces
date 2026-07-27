import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';
import { DialpadComponent } from './dialpad.component';

@Component({
    selector: 'phone-dialling-tooltip',
    template: `
        <div
            class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-4 shadow-sm"
        >
            <mat-form-field appearance="outline" class="h-13 w-full">
                <input
                    matInput
                    readonly
                    [ngModel]="system()?.phone"
                    [placeholder]="'FORM.PHONE' | translate"
                />
                @if (system()?.phone) {
                    <button icon matRipple matSuffix (click)="clear()">
                        <icon>close</icon>
                    </button>
                }
            </mat-form-field>
            <dialpad [inline]="true" (pressed)="handleInput($event)"></dialpad>
            @if (!(system()?.offhook || system()?.ringing)) {
                <button btn matRipple class="w-full" (click)="dialPhone()">
                    {{ 'APP.CONTROL.PHONE_DIAL' | translate }}
                </button>
            }
            @if (system()?.offhook || system()?.ringing) {
                <button btn matRipple class="inverse w-full" (click)="hangup()">
                    {{ 'APP.CONTROL.PHONE_HANGUP' | translate }}
                </button>
            }
        </div>
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        DialpadComponent,
        FormsModule,
    ],
})
export class PhoneDiallingTooltipComponent {
    private _state = inject(ControlStateService);

    public readonly phone = signal('');
    public readonly system = this._state.system;

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
