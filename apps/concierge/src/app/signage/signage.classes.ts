export class SignagePlaylist {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly media: string[];
    public readonly media_durations: Record<string, number>;

    constructor(_data: Partial<SignagePlaylist> = {}) {
        this.id = _data.id || '';
        this.name = _data.name || '';
        this.description = _data.description || '';
        this.media = _data.media || [];
        this.media_durations = _data.media_durations || {};
    }
}

export class SignageDisplay {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly orientation: 'landscape' | 'portrait';
    public readonly playlists: string[];

    constructor(_data: Partial<SignageDisplay> = {}) {
        this.id = _data.id || '';
        this.name = _data.name || '';
        this.description = _data.description || '';
        this.orientation = _data.orientation || 'landscape';
        this.playlists = _data.playlists || [];
    }
}

export class SignageZone {
    public readonly id: string;
    public readonly zone_id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly playlists: string[];

    constructor(_data: Partial<SignageZone> = {}) {
        this.id = _data.id || '';
        this.zone_id = _data.zone_id || '';
        this.name = _data.name || '';
        this.description = _data.description || '';
        this.playlists = _data.playlists || [];
    }
}

export class SignageTrigger {
    public readonly id: string;
    public readonly zone_id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly playlists: string[];

    constructor(_data: Partial<SignageTrigger> = {}) {
        this.id = _data.id || '';
        this.zone_id = _data.zone_id || '';
        this.name = _data.name || '';
        this.description = _data.description || '';
        this.playlists = _data.playlists || [];
    }
}

export class SignageMedia {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly type: 'image' | 'video';
    public readonly duration: number;
    public readonly orientation: 'landscape' | 'portrait';
    public readonly url: string;

    constructor(_data: Partial<SignageMedia> = {}) {
        this.id = _data.id || '';
        this.name = _data.name || '';
        this.description = _data.description || '';
        this.type = _data.type || 'image';
        this.duration = _data.duration || 15;
        this.orientation = _data.orientation || 'landscape';
        this.url = _data.url || '';
    }
}
