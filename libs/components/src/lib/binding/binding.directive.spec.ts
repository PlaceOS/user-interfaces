import { BindingDirective } from './binding.directive';

describe('BindingDirective', () => {
    let directive: BindingDirective;
    let element: any;
    let renderer: any;

    beforeEach(() => {
        element = {
            'exec': jest.fn()
        };
        renderer = {
            'listen': jest.fn()
        };
        directive = new BindingDirective(element, renderer);
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });
});
