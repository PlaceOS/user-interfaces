
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, ORIGINS, prepare, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const CATEGORY='e2e-readonly-desks-category';
const TYPE='e2e-readonly-desks-type';
const METADATA_NAME='E2E metadata source desk';
const ASSET_NAME='E2E assets source desk';
const ENGINE='/api/engine/v2/';
function exactQuery(url: URL, expected: Record<string, string>) {
    return [...url.searchParams].length === Object.keys(expected).length &&
        Object.entries(expected).every(([key, value]) => url.searchParams.get(key) === value);
}

/** The zone filter of an exact desk asset query, or undefined for any other query. */
function assetScope(url: URL): { key: 'zone_id' | 'zones'; zone: string } | undefined {
    for (const key of ['zone_id', 'zones'] as const) {
        const zone = url.searchParams.get(key);
        if (zone && exactQuery(url, { [key]: zone, type_id: TYPE, limit: '500' })) return { key, zone };
    }
    return undefined;
}

type LevelRow ={ zone?: { id?: string }; metadata?: Record<string, unknown> };

async function prepareSources(page: Page, audit: Audit) {
    const seen = { metadata: 0, categories: 0, types: 0, assets: 0 };
    // Page routes run before the context's existing read-only guard. Fallback
    // (never continue) keeps that guard authoritative for all unmatched traffic.
    // Fixture problems are recorded in the audit (failing the test in teardown)
    // and the request is aborted, never passed on to the real backend.
    await page.route('**/api/**', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (request.method() !== 'GET' || !ORIGINS.has(url.origin)) {
            await route.fallback();
            return;
        }
        let body: unknown;
        try {
            if (url.pathname === `${ENGINE}asset_categories` &&
                exactQuery(url, { hidden: 'true', limit: '500' })) {
                seen.categories++;
                body = [{ id: CATEGORY, name: '_DESKS_', hidden: true, created_at: 1 }];
            } else if (url.pathname === `${ENGINE}asset_types` &&
                exactQuery(url, { category_id: CATEGORY, limit: '500' })) {
                seen.types++;
                body = [{ id: TYPE, category_id: CATEGORY, name: '_DESKS_', brand: 'PlaceOS', created_at: 1 }];
            } else if (url.pathname === `${ENGINE}assets` && assetScope(url)) {
                // One level (zone_id=<level>), or every level of a building or
                // region (zones=<zone>), which is how the desk booking list asks.
                const scope = assetScope(url)!;
                let levels = [scope.zone];
                if (scope.key === 'zones') {
                    // A GET to the same origin-checked backend, so it cannot reach an
                    // unchecked origin or change data.
                    const levelsUrl = new URL(`${ENGINE}zones`, url.origin);
                    levelsUrl.search = new URLSearchParams({ parent_id: scope.zone, tags: 'level', limit: '500' }).toString();
                    const response = await route.fetch({ url: levelsUrl.toString(), method: 'GET', maxRedirects: 0, maxRetries: 0 });
                    const rows: unknown = response.ok() ? await response.json() : undefined;
                    const list = Array.isArray(rows) ? rows : (rows as { results?: unknown[] } | undefined)?.results;
                    levels = (list ?? []).map((zone) => (zone as { id?: string })?.id).filter((id): id is string => !!id);
                    if (!levels.length) {
                        audit.monitoring_errors.push('desk assets fixture: ' +
                            (response.ok() ? 'the zone has no levels' : 'levels GET must succeed (status ' + response.status() + ')'));
                        await route.abort('failed');
                        return;
                    }
                }
                seen.assets++;
                body = levels.map((zone_id) => ({
                    id: `e2e-readonly-asset-${zone_id}`, asset_type_id: TYPE,
                    zone_id, zones: scope.key === 'zones' ? [scope.zone, zone_id] : [zone_id],
                    map_id: `e2e-readonly-asset-map-${zone_id}`,
                    identifier: ASSET_NAME, name: ASSET_NAME, bookable: true,
                    assigned_to: '', place_groups: [], features: [], images: [],
                    security_system_groups: [],
                }));
            } else if (/^\/api\/engine\/v2\/metadata\/[^/]+\/children$/.test(url.pathname) &&
                exactQuery(url, { name: 'desks' })) {
                // Preserve real level identities from the app's own GET. Replace
                // only desk details in this browser response; never save metadata.
                // The same GET to the same origin-checked URL, with no redirect or
                // retry, so it cannot reach an unchecked origin or change data.
                const response = await route.fetch({ method: 'GET', maxRedirects: 0, maxRetries: 0 });
                const rows: unknown = response.ok() ? await response.json() : undefined;
                const problem = !response.ok() ? 'level metadata GET must succeed (status ' + response.status() + ')'
                    : !Array.isArray(rows) ? 'child metadata must be an array'
                        : rows.length === 0 ? 'fixture requires existing level metadata'
                            : (rows as LevelRow[]).some((row) => !row?.zone?.id) ? 'metadata must identify an existing level'
                                : '';
                if (problem) {
                    audit.monitoring_errors.push('desk metadata fixture: ' + problem);
                    await route.abort('failed');
                    return;
                }
                body = (rows as LevelRow[]).map((row) => ({
                    ...row,
                    metadata: {
                        ...row.metadata,
                        desks: { name: 'desks', details: [{
                            id: `e2e-readonly-metadata-${row.zone!.id}`,
                            map_id: `e2e-readonly-metadata-map-${row.zone!.id}`,
                            name: METADATA_NAME, bookable: true, assigned_to: '',
                            groups: [], features: [], images: [], security: '',
                        }] },
                    },
                }));
                seen.metadata++;
            } else {
                await route.fallback();
                return;
            }
        } catch (error) {
            audit.monitoring_errors.push('desk source fixture: ' + String(error));
            await route.abort('failed').catch(() => undefined);
            return;
        }
        audit.fixtures['desk sources'] = (audit.fixtures['desk sources'] ?? 0) + 1;
        await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) });
    });
    return seen;
}

for(const enabled of [false,true]){
 test('desks.use_assets '+enabled+' selects assets API versus level metadata',async({staffPage,audit})=>{
  // Register source fixtures after bootstrap helpers, before navigation.
  const prepared=await prepare(staffPage,audit,{'app.features':['desks'],'app.desks.use_assets':enabled,
    'app.desk.auto_allocation':null,'app.desks.auto_allocation':false,'app.desks.can_book_lockers':false});
  const seen=await prepareSources(staffPage,audit);
  await staffPage.goto('/#/book/desk/form');await prepared.ready();
  const list=staffPage.locator('desk-flow-select-list');await expect(list).toBeVisible();
  await expect(staffPage.locator('desk-flow-select-map')).toHaveCount(0);
  const expected=enabled?ASSET_NAME:METADATA_NAME;const other=enabled?METADATA_NAME:ASSET_NAME;
  await expect(list.locator('li[item]').filter({hasText:expected}).first()).toBeVisible();
  await expect(list.locator('li[item]').filter({hasText:other})).toHaveCount(0);
  if(enabled){expect(seen.categories).toBeGreaterThan(0);expect(seen.types).toBeGreaterThan(0);expect(seen.assets).toBeGreaterThan(0);}
  else {expect(seen.metadata).toBeGreaterThan(0);expect(seen.categories).toBe(0);expect(seen.types).toBe(0);expect(seen.assets).toBe(0);}
  await untouchedDesk(staffPage);
 });
}
