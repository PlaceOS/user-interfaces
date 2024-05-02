import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { GroupEventDetailsModalComponent } from '@placeos/bookings';

@Component({
    selector: 'group-event-card',
    template: `
        <button
            matRipple
            (click)="viewDetails()"
            *ngIf="!featured; else featured_card"
            class="border border-base-300 hover:border-info flex flex-col bg-base-100 rounded-xl shadow hover:shadow-2xl overflow-hidden w-60 h-[20rem]"
        >
            <div
                class="flex items-center justify-between h-28 w-full bg-base-200 overflow-hidden"
            >
                <img
                    *ngIf="event.images?.length"
                    auth
                    [source]="event.images[0]"
                    class="object-cover"
                />
            </div>
            <div class="p-4 flex-1 h-1/2">
                <div class="opacity-60 text-sm text-left">
                    {{ event.date | date: 'EEE d MMM' }},
                    {{ event.date | date: time_format }}
                </div>
                <h2
                    class="text-xl mb-2 text-left truncate"
                    [title]="event.title"
                >
                    {{ event.title }}
                </h2>
                <div
                    class="opacity-60 text-xs flex-1 overflow-hidden h-[4.5rem] mb-2"
                >
                    {{ event.description }}
                </div>
                <div class="flex items-center space-x-2 text-sm">
                    <app-icon class="text-info">place</app-icon>
                    <div class="" *ngIf="item?.linked_event?.system_id">
                        {{
                            (item?.linked_event?.system_id | space | async)
                                ?.display_name
                        }}
                    </div>
                    <div
                        class="opacity-30"
                        *ngIf="!item?.linked_event?.system_id"
                    >
                        Remote event
                    </div>
                </div>
                <div class="flex items-center space-x-2 text-sm">
                    <app-icon class="text-info">people</app-icon>
                    <div class="">
                        {{ event.attendees?.length || '0' }} attending
                    </div>
                </div>
            </div>
        </button>
        <ng-template #featured_card>
            <button
                matRipple
                (click)="viewDetails()"
                class="border border-base-300 hover:border-info flex bg-base-100 rounded-xl shadow hover:shadow-2xl overflow-hidden w-[48rem] max-w-full h-56 mx-auto"
            >
                <div
                    class="flex items-center justify-between h-full w-1/2 max-w-[20rem] bg-base-200 overflow-hidden"
                >
                    <img
                        *ngIf="event.images?.length"
                        auth
                        [source]="event.images[0]"
                        class="object-cover"
                    />
                </div>
                <div
                    class="absolute top-0 left-0 rounded-br-xl py-2 pl-2 pr-4 space-x-2 bg-info text-info-content flex items-center text-sm"
                >
                    <app-icon class="text-base">star</app-icon>
                    <div class="uppercase">Featured</div>
                </div>
                <div details class="flex px-8 py-4 space-x-4">
                    <div class="flex flex-col items-center">
                        <div class="text-sm opacity-30 ">
                            {{ event.date | date: 'MMM' }}
                        </div>
                        <div class="text-lg">{{ event.date | date: 'd' }}</div>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <h3 class="text-left">{{ event.title }}</h3>
                        <div time class="text-sm opacity-30">
                            {{ event.date | date: 'EEEE' }}
                            {{ event.date | date: time_format }} -
                            {{
                                event.date + event.duration * 60 * 1000
                                    | date: time_format
                            }}
                        </div>
                        <div class="h-20 overflow-hidden">
                            {{ event.description }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <app-icon class="text-info">place</app-icon>
                            <div class="" *ngIf="event.location">
                                {{ event.location }}
                            </div>
                            <div class="opacity-30" *ngIf="!event.location">
                                Remote event
                            </div>
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <app-icon class="text-info">people</app-icon>
                            <div class="">
                                {{ event.attendees?.length || '0' }} attending
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute top-4 right-4 bg-secondary text-secondary-content rounded px-4 py-2 w-32 text-center truncate"
                >
                    View Details
                </div>
            </button>
        </ng-template>
    `,
    styles: [
        `
            button {
                transition: box-shadow 300ms, border 200ms;
            }
        `,
    ],
})
export class GroupEventCardComponent {
    @Input() public event: any;
    @Input() public featured: boolean;

    public get time_format(): string {
        return this._settings.time_format;
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    public ngOnInit(): void {}

    public viewDetails(): void {
        console.log('View Details:', this.event);
        this._dialog.open(GroupEventDetailsModalComponent, {
            data: this.event,
        });
    }
}
