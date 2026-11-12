import { SpectatorRouting } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/vitest';
import { MockComponent, MockPipe, MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService, Space } from '@placeos/common';

import { IconComponent, SafePipe } from '@placeos/components';
import { ControlSpaceListItemComponent } from '../../app/control/list-item.component';

describe('ControlSpaceListItemComponent', () => {
    let spectator: SpectatorRouting<ControlSpaceListItemComponent>;
    let features: string[] = [];
    const space = new Space({ id: 'space-1', name: 'Space 1', capacity: 32 });
    const createComponent = createRoutingFactory({
        component: ControlSpaceListItemComponent,
        // A real router gives the locate link its URL
        stubsEnabled: false,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((key: string) =>
                    key === 'app.features' ? features : undefined,
                ) as SettingsService['get'],
            }),
            MockProvider(OrganisationService, { buildings: [] }),
        ],
        declarations: [MockComponent(IconComponent), MockPipe(SafePipe)],
    });

    beforeEach(() => (features = ['explore']));

    it('should render nothing until it has a space', () => {
        spectator = createComponent();
        expect('a[btn]').not.toExist();
    });

    it('should link to the space on the map when explore is enabled', () => {
        spectator = createComponent({ props: { space } });
        expect('a[btn][control]').toExist();
        expect(spectator.query('a[btn][locate]')).toHaveAttribute(
            'href',
            '/explore?space=space-1',
        );
    });

    it('should not offer to locate the space when explore is disabled', () => {
        features = ['spaces'];
        spectator = createComponent({ props: { space } });
        expect('a[btn][control]').toExist();
        expect('a[btn][locate]').not.toExist();
    });
});
