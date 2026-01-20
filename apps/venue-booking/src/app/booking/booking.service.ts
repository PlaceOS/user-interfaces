import { computed, Injectable, signal } from '@angular/core';
import { userSignal } from '@placeos/common';

export interface ServiceOption {
    id: string;
    name: string;
    description: string;
    icon: string;
    restricted: boolean;
    cost?: number;
    has_options?: boolean;
    options?: { id: string; label: string }[];
}

export interface ApprovalInfo {
    approvals: string[];
    documents: string[];
    estimated_time: string;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
    public readonly user = userSignal();

    // Stepper
    public readonly current_step = signal(0);
    public readonly steps = [
        { id: 'event', label: 'Event Details' },
        { id: 'organizer', label: 'Organizer Info' },
        { id: 'requirements', label: 'Requirements' },
        { id: 'documents', label: 'Documents' },
    ];

    // Step 1: Event Details
    public readonly event_title = signal('');
    public readonly event_date = signal(Date.now());
    public readonly event_time = signal(Date.now());
    public readonly duration = signal(120); // Duration in minutes (default 2 hours)
    public readonly venue_selection_mode = signal<'known' | 'help'>('known');
    public readonly venue_name = signal('');
    public readonly expected_capacity = signal<number>(null);
    public readonly venue_preferences = signal('');
    public readonly event_description = signal('');
    public readonly capacity_options = [
        { value: 10, label: '10+' },
        { value: 25, label: '25+' },
        { value: 50, label: '50+' },
        { value: 100, label: '100+' },
        { value: 250, label: '250+' },
        { value: 500, label: '500+' },
        { value: 1000, label: '1000+' },
    ];

    // Step 2: Organizer Info
    public readonly organizer_name = signal('');
    public readonly organizer_email = signal('');
    public readonly organizer_phone = signal('');

    // Step 3: Requirements
    public readonly selected_services = signal<string[]>([]);
    public readonly expanded_services = signal<string[]>([]);
    public readonly selected_service_options = signal<Record<string, string[]>>(
        {},
    );
    public readonly expected_attendance = signal(5);
    public readonly is_outdoor_event = signal(false);
    public readonly is_major_event = signal(false);
    public readonly special_requirements = signal('');
    public readonly payment_method = signal<'credit_card' | 'fau_code'>(
        'credit_card',
    );

    // Payment fields
    public readonly card_number = signal('');
    public readonly card_expiry = signal('');
    public readonly card_cvc = signal('');
    public readonly card_name = signal('');
    public readonly fau_code = signal('');

    public readonly attendance_options = [5, 10, 25, 50, 100, 250, 500, 1000];

    public readonly is_student = signal(true);

    public readonly services: ServiceOption[] = [
        {
            id: 'alcohol',
            name: 'Alcohol Service',
            description: 'Serving alcoholic beverages',
            icon: 'liquor',
            restricted: true,
            cost: 200,
        },
        {
            id: 'fireworks',
            name: 'Fireworks/Pyrotechnics',
            description: 'Fireworks display or pyrotechnics',
            icon: 'celebration',
            restricted: true,
            cost: 500,
        },
        {
            id: 'av_livestream',
            name: 'AV/Livestream',
            description: 'Audio/visual equipment or livestreaming',
            icon: 'videocam',
            restricted: false,
            cost: 300,
            has_options: true,
            options: [
                { id: 'microphone', label: 'Microphone' },
                { id: 'projector', label: 'Projector' },
                { id: 'livestream', label: 'Livestream' },
                { id: 'recording', label: 'Recording' },
            ],
        },
        {
            id: 'parking',
            name: 'Parking',
            description: 'Reserved parking or parking validation',
            icon: 'local_parking',
            restricted: false,
            cost: 100,
        },
        {
            id: 'security',
            name: 'Security',
            description: 'Security personnel required',
            icon: 'security',
            restricted: false,
            cost: 250,
        },
        {
            id: 'insurance',
            name: 'Special Insurance',
            description: 'Special insurance requirements',
            icon: 'verified_user',
            restricted: true,
            cost: 150,
        },
        {
            id: 'outdoor_setup',
            name: 'Outdoor Setup',
            description: 'Outdoor tents, canopies, etc.',
            icon: 'camping',
            restricted: false,
            cost: 350,
            has_options: true,
            options: [
                { id: 'tent', label: 'Tent/Canopy' },
                { id: 'tables', label: 'Tables' },
                { id: 'chairs', label: 'Chairs' },
                { id: 'lighting', label: 'Outdoor Lighting' },
                { id: 'heaters', label: 'Heaters/Fans' },
                { id: 'generator', label: 'Generator/Power' },
            ],
        },
        {
            id: 'stage',
            name: 'Stage Setup',
            description: 'Stage or platform construction',
            icon: 'podium',
            restricted: true,
            cost: 400,
        },
    ];

    // Computed values
    public readonly selected_services_with_costs = computed(() => {
        return this.services.filter((s) =>
            this.selected_services().includes(s.id),
        );
    });

