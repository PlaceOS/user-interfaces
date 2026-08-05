import { signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { OrganisationService, SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    DeskQrItem,
    DesksStateService,
} from '../../app/desks/desks-state.service';
import { DesksTopbarComponent } from '../../app/desks/desks-topbar.component';
import { DesksComponent } from '../../app/desks/desks.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('DesksComponent', () => {
    const levelsForBuilding = (building: any) =>
        building?.id === 'bld-2' ? [{ id: 'level-b' }] : [{ id: 'level-a' }];
    let spectator: SpectatorRouting<DesksComponent>;
    let active_building: WritableSignal<any>;
    let active_region: WritableSignal<any>;
    let current_building: any;
    let filters_signal: ReturnType<typeof signal<any>>;
    let print_desk_signal: ReturnType<typeof signal<DeskQrItem | null>>;
    const organisation_service: any = {
        buildings: [
            { id: 'bld-1', parent_id: 'region-1' },
            { id: 'bld-2', parent_id: 'region-1' },
        ],
        levelsForBuilding: vi.fn(levelsForBuilding),
        levelsForRegion: vi.fn(() => [{ id: 'level-a' }, { id: 'level-b' }]),
        levelWithID: vi.fn(),
        active_building: undefined,
        active_region: undefined,
        get building() {
            return current_building;
        },
        set building(value) {
            current_building = value;
        },
    };
    const createComponent = createRoutingFactory({
        component: DesksComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(DesksTopbarComponent),
            MockComponent(IconComponent),
            MockComponent(SearchbarComponent),
        ],
        providers: [
            MockProvider(DesksStateService, {
                refresh: vi.fn(),
                filters: signal({}),
                print_desk: signal(null),
                loading: signal(false),
                setFilters: vi.fn(),
                rejectAllDesks: vi.fn(),
                editDesk: vi.fn(),
                addDesks: vi.fn(),
            } as any),
            MockProvider(OrganisationService, organisation_service),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [
            MockModule(MatProgressBarModule),
            MockModule(MatTabsModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => {
        organisation_service.levelsForBuilding.mockImplementation(
            levelsForBuilding,
        );
        current_building = { id: 'bld-1', parent_id: 'region-1' };
        active_building = signal(current_building);
        active_region = signal({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        filters_signal = signal({ zones: ['level-a'] });
        print_desk_signal = signal<DeskQrItem | null>(null);
        spectator = createComponent({
            providers: [
                MockProvider(DesksStateService, {
                    refresh: vi.fn(),
                    filters: filters_signal,
                    print_desk: print_desk_signal,
                    loading: signal(false),
                    setFilters: vi.fn((filters) =>
                        filters_signal.set({
                            ...filters_signal(),
                            ...filters,
                        }),
                    ),
                    rejectAllDesks: vi.fn(),
                    editDesk: vi.fn(),
                    addDesks: vi.fn(),
                } as any),
                MockProvider(SettingsService, {
                    get: ((name: string) =>
                        name === 'app.use_region' ? false : undefined) as any,
                } as any),
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list parking-only levels last', () => {
        organisation_service.levelsForBuilding.mockReturnValue([
            { id: 'level-parking', tags: ['level', 'parking'] },
            { id: 'level-ground', tags: ['level'] },
        ]);
        current_building = { id: 'bld-3', parent_id: 'region-1' };
        active_building.set(current_building);
        spectator.component.path.set('manage');
        spectator.detectChanges();

        expect(
            spectator.component.levels().map((lvl: any) => lvl.id),
        ).toEqual(['level-ground', 'level-parking']);
    });

    it('should clear stale zones when the active building changes', () => {
        // Events view defaults to "all levels" (empty selection). When the
        // building changes, zones that don't belong to the new building must
        // be dropped so the user isn't left with a stale selection.
        const injected_building = spectator.inject(OrganisationService)
            .active_building as unknown as WritableSignal<any>;
        // Flush the initial `toObservable` emissions, then restore the active
        // selection (initial sync may clear it) so we test the building change.
        spectator.detectChanges();
        filters_signal.set({ zones: ['level-a'] });
        const update_zones = vi.spyOn(spectator.component, 'updateZones');
        update_zones.mockClear();

        current_building = { id: 'bld-2', parent_id: 'region-1' };
        injected_building.set(current_building);
        // `toObservable` emits the signal change via an effect, flushed on the
        // next change detection cycle.
        spectator.detectChanges();

        expect(update_zones).toHaveBeenCalledWith([]);
    });

    it('should clear search when switching desk views', () => {
        const desks_state = spectator.inject(DesksStateService);
        (desks_state.setFilters as any).mockClear();
        filters_signal.set({
            zones: ['level-a'],
            view: 'manage',
            search: 'Desk 1',
        });

        spectator.component.path.set('events');
        (spectator.component as any)._updateView();

        expect(desks_state.setFilters).toHaveBeenCalledWith({
            view: 'events',
            search: '',
        });
    });

    it('should restore all levels when returning from desk management', () => {
        filters_signal.set({ zones: ['level-a'], view: 'manage' });

        spectator.component.path.set('events');
        (spectator.component as any)._updateView();

        expect(filters_signal().zones).toEqual([]);
    });

    it('should render selected desk QR code outside the print-hidden content', () => {
        print_desk_signal.set({
            id: 'desk-1',
            name: 'Desk 1',
            qr_code: 'data:image/png;base64,qr-code',
            qr_link: 'http://localhost/workplace/#/book/code?asset_id=desk-1',
        });
        spectator.detectChanges();

        const print_content = spectator.query('.desk-qr-print-preview');

        expect(print_content).toBeTruthy();
        expect(print_content.closest('.print\\:hidden')).toBeFalsy();
        expect(print_content.querySelector('img')?.getAttribute('src')).toBe(
            'data:image/png;base64,qr-code',
        );
        expect(print_content.textContent).toContain('Desk 1');
    });

    it.todo('should handle routing events');
});
