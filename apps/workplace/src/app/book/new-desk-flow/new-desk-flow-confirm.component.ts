import { Component, Input, Optional } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { BookingFormService } from "@placeos/bookings";
import { BaseClass } from "@placeos/common";
import { Desk, OrganisationService } from "@placeos/organisation";


@Component({
    selector: 'new-desk-flow-confirm',
    styles: [`
        section > app-icon {
            font-size: 1.5rem;
            margin-top: 0.3rem;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: medium;
            margin-bottom: 0.5rem;
        }

        h3 {
            font-size: 1.25rem;
            font-weight: medium;
            margin: 0.5rem 0;
        }
    `
    ],
    template: `
        <button mat-icon-button *ngIf="show_close" (click)="dismiss()">
            <app-icon>close</app-icon>
        </button>
        <header class="flex items-center justify-between px-2">
            <h2>Confirm Desk Booking</h2>
            <mat-spinner diameter="32" *ngIf="loading | async"></mat-spinner>
        </header>
        <section period class="flex space-x-1 py-4 px-2">
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3>{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <app-icon>calendar_today</app-icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>schedule</app-icon>
                    <div time>
                        {{
                            booking.all_day
                                ? 'All Day'
                                : (booking.date | date: 'shortTime') +
                                  ' - ' +
                                  (booking.date + booking.duration * 60 * 1000
                                      | date: 'h:mm a (z)')
                        }}
                    </div>
                </div>
            </div>
        </section>
        <section desk class="flex space-x-1 py-4 px-2 border-t" *ngIf="booking_asset?.id">
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3>{{booking_asset?.name || booking_asset?.id || ''}}</h3>
                <div class="flex items-center space-x-2">
                    <app-icon>person</app-icon>
                    <span>Single desk</span>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>place</app-icon>
                    <div>{{ location }}</div>
                </div>
                <ng-container *ngFor="let feat of booking_asset.features">
                    <div class="flex items-center space-x-2">
                        <app-icon>arrow_upward</app-icon>
                        <div>{{ feat }}</div>
                    </div>
                </ng-container>
            </div>
        </section>
        <footer class="p-2 w-full border-t border-gray-200 mt-4">
            <button
                mat-button
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
            >
                Confirm
            </button>
            <button
                mat-button
                class="inverse w-full"
                *ngIf="loading | async"
            >
                Undo
            </button>
        </footer>
    `
})
export class NewDeskFlowConfirmComponent extends BaseClass{
    @Input() public show_close: boolean = false;

    public readonly loading = this._state.loading;

    public readonly postForm = async () => {
        await this._state.postForm();
        this.dismiss(true);
    }
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e)

    public get booking(){
        return this._state.form.value as any;
    }

    public get booking_asset(){
        return this.booking.booking_asset as Desk;
    }

    public get location(){
        const building = this._org.buildings.find(
            b => b.id === this.booking_asset?.zone?.parent_id
        );
        const level = this._org.levels.find(l => l.id === this.booking_asset?.zone?.id);
        return `${level?.display_name || level?.name}${building ? ',':''} ${building?.address || building?.display_name || building?.name || ''}`
    }

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        @Optional() private _sheet_ref: MatBottomSheetRef
    ){ super(); }
}