import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from 'libs/common/src/lib/org/organisation.service';
import { HashMap } from 'libs/common/src/lib/types';

import { SettingsDebugPanelComponent } from '../lib/settings-debug-panel.component';

// Keys under `zztest` are not in DEFAULT_SETTINGS, so the tests own them.
const SCHEMA = {
    properties: {
        zztest: {
            properties: {
                mode: { $ref: '#/$defs/mode' },
                count: { type: 'integer' },
                enabled: { type: 'boolean', description: 'Turn it on' },
            },
        },
    },
    $defs: { mode: { enum: ['day_view', 'week-view'], enumNames: ['Day'] } },
};

describe('SettingsDebugPanelComponent', () => {
    const debug_overrides = signal<HashMap>({});
    const settings = {
        overrides: signal<HashMap[]>([]),
        debug_overrides,
        get: (key: string) => debug_overrides()[key],
        setDebugOverride: vi.fn(),
        clearDebugOverrides: vi.fn(),
    };
    const org = {
        buildings: [{ id: 'bld-1', display_name: 'HQ' }],
        building_settings: { 'bld-1': { zztest: { count: 3 } } } as HashMap,
        regions: [],
        region_settings: {},
        organisation: { id: 'org-1', name: 'Acme' },
        settings: [{ zztest: { enabled: false } }],
    };

    function create() {
        TestBed.configureTestingModule({
            imports: [SettingsDebugPanelComponent],
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
            ],
        });
        const fixture = TestBed.createComponent(SettingsDebugPanelComponent);
        fixture.componentRef.setInput('schema', SCHEMA);
        return fixture.componentInstance;
    }

    const row = (panel: SettingsDebugPanelComponent, key: string) =>
        panel.rows().find((_) => _.key === key);

    beforeEach(() => {
        vi.clearAllMocks();
        debug_overrides.set({ 'app.zztest.note': 'hello' });
    });

    it('should pick a control for each setting from its schema and value', () => {
        const panel = create();
        panel.filter.set('zztest.');

        expect(panel.rows().map((_) => [_.label, _.control])).toEqual([
            ['zztest.count', 'number'],
            ['zztest.enabled', 'toggle'],
            ['zztest.mode', 'select'],
            ['zztest.note', 'text'],
        ]);
        expect(row(panel, 'app.zztest.mode').options).toEqual([
            { value: 'day_view', label: 'Day' },
            { value: 'week-view', label: 'Week view' },
        ]);
        expect(row(panel, 'app.zztest.enabled').description).toBe(
            'Turn it on',
        );
        expect(row(panel, 'app.zztest.note').overridden).toBe(true);
        expect(row(panel, 'app.zztest.count').overridden).toBe(false);
    });

    it('should list the zones that set each setting', () => {
        const panel = create();

        expect(row(panel, 'app.zztest.count').zones).toEqual([
            { type: 'Building', id: 'bld-1', name: 'HQ' },
        ]);
        // A false value is still a value that the zone sets
        expect(row(panel, 'app.zztest.enabled').zones).toEqual([
            { type: 'ORG', id: 'org-1', name: 'Acme' },
        ]);
        expect(row(panel, 'app.zztest.mode').zones).toEqual([]);
    });

    it('should collapse nested settings into groups until opened or searched', () => {
        const panel = create();
        const group = () =>
            panel.entries().find((_) => _.header?.name === 'zztest');

        expect(group().header).toEqual({
            name: 'zztest',
            count: 4,
            overridden: 1,
        });
        expect(group().rows).toEqual([]);

        panel.toggleGroup('zztest');
        expect(group().rows.map((_) => _.label)).toEqual([
            'count',
            'enabled',
            'mode',
            'note',
        ]);

        panel.toggleGroup('zztest');
        panel.filter.set('zztest.count');
        expect(group().rows.map((_) => _.label)).toEqual(['count']);
    });

    it('should parse an edited value for the type of the setting', () => {
        const panel = create();
        const save = (key: string, text: string) => {
            panel.startEdit(row(panel, key));
            panel.edit_value = text;
            panel.saveEdit();
        };

        save('app.zztest.count', 'many');
        expect(settings.setDebugOverride).not.toHaveBeenCalled();
        expect(panel.editing_key()).toBe('app.zztest.count');

        save('app.zztest.count', '12.5');
        expect(settings.setDebugOverride).toHaveBeenLastCalledWith(
            'app.zztest.count',
            12.5,
        );
        expect(panel.editing_key()).toBe('');

        save('app.zztest.note', '{"a":[1]}');
        expect(settings.setDebugOverride).toHaveBeenLastCalledWith(
            'app.zztest.note',
            { a: [1] },
        );

        save('app.zztest.note', 'plain text');
        expect(settings.setDebugOverride).toHaveBeenLastCalledWith(
            'app.zztest.note',
            'plain text',
        );
    });

    it('should start a text edit from the JSON of the current value', () => {
        debug_overrides.set({ 'app.zztest.note': { a: 1 } });
        const panel = create();

        panel.startEdit(row(panel, 'app.zztest.note'));

        expect(panel.edit_value).toBe('{"a":1}');
    });

    it('should add a new setting override from JSON input', () => {
        const prompt = vi
            .spyOn(window, 'prompt')
            .mockReturnValueOnce(' custom.feature ')
            .mockReturnValueOnce('{"enabled":true}');
        const panel = create();

        panel.addSetting();

        expect(settings.setDebugOverride).toHaveBeenCalledWith(
            'app.custom.feature',
            { enabled: true },
        );
        prompt.mockRestore();
    });

    it('should not add a setting when the user cancels a prompt', () => {
        const prompt = vi
            .spyOn(window, 'prompt')
            .mockReturnValueOnce('app.')
            .mockReturnValueOnce('app.custom.feature')
            .mockReturnValueOnce(null);
        const panel = create();

        panel.addSetting();
        panel.addSetting();

        expect(prompt).toHaveBeenCalledTimes(3);
        expect(settings.setDebugOverride).not.toHaveBeenCalled();
        prompt.mockRestore();
    });
});
