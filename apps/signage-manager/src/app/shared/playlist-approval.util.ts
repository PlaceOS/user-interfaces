import {
    listSignagePlaylistMediaRevisions,
    SignagePlaylistMedia,
} from '@placeos/ts-client';

/** Most revisions to read when looking for the last approved revision */
export const PLAYLIST_REVISION_LIMIT = 25;

/**
 * Load the latest revision of the media of a playlist and the last approved
 * revision before it, newest first. The approved revision is missing when
 * none of the fetched revisions is approved, e.g. for a playlist that was
 * never approved.
 * @param playlist_id ID of the playlist
 */
export async function loadPlaylistApprovalVersions(
    playlist_id: string,
): Promise<SignagePlaylistMedia[]> {
    const [latest, ...older] = await listSignagePlaylistMediaRevisions(
        playlist_id,
        { limit: PLAYLIST_REVISION_LIMIT },
    );
    if (!latest) return [];
    const approved = older.find((revision) => revision.approved);
    return approved ? [latest, approved] : [latest];
}

/**
 * Whether the media list of a playlist has changed since a revision was
 * loaded. The approve action approves the latest revision, so check this
 * first to approve only what the approver saw.
 * @param shown Latest revision when the approver loaded the changes
 */
export async function playlistChangedSince(
    playlist_id: string,
    shown: SignagePlaylistMedia | undefined,
) {
    const [latest] = await listSignagePlaylistMediaRevisions(playlist_id, {
        limit: 1,
    });
    return latest?.id !== shown?.id || latest?.updated_at !== shown?.updated_at;
}
