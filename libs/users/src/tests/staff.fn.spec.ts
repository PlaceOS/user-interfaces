import { searchStaff, showStaff, locateStaff } from '../lib/staff.fn';
import { of } from 'rxjs';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';
import { StaffUser } from '../lib/user.class';

describe('[Staff API]', () => {
    describe('searchStaff', () => {
        it('should perform GET on guests endpoint', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockImplementation(() => of([{ name: 'Jim' }]) as any);
            const list = await searchStaff('').toPromise();
            expect(list).toBeInstanceOf(Array);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/people');
        });

        it('should return Guest objects', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockImplementation(() => of([{ name: 'Jim' }]) as any);
            const list = await searchStaff('').toPromise();
            expect(list).toBeInstanceOf(Array);
            expect(list[0]).toBeInstanceOf(StaffUser);
        });

        it('should allow filtering Guests', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockImplementation(() => of([{ name: 'Jim' }]) as any);
            await searchStaff('Jim').toPromise();
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/people?q=Jim');
        });
    });

    describe('showStaff', () => {
        it('should GET guest', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockImplementation(() => of({ name: 'Jim' }) as any);
            const item = await showStaff('jim').toPromise();
            expect(item).toBeInstanceOf(StaffUser);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/people/jim');
        });
    });

    describe('locateStaff', () => {
        it('should GET staff location', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockImplementation(() => of({ name: 'Jim' }) as any);
            const item = await locateStaff('jim').toPromise();
            expect(item).toBeInstanceOf(StaffUser);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/people/jim');
        });
    });
});
