import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { MockProvider } from 'ng-mocks';

import { CodeFlowErrorComponent } from '../../app/book/code-flow-error.component';

describe('CodeFlowErrorComponent', () => {
    let spectator: SpectatorRouting<CodeFlowErrorComponent>;
    const createComponent = createRoutingFactory({
        component: CodeFlowErrorComponent,
        providers: [MockProvider(BookingFormService)],
        stubsEnabled: false,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should default to the generic error state', () => {
        expect(spectator.component.type()).toBe('other');
        expect(spectator.component.asset_type()).toBe('resource');
        expect(spectator.query('p')?.textContent).toContain(
            'You do not have a booking',
        );
    });

    it('should always render a continue link back home', () => {
        const links = spectator.queryAll('a[btn]');
        const home = links.find((l) => l.getAttribute('href') === '/');
        expect(home).toBeTruthy();
    });

    it('should reflect the type/asset_type/asset_id query params', () => {
        spectator.setRouteQueryParam('type', 'wrong_resource');
        spectator.setRouteQueryParam('asset_type', 'desk');
        spectator.setRouteQueryParam('asset_id', 'desk-42');
        expect(spectator.component.type()).toBe('wrong_resource');
        expect(spectator.component.asset_type()).toBe('desk');
        expect(spectator.component.asset_id()).toBe('desk-42');
    });

    it('should show the wrong-resource message', () => {
        spectator.setRouteQueryParam('type', 'wrong_resource');
        spectator.detectChanges();
        expect(spectator.query('p')?.textContent).toContain(
            'different resource',
        );
    });

    it('should show a try-again link carrying the asset_id when not started', () => {
        spectator.setRouteQueryParam('type', 'not_started');
        spectator.setRouteQueryParam('asset_id', 'desk-7');
        spectator.detectChanges();
        expect(spectator.query('p')?.textContent).toContain(
            'has not started yet',
        );
        const try_again = spectator
            .queryAll('a[btn]')
            .find((l) => l.getAttribute('href')?.includes('/book/code'));
        expect(try_again).toBeTruthy();
        expect(try_again!.getAttribute('href')).toContain('asset_id=desk-7');
    });

    it('should show a book link for the generic error state', () => {
        spectator.setRouteQueryParam('asset_id', 'desk-3');
        spectator.detectChanges();
        const book = spectator
            .queryAll('a[btn]')
            .find((l) => l.getAttribute('href')?.includes('/book/desk'));
        expect(book).toBeTruthy();
        expect(book!.getAttribute('href')).toContain('asset_id=desk-3');
    });

    it('should not show a book link when the booking has not started', () => {
        spectator.setRouteQueryParam('type', 'not_started');
        spectator.detectChanges();
        const book = spectator
            .queryAll('a[btn]')
            .find((l) => l.getAttribute('href')?.includes('/book/desk'));
        expect(book).toBeFalsy();
    });

    it('should show a book link when there is no booking', () => {
        spectator.setRouteQueryParam('type', 'no_booking');
        spectator.setRouteQueryParam('asset_id', 'desk-9');
        spectator.detectChanges();
        const book = spectator
            .queryAll('a[btn]')
            .find((l) => l.getAttribute('href')?.includes('/book/desk'));
        expect(book).toBeTruthy();
        expect(book!.getAttribute('href')).toContain('asset_id=desk-9');
    });
});
