import { HashMap, unique } from '@user-interfaces/common';

export interface RoomInput {
    id?: string;
    name: string;
    type: string;
    module: string;
    mute: boolean;
    locked: boolean;
    routes: string[];
    outputs: string[];
}

export interface RoomOutput {
    id?: string;
    name: string;
    type: string;
    module: string;
    mute: boolean;
    locked: boolean;
    source: string;
    inputs: string[];
    following: string;
}

class RoomModule {
    public readonly name: string;
    public readonly connected: boolean;
    public readonly recording = true;
    public power: boolean;

    public readonly input_list: HashMap<RoomInput>;
    public readonly output_list: HashMap<RoomOutput>;

    public readonly inputs;
    public readonly outputs;

    public volume = 0;

    constructor(_data: Partial<RoomModule>) {
        this.name = _data.name || 'Test Module';
        this.connected = _data.connected ?? true;
        this.power = _data.power || false;
        this.input_list = _data.input_list;
        this.output_list = _data.output_list;
        this.inputs = Object.keys(this.input_list || {}) || [];
        this.outputs = Object.keys(this.output_list || {}) || [];
        this.inputs.forEach(
            (key) => (this[`input/${key}`] = this.input_list[key])
        );
        this.outputs.forEach(
            (key) => (this[`output/${key}`] = this.output_list[key])
        );
    }

    $power_on() {
        console.log('Power On');
        this.power = true;
    }
    /**
     * Power off the space. End any active calls, disconnect signal routes, place
     * powerable devices into standby and return environmental configuration to
     * sensible defaults.
     **/
    $shutdown() {
        this.power = false;
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
    $volume(source: string, value: number) {
        if (source === 'all') {
            this.volume = value;
        }
    }
    /** Interact with audio muting on supporting signal nodes within the space. */
    $mute(source: string, state: boolean = true) {
        this.$updateState(source, { mute: state });
    }
    /**
     * Activates or deactivates a signal mute for the associated IO. If this is not possible,
     * (e.g. unsupported by the device) an error is returned.
     **/
    $unmute(source: string) {
        this.$mute(source, false);
    }
    /**
     * Wrapper for an arbitrary set of control points defined in system configuration.
     * Each of these may map to control options available on a sibling module and take one of two forms:
     *  - Continuous value within a range (temperature set point 16.0...28.0 degrees, lighting level 0...100)
     *  - Set of possible states (lighting high/med/low, blind up/down, electrochromic glass clear/opaque)
     *
     * System state provides the ability to introspect configured points for both control limits and current value.
     **/
    $environment() {}
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
        module: 'Microphone_1'
    },
    Mic2: {
        name: 'Lapel Mic',
        type: 'Microphone',
        module: 'Microphone_2'
    },
    Mic3: {
        name: 'Handheld Mic',
        type: 'Microphone',
        module: 'Microphone_3'
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
        module: 'Camera_1',
    },
    Camera2: {
        name: 'Camera Front',
        type: 'Camera',
        module: 'Camera_2',
    },
    Camera3: {
        name: 'Camera Rear 2',
        type: 'Camera',
        module: 'Camera_3',
    },
    Camera4: {
        name: 'Camera Front 2',
        type: 'Camera',
        module: 'Camera_4',
    },
    TV1: {
        name: 'IPTV 1',
        type: 'TV',
        module: 'IPTV_1',
    },
};

const output_list: HashMap = {
    Display1: {
        name: 'Display 1',
        type: 'Display',
        source: 'PC1',
        module: 'Display_1',
    },
    Display2: {
        name: 'Display 2',
        type: 'Display',
        module: 'Display_2',
    },
    Display3: {
        name: 'Display 3',
        type: 'Display',
        source: 'PC2',
        module: 'Display_3',
    },
    Display4: {
        name: 'Display 4',
        type: 'Display',
        module: 'Display_4',
    },
    Display5: {
        name: 'Display 5',
        type: 'Display',
        module: 'Display_5',
        source: 'TV1',
    },
};

export const createSystemModule = (space: HashMap, overrides: HashMap = {}) =>
    new RoomModule({ ...space, input_list, output_list, ...overrides });
