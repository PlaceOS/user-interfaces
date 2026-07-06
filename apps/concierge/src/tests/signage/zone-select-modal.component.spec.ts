import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import * as ts_client_mod from '@placeos/ts-client';
import { ZoneSelectModalComponent } from '../../app/signage/zone-select-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

async function flush() {
    for (let i = 0; i < 6; i++) {
        TestBed.flushEffects();
        await Promise.resolve();
    }
}

describe('ZoneSelectModalComponent', () => {
    let spectator: Spectator<ZoneSelectModalComponent>;
    let data: any;

    const createComponent = createComponentFactory({
        component: ZoneSelectModalComponent,
        detectChanges: false,
    });

    function build() {
        spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        });
    }

    beforeEach(() => {
        vi.clearAllMocks();
        (ts_client_mod.queryZones as any).mockResolvedValue({
            data: [{ id: 'z1' }, { id: 'z2' }],
        });
        data = { ignore: ['z2'], query: { tags: 'signage' } };
    });

    it('should list zones excluding the ignored ids', async () => {
        build();
        await flush();

        expect(spectator.component.zones().map((_) => _.id)).toEqual(['z1']);
    });

    it('should query zones using the provided query and search term', async () => {
        build();
        spectator.component.search_term.set('lob');
        await flush();

        expect(ts_client_mod.queryZones).toHaveBeenCalledWith(
            expect.objectContaining({ tags: 'signage', q: 'lob', limit: 100 }),
        );
    });

    it('should default query and ignore when data omits them', () => {
        data = {};
        build();

        expect(spectator.component.ignore).toEqual([]);
        expect(spectator.component.query).toEqual({});
    });
});
