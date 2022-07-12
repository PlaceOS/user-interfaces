import { BaseClass } from '../lib/base.class';

class BaseTestClass extends BaseClass {
    constructor(timer = null, interval = null, sub = null) {
        super();
        if (timer) this.timeout('test', timer);
        if (interval) this.interval('test', interval);
        if (sub) this.subscription('test', sub);
    }
}

describe('BaseClass', () => {
    let obj: BaseClass;

    beforeEach(() => (obj = new BaseTestClass()));

    it('should create class object', () => {
        expect(obj).toBeInstanceOf(BaseClass);
    });

    it('should clear timers on destroy', () => {
        const spy = jest.spyOn(window, 'clearTimeout');
        obj = new BaseTestClass(() => null);
        expect(spy).not.toHaveBeenCalled();
        obj.ngOnDestroy();
        expect(spy).toHaveBeenCalled();
    });

    it('should clear intervals on destroy', () => {
        const spy = jest.spyOn(window, 'clearInterval');
        obj = new BaseTestClass(null, () => null);
        expect(spy).not.toHaveBeenCalled();
        obj.ngOnDestroy();
        expect(spy).toHaveBeenCalled();
    });

    it('should unsub from subscriptions on destroy', () => {
        const spy = jest.fn();
        obj = new BaseTestClass(null, null, spy);
        expect(spy).not.toHaveBeenCalled();
        console.log((obj as any)._subscriptions);
        obj.ngOnDestroy();
        expect(spy).toHaveBeenCalled();
    });
});
