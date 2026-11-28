import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRoute,
    convertToParamMap,
    provideRouter,
} from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BuildingLevel, OrganisationService } from '@placeos/common';

import { Map3DPageComponent } from '../../app/map-manager/map-3d-page.component';
import { MapManagementService } from '../../app/map-manager/map-management.service';

vi.mock('@placeos/ts-client', { spy: true });

class FakeViewer {
    public tilt = 48;
    public bearing = 0;
    public zoom = 1;
    public onPick: unknown = null;
    public onHover: unknown = null;
    public setMapData = vi.fn();
    public refresh = vi.fn();
    public setHighlight = vi.fn();
    public setHover = vi.fn();
    public setAngles = vi.fn();
    public turnBy = vi.fn();
    public setZoom = vi.fn();
    public resetView = vi.fn();
    public panBy = vi.fn();
    public draw = vi.fn(async () => draws);
    public destroy = vi.fn();
}

/** What the fake viewer's draw() resolves to */
let draws = true;

const MAP =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">' +
    '<g id="base"><rect x="0" y="0" width="400" height="200" fill="#eee"/></g>' +
    '<g id="furniture"><rect id="table-1" x="100" y="50" width="60" height="30" fill="#fff"/></g>' +
    '<g id="walls"><line x1="0" y1="0" x2="400" y2="0" stroke="#333" stroke-width="4"/>' +
    '<line x1="0" y1="200" x2="400" y2="200" stroke="#333" stroke-width="4"/></g>' +
    '</svg>';

