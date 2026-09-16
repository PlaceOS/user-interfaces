import { apiEndpoint, del, get, post } from '@placeos/ts-client';

import {
    AiCapabilities,
    AiEditRequest,
    AiGenerateRequest,
    AiJob,
} from './ai.types';

const AI_PATH = () => `${apiEndpoint()}/signage/ai`;

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

export function signageAICapabilities(): Promise<AiCapabilities> {
    return get(
        `${AI_PATH()}/capabilities`,
    ) as unknown as Promise<AiCapabilities>;
}

export function generateSignageImage(
    request: AiGenerateRequest,
): Promise<AiJob> {
    return post(`${AI_PATH()}/generate`, request) as unknown as Promise<AiJob>;
}

export function editSignageImage(request: AiEditRequest): Promise<AiJob> {
    return post(`${AI_PATH()}/edit`, request) as unknown as Promise<AiJob>;
}

/**
 * Ask for the job, optionally holding the request open until something
 * changes. `wait` is capped at 25 seconds server side; a job that takes longer
 * simply spans several of these calls.
 */
export function showSignageAIJob(
    id: string,
    query: { wait?: number; since?: number } = {},
): Promise<AiJob> {
    return get(
        `${AI_PATH()}/jobs/${encodeURIComponent(id)}${toQuery(query)}`,
    ) as unknown as Promise<AiJob>;
}

export function querySignageAIJobs(
    query: { mine?: boolean; limit?: number } = {},
): Promise<AiJob[]> {
    return get(`${AI_PATH()}/jobs${toQuery(query)}`) as unknown as Promise<
        AiJob[]
    >;
}

export function cancelSignageAIJob(id: string): Promise<AiJob> {
    return post(
        `${AI_PATH()}/jobs/${encodeURIComponent(id)}/cancel`,
        {},
    ) as unknown as Promise<AiJob>;
}

export function claimSignageAIImage(
    id: string,
    body: { upload_id: string; item_id: string },
): Promise<AiJob> {
    return post(
        `${AI_PATH()}/jobs/${encodeURIComponent(id)}/claim`,
        body,
    ) as unknown as Promise<AiJob>;
}
