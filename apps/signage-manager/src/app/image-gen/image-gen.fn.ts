import { apiEndpoint, del, get, post } from '@placeos/ts-client';

import {
    ImageGenCapabilities,
    ImageGenEditRequest,
    ImageGenGenerateRequest,
    ImageGenJob,
} from './image-gen.types';

const IMAGE_GEN_PATH = () => `${apiEndpoint()}/signage/ai`;

function toQuery(
    params: Record<string, string | number | boolean | null | undefined>,
) {
    const pairs = Object.entries(params)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        );
    return pairs.length ? `?${pairs.join('&')}` : '';
}

/** an upload made for one request, cleared once the request is done with it */
export function removeSignageUpload(id: string): Promise<void> {
    return del(`${apiEndpoint()}/uploads/${encodeURIComponent(id)}`, {
        response_type: 'void',
    });
}

export function signageImageGenCapabilities(): Promise<ImageGenCapabilities> {
    return get(
        `${IMAGE_GEN_PATH()}/capabilities`,
    ) as unknown as Promise<ImageGenCapabilities>;
}

export function generateSignageImage(
    request: ImageGenGenerateRequest,
): Promise<ImageGenJob> {
    return post(
        `${IMAGE_GEN_PATH()}/generate`,
        request,
    ) as unknown as Promise<ImageGenJob>;
}

export function editSignageImage(
    request: ImageGenEditRequest,
): Promise<ImageGenJob> {
    return post(
        `${IMAGE_GEN_PATH()}/edit`,
        request,
    ) as unknown as Promise<ImageGenJob>;
}

/**
 * Ask for the job, optionally holding the request open until something
 * changes. `wait` is capped at 25 seconds server side; a job that takes longer
 * simply spans several of these calls.
 */
export function showSignageImageGenJob(
    id: string,
    query: { wait?: number; since?: number } = {},
): Promise<ImageGenJob> {
    return get(
        `${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}${toQuery(query)}`,
    ) as unknown as Promise<ImageGenJob>;
}

export function querySignageImageGenJobs(
    query: { mine?: boolean; limit?: number } = {},
): Promise<ImageGenJob[]> {
    return get(
        `${IMAGE_GEN_PATH()}/jobs${toQuery(query)}`,
    ) as unknown as Promise<ImageGenJob[]>;
}

export function cancelSignageImageGenJob(id: string): Promise<ImageGenJob> {
    return post(
        `${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}/cancel`,
        {},
    ) as unknown as Promise<ImageGenJob>;
}

export function claimSignageImageGenImage(
    id: string,
    body: { upload_id: string; item_id: string },
): Promise<ImageGenJob> {
    return post(
        `${IMAGE_GEN_PATH()}/jobs/${encodeURIComponent(id)}/claim`,
        body,
    ) as unknown as Promise<ImageGenJob>;
}
