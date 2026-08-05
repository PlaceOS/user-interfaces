import { Directive, input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AuthenticatedImageDirective } from '@placeos/components';
import { MediaThumbnailComponent } from '../../app/shared/media-thumbnail.component';

@Directive({ selector: 'img[auth]' })
class AuthenticatedImageStubDirective {
    public readonly source = input<string>();
}

describe('MediaThumbnailComponent', () => {
    const original_observer = (global as any).IntersectionObserver;
    let observer_callback: IntersectionObserverCallback;
    let disconnect_count = 0;

    async function make(item: Record<string, any>) {
        await TestBed.configureTestingModule({
            imports: [MediaThumbnailComponent],
        })
            .overrideComponent(MediaThumbnailComponent, {
                remove: { imports: [AuthenticatedImageDirective] },
                add: { imports: [AuthenticatedImageStubDirective] },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(MediaThumbnailComponent);
        fixture.componentRef.setInput('item', item);
        await fixture.whenStable();
        return fixture;
    }

    beforeEach(() => {
        disconnect_count = 0;
        (global as any).IntersectionObserver = class {
            constructor(callback: IntersectionObserverCallback) {
                observer_callback = callback;
            }
            public observe() {}
            public unobserve() {}
            public disconnect() {
                disconnect_count++;
            }
            public takeRecords() {
                return [];
            }
            public readonly root = null;
            public readonly rootMargin = '0px';
            public readonly thresholds = [0];
        };
    });

    afterEach(() => {
        (global as any).IntersectionObserver = original_observer;
    });

    it('renders the authenticated image only while in view', async () => {
        const fixture = await make({
            id: 'media-1',
            name: 'News',
            media_type: 'image',
            thumbnail_id: 'thumbnail-1',
        });
        expect(fixture.nativeElement.querySelector('img')).toBeNull();

        observer_callback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver,
        );
        await fixture.whenStable();

        expect(fixture.nativeElement.querySelector('img')).not.toBeNull();

        observer_callback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            {} as IntersectionObserver,
        );
        await fixture.whenStable();

        expect(fixture.nativeElement.querySelector('img')).toBeNull();
    });

    it('keeps the media type placeholder when no thumbnail exists', async () => {
        const fixture = await make({
            id: 'media-1',
            name: 'Web page',
            media_type: 'webpage',
        });

        observer_callback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver,
        );
        await fixture.whenStable();

        expect(fixture.nativeElement.querySelector('img')).toBeNull();
        expect(fixture.nativeElement.textContent).toContain('http');
    });

    it('disconnects its observer when destroyed', async () => {
        const fixture = await make({
            id: 'media-1',
            name: 'News',
            media_type: 'image',
        });
        fixture.destroy();
        expect(disconnect_count).toBe(1);
    });
});
