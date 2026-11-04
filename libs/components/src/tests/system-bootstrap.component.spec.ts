import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockModule, MockProvider } from 'ng-mocks';

import { OrganisationService, SettingsService } from '@placeos/common';
import * as client from '@placeos/ts-client';
import { SystemBootstrapComponent } from '../lib/system-bootstrap.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('SystemBootstrapComponent', () => {
    const STORE_KEY = 'TEST.system';
    let spectator: SpectatorRouting<SystemBootstrapComponent>;
    const org_ready = signal(true);
    const createComponent = createRoutingFactory({
        component: SystemBootstrapComponent,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(OrganisationService, {
                initialised: org_ready.asReadonly(),
                organisation: { id: 'org-1' } as never,
            }),
        ],
        imports: [
            FormsModule,
            MockModule(MatAutocompleteModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        org_ready.set(true);
        vi.useFakeTimers();
        spectator = createComponent({
            props: {
                store_key: STORE_KEY,
                heading: 'TITLE',
                system_route: (id: string) => ['/view', id],
            },
        });
    });

    afterEach(() => {
        localStorage.clear();
        vi.useRealTimers();
    });

    it('should not allow for submit when no system is set', () => {
        spectator.detectChanges();
        expect('[load]').not.toExist();
        expect('p.description').toExist();
        const button: HTMLButtonElement = spectator.query('button');
        expect(button.disabled).toBeTruthy();
        spectator.component.system_id.set('sys-B0');
        spectator.detectChanges();
        expect(button.disabled).toBeFalsy();
    });

    it('should save the system and route to it on submit', () => {
        const configured = vi.fn();
        spectator.output('configured').subscribe(configured);
        spectator.component.system_id.set('sys-B0');
        spectator.detectChanges();
        spectator.click('button');
        expect(localStorage.getItem(STORE_KEY)).toBe('sys-B0');
        expect(localStorage.getItem('trust')).toBe('true');
        expect(localStorage.getItem('fixed_device')).toBe('true');
        expect(configured).toHaveBeenCalledWith('sys-B0');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['/view', 'sys-B0'],
            { queryParamsHandling: 'preserve' },
        );
    });

    it('should auto bootstrap if there is a system query parameter', () => {
        spectator.setRouteQueryParam('system_id', 'sys-B0');
        spectator.detectChanges();
        vi.runOnlyPendingTimers();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['/view', 'sys-B0'],
            { queryParamsHandling: 'preserve' },
        );
    });

    it('should route to a saved system on load', async () => {
        localStorage.setItem(STORE_KEY, 'sys-B1');
        spectator.component.ngOnInit();
        await vi.runOnlyPendingTimersAsync();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['/view', 'sys-B1'],
            { queryParamsHandling: 'preserve' },
        );
    });

    it('should clear bootstrap if there is a clear query parameter', () => {
        localStorage.setItem(STORE_KEY, 'sys-B0');
        spectator.setRouteQueryParam('clear', 'true');
        spectator.detectChanges();
        vi.runOnlyPendingTimers();
        expect(localStorage.getItem(STORE_KEY)).toBeFalsy();
    });

    it('should show no results when the system search fails', async () => {
        vi.mocked(client.querySystems).mockRejectedValue(new Error('401'));
        spectator.component.system_id.set('Room');
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(400);
        expect(client.querySystems).toHaveBeenCalled();
        expect(spectator.component.space_list()).toEqual([]);
        expect(spectator.component.search_state()).toBe('error');
        expect(() => spectator.detectChanges()).not.toThrow();
    });

    it('should say when a search finds no systems', async () => {
        vi.mocked(client.querySystems).mockResolvedValue({ data: [] } as never);
        spectator.component.system_id.set('Room');
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(400);
        expect(spectator.component.search_state()).toBe('empty');
    });

    it('should wait for the organisation before searching', async () => {
        vi.mocked(client.querySystems).mockResolvedValue({ data: [] } as never);
        org_ready.set(false);
        spectator.component.system_id.set('Room');
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(400);
        expect(client.querySystems).not.toHaveBeenCalled();
        org_ready.set(true);
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(0);
        expect(client.querySystems).toHaveBeenCalledWith(
            expect.objectContaining({ q: 'Room', zone_id: 'org-1' }),
        );
    });
});
