import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CateringOption } from '../catering.interfaces';
import { DialogEvent, HashMap, unique } from '@user-interfaces/common';

export interface CateringOptionsModalData {
    options: CateringOption[];
}

interface CateringOptionGroup {
    name: string;
    multiple: boolean;
    options: CateringOption[];
}

@Component({
    selector: 'app-catering-options-modal',
    templateUrl: './catering-options-modal.component.html',
    styleUrls: ['./catering-options-modal.component.scss'],
})
export class CateringOptionsModalComponent {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** List of option groups */
    public readonly groups: CateringOptionGroup[];
    /** Mapping of options to their active state */
    public option_state: HashMap<boolean> = {};

    constructor(@Inject(MAT_DIALOG_DATA) private _data: CateringOptionsModalData) {
        const groups = unique(this._data.options.map((i) => i.group || 'Other'));
        const group_list = [];
        for (const group of groups) {
            const options = this._data.options.filter((i) => i.group === group);
            group_list.push({
                name: group,
                multiple: !!options.find((i) => i.multiple),
                options,
            });
        }
        this.groups = group_list;
    }

    public updateGroupOption(group: CateringOptionGroup, id: string) {
        for (const option of group.options) {
            this.option_state[option.id] = option.id === id;
        }
    }

    public saveOptions() {
        const options = this._data.options.filter((opt) => this.option_state[opt.id]);
        this.event.emit({ reason: 'done', metadata: { options } });
    }
}
