
import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';

import { BaseAPIService } from './base.service';

import * as PlaceOS from '@placeos/ts-client';

jest.mock('@placeos/ts-client');

describe('BaseAPIService', () => {
    let service: BaseAPIService;
    let app_service: any;

    beforeEach(() => {
        jest.spyOn(PlaceOS, 'get' as any).mockImplementation(() => of({}));
        jest.spyOn(PlaceOS, 'post' as any).mockImplementation(() => of({}));
        jest.spyOn(PlaceOS, 'put' as any).mockImplementation(() => of({}));
        jest.spyOn(PlaceOS, 'del' as any).mockImplementation(() => of({}));
        service = new BaseAPIService();
        service.init();
    });

    it('should initialise after the parent is ready', fakeAsync(() => {
        expect(service.is_initialised).toBeTruthy();
    }));

    it('should return api_route in the route', () => {
        expect(service.route()).toContain(service.api_route);
    });

    it('should get list', () => {
        const list = [];
        (service as any).set('list', list);
        expect(service.get('list')).toBe(list);
        expect(service.list().length).toBe(list.length);
    });

    it('should be able to filter list', () => {
        const id = 'item-1';
        const list = [{ id }, { id: 'item-2' }];
        (service as any).set('list', list);
        const filtered_list = service.list(a => a.id === id);
        expect(filtered_list.length).toBe(1);
        expect(filtered_list[0].id).toBe(id);
    });

    it('should grab the item', () => {
        const id = 'item-1';
        const list = [{ id: 'item-1' }, { id: 'item-2' }];
        (service as any).set('list', list);
        const item = service.item(id);
        expect(item.id).toBe(id);
    });

    it('should get changes from listen', done => {
        const list = [];
        let ignore = true;
        const sub = service.listen('list').subscribe(value => {
            if (!ignore) {
                expect(value).toBe(list);
                sub.unsubscribe();
                done();
            } else {
                ignore = false;
            }
        });
        (service as any).set('list', list);
    });

    it('should return a list of items from query', done => {
        const list = [{ id: 'item-1' }, { id: 'item-2' }];
        (PlaceOS.get as any).mockReturnValue(of(list));
        service.query().then(resp => {
            expect(resp.length).toBe(2);
            expect(JSON.stringify(resp)).toBe(JSON.stringify(list));
            done();
        });
    });

    it('should return a item from show', done => {
        const item = { id: 'item-1' };
        (PlaceOS.get as any).mockReturnValue(of(item));
        service.show('item-1').then(resp => {
            expect(JSON.stringify(resp)).toBe(JSON.stringify(item));
            done();
        });
    });

    // it('should add new item', done => {
    //     const item = { id: 'item-1' };
    //     (PlaceOS.post as any).mockReturnValue(of(item));
    //     service.add(item).then(resp => {
    //         expect(JSON.stringify(resp)).toBe(JSON.stringify(item));
    //         expect(service.get('list')[0]).toBe(item);
    //         done();
    //     });
    // });

    it('should add new item', done => {
        const item = 'result';
        (PlaceOS.post as any).mockReturnValue(of(item));
        service.task('item-1', item).then(resp => {
            expect(resp).toBe(item);
            done();
        });
    });

    // it('should update item', done => {
    //     const item = { id: 'item-1' };
    //     const old_item = { id: 'item-1', other_property: 1 };
    //     (PlaceOS.put as any).mockReturnValue(of(item));
    //     (service as any).set('list', [old_item]);
    //     expect(service.get('list')[0]).toBe(old_item);
    //     service.update('item-1', item).then(resp => {
    //         expect(JSON.stringify(resp)).toBe(JSON.stringify(item));
    //         expect(service.get('list')[0]).toBe(item);
    //         done();
    //     });
    // });

    // it('should delete item', done => {
    //     const item = { id: 'item-1' };
    //     (PlaceOS.del as any).mockReturnValue(of(null));
    //     (service as any).set('list', [item]);
    //     expect(service.get('list')[0]).toBe(item);
    //     service.delete('item-1').then(() => {
    //         expect(service.get('list').length).toBe(0);
    //         done();
    //     });
    // });
});
