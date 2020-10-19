
import { HashMap } from './types';

export class BaseDataClass {
    /** Unique Identifier of the object */
    public readonly id: string;
    /** Human readable name of the object */
    public readonly name: string;
    /** Email address associated with the object */
    public readonly email: string;
    /** Map of local property names to server ones */
    protected _server_names: HashMap<string> = {};

    constructor(raw_data: HashMap) {
        this.id = raw_data.id || raw_data.zone_id || raw_data.email || '';
        this.name = raw_data.name || '';
        this.email = (raw_data.email || '').toLowerCase();
    }

    /**
     * Convert object into plain object
     */
    public toJSON(this: BaseDataClass, with_changes: boolean = true): HashMap {
        const obj: any = { ...this };
        // Remove local private members

        // Convert remaining members to be public
        const keys = Object.keys(obj);
        for (const key of keys) {
            if (key[0] === '_') {
                const new_key = this._server_names[key.substr(1)] || key.substr(1);
                obj[new_key] = obj[key];
                delete obj[key];
            } else if (obj[key] === undefined) {
                delete obj[key];
            }
        }
        return obj;
    }

    /**
     * Make a copy of this object
     */
    public clone(): BaseDataClass {
        return new BaseDataClass(this);
    }

    /**
     * Make a copy of this object without identification data
     */
    public duplicate(): BaseDataClass {
        return new BaseDataClass({ ...this, id: null, email: null });
    }
}
