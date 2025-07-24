import { MediaAnimation } from '@placeos/ts-client';

export interface MediaPlayerItem {
    id: string;
    name: string;
    playlist: string;
    playlist_name: string;
    animation: MediaAnimation;
    type: 'image' | 'video';
    start_time: number;
    duration: number;
    valid_from: number;
    valid_until: number;
    play_hours: string;
    getURL: () => Promise<URL>;
}

export type MediaPlayerState = 'PAUSED' | 'PLAYING';
