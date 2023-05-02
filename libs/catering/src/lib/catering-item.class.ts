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
    /** String list of available options */
    public readonly options_string: string;
    /** List of images for the catering item */
    public readonly images: string[];
    /** List of active options for the item */
    public readonly option_list: CateringOption[];
    /** Price per unit with selected options */
    public readonly unit_price_with_options: number;
    /** Zones in which this item is not allow to be ordered in */
    public readonly hide_for_zones: string[];
    /** Whether item in part of an order */
    public readonly in_order: boolean;

    public get custom_id() {
        const options = this.option_list.map((_) => _.id).join('+');
        return `${this.id}[${options}]${!this.in_order ? 'menu' : ''}`;
    }

    constructor(data: Partial<CateringItem> = {}) {
        this.id = data.id || '';
        this.name = data.name || data.id || '';
        this.category = data.category || '';
        this.unit_price = data.unit_price || 0;
        this.description = data.description || '';
        this.quantity = data.quantity || 0;
        this.discount_cap = data.discount_cap || 0;
        this.accept_points = !!data.accept_points;
        this.tags = data.tags || [];
        this.images = data.images || [];
        this.options = data.options || [];
        const has_options = this.options.some((_) => _.active === true);
        this.option_list =
            (has_options
                ? this.options.filter((_) => _.active === true)
                : data.option_list) || [];
        this.hide_for_zones = data.hide_for_zones || [];
        this.unit_price_with_options =
            this.unit_price +
            this.option_list
                .map((i) => i.unit_price || 0)
                .reduce((c, a) => c + a, 0);
        this.total_cost = this.unit_price_with_options * this.quantity;
        this.options_string =
            this.options
                ?.map((_) => _.id || '')
                .sort((a, b) => a.localeCompare(b))
                .join(',') || '';
        this.in_order = data.in_order ?? false;
    }
}
