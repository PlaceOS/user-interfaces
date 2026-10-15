export type LandingWidgetId =
    | 'available_now'
    | 'quick_actions'
    | 'desk_week'
    | 'favourites'
    | 'colleagues'
    | 'focus_timer'
    | 'world_clock';

/** Width of a widget on the grid. A `full` widget always takes a row */
export type LandingWidgetSize = 'small' | 'large' | 'full';

/** Number of grid columns that a widget takes. The grid has 6 columns */
export type LandingWidgetSpan = 2 | 3 | 4 | 6;

export interface LandingWidget {
    id: LandingWidgetId;
    /** Translation key for the name of the widget */
    name: string;
    icon: string;
    size: LandingWidgetSize;
    /** The widget is on the home page only after the user adds it */
    optional?: boolean;
}

/** Layout of the home page that the user saved */
export interface LandingLayout {
    /** Widgets on the home page, in display order */
    order: LandingWidgetId[];
    /** Widgets that the user removed from the home page */
    hidden: LandingWidgetId[];
}

/** Name of the user setting that holds the `LandingLayout` */
export const LANDING_LAYOUT_KEY = 'landing_layout';

/** Widgets that the user can arrange on the home page, in default order */
export const LANDING_WIDGETS: LandingWidget[] = [
    {
        id: 'available_now',
        name: 'APP.WORKPLACE.AVAILABLE_LIST_HEADER',
        icon: 'event_available',
        size: 'large',
    },
    {
        id: 'quick_actions',
        name: 'APP.WORKPLACE.QUICK_ACTIONS_HEADER',
        icon: 'bolt',
        size: 'small',
    },
    {
        id: 'desk_week',
        name: 'APP.WORKPLACE.DESK_WEEK_TITLE',
        icon: 'calendar_month',
        size: 'full',
    },
    {
        id: 'favourites',
        name: 'COMMON.FAVOURITES',
        icon: 'star',
        size: 'large',
    },
    {
        id: 'colleagues',
        name: 'APP.WORKPLACE.COLLEAGUES',
        icon: 'groups',
        size: 'small',
    },
    {
        id: 'focus_timer',
        name: 'APP.WORKPLACE.FOCUS_TIMER_TITLE',
        icon: 'timelapse',
        size: 'small',
        optional: true,
    },
    {
        id: 'world_clock',
        name: 'APP.WORKPLACE.WORLD_CLOCK_TITLE',
        icon: 'public',
        size: 'small',
        optional: true,
    },
];

/**
 * Widgets to show on the home page, in display order.
 * A widget that is not in the saved layout is new for the user, and goes
 * after the widgets that the user arranged. An optional widget shows only
 * when it is in the saved layout.
 * @param available Widgets that the app settings allow, in default order
 * @param layout Layout that the user saved
 */
export function visibleWidgets(
    available: LandingWidget[],
    layout?: Partial<LandingLayout> | null,
): LandingWidget[] {
    const order = layout?.order || [];
    const hidden = layout?.hidden || [];
    const arranged = [...new Set(order)].flatMap((id) =>
        available.filter((_) => _.id === id),
    );
    const added = available.filter(
        (_) => !_.optional && !order.includes(_.id) && !hidden.includes(_.id),
    );
    return [...arranged, ...added];
}

/**
 * Layout to save for the widgets that the user arranged.
 * A widget that the app settings do not allow is in neither list. When the
 * settings allow it later, it is new for the user. An optional widget is
 * never in the hidden list, because it is hidden until the user adds it.
 */
export function layoutFor(
    widgets: LandingWidget[],
    available: LandingWidget[],
): LandingLayout {
    const order = widgets.map((_) => _.id);
    return {
        order,
        hidden: available
            .filter((_) => !_.optional && !order.includes(_.id))
            .map((_) => _.id),
    };
}

/**
 * Column span of each widget.
 * Two widgets share a row. A large widget next to a small widget takes two
 * thirds of the row. A widget with no partner takes the row.
 */
export function widgetSpans(sizes: LandingWidgetSize[]): LandingWidgetSpan[] {
    const spans: LandingWidgetSpan[] = [];
    for (let i = 0; i < sizes.length; i++) {
        const size = sizes[i];
        const next = sizes[i + 1];
        if (size === 'full' || !next || next === 'full') {
            spans.push(6);
        } else if (size === next) {
            spans.push(3, 3);
            i++;
        } else {
            spans.push(size === 'large' ? 4 : 2, next === 'large' ? 4 : 2);
            i++;
        }
    }
    return spans;
}
