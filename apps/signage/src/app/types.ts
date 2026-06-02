import { HashMap } from '@placeos/common';
import { MediaAnimation, SignagePlugin } from '@placeos/ts-client';

export interface MediaPlayerItem {
    id: string;
    name: string;
    playlist: string;
    playlist_name: string;
    animation: MediaAnimation;
    type: string;
    url?: string;
    start_time: number;
    duration: number;
    valid_from: number;
    valid_until: number;
    validity?: {
        valid_from_source?: 'playlist' | 'media' | 'playlist_media';
        valid_until_source?: 'playlist' | 'media' | 'playlist_media';
    };
    plugin?: SignagePlugin;
    plugin_params?: HashMap;
    getURL: () => Promise<string | URL>;
    /** Whether the media's data is still being fetched/cached by the services */
    isLoading?: () => boolean;
    /** Whether the media's data is available from the local media cache */
    isCached?: () => boolean;
}

export type MediaPlayerState = 'PAUSED' | 'PLAYING';
