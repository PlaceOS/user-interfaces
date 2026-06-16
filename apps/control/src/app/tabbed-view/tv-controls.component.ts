import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    BindingDirective,
} from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'tv-controls',
    template: `
        <div hidden [attr.mod]="mod()">
            <i
                binding
                [(model)]="channel_list"
                [sys]="system_id"
                [mod]="mod()"
                bind="channel_details"
            ></i>
            <i
                binding
                [(model)]="channel_url"
                [sys]="system_id"
                [mod]="mod()"
                bind="current_channel"
            ></i>
        </div>
        @if (channel_list?.length) {
            <div class="flex flex-wrap items-center justify-center p-8">
                @for (item of channel_list; track item) {
                    <button
                        matRipple
                        class="border-base-200 m-2 flex h-28 w-32 flex-col items-center justify-center space-y-2 rounded-sm border"
                        [class.bg-base-200]="channel_url !== item.channel"
                        [class.bg-primary]="channel_url === item.channel"
                        [class.text-white]="channel_url === item.channel"
                        (click)="setChannel(item.channel)"
                    >
                        @if (item?.icon) {
                            <img
                                auth
                                [source]="item.icon"
                                class="max-h-14 max-w-14"
                            />
                        }
                        <div class="">{{ item.name }}</div>
                    </button>
                }
            </div>
        }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [BindingDirective, MatRippleModule, AuthenticatedImageDirective],
})
export class TVControlsComponent extends AsyncHandler {
    private _state = inject(ControlStateService);

    public readonly mod = input('');

    public channel_list = [];
    public channel_url = '';

    public get system_id() {
        return this._state.id;
    }

    public setChannel(url: string) {
        const mod = getModule(this._state.id, this.mod());
        mod.execute('channel', [url]);
    }
}
