import { HashMap } from '@placeos/common';
import { MediaAnimation, SignagePlugin } from '@placeos/ts-client';

export interface MediaPlayerItem {
    id: string;
    name: string;
    playlist: string;
    playlist_name: string;
    animation: MediaAnimation;
    type: string;
    start_time: number;
    duration: number;
    valid_from: number;
    valid_until: number;
    plugin?: SignagePlugin;
    plugin_params?: HashMap;
    getURL: () => Promise<string | URL>;
}

export type MediaPlayerState = 'PAUSED' | 'PLAYING';
