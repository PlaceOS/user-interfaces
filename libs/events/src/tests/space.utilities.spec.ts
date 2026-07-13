import { Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    generateSystemsFormFields,
    isValidUrl,
    requestSpacesForZone,
} from '../lib/space.utilities';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('isValidUrl', () => {
    it('should treat empty values as valid', () => {
        expect(isValidUrl('')).toBe(true);
        expect(isValidUrl(null)).toBe(true);
    });

    it('should validate URLs', () => {
        expect(isValidUrl('https://place.tech')).toBe(true);
        expect(isValidUrl('not a url')).toBe(false);
    });
});

describe('generateSystemsFormFields', () => {
    const generate = (system: any = {}) =>
        runInInjectionContext(TestBed.inject(Injector), () =>
            generateSystemsFormFields(system, TestBed.inject(Injector)),
        );

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should populate the model from the given system', () => {
        const { model } = generate({
            id: 'sys-1',
            name: 'A System',
            email: 'sys@place.tech',
            zones: ['zone-1'],
            features: ['vc'],
            capacity: 8,
        });
        expect(model().id).toBe('sys-1');
        expect(model().name).toBe('A System');
        expect(model().email).toBe('sys@place.tech');
        expect(model().zones).toEqual(['zone-1']);
        expect(model().features).toEqual(['vc']);
        expect(model().capacity).toBe(8);
    });

    it('should split string feature lists', () => {
        const { model } = generate({ name: 'Sys', features: 'vc whiteboard' });
        expect(model().features).toEqual(['vc', 'whiteboard']);
    });

    it('should require a name and zones', () => {
        const { model, form } = generate({ id: 'sys-1', zones: ['z1'] });
        expect(form().valid()).toBe(false);
        model.update((m) => ({ ...m, name: 'Named' }));
        expect(form().valid()).toBe(true);
    });

    it('should validate URL fields', () => {
        const { model, form } = generate({
            id: 'sys-1',
            name: 'Sys',
            zones: ['z1'],
        });
        model.update((m) => ({ ...m, support_url: 'not a url' }));
        expect(form().valid()).toBe(false);
        model.update((m) => ({ ...m, support_url: 'https://place.tech' }));
        expect(form().valid()).toBe(true);
    });

    it('should validate numeric fields as digits', () => {
        const { model, form } = generate({
            id: 'sys-1',
            name: 'Sys',
            zones: ['z1'],
        });
        model.update((m) => ({ ...m, capacity: 'abc' as any }));
        expect(form().valid()).toBe(false);
        model.update((m) => ({ ...m, capacity: 12 }));
        expect(form().valid()).toBe(true);
    });

    it('should require a zone for new systems and sync it to zones', () => {
        const { model, form } = generate({ name: 'New Sys' });
        expect(form().valid()).toBe(false);
        model.update((m) => ({ ...m, zone: { id: 'zone-new' } as any }));
        TestBed.flushEffects();
        expect(model().zones).toEqual(['zone-new']);
        expect(form().valid()).toBe(true);
    });
});

describe('requestSpacesForZone', () => {
    beforeEach(() => vi.clearAllMocks());

    it('should return an empty list for a falsy zone ID', async () => {
        const spaces = await requestSpacesForZone('').toPromise();
        expect(spaces).toEqual([]);
        expect(ts_client.querySystems).not.toHaveBeenCalled();
    });

    it('should query and map systems in the zone to spaces', async () => {
        (ts_client.querySystems as any).mockResolvedValue({
            data: [{ id: 'sys-zone-1', name: 'Space 1' }],
        });
        const spaces = await requestSpacesForZone('zone-a').toPromise();
        expect(ts_client.querySystems).toHaveBeenCalledWith({
            zone_id: 'zone-a',
            limit: 500,
            signage: false,
        });
        expect(spaces).toHaveLength(1);
        expect(spaces[0].id).toBe('sys-zone-1');
    });

    it('should reuse the request for repeated calls with the same zone', async () => {
        (ts_client.querySystems as any).mockResolvedValue({ data: [] });
        await requestSpacesForZone('zone-b').toPromise();
        await requestSpacesForZone('zone-b').toPromise();
        expect(ts_client.querySystems).toHaveBeenCalledTimes(1);
    });
});
