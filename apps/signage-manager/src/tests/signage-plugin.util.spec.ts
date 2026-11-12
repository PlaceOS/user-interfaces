import { pluginSchema, schemaDefaults } from '../app/signage-plugin.util';

describe('signage plugin util', () => {
    it('wraps catalogue params in an object schema and keeps a full schema', () => {
        const params = { units: { type: 'string', default: 'metric' } };
        const schema = { type: 'object', properties: params };

        expect(pluginSchema(params)).toEqual(schema);
        expect(pluginSchema(schema)).toBe(schema);
    });

    it('has no schema for empty or malformed params', () => {
        expect(pluginSchema(undefined)).toBeNull();
        expect(pluginSchema({})).toBeNull();
        expect(pluginSchema([{ type: 'string' }])).toBeNull();
        expect(
            pluginSchema({ units: { type: 'string' }, label: 'Units' }),
        ).toBeNull();
    });

    it('reads defaults only from properties that set one', () => {
        expect(
            schemaDefaults({
                type: 'object',
                properties: {
                    units: { type: 'string', default: 'metric' },
                    hidden: { type: 'boolean', default: false },
                    city: { type: 'string' },
                },
            }),
        ).toEqual({ units: 'metric', hidden: false });
        expect(schemaDefaults(null)).toEqual({});
        expect(schemaDefaults({ properties: ['units'] })).toEqual({});
    });
});