describe('Map3DPageComponent', () => {
    let spectator: Spectator<Map3DPageComponent>;
    let manager: Record<string, ReturnType<typeof vi.fn>>;
    let map_text = MAP;
    let viewer: FakeViewer;
    const level = new BuildingLevel({
        id: 'l1',
        parent_id: 'b1',
        name: 'Level 1',
        map_id: '/maps/l1.svg',
    });

    const createComponent = createComponentFactory({
        component: Map3DPageComponent,
        detectChanges: false,
        providers: [
            provideRouter([]),
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        paramMap: convertToParamMap({ level_id: 'l1' }),
                    },
                },
            },
            { provide: MatDialog, useValue: { open: vi.fn() } },
            {
                provide: OrganisationService,
                useValue: {
                    waitUntilInitialised: vi.fn(async () => undefined),
                },
            },
            { provide: MapManagementService, useValue: {} },
        ],
    });

    async function mount() {
        manager = {
            level: vi.fn(() => level),
            building: vi.fn(() => undefined),
            loadMapText: vi.fn(async () => map_text),
            protectedIdSources: vi.fn(() => ({
                desks: async () => [{ id: 'table-1', kind: 'desk', label: '' }],
            })),
            currentMapId: vi.fn(async () => level.map_id),
            saveLevelMap: vi.fn(async () => ({
                upload_id: 'u1',
                map_id: '/api/engine/v2/uploads/u1/url',
            })),
        };
        spectator = createComponent({
            providers: [{ provide: MapManagementService, useValue: manager }],
        });
        viewer = new FakeViewer();
        Object.assign(spectator.component, {
            _createViewer: () => viewer,
            _render_check: { check: async () => ({ ok: true }) },
        });
        for (let i = 0; i < 6; i++) {
            spectator.detectChanges();
            await spectator.fixture.whenStable();
            await new Promise((resolve) => setTimeout(resolve, 0));
        }
        spectator.detectChanges();
    }

    beforeEach(() => {
        vi.clearAllMocks();
        map_text = MAP;
        draws = true;
    });

    afterEach(() => spectator?.fixture.destroy());

    it('converts a flat map when it opens, without holding the user on the page', async () => {
        await mount();
        const { component } = spectator;
        expect(component.ready()).toBe(true);
        expect(component.auto_converted()).toBe(true);
        expect(component.counts().wall).toBe(2);
        expect(component.counts().desk).toBe(1);
        expect(component.dirty()).toBe(true);
        expect(component.hasUnsavedChanges()).toBe(false);
        expect(viewer.setMapData).toHaveBeenCalled();
        expect(spectator.query('[layers] li')).toBeTruthy();
    });

    it('opens a map that already has a 3D view as it is', async () => {
        map_text = MAP.replace('<svg', '<svg data-3d-unit="8"').replace(
            '<g id="walls"',
            '<g id="walls" data-3d-kind="glass" data-3d-height="2"',
        );
        await mount();
        const { component } = spectator;
        expect(component.auto_converted()).toBe(false);
        expect(component.dirty()).toBe(false);
        expect(component.has_saved_3d()).toBe(true);
        expect(component.counts().glass).toBe(2);
        expect(component.width_metres()).toBe(50);
    });

    it('changes what the selection is, redraws, and can undo', async () => {
        await mount();
        const { component } = spectator;
        const walls = component
            .layers()
            .find((layer) => layer.name === 'walls')!;
        component.selectElement(walls.element);
        expect(component.selected()).toHaveLength(2);
        expect(component.selection_kind()).toBe('wall');

        component.assign('partition');
        expect(component.counts().partition).toBe(2);
        expect(component.hasUnsavedChanges()).toBe(true);
        expect(viewer.refresh).toHaveBeenCalled();
        expect(viewer.setHighlight).toHaveBeenCalled();

        component.undo();
        expect(component.counts().wall).toBe(2);
        component.redo();
        expect(component.counts().partition).toBe(2);
    });

    it('sets a height for the selection and for a whole kind', async () => {
        await mount();
        const { component } = spectator;
        component.setKindHeight('wall', '2');
        expect(component.heights().wall).toBe(2);
        const [table] = component
            .layers()
            .filter((_) => _.name === 'furniture');
        component.selectElement(table.element);
        component.setSelectionHeight('1.1');
        expect(component.selection_height()).toBe(1.1);
    });

    it('saves the map with its 3D annotations', async () => {
        await mount();
        const { component } = spectator;
        await component.save();
        expect(manager['saveLevelMap']).toHaveBeenCalledTimes(1);
        const [saved_level, markup] = manager['saveLevelMap'].mock.calls[0];
        expect(saved_level).toBe(level);
        expect(markup).toContain('data-3d-unit=');
        expect(markup).toContain('data-3d-kind="wall"');
        expect(markup).toContain('id="table-1"');
        expect(component.dirty()).toBe(false);
        expect(component.has_saved_3d()).toBe(true);
    });

    it('does not save over a map changed elsewhere unless confirmed', async () => {
        await mount();
        const { component } = spectator;
        manager['currentMapId'].mockResolvedValue('/maps/other.svg');
        vi.spyOn(component as any, '_confirm').mockResolvedValue(false);
        await component.save();
        expect(manager['saveLevelMap']).not.toHaveBeenCalled();
        expect(component.dirty()).toBe(true);
    });

    it('switches the preview between plan and 3D', async () => {
        await mount();
        spectator.component.setPlanView(true);
        expect(viewer.setAngles).toHaveBeenLastCalledWith(0, 0);
        spectator.component.setPlanView(false);
        expect(viewer.setAngles).toHaveBeenLastCalledWith(48, 0);
    });

    it('shows a load error when the browser cannot draw the map', async () => {
        draws = false;
        await mount();
        expect(spectator.component.ready()).toBe(false);
        expect(spectator.component.error()).toContain(
            'APP.CONCIERGE.MAPS_3D_DRAW_ERROR',
        );
    });

    it('does not save when it cannot check the map on the server', async () => {
        await mount();
        const { component } = spectator;
        manager['currentMapId'].mockRejectedValue(new Error('offline'));
        await component.save();
        expect(manager['saveLevelMap']).not.toHaveBeenCalled();
        expect(component.dirty()).toBe(true);
    });

    it('lists the parts of an expanded group and adds one with shift', async () => {
        await mount();
        const { component } = spectator;
        const [furniture] = component
            .layers()
            .filter((_) => _.name === 'furniture');
        component.selectElement(furniture.element);
        component.toggleLayer(furniture.element);
        spectator.detectChanges();
        const part = spectator.query<HTMLButtonElement>(
            '[layer-shape] button',
        )!;
        expect(part).toHaveText('table-1');
        part.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
        expect(component.targets().map((_) => _.id)).toEqual([
            'furniture',
            'table-1',
        ]);
        part.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
        expect(component.targets().map((_) => _.id)).toEqual(['furniture']);
    });

    it('pans the preview with the arrow keys', async () => {
        await mount();
        const preview = spectator.query<HTMLElement>('[preview]')!;
        expect(preview.tabIndex).toBe(0);
        preview.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
        );
        expect(viewer.panBy).toHaveBeenCalledWith(-1, 0);
    });

    it('moves focus to the preview when the selection is cleared', async () => {
        await mount();
        const { component } = spectator;
        component.selectElement(component.layers()[0].element);
        spectator.detectChanges();
        spectator.click('[clear-selection]');
        expect(document.activeElement).toBe(spectator.query('[preview]'));
    });
});
