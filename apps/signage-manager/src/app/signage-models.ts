import {
    assert,
    parseResponse,
    Playlist,
    type PlaylistInput,
    PlaylistItem,
    type PlaylistItemInput,
    PlaylistItemSchedule,
    type PlaylistItemScheduleInput,
    PlaylistRevision,
    type PlaylistRevisionInput,
    type Schema,
    SignagePlugin,
    type SignagePluginInput,
    SignageTemplate,
    type SignageTemplateInput,
    SignageTemplateMapping,
    type SignageTemplateMappingInput,
    System,
    type SystemInput,
    Zone,
    type ZoneInput,
} from '@placeos/ts-client';

/**
 * Typed objects of the signage data, with the defaults that the app reads.
 * 6.x of ts-client had model classes that filled these defaults. Use these
 * functions where the app builds data itself, such as new items in a form.
 * Fields that the data leaves out, or sets to null or undefined, get the
 * default. Fields without a default are null, as in data from the server.
 */

/**
 * Parse `defaults` with `data` over them, so the result has each field.
 * `data` is the input type, so nested data can leave out fields too.
 */
function model<O, I extends object>(
    schema: Schema<O, I>,
    defaults: I,
    data: I,
): O {
    const value: Record<string, unknown> = {};
    for (const [key, field] of Object.entries(defaults)) value[key] = field;
    for (const [key, field] of Object.entries(data)) {
        if (field !== null && field !== undefined) value[key] = field;
    }
    // Required fields that neither sets get their empty value, such as `''`
    const result = parseResponse(schema, value, { missing_fields: 'zero' });
    assert(result.ok, 'the signage data matches the schema');
    return result.value;
}

function unixNow() {
    return Math.floor(Date.now() / 1000);
}

/** A media item, with the defaults of 6.x `SignageMedia` */
export function signageMedia(data: PlaylistItemInput = {}): PlaylistItem {
    return model(
        PlaylistItem,
        {
            id: '',
            created_at: unixNow(),
            updated_at: unixNow(),
            name: '',
            description: '',
            authority_id: '',
            start_time: 0,
            play_time: 0,
            video_length: 0,
            orientation: 'unspecified',
            media_uri: '',
            media_id: '',
            thumbnail_id: '',
            plugin_id: '',
            plugin_params: {},
            play_count: 0,
            tags: [],
            shared_with: [],
            playlists: [],
        },
        data,
    );
}

/** A playlist, with the defaults of 6.x `SignagePlaylist` */
export function signagePlaylist(data: PlaylistInput = {}): Playlist {
    return model(
        Playlist,
        {
            id: '',
            created_at: 0,
            updated_at: 0,
            name: '',
            description: '',
            authority_id: '',
            play_count: 0,
            play_through_count: 0,
            random: false,
            enabled: true,
            distribution: false,
            default_duration: 15 * 1000,
            schedules: [],
            shared_with: [],
        },
        data,
    );
}

/** The media list of a playlist, with the defaults of 6.x `SignagePlaylistMedia` */
export function playlistRevision(
    data: PlaylistRevisionInput = {},
): PlaylistRevision {
    return model(
        PlaylistRevision,
        {
            id: '',
            playlist_id: '',
            created_at: 0,
            updated_at: 0,
            items: [],
            media: [],
            schedules: [],
            approved: false,
            approval_requested: false,
            requested_by_id: '',
            approved_by_id: '',
            approved_by_email: '',
            approved_by_name: '',
            user_id: '',
            user_name: '',
            user_email: '',
        },
        data,
    );
}

/** A schedule of a distribution playlist item, with 6.x defaults */
export function playlistItemSchedule(
    data: PlaylistItemScheduleInput = {},
): PlaylistItemSchedule {
    return model(
        PlaylistItemSchedule,
        {
            id: '',
            playlist_id: '',
            item_id: '',
            schedules: [],
            created_at: 0,
            updated_at: 0,
            media: signageMedia(),
        },
        data,
    );
}

/** A template, with the defaults of 6.x `SignageTemplate` */
export function signageTemplate(
    data: SignageTemplateInput = {},
): SignageTemplate {
    return model(
        SignageTemplate,
        {
            created_at: '',
            updated_at: '',
            id: '',
            name: '',
            description: '',
            tags: [],
            authority_id: '',
            background_item_id: '',
            layouts: [],
            full_screen_takeover: false,
            merge: false,
            approval_requested: false,
            requested_by_id: '',
            approved: false,
            approved_by_id: '',
            approved_by_name: '',
            approved_by_email: '',
            live_template_id: '',
            shared_with: [],
        },
        data,
    );
}

/** A template mapping, with the defaults of 6.x `SignageTemplateMapping` */
export function signageTemplateMapping(
    data: SignageTemplateMappingInput = {},
): SignageTemplateMapping {
    return model(
        SignageTemplateMapping,
        {
            created_at: '',
            updated_at: '',
            id: '',
            control_system_id: '',
            zone_id: '',
            template_id: '',
        },
        data,
    );
}

/** A plugin, with the defaults of 6.x `SignagePlugin` */
export function signagePlugin(data: SignagePluginInput = {}): SignagePlugin {
    return model(
        SignagePlugin,
        {
            id: '',
            created_at: 0,
            updated_at: 0,
            name: '',
            description: '',
            uri: '',
            playback_type: 'static',
            plugin_type: 'plugin',
            authority_id: '',
            enabled: true,
            params: {},
            defaults: {},
        },
        data,
    );
}

/** A zone, with the defaults of 6.x `PlaceZone` that the app reads */
export function signageZone(data: ZoneInput = {}): Zone {
    return model(
        Zone,
        {
            id: '',
            name: '',
            display_name: '',
            description: '',
            tags: [],
            parent_id: '',
            playlists: [],
            images: [],
            triggers: [],
        },
        data,
    );
}

/** A display, with the defaults of 6.x `PlaceSystem` that the app reads */
export function signageSystem(data: SystemInput = {}): System {
    return model(
        System,
        {
            id: '',
            name: '',
            display_name: '',
            description: '',
            email: '',
            zones: [],
            modules: [],
            playlists: [],
            features: [],
            images: [],
        },
        data,
    );
}
