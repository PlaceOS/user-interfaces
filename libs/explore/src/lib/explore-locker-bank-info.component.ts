import { Component, ElementRef, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { LockerBank } from 'libs/bookings/src/lib/lockers.service';

export interface LockerBankInfoData {
    bank: LockerBank;
    in_use_count: number;
    locker_count: number;
}

@Component({
    selector: 'explore-locker-bank-info',
    template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="h-full w-full pointer-events-auto relative"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'absolute rounded bg-white dark:bg-neutral-800 p-4 top-0 left-0 shadow pointer-events-none ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <h3>{{ bank.name }}</h3>
                <p>
                    {{ in_use_count }} lockers in use of {{ bank.locker_count }}
                </p>
            </div></ng-template
        >
    `,
    styles: [``],
})
export class ExploreLockerBankInfoComponent {
    public bank: LockerBank = this._details.bank;
    public in_use_count: number = this._details.in_use_count;
    public y_pos: 'top' | 'bottom';
    public x_pos: 'left' | 'right';

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: LockerBankInfoData,
        private _element: ElementRef<HTMLElement>
    ) {}

    public ngOnInit(tries: number = 0) {
        if (tries > 10) return;
        setTimeout(() => {
            const parent =
                this._element.nativeElement.parentElement?.parentElement;
            if (!parent) return this.ngOnInit(++tries);
            const position = {
                y: parseInt(parent.style.top, 10) / 100,
                x: parseInt(parent.style.left, 10) / 100,
            };
            this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
            this.x_pos = position.x >= 0.5 ? 'right' : 'left';
        }, 200);
    }
}
