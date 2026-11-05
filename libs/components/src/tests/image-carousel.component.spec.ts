import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import { authority } from '@placeos/ts-client';

import { LocaleService } from 'libs/common/src/lib/locale.service';
import { ImageCarouselComponent } from '../lib/image-carousel.component';

const TEST_IMAGES = [
    'https://images.example.com/1.png',
    'https://images.example.com/2.png',
    'https://images.example.com/3.png',
];

describe('ImageCarouselComponent', () => {
    let spectator: Spectator<ImageCarouselComponent>;
    const createComponent = createComponentFactory({
        component: ImageCarouselComponent,
        providers: [MockProvider(LocaleService)],
    });

    beforeEach(() => {
        vi.mocked(authority).mockReturnValue({ id: 'test' } as any);
        spectator = createComponent();
    });

    it('should show an empty state when there are no images', () => {
        spectator.detectChanges();
        expect('img').not.toExist();
        expect('button').not.toExist();
        expect('icon').toContainText('image');
    });

    it('should render a slide for each image', () => {
        spectator.setInput({ images: TEST_IMAGES });
        spectator.detectChanges();
        expect('img').toHaveLength(3);
        for (const element of spectator.queryAll('[image]')) {
            expect(element).toHaveStyle({ transform: 'translateX(-0%)' });
        }
    });

    it('should move between images with the next and previous buttons', () => {
        spectator.setInput({ images: TEST_IMAGES });
        spectator.detectChanges();
        const [previous, next] = spectator.queryAll('button');
        expect(previous).toHaveAttribute('aria-disabled', 'true');
        expect(next).toHaveAttribute('aria-disabled', 'false');
        spectator.click(next);
        spectator.detectChanges();
        expect(spectator.component.offset()).toBe(1);
        expect(spectator.query('[image]')).toHaveStyle({
            transform: 'translateX(-100%)',
        });
        expect(previous).toHaveAttribute('aria-disabled', 'false');
        spectator.click(next);
        spectator.detectChanges();
        expect(spectator.component.offset()).toBe(2);
        expect(next).toHaveAttribute('aria-disabled', 'true');
        // The button stays focusable, so a press at the end must do nothing
        spectator.click(next);
        expect(spectator.component.offset()).toBe(2);
        spectator.click(previous);
        spectator.detectChanges();
        expect(spectator.component.offset()).toBe(1);
    });

    it('should change images with a touch swipe', () => {
        spectator.setInput({ images: TEST_IMAGES });
        spectator.detectChanges();
        // jsdom has no PointerEvent, so add the pointer type to a MouseEvent
        const swipe = (from: number, to: number) => {
            for (const [type, x] of [
                ['pointerdown', from],
                ['pointerup', to],
            ] as const) {
                const event = new MouseEvent(type, {
                    bubbles: true,
                    clientX: x,
                });
                Object.defineProperty(event, 'pointerType', { value: 'touch' });
                spectator.query('[image]').dispatchEvent(event);
            }
        };
        swipe(300, 100);
        expect(spectator.component.offset()).toBe(1);
        swipe(100, 300);
        expect(spectator.component.offset()).toBe(0);
        // A short move is a tap, not a swipe
        swipe(300, 280);
        expect(spectator.component.offset()).toBe(0);
    });

    it('should jump to an image using the indicator dots', () => {
        spectator.setInput({ images: TEST_IMAGES });
        spectator.detectChanges();
        const dots = spectator.queryAll('button').slice(2);
        expect(dots).toHaveLength(3);
        spectator.click(dots[2]);
        spectator.detectChanges();
        expect(spectator.component.offset()).toBe(2);
        expect(spectator.query('[image]')).toHaveStyle({
            transform: 'translateX(-200%)',
        });
    });

    it('should go back to the first image when the images change', () => {
        spectator.setInput('images', TEST_IMAGES);
        spectator.component.offset.set(2);
        spectator.setInput('images', TEST_IMAGES.slice(0, 2));
        expect(spectator.component.offset()).toBe(0);
    });
});
