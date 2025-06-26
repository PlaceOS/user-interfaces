import { Component, Input, inject } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'tv-controls',
    template: `
        <div hidden [attr.mod]="mod">
            <i
                binding
                [(model)]="channel_list"
                [sys]="system_id"
                mod="System"
                bind="channel_details"
            ></i>
            <i
                binding
                [(model)]="channel_url"
                [sys]="system_id"
                [mod]="mod"
                bind="current_channel"
            ></i>
        </div>
        @if (channel_list?.length) {
            <div class="flex flex-wrap items-center justify-center p-8">
                @for (item of channel_list; track item) {
                    <button
                        matRipple
                        class="m-2 flex h-28 w-32 flex-col items-center justify-center space-y-2 rounded border border-base-200"
                        [class.bg-base-200]="channel_url !== item.channel"
                        [class.bg-primary]="channel_url === item.channel"
                        [class.text-white]="channel_url === item.channel"
                        (click)="setChannel(item.channel)"
                    >
                        @if (item?.icon) {
                            <img
                                [src]="item.icon"
                                class="max-h-[3.5rem] max-w-[3.5rem]"
                            />
                        }
                        <div class="">{{ item.name }}</div>
                    </button>
                }
            </div>
        }
    `,
    standalone: false,
})
export class TVControlsComponent extends AsyncHandler {
    private _state = inject(ControlStateService);

    @Input() public mod = '';

    public channel_list = [];
    public channel_url = '';

    public get system_id() {
        return this._state.id;
    }

    public setChannel(url: string) {
        const mod = getModule(this._state.id, this.mod);
        mod.execute('channel', [url]);
    }
}
