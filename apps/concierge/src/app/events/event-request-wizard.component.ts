import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';

import {
    ApprovalCategory,
    CATEGORY_DISPLAY_NAMES,
    CATEGORY_ICONS,
    MOCK_APPROVAL_EVENTS,
    MockApprovalEvent,
} from './event-approvals-mock.data';
import { EventApprovalStateService } from './event-approval-state.service';
import { ServicesStateService } from '../services/services-state.service';

interface VenueOption {
    id: string;
    name: string;
    icon: string;
    description: string;
}

const VENUE_OPTIONS: VenueOption[] = [
    {
        id: 'indoor',
        name: 'Indoor Venue',
        icon: 'meeting_room',
        description: 'Conference rooms, auditoriums, and indoor spaces',
    },
    {
        id: 'outdoor',
        name: 'Outdoor Venue',
        icon: 'park',
        description: 'Campus grounds, courtyards, and outdoor areas',
    },
];

interface UclaLocationOption {
    display: string;
    building: string;
    room: string;
    type: string;
    capacity: number;
    indoor: boolean;
}

const UCLA_LOCATIONS: UclaLocationOption[] = [
    // Covel Commons
    { display: 'Grand Horizon & Terrace — Covel Commons', building: 'Covel Commons', room: 'Grand Horizon & Terrace', type: 'Event Space', capacity: 350, indoor: true },
    { display: 'Salon A & Terrace — Covel Commons', building: 'Covel Commons', room: 'Salon A & Terrace', type: 'Event Space', capacity: 200, indoor: true },
    { display: 'South Bay Room — Covel Commons', building: 'Covel Commons', room: 'South Bay Room', type: 'Meeting Room', capacity: 60, indoor: true },
    { display: 'West Coast — Covel Commons', building: 'Covel Commons', room: 'West Coast', type: 'Meeting Room', capacity: 55, indoor: true },
    { display: 'North Ridge — Covel Commons', building: 'Covel Commons', room: 'North Ridge', type: 'Meeting Room', capacity: 50, indoor: true },
    { display: 'Conference Room L-04 — Covel Commons', building: 'Covel Commons', room: 'Conference Room L-04', type: 'Conference Room', capacity: 20, indoor: true },
    { display: 'Conference Room 207 — Covel Commons', building: 'Covel Commons', room: 'Conference Room 207', type: 'Conference Room', capacity: 20, indoor: true },
    { display: 'Northwest Campus Auditorium — Covel Commons', building: 'Covel Commons', room: 'Northwest Campus Auditorium', type: 'Auditorium', capacity: 349, indoor: true },
    // Carnesale Commons
    { display: 'Palisades Ballroom — Carnesale Commons', building: 'Carnesale Commons', room: 'Palisades Ballroom', type: 'Ballroom', capacity: 450, indoor: true },
    { display: 'Palisades ABCF Section — Carnesale Commons', building: 'Carnesale Commons', room: 'Palisades ABCF', type: 'Event Space', capacity: 300, indoor: true },
    { display: 'Palisades DE Section — Carnesale Commons', building: 'Carnesale Commons', room: 'Palisades DE', type: 'Event Space', capacity: 150, indoor: true },
    { display: 'Malibu — Carnesale Commons', building: 'Carnesale Commons', room: 'Malibu', type: 'Meeting Room', capacity: 40, indoor: true },
    { display: 'Venice A & B — Carnesale Commons', building: 'Carnesale Commons', room: 'Venice A & B', type: 'Meeting Room', capacity: 70, indoor: true },
    { display: 'Hermosa A & B — Carnesale Commons', building: 'Carnesale Commons', room: 'Hermosa A & B', type: 'Meeting Room', capacity: 70, indoor: true },
    // De Neve Plaza
    { display: 'Plaza Room — De Neve Plaza', building: 'De Neve Plaza', room: 'Plaza Room', type: 'Event Space', capacity: 250, indoor: true },
    { display: 'Plaza A — De Neve Plaza', building: 'De Neve Plaza', room: 'Plaza A', type: 'Conference Room', capacity: 120, indoor: true },
    { display: 'Plaza B — De Neve Plaza', building: 'De Neve Plaza', room: 'Plaza B', type: 'Conference Room', capacity: 120, indoor: true },
    { display: 'Sycamore — De Neve Plaza', building: 'De Neve Plaza', room: 'Sycamore', type: 'Meeting Room', capacity: 30, indoor: true },
    { display: 'Magnolia — De Neve Plaza', building: 'De Neve Plaza', room: 'Magnolia', type: 'Meeting Room', capacity: 12, indoor: true },
    { display: 'Jacaranda — De Neve Plaza', building: 'De Neve Plaza', room: 'Jacaranda', type: 'Meeting Room', capacity: 12, indoor: true },
    { display: 'De Neve Lecture Auditorium — De Neve Plaza', building: 'De Neve Plaza', room: 'De Neve Lecture Auditorium', type: 'Auditorium', capacity: 430, indoor: true },
    { display: 'Village View Room — Weyburn Terrace', building: 'De Neve Plaza', room: 'Village View Room', type: 'Event Space', capacity: 100, indoor: true },
    // University Club
    { display: 'Cederbaum Board Room — University Club', building: 'University Club', room: 'Cederbaum Board Room', type: 'Boardroom', capacity: 12, indoor: true },
    { display: 'Sierra — University Club', building: 'University Club', room: 'Sierra', type: 'Conference Room', capacity: 50, indoor: true },
    { display: 'Hacienda — University Club', building: 'University Club', room: 'Hacienda', type: 'Conference Room', capacity: 80, indoor: true },
    { display: 'Redwood — University Club', building: 'University Club', room: 'Redwood', type: 'Conference Room', capacity: 60, indoor: true },
    { display: 'Sequoia — University Club', building: 'University Club', room: 'Sequoia', type: 'Event Space', capacity: 100, indoor: true },
    { display: 'Morrison Room (incl. Terrace) — University Club', building: 'University Club', room: 'Morrison Room', type: 'Event Space', capacity: 200, indoor: true },
    { display: 'Main Dining Room — University Club', building: 'University Club', room: 'Main Dining Room', type: 'Dining Venue', capacity: 400, indoor: true },
    { display: 'Sherie Bar & Lounge — University Club', building: 'University Club', room: 'Sherie Bar & Lounge', type: 'Dining Venue', capacity: 100, indoor: true },
    { display: 'West Patio — University Club', building: 'University Club', room: 'West Patio', type: 'Outdoor Space', capacity: 40, indoor: false },
    { display: 'Garden Patio — University Club', building: 'University Club', room: 'Garden Patio', type: 'Outdoor Space', capacity: 200, indoor: false },
    // Luskin Conference Center
    { display: 'Centennial Ballroom — Luskin Conference Center', building: 'Luskin Conference Center', room: 'Centennial Ballroom', type: 'Ballroom', capacity: 500, indoor: true },
    { display: 'Centennial Terrace — Luskin Conference Center', building: 'Luskin Conference Center', room: 'Centennial Terrace', type: 'Outdoor Space', capacity: 250, indoor: false },
    { display: 'Laureate Room — Luskin Conference Center', building: 'Luskin Conference Center', room: 'Laureate Room', type: 'Conference Room', capacity: 80, indoor: true },
    { display: 'Meeting Room 1 — Luskin Conference Center', building: 'Luskin Conference Center', room: 'Meeting Room 1', type: 'Meeting Room', capacity: 30, indoor: true },
    { display: 'Meeting Room 2 — Luskin Conference Center', building: 'Luskin Conference Center', room: 'Meeting Room 2', type: 'Meeting Room', capacity: 25, indoor: true },
    { display: 'Meeting Room 3 — Luskin Conference Center', building: 'Luskin Conference Center', room: 'Meeting Room 3', type: 'Meeting Room', capacity: 20, indoor: true },
    // ASUCLA Event Spaces
    { display: 'Ackerman Grand Ballroom — ASUCLA', building: 'ASUCLA Event Spaces', room: 'Ackerman Grand Ballroom', type: 'Ballroom', capacity: 1200, indoor: true },
    { display: 'Bruin Reception Room — ASUCLA', building: 'ASUCLA Event Spaces', room: 'Bruin Reception Room', type: 'Event Space', capacity: 80, indoor: true },
    { display: 'Charles E. Young Grand Salon — ASUCLA', building: 'ASUCLA Event Spaces', room: 'Kerckhoff Grand Salon', type: 'Event Space', capacity: 200, indoor: true },
    { display: 'Viewpoint Conference Room — ASUCLA', building: 'ASUCLA Event Spaces', room: 'Viewpoint Conference Room', type: 'Conference Room', capacity: 40, indoor: true },
    { display: 'Kerckhoff State Room A — ASUCLA', building: 'ASUCLA Event Spaces', room: 'Kerckhoff State Room A', type: 'Meeting Room', capacity: 25, indoor: true },
    { display: 'Bruin Plaza — ASUCLA', building: 'ASUCLA Event Spaces', room: 'Bruin Plaza', type: 'Outdoor Space', capacity: 500, indoor: false },
    // Anderson School of Management
    { display: 'Korn Convocation Hall — Anderson School', building: 'Anderson School of Management', room: 'Korn Convocation Hall', type: 'Auditorium', capacity: 300, indoor: true },
    { display: 'Korn Foyer — Anderson School', building: 'Anderson School of Management', room: 'Korn Foyer', type: 'Event Space', capacity: 150, indoor: true },
    { display: 'Executive Dining Room — Anderson School', building: 'Anderson School of Management', room: 'Executive Dining Room', type: 'Dining Venue', capacity: 40, indoor: true },
    { display: 'Briskin Family Plaza — Anderson School', building: 'Anderson School of Management', room: 'Briskin Family Plaza', type: 'Outdoor Space', capacity: 200, indoor: false },
    { display: 'Anderson Large Classroom — Anderson School', building: 'Anderson School of Management', room: 'Anderson Large Classroom', type: 'Classroom', capacity: 80, indoor: true },
    // Fowler Museum
    { display: 'Lenart Auditorium — Fowler Museum', building: 'Fowler Museum', room: 'Lenart Auditorium', type: 'Auditorium', capacity: 324, indoor: true },
    { display: 'Goldenberg Terrace — Fowler Museum', building: 'Fowler Museum', room: 'Goldenberg Terrace', type: 'Outdoor Space', capacity: 250, indoor: false },
    { display: 'Davis Courtyard — Fowler Museum', building: 'Fowler Museum', room: 'Davis Courtyard', type: 'Outdoor Space', capacity: 150, indoor: false },
    { display: 'Deutsch Seminar Room — Fowler Museum', building: 'Fowler Museum', room: 'Deutsch Seminar Room', type: 'Meeting Room', capacity: 30, indoor: true },
    { display: 'UCLA Art Council Amphitheater — Fowler Museum', building: 'Fowler Museum', room: 'UCLA Art Council Amphitheater', type: 'Outdoor Space', capacity: 200, indoor: false },
    // Royce Hall
    { display: 'Royce Hall Main Auditorium', building: 'Royce Hall', room: 'Royce Hall Auditorium', type: 'Auditorium', capacity: 1834, indoor: true },
    { display: 'Humanities Conference Room — Royce Hall', building: 'Royce Hall', room: 'Humanities Conference Room', type: 'Conference Room', capacity: 120, indoor: true },
    { display: 'Herbert Morris Seminar Room — Royce Hall', building: 'Royce Hall', room: 'Herbert Morris Seminar Room', type: 'Meeting Room', capacity: 80, indoor: true },
    { display: 'Royce West Terrace — Royce Hall', building: 'Royce Hall', room: 'Royce West Terrace', type: 'Outdoor Space', capacity: 200, indoor: false },
    // James West Alumni Center
    { display: 'Collins Alumni Conference Room — Alumni Center', building: 'James West Alumni Center', room: 'Collins Alumni Conference Room', type: 'Conference Room', capacity: 150, indoor: true },
    { display: 'Tom Davis Founders\' Room — Alumni Center', building: 'James West Alumni Center', room: 'Tom Davis Founders Room', type: 'Event Space', capacity: 80, indoor: true },
    { display: 'Robert Kerr Galleria — Alumni Center', building: 'James West Alumni Center', room: 'Robert Kerr Galleria', type: 'Gallery', capacity: 250, indoor: true },
    { display: 'Northwest Patio — Alumni Center', building: 'James West Alumni Center', room: 'Alumni Center Northwest Patio', type: 'Outdoor Space', capacity: 150, indoor: false },
    { display: 'Northeast Patio — Alumni Center', building: 'James West Alumni Center', room: 'Alumni Center Northeast Patio', type: 'Outdoor Space', capacity: 100, indoor: false },
    // Hammer Museum
    { display: 'Billy Wilder Theater — Hammer Museum', building: 'Hammer Museum', room: 'Billy Wilder Theater', type: 'Theater', capacity: 300, indoor: true },
    { display: 'Pritzker Family Commons — Hammer Museum', building: 'Hammer Museum', room: 'Pritzker Family Commons', type: 'Event Space', capacity: 400, indoor: true },
    { display: 'Annenberg Terrace — Hammer Museum', building: 'Hammer Museum', room: 'Annenberg Terrace', type: 'Outdoor Space', capacity: 200, indoor: false },
    { display: 'McMorrow Terrace — Hammer Museum', building: 'Hammer Museum', room: 'McMorrow Terrace', type: 'Outdoor Space', capacity: 150, indoor: false },
    { display: 'Executive Board Room — Hammer Museum', building: 'Hammer Museum', room: 'Hammer Executive Board Room', type: 'Boardroom', capacity: 20, indoor: true },
    { display: 'The Lab — Hammer Museum', building: 'Hammer Museum', room: 'The Lab', type: 'Event Space', capacity: 60, indoor: true },
    { display: 'Bay Nimoy Studio — Hammer Museum', building: 'Hammer Museum', room: 'Nimoy Studio', type: 'Event Space', capacity: 80, indoor: true },
    // Schoenberg Music Building
    { display: 'Schoenberg Hall — Schoenberg Music', building: 'Schoenberg Music Building', room: 'Schoenberg Hall', type: 'Auditorium', capacity: 522, indoor: true },
    { display: 'Lani Hall Theater — Schoenberg Music', building: 'Schoenberg Music Building', room: 'Lani Hall', type: 'Theater', capacity: 133, indoor: true },
    { display: 'Jan Popper Theater — Schoenberg Music', building: 'Schoenberg Music Building', room: 'Jan Popper Theater', type: 'Theater', capacity: 140, indoor: true },
    // Theater, Film & Television
    { display: 'Freud Playhouse — TFT', building: 'Theater, Film & Television', room: 'Freud Playhouse', type: 'Theater', capacity: 562, indoor: true },
    { display: 'James Bridges Theater — TFT', building: 'Theater, Film & Television', room: 'James Bridges Theater', type: 'Theater', capacity: 278, indoor: true },
    { display: 'Little Theater — TFT', building: 'Theater, Film & Television', room: 'Little Theater', type: 'Theater', capacity: 172, indoor: true },
    { display: 'Studio Theater 1340 — TFT', building: 'Theater, Film & Television', room: 'Studio Theater 1340', type: 'Theater', capacity: 81, indoor: true },
    { display: 'Darren Star Screening Room — TFT', building: 'Theater, Film & Television', room: 'Darren Star Screening Room', type: 'Theater', capacity: 60, indoor: true },
    // CNSI
    { display: 'CNSI Auditorium', building: 'CNSI', room: 'CNSI Auditorium', type: 'Auditorium', capacity: 260, indoor: true },
    { display: 'CNSI Lobby', building: 'CNSI', room: 'CNSI Lobby Space', type: 'Event Space', capacity: 150, indoor: true },
    { display: 'CNSI Multipurpose Meeting Space', building: 'CNSI', room: 'CNSI Multipurpose Room', type: 'Conference Room', capacity: 60, indoor: true },
    { display: 'CNSI Conference Room A', building: 'CNSI', room: 'CNSI Conference Room A', type: 'Conference Room', capacity: 20, indoor: true },
    { display: 'CNSI Upper Terrace', building: 'CNSI', room: 'CNSI Terrace', type: 'Outdoor Space', capacity: 100, indoor: false },
    // Botanical Gardens
    { display: 'La Kretz Garden Pavilion — Botanical Gardens', building: 'Botanical Gardens', room: 'La Kretz Garden Pavilion', type: 'Event Space', capacity: 100, indoor: true },
    { display: 'Herbert Plaza — Botanical Gardens', building: 'Botanical Gardens', room: 'Herbert Plaza', type: 'Outdoor Space', capacity: 120, indoor: false },
    { display: "Park's Patio — Botanical Gardens", building: 'Botanical Gardens', room: 'Parks Patio', type: 'Outdoor Space', capacity: 80, indoor: false },
    { display: 'Jewell Terrace — Botanical Gardens', building: 'Botanical Gardens', room: 'Jewell Terrace', type: 'Outdoor Space', capacity: 60, indoor: false },
    { display: 'Norris Terrace — Botanical Gardens', building: 'Botanical Gardens', room: 'Norris Terrace', type: 'Outdoor Space', capacity: 60, indoor: false },
    { display: 'Outdoor Amphitheater — Botanical Gardens', building: 'Botanical Gardens', room: 'Garden Amphitheater', type: 'Outdoor Space', capacity: 150, indoor: false },
    // Samueli Engineering
    { display: 'Boelter Hall 6750 — Samueli Engineering', building: 'Samueli Engineering', room: 'Boelter Hall 6750', type: 'Classroom', capacity: 80, indoor: true },
    { display: 'Boelter Hall Penthouse — Samueli Engineering', building: 'Samueli Engineering', room: 'Boelter Hall Penthouse', type: 'Event Space', capacity: 60, indoor: true },
    { display: 'Engineering VI Room 100 — Samueli Engineering', building: 'Samueli Engineering', room: 'Engineering VI Room 100', type: 'Auditorium', capacity: 200, indoor: true },
    { display: 'Engineering VI Room 300 — Samueli Engineering', building: 'Samueli Engineering', room: 'Engineering VI Room 300', type: 'Classroom', capacity: 100, indoor: true },
    { display: 'Mong Learning Center — Samueli Engineering', building: 'Samueli Engineering', room: 'Mong Learning Center', type: 'Classroom', capacity: 80, indoor: true },
    { display: 'Cohen Multipurpose Room — Samueli Engineering', building: 'Samueli Engineering', room: 'Cohen Multipurpose Room', type: 'Event Space', capacity: 100, indoor: true },
    { display: 'Engineering IV Patio — Samueli Engineering', building: 'Samueli Engineering', room: 'Engineering IV Patio', type: 'Outdoor Space', capacity: 150, indoor: false },
    // Law School
    { display: 'Law School Lecture Hall', building: 'Law School', room: 'Law School Lecture Hall', type: 'Auditorium', capacity: 200, indoor: true },
    { display: 'Law School Classroom A', building: 'Law School', room: 'Law School Classroom A', type: 'Classroom', capacity: 80, indoor: true },
    { display: 'Law School Meeting Room', building: 'Law School', room: 'Law School Meeting Room', type: 'Meeting Room', capacity: 30, indoor: true },
    { display: 'Shapiro Courtyard — Law School', building: 'Law School', room: 'Shapiro Courtyard', type: 'Outdoor Space', capacity: 200, indoor: false },
    // Moore Hall
    { display: 'Moore Hall Reading Room', building: 'Moore Hall', room: 'Moore Hall Reading Room', type: 'Event Space', capacity: 80, indoor: true },
    { display: 'Moore Hall Classroom 100', building: 'Moore Hall', room: 'Moore Hall Classroom 100', type: 'Classroom', capacity: 60, indoor: true },
    { display: 'Moore Hall Courtyard', building: 'Moore Hall', room: 'Moore Hall Courtyard', type: 'Outdoor Space', capacity: 100, indoor: false },
    { display: 'Moore Hall Auditorium', building: 'Moore Hall', room: 'Moore Hall Auditorium', type: 'Auditorium', capacity: 150, indoor: true },
    // Luskin School of Public Affairs
    { display: 'Luskin PA Classroom — Public Affairs', building: 'Luskin School of Public Affairs', room: 'Luskin PA Classroom', type: 'Classroom', capacity: 60, indoor: true },
    { display: '3rd Floor Commons — Public Affairs', building: 'Luskin School of Public Affairs', room: '3rd Floor Commons', type: 'Event Space', capacity: 100, indoor: true },
    { display: 'Luskin Patio — Public Affairs', building: 'Luskin School of Public Affairs', room: 'Luskin PA Patio', type: 'Outdoor Space', capacity: 60, indoor: false },
    { display: 'Luskin Terrace — Public Affairs', building: 'Luskin School of Public Affairs', room: 'Luskin PA Terrace', type: 'Outdoor Space', capacity: 80, indoor: false },
    // Powell Library / YRL
    { display: '307A Classroom A — Powell Library', building: 'Powell Library', room: 'Powell Library Classroom A', type: 'Classroom', capacity: 40, indoor: true },
    { display: '320B Classroom B — Powell Library', building: 'Powell Library', room: 'Powell Library Classroom B', type: 'Classroom', capacity: 40, indoor: true },
    { display: '307C Classroom C — Powell Library', building: 'Powell Library', room: 'Powell Library Classroom C', type: 'Classroom', capacity: 40, indoor: true },
    { display: '330 InqLab 3 — Powell Library', building: 'Powell Library', room: 'Powell InqLab 3', type: 'Classroom', capacity: 30, indoor: true },
    { display: 'YRL Research Commons Classroom', building: 'Powell Library', room: 'YRL RC Classroom', type: 'Classroom', capacity: 30, indoor: true },
    // DataX
    { display: 'Impact Forum — DataX', building: 'DataX', room: 'DataX Impact Forum', type: 'Event Space', capacity: 100, indoor: true },
    { display: 'Conference Room A — DataX', building: 'DataX', room: 'DataX Conference Room A', type: 'Conference Room', capacity: 20, indoor: true },
    { display: 'Collaboration Hub — DataX', building: 'DataX', room: 'DataX Collaboration Hub', type: 'Event Space', capacity: 40, indoor: true },
    // Kaplan Hall
    { display: 'Kaplan Hall 193', building: 'Kaplan Hall', room: 'Kaplan Hall 193', type: 'Event Space', capacity: 40, indoor: true },
    // Lake Arrowhead Lodge
    { display: 'Main Conference Hall — Lake Arrowhead', building: 'Lake Arrowhead Lodge', room: 'Lake Arrowhead Main Hall', type: 'Event Space', capacity: 200, indoor: true },
    { display: 'Breakout Room A — Lake Arrowhead', building: 'Lake Arrowhead Lodge', room: 'Lake Arrowhead Breakout Room A', type: 'Meeting Room', capacity: 30, indoor: true },
    { display: 'Breakout Room B — Lake Arrowhead', building: 'Lake Arrowhead Lodge', room: 'Lake Arrowhead Breakout Room B', type: 'Meeting Room', capacity: 20, indoor: true },
    { display: 'Executive Boardroom — Lake Arrowhead', building: 'Lake Arrowhead Lodge', room: 'Lake Arrowhead Boardroom', type: 'Boardroom', capacity: 16, indoor: true },
    // UCLA Recreation
    { display: 'Drake Stadium — UCLA Recreation', building: 'UCLA Recreation', room: 'Drake Stadium', type: 'Outdoor Space', capacity: 3500, indoor: false },
    { display: 'LA Tennis Center — UCLA Recreation', building: 'UCLA Recreation', room: 'Los Angeles Tennis Center', type: 'Outdoor Space', capacity: 5000, indoor: false },
    { display: 'John Wooden Center Meeting Rooms', building: 'UCLA Recreation', room: 'Wooden Center Meeting Rooms', type: 'Meeting Room', capacity: 40, indoor: true },
    { display: 'Sunset Canyon Recreation Center', building: 'UCLA Recreation', room: 'Sunset Canyon Recreation Center', type: 'Event Space', capacity: 300, indoor: true },
    { display: 'Student Activities Center', building: 'UCLA Recreation', room: 'Student Activities Center', type: 'Event Space', capacity: 150, indoor: true },
    // Campus Outdoor Spaces
    { display: 'Wilson Plaza', building: 'Campus Outdoor Spaces', room: 'Wilson Plaza', type: 'Outdoor Space', capacity: 500, indoor: false },
    { display: 'Court of Sciences', building: 'Campus Outdoor Spaces', room: 'Court of Sciences', type: 'Outdoor Space', capacity: 300, indoor: false },
    { display: 'Franklin Murphy Sculpture Garden', building: 'Campus Outdoor Spaces', room: 'Franklin Murphy Sculpture Garden', type: 'Outdoor Space', capacity: 200, indoor: false },
    { display: 'Meyerhoff Park', building: 'Campus Outdoor Spaces', room: 'Meyerhoff Park', type: 'Outdoor Space', capacity: 200, indoor: false },
    { display: 'Dickson Courts North & South', building: 'Campus Outdoor Spaces', room: 'Dickson Courts', type: 'Outdoor Space', capacity: 150, indoor: false },
];

