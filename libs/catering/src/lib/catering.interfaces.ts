// Event catering order interfaces
export type CateringOrderStatus =
    | 'accepted'
    | 'preparing'
    | 'ready'
    | 'delivered'
    | 'cancelled';

export interface CateringOptionGroup {
    name: string;
    multiple: boolean;
    options: CateringOption[];
}

export interface CateringOption {
    /** Unique Identifier of the catering option */
    readonly id: string;
    /** Display name for the catering option */
    readonly name: string;
    /** Name of the group associated with the option */
    readonly group: string;
    /** Whether multiple items in the group can be selected */
    readonly multiple: boolean;
    /** Cost of adding the option to the item */
    readonly unit_price: number;
    /** Whether the catering option is active for the item */
    active?: boolean;
}
