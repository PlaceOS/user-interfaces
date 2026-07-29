import { Directive, input, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AuthenticatedImageDirective } from '@placeos/components';
import { PlaylistThumbnailComponent } from '../../app/shared/playlist-thumbnail.component';
import { SignageService } from '../../app/signage.service';

@Directive({ selector: 'img[auth]' })
class AuthenticatedImageStubDirective {
    public readonly source = input<string>();
}

describe('PlaylistThumbnailComponent', () => {
    const playlist_thumbnail_media = signal<Record<string, string[]>>({
        'playlist-1': ['/thumbnail/1', '/thumbnail/2'],
    });
    const queue_meta = vi.fn();
    const service_stub = {
        playlist_thumbnail_media,
        queuePlaylistMeta: queue_meta,
    };
    const original_observer = (global as any).IntersectionObserver;
    let observer_callback: IntersectionObserverCallback;
    let disconnect_count = 0;

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistThumbnailComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(PlaylistThumbnailComponent, {
                remove: { imports: [AuthenticatedImageDirective] },
                add: { imports: [AuthenticatedImageStubDirective] },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(PlaylistThumbnailComponent);
        fixture.componentRef.setInput('playlist', {
            id: 'playlist-1',
            name: 'News',
        });
        await fixture.whenStable();
        return fixture;
    }

    beforeEach(() => {
        vi.clearAllMocks();
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

    it('renders images and queues metadata only while in view', async () => {
        const fixture = await make();
        expect(fixture.nativeElement.querySelectorAll('img')).toHaveLength(0);
        expect(queue_meta).not.toHaveBeenCalled();

        observer_callback(
            [{ isIntersecting: true } as IntersectionObserverEntry],
            {} as IntersectionObserver,
        );
        await fixture.whenStable();

        expect(queue_meta).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'playlist-1' }),
        );
        expect(fixture.nativeElement.querySelectorAll('img')).toHaveLength(2);

        observer_callback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            {} as IntersectionObserver,
        );
        await fixture.whenStable();

        expect(fixture.nativeElement.querySelectorAll('img')).toHaveLength(0);
    });

    it('disconnects its observer when destroyed', async () => {
        const fixture = await make();
        fixture.destroy();
        expect(disconnect_count).toBe(1);
    });
});
