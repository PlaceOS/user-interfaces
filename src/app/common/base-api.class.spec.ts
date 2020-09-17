import { BaseDataClass } from './base-api.class';

describe('BaseDataClass', () => {
    let object: BaseDataClass;
    let service: any;
    const init_data = {
        id: 'test-object',
        name: 'Some test',
        email: 'test@email.com',
    };

    beforeEach(() => {
        service = {
            'add': jest.fn(),
            'update': jest.fn(),
            'delete': jest.fn(),
            'task': jest.fn()
        };
        service.update.mockReturnValue(Promise.resolve({}));
        service.add.mockReturnValue(Promise.resolve({}));
        object = new BaseDataClass(init_data);
    });

    it('should initialise correctly', () => {
        expect(object.id).toBe(init_data.id);
        expect(object.name).toBe(init_data.name);
        expect(object.email).toBe(init_data.email);
    });

    it('should be able to be cloned', () => {
        const cloned = object.clone();
        expect(cloned).not.toBe(object);
        expect(cloned instanceof BaseDataClass).toBeTruthy();
        expect(cloned.id).toBe(object.id);
        expect(cloned.name).toBe(object.name);
        expect(cloned.email).toBe(object.email);
    });

    it('should be able to be duplicated', () => {
        const dup = object.duplicate();
        expect(dup).not.toBe(object);
        expect(dup instanceof BaseDataClass).toBeTruthy();
        expect(dup.id).not.toBe(object.id);
        expect(dup.name).toBe(object.name);
        expect(dup.email).not.toBe(object.email);
    });
});
