import { Component, ElementRef, OnInit, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

import { Locker, LockerBank } from 'libs/bookings/src/lib/locker.class';
import { ExploreLockerBankModalComponent } from './explore-locker-bank-modal.component';

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
                [id]="bank().map_id || bank().id"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 rounded-sm p-4 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <h3 class="font-medium">{{ bank().name }}</h3>
                <p class="text-sm whitespace-nowrap">
                    {{
                        'EXPLORE.LOCKERS_USE'
                            | translate
                                : {
                                      used: in_use_count(),
                                      count: bank().lockers.length || 1,
                                  }
                    }}
                </p>
            </div></ng-template
        >
    `,
    styles: [``],
    imports: [TranslatePipe, CustomTooltipComponent],
})
export class ExploreLockerBankInfoComponent implements OnInit {
    private _details = inject<LockerBankInfoData>(MAP_FEATURE_DATA);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private _dialog = inject(MatDialog);

    public readonly bank = signal<LockerBank>(this._details.bank);
    public readonly in_use_count = signal(this._details.in_use_count);
    public readonly y_pos = signal<'top' | 'bottom'>('top');
    public readonly x_pos = signal<'left' | 'right'>('left');

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
            this.y_pos.set(position.y >= 0.5 ? 'bottom' : 'top');
            this.x_pos.set(position.x >= 0.5 ? 'right' : 'left');
        }, 200);
    }

    public openBankModal() {
        this._dialog.open(ExploreLockerBankModalComponent, {
            data: { ...this._details },
        });
    }
}
