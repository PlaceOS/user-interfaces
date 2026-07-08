import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { signal, WritableSignal } from '@angular/core';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserPipe } from '@placeos/users';
import { ContactTracingOptionsComponent } from 'apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component';
import { ContactTracingReportComponent } from 'apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component';
import { ContactTracingStateService } from 'apps/concierge/src/app/reports/contact-tracing/contact-tracing-state.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

describe('ContactTracingReportComponent', () => {
    let spectator: Spectator<ContactTracingReportComponent>;
    let loading: WritableSignal<string>;
    let options: WritableSignal<any>;
    let events: WritableSignal<any[]>;
    let settings_map: Record<string, any>;
    let theme: string;
    const createComponent = createComponentFactory({
        component: ContactTracingReportComponent,
        declarations: [
            MockComponent(ContactTracingOptionsComponent),
            MockComponent(SimpleTableComponent),
            MockComponent(ReportMetricGuideComponent),
            MockDirective(AuthenticatedImageDirective),
            MockPipe(UserPipe),
            MockPipe(TranslatePipe, (v) => v),
        ],
        providers: [
            {
                provide: ContactTracingStateService,
                useFactory: () => ({ loading, options, events }),
            },
            {
                provide: SettingsService,
                useValue: {
                    get: (key: string) => settings_map[key],
                    get theme() {
                        return theme;
                    },
                    time_format: 'h:mm a',
                },
            },
            {
                provide: OrganisationService,
                useValue: { active_building: signal({ id: 'bld-1' }) },
            },
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => {
        loading = signal('');
        options = signal({ start: 0, end: 0 });
        events = signal([]);
        theme = 'light';
        settings_map = {
            'app.logo_light': { src: 'light.png' },
            'app.logo_dark': { src: 'dark.png' },
        };
        spectator = createComponent();
    });

    it('should prompt to select a user when none is chosen', () => {
        expect(spectator.component.has_user()).toBe(false);
        expect(spectator.query('simple-table')).toBeFalsy();
        expect(spectator.query('.screen-only.flex-col')).toHaveText(
            'Select a user',
        );
    });

    it('should render the events table once a user is selected', () => {
        options.set({ start: 0, end: 0, user: { id: 'u1', name: 'User' } });
        spectator.detectChanges();
        expect(spectator.component.has_user()).toBe(true);
        expect(spectator.query('simple-table')).toBeTruthy();
    });

    it('should show a loading spinner while events are loading', () => {
        loading.set('Loading contact events...');
        spectator.detectChanges();
        expect(spectator.query('mat-spinner')).toBeTruthy();
        expect(spectator.query('simple-table')).toBeFalsy();
    });

    it('should pick the logo matching the active theme', () => {
        expect(spectator.component.logo()).toEqual({ src: 'light.png' });
        theme = 'dark';
        (spectator.inject(OrganisationService).active_building as any).set({
            id: 'bld-2',
        });
        expect(spectator.component.logo()).toEqual({ src: 'dark.png' });
    });

    it('should format durations as hours and minutes', () => {
        expect(spectator.component.formatDuration(90)).toContain('1');
        expect(spectator.component.formatDuration(0)).toBeDefined();
    });
});
