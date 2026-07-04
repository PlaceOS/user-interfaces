import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { SafePipe } from '@placeos/components';
import { CustomReportComponent } from 'apps/concierge/src/app/reports/custom-report.component';

@Pipe({ name: 'safe' })
class MockSafePipe implements PipeTransform {
    private _sanitizer = inject(DomSanitizer);
    transform(value: string) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(value || '');
    }
}

function paramMapFor(id: string): ParamMap {
    return {
        get: (key: string) => (key === 'id' ? id : null),
        has: (key: string) => key === 'id',
        getAll: () => [id],
        keys: ['id'],
    } as ParamMap;
}

describe('CustomReportComponent', () => {
    let spectator: Spectator<CustomReportComponent>;
    let custom_reports: any[];
    const createComponent = createComponentFactory({
        component: CustomReportComponent,
        overrideComponents: [
            [
                CustomReportComponent,
                {
                    remove: { imports: [SafePipe] },
                    add: { imports: [MockSafePipe] },
                },
            ],
        ],
        providers: [
            {
                provide: SettingsService,
                useValue: {
                    get: (key: string) =>
                        key === 'app.custom_reports' ? custom_reports : null,
                },
            },
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: { paramMap: paramMapFor('kpi') },
                    paramMap: of(paramMapFor('kpi')),
                },
            },
        ],
    });

    beforeEach(() => {
        custom_reports = [
            { id: 'kpi', url: 'https://reports.example.com/kpi' },
            {
                id: 'secure',
                url: 'https://reports.example.com/secure?tab=1',
                api_key: 'a b&c',
            },
        ];
        spectator = createComponent();
    });

    it('should read the report id from the route params', () => {
        expect(spectator.component.id()).toBe('kpi');
    });

    it('should build a kiosk url for the matched report', () => {
        expect(spectator.component.report_url()).toBe(
            'https://reports.example.com/kpi?kiosk=tv',
        );
    });

    it('should append an encoded api key and merge existing query params', () => {
        (spectator.component as any)._params.set(paramMapFor('secure'));
        expect(spectator.component.report_url()).toBe(
            'https://reports.example.com/secure?tab=1&kiosk=tv&key=a%20b%26c',
        );
    });

    it('should return an empty url when the report is unknown', () => {
        (spectator.component as any)._params.set(paramMapFor('missing'));
        expect(spectator.component.report_url()).toBe('');
    });

    it('should render the iframe only when an id is present', () => {
        expect(spectator.query('iframe')).toBeTruthy();
        (spectator.component as any)._params.set(paramMapFor(''));
        spectator.detectChanges();
        expect(spectator.query('iframe')).toBeFalsy();
    });
});
