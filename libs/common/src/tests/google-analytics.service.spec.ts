import { GoogleAnalyticsService } from '../lib/google-analytics.service';

type GtagCommand = unknown[];

function dataLayerCommands(): GtagCommand[] {
    return window.dataLayer as unknown as GtagCommand[];
}

describe('GoogleAnalyticsService', () => {
    let service: GoogleAnalyticsService;

    beforeEach(() => {
        service = new GoogleAnalyticsService();
        delete window.gtag;
        window.dataLayer = [];
        document.head.innerHTML = '';
        vi.spyOn(console, 'log').mockImplementation(() => undefined);
    });

    afterEach(() => {
        delete window.gtag;
        window.dataLayer = [];
        document.head.innerHTML = '';
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('should load gtag.js for a GA4 measurement ID', () => {
        service.init('G-S6TDS95BDH');

        const scripts = Array.from(document.querySelectorAll('script'));
        const injected = scripts.find((s) =>
            s.src.includes('googletagmanager.com'),
        );
        expect(injected?.src).toBe(
            'https://www.googletagmanager.com/gtag/js?id=G-S6TDS95BDH',
        );
        expect(dataLayerCommands()[0][0]).toBe('js');
        expect(dataLayerCommands()[0][1]).toBeInstanceOf(Date);
    });

    it('should keep loading gtm.js for a GTM container ID', () => {
        service.init('GTM-ABC123');

        const scripts = Array.from(document.querySelectorAll('script'));
        const injected = scripts.find((s) =>
            s.src.includes('googletagmanager.com'),
        );
        expect(injected?.src).toBe(
            'https://www.googletagmanager.com/gtm.js?id=GTM-ABC123',
        );
        expect(window.dataLayer[0]).toMatchObject({
            'gtm.start': expect.any(Number),
            event: 'gtm.js',
        });
    });

    it('should queue the config command on load for GA4', () => {
        service.init('G-S6TDS95BDH');
        service.load('G-S6TDS95BDH');

        const commands = dataLayerCommands();
        expect(commands[commands.length - 1][0]).toBe('config');
        expect(commands[commands.length - 1][1]).toBe('G-S6TDS95BDH');
        expect(commands[commands.length - 1][2]).toEqual({
            send_page_view: false,
        });
    });

    it('should emit a page_view command on navigation for GA4', () => {
        vi.useFakeTimers();
        service.init('G-S6TDS95BDH');
        service.load('G-S6TDS95BDH');
        service.page('/landing');
        vi.advanceTimersByTime(200);

        const commands = dataLayerCommands();
        const page_view = commands.find((cmd) => cmd[0] === 'event');
        expect(page_view).toBeTruthy();
        expect(page_view?.[1]).toBe('page_view');
        expect(page_view?.[2]).toMatchObject({ page_path: '/landing' });
    });

    it('should emit custom events for GA4', () => {
        vi.useFakeTimers();
        service.init('G-S6TDS95BDH');
        service.load('G-S6TDS95BDH');
        service.event('bookings', 'desk_booked', 'Level 1');
        vi.advanceTimersByTime(200);

        const commands = dataLayerCommands();
        const event = commands.find((cmd) => cmd[0] === 'event');
        expect(event?.[1]).toBe('desk_booked');
        expect(event?.[2]).toMatchObject({
            event_category: 'bookings',
            event_label: 'Level 1',
        });
    });

    it('should throw when posting before analytics is installed', () => {
        expect(() => service.page('/')).toThrowError(
            "Google Analytics hasn't been installed on this page",
        );
        expect(() => service.event('a', 'b')).toThrowError(
            "Google Analytics hasn't been installed on this page",
        );
    });

    it('should send a valid GA4 authentication event name', () => {
        vi.useFakeTimers();
        service.init('G-S6TDS95BDH');
        service.load('G-S6TDS95BDH');
        service.setUser('user-123');
        vi.advanceTimersByTime(200);

        const events = dataLayerCommands().filter((cmd) => cmd[0] === 'event');
        expect(events).toHaveLength(1);
        expect(events[0][1]).toBe('user_id_available');
    });

    it('should preserve the GTM authentication action', () => {
        vi.useFakeTimers();
        service.init('GTM-ABC123');
        service.setUser('user-123');
        vi.advanceTimersByTime(200);

        expect(window.dataLayer).toContainEqual({
            event: 'event',
            category: 'authentication',
            action: 'user-id available',
            label: undefined,
        });
    });

    it('should throw when disabled', () => {
        service.enabled = false;
        service.init('G-S6TDS95BDH');
        expect(document.querySelector('script')).toBeNull();
        expect(window.dataLayer).toEqual([]);
        expect(window.gtag).toBeUndefined();
        expect(() => service.load('G-S6TDS95BDH')).toThrowError(
            'Google Analytics needs to be enabled before being initialised',
        );
    });
});