const SERVICE_OPTIONS: { key: ApprovalCategory; label: string; icon: string }[] = [
    { key: 'venue', label: CATEGORY_DISPLAY_NAMES['venue'], icon: CATEGORY_ICONS['venue'] },
    { key: 'dining', label: CATEGORY_DISPLAY_NAMES['dining'], icon: CATEGORY_ICONS['dining'] },
    { key: 'av_tech', label: CATEGORY_DISPLAY_NAMES['av_tech'], icon: CATEGORY_ICONS['av_tech'] },
    { key: 'setup', label: CATEGORY_DISPLAY_NAMES['setup'], icon: CATEGORY_ICONS['setup'] },
    { key: 'events', label: CATEGORY_DISPLAY_NAMES['events'], icon: CATEGORY_ICONS['events'] },
    { key: 'parking', label: CATEGORY_DISPLAY_NAMES['parking'], icon: CATEGORY_ICONS['parking'] },
    { key: 'safety', label: CATEGORY_DISPLAY_NAMES['safety'], icon: CATEGORY_ICONS['safety'] },
    { key: 'services', label: CATEGORY_DISPLAY_NAMES['services'], icon: CATEGORY_ICONS['services'] },
];

@Component({
    selector: 'app-event-request-wizard',
    template: `
        <div class="bg-base-100 absolute inset-0 overflow-auto">
            <!-- Header -->
            <header
                class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[720px] items-center justify-between rounded-sm px-4 py-2"
            >
                <h2 class="text-xl font-medium">Request Event</h2>
                <a
                    icon
                    matRipple
                    [routerLink]="['/entertainment', 'events']"
                >
                    <icon>close</icon>
                </a>
            </header>

            <!-- Step Indicator -->
            <div
                class="mx-auto my-4 flex w-full max-w-[720px] items-center justify-center px-4"
            >
                @for (step of steps; track step.number; let i = $index) {
                    @if (i > 0) {
                        <div
                            class="mx-1 h-0.5 w-12"
                            [class.bg-primary]="
                                completed_steps().includes(i)
                            "
                            [class.bg-base-300]="
                                !completed_steps().includes(i)
                            "
                        ></div>
                    }
                    <button
                        matRipple
                        class="flex flex-col items-center"
                        (click)="goToStep(step.number)"
                        [disabled]="
                            step.number > current_step() &&
                            !completed_steps().includes(step.number - 1)
                        "
                    >
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors"
                            [class.bg-primary]="
                                current_step() === step.number
                            "
                            [class.text-primary-content]="
                                current_step() === step.number
                            "
                            [class.bg-success]="
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                            [class.text-white]="
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                            [class.bg-base-300]="
                                !completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                        >
                            @if (
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            ) {
                                <icon class="text-lg">done</icon>
                            } @else {
                                {{ step.number }}
                            }
                        </div>
                        <span
                            class="mt-1 text-xs"
                            [class.font-medium]="
                                current_step() === step.number
                            "
                            [class.opacity-60]="
                                current_step() !== step.number
                            "
                        >
                            {{ step.label }}
                        </span>
                    </button>
                }
            </div>

            <!-- Step Content -->
            <div
                class="mx-auto flex w-full max-w-[720px] flex-col px-4 pb-24"
            >
                <!-- Step 1: Event Details -->
                @if (current_step() === 1) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Event Details</h3>

                        <label class="text-sm font-medium"
                            >Event Title <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="form.controls.title"
                                placeholder="e.g. Annual Awards Night"
                            />
                            @if (form.controls.title.touched && form.controls.title.hasError('required')) {
                                <mat-error>Title is required</mat-error>
                            }
                        </mat-form-field>

                        <div class="flex flex-wrap gap-4">
                            <div class="min-w-[200px] flex-1">
                                <label class="text-sm font-medium"
                                    >Date <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="date"
                                        [formControl]="form.controls.date"
                                    />
                                </mat-form-field>
                            </div>
                            <div class="min-w-[140px] flex-1">
                                <label class="text-sm font-medium"
                                    >Start Time
                                    <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="time"
                                        [formControl]="form.controls.start_time"
                                    />
                                </mat-form-field>
                            </div>
                            <div class="min-w-[140px] flex-1">
                                <label class="text-sm font-medium"
                                    >Duration (minutes)
                                    <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        [formControl]="
                                            form.controls.duration_minutes
                                        "
                                    >
                                        @for (
                                            d of duration_options;
                                            track d.value
                                        ) {
                                            <mat-option [value]="d.value">
                                                {{ d.label }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>

                        <label class="text-sm font-medium">Venue Type</label>
                        <div class="flex gap-4">
                            @for (venue of venue_options; track venue.id) {
                                <button
                                    matRipple
                                    class="flex flex-1 flex-col items-center rounded-lg border-2 p-4 transition-colors"
                                    [class.border-primary]="
                                        form.controls.venue_type.value ===
                                        venue.id
                                    "
                                    [class.bg-base-200]="
                                        form.controls.venue_type.value ===
                                        venue.id
                                    "
                                    [class.border-base-300]="
                                        form.controls.venue_type.value !==
                                        venue.id
                                    "
                                    (click)="
                                        selectVenueType(venue.id)
                                    "
                                >
                                    <icon class="mb-2 text-3xl">{{
                                        venue.icon
                                    }}</icon>
                                    <div class="text-sm font-medium">
                                        {{ venue.name }}
                                    </div>
                                    <div
                                        class="mt-1 text-center text-xs opacity-60"
                                    >
                                        {{ venue.description }}
                                    </div>
                                </button>
                            }
                        </div>

                        <label class="text-sm font-medium"
                            >Location
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="form.controls.location"
                                [matAutocomplete]="locationAuto"
                                placeholder="Start typing a venue name..."
                                (input)="onLocationInput($event)"
                            />
                            <mat-autocomplete
                                #locationAuto="matAutocomplete"
                                (optionSelected)="onLocationSelected($event)"
                            >
                                @for (loc of filtered_locations(); track loc.display) {
                                    <mat-option [value]="loc.display">
                                        <div class="flex flex-col py-1">
                                            <span class="text-sm font-medium">{{ loc.room }}</span>
                                            <span class="text-xs opacity-60">{{ loc.building }} · {{ loc.type }} · Cap: {{ loc.capacity }}</span>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                            @if (form.controls.location.touched && form.controls.location.hasError('required')) {
                                <mat-error>Location is required</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium">Description</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formControl]="form.controls.description"
                                rows="3"
                                placeholder="Describe your event..."
                            ></textarea>
                        </mat-form-field>
                    </section>
                }

                <!-- Step 2: Organizer Info -->
                @if (current_step() === 2) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">
                            Organizer Information
                        </h3>

                        <label class="text-sm font-medium"
                            >Full Name
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="
                                    form.controls.organiser_name
                                "
                                placeholder="e.g. Sarah Chen"
                            />
                            @if (form.controls.organiser_name.touched && form.controls.organiser_name.hasError('required')) {
                                <mat-error>Name is required</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium"
                            >Email
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="email"
                                [formControl]="
                                    form.controls.organiser_email
                                "
                                placeholder="e.g. sarah.chen@ucla.edu"
                            />
                            @if (form.controls.organiser_email.touched && form.controls.organiser_email.hasError('required')) {
                                <mat-error>Email is required</mat-error>
                            }
                            @if (form.controls.organiser_email.touched && form.controls.organiser_email.hasError('email')) {
                                <mat-error>Invalid email address</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium"
                            >Phone
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="tel"
                                [formControl]="
                                    form.controls.organiser_phone
                                "
                                placeholder="e.g. +61 400 000 000"
                            />
                            @if (form.controls.organiser_phone.touched && form.controls.organiser_phone.hasError('required')) {
                                <mat-error>Phone is required</mat-error>
                            }
                        </mat-form-field>
                    </section>
                }

                <!-- Step 3: Requirements -->
                @if (current_step() === 3) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Requirements</h3>

                        <label class="text-sm font-medium"
                            >Services Required</label
                        >
                        <div
                            class="flex flex-col space-y-2 rounded-lg border border-base-300 p-4"
                        >
                            @for (
                                svc of service_options;
                                track svc.key
                            ) {
                                <mat-checkbox
                                    [checked]="
                                        isServiceSelected(svc.key)
                                    "
                                    (change)="
                                        toggleService(
                                            svc.key,
                                            $event.checked
                                        )
                                    "
                                >
                                    <div
                                        class="flex items-center space-x-2"
                                    >
                                        <icon class="text-lg">{{
                                            svc.icon
                                        }}</icon>
                                        <span>{{ svc.label }}</span>
                                    </div>
                                </mat-checkbox>
                            }
                        </div>

                        <!-- CNSI Event Services -->
                        @if (isServiceSelected('services')) {
                            <label class="mt-2 text-sm font-medium"
                                >Event Service Packages</label
                            >
                            <p
                                class="text-base-content/50 -mt-2 text-xs"
                            >
                                Select specific CNSI service packages for
                                this event.
                            </p>
                            <div class="mb-1 flex items-center gap-2">
                                <span class="text-xs font-medium"
                                    >Pricing:</span
                                >
                                <button
                                    class="rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors"
                                    [class]="
                                        cnsi_rate_type() === 'internal'
                                            ? 'bg-primary text-primary-content'
                                            : 'bg-base-200 hover:bg-base-300'
                                    "
                                    (click)="
                                        cnsi_rate_type.set('internal')
                                    "
                                    type="button"
                                >
                                    Internal
                                </button>
                                <button
                                    class="rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors"
                                    [class]="
                                        cnsi_rate_type() === 'external'
                                            ? 'bg-primary text-primary-content'
                                            : 'bg-base-200 hover:bg-base-300'
                                    "
                                    (click)="
                                        cnsi_rate_type.set('external')
                                    "
                                    type="button"
                                >
                                    External
                                </button>
                            </div>
                            @for (
                                group of cnsi_service_groups();
                                track group.label
                            ) {
                                <div class="mt-1 text-xs font-semibold opacity-60">
                                    {{ group.label }}
                                </div>
                                <div
                                    class="rounded-lg border border-base-200 divide-y divide-base-200 overflow-hidden"
                                >
                                    @for (
                                        svc of group.items;
                                        track svc.id
                                    ) {
                                        <label
                                            class="flex cursor-pointer items-start gap-2.5 px-3 py-2.5 transition-colors"
                                            [class]="
                                                isCnsiServiceSelected(
                                                    svc.id
                                                )
                                                    ? 'bg-primary/5'
                                                    : 'hover:bg-base-200/50'
                                            "
                                        >
                                            <mat-checkbox
                                                class="mt-0.5"
                                                [checked]="
                                                    isCnsiServiceSelected(
                                                        svc.id
                                                    )
                                                "
                                                (change)="
                                                    toggleCnsiService(
                                                        svc.id,
                                                        $event.checked
                                                    )
                                                "
                                            ></mat-checkbox>
                                            <icon
                                                class="mt-0.5 text-base"
                                                [class]="
                                                    isCnsiServiceSelected(
                                                        svc.id
                                                    )
                                                        ? 'text-primary'
                                                        : 'text-base-content/40'
                                                "
                                                >{{
                                                    svc.icon ||
                                                    'misc_services'
                                                }}</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div
                                                    class="text-sm font-medium"
                                                >
                                                    {{ svc.name }}
                                                </div>
                                                <div
                                                    class="flex items-center gap-2 text-[11px] text-base-content/40"
                                                >
                                                    @if (svc.space) {
                                                        <span
                                                            class="flex items-center gap-0.5"
                                                        >
                                                            <icon
                                                                class="text-[11px]"
                                                                >location_on</icon
                                                            >
                                                            {{ svc.space }}
                                                        </span>
                                                    }
                                                    @if (svc.duration) {
                                                        <span
                                                            class="flex items-center gap-0.5"
                                                        >
                                                            <icon
                                                                class="text-[11px]"
                                                                >schedule</icon
                                                            >
                                                            {{
                                                                svc.duration
                                                            }}
                                                        </span>
                                                    }
                                                </div>
                                            </div>
                                            <span
                                                class="text-primary mt-0.5 text-xs font-semibold whitespace-nowrap"
                                            >
                                                {{
                                                    cnsi_rate_type() ===
                                                    'internal'
                                                        ? svc.internal_price
                                                        : svc.external_price
                                                }}
                                            </span>
                                        </label>
                                    }
                                </div>
                            }
                            @if (selected_cnsi_services().length) {
                                <div
                                    class="bg-primary/10 border-primary/20 mt-2 rounded-lg border px-3 py-2 text-xs"
                                >
                                    <strong>{{
                                        selected_cnsi_services().length
                                    }}</strong>
                                    package{{
                                        selected_cnsi_services().length > 1
                                            ? 's'
                                            : ''
                                    }}
                                    selected &mdash; Est.
                                    {{ cnsiServicesTotal() }}
                                </div>
                            }
                        }

                        <label class="text-sm font-medium"
                            >Expected Attendance</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="number"
                                [formControl]="
                                    form.controls.expected_attendance
                                "
                                placeholder="e.g. 150"
                            />
                        </mat-form-field>

                        <div class="flex gap-4">
                            <mat-checkbox
                                [formControl]="
                                    form.controls.is_outdoor
                                "
                            >
                                Outdoor Event
                            </mat-checkbox>
                            <mat-checkbox
                                [formControl]="
                                    form.controls.is_major_event
                                "
                            >
                                Major Event
                            </mat-checkbox>
                        </div>

                        <label class="text-sm font-medium"
                            >Special Requirements</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formControl]="
                                    form.controls.special_requirements
                                "
                                rows="3"
                                placeholder="Any special requirements or notes..."
                            ></textarea>
                        </mat-form-field>

                        <!-- Approval Preview -->
                        @if (selectedServices().length > 0) {
                            <div
                                class="rounded-lg border border-base-300 bg-base-200 p-4"
                            >
                                <div
                                    class="mb-2 text-sm font-medium opacity-70"
                                >
                                    Approval Preview
                                </div>
                                <div class="space-y-1">
                                    @for (
                                        svc of selectedServices();
                                        track svc
                                    ) {
                                        <div
                                            class="flex items-center space-x-2 text-sm"
                                        >
                                            <icon
                                                class="text-warning text-base"
                                                >schedule</icon
                                            >
                                            <span>{{
                                                getCategoryName(svc)
                                            }}</span>
                                            <span
                                                class="text-xs opacity-50"
                                                >&mdash; Pending
                                                approval</span
                                            >
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </section>
                }

                <!-- Step 4: Documents -->
                @if (current_step() === 4) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Documents</h3>

                        <div
                            class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-base-300 p-8 transition-colors hover:border-primary"
                        >
                            <icon class="mb-2 text-4xl opacity-40"
                                >cloud_upload</icon
                            >
                            <div class="text-sm font-medium">
                                Drag & drop files here
                            </div>
                            <div class="mt-1 text-xs opacity-50">
                                or click to browse (PDF, DOCX, images)
                            </div>
                            <button
                                btn
                                matRipple
                                class="inverse mt-4 text-sm"
                            >
                                Browse Files
                            </button>
                        </div>

                        <div class="text-xs italic opacity-40">
                            File upload is for display purposes only in
                            this demo.
                        </div>

                        <!-- Summary -->
                        <div
                            class="mt-4 rounded-lg border border-base-300 bg-base-200 p-4"
                        >
                            <div class="mb-3 text-sm font-medium">
                                Request Summary
                            </div>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span class="opacity-60">Title</span>
                                    <span class="font-medium">{{
                                        form.controls.title.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60">Date</span>
                                    <span>{{
                                        form.controls.date.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Duration</span
                                    >
                                    <span
                                        >{{
                                            form.controls
                                                .duration_minutes.value
                                        }}
                                        min</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Location</span
                                    >
                                    <span>{{
                                        form.controls.location.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Organizer</span
                                    >
                                    <span>{{
                                        form.controls.organiser_name
                                            .value
                                    }}</span>
                                </div>
                                @if (selectedServices().length) {
                                    <div class="flex justify-between">
                                        <span class="opacity-60"
                                            >Services</span
                                        >
                                        <span>{{
                                            selectedServiceNames()
                                        }}</span>
                                    </div>
                                }
                                @if (
                                    selected_cnsi_services().length
                                ) {
                                    <div class="flex justify-between">
                                        <span class="opacity-60"
                                            >Packages</span
                                        >
                                        <span class="text-right">{{
                                            selectedCnsiServiceNames()
                                        }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="opacity-60"
                                            >Est. Total</span
                                        >
                                        <span
                                            class="text-primary font-medium"
                                            >{{
                                                cnsiServicesTotal()
                                            }}</span
                                        >
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                }
            </div>

            <!-- Sticky Footer -->
            <footer
                class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[720px] -translate-x-1/2 items-center justify-between rounded-sm px-4 py-2"
            >
                <div>
                    @if (current_step() > 1) {
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="previousStep()"
                        >
                            <icon class="text-xl">chevron_left</icon>
                            <span class="ml-1">Previous</span>
                        </button>
                    }
                </div>
                <div>
                    @if (current_step() < 4) {
                        <button
                            btn
                            matRipple
                            [disabled]="!isCurrentStepValid()"
                            (click)="nextStep()"
                        >
                            <span class="mr-1">Next</span>
                            <icon class="text-xl">chevron_right</icon>
                        </button>
                    } @else {
                        <button
                            btn
                            matRipple
                            [disabled]="submitting()"
                            (click)="submitRequest()"
                        >
                            @if (submitting()) {
                                <span>Submitting...</span>
                            } @else {
                                <icon class="mr-1 text-xl">send</icon>
                                <span>Submit Event Request</span>
                            }
                        </button>
                    }
                </div>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatRippleModule,
        RouterModule,
        IconComponent,
    ],
})
export class EventRequestWizardComponent {
    private _router = inject(Router);
    private _approval_state = inject(EventApprovalStateService);
    private _services_state = inject(ServicesStateService);

    readonly current_step = signal(1);
    readonly completed_steps = signal<number[]>([]);
    readonly submitting = signal(false);

    readonly steps = [
        { number: 1, label: 'Details' },
        { number: 2, label: 'Organizer' },
        { number: 3, label: 'Requirements' },
        { number: 4, label: 'Documents' },
    ];

    readonly venue_options = VENUE_OPTIONS;
    readonly service_options = SERVICE_OPTIONS;
    readonly all_locations = UCLA_LOCATIONS;
    readonly location_query = signal('');
    readonly active_venue_type = signal('indoor');

    readonly selected_cnsi_services = signal<string[]>([]);
    readonly cnsi_rate_type = signal<'internal' | 'external'>('internal');

    private readonly _cnsi_category_meta: Record<string, string> = {
        package: 'Event Packages',
        alacarte: 'A La Carte',
        addon: 'AV Add-ons',
        space: 'Space / Venue',
    };

    readonly cnsi_service_groups = computed(() => {
        const services = this._services_state.services();
        const categories = ['package', 'alacarte', 'addon', 'space'];
        return categories
            .map((cat) => ({
                label: this._cnsi_category_meta[cat] || cat,
                items: services.filter((s) => s.category === cat),
            }))
            .filter((g) => g.items.length > 0);
    });

    readonly filtered_locations = computed(() => {
        const query = this.location_query().toLowerCase();
        const venue_type = this.active_venue_type();
        return this.all_locations.filter((loc) => {
            const matches_type =
                venue_type === 'outdoor' ? !loc.indoor : loc.indoor;
            const matches_query =
                !query ||
                loc.display.toLowerCase().includes(query) ||
                loc.building.toLowerCase().includes(query) ||
                loc.room.toLowerCase().includes(query) ||
                loc.type.toLowerCase().includes(query);
            return matches_type && matches_query;
        });
    });

    onLocationInput(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.location_query.set(value);
    }

    onLocationSelected(event: any): void {
        this.location_query.set(event.option.value);
    }

    selectVenueType(type: string): void {
        this.form.controls.venue_type.setValue(type);
        this.active_venue_type.set(type);
        this.form.controls.location.setValue('');
        this.location_query.set('');
    }

    readonly duration_options = [
        { value: 30, label: '30 min' },
        { value: 60, label: '1 hour' },
        { value: 90, label: '1.5 hours' },
        { value: 120, label: '2 hours' },
        { value: 180, label: '3 hours' },
        { value: 240, label: '4 hours' },
        { value: 360, label: '6 hours' },
        { value: 480, label: '8 hours' },
        { value: 720, label: '12 hours' },
    ];

    readonly form = new FormGroup({
        // Step 1
        title: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        start_time: new FormControl('09:00', Validators.required),
        duration_minutes: new FormControl(120, Validators.required),
        venue_type: new FormControl('indoor'),
        location: new FormControl('', Validators.required),
        description: new FormControl(''),
        // Step 2
        organiser_name: new FormControl('', Validators.required),
        organiser_email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        organiser_phone: new FormControl('', Validators.required),
        // Step 3
        services: new FormControl<ApprovalCategory[]>(['venue']),
        expected_attendance: new FormControl<number | null>(null),
        is_outdoor: new FormControl(false),
        is_major_event: new FormControl(false),
        special_requirements: new FormControl(''),
    });


    isServiceSelected(key: ApprovalCategory): boolean {
        return (this.form.controls.services.value || []).includes(key);
    }

    toggleService(key: ApprovalCategory, checked: boolean): void {
        const current = this.form.controls.services.value || [];
        if (checked) {
            this.form.controls.services.setValue([...current, key]);
        } else {
            this.form.controls.services.setValue(
                current.filter((s) => s !== key),
            );
        }
    }

    selectedServices(): ApprovalCategory[] {
        return this.form.controls.services.value || [];
    }

    selectedServiceNames(): string {
        return this.selectedServices()
            .map((s) => CATEGORY_DISPLAY_NAMES[s])
            .join(', ');
    }

    getCategoryName(cat: ApprovalCategory): string {
        return CATEGORY_DISPLAY_NAMES[cat];
    }

    isCnsiServiceSelected(id: string): boolean {
        return this.selected_cnsi_services().includes(id);
    }

    toggleCnsiService(id: string, checked: boolean): void {
        this.selected_cnsi_services.update((list) =>
            checked ? [...list, id] : list.filter((s) => s !== id),
        );
    }

    cnsiServicesTotal(): string {
        const ids = this.selected_cnsi_services();
        const services = this._services_state
            .services()
            .filter((s) => ids.includes(s.id));
        const rate_key =
            this.cnsi_rate_type() === 'internal'
                ? 'internal_price'
                : 'external_price';
        let total = 0;
        for (const svc of services) {
            const raw = svc[rate_key].replace(/[^0-9.]/g, '');
            const val = parseFloat(raw);
            if (!isNaN(val)) total += val;
        }
        return `$${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    selectedCnsiServiceNames(): string {
        const ids = this.selected_cnsi_services();
        return this._services_state
            .services()
            .filter((s) => ids.includes(s.id))
            .map((s) => s.name)
            .join(', ');
    }

    isCurrentStepValid(): boolean {
        switch (this.current_step()) {
            case 1:
                return (
                    this.form.controls.title.valid &&
                    this.form.controls.date.valid &&
                    this.form.controls.start_time.valid &&
                    this.form.controls.duration_minutes.valid &&
                    this.form.controls.location.valid
                );
            case 2:
                return (
                    this.form.controls.organiser_name.valid &&
                    this.form.controls.organiser_email.valid &&
                    this.form.controls.organiser_phone.valid
                );
            case 3:
                return true;
            case 4:
                return true;
            default:
                return false;
        }
    }

    goToStep(step: number): void {
        if (
            step <= this.current_step() ||
            this.completed_steps().includes(step - 1)
        ) {
            this.current_step.set(step);
        }
    }

    nextStep(): void {
        if (!this.isCurrentStepValid()) return;
        this._markCurrentStepFields();
        const current = this.current_step();
        this.completed_steps.update((steps) =>
            steps.includes(current) ? steps : [...steps, current],
        );
        this.current_step.set(current + 1);
    }

    previousStep(): void {
        if (this.current_step() > 1) {
            this.current_step.update((s) => s - 1);
        }
    }

    submitRequest(): void {
        if (this.submitting()) return;
        this.submitting.set(true);

        const val = this.form.getRawValue();

        // Parse date and time
        const [year, month, day] = val.date.split('-').map(Number);
        const [hours, minutes] = val.start_time.split(':').map(Number);
        const event_date = new Date(year, month - 1, day, hours, minutes).valueOf();

        // Generate unique ID prefix
        const id_base = `appr-${Date.now().toString(36)}`;

        // Always create parent venue event
        const parent_event: MockApprovalEvent = {
            id: `${id_base}-venue`,
            title: val.title,
            category: 'venue',
            date: event_date,
            duration_minutes: val.duration_minutes,
            location: val.location,
            organiser: val.organiser_name,
        };
        MOCK_APPROVAL_EVENTS.push(parent_event);

        // Create child events for each selected non-venue service
        const services = val.services || [];
        for (const svc of services) {
            if (svc === 'venue') continue;
            const child_event: MockApprovalEvent = {
                id: `${id_base}-${svc}`,
                title: `${val.title} — ${CATEGORY_DISPLAY_NAMES[svc]}`,
                category: svc,
                date: event_date,
                duration_minutes: val.duration_minutes,
                location: val.location,
                organiser: val.organiser_name,
                parent_event: parent_event.id,
            };
            MOCK_APPROVAL_EVENTS.push(child_event);
        }

        // Refresh approval state so the new events appear in the list
        this._approval_state.refresh();

        // Navigate back to events list
        setTimeout(() => {
            this.submitting.set(false);
            this._router.navigate(['/entertainment', 'events']);
        }, 600);
    }

    private _markCurrentStepFields(): void {
        switch (this.current_step()) {
            case 1:
                this.form.controls.title.markAsTouched();
                this.form.controls.date.markAsTouched();
                this.form.controls.start_time.markAsTouched();
                this.form.controls.duration_minutes.markAsTouched();
                this.form.controls.location.markAsTouched();
                break;
            case 2:
                this.form.controls.organiser_name.markAsTouched();
                this.form.controls.organiser_email.markAsTouched();
                this.form.controls.organiser_phone.markAsTouched();
                break;
        }
    }
}
