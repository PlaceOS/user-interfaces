import { BaseClass } from '../lib/base.class';

describe('BaseClass', () => {
    let obj: BaseClass;

    beforeEach(() => (obj = new BaseClass()));

    it('should create class object', () => {
        expect(obj).toBeTruthy();
    });
});
