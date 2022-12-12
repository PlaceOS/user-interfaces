import { Identity } from '@placeos/common';

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

export type CateringRule =
    | ['after_hour' | 'before_hour' | 'is_before' | 'within_hours', number]
    | ['min_length' | 'max_length' | 'visitor_type', string]
    | ['groups', string[]];

export interface CateringRuleset {
    /** ID of the ruleset. Zone ID, category or tag */
    id: string;
    /** Descriptive name of the ruleset */
    name: string;
    /** List of rules for the id */
    rules: CateringRule[];
}

export const RULE_TYPES: Identity[] = [
    { id: 'after_hour', name: 'After Hour of Day' },
    { id: 'before_hour', name: 'Before Hour of Day' },
    { id: 'min_length', name: 'Min. Meeting Length' },
    { id: 'max_length', name: 'Max. Meeting Length' },
    { id: 'is_before', name: 'Is Hours before Meeting' },
    { id: 'within_hours', name: 'Within Hours before Meeting' },
    { id: 'visitor_type', name: 'Visitor Type' },
    { id: 'groups', name: 'User in Groups' },
];