    public readonly subtotal = computed(() => {
        return this.selected_services_with_costs().reduce(
            (sum, s) => sum + (s.cost || 0),
            0,
        );
    });

    public readonly processing_fee = computed(() => {
        return (this.subtotal() + 150) * 0.03;
    });

    public readonly total_cost = computed(() => {
        return this.subtotal() + 150 + this.processing_fee();
    });

    public readonly approval_info = computed<ApprovalInfo>(() => {
        const approvals: string[] = ['VENUE'];
        const documents: string[] = [];

        if (
            this.selected_services().includes('alcohol') ||
            this.selected_services().includes('fireworks')
        ) {
            approvals.push('ENVIRONMENTAL HEALTH & SAFETY');
        }
        if (this.selected_services().includes('alcohol')) {
            documents.push('Alcohol Permit');
        }
        if (this.selected_services().includes('fireworks')) {
            documents.push('Pyrotechnics Permit');
        }
        if (this.selected_services().includes('insurance')) {
            documents.push('Insurance Certificate');
        }
        if (this.is_major_event()) {
            approvals.push('SPECIAL EVENTS');
            documents.push('Security Plan');
        }

        const estimated_time =
            approvals.length > 2
                ? '3-5 business days'
                : approvals.length > 1
                  ? '2-3 business days'
                  : '24 hours';

        return { approvals, documents, estimated_time };
    });

    public readonly required_documents = computed(() => {
        return this.approval_info().documents;
    });

    constructor() {
        this.initOrganizerFromUser();
    }

    private initOrganizerFromUser(): void {
        const user = this.user();
        if (user) {
            this.organizer_name.set(user.name || '');
            this.organizer_email.set(user.email || '');
        }
    }

    public getStepClass(step_index: number): string {
        if (this.current_step() > step_index) {
            return 'bg-success text-success-content';
        } else if (this.current_step() === step_index) {
            return 'bg-secondary text-secondary-content';
        }
        return 'bg-base-300 text-base-content/50';
    }

    public toggleService(service_id: string): void {
        this.selected_services.update((services) => {
            if (services.includes(service_id)) {
                return services.filter((id) => id !== service_id);
            }
            return [...services, service_id];
        });
    }

    public toggleServiceExpanded(service_id: string): void {
        this.expanded_services.update((services) => {
            if (services.includes(service_id)) {
                return services.filter((id) => id !== service_id);
            }
            return [...services, service_id];
        });
    }

    public toggleServiceOption(service_id: string, option_id: string): void {
        this.selected_service_options.update((options) => {
            const current = options[service_id] || [];
            if (current.includes(option_id)) {
                return {
                    ...options,
                    [service_id]: current.filter((id) => id !== option_id),
                };
            }
            return {
                ...options,
                [service_id]: [...current, option_id],
            };
        });
    }

    public nextStep(): void {
        if (this.current_step() < this.steps.length - 1) {
            this.current_step.update((step) => step + 1);
        }
    }

    public previousStep(): void {
        if (this.current_step() > 0) {
            this.current_step.update((step) => step - 1);
        }
    }

    public submitRequest(): void {
        console.log('Submitting request:', {
            event_title: this.event_title(),
            event_date: this.event_date(),
            event_time: this.event_time(),
            duration: this.duration(),
            venue_selection_mode: this.venue_selection_mode(),
            venue_name: this.venue_name(),
            expected_capacity: this.expected_capacity(),
            venue_preferences: this.venue_preferences(),
            event_description: this.event_description(),
            organizer_name: this.organizer_name(),
            organizer_email: this.organizer_email(),
            organizer_phone: this.organizer_phone(),
            selected_services: this.selected_services(),
            selected_service_options: this.selected_service_options(),
            expected_attendance: this.expected_attendance(),
            is_outdoor_event: this.is_outdoor_event(),
            is_major_event: this.is_major_event(),
            special_requirements: this.special_requirements(),
            payment_method: this.payment_method(),
            total_cost: this.total_cost(),
        });
        alert('Event request submitted successfully!');
    }

    public reset(): void {
        this.current_step.set(0);
        this.event_title.set('');
        this.event_date.set(Date.now());
        this.event_time.set(Date.now());
        this.duration.set(120);
        this.venue_selection_mode.set('known');
        this.venue_name.set('');
        this.expected_capacity.set(null);
        this.venue_preferences.set('');
        this.event_description.set('');
        this.selected_services.set([]);
        this.expanded_services.set([]);
        this.selected_service_options.set({});
        this.expected_attendance.set(5);
        this.is_outdoor_event.set(false);
        this.is_major_event.set(false);
        this.special_requirements.set('');
        this.payment_method.set('credit_card');
        this.card_number.set('');
        this.card_expiry.set('');
        this.card_cvc.set('');
        this.card_name.set('');
        this.fau_code.set('');
        this.initOrganizerFromUser();
    }
}
