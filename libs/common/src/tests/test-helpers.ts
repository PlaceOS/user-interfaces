import { signal, Signal, Type } from '@angular/core';
import {
    MockComponent,
    MockDirective,
    MockedComponent,
    MockedDirective,
    MockInstance,
} from 'ng-mocks';

interface PropDecoratorFactory {
    type?: { prototype: { ngMetadataName?: string } };
    args: (Type<any> | string | { isSignal?: boolean })[];
}

const getPropMetadata = (
    def: Type<any>,
): Record<string, [PropDecoratorFactory]> | undefined => {
    if ('propDecorators' in def && def.propDecorators) {
        return def.propDecorators as Record<string, [PropDecoratorFactory]>;
    }
    return undefined;
};

const isSignal = (arg: any): boolean => {
    return (
        arg &&
        typeof arg === 'object' &&
        'isSignal' in arg &&
        arg.isSignal === true
    );
};

const queryTypes = new Set([
    'ViewChild',
    'ViewChildren',
    'ContentChild',
    'ContentChildren',
]);

/**
 * Retrieves the signal-based queries from a component's property metadata.
 * @param comp - The Angular component type to inspect.
 */
export const getSignalBasedQueries = (
    comp: Type<any>,
): Record<string, { type: string }> | undefined => {
    const propMetadata = getPropMetadata(comp);
    if (!propMetadata) {
        return {};
    }
    const queries: Record<string, any> = {};
    for (const [propName, decorators] of Object.entries(propMetadata)) {
        const decorator = decorators[0];
        const propType = decorator.type?.prototype?.ngMetadataName;
        if (
            propType &&
            queryTypes.has(propType) &&
            decorator.args.length > 1 &&
            isSignal(decorator.args[1])
        ) {
            queries[propName] = {
                type: propType,
            };
        }
    }
    return Object.keys(queries).length > 0 ? queries : undefined;
};

/**
 * Utility function to retrieve host directives from a given Angular directive type.
 * @param dir - The Angular directive or component type to inspect.
 */
export const getHostDirectives = (dir: Type<any>): Array<any> | undefined => {
    const possibleMetadataKeys = ['ɵcmp', 'ɵdir'];
    for (const key of possibleMetadataKeys) {
        if (key in dir && 'hostDirectives' in (dir as any)[key]) {
            return (dir as any)[key].hostDirectives as Array<any>;
        }
    }
    return undefined;
};

/**
 * Creates a mock signal that can be used to replace query signals in tests.
 */
export const createQuerySignalMock = (): Signal<undefined> => {
    const theSignal = signal(undefined);
    const signalSymbol = Object.getOwnPropertySymbols(theSignal)[0];
    if (signalSymbol) {
        (theSignal as any)[signalSymbol]._dirtyCounter = { update: jest.fn() }; // Mock the update method to avoid errors in tests;
    }
    return theSignal;
};

const mockSignalBasedQueries = (component: Type<any>): void => {
    const signalBasedQueries = getSignalBasedQueries(component);
    if (signalBasedQueries) {
        for (const [propName, metadata] of Object.entries(signalBasedQueries)) {
            MockInstance(component, propName, createQuerySignalMock());
            if (
                metadata.type === 'ContentChild' ||
                metadata.type === 'ContentChildren'
            ) {
                // ng-mocks creates a property with a prefix `__ngMocksVcr_` for ContentChild/ContentChildren queries, found that out
                // by inspecting the metadata of a mocked component by MockComponent ('__prop__metadata__' property).
                MockInstance(
                    component,
                    `__ngMocksVcr_${propName}`,
                    createQuerySignalMock(),
                );
            }
        }
    }
};

/**
 * Mocks a component using {@link MockComponent}, but also fixes the `Cannot read properties of undefined (reading 'Symbol(SIGNAL)')`
 * error when mocking directives that use signal-based queries.
 * @param component - The Angular component type to mock.
 */
export const mockComponent = <T>(
    component: Type<T>,
): Type<MockedComponent<T>> => {
    // Fix the "Cannot read properties of undefined (reading 'Symbol(SIGNAL)')" error when mocking components that uses signal-based queries.
    mockSignalBasedQueries(component);

    const hostDirectives = getHostDirectives(component);
    for (const hostDirective of hostDirectives || []) {
        mockSignalBasedQueries(hostDirective.directive);
    }

    return MockComponent(component);
};

/**
 * Mocks a directive using {@link MockDirective}, but also fixes the `Cannot read properties of undefined (reading 'Symbol(SIGNAL)')`
 * error when mocking directives that use signal-based queries.
 * @param directive - The Angular directive type to mock.
 */
export const mockDirective = <T>(
    directive: Type<T>,
): Type<MockedDirective<T>> => {
    // Fix the "Cannot read properties of undefined (reading 'Symbol(SIGNAL)')" error when mocking directives that uses signal-based queries.
    mockSignalBasedQueries(directive);

    const hostDirectives = getHostDirectives(directive);
    for (const hostDirective of hostDirectives || []) {
        mockSignalBasedQueries(hostDirective.directive);
    }
    return MockDirective(directive);
};
