import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { signal, WritableSignal } from '@angular/core';
import { MockComponent, MockPipe } from 'ng-mocks';

import { MatRippleModule } from '@angular/material/core';
import { SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ReportsMenuComponent } from 'apps/concierge/src/app/reports/reports-menu.component';

describe('ReportsMenuComponent', () => {
    let spectator: SpectatorRouting<ReportsMenuComponent>;
    let features: WritableSignal<string[]>;
    let custom_reports: WritableSignal<any[]>;
    const createComponent = createRoutingFactory({
        component: ReportsMenuComponent,
        declarations: [MockComponent(IconComponent), MockPipe(TranslatePipe)],
        providers: [
            {
                provide: SettingsService,
                useValue: {
                    signal: (key: string) =>
                        key === 'app.reports.features'
                            ? features
                            : custom_reports,
                },
            },
        ],
        imports: [MatRippleModule],
        stubsEnabled: true,
    });

    beforeEach(() => {
        features = signal<string[]>(['desks', 'spaces']);
        custom_reports = signal<any[]>([]);
        spectator = createComponent();
    });

    function card_titles(): string[] {
        return spectator
            .queryAll('a h3')
            .map((el) => el.textContent.trim());
    }

    it('should only render cards for enabled features', () => {
        expect(spectator.queryAll('a').length).toBe(2);
        expect(card_titles()).toEqual(['Desks', 'Rooms']);
        expect(card_titles()).not.toContain('Catering');
    });

    it('should render additional feature cards when enabled', () => {
        features.set(['desks', 'spaces', 'catering', 'contact-tracing']);
        spectator.detectChanges();
        expect(spectator.queryAll('a').length).toBe(4);
        expect(card_titles()).toContain('Catering');
        expect(card_titles()).toContain('Contact Tracing');
    });

    it('should render custom report cards', () => {
        custom_reports.set([{ id: 'kpi', icon: 'star', name: 'KPI Report' }]);
        spectator.detectChanges();
        expect(spectator.queryAll('a').length).toBe(3);
        expect(card_titles()).toContain('KPI Report');
    });
});
