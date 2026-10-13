import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomTooltipComponent, IconComponent } from '@placeos/components';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';

describe('ReportMetricGuideComponent', () => {
    let spectator: Spectator<ReportMetricGuideComponent>;
    const createComponent = createComponentFactory({
        component: ReportMetricGuideComponent,
        declarations: [
            MockComponent(CustomTooltipComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should default the guide title on the trigger button', () => {
        const button = spectator.query('button');
        expect(button?.getAttribute('aria-label')).toBe(
            'How metrics are calculated',
        );
    });

    it('should reflect a custom title on the trigger button', () => {
        spectator.setInput('title', 'Table column calculations');
        spectator.detectChanges();
        const button = spectator.query('button');
        expect(button?.getAttribute('aria-label')).toBe(
            'Table column calculations',
        );
    });

    it('should position the guide absolutely when requested', () => {
        const container = spectator.query('.text-right');
        expect(container?.classList).not.toContain('absolute');
        spectator.setInput('absolute', true);
        spectator.detectChanges();
        expect(container?.classList).toContain('absolute');
        expect(container?.classList).toContain('top-24');
    });

    it('should apply inline spacing classes when inline', () => {
        const container = spectator.query('.text-right');
        // Non-inline padding classes present by default
        expect(container?.classList).toContain('px-4');
        spectator.setInput('inline', true);
        spectator.detectChanges();
        expect(container?.classList).not.toContain('px-4');
        expect(container?.classList).toContain('ml-2');
    });
});
