import type { PlaylistItem, SignagePlugin } from '@placeos/ts-client';

/** A media item with the URL that plays it */
export interface DisplayMedia extends PlaylistItem {
    /** The uploaded file of the item, or its `media_uri` when it has none */
    readonly media_url: string;
}

/**
 * URL that plays a media item: the upload of `media_id`, else `media_uri`.
 * @param media Media item from the API
 */
export function mediaURL(media: Pick<PlaylistItem, 'media_id' | 'media_uri'>) {
    return media.media_id
        ? `/api/engine/v2/uploads/${media.media_id}/url`
        : media.media_uri || '';
}

/**
 * Media item with the defaults the player reads. The display payload is raw
 * JSON, so any field can be absent.
 * @param data Media item from the API
 */
export function displayMedia(data: Partial<PlaylistItem> = {}): DisplayMedia {
    const media: PlaylistItem = {
        id: data.id || '',
        created_at: data.created_at || 0,
        updated_at: data.updated_at || 0,
        name: data.name || '',
        description: data.description || '',
        tags: data.tags || [],
        authority_id: data.authority_id || '',
        video_length: data.video_length || 0,
        start_time: data.start_time || 0,
        play_time: data.play_time || 0,
        animation: data.animation ?? null,
        media_type: data.media_type || null,
        orientation: data.orientation || 'unspecified',
        media_uri: data.media_uri || '',
        media_id: data.media_id || '',
        thumbnail_id: data.thumbnail_id || '',
        plugin_id: data.plugin_id || '',
        plugin_params: data.plugin_params || {},
        play_count: data.play_count || 0,
        valid_from: data.valid_from ?? null,
        valid_until: data.valid_until ?? null,
        shared_with: data.shared_with || [],
        playlists: data.playlists || [],
    };
    return { ...media, media_url: mediaURL(media) };
}

/**
 * Plugin with the defaults the player reads.
 * @param data Plugin from the API
 */
export function displayPlugin(
    data: Partial<SignagePlugin> = {},
): SignagePlugin {
    return {
        id: data.id || '',
        created_at: data.created_at || 0,
        updated_at: data.updated_at || 0,
        name: data.name || '',
        description: data.description || '',
        uri: data.uri || '',
        playback_type: data.playback_type || 'static',
        plugin_type: data.plugin_type || 'plugin',
        authority_id: data.authority_id || '',
        enabled: data.enabled ?? true,
        params: data.params || {},
        defaults: data.defaults || {},
    };
}
