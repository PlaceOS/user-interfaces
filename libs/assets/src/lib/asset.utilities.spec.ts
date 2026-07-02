jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(),
}));

import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CalendarEvent } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { addHours, subHours } from 'date-fns';

import {
    assetAvailable,
    generateAssetCategoryForm,
    generateAssetForm,
    generateAssetGroupForm,
    generateAssetPurchaseOrderForm,
    getAssetRulesForZone,
} from './asset.utilities';

describe('asset.utilities', () => {
    let injector: Injector;

    beforeEach(() => {
        injector = TestBed.inject(Injector);
        jest.clearAllMocks();
    });

    describe('generateAssetCategoryForm', () => {
        it('should default missing fields to empty values', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateAssetCategoryForm({}, injector),
            );
            expect(model()).toEqual({
                id: '',
                name: '',
                parent_category_id: '',
            });
        });

        it('should require a name', () => {
            const empty = TestBed.runInInjectionContext(() =>
                generateAssetCategoryForm({}, injector),
            );
            expect(empty.form.name().invalid()).toBe(true);

            const named = TestBed.runInInjectionContext(() =>
                generateAssetCategoryForm({ name: 'Chairs' }, injector),
            );
            expect(named.form.name().invalid()).toBe(false);
        });
    });

    describe('generateAssetPurchaseOrderForm', () => {
        it('should convert unix second dates into milliseconds', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateAssetPurchaseOrderForm(
                    { purchase_date: 100, unit_price: 42 },
                    injector,
                ),
            );
            expect(model().purchase_date).toBe(100000);
            expect(model().unit_price).toBe(42);
        });

        it('should default optional dates to null', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateAssetPurchaseOrderForm({}, injector),
            );
            expect(model().purchase_date).toBeNull();
            expect(model().expected_service_start_date).toBeNull();
            expect(model().expected_service_end_date).toBeNull();
        });

        it('should require a purchase order number', () => {
            const { form } = TestBed.runInInjectionContext(() =>
                generateAssetPurchaseOrderForm({}, injector),
            );
            expect(form.purchase_order_number().invalid()).toBe(true);
        });
    });

    describe('generateAssetGroupForm', () => {
        it('should copy the images array rather than reuse the reference', () => {
            const images = ['a.png'];
            const { model } = TestBed.runInInjectionContext(() =>
                generateAssetGroupForm({ images }, injector),
            );
            expect(model().images).toEqual(['a.png']);
            expect(model().images).not.toBe(images);
        });

        it('should require a category and a name', () => {
            const { form } = TestBed.runInInjectionContext(() =>
                generateAssetGroupForm({}, injector),
            );
            expect(form.category_id().invalid()).toBe(true);
            expect(form.name().invalid()).toBe(true);
        });
    });

    describe('generateAssetForm', () => {
        it('should default missing fields', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateAssetForm({}, injector),
            );
            expect(model()).toEqual({
                id: '',
                asset_type_id: '',
                name: '',
                serial_number: '',
                barcode: '',
                identifier: '',
                other_data: {},
                purchase_order_id: '',
            });
        });

        it('should require an asset type', () => {
            const { form } = TestBed.runInInjectionContext(() =>
                generateAssetForm({}, injector),
            );
            expect(form.asset_type_id().invalid()).toBe(true);
        });
    });

    describe('getAssetRulesForZone', () => {
        it('should resolve an empty list without a zone id', async () => {
            expect(await getAssetRulesForZone('')).toEqual([]);
            expect(ts_client.showMetadata).not.toHaveBeenCalled();
        });

        it('should return the metadata details and cache the request', async () => {
            (ts_client.showMetadata as jest.Mock).mockResolvedValue({
                details: [{ name: '*', rules: [] }],
            });

            const rules = await getAssetRulesForZone('zone-cache');
            expect(rules).toEqual([{ name: '*', rules: [] }]);
            expect(ts_client.showMetadata).toHaveBeenCalledWith(
                'zone-cache',
                'assets_config',
            );

            await getAssetRulesForZone('zone-cache');
            expect(ts_client.showMetadata).toHaveBeenCalledTimes(1);

            await getAssetRulesForZone('zone-cache', true);
            expect(ts_client.showMetadata).toHaveBeenCalledTimes(2);
        });

        it('should resolve an empty list when details are not an array', async () => {
            (ts_client.showMetadata as jest.Mock).mockResolvedValue({
                details: { name: '*' },
            });
            expect(await getAssetRulesForZone('zone-nonarray')).toEqual([]);
        });

        it('should resolve an empty list when the request errors', async () => {
            (ts_client.showMetadata as jest.Mock).mockRejectedValue(
                new Error('nope'),
            );
            expect(await getAssetRulesForZone('zone-error')).toEqual([]);
        });
    });

    describe('assetAvailable', () => {
        function make_event(overrides: any = {}): CalendarEvent {
            return {
                date: Date.now() + 24 * 60 * 60 * 1000,
                duration: 60,
                resources: [],
                space: { zones: [] },
                ext: () => undefined,
                ...overrides,
            } as any;
        }

        it('should be available when there are no rules', () => {
            expect(assetAvailable({ name: 'Chairs' } as any, [], make_event())).toBe(
                true,
            );
        });

        it('should ignore rules that do not match the item', () => {
            const rules = [
                { name: 'Tables', rules: [['visitor_type', 'guest']] },
            ] as any;
            // event visitor_type would fail the rule, but the rule targets Tables
            expect(
                assetAvailable({ name: 'Chairs' } as any, rules, make_event()),
            ).toBe(true);
        });

        it('should be unavailable when a matching rule is not satisfied', () => {
            const rules = [
                { name: '*', rules: [['visitor_type', 'guest']] },
            ] as any;
            const event = make_event({ ext: (key: string) => (key === 'visitor_type' ? 'other' : undefined) });
            expect(assetAvailable({ name: 'Chairs' } as any, rules, event)).toBe(
                false,
            );
        });

        it('should be available when a matching rule is satisfied', () => {
            const rules = [
                { name: '*', rules: [['visitor_type', 'guest']] },
            ] as any;
            const event = make_event({ ext: (key: string) => (key === 'visitor_type' ? 'guest' : undefined) });
            expect(assetAvailable({ name: 'Chairs' } as any, rules, event)).toBe(
                true,
            );
        });

        it('should honour is_before timing rules', () => {
            const rules = [{ name: 'Chairs', rules: [['is_before', 2]] }] as any;

            const future = make_event({
                date: addHours(new Date(), 5).valueOf(),
            });
            expect(
                assetAvailable({ name: 'Chairs' } as any, rules, future),
            ).toBe(true);

            const imminent = make_event({
                date: subHours(new Date(), 1).valueOf(),
            });
            expect(
                assetAvailable({ name: 'Chairs' } as any, rules, imminent),
            ).toBe(false);
        });

        it('should match rules by the item category name', () => {
            const rules = [
                { name: 'Furniture', rules: [['visitor_type', 'guest']] },
            ] as any;
            const event = make_event({ ext: () => 'other' });
            expect(
                assetAvailable(
                    { name: 'Chairs', category: { name: 'Office Furniture' } } as any,
                    rules,
                    event,
                ),
            ).toBe(false);
        });
    });
});
