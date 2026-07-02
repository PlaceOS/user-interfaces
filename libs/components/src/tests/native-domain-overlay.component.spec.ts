import { fakeAsync } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { NativeDomainOverlayComponent } from '../lib/native-domain-overlay.component';

const DOMAIN_KEY = 'PlaceOS.native.domain';
const EMAIL_KEY = 'PlaceOS.native.email';
const API_KEY_KEY = 'PlaceOS.native.api_key';

describe('NativeDomainOverlayComponent', () => {
    let spectator: Spectator<NativeDomainOverlayComponent>;
    let emitted_domains: string[];
    const original_fetch = (global as any).fetch;

    const createComponent = createComponentFactory({
        component: NativeDomainOverlayComponent,
    });

    function create() {
        spectator = createComponent();
        spectator.component.domainSet.subscribe((domain) =>
            emitted_domains.push(domain),
        );
    }

    beforeEach(() => {
        localStorage.clear();
        emitted_domains = [];
    });

    afterEach(() => {
        (global as any).fetch = original_fetch;
    });

    it('should create component', () => {
        create();
        expect(spectator.component).toBeTruthy();
        expect(spectator.query('input[name="email"]')).toExist();
        expect(spectator.query('input[name="server-address"]')).not.toExist();
    });

    it('should start in manual mode when a domain is already stored', () => {
        localStorage.setItem(DOMAIN_KEY, 'placeos.company.com');
        create();
        expect(spectator.component.manual_entry()).toBe(true);
        expect(spectator.component.server_address()).toBe(
            'placeos.company.com',
        );
        expect(spectator.query('input[name="server-address"]')).toExist();
    });

    it('should toggle between email and manual entry', () => {
        create();
        spectator.click(spectator.query('main > button'));
        expect(spectator.component.manual_entry()).toBe(true);
        expect(spectator.query('input[name="server-address"]')).toExist();
        expect(spectator.query('input[name="api-key"]')).toExist();
        expect(spectator.query('input[name="email"]')).not.toExist();
    });

    it('should error when submitting without an email', async () => {
        create();
        await spectator.component.submit();
        spectator.detectChanges();
        expect(spectator.component.error()).toBe('A work email is required.');
        expect(spectator.query('.text-error')).toContainText(
            'A work email is required.',
        );
    });

    it('should lookup and persist the domain for an email', async () => {
        (global as any).fetch = jest.fn(async () => ({
            ok: true,
            text: async () => '"placeos.example.com"',
        }));
        create();
        spectator.component.email.set('user@company.com');
        await spectator.component.submit();
        expect((global as any).fetch).toHaveBeenCalledWith(
            expect.stringContaining('user%40company.com'),
        );
        expect(emitted_domains).toEqual(['placeos.example.com']);
        expect(localStorage.getItem(DOMAIN_KEY)).toBe('placeos.example.com');
        expect(localStorage.getItem(EMAIL_KEY)).toBe('user@company.com');
    });

    it('should show an error when the email lookup fails', async () => {
        (global as any).fetch = jest.fn(async () => ({ ok: false }));
        create();
        spectator.component.email.set('user@company.com');
        await spectator.component.submit();
        expect(emitted_domains).toEqual([]);
        expect(spectator.component.error()).toBe(
            'Unable to find a server for this email address.',
        );
    });

    it('should normalise and persist manually entered domains', async () => {
        create();
        spectator.component.manual_entry.set(true);
        spectator.component.server_address.set(
            'https://placeos.company.com:8443/login',
        );
        spectator.component.api_key.set('secret-key');
        await spectator.component.submit();
        expect(emitted_domains).toEqual(['placeos.company.com:8443']);
        expect(localStorage.getItem(DOMAIN_KEY)).toBe(
            'placeos.company.com:8443',
        );
        expect(localStorage.getItem(API_KEY_KEY)).toBe('secret-key');
    });

    it('should error on invalid manual server addresses', async () => {
        create();
        spectator.component.manual_entry.set(true);
        spectator.component.server_address.set('   ');
        await spectator.component.submit();
        expect(emitted_domains).toEqual([]);
        expect(spectator.component.error()).toBe(
            'A valid server address is required.',
        );
    });

    it('should display errors passed from the parent', () => {
        create();
        spectator.setInput('serverError', 'Server unavailable');
        expect(spectator.component.error()).toBe('Server unavailable');
        expect(spectator.query('.text-error')).toContainText(
            'Server unavailable',
        );
    });

    it('should auto-accept stored settings after a period of inactivity', fakeAsync(() => {
        localStorage.setItem(DOMAIN_KEY, 'placeos.company.com');
        create();
        spectator.setInput('autoAccept', true);
        expect(spectator.component.auto_accept_in()).toBe(15);
        spectator.tick(14000);
        expect(spectator.component.auto_accept_in()).toBe(1);
        expect(emitted_domains).toEqual([]);
        // Activity resets the countdown
        spectator.component.resetAutoAccept();
        expect(spectator.component.auto_accept_in()).toBe(15);
        spectator.tick(15000);
        expect(emitted_domains).toEqual(['placeos.company.com']);
        expect(spectator.component.auto_accept_in()).toBe(0);
    }));
});
