import { Component, Input } from '@angular/core';
import { currentUser } from '@placeos/common';

@Component({
    selector: 'flow-success',
    template: `
        <div
            name="success"
            class="fixed inset-0 flex flex-col bg-indigo-900 items-center justify-center z-50"
        >
            <div class="text-7xl rounded-full bg-base-100 text-success mb-4">
                <app-icon>done</app-icon>
            </div>
            <div class="text-center text-lg text-white mb-4 leading-10">
                Thank you, your {{ type }} booking was successful!<br />
                {{ extra }} <br *ngIf="extra" />
                An event has been added to {{ title }} calendar
            </div>
            <div class="flex items-center space-x-2">
                <a
                    btn
                    matRipple
                    class="w-32 border border-white"
                    [routerLink]="['/book', route]"
                    [queryParams]="{}"
                >
                    New Booking
                </a>
                <a
                    btn
                    matRipple
                    class="w-32 border border-white"
                    [routerLink]="['/schedule']"
                    [queryParams]="{ email: calendar }"
                >
                    Your Bookings
                </a>
            </div>
        </div>
    `,
    styles: [``],
})
export class FlowSuccessComponent {
    @Input() public calendar: string;
    @Input() public extra = '';
    @Input() public route = 'spaces';
    @Input() public type = 'space';

    public get is_host(): boolean {
        return this.calendar === currentUser()?.email;
    }

    public get title() {
        return this.is_host ? 'your' : "the host'";
    }
}
