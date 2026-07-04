import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import * as ts_client_mod from '@placeos/ts-client';
import { ZoneSelectModalComponent } from '../../app/signage/zone-select-modal.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        queryZones: jest.fn(async () => ({
            data: [
                { id: 'z1', name: 'Lobby', tags: [] },
                { id: 'z2', name: 'Kitchen', tags: [] },
            ],
        })),
    };
});

async function flush() {
    TestBed.flushEffects();
    await Promise.resolve();
    await Promise.resolve();
    TestBed.flushEffects();
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
        jest.clearAllMocks();
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
