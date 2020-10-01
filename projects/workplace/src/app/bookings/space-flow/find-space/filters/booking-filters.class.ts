import { Building } from 'src/app/organisation/building.class';
import { unique } from 'src/app/common/general';
import { RoomConfiguration } from 'src/app/common/room-configuration.interface';
import { Identity } from 'src/app/common/types';

export type BookingFilterKey = 'locations' | 'configurations' | 'features' | 'capacity';
export type BookingFilterValue = Building | RoomConfiguration | Identity | null;

export class BookingFilters {
    constructor(
        public locations: string[] = [],
        public configurations: string[] = [],
        public features: string[] = [],
        public capacity: string = null
    ) {}

    public setItem(key: BookingFilterKey, val: BookingFilterValue): BookingFilters {
        const newFilter = this.clone();
        if (!!val) {
            switch (key) {
                case 'capacity':
                    newFilter.capacity = (val as Identity).value;
                    break;
                default: {
                    // a nasty cast but RoomConfiguration, Building and Identity all have an id field
                    const { id } = val as any;
                    let array = newFilter[key];
                    array.push(id);
                    array = unique(array);
                    newFilter[key] = [...array];
                    break;
                }
            }
        }
        return newFilter;
    }

    public removeItem(key: BookingFilterKey, val: BookingFilterValue): BookingFilters {
        const newFilter = this.clone();
        if (!!val) {
            switch (key) {
                case 'capacity':
                    newFilter.capacity = null;
                    break;
                default: {
                    // a nasty cast but RoomConfiguration, Building and Identity all have an id field
                    const { id } = val as any;
                    const array = newFilter[key];
                    array.splice(
                        array.findIndex(objId => objId === id),
                        1
                    );
                    newFilter[key] = [...array];
                    break;
                }
            }
        }
        return newFilter;
    }

    public get any(): boolean {
        return (
            !!this.locations.length ||
            !!this.configurations.length ||
            !!this.features.length ||
            !!this.capacity
        );
    }

    private clone(): BookingFilters {
        return new BookingFilters(
            this.locations,
            this.configurations,
            this.features,
            this.capacity
        );
    }
}
