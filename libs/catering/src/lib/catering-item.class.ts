import { CateringOption } from './catering.interfaces';

export class CateringItem {
    /** ID of the catering item */
    public readonly id: string;
    /** Display name for the catering item */
    public readonly name: string;
    /** Category that this item is associated */
    public readonly category: string;
    /** Description of the contents of the catering item */
    public readonly description: string;
    /** Unit price in cents for the catering item */
    public readonly unit_price: number;
    /** Number of item in the associated order */
    public readonly quantity: number;
    /** List of options for the catering item */
    public readonly options: CateringOption[];
    /** List of attributes assoicated with the catering item */
    public readonly tags: string[];
    /** Whether catering items can be purchased using points */
    public readonly accept_points: boolean;
    /** Max percentage of the cost that can be covered using points */
    public readonly discount_cap: number;
    /** Total cost for the item */
    public readonly total_cost: number;

    public readonly options_string: string;

    constructor(data: Partial<CateringItem> = {}) {
        this.id = data.id || '';
        this.name = data.name || data.id || '';
        this.category = data.category || '';
        this.unit_price = data.unit_price || 0;
        this.description = data.description || '';
        this.quantity = data.quantity || 0;
        this.discount_cap = data.discount_cap || 0;
        this.accept_points = !!data.accept_points;
        this.options = data.options || [];
        this.tags = data.tags || [];
        this.total_cost =
            (this.unit_price +
                this.options
                    .map((i) => i.unit_price || 0)
                    .reduce((c, a) => c + a, 0)) *
            this.quantity;

        this.options_string =
            this.options
                ?.map((_) => _.id || '')
                .sort((a, b) => a.localeCompare(b))
                .join(',') || '';
    }
}
