import { Component, Input } from '@angular/core';
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
                [mod]="mod"
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
        <div
            class="flex flex-wrap p-8 items-center justify-center"
            *ngIf="channel_list?.length"
        >
            <button
                matRipple
                class="w-32 h-28 m-2 flex flex-col items-center justify-center border border-base-200 rounded space-y-2"
                [class.bg-base-200]="channel_url !== item.channel"
                [class.bg-primary]="channel_url === item.channel"
                [class.text-white]="channel_url === item.channel"
                *ngFor="let item of channel_list"
                (click)="setChannel(item.channel)"
            >
                <img
                    *ngIf="item?.icon"
                    [src]="item.icon"
                    class="max-h-[3.5rem] max-w-[3.5rem]"
                />
                <div class="">{{ item.name }}</div>
            </button>
        </div>
    `,
})
export class TVControlsComponent extends AsyncHandler {
    @Input() public mod = '';

    public channel_list = [];
    public channel_url = '';

    public get system_id() {
        return this._state.id;
    }

    constructor(private _state: ControlStateService) {
        super();
    }

    public setChannel(url: string) {
        const mod = getModule(this._state.id, this.mod);
        mod.execute('channel', [url]);
    }
}
