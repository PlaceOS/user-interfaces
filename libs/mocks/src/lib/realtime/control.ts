import { HashMap, unique } from '@placeos/common';

export interface EnvironmentSource {
    id?: string;
    name: string;
    type?: 'lights' | 'blinds' | 'screen';
    state: string | number;
    states: string[];
}

export interface RoomInput {
    id?: string;
    ref: string;
    name: string;
    type: string;
    mod: string;
    mute: boolean;
    locked: boolean;
    routes: string[];
    outputs: string[];
}

export interface RoomOutput {
    id?: string;
    ref: string;
    name: string;
    type: string;
    mod: string;
    mute: boolean;
    locked: boolean;
    source: string;
    inputs: string[];
    following: string;
}

class RoomModule {
    public readonly name: string;
    public readonly connected: boolean;
    public active: boolean;

    public readonly input_list: HashMap<RoomInput>;
    public readonly output_list: HashMap<RoomOutput>;
    public readonly env_sources: EnvironmentSource[];

    public readonly inputs;
    public readonly outputs;
    public readonly available_outputs;
    public readonly environment;

    public readonly help = {
        help: {
            title: 'Help',
            content: `
# Using the asset browser

## Activating the menu
The 5 finger touch can be actvated by placing 4 fingers and your thumb on the screen, or quickly double-tapping the screen. Activation through double tap will leave the menu on-screen. To close tap the ‘X’.

## Selecting a menu item
Leaving at least one finger on the screen, drag your finger to the icon to select.

## Home Menu
The home menu allows you to access files and navigate to content and presentations via the Launcher.

## Connect and stream your laptop or access the CMS to add files
Plug your laptop into the HDMI to stream it to the screen, or access the CMS to add your own content and create custom presentations.

<video></video>

1. Test1
2. Test2
3. Test3
            `,
        },
        'laptop-help': {
            icon: 'web_asset',
            title: 'Asset Browser',
            content: `# Test 2`,
        },
    };

    public tabs = [
        {
            icon: 'laptop',
            name: 'Laptop',
            type: 'Laptop',
        },
        {
            icon: 'call',
            name: 'VC',
            inputs: ['VidConf_1'],
            help: 'vidconf-help',
            controls: 'vidconf-controls',
        },
    ];

    public volume = 0;

    constructor(_data: Partial<RoomModule>) {
        this.name = _data.name || 'Test Module';
        this.connected = _data.connected ?? true;
        this.active = _data.active || false;
        this.input_list = _data.input_list;
        this.output_list = _data.output_list;
        this.env_sources = _data.env_sources || [];
        this.inputs = Object.keys(this.input_list || {}) || [];
        this.outputs = Object.keys(this.output_list || {}) || [];
        this.available_outputs = this.outputs;
        const types = unique(this.env_sources.map((_) => _.type)) || [];
        types.forEach(
            (t) =>
                (this[`${t}`] = this.env_sources
                    .filter((_) => _.type === t)
                    .map((_) => _.id))
        );
        this.env_sources.forEach(
            (source) => (this[`${source.type}/${source.id}`] = source)
        );
        this.inputs.forEach(
            (key) => (this[`input/${key}`] = this.input_list[key])
        );
        this.outputs.forEach(
            (key) => (this[`output/${key}`] = this.output_list[key])
        );
    }

