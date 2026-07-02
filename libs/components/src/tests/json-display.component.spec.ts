import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { CustomTooltipData } from '../lib/custom-tooltip.component';
import { JsonDisplayComponent } from '../lib/json-display.component';

describe('JsonDisplayComponent', () => {
    let spectator: Spectator<JsonDisplayComponent>;
    const createComponent = createComponentFactory({
        component: JsonDisplayComponent,
        providers: [
            {
                provide: CustomTooltipData,
                useValue: { data: { from_tooltip: true }, close: jest.fn() },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display data injected from a tooltip', () => {
        spectator.detectChanges();
        expect('pre').toContainText('"from_tooltip": true');
    });

    it('should display the json input over tooltip data', () => {
        spectator.setInput({ json: { name: 'Test', count: 2 } });
        spectator.detectChanges();
        expect('pre').toContainText('"name": "Test"');
        expect('pre').toContainText('"count": 2');
        expect('pre').not.toContainText('from_tooltip');
    });

    it('should format json with 4 space indentation', () => {
        const data = { nested: { value: 1 } };
        spectator.setInput({ json: data });
        spectator.detectChanges();
        expect(spectator.component.formatted_json()).toBe(
            JSON.stringify(data, undefined, 4),
        );
        expect(spectator.query('pre').textContent).toBe(
            JSON.stringify(data, undefined, 4),
        );
    });
});
