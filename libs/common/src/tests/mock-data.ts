import { parseResponse, type Schema } from '@placeos/ts-client';

/**
 * Makes a complete v7 value from partial test data, as mock mode does.
 * Missing fields get their empty value (`''`, `0`, `[]`). A field with the
 * wrong type throws.
 * @example const zone = mockData(Zone, { id: 'zone-1', tags: ['level'] });
 */
export function mockData<O, I>(schema: Schema<O, I>, data: I): O {
    const result = parseResponse(schema, data, { missing_fields: 'zero' });
    if (result.ok === false) {
        throw new Error(`Invalid mock data: ${JSON.stringify(result.error)}`);
    }
    return result.value;
}
