import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/jest';
import { signal } from '@angular/core';

import * as common_mod from '@placeos/common';
import { OrganisationService, SettingsService } from '@placeos/common';
import { ContactTracingStateService } from 'apps/concierge/src/app/reports/contact-tracing/contact-tracing-state.service';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    jsonToCsv: jest.fn(() => 'csv'),
    notifyError: jest.fn(),
    notifyWarn: jest.fn(),
}));

describe('ContactTracingStateService', () => {
    let spectator: SpectatorService<ContactTracingStateService>;
    let binding: any;
    const createService = createServiceFactory({
        service: ContactTracingStateService,
        providers: [
            {
                provide: OrganisationService,
                useValue: { binding: () => binding },
            },
            {
                provide: SettingsService,
                useValue: { get: () => undefined, time_format: 'h:mm a' },
            },
            {
                provide: ReportsStateService,
                useFactory: () => ({
                    options: signal({ start: 0, end: 0 }),
                }),
            },
        ],
    });

    beforeEach(() => {
        binding = { id: 'sys-1' };
        (common_mod.downloadFile as jest.Mock).mockClear();
        (common_mod.notifyWarn as jest.Mock).mockClear();
        spectator = createService();
    });

    it('should merge partial option updates', () => {
        spectator.service.setOptions({ user: { id: 'u1' } as any });
        expect(spectator.service.options().user).toEqual({ id: 'u1' });
        // Previous start/end are preserved across merges
        expect(spectator.service.options().start).toBeDefined();

        spectator.service.setOptions({ start: 123 });
        expect(spectator.service.options().start).toBe(123);
        expect(spectator.service.options().user).toEqual({ id: 'u1' });
    });

    it('should resolve the contact tracing system id from the org binding', () => {
        expect((spectator.service as any).system_id).toBe('sys-1');
        binding = 'sys-string';
        expect((spectator.service as any).system_id).toBe('sys-string');
    });

    it('should expose the configured time format', () => {
        expect(spectator.service.time_format).toBe('h:mm a');
    });

    it('should warn and skip download when there are no events', async () => {
        await spectator.service.downloadReport();
        expect(common_mod.notifyWarn).toHaveBeenCalledWith(
            'No events to download.',
        );
        expect(common_mod.downloadFile).not.toHaveBeenCalled();
    });
});
