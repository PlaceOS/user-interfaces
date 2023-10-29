import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { DashboardDeliveryModalComponent } from './dashboard-delivery-modal.component';

@Component({
    selector: 'dashboard-deliveries',
    template: `
        <h3 class="m-0 my-2 font-medium text-xl">Deliveries</h3>
        <div class="bg-base-100 shadow p-2 rounded">
            <div class="divide-y" *ngIf="deliveries?.length; else empty_state">
                <div
                    class="flex items-center py-2"
                    *ngFor="let item of deliveries"
                >
                    <div class="flex-1 pl-2">
                        <div class="">
                            {{ item?.name || 'Untitled Delivery' }}
                        </div>
                        <div class="text-xs opacity-60">
                            {{
                                item && item.received
                                    ? (item.received | date: 'medium')
                                    : 'Not received'
                            }}
                        </div>
                    </div>
                    <div
                        class="m-4 h-2 w-2 rounded-full"
                        [class.bg-warning]="!item.received"
                        [class.bg-success]="item.received"
                    ></div>
                </div>
                <button
                    matRipple
                    class="w-full mt-2"
                    (click)="registerDelivery()"
                >
                    Register Delivery
                </button>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="p-8 flex items-center justify-center opacity-40">
                No registered deliveries
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class DashboardDeliveriesComponent {
    public deliveries = [
        { name: 'USB-C Cables', received: Date.now() },
        { name: 'Desk Fan' },
    ];

    constructor(private _dialog: MatDialog) {}

    public async registerDelivery() {
        const ref = this._dialog.open(DashboardDeliveryModalComponent);
        const details = await Promise.race([
            ref.componentInstance.events
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details.reason !== 'done') return;
        this.deliveries.push(details.metadata);
        ref.close();
    }
}
