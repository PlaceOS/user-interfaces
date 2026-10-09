import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAP_FEATURE_DATA } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { EventPinComponent } from '../../app/explore/event-pin.component';

describe('EventPinComponent', () => {
    let spectator: Spectator<EventPinComponent>;

    const createComponent = createComponentFactory({
        component: EventPinComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    const create = (data: any) =>
        (spectator = createComponent({
            providers: [{ provide: MAP_FEATURE_DATA, useValue: data }],
        }));

    it('falls back to theme defaults when no colours are provided', () => {
        create({});
        expect(spectator.component.fill).toBe('var(--secondary)');
        expect(spectator.component.stroke).toBe('var(--secondary-focus)');
        expect(spectator.component.icon_color).toBe('var(--secondary-content)');
    });

    it('uses the colours supplied via map feature data', () => {
        create({
            fill: '#ff0000',
            stroke: '#00ff00',
            icon_color: '#0000ff',
        });
        expect(spectator.component.fill).toBe('#ff0000');
        expect(spectator.component.stroke).toBe('#00ff00');
        expect(spectator.component.icon_color).toBe('#0000ff');
    });

    it('renders the pin path with the resolved fill and stroke', () => {
        create({ fill: '#123456', stroke: '#654321' });
        spectator.detectChanges();
        const path = spectator.query('path');
        expect(path).toExist();
        expect(path.getAttribute('fill')).toBe('#123456');
        expect(path.getAttribute('stroke')).toBe('#654321');
    });

    it('renders the calendar icon coloured with the icon colour', () => {
        create({ icon_color: '#abcdef' });
        spectator.detectChanges();
        const icon = spectator.query('icon');
        expect(icon).toExist();
        expect(icon.getAttribute('style')).toContain('rgb(171, 205, 239)');
    });
});
