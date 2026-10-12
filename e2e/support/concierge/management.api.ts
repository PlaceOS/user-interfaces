import { APIRequestContext, expect } from '@playwright/test';

export const ENGINE = '/api/engine/v2';

export async function metadata(
    api: APIRequestContext,
    zone: string,
    name: string,
) {
    const response = await api.get(`${ENGINE}/metadata/${zone}`, {
        params: { name },
    });
    expect(response.ok(), `read ${name} metadata`).toBeTruthy();
    return (await response.json())[name];
}

export async function saveMetadata(
    api: APIRequestContext,
    zone: string,
    name: string,
    details: unknown,
) {
    const existing = await metadata(api, zone, name);
    const response = await api.put(`${ENGINE}/metadata/${zone}`, {
        data: {
            name,
            details,
            description: existing?.description || 'E2E management coverage',
        },
    });
    expect(
        response.ok(),
        `save ${name} metadata: ${await response.text()}`,
    ).toBeTruthy();
}

/** Remove only this run's entries, retaining other records in the same field. */
export async function removeMetadataEntry(
    api: APIRequestContext,
    zone: string,
    name: string,
    id: string,
) {
    const field = await metadata(api, zone, name);
    await saveMetadata(
        api,
        zone,
        name,
        field.details.filter((item: { id: string }) => item.id !== id),
    );
}

export function runName(scenario: string) {
    return `${scenario}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
