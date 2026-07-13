import { signal } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { TriggerConditionOperator } from '@placeos/ts-client';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

vi.mock('@placeos/ts-client', { spy: true });

import { queryModules, systemModuleState } from '@placeos/ts-client';

import {
    AlertConditionComparisonFormComponent,
    calculateModuleIndex,
} from '../app/dashboards/alert-condition-compare-form.component';

/** Build a mock signal-form field whose value can be read and set */
function makeField(initial: any) {
    const value = signal(initial);
    const state = {
        value,
        touched: signal(false),
        errors: signal([] as any[]),
    };
    return () => state as any;
}

/** Build a mock comparison form tree matching what the component reads */
function makeCompareForm(opts: { left?: any; right?: any; operator?: any } = {}) {
    return {
        left: makeField(
            opts.left ?? { mod: '', status: '', keys: [] },
        ),
        right: makeField(opts.right ?? ''),
        operator: makeField(opts.operator ?? TriggerConditionOperator.EQ),
    } as any;
}

const flush = () => new Promise((resolve) => setTimeout(resolve));

describe('AlertConditionComparisonFormComponent', () => {
    let spectator: Spectator<AlertConditionComparisonFormComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const create_component = createComponentFactory({
        component: AlertConditionComparisonFormComponent,
        shallow: true,
        // Disable the zoneless auto-tick: these tests assert on component
        // signals/methods, not the DOM. Auto change-detection would render the
        // experimental signal-forms + mat-select template and emit benign async
        // rxjs/material errors that vitest reports as unhandled.
        providers: [{ provide: ComponentFixtureAutoDetect, useValue: false }],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        spectator = create_component({ detectChanges: false });
        spectator.component.ngOnInit();
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    describe('calculateModuleIndex', () => {
        it('numbers modules that share a class in list order', () => {
            const modules = [
                { id: 'a', name: 'Display' },
                { id: 'b', name: 'Display' },
                { id: 'c', name: 'Bookings' },
            ] as any[];
            expect(calculateModuleIndex(modules, modules[0])).toBe(1);
            expect(calculateModuleIndex(modules, modules[1])).toBe(2);
            expect(calculateModuleIndex(modules, modules[2])).toBe(1);
        });

        it('falls back to driver class name when no name is present', () => {
            const modules = [
                { id: 'a', driver: { class_name: 'System' } },
                { id: 'b', driver: { class_name: 'System' } },
            ] as any[];
            expect(calculateModuleIndex(modules, modules[1])).toBe(2);
        });

        it('returns at least 1 for a module missing from the list', () => {
            const list = [{ id: 'a', name: 'Display' }] as any[];
            expect(calculateModuleIndex(list, { id: 'z', name: 'Other' } as any)).toBe(1);
        });
    });

    it('populates comparison operators and rhs types on init', () => {
        expect(spectator.component.right_var_type().map((_) => _.id)).toEqual([
            'constant',
            'status_var',
        ]);
        expect(spectator.component.compare_types().map((_) => _.id)).toEqual([
            TriggerConditionOperator.EQ,
            TriggerConditionOperator.NEQ,
            TriggerConditionOperator.GT,
            TriggerConditionOperator.GTE,
            TriggerConditionOperator.LT,
            TriggerConditionOperator.LTE,
            TriggerConditionOperator.AND,
            TriggerConditionOperator.OR,
            TriggerConditionOperator.XOR,
        ]);
    });

    it('joins the sub-keys of a side into a comma string', () => {
        spectator.component.left_side.set({
            mod: 'Display_1',
            status: 'power',
            keys: ['a', 'b'],
        } as any);
        expect(spectator.component.keysFor('left')).toBe('a,b');
        expect(spectator.component.keysFor('right')).toBe('');
    });

    it('splits comma separated sub-key input into an array', () => {
        spectator.component.setSideKeys('left', 'x,y,z');
        expect(spectator.component.sideData('left').keys).toEqual(['x', 'y', 'z']);
    });

    it('updates the module and status of a side independently', () => {
        spectator.component.setSideMod('left', 'Display_1');
        spectator.component.setSideStatus('left', 'power');
        expect(spectator.component.sideData('left')).toMatchObject({
            mod: 'Display_1',
            status: 'power',
        });
        // the right side is untouched
        expect(spectator.component.sideData('right').mod).toBe('');
    });

    it('writes the side data through to the form field on update', () => {
        const form = makeCompareForm();
        spectator.fixture.componentRef.setInput('form', form);
        spectator.component.setSideMod('left', 'Display_1');
        spectator.component.setSideStatus('left', 'power');

        spectator.component.updateFormForSide('left');

        expect(form.left().value()).toMatchObject({
            mod: 'Display_1',
            status: 'power',
        });
    });

    it('defaults missing sub-keys to an empty array when saving a side', () => {
        const form = makeCompareForm();
        spectator.fixture.componentRef.setInput('form', form);
        spectator.component.left_side.set({ mod: 'm', status: 's' } as any);

        spectator.component.updateFormForSide('left');

        expect(form.left().value().keys).toEqual([]);
    });

    describe('loadSystemStatusVariables', () => {
        beforeEach(() => {
            spectator.fixture.componentRef.setInput('system', {
                id: 'sys-1',
                modules: [],
            } as any);
        });

        it('maps returned state keys into selectable status variables', async () => {
            vi.mocked(systemModuleState).mockResolvedValue({
                power: true,
                volume: 50,
            });

            spectator.component.loadSystemStatusVariables('Display_1', 'left');
            await flush();

            expect(systemModuleState).toHaveBeenCalledWith('sys-1', 'Display', 1);
            expect(
                spectator.component.left_status_variables().map((_) => _.id),
            ).toEqual(['power', 'volume']);
        });

        it('falls back to a connected variable when the module has no state', async () => {
            vi.mocked(systemModuleState).mockResolvedValue({});

            spectator.component.loadSystemStatusVariables('Display_1', 'left');
            await flush();

            expect(
                spectator.component.left_status_variables().map((_) => _.id),
            ).toEqual(['connected']);
        });

        it('ignores an empty module name without querying state', () => {
            spectator.component.loadSystemStatusVariables('', 'left');
            expect(systemModuleState).not.toHaveBeenCalled();
        });

        it('notifies the user when state loading fails', async () => {
            vi.mocked(systemModuleState).mockRejectedValue(new Error('nope'));

            spectator.component.loadSystemStatusVariables('Display_1', 'left');
            await flush();

            expect(notify_open).toHaveBeenCalled();
        });
    });

    it('builds the selectable module list from the system modules on change', async () => {
        vi.mocked(queryModules).mockResolvedValue({
            data: [
                { id: 'mod-1', name: 'Display' },
                { id: 'mod-2', name: 'Display' },
                { id: 'mod-3', custom_name: 'Bookings' },
            ],
        } as any);
        const form = makeCompareForm({ left: '', right: '' });
        spectator.fixture.componentRef.setInput('form', form);
        spectator.fixture.componentRef.setInput('system', {
            id: 'sys-1',
            modules: ['mod-1', 'mod-2', 'mod-3'],
        } as any);

        spectator.component.ngOnChanges({
            system: { firstChange: true } as any,
        });
        await flush();

        expect(queryModules).toHaveBeenCalledWith({ control_system_id: 'sys-1' });
        expect(spectator.component.module_list().map((_) => _.name)).toEqual([
            'Display_1',
            'Display_2',
            'Bookings_1',
        ]);
    });
});
