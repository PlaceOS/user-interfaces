import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import {
    Component,
    computed,
    inject,
    OnDestroy,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { AsyncHandler, settingSignal, SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { VirtualConciergeButtonComponent } from '../components/virtual-concierge-button.component';
import { LandingStateService } from '../landing/landing-state.service';
import { LandingAvailableNowComponent } from './landing-available-now.component';
import { LandingColleaguesNewComponent } from './landing-colleagues-new.component';
import { LandingDeskWeekComponent } from './landing-desk-week.component';
import { LandingFavouritesNewComponent } from './landing-favourites-new.component';
import {
    availableNowTabs,
    hasQuickActions,
    landingFeatures,
} from './landing-features';
import { LandingFocusTimerComponent } from './landing-focus-timer.component';
import {
    LANDING_LAYOUT_KEY,
    LANDING_WIDGETS,
    LandingLayout,
    LandingWidget,
    LandingWidgetId,
    LandingWidgetSpan,
    layoutFor,
    visibleWidgets,
    widgetSpans,
} from './landing-layout';
import { LandingQuickActionsComponent } from './landing-quick-actions.component';
import { LandingUpcomingBookingComponent } from './landing-upcoming-booking.component';
import { LandingWorldClockComponent } from './landing-world-clock.component';

/** Tailwind class for each column span of the widget grid */
const SPAN_CLASSES: Record<LandingWidgetSpan, string> = {
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    6: 'md:col-span-6',
};

@Component({
    selector: 'landing-new',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav) {
                <topbar />
            }
            <div class="bg-base-200 relative flex h-1/2 flex-1 overflow-auto">
                <div
                    class="mx-auto flex w-[80rem] max-w-full flex-col gap-4 p-4"
                >
                    <landing-upcoming-booking />
                    <!-- <landing-virtual-concierge /> -->

                    @if (!hide_customise()) {
                        <div
                            class="flex flex-wrap items-center justify-between gap-2"
                        >
                            <div class="px-2">
                                <h2 class="text-lg font-medium">
                                    {{ 'APP.WORKPLACE.HOME_TITLE' | translate }}
                                </h2>
                                <p class="text-sm opacity-60">
                                    {{
                                        (editing()
                                            ? 'APP.WORKPLACE.HOME_EDIT_HINT'
                                            : 'APP.WORKPLACE.HOME_SUBTITLE'
                                        ) | translate
                                    }}
                                </p>
                            </div>
                            <div class="flex flex-wrap items-center gap-2">
                                @if (editing()) {
                                    <button
                                        btn
                                        matRipple
                                        name="reset-home-layout"
                                        class="inverse h-8 text-sm"
                                        (click)="resetLayout()"
                                    >
                                        {{
                                            'APP.WORKPLACE.HOME_RESET'
                                                | translate
                                        }}
                                    </button>
                                    <button
                                        btn
                                        matRipple
                                        name="cancel-home-layout"
                                        class="inverse h-8 text-sm"
                                        (click)="cancelLayout()"
                                    >
                                        {{ 'COMMON.CANCEL' | translate }}
                                    </button>
                                    <button
                                        btn
                                        matRipple
                                        name="save-home-layout"
                                        class="h-8 text-sm"
                                        (click)="saveLayout()"
                                    >
                                        {{
                                            'APP.WORKPLACE.HOME_SAVE'
                                                | translate
                                        }}
                                    </button>
                                } @else {
                                    <button
                                        btn
                                        matRipple
                                        name="edit-home-layout"
                                        class="inverse h-8 space-x-2 text-sm"
                                        (click)="editLayout()"
                                    >
                                        <icon>tune</icon>
                                        <div>
                                            {{
                                                'APP.WORKPLACE.HOME_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </button>
                                }
                            </div>
                        </div>
                    }

                    @if (editing()) {
                        <section
                            class="border-base-400 bg-base-100 rounded-lg border border-dashed p-4"
                        >
                            <h3 class="font-medium">
                                {{
                                    'APP.WORKPLACE.HOME_ADD_WIDGETS' | translate
                                }}
                            </h3>
                            <p class="mb-3 text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.HOME_ADD_WIDGETS_HINT'
                                        | translate
                                }}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                @for (widget of available(); track widget.id) {
                                    @let added = draft().includes(widget);
                                    <button
                                        btn
                                        matRipple
                                        name="add-home-widget"
                                        class="inverse h-10 space-x-2 text-sm"
                                        [disabled]="added"
                                        (click)="addWidget(widget)"
                                    >
                                        <icon>{{ widget.icon }}</icon>
                                        <div>{{ widget.name | translate }}</div>
                                        <div class="text-xs">
                                            {{
                                                (added
                                                    ? 'APP.WORKPLACE.HOME_WIDGET_ADDED'
                                                    : 'COMMON.ADD'
                                                ) | translate
                                            }}
                                        </div>
                                    </button>
                                }
                            </div>
                        </section>
                    }

                    <div
                        class="grid grid-cols-1 gap-4 md:grid-cols-6"
                        cdkDropList
                        cdkDropListOrientation="mixed"
                        [cdkDropListDisabled]="!editing()"
                        (cdkDropListDropped)="
                            moveWidget(
                                $event.previousIndex,
                                $event.currentIndex
                            )
                        "
                    >
                        @for (
                            widget of widgets();
                            track widget.id;
                            let index = $index, first = $first, last = $last
                        ) {
                            <section
                                cdkDrag
                                class="min-w-0"
                                [class]="span_classes()[index]"
                                [attr.data-widget]="widget.id"
                            >
                                @if (editing()) {
                                    @let name = widget.name | translate;
                                    <div
                                        class="border-base-300 bg-base-100 mb-2 flex items-center gap-1 rounded-lg border p-1"
                                    >
                                        <button
                                            icon
                                            matRipple
                                            cdkDragHandle
                                            class="cursor-grab"
                                            [attr.aria-label]="
                                                'APP.WORKPLACE.HOME_WIDGET_DRAG'
                                                    | translate: { name }
                                            "
                                        >
                                            <icon>drag_indicator</icon>
                                        </button>
                                        <div
                                            class="flex-1 truncate text-sm font-medium"
                                        >
                                            {{ name }}
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            name="move-home-widget-earlier"
                                            [disabled]="first"
                                            [class.opacity-30]="first"
                                            [attr.aria-label]="
                                                'APP.WORKPLACE.HOME_WIDGET_EARLIER'
                                                    | translate: { name }
                                            "
                                            (click)="
                                                moveWidget(index, index - 1)
                                            "
                                        >
                                            <icon>arrow_upward</icon>
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            name="move-home-widget-later"
                                            [disabled]="last"
                                            [class.opacity-30]="last"
                                            [attr.aria-label]="
                                                'APP.WORKPLACE.HOME_WIDGET_LATER'
                                                    | translate: { name }
                                            "
                                            (click)="
                                                moveWidget(index, index + 1)
                                            "
                                        >
                                            <icon>arrow_downward</icon>
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            name="remove-home-widget"
                                            [attr.aria-label]="
                                                'APP.WORKPLACE.HOME_WIDGET_REMOVE'
                                                    | translate: { name }
                                            "
                                            (click)="removeWidget(widget)"
                                        >
                                            <icon>close</icon>
                                        </button>
                                    </div>
                                }
                                @switch (widget.id) {
                                    @case ('available_now') {
                                        <landing-available-now />
                                    }
                                    @case ('quick_actions') {
                                        <landing-quick-actions />
                                    }
                                    @case ('desk_week') {
                                        <landing-desk-week />
                                    }
                                    @case ('favourites') {
                                        <landing-favourites-new />
                                    }
                                    @case ('colleagues') {
                                        <landing-colleagues-new />
                                    }
                                    @case ('focus_timer') {
                                        <landing-focus-timer />
                                    }
                                    @case ('world_clock') {
                                        <landing-world-clock />
                                    }
                                }
                            </section>
                        }
                    </div>
                    <div class="min-h-2 w-full"></div>
                </div>
                <virtual-concierge-button />
            </div>
            @if (!hide_nav) {
                <footer-menu />
            }
            <div></div>
        </div>
    `,
    styles: [
        `
            .cdk-drag-placeholder {
                opacity: 0.3;
            }

            .cdk-drag-preview {
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
        `,
    ],
    imports: [
        RouterModule,
        DragDropModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        TopbarComponent,
        FooterMenuComponent,
        VirtualConciergeButtonComponent,
        LandingUpcomingBookingComponent,
        // LandingVirtualConciergeComponent,
        LandingAvailableNowComponent,
        LandingQuickActionsComponent,
        LandingDeskWeekComponent,
        LandingFavouritesNewComponent,
        LandingColleaguesNewComponent,
        LandingFocusTimerComponent,
        LandingWorldClockComponent,
    ],
})
export class LandingNewComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private _state = inject(LandingStateService);
    private _settings = inject(SettingsService);

    /** Set from the `hide_nav` URL parameter when the app is embedded */
    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }
    public readonly features = landingFeatures();
    public readonly hide_colleagues = settingSignal<boolean>('hide_colleagues');
    public readonly hide_spaces = settingSignal<boolean>('hide_landing_spaces');
    public readonly hide_rooms = settingSignal<boolean>('hide_landing_rooms');
    public readonly show_quick_links =
        settingSignal<boolean>('show_quick_links');
    public readonly show_quick_book = settingSignal<boolean>('show_quick_book');

    public readonly show_available_now = computed(
        () =>
            availableNowTabs(
                this.features(),
                !!this.hide_spaces(),
                !!this.hide_rooms(),
            ).length > 0,
    );
    public readonly show_quick_actions = computed(() =>
        hasQuickActions(
            this.features(),
            this.show_quick_book() !== false,
            this.show_quick_links() !== false,
        ),
    );

    /** Widgets that users cannot have on the page. A list of widget ids */
    public readonly hide_widgets = settingSignal<LandingWidgetId[]>(
        'hide_landing_widgets',
        [],
    );
    /** Widgets that the app settings allow for the user, in default order */
    public readonly available = computed(() => {
        const hidden = this.hide_widgets() || [];
        const allowed: Record<LandingWidgetId, boolean> = {
            available_now: this.show_available_now(),
            quick_actions: this.show_quick_actions(),
            desk_week: this.features().includes('desks'),
            favourites: true,
            colleagues: !this.hide_colleagues(),
            focus_timer: true,
            world_clock: true,
        };
        return LANDING_WIDGETS.filter(
            (_) => allowed[_.id] && !hidden.includes(_.id),
        );
    });
    /** Layout that the user saved. It is kept in the user settings */
    public readonly saved_layout = settingSignal<LandingLayout>(
        LANDING_LAYOUT_KEY,
        undefined,
        true,
    );
    /**
     * Stop users from changing the layout. Each user gets the default layout,
     * and a saved layout is not used.
     */
    public readonly hide_customise = settingSignal<boolean>(
        'hide_landing_customise',
    );
    private readonly _editing = signal(false);
    /** Whether the user is changing the layout */
    public readonly editing = computed(
        () => this._editing() && !this.hide_customise(),
    );
    /** Widgets of the layout that the user is changing */
    public readonly draft = signal<LandingWidget[]>([]);
    /** Widgets on the page, in display order */
    public readonly widgets = computed(() =>
        this.editing()
            ? this.draft()
            : visibleWidgets(
                  this.available(),
                  this.hide_customise() ? null : this.saved_layout(),
              ),
    );
    public readonly span_classes = computed(() =>
        widgetSpans(this.widgets().map((_) => _.size)).map(
            (span) => SPAN_CLASSES[span],
        ),
    );

    public editLayout() {
        this.draft.set(this.widgets());
        this._editing.set(true);
    }

    /** Put the default widgets back into the layout that the user is changing */
    public resetLayout() {
        this.draft.set(visibleWidgets(this.available()));
    }

    public saveLayout() {
        this._settings.saveUserSetting(
            LANDING_LAYOUT_KEY,
            layoutFor(this.draft(), this.available()),
        );
        this._editing.set(false);
    }

    public cancelLayout() {
        this._editing.set(false);
    }

    public addWidget(widget: LandingWidget) {
        this.draft.update((list) => [...list, widget]);
    }

    public removeWidget(widget: LandingWidget) {
        this.draft.update((list) => list.filter((_) => _ !== widget));
    }

    public moveWidget(from: number, to: number) {
        this.draft.update((list) => {
            const moved = [...list];
            moveItemInArray(moved, from, to);
            return moved;
        });
    }

    public ngOnInit() {
        this.subscription('poll', this._state.pollUpcomingEvents());
    }
}
