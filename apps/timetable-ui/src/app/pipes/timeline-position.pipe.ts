import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from '@user-interfaces/common';

/*
 * Calcuates the position along the timeline based on the passed time
 * Usage:
 *   value | timelinePosition
 * Example:
 *   {{ date.valueOf() | timelinePosition }}
 */
@Pipe({ name: 'timelinePosition' })
export class TimelinePositionPipe implements PipeTransform {
    constructor(private _settings: SettingsService) {}

    transform(time: number): number {
        const { start_time, end_time } = this._settings.get('app.general');
        return ((time - start_time) / (end_time - start_time)) * 100;
    }
}
