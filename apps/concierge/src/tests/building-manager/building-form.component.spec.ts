import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { BuildingFormComponent } from '../../app/building-manager/building-form.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
    notifyError: jest.fn(),
}));
jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    authority: jest.fn(() => ({ description: 'ACME' })),
    addZone: jest.fn(),
    updateZone: jest.fn(),
}));

describe('BuildingFormComponent', () => {
    let spectator: Spectator<BuildingFormComponent>;

    const createComponent = createComponentFactory({
        component: BuildingFormComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                region_list: signal([
                    { id: 'r1', name: 'North', display_name: 'North Region' },
                ]) as any,
            }),
        ],
    });

    const flush = async () => {
        for (let i = 0; i < 3; i++) {
            spectator.detectChanges();
            await spectator.fixture.whenStable();
        }
    };

    beforeEach(() => {
        (common_mod.notifySuccess as jest.Mock).mockClear();
        (common_mod.notifyError as jest.Mock).mockClear();
        (ts_client.addZone as jest.Mock).mockReset();
        (ts_client.updateZone as jest.Mock).mockReset();
        (ts_client.addZone as jest.Mock).mockResolvedValue({ id: 'new-bld' });
        (ts_client.updateZone as jest.Mock).mockResolvedValue({ id: 'b1' });
        spectator = createComponent();
    });

    afterEach(() => jest.restoreAllMocks());

    it('should default the parent to the organisation and now-timezone', () => {
        const model = spectator.component.model();
        expect(model.parent_id).toBe('org-1');
        expect(typeof model.timezone).toBe('string');
    });

    it('should populate the model from the building input', async () => {
        spectator.setInput('building', {
            id: 'b1',
            parent_id: 'r1',
            display_name: 'Alpha Tower',
            timezone: 'Australia/Sydney',
            location: '123 St',
        } as any);
        await flush();

        const model = spectator.component.model();
        expect(model.id).toBe('b1');
        expect(model.display_name).toBe('Alpha Tower');
        expect(model.timezone).toBe('Australia/Sydney');
        expect(model.location).toBe('123 St');
    });

    it('should filter the timezone list by the current model timezone', () => {
        spectator.component.model.update((m) => ({ ...m, timezone: 'sydney' }));
        const filtered = spectator.component.filtered_timezones();
        expect(filtered.length).toBeGreaterThan(0);
        expect(
            filtered.every((_) => _.toLowerCase().includes('sydney')),
        ).toBe(true);
    });

    it('should block saving and notify when required fields are missing', async () => {
        spectator.component.model.update((m) => ({ ...m, display_name: '' }));

        await spectator.component.saveChanges();

        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(ts_client.addZone).not.toHaveBeenCalled();
        expect(ts_client.updateZone).not.toHaveBeenCalled();
    });

    it('should create a new building and emit the result when valid', async () => {
        let emitted: any = null;
        spectator.component.done.subscribe((v) => (emitted = v));
        spectator.component.model.update((m) => ({
            ...m,
            id: '',
            display_name: 'New Tower',
        }));

        await spectator.component.saveChanges();

        expect(ts_client.addZone).toHaveBeenCalledWith(
            expect.objectContaining({
                tags: ['building'],
                name: 'BLD ACME New Tower',
                display_name: 'New Tower',
            }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
        expect(emitted).toEqual({ id: 'new-bld' });
        expect(spectator.component.loading()).toBe(false);
    });

    it('should update an existing building via updateZone', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            id: 'b1',
            display_name: 'Edited Tower',
        }));

        await spectator.component.saveChanges();

        expect(ts_client.updateZone).toHaveBeenCalledWith(
            'b1',
            expect.objectContaining({ name: 'BLD ACME Edited Tower' }),
        );
        expect(ts_client.addZone).not.toHaveBeenCalled();
    });

    it('should reset loading and surface an error when the save request fails', async () => {
        (ts_client.addZone as jest.Mock).mockRejectedValue({ message: 'nope' });
        spectator.component.model.update((m) => ({
            ...m,
            id: '',
            display_name: 'Broken Tower',
        }));

        await spectator.component.saveChanges().catch(() => undefined);

        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
