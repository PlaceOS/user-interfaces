import {
    type JsonValue,
    signage_ai,
    type SignageAiJobResponse,
    uploads,
} from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

import {
    ImageGenCapabilities,
    ImageGenEditRequest,
    ImageGenGenerateRequest,
    ImageGenJob,
    ImageGenJobImage,
    ImageGenJobState,
} from './image-gen.types';

const JOB_STATES: readonly ImageGenJobState[] = [
    'queued',
    'running',
    'done',
    'failed',
    'cancelled',
];

/** One candidate slot of a job. Null until the candidate lands. */
function jobImage(value: JsonValue): ImageGenJobImage | null {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return null;
    }
    const text = (key: string) => {
        const field = value[key];
        return typeof field === 'string' ? field : undefined;
    };
    const count = (key: string) => {
        const field = value[key];
        return typeof field === 'number' ? field : undefined;
    };
    return {
        state: text('state'),
        index: count('index'),
        upload_id: text('upload_id'),
        url: text('url'),
        width: count('width'),
        height: count('height'),
        mime: text('mime'),
        bytes: count('bytes'),
        item_id: text('item_id'),
    };
}

/** The job in the form the app uses. An unknown state reads as failed. */
function imageGenJob(job: SignageAiJobResponse): ImageGenJob {
    return {
        ...job,
        state: JOB_STATES.find((state) => state === job.state) || 'failed',
        kind: job.kind === 'edit' ? 'edit' : 'generate',
        images: job.images.map(jobImage),
    };
}

/** an upload made for one request, cleared once the request is done with it */
export async function removeSignageUpload(id: string): Promise<void> {
    await uploads.destroy({ id }).then(orThrow);
}

export function signageImageGenCapabilities(): Promise<ImageGenCapabilities> {
    return signage_ai.capabilities().then(orThrow);
}

export function generateSignageImage(
    request: ImageGenGenerateRequest,
): Promise<ImageGenJob> {
    return signage_ai
        .generate({ body: request })
        .then(orThrow)
        .then(imageGenJob);
}

export function editSignageImage(
    request: ImageGenEditRequest,
): Promise<ImageGenJob> {
    return signage_ai.edit({ body: request }).then(orThrow).then(imageGenJob);
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
    return signage_ai
        .showJob({ id, ...query })
        .then(orThrow)
        .then(imageGenJob);
}

export function querySignageImageGenJobs(
    query: { mine?: boolean; limit?: number } = {},
): Promise<ImageGenJob[]> {
    return signage_ai
        .indexJobs(query)
        .then(orThrow)
        .then((jobs) => jobs.map(imageGenJob));
}

export function cancelSignageImageGenJob(id: string): Promise<ImageGenJob> {
    return signage_ai.cancel({ id }).then(orThrow).then(imageGenJob);
}

export function claimSignageImageGenImage(
    id: string,
    body: { upload_id: string; item_id: string },
): Promise<ImageGenJob> {
    return signage_ai.claim({ id, body }).then(orThrow).then(imageGenJob);
}
