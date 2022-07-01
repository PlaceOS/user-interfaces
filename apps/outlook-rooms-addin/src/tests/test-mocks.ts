import { FormBuilder, Validators } from '@angular/forms';
import { of, pipe } from 'rxjs';

export let mockForm = {
    id: 1,
    host: ['host@test.com', Validators.required],
    organiser: ['organiser@test.com', Validators.required],
    creator: ['creator@test.com', Validators.required],
    title: ['', Validators.required],
    date: [0, Validators.required],
    duration: 0,
    attendees: '' as any,
    markAllAsTouched: jest.fn(() => {}),
};

export const mockSpace = {
    id: 1,
    name: 'test-space',
};

export const mockBuilding = {
    id: 1,
    name: 'test-building',
    zone_id: 'zone-1',
};

export const mockEventFlowOptions = {
    calendar_id: '123',
    zone_id: ['zone-1'],
};

export const mockBuildingLevel = {
    id: '123',
    name: 'Building-1',
    map_id: 'map-id-1',
};

export const mockFeature = 'Whiteboard';

export const mockLocatable = {
    id: '123',
    name: 'Space-1',
    map_id: 'map-id-1',
    level: mockBuildingLevel,
    zones: ['zone-1'],
};

export const mockMapsList = {
    map_id: 'map-1',
    level: 'Level 1',
};

export class mockEventFormService {
    formModel = mockForm;
    fb = new FormBuilder();
    form = this.fb.group(this.formModel);
    public view = '';
    last_success = null;
    loading = of(false);

    available_spaces = of([mockSpace, mockSpace, mockSpace]);
    options = of(mockEventFlowOptions);

    setView(view: string) {
        this.view = view;
    }
    setOptions(option: any) {
        this.options = option;
    }
    newForm = jest.fn();
    resentForm = jest.fn();
    clearForm = jest.fn();
    storeForm = jest.fn(() => {});
    loadForm = jest.fn();
    postForm = jest.fn();
}

export class mockOrgService {
    initialised = of(true);
    features_loaded$ = of(true);
    building_list = of([mockBuilding, mockBuilding]);
    active_building = of(mockBuilding);
    building = null;

    levelsForBuilding(bld) {
        return [mockBuildingLevel, mockBuildingLevel];
    }
}

export class mockSpacesService {
    initialised = of(true);
    features = of([mockFeature, mockFeature]);
}

export class mockFeatureFilterService {}

export class mockMapService {
    features_loaded$ = of(true);
    locatable_spaces$ = of([mockLocatable, mockLocatable]);
    maps_list$ = of(mockMapsList);
    map_features = [
        {
            track_id: '123',
            location: { x: 0.3, y: 0.8 },
        },
    ];

    locateSpaces(spaces) {
        this.locatable_spaces$ = of(spaces);
    }
}

export class mockRoomConfirmService {}

export class mockRouterStub {
    navigate = jest.fn(() => {});
}

export class mockMatDialogRef {
    close = jest.fn(() => {});
}
