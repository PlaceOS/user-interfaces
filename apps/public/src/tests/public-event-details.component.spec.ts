import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PublicEventDetailsComponent } from '../app/public-event-details.component';
import { PublicEvent } from '../app/public-events.service';

describe('PublicEventDetailsComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PublicEventDetailsComponent],
            providers: [provideRouter([])],
        }).compileComponents();
    });

    function create(
        inputs: Partial<{
            event: PublicEvent | undefined;
            loading: string;
            registered: boolean;
            guest_email: string;
            system_id: string;
            show_back: boolean;
        }> = {},
    ): ComponentFixture<PublicEventDetailsComponent> {
        const fixture = TestBed.createComponent(PublicEventDetailsComponent);
        for (const [key, value] of Object.entries(inputs)) {
            fixture.componentRef.setInput(key, value);
        }
        fixture.detectChanges();
        return fixture;
    }

    function backLink(fixture: ComponentFixture<PublicEventDetailsComponent>) {
        return Array.from(
            fixture.nativeElement.querySelectorAll('a'),
        ).find((anchor) =>
            (anchor as HTMLElement).textContent?.includes('Back to events'),
        ) as HTMLAnchorElement | undefined;
    }

    it('shows a back link pointing at the events list when enabled', () => {
        const fixture = create({ system_id: 'sys-1', show_back: true });
        expect(backLink(fixture)?.getAttribute('href')).toBe('/events/sys-1');
    });

    it('hides the back link when show_back is false', () => {
        const fixture = create({ system_id: 'sys-1', show_back: false });
        expect(backLink(fixture)).toBeUndefined();
    });

    it('renders the event title, location and description html', () => {
        const fixture = create({
            event: {
                id: 'e1',
                title: 'Rooftop Mixer',
                location: 'Level 10 Terrace',
                description: '<b>Great</b> event',
            },
        });
        expect(fixture.nativeElement.textContent).toContain('Rooftop Mixer');
        expect(fixture.nativeElement.textContent).toContain('Level 10 Terrace');
        const description =
            fixture.nativeElement.querySelector('.event-description');
        expect(description?.innerHTML).toContain('<b>Great</b> event');
    });

    it('shows the confirmation message once registered', () => {
        const fixture = create({
            event: { id: 'e1', title: 'Rooftop Mixer' },
            registered: true,
            guest_email: 'guest@example.com',
        });
        expect(fixture.nativeElement.textContent).toContain(
            'Registration received for guest@example.com.',
        );
        expect(fixture.nativeElement.querySelector('button')).toBeNull();
    });

    it('emits the event when the register button is clicked', () => {
        const event = { id: 'e1', title: 'Rooftop Mixer' };
        const fixture = create({ event });
        let emitted: PublicEvent | undefined;
        fixture.componentInstance.register_event.subscribe(
            (value) => (emitted = value),
        );
        const button = fixture.nativeElement.querySelector('button');
        expect(button.disabled).toBe(false);
        button.click();
        expect(emitted).toBe(event);
    });

    it('disables the register button while loading', () => {
        const fixture = create({
            event: { id: 'e1', title: 'Rooftop Mixer' },
            loading: 'Registering...',
        });
        expect(fixture.nativeElement.querySelector('button').disabled).toBe(
            true,
        );
    });

    it('shows the loading text when no event is available yet', () => {
        const fixture = create({ event: undefined, loading: 'Loading...' });
        expect(fixture.nativeElement.textContent).toContain('Loading...');
    });

    it('shows an unavailable message when there is no event and no loading', () => {
        const fixture = create({ event: undefined, loading: '' });
        expect(fixture.nativeElement.textContent).toContain(
            'This event is not available.',
        );
    });
});
