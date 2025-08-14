import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Space } from 'libs/spaces/src/lib/space.class';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { CalendarEvent } from './event.class';
import { GroupEventDetailsModalComponent } from './group-event-details-modal.component';

@Component({
    selector: 'group-event-card',
    template: `
        @if (!featured()) {
            <button
                matRipple
                (click)="viewDetails()"
                class="flex h-[20rem] w-60 flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow hover:border-info hover:shadow-2xl"
            >
                <div
                    class="relative flex h-28 min-h-28 w-full items-center justify-between overflow-hidden border-b border-base-200 bg-base-200"
                >
                    @if (event().images?.length) {
                        <img
                            auth
                            [source]="event().images[0]"
                            class="absolute left-0 top-0 h-full w-full object-cover object-center"
                        />
                    }
                </div>
                <div class="h-1/2 w-full flex-1 p-4">
                    <div class="text-left text-sm opacity-60">
                        {{ event().date | date: 'EEE d MMM' }},
                        {{ event().date | date: time_format }}
                    </div>
                    <h2
                        class="mb-2 w-full truncate text-left text-xl"
                        [title]="event().title"
                    >
                        {{ event().title }}
                    </h2>
                    <div
                        class="mb-2 h-[4.5rem] flex-1 overflow-hidden text-left text-xs opacity-60"
                    >
                        <p class="line-clamp-4">{{ raw_description }}</p>
                        @if (!raw_description.trim()) {
                            <p class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                        | translate
                                }}
                            </p>
                        }
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                        <icon class="text-info">place</icon>
                        @if (is_onsite && has_space) {
                            <div>
                                {{ space.display_name || space.name || '' }}
                            </div>
                        }
                        @if (is_onsite && !has_space) {
                            <div class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                        | translate
                                }}
                            </div>
                        }
                        @if (!is_onsite) {
                            <div class="opacity-30">
                                {{ 'CALENDAR_EVENT.GROUP_REMOTE' | translate }}
                            </div>
                        }
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                        <icon class="text-info">people</icon>
                        <div class="">
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDING'
                                    | translate
                                        : {
                                              count:
                                                  event().attendees?.length ||
                                                  '0',
                                          }
                            }}
                        </div>
                    </div>
                </div>
            </button>
        } @else {
            <button
                matRipple
                (click)="viewDetails()"
                class="mx-auto flex h-56 w-[63rem] max-w-full overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow hover:border-info hover:shadow-2xl"
            >
                <div
                    class="relative flex h-full w-1/2 max-w-[18rem] items-center justify-between overflow-hidden border-r border-base-200 bg-base-200"
                >
                    @if (event().images?.length) {
                        <img
                            auth
                            [source]="event().images[0]"
                            class="absolute left-0 top-0 h-full w-full object-cover object-center"
                        />
                    }
                </div>
                <div
                    class="absolute left-0 top-0 flex items-center space-x-2 rounded-br-xl bg-info py-2 pl-2 pr-4 text-sm text-info-content"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
                <div
                    details
                    class="flex w-1/2 max-w-[calc(100%-18rem)] flex-1 space-x-4 overflow-hidden px-4 py-4"
                >
                    <div class="flex flex-col items-center">
                        <div class="text-sm opacity-30">
                            {{ event().date | date: 'MMM' }}
                        </div>
                        <div class="text-lg">
                            {{ event().date | date: 'd' }}
                        </div>
                    </div>
                    <div class="flex w-px flex-1 flex-col space-y-2">
                        <h3 class="text-left">{{ event().title }}</h3>
                        <div time class="text-left text-sm opacity-30">
                            {{ event().date | date: 'EEEE' }}
                            {{ event().date | date: time_format }} -
                            {{
                                event().date + event().duration * 60 * 1000
                                    | date: time_format
                            }}
                        </div>
                        <div class="h-20 overflow-hidden text-left">
                            <p class="line-clamp-3">{{ raw_description }}</p>
                            @if (!raw_description.trim()) {
                                <p class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                            | translate
                                    }}
                                </p>
                            }
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">place</icon>
                            @if (is_onsite && has_space) {
                                <div>
                                    {{ space.display_name || space.name || '' }}
                                </div>
                            }
                            @if (is_onsite && !has_space) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                            | translate
                                    }}
                                </div>
                            }
                            @if (!is_onsite) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_REMOTE'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">people</icon>
                            <div class="">
                                {{
                                    'CALENDAR_EVENT.GROUP_ATTENDING'
                                        | translate
                                            : {
                                                  count: attendees || '0',
                                              }
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute right-4 top-4 w-32 truncate rounded bg-secondary px-4 py-2 text-center text-secondary-content"
                >
                    {{ 'COMMON.VIEW_DETAILS' | translate }}
                </div>
            </button>
        }
    `,
    styles: [
        `
            button {
                transition:
                    box-shadow 300ms,
                    border 200ms;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        RouterModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
    ],
})
export class GroupEventCardComponent {
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);

    public readonly event = input<CalendarEvent>(undefined);
    public readonly featured = input<boolean>(undefined);
    public space: Space;
    public raw_description = '';

    public get time_format(): string {
        return this._settings.time_format;
    }

    public get is_onsite() {
        return this.event()?.extension_data.attendance_type !== 'ONLINE';
    }

    public get has_space() {
        return !!this.space?.id;
    }

    public get is_online() {
        return (
            !this.is_onsite ||
            this.event()?.extension_data.attendance_type === 'ANY'
        );
    }

    public get attendees() {
        return (
            this.event()?.attendees?.filter(
                (user) => user.email !== this.group_event_calendar,
            )?.length || 0
        );
    }

    public get group_event_calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public async ngOnInit() {
        const space_pipe = new SpacePipe();
        space_pipe.org = this._org;
        const resource = this.event().resources.find(
            (_) => _.email !== this.group_event_calendar,
        );
        this.space = await space_pipe.transform(
            resource?.id || resource?.email,
        );
        this.raw_description = this.removeHtmlTags(this.event().body);
    }

    public removeHtmlTags(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

    public viewDetails(): void {
        this._dialog.open(GroupEventDetailsModalComponent, {
            data: { event: this.event(), concierge: false },
        });
    }
}