    $power(state = true) {
        this.active = state;
    }
    /** Shares a signal source with the room and any connected remote participants. */
    $share() {}
    /**
     * Connect a signal source to a signal output, or set of outputs. Any intermediate
     * device interactions are handled internally. For example, on a system using a small
     * presentation switcher and a display, routing a laptop input will select the
     * appropriate input on the switcher, and select the appropriate input on the display.
     *
     * This includes all routable signal types - in addition to the above example, this may
     * be interacting with an audio DSP to add a microphone feed to an output zone, or
     * connecting a USB HID input device with a specific output.
     **/
    $route(input: string, output: string) {
        if (this.inputs.includes(input) && this.outputs.includes(output)) {
            this.$updateState(input, {
                routes: unique([
                    ...(this.input_list[input].routes || []),
                    output,
                ]),
            });
            this.$updateState(output, {
                source: input,
                following: input,
            });
        }
    }
    /**
     * Remove a signal source from a signal output.
     * Predominantly intended for outputs that support more than one simultaneous input source
     * (mixed audio zone, or display capable of compositing multiple video sources).
     **/
    $unroute() {}
    /**
     * Establish a call (either phone or video) with a remote participant.
     * This may be a peer-to-peer connection or a wider group via an external bridging service.
     **/
    $connect() {}
    /** End a call with a remote participant. */
    $disconnect() {}
    /**
     * Bind the current system to another PlaceOS controlled space, relinquishing local control.
     * This may be used for an education pod that pairs with a wider classroom or a room being
     * used as an overflow from a primary event space.
     **/
    $link() {}
    /**
     * Join the current system with another PlaceOS controlled space, sharing control and signal IO.
     * Examples of usage would be a set of rooms with moveable walls. N-way merges supported.
     **/
    $merge() {}
    /** Separate from a linked or merged system. */
    $split() {}
    /**
     * Display an alert visible to participants in the space. This may occur as a screen overlay,
     * on a control interface, a bot post in a chat space associated with the current meeting or
     * other modalities depending on hardware capability.
     **/
    $notify() {}
    /**
     * Place the room into a predefined operation mode. This may include executing an arbitrary
     * set of device interactions, changing metadata associated with the system itself (changing
     * available input or output nodes), or other configurable actions designed to transition
     * the space to a specific state.
     **/
    $preset() {}
    /**
     * Set the volume for a signal node in the space. This can include outputs as well as inputs
     * where supported (e.g. microphone). If unspecified, default is to interact with a ‘primary’
     * output node.
     **/
    $volume(value: number, source: string = 'all') {
        if (source === 'all') {
            this.volume = value;
        }
    }
    /** Interact with audio muting on supporting signal nodes within the space. */
    $mute(state: boolean = true, source: string = 'all') {
        this.$updateState(source, { mute: state });
    }
    /**
     * Activates or deactivates a signal mute for the associated IO. If this is not possible,
     * (e.g. unsupported by the device) an error is returned.
     **/
    $unmute(source: string = 'all') {
        this.$mute(false, source);
    }
    /**
     * Wrapper for an arbitrary set of control points defined in system configuration.
     * Each of these may map to control options available on a sibling module and take one of two forms:
     *  - Continuous value within a range (temperature set point 16.0...28.0 degrees, lighting level 0...100)
     *  - Set of possible states (lighting high/med/low, blind up/down, electrochromic glass clear/opaque)
     *
     * System state provides the ability to introspect configured points for both control limits and current value.
     **/
    $environment(id: string, state: string | number) {
        const source = this.env_sources.find((_) => _.id === id);
        if (source) {
            this[`${source.type}/${source.id}`] = { ...source, state };
        }
    }
    /** Locks an IO node. Prevents any route changes that include this until unlocked. */
    $lock(source: string) {
        this.$updateState(source, { locked: true });
    }
    /** Unlocks an IO node. */
    $unlock(source: string) {
        this.$updateState(source, { locked: false });
    }

    $updateState(source: string, data: HashMap) {
        if (this[`input/${source}`]) {
            this[`input/${source}`] = { ...this[`input/${source}`], ...data };
            this.input_list[source] = { ...this[`input/${source}`], ...data };
        } else if (this[`output/${source}`]) {
            this[`output/${source}`] = { ...this[`output/${source}`], ...data };
            this.output_list[source] = { ...this[`output/${source}`], ...data };
        }
    }
}

const input_list: HashMap = {
    Mic1: {
        name: 'Lectern Mic',
        type: 'Microphone',
        mod: 'Microphone_1',
    },
    Mic2: {
        name: 'Lapel Mic',
        type: 'Microphone',
        mod: 'Microphone_2',
    },
    Mic3: {
        name: 'Handheld Mic',
        type: 'Microphone',
        mod: 'Microphone_3',
    },
    PC1: {
        name: 'PC-1',
        type: 'PC',
    },
    PC2: {
        name: 'PC-2',
        type: 'PC',
    },
    PC3: {
        name: 'PC-3',
        type: 'PC',
    },
    PC4: {
        name: 'PC-4',
        type: 'PC',
    },
    HDMI: {
        name: 'Laptop HDMI',
        type: 'Laptop',
    },
    VGA: {
        name: 'Laptop VGA',
        type: 'Laptop',
    },
    Camera1: {
        name: 'Camera Rear',
        type: 'Camera',
        mod: 'Camera_1',
    },
    Camera2: {
        name: 'Camera Front',
        type: 'Camera',
        mod: 'Camera_2',
    },
    Camera3: {
        name: 'Camera Rear 2',
        type: 'Camera',
        mod: 'Camera_3',
    },
    Camera4: {
        name: 'Camera Front 2',
        type: 'Camera',
        mod: 'Camera_4',
    },
    TV1: {
        name: 'IPTV 1',
        type: 'TV',
        mod: 'IPTV_1',
    },
    VC1: {
        name: 'Video Conference 1',
        type: 'VC',
        mod: 'VidConf_1',
    },
};

const output_list: HashMap = {
    Display1: {
        name: 'Screen 1',
        type: 'Display',
        source: 'PC1',
        mod: 'Display_1',
    },
    Display2: {
        name: 'Screen 2',
        type: 'Display',
        mod: 'Display_2',
    },
    Display5: {
        name: 'TV 1',
        type: 'Display',
        mod: 'Display_5',
        source: 'TV1',
    },
};

const env_sources: any[] = [
    {
        id: 'light1',
        name: 'Lighting',
        type: 'lights',
        states: ['Off', 'Presentation', 'Meeting', 'Full'],
        state: 'Off',
    },
    {
        id: 'blind1',
        name: 'Blinds',
        type: 'blinds',
        states: ['Off', 'Presentation', 'Meeting'],
        state: 'Off',
    },
    {
        id: 'screen1',
        name: 'Screen',
        type: 'screen',
        states: ['Up', 'Down'],
        state: 'Down',
    },
];

export const createSystemModule = (space: HashMap, overrides: HashMap = {}) =>
    new RoomModule({
        ...space,
        input_list,
        output_list,
        env_sources,
        ...overrides,
    });
