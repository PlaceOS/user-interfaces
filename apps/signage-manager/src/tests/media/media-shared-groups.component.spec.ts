import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { showSignageMedia, SignageMedia } from '@placeos/ts-client';
import { MediaSharedGroupsComponent } from '../../app/media/media-shared-groups.component';
import { SignageContextService } from '../../app/signage-context.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Serve the media item as shared with `groups` */
function sharedWith(groups: { id: string; name: string }[]) {
    vi.mocked(showSignageMedia).mockResolvedValue({
        shared_with: groups,
    } as unknown as SignageMedia);
}

describe('MediaSharedGroupsComponent', () => {
    /** Report the row as scrolled into view */
    let showRow: () => void;

    beforeEach(() => {
        vi.clearAllMocks();
        vi.stubGlobal(
            'ResizeObserver',
            class {
                observe() {}
                unobserve() {}
                disconnect() {}
            },
        );
        vi.stubGlobal(
            'IntersectionObserver',
            class {
                constructor(
                    callback: (entries: { isIntersecting: boolean }[]) => void,
                ) {
                    showRow = () => callback([{ isIntersecting: true }]);
                }
                observe() {}
                disconnect() {}
            },
        );
    });

    afterEach(() => vi.unstubAllGlobals());

    function make() {
        TestBed.configureTestingModule({
            imports: [MediaSharedGroupsComponent],
            providers: [
                {
                    provide: SignageContextService,
                    useValue: { api_group_id: signal('group-1') },
                },
            ],
        });
        const fixture = TestBed.createComponent(MediaSharedGroupsComponent);
        fixture.componentRef.setInput('item_id', 'media-1');
        fixture.detectChanges();
        return fixture;
    }

    async function settle(fixture: ReturnType<typeof make>) {
        TestBed.tick();
        await fixture.whenStable();
        fixture.detectChanges();
    }

    it('loads the shared groups only once the row is in view', async () => {
        sharedWith([]);
        const fixture = make();
        await settle(fixture);

        expect(showSignageMedia).not.toHaveBeenCalled();

        showRow();
        await settle(fixture);

        expect(showSignageMedia).toHaveBeenCalledExactlyOnceWith('media-1', {
            group_id: 'group-1',
        });
    });

    it('shows the groups only when shared beyond the group in view', async () => {
        sharedWith([{ id: 'group-1', name: 'Lobby' }]);
        const own = make();
        showRow();
        await settle(own);

        expect(own.componentInstance.visible()).toBe(false);
        expect(own.componentInstance.max_width()).toBe(1);
        expect(own.nativeElement.querySelector('li')).toBeNull();

        sharedWith([
            { id: 'group-1', name: 'Lobby' },
            { id: 'group-2', name: 'Cafe' },
        ]);
        TestBed.resetTestingModule();
        const shared = make();
        showRow();
        await settle(shared);

        expect(shared.componentInstance.visible()).toBe(true);
        expect(
            [...shared.nativeElement.querySelectorAll('li')].map((li) =>
                li.textContent.trim(),
            ),
        ).toEqual(['Lobby', 'Cafe']);
    });
});
