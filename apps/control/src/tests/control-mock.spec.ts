import { createSystemModule } from '../../../../libs/mocks/src/lib/realtime/control';

describe('Control mock', () => {
    it('should expose available cameras without selecting one', () => {
        const system = createSystemModule({});
        const camera_ids = Object.entries(system.input_list)
            .filter(([, input]) => input.mod?.includes('Camera'))
            .map(([id]) => id);

        expect(camera_ids.length).toBeGreaterThan(0);
        expect(system.available_cameras).toEqual(camera_ids);
        expect(system.selected_camera).toBeNull();
    });

    it('should update selected_camera when a camera is selected', () => {
        const system = createSystemModule({});

        system.$selected_camera('Camera1');

        expect(system.selected_camera).toBe('Camera1');
    });
});
