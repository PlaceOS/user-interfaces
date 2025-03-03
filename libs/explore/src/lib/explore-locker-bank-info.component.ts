import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { MatDialog } from '@angular/material/dialog';

import { ExploreLockerBankModalComponent } from './explore-locker-bank-modal.component';
import { Locker, LockerBank } from 'libs/bookings/src/lib/locker.class';

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
            class="pointer-events-auto relative h-full w-full"
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
                class="pointer-events-auto relative h-full w-full"
            ></div>
        </button>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id"
                [class]="
                    'pointer-events-none absolute left-0 top-0 rounded bg-base-100 p-4 shadow ' +
                    x_pos +
                    ' ' +
                    y_pos
                "
            >
                <h3 class="font-medium">{{ bank.name }}</h3>
                <p class="whitespace-nowrap text-sm">
                    {{
                        'EXPLORE.LOCKERS_USE'
                            | translate
                                : {
                                      used: in_use_count,
                                      count: bank.lockers.length || 1,
                                  }
                    }}
                </p>
            </div></ng-template
        >
    `,
    styles: [``],
    standalone: false,
})
export class ExploreLockerBankInfoComponent implements OnInit {
    public bank: LockerBank = this._details.bank;
    public in_use_count: number = this._details.in_use_count;
    public y_pos: 'top' | 'bottom';
    public x_pos: 'left' | 'right';

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: LockerBankInfoData,
        private _element: ElementRef<HTMLElement>,
        private _dialog: MatDialog,
    ) {}

    public ngOnInit(tries = 0) {
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
