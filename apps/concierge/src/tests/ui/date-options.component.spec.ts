import { convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { DateOptionsComponent } from '../../app/ui/date-options.component';

describe('DateOptionsComponent', () => {
    let spectator: Spectator<DateOptionsComponent>;
    const createComponent = createComponentFactory({
        component: DateOptionsComponent,
        providers: [
            MockProvider(Router, {
                navigate: jest.fn(),
            }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(convertToParamMap({})),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the selected day by default', () => {
        spectator.setInput({
            date: new Date(2026, 3, 22, 12).valueOf(),
        });
        spectator.detectChanges();

        expect(spectator.query('.display')).toHaveText('Apr 22, 2026');
    });

    it('should show the selected week range when week mode is enabled', () => {
        spectator.setInput({
            date: new Date(2026, 3, 22, 12).valueOf(),
            display_mode: 'week',
            week_start: 1,
        });
        spectator.detectChanges();

        expect(spectator.query('.display')).toHaveText('Apr 20 - 26, 2026');
    });
});
