import {
    createComponentFactory,
    mockProvider,
    Spectator,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';

import { CalendarPaneComponent } from '../app/calendar/calendar-pane.component';

describe('CalendarPaneComponent', () => {
    let spectator: Spectator<CalendarPaneComponent>;
    /** Value of the `app.features` setting */
    let features: string[] = [];

    const createComponent = createComponentFactory({
        component: CalendarPaneComponent,
        detectChanges: false,
        providers: [
            mockProvider(SettingsService, {
                get: (key: string) =>
                    key === 'app.features' ? features : undefined,
            }),
        ],
    });

    const tabs = () => spectator.component.tabs().map((_) => _.id);

    it.each([
        [[], ['rooms', 'desks']],
        [['parking'], ['rooms', 'desks', 'parking']],
        [['parking-requests'], ['rooms', 'desks', 'parking']],
    ])('shows the tabs for app features %j', (enabled, expected) => {
        features = enabled;
        spectator = createComponent();
        expect(tabs()).toEqual(expected);
    });
});
