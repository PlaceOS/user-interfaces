import { Component, input } from '@angular/core';

@Component({
    selector: `schedule-day-view`,
    template: ``,
    styles: [``],
    imports: [],
})
export class ScheduleDayViewComponent {
    public readonly date = input(Date.now());
    public readonly bookings = input<any[]>([]);
}
