export class SignagePlaylist {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly media: string[];

    constructor() {}
}

export class SignageDisplay {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly playlists: string[];

    constructor() {}
}

export class SignageZone {
    public readonly id: string;
    public readonly zone_id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly playlists: string[];

    constructor() {}
}

export class SignageTrigger {
    public readonly id: string;
    public readonly zone_id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly playlists: string[];

    constructor() {}
}

export class SignageMedia {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;
    public readonly type: 'image' | 'video';
    public readonly duration: number;
    public readonly url: string;

    constructor() {}
}
