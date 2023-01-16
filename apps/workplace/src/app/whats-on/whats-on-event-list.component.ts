import {
    Component,
    ElementRef,
    HostListener,
    Input,
    ViewChild,
} from '@angular/core';
import { CalendarEvent } from '@placeos/events';

const CARD_WIDTH = 60 * 4;

@Component({
    selector: 'whats-on-event-list',
    template: `
        <div class="flex items-center space-x-4 mb-2">
            <h3 class="text-xl font-medium">{{ title }}</h3>
            <div class="flex-1 h-0.5 w-px bg-primary"></div>
        </div>
        <div
            #container
            class="relative flex items-center w-full space-x-2 py-2"
        >
            <ng-container *ngIf="events?.length; else empty_state">
                <div
                    class="flex flex-col items-center justify-center bg-white shadow h-[24rem]"
                    card
                    *ngFor="let event of events; let i = index"
                    [style.min-width]="'calc(' + 100 / cards + '% - .45rem)'"
                    [style.max-width]="'calc(' + 100 / cards + '% - .45rem)'"
                    [style.opacity]="i >= index && i < index + cards ? 1 : 0"
                    [style.transform]="
                        'translateX(calc(-' +
                        index * 100 +
                        '% - ' +
                        index * 0.45 +
                        'rem))'
                    "
                >
                    <div class="w-full h-40 bg-gray-400"></div>
                    <div
                        class="flex flex-col items-center p-2 flex-1 h-1/2 w-full space-y-2"
                    >
                        <div date class="w-full uppercase text-primary">
                            {{ event?.date | date: 'mediumDate' }}
                        </div>
                        <div title class="w-full font-medium">
                            {{ event?.title || '&lt;No title&gt;' }}
                        </div>
                        <div desc class="flex-1 h-1/2 w-full text-sm">
                            {{
                                event?.body || '&lt;No description&gt;'
                                    | slice: 0:320
                            }}
                        </div>
                        <button btn matRipple class="w-full">
                            <div class="flex items-center">
                                <div>Read more</div>
                                <app-icon>arrow_forward</app-icon>
                            </div>
                        </button>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    *ngIf="index > 0"
                    (click)="index = index - cards"
                    class="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-16 bg-white shadow"
                >
                    <app-icon>chevron_left</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    *ngIf="index + cards < events.length"
                    (click)="index = index + cards"
                    class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-16 bg-white shadow"
                >
                    <app-icon>chevron_right</app-icon>
                </button>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                class="p-12 flex items-center justify-center w-full opacity-40"
            >
                No {{ title }} events
            </div>
        </ng-template>
    `,
    styles: [
        `
            [card] {
                transition: transform 200ms, opacity 200ms;
            }
        `,
    ],
})
export class WhatsOnEventListComponent {
    /** Title to display for the event list */
    @Input() public title = 'Upcoming';
    /** List of events to display on the event list */
    @Input() public events: CalendarEvent[] = [
        new CalendarEvent({
            title: 'Welcome Event',
            body: 'Today we welcome our new employees joining our extensive family.',
        }),
        new CalendarEvent({
            title: 'Christmas Party',
            body: 'Come together for our pre-Christmas party',
        }),
        new CalendarEvent({
            title: '100 Year Celebration',
            body: 'Celebrating our 100th year in business',
        }),
        new CalendarEvent({
            title: 'Chocolate Sharing Day',
            body: 'Chocolate!',
        }),
        new CalendarEvent({
            title: 'Shoe Shine Day',
            body: 'Good shoes deserve good care. Join us to have your shoe polished and shined by professionals.',
        }),
    ] as any;

    public index = 0;

    @ViewChild('container', { static: true })
    private _el: ElementRef<HTMLDivElement>;

    @HostListener('window:resize') public onResize() {
        this.index = 0;
    }

    public get cards() {
        return Math.floor(this._el.nativeElement.clientWidth / CARD_WIDTH) || 1;
    }
}
