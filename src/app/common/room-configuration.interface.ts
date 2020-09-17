export interface RoomConfiguration {
    id: string;
    name?: string;
    description?: string;
    capacity?: number;
}

export const mergeRoomConfig = (a: RoomConfiguration, b: RoomConfiguration): RoomConfiguration => {
    const c: RoomConfiguration = { ...a, ...b };
    return c;
};

export const roomConfigBuilder = (
    buildingConfigs: RoomConfiguration[] = [],
    roomConfigs: RoomConfiguration[] = []
): RoomConfiguration[] => {
    const map = {};
    buildingConfigs.forEach((f) => (map[f.id] = f));
    const output: RoomConfiguration[] = [];
    roomConfigs.forEach((r) => {
        if (!!map[r.id]) {
            output.push(mergeRoomConfig(map[r.id], r));
        }
    });
    return output;
};
