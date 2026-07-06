import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAP_FEATURE_DATA } from '@placeos/common';
import { ngMocks } from 'ng-mocks';

import { ExploreIconComponent } from '../lib/explore-icon.component';

describe('ExploreIconComponent', () => {
    let spectator: Spectator<ExploreIconComponent>;
    const createComponent = createComponentFactory({
        component: ExploreIconComponent,
        ...ngMocks.guts(null),
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should fallback to default icon, color and text colour', () => {
        spectator = createComponent();
        expect(spectator.component.icon()).toEqual({ content: 'done' });
        expect(spectator.component.color()).toBe('var(--info)');
        expect(spectator.component.text_color()).toBe('var(--info-content)');
    });

    it('should use the provided icon, color and text colour', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: {
                        icon: { content: 'star' },
                        color: '#f00',
                        text_color: '#fff',
                    },
                },
            ],
        });
        expect(spectator.component.icon()).toEqual({ content: 'star' });
        expect(spectator.component.color()).toBe('#f00');
        expect(spectator.component.text_color()).toBe('#fff');
    });

    it('should apply the colours to the rendered container', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: { color: 'rgb(255, 0, 0)', text_color: 'rgb(0, 0, 0)' },
                },
            ],
        });
        spectator.detectChanges();
        const container = spectator.query<HTMLElement>('div');
        expect(container?.style.backgroundColor).toBe('rgb(255, 0, 0)');
        expect(container?.style.color).toBe('rgb(0, 0, 0)');
    });
});
