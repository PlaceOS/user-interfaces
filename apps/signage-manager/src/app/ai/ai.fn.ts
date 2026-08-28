import { apiEndpoint, del, get, post } from '@placeos/ts-client';

import {
    AiCapabilities,
    AiEditRequest,
    AiGenerateRequest,
    AiJob,
} from './ai.types';

const AI_PATH = () => `${apiEndpoint()}/signage/ai`;

function toQuery(params: Record<string, any>) {
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
    return del(`${apiEndpoint()}/uploads/${encodeURIComponent(id)}`) as any;
}

export function signageAICapabilities(): Promise<AiCapabilities> {
    return get(`${AI_PATH()}/capabilities`) as Promise<any>;
}

export function generateSignageImage(
    request: AiGenerateRequest,
): Promise<AiJob> {
    return post(`${AI_PATH()}/generate`, request) as Promise<any>;
}

export function editSignageImage(request: AiEditRequest): Promise<AiJob> {
    return post(`${AI_PATH()}/edit`, request) as Promise<any>;
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
    ) as Promise<any>;
}

export function querySignageAIJobs(
    query: { mine?: boolean; limit?: number } = {},
): Promise<AiJob[]> {
    return get(`${AI_PATH()}/jobs${toQuery(query)}`) as Promise<any>;
}

export function cancelSignageAIJob(id: string): Promise<AiJob> {
    return post(
        `${AI_PATH()}/jobs/${encodeURIComponent(id)}/cancel`,
        {},
    ) as Promise<any>;
}

export function claimSignageAIImage(
    id: string,
    body: { upload_id: string; item_id: string },
): Promise<AiJob> {
    return post(
        `${AI_PATH()}/jobs/${encodeURIComponent(id)}/claim`,
        body,
    ) as Promise<any>;
}

export function signageAIUsage(
    query: { from?: number; to?: number } = {},
): Promise<any[]> {
    return get(`${AI_PATH()}/usage${toQuery(query)}`) as Promise<any>;
}

export function querySignageAIProviders(
    query: { authority_id?: string; include_shared?: boolean } = {},
): Promise<any[]> {
    return get(`${AI_PATH()}/providers${toQuery(query)}`) as Promise<any>;
}

export function addSignageAIProvider(body: any): Promise<any> {
    return post(`${AI_PATH()}/providers`, body) as Promise<any>;
}

export function removeSignageAIProvider(id: string): Promise<void> {
    return del(`${AI_PATH()}/providers/${encodeURIComponent(id)}`) as any;
}

export function testSignageAIProvider(id: string): Promise<any> {
    return post(
        `${AI_PATH()}/providers/${encodeURIComponent(id)}/test`,
        {},
    ) as Promise<any>;
}
