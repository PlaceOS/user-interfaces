import { createSystemModule } from '../lib/realtime/control';

describe('createSystemModule', () => {
    it('should keep a route in the room that made it', () => {
        const room_a = createSystemModule({ name: 'Room A' });
        const room_b = createSystemModule({ name: 'Room B' });

        room_a.$route('PC2', 'Display2');

        expect(room_a.output_list['Display2'].source).toBe('PC2');
        expect(room_b.output_list['Display2'].source).toBeUndefined();
        expect(room_b.input_list['PC2'].routes).toBeUndefined();
    });
});
