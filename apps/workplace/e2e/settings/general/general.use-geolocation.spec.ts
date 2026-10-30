
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, type Debug, organisationRoutes, prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });


const REGION = 'e2e-settings-region';
const BUILDING_A = 'e2e-settings-building-a';
const BUILDING_B = 'e2e-settings-building-b';
/**
 * Decoy fallback: listed first, same timezone, location '0,0' (skipped by
 * _closestBuilding). _setDefaultBuilding's timezone match and buildings[0]
 * fallback both select it, never A or B.
 */
const BUILDING_C = 'e2e-settings-building-c';
const LEVEL_A = 'e2e-settings-level-a';
const LEVEL_B = 'e2e-settings-level-b';
const LEVEL_C = 'e2e-settings-level-c';
const LEVELS = [
    { id: LEVEL_C, parent_id: BUILDING_C, name: 'E2E Level C', display_name: 'E2E Level C',
        tags: ['level'] },
    { id: LEVEL_A, parent_id: BUILDING_A, name: 'E2E Level A', display_name: 'E2E Level A',
        tags: ['level'] },
    { id: LEVEL_B, parent_id: BUILDING_B, name: 'E2E Level B', display_name: 'E2E Level B',
        tags: ['level'] },
];
async function organisationFixture(page: Page, audit: Audit) {
    await organisationRoutes(page, {
        audit,
        prefix: 'e2e-settings-',
        region: { id: REGION, name: 'E2E Region' },
        regionParent: true,
        buildings: [
            { id: BUILDING_C, parent_id: REGION, name: 'E2E Building C', display_name: 'E2E Building C',
                tags: ['building'], timezone: 'UTC', location: '0,0' },
            { id: BUILDING_A, parent_id: REGION, name: 'E2E Building A', display_name: 'E2E Building A',
                tags: ['building'], timezone: 'UTC', location: '10,10' },
            { id: BUILDING_B, parent_id: REGION, name: 'E2E Building B', display_name: 'E2E Building B',
                tags: ['building'], timezone: 'UTC', location: '40,40' },
        ],
        levels: LEVELS,
        metadata: (name) => (name.endsWith('_booking_rules') || name === 'map_regions' ? [] : {}),
    });
}
// OrganisationService._setDefaultBuilding -> geolocation only after saved/default restoration fails.
// The selected building only settles once _setDefaultBuilding has run, after
// the geolocation step, so the geolocation call count is read after it.
const SCENARIOS = [
    { label: 'false falls back without geolocation', enabled: false, position: { latitude: 40, longitude: 40 },
        building: BUILDING_C, name: 'E2E Building C', calls: 0 },
    { label: 'true at (40,40) chooses the nearest building B', enabled: true, position: { latitude: 40, longitude: 40 },
        building: BUILDING_B, name: 'E2E Building B', calls: 1 },
    { label: 'true at (10,10) chooses the nearest building A', enabled: true, position: { latitude: 10, longitude: 10 },
        building: BUILDING_A, name: 'E2E Building A', calls: 1 },
];
for(const scenario of SCENARIOS){
 test('use_geolocation '+scenario.label,async({staffPage,audit})=>{
  const fixture=await prepare(staffPage,audit,{'app.features':['visitor-invite'],'app.default_building':null,'app.use_geolocation':scenario.enabled});
  await organisationFixture(staffPage,audit);
  await staffPage.addInitScript((position)=>{
   (window as Debug).geoCalls=0;
   Object.defineProperty(navigator,'geolocation',{configurable:true,value:{getCurrentPosition:(success:PositionCallback)=>{
    (window as Debug).geoCalls!++;
    success({coords:{latitude:position.latitude,longitude:position.longitude,accuracy:1,altitude:null,altitudeAccuracy:null,heading:null,speed:null},timestamp:Date.now()} as GeolocationPosition);
   }}});
  },scenario.position);
  await staffPage.goto('/#/book/visitor/form');await fixture.ready();
  await expect.poll(()=>staffPage.evaluate(()=>(window as Debug).app?.org?.building?.id)).toBe(scenario.building);
  await expect.poll(()=>staffPage.evaluate(()=>(window as Debug).geoCalls)).toBe(scenario.calls);
  expect(audit.fixtures['synthetic buildings']??0).toBeGreaterThan(0);
  await expect(staffPage.locator('visitor-flow-details mat-select[name="building"]')).toHaveText(scenario.name);
  await expect(staffPage.locator('visitor-flow-details input[name$=".title"]')).toBeVisible();
  await expect(staffPage.locator('visitor-flow-success')).toHaveCount(0);
  // Re-checked after the view settled: the selection and call count hold.
  expect(await staffPage.evaluate(()=>(window as Debug).app?.org?.building?.id)).toBe(scenario.building);
  expect(await staffPage.evaluate(()=>(window as Debug).geoCalls)).toBe(scenario.calls);
 });
}
