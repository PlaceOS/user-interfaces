import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { GroupEventCardComponent } from '@placeos/events';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { VirtualConciergeButtonComponent } from '../components/virtual-concierge-button.component';
import { GroupEventsFiltersListComponent } from './group-events-filters-list.component';
import { GroupEventsSidebarComponent } from './group-events-sidebar.component';
import { GroupEventsStateService } from './group-events-state.service';

@Component({
    selector: '[group-events]',
    template: `
        <topbar />
        <main class="bg-base-200 flex h-1/2 flex-1 flex-col sm:flex-row">
            <group-events-sidebar></group-events-sidebar>
            <div class="h-full w-full flex-1 overflow-auto p-2 sm:w-1/2 sm:p-4">
                <group-events-filters-list></group-events-filters-list>
                @if (featured(); as event) {
                    <group-event-card
                        [event]="event"
                        [featured]="true"
                        class="mx-auto my-2 w-5xl max-w-full"
                    ></group-event-card>
                }
                @if (event_list().length) {
                    <div class="mx-auto mt-2 flex w-5xl max-w-full flex-wrap">
                        @for (event of events_without_featured(); track event) {
                            <group-event-card
                                [event]="event"
                                class="m-2"
                            ></group-event-card>
                        }
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-results.svg" class="w-32" />
                        <div class="font-medium">
                            {{ 'APP.WORKPLACE.EVENTS_EMPTY' | translate }}
                        </div>
                        <div class="opacity-30">
                            {{ 'APP.WORKPLACE.EVENTS_RETRY' | translate }}
                        </div>
                    </div>
                }
            </div>
            <virtual-concierge-button />
        </main>
        <footer-menu />
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                min-height: 50%;
            }

            .top {
                background-color: #007ac8;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        TopbarComponent,
        FooterMenuComponent,
        VirtualConciergeButtonComponent,
        GroupEventCardComponent,
        GroupEventsFiltersListComponent,
        GroupEventsSidebarComponent,
        TranslatePipe,
    ],
})
export class GroupEventsComponent extends AsyncHandler {
    private _state = inject(GroupEventsStateService);

    public readonly event_list = this._state.filtered_events;
    public readonly featured = computed(() =>
        this.event_list().find(
            (_: any) => _.extension_data?.featured || _.featured,
        ),
    );
    public readonly events_without_featured = computed(() =>
        this.event_list().filter((_: any) => _.id !== this.featured()?.id),
    );
}
