import { SignageMediaMetadata } from '../signage-media-upload.util';

export interface BulkMediaUploadItem {
    /** File to upload. Absent when `loadFile` makes it at upload time. */
    file?: File;
    /**
     * Makes the file just before it uploads, such as a rendered PDF page, so
     * a long list does not hold every file in memory at once.
     */
    loadFile?: () => Promise<File>;
    media_type: 'image' | 'video';
    metadata: SignageMediaMetadata;
    /** Media name. The file name when not set. */
    name?: string;
    tags?: string[];
}

/** Name of an item, as listed */
export function bulkItemName(item: BulkMediaUploadItem) {
    return item.name || item.file?.name || '';
}

/** File of an item, made now when it is made at upload time */
export async function loadBulkItemFile(item: BulkMediaUploadItem) {
    if (item.file) return item.file;
    if (item.loadFile) return item.loadFile();
    throw new Error('No file to upload');
}
