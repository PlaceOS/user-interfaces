import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { inject, Injector, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { addMinutes, startOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { EventManageComponent } from '../../app/events/event-manage.component';
import { EventStateService } from '../../app/events/event-state.service';

describe('EventManageComponent', () => {
    let spectator: SpectatorRouting<EventManageComponent>;
    const settings_values: Record<string, any> = {};
    const form_options = signal<any>({ zones: [] });
    const building = { id: 'bld-1', display_name: 'HQ', parent_id: 'reg-1' };
    let set_options: any;

    const createComponent = createRoutingFactory({
        component: EventManageComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            {
                provide: EventFormService,
                useFactory: () => {
                    const { model, form } = generateEventForm(
                        undefined,
                        undefined,
                        inject(Injector),
                    );
                    set_options = vi.fn((o) => form_options.set(o));
                    return {
                        model,
                        form,
                        options: form_options,
                        available_spaces: signal([]),
                        newForm: vi.fn(),
                        setOptions: set_options,
                        postForm: vi.fn(async () => ({ id: 'e1' })),
                    } as any;
                },
            },
            MockProvider(EventStateService, {
                calendar: 'group@events.com',
                changed: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((key: string) => settings_values[key]),
            } as any),
            MockProvider(OrganisationService, {
                building_list: signal([]),
                active_levels: signal([]),
                building,
                buildings: [building],
                organisation: { id: 'org-1' },
                levelWithID: vi.fn(() => ({
                    id: 'lvl-1',
                    parent_id: 'bld-1',
                })),
                waitUntilInitialised: vi.fn(() => Promise.resolve()),
            } as any),
        ],
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_values))
            delete settings_values[key];
        form_options.set({ zones: [] });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should add and remove tags on the model', () => {
        const input = { value: '' } as HTMLInputElement;
        spectator.component.addTag({
            value: 'vip',
            chipInput: { inputElement: input },
        } as any);
        expect(spectator.component.tag_list()).toContain('vip');
        expect(input.value).toBe('');

        spectator.component.removeTag('vip');
        expect(spectator.component.tag_list()).not.toContain('vip');
    });

    it('should ignore blank tags', () => {
        spectator.component.addTag({
            value: '   ',
            chipInput: { inputElement: { value: '' } },
        } as any);
        expect(spectator.component.tag_list()).toEqual([]);
    });

    it('should filter timezones by the model value', () => {
        spectator.component.model.update((m) => ({
            ...m,
            timezone: 'Sydney',
        }));
        const list = spectator.component.filtered_timezones();
        expect(list.length).toBeGreaterThan(0);
        expect(
            list.every((tz) => tz.toLowerCase().includes('sydney')),
        ).toBe(true);
    });

    it('should set the level zone through the form service', () => {
        spectator.component.setLevel({ id: 'lvl-9' } as any);
        expect(set_options).toHaveBeenCalledWith({ zones: ['lvl-9'] });
    });

    it('should set the active building on the organisation', () => {
        const org = spectator.inject(OrganisationService);
        const new_building = { id: 'bld-2' } as any;
        spectator.component.setBuilding(new_building);
        expect(org.building).toBe(new_building);
    });

    it('should update the event access from the publish select', async () => {
        spectator.detectChanges();
        spectator.click('mat-select');
        await spectator.fixture.whenStable();

        const options = Array.from(
            document.querySelectorAll<HTMLElement>('mat-option'),
        );
        options[2].click();
        await spectator.fixture.whenStable();

        expect(spectator.component.model().view_access).toBe('PUBLIC');
    });

    it('should resolve the level and building zones from the options', () => {
        expect(spectator.component.level_zone).toEqual({
            id: 'lvl-1',
            parent_id: 'bld-1',
        });
        expect(spectator.component.building_zone).toBe(building);
    });

    it('should describe the duration between start and selected end time', () => {
        const date = startOfDay(Date.now()).valueOf();
        spectator.component.model.update((m) => ({ ...m, date }));
        const end = addMinutes(date, 90).valueOf();
        expect(spectator.component.duration_info(end)).toContain(
            '1 hour 30 minutes',
        );
    });

    it('should expose the start date from the model', () => {
        const date = startOfDay(Date.now()).valueOf();
        spectator.component.model.update((m) => ({ ...m, date }));
        expect(spectator.component.start_date()).toBe(date);
    });
});
