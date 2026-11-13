import { createSystemModule } from '../lib/realtime/control';

describe('mock room control module', () => {
    /**
     * Room with its own inputs and outputs. The default lists are shared by
     * every mock room, so each test gives the room new lists.
     */
    const room = () =>
        createSystemModule(
            { name: 'Test room' },
            {
                input_list: {
                    PC1: { name: 'PC-1', type: 'PC' },
                    HDMI: { name: 'Laptop', type: 'Laptop' },
                },
                output_list: {
                    Display1: { name: 'Screen 1', type: 'Display' },
                    Display2: { name: 'Screen 2', type: 'Display' },
                },
            },
        );

    it('should route an input to an output, and unroute it', () => {
        const mod = room();
        mod.$route('PC1', 'Display1');
        mod.$route('PC1', 'Display2');

        expect(mod['input/PC1'].routes).toEqual(['Display1', 'Display2']);
        expect(mod['output/Display1']).toMatchObject({
            source: 'PC1',
            following: 'PC1',
        });

        mod.$unroute('Display1');
        expect(mod['input/PC1'].routes).toEqual(['Display2']);
        expect(mod['output/Display1']).toMatchObject({
            source: '',
            following: '',
        });
    });

    it('should ignore a route with an unknown input or output', () => {
        const mod = room();
        mod.$route('Unknown', 'Display1');
        mod.$route('PC1', 'Unknown');

        expect(mod['output/Display1'].source).toBeUndefined();
        expect(mod['input/PC1'].routes).toBeUndefined();
    });

    it('should set the room volume only for all outputs or the first one', () => {
        const mod = room();
        mod.$volume(30, 'Display2');
        expect(mod.volume).toBe(0);
        expect(mod['output/Display2'].volume).toBe(30);

        mod.$volume(60, 'Display1');
        expect(mod.volume).toBe(60);
        mod.$mute(true);
        expect(mod.mute).toBe(true);
        mod.$unmute('Display2');
        expect(mod.mute).toBe(true);
    });

    it('should change the lights with a known lighting scene only', () => {
        const mod = room();
        mod.$set_lighting_scene('Disco');
        expect(mod.lighting_scene).toBe('Off');

        mod.$set_lighting_scene('Meeting');
        expect(mod.lighting_scene).toBe('Meeting');
        expect(mod['lights/light1']).toMatchObject({ state: 'Meeting' });
    });
});
