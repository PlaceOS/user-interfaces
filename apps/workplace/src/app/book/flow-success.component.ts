import { Component, input } from '@angular/core';
import { currentUser } from '@placeos/common';

@Component({
    selector: 'flow-success',
    template: `
        <div
            name="success"
            class="bg-indigo-900 fixed inset-0 z-50 flex flex-col items-center justify-center"
        >
            <div class="mb-4 rounded-full bg-base-100 text-7xl text-success">
                <icon>done</icon>
            </div>
            <div class="mb-4 text-center text-lg leading-10 text-white">
                Thank you, your {{ type() }} booking was successful!<br />
                {{ extra() }}
                @if (extra()) {
                    <br />
                }
                An event has been added to {{ title }} calendar
            </div>
            <div class="flex items-center space-x-2">
                <a
                    btn
                    matRipple
                    class="w-32 border border-white"
                    [routerLink]="['/book', route()]"
                    [queryParams]="{}"
                >
                    New Booking
                </a>
                <a
                    btn
                    matRipple
                    class="w-32 border border-white"
                    [routerLink]="['/your-bookings']"
                    [queryParams]="{ email: calendar() }"
                >
                    Your Bookings
                </a>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class FlowSuccessComponent {
    public readonly calendar = input<string>(undefined);
    public readonly extra = input('');
    public readonly route = input('spaces');
    public readonly type = input('space');

    public get is_host(): boolean {
        return this.calendar() === currentUser()?.email;
    }

    public get title() {
        return this.is_host ? 'your' : "the host'";
    }
}
