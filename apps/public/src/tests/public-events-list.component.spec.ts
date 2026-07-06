import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PublicEventsListComponent } from '../app/public-events-list.component';
import { PublicEvent } from '../app/public-events.service';

describe('PublicEventsListComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PublicEventsListComponent],
            providers: [provideRouter([])],
        }).compileComponents();
    });

    function create(
        inputs: Partial<{
            events: PublicEvent[];
            loading: string;
            system_id: string;
        }> = {},
    ): ComponentFixture<PublicEventsListComponent> {
        const fixture = TestBed.createComponent(PublicEventsListComponent);
        for (const [key, value] of Object.entries(inputs)) {
            fixture.componentRef.setInput(key, value);
        }
        fixture.detectChanges();
        return fixture;
    }

    it('shows an empty-state message when there are no events', () => {
        const fixture = create({ events: [] });
        expect(fixture.nativeElement.textContent).toContain(
            'No public events are available right now.',
        );
        expect(fixture.nativeElement.querySelectorAll('article').length).toBe(0);
    });

    it('shows the loading text instead of the list while loading', () => {
        const fixture = create({
            events: [{ id: 'e1', title: 'Hidden' }],
            loading: 'Loading public events...',
        });
        expect(fixture.nativeElement.textContent).toContain(
            'Loading public events...',
        );
        expect(fixture.nativeElement.querySelectorAll('article').length).toBe(0);
    });

    it('renders a card per event with title, location and stripped description', () => {
        const fixture = create({
            events: [
                {
                    id: 'e1',
                    title: 'Rooftop Mixer',
                    location: 'Level 10 Terrace',
                    description: '<b>Great</b> evening event',
                },
            ],
            system_id: 'sys-1',
        });
        const article = fixture.nativeElement.querySelector('article');
        expect(article).toBeTruthy();
        expect(article.textContent).toContain('Rooftop Mixer');
        expect(article.textContent).toContain('Level 10 Terrace');
        expect(article.textContent).toContain('Great evening event');
        expect(article.textContent).not.toContain('<b>');
    });

    it('builds a details router link using the system and event id', () => {
        const fixture = create({
            events: [{ id: 'e1', title: 'Rooftop Mixer' }],
            system_id: 'sys-1',
        });
        const link = fixture.nativeElement.querySelector('article a');
        expect(link?.getAttribute('href')).toBe('/events/sys-1/e1');
    });

    it('emits refresh when the refresh button is clicked', () => {
        const fixture = create({ events: [] });
        let emitted = 0;
        fixture.componentInstance.refresh.subscribe(() => (emitted += 1));
        fixture.nativeElement.querySelector('button').click();
        expect(emitted).toBe(1);
    });
});
