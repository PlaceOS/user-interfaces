

// Event catering order interfaces
export type CateringOrderStatus = 'accepted' | 'preparing' | 'ready' | 'delivered' | 'cancelled';

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
}

export type CateringRule =
    | ['after_hour' | 'before_hour', number]
    | ['min_length' | 'max_length' | 'is_before' | 'is_after' | 'visitor_type', string]
    | ['groups', string[]];

export interface CateringRuleset {
    /** ID of the ruleset. Zone ID, category or tag */
    id: string;
    /** Descriptive name of the ruleset */
    name: string;
    /** List of rules for the id */
    rules: CateringRule[];
}
