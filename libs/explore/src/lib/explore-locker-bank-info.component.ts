import { Component, ElementRef, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { Locker, LockerBank } from 'libs/bookings/src/lib/lockers.service';
import { ExploreLockerBankModalComponent } from './explore-locker-bank-modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface LockerBankInfoData {
    bank: LockerBank;
    lockers: Locker[];
    in_use_count: number;
    locker_count: number;
}

@Component({
    selector: 'explore-locker-bank-info',
    template: `
        <button
            class="h-full w-full pointer-events-auto relative"
            (click)="openBankModal()"
        >
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
        </button>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'absolute rounded bg-base-100 p-4 top-0 left-0 shadow pointer-events-none ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <h3 class="font-medium">{{ bank.name }}</h3>
                <p class="whitespace-nowrap text-sm">
                    {{ in_use_count }} lockers in use of
                    {{ bank.lockers.length || 1 }}
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
        private _element: ElementRef<HTMLElement>,
        private _dialog: MatDialog
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

    public openBankModal() {
        this._dialog.open(ExploreLockerBankModalComponent, {
            data: { ...this._details },
        });
    }
}
