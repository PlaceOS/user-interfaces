import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AssetGroup, CalendarEvent } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { addHours, subHours } from 'date-fns';
import { AttachedResourceRuleset } from 'libs/components/src/lib/attached-resource-config-modal.component';

import {
    assetAvailable,
    generateAssetCategoryForm,
    generateAssetForm,
    generateAssetGroupForm,
    generateAssetPurchaseOrderForm,
    getAssetRulesForZone,
} from './asset.utilities';

vi.mock('@placeos/ts-client', { spy: true });

describe('asset.utilities', () => {
    let injector: Injector;

    beforeEach(() => {
        injector = TestBed.inject(Injector);
        vi.clearAllMocks();
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
        // zoneRulesetLoader caching and fallbacks are covered in libs/components
        it('should load the rules from the assets_config metadata', async () => {
            vi.mocked(ts_client.showMetadata).mockResolvedValue({
                details: [{ name: '*', rules: [] }],
            } as any);

            expect(await getAssetRulesForZone('zone-1')).toEqual([
                { name: '*', rules: [] },
            ]);
            expect(ts_client.showMetadata).toHaveBeenCalledWith(
                'zone-1',
                'assets_config',
            );
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
            };
        }

        it('should be available when there are no rules', () => {
            expect(
                assetAvailable({ name: 'Chairs' } as any, [], make_event()),
            ).toBe(true);
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
            const event = make_event({
                ext: (key: string) =>
                    key === 'visitor_type' ? 'other' : undefined,
            });
            expect(
                assetAvailable({ name: 'Chairs' } as any, rules, event),
            ).toBe(false);
        });

        it('should be available when a matching rule is satisfied', () => {
            const rules = [
                { name: '*', rules: [['visitor_type', 'guest']] },
            ] as any;
            const event = make_event({
                ext: (key: string) =>
                    key === 'visitor_type' ? 'guest' : undefined,
            });
            expect(
                assetAvailable({ name: 'Chairs' } as any, rules, event),
            ).toBe(true);
        });

        it('should honour is_before timing rules', () => {
            const rules = [
                { name: 'Chairs', rules: [['is_before', 2]] },
            ] as any;

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

        it('should honour within_hours timing rules', () => {
            const rules: AttachedResourceRuleset[] = [
                { id: 'r1', name: 'Chairs', rules: [['within_hours', 2]] },
            ];
            const chairs = { name: 'Chairs' } as AssetGroup;

            const imminent = make_event({
                date: addHours(new Date(), 1).valueOf(),
            });
            expect(assetAvailable(chairs, rules, imminent)).toBe(true);

            const later = make_event({
                date: addHours(new Date(), 5).valueOf(),
            });
            expect(assetAvailable(chairs, rules, later)).toBe(false);
        });

        it('should honour min_length and max_length duration rules', () => {
            const rules: AttachedResourceRuleset[] = [
                {
                    id: 'r1',
                    name: '*',
                    rules: [
                        ['min_length', '30 minutes'],
                        ['max_length', '2 hours'],
                    ],
                },
            ];
            const chairs = { name: 'Chairs' } as AssetGroup;
            const with_duration = (duration: number) =>
                assetAvailable(chairs, rules, make_event({ duration }));

            expect(with_duration(29)).toBe(false);
            expect(with_duration(30)).toBe(true);
            expect(with_duration(120)).toBe(true);
            expect(with_duration(121)).toBe(false);
        });

        it('should be unavailable when any matching ruleset fails', () => {
            const event = make_event({ duration: 60 });
            const chairs = { name: 'Chairs' } as AssetGroup;
            const passing: AttachedResourceRuleset = {
                id: 'r1',
                name: '*',
                rules: [['max_length', '2 hours']],
            };
            const failing: AttachedResourceRuleset = {
                id: 'r2',
                name: 'Chairs',
                rules: [['min_length', '2 hours']],
            };

            expect(assetAvailable(chairs, [passing], event)).toBe(true);
            expect(assetAvailable(chairs, [passing, failing], event)).toBe(
                false,
            );
        });

        it('should apply rules named after a zone of the space or a resource', () => {
            const rules: AttachedResourceRuleset[] = [
                {
                    id: 'r1',
                    name: 'zone-1',
                    rules: [['max_length', '30 minutes']],
                },
            ];
            const chairs = { name: 'Chairs' } as AssetGroup;

            expect(assetAvailable(chairs, rules, make_event())).toBe(true);
            expect(
                assetAvailable(
                    chairs,
                    rules,
                    make_event({ space: { zones: ['zone-1'] } }),
                ),
            ).toBe(false);
            expect(
                assetAvailable(
                    chairs,
                    rules,
                    make_event({ resources: [{ zones: ['zone-1'] }] }),
                ),
            ).toBe(false);
        });

        it('should honour after_hour and before_hour rules', () => {
            const chairs = { name: 'Chairs' } as AssetGroup;
            const at = (hour: number) =>
                make_event({ date: new Date(2030, 0, 1, hour).valueOf() });
            const after: AttachedResourceRuleset[] = [
                { id: 'r1', name: '*', rules: [['after_hour', 12]] },
            ];
            const before: AttachedResourceRuleset[] = [
                { id: 'r2', name: '*', rules: [['before_hour', 12]] },
            ];

            expect(assetAvailable(chairs, after, at(14))).toBe(true);
            expect(assetAvailable(chairs, after, at(10))).toBe(false);
            expect(assetAvailable(chairs, before, at(10))).toBe(true);
            expect(assetAvailable(chairs, before, at(14))).toBe(false);
        });

        it('should not throw for a category without a name', () => {
            const rules = [
                { name: 'Furniture', rules: [['visitor_type', 'guest']] },
            ] as any;
            expect(
                assetAvailable(
                    { name: 'Chairs', category: {} } as any,
                    rules,
                    make_event(),
                ),
            ).toBe(true);
        });

        it('should match rules by the item category name', () => {
            const rules = [
                { name: 'Furniture', rules: [['visitor_type', 'guest']] },
            ] as any;
            const event = make_event({ ext: () => 'other' });
            expect(
                assetAvailable(
                    {
                        name: 'Chairs',
                        category: { name: 'Office Furniture' },
                    } as any,
                    rules,
                    event,
                ),
            ).toBe(false);
        });
    });
});
