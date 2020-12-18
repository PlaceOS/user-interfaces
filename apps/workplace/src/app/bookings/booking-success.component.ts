import { Component, Input } from '@angular/core';

@Component({
    selector: 'booking-success',
    template: `
        <div
            name="success"
            class="fixed inset-0 flex flex-col bg-secondary items-center justify-center"
        >
            <div class="text-4xl rounded-full bg-white text-success mb-4">
                <app-icon
                    [icon]="{ class: 'material-icons', content: 'done' }"
                ></app-icon>
            </div>
            <div class="text-center text-lg text-white mb-4">
                Thank you, you {{ type }} booking was successful!<br />
                An event has been added to your calendar
            </div>
            <div class="flex items-center space-x-2">
                <a
                    button
                    mat-button
                    class="w-32"
                    [routerLink]="['/book', route]"
                    [queryParams]="{}"
                >
                    New Booking
                </a>
                <a
                    button
                    mat-button
                    class="w-32"
                    [routerLink]="['/schedule']"
                    [queryParams]="{ email: calendar }"
                >
                    My Day
                </a>
            </div>
        </div>
    `,
    styles: [``],
})
export class BookingSuccessComponent {
    @Input() public calendar: string;
    @Input() public route: string = 'spaces';
    @Input() public type: string = 'space';
}
