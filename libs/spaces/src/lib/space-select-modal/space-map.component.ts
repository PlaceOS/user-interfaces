import { Component, EventEmitter, Input } from '@angular/core';
import { BaseClass } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { map } from 'rxjs/operators';
import { Space } from '../space.class';
import { SpaceLocationPinComponent } from './space-location-pin.component';

@Component({
    selector: `space-map`,
    template: ` <i-map [src]="map_url" [features]="features | async" [actions]="actions | async"></i-map> `,
    styles: [
        `
            :host {
                position: relative;
                background: rgba(0,0,0,0.05);
            }
        `,
    ],
})
export class SpaceMapComponent extends BaseClass {
    @Input() public selected: string[] = [];
    @Input() public onSelect = new EventEmitter<Space>();

    private _seletedSpace = (s) => () => this.onSelect.emit(s);
    public level: BuildingLevel = null;

    public get map_url() {
        return this.level?.map_id || '';
    }

    public readonly features = this._event_form.available_spaces.pipe(
        map((l) =>
            l.map((space) => ({
                location: space.map_id,
                component: SpaceLocationPinComponent,
                data: {
                    ...space,
                    selected: this.selected.includes(space.id),
                },
            }))
        )
    );

    public readonly actions = this._event_form.available_spaces.pipe(
        map((l) =>
            l.map((space) => ({
                id: space.map_id,
                action: 'click',
                callback: this._seletedSpace(space),
            }))
        )
    );

    constructor(private _event_form: EventFormService, private _org: OrganisationService) {
        super();
    }
    
    public ngOnInit() {
        this.subscription('', this._event_form.available_spaces.subscribe(_ => {
            if (!this.level && _.length) this.level = _[0].level;
        }));
    }
}
