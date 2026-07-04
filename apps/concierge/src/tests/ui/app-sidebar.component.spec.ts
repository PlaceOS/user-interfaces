import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('ApplicationSidebarComponent', () => {
    let spectator: Spectator<ApplicationSidebarComponent>;
    const settings = { get: jest.fn() };
    const createComponent = createComponentFactory({
        component: ApplicationSidebarComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, settings as any),
            MockProvider(OrganisationService, {
                active_building: signal(null),
                waitUntilInitialised: () => Promise.resolve(),
            } as any),
        ],
    });

    beforeEach(() => {
        settings.get.mockReset();
        settings.get.mockImplementation((name: string) => {
            if (name === 'app.features') return ['events'];
            if (name === 'app.feature_groups') return {};
            return undefined;
        });
        spectator = createComponent();
    });

    it('should toggle and report collapsed block state', () => {
        expect(spectator.component.isBlockCollapsed('reports')).toBe(false);
        spectator.component.toggleBlock('reports');
        expect(spectator.component.isBlockCollapsed('reports')).toBe(true);
        spectator.component.toggleBlock('reports');
        expect(spectator.component.isBlockCollapsed('reports')).toBe(false);
    });

    it('should keep only links whose feature is enabled', () => {
        spectator.component.links = [
            { id: 'events', name: 'Events', route: ['/e'], icon: 'x' },
            { id: 'hidden', name: 'Hidden', route: ['/h'], icon: 'y' },
        ] as any;
        spectator.component.updateFilteredLinks();
        const ids = spectator.component.filtered_links().map((_: any) => _.id);
        expect(ids).toContain('events');
        expect(ids).not.toContain('hidden');
    });

    it('should drop parent groups whose children are all filtered out', () => {
        spectator.component.links = [
            {
                id: 'facilities',
                name: 'Facilities',
                icon: 'p',
                children: [{ id: 'zones', name: 'Zones', route: ['/z'] }],
            },
        ] as any;
        spectator.component.updateFilteredLinks();
        const ids = spectator.component.filtered_links().map((_: any) => _.id);
        expect(ids).not.toContain('facilities');
    });

    it('should treat a non-admin user as not admin', () => {
        expect(spectator.component.is_admin).toBe(false);
    });

    it('should hide the facilities group from non-admin users', () => {
        settings.get.mockImplementation((name: string) => {
            if (name === 'app.features') return ['facilities', 'zones'];
            if (name === 'app.feature_groups') return {};
            return undefined;
        });
        spectator.component.links = [
            {
                id: 'facilities',
                name: 'Facilities',
                icon: 'p',
                children: [{ id: 'zones', name: 'Zones', route: ['/z'] }],
            },
        ] as any;
        spectator.component.updateFilteredLinks();
        const ids = spectator.component.filtered_links().map((_: any) => _.id);
        expect(ids).not.toContain('facilities');
    });
});
