import { predictableRandomInt } from '@placeos/common';
import { DOMAIN } from './common.mock';

const DEPARTMENTS = [
    'Engineering',
    'Marketing',
    'Sales',
    'Human Resources',
    'Finance',
    'Operations',
    'Product',
    'Design',
    'Customer Success',
    'Legal',
    'IT',
    'Research & Development',
];

const JOB_TITLES = [
    'Software Engineer',
    'Senior Developer',
    'Product Manager',
    'UX Designer',
    'Sales Manager',
    'Marketing Specialist',
    'HR Business Partner',
    'Financial Analyst',
    'Operations Coordinator',
    'Customer Success Manager',
    'Legal Counsel',
    'IT Administrator',
    'Research Scientist',
    'Technical Lead',
    'Account Executive',
    'Business Analyst',
    'DevOps Engineer',
    'Content Creator',
    'Project Manager',
    'Quality Assurance Engineer',
];

const REALISTIC_STAFF_PROFILES = [
    {
        first_name: 'Sarah',
        last_name: 'Chen',
        department: 'Engineering',
        title: 'Senior Software Engineer',
        location: 'Sydney',
    },
    {
        first_name: 'Michael',
        last_name: 'Rodriguez',
        department: 'Product',
        title: 'Product Manager',
        location: 'Melbourne',
    },
    {
        first_name: 'Emily',
        last_name: 'Johnson',
        department: 'Design',
        title: 'UX Designer',
        location: 'Brisbane',
    },
    {
        first_name: 'David',
        last_name: 'Park',
        department: 'Engineering',
        title: 'Technical Lead',
        location: 'Sydney',
    },
    {
        first_name: 'Jessica',
        last_name: 'Thompson',
        department: 'Marketing',
        title: 'Marketing Manager',
        location: 'Perth',
    },
    {
        first_name: 'Alex',
        last_name: 'Kumar',
        department: 'Sales',
        title: 'Account Executive',
        location: 'Adelaide',
    },
    {
        first_name: 'Rachel',
        last_name: 'Williams',
        department: 'Human Resources',
        title: 'HR Business Partner',
        location: 'Sydney',
    },
    {
        first_name: 'James',
        last_name: "O'Connor",
        department: 'Finance',
        title: 'Financial Analyst',
        location: 'Melbourne',
    },
    {
        first_name: 'Lisa',
        last_name: 'Zhang',
        department: 'Operations',
        title: 'Operations Manager',
        location: 'Sydney',
    },
    {
        first_name: 'Tom',
        last_name: 'Mitchell',
        department: 'Engineering',
        title: 'DevOps Engineer',
        location: 'Brisbane',
    },
    {
        first_name: 'Amanda',
        last_name: 'Foster',
        department: 'Customer Success',
        title: 'Customer Success Manager',
        location: 'Melbourne',
    },
    {
        first_name: 'Chris',
        last_name: 'Anderson',
        department: 'IT',
        title: 'IT Administrator',
        location: 'Perth',
    },
    {
        first_name: 'Priya',
        last_name: 'Sharma',
        department: 'Research & Development',
        title: 'Research Scientist',
        location: 'Sydney',
    },
    {
        first_name: 'Mark',
        last_name: 'Davis',
        department: 'Sales',
        title: 'Sales Manager',
        location: 'Adelaide',
    },
    {
        first_name: 'Sophie',
        last_name: 'Taylor',
        department: 'Design',
        title: 'Senior UX Designer',
        location: 'Melbourne',
    },
    {
        first_name: 'Daniel',
        last_name: 'Lee',
        department: 'Engineering',
        title: 'Software Engineer',
        location: 'Brisbane',
    },
    {
        first_name: 'Olivia',
        last_name: 'Brown',
        department: 'Marketing',
        title: 'Content Creator',
        location: 'Sydney',
    },
    {
        first_name: 'Ryan',
        last_name: 'Wilson',
        department: 'Product',
        title: 'Business Analyst',
        location: 'Perth',
    },
    {
        first_name: 'Grace',
        last_name: 'Martinez',
        department: 'Legal',
        title: 'Legal Counsel',
        location: 'Melbourne',
    },
    {
        first_name: 'Ben',
        last_name: 'Clarke',
        department: 'Engineering',
        title: 'Quality Assurance Engineer',
        location: 'Sydney',
    },
    // Additional staff profiles to reach 80 total
    {
        first_name: 'Natasha',
        last_name: 'Petrov',
        department: 'Engineering',
        title: 'Senior Developer',
        location: 'Melbourne',
    },
    {
        first_name: 'Carlos',
        last_name: 'Silva',
        department: 'Sales',
        title: 'Sales Manager',
        location: 'Sydney',
    },
    {
        first_name: 'Maya',
        last_name: 'Patel',
        department: 'Design',
        title: 'UI/UX Designer',
        location: 'Brisbane',
    },
    {
        first_name: 'Jacob',
        last_name: 'Nielsen',
        department: 'Marketing',
        title: 'Digital Marketing Manager',
        location: 'Perth',
    },
    {
        first_name: 'Isabella',
        last_name: 'Romano',
        department: 'Human Resources',
        title: 'HR Manager',
        location: 'Adelaide',
    },
    {
        first_name: 'Hassan',
        last_name: 'Ahmed',
        department: 'Finance',
        title: 'Senior Financial Analyst',
        location: 'Sydney',
    },
    {
        first_name: 'Elena',
        last_name: 'Popov',
        department: 'Operations',
        title: 'Operations Coordinator',
        location: 'Melbourne',
    },
    {
        first_name: 'Nathan',
        last_name: 'Campbell',
        department: 'Engineering',
        title: 'Software Engineer',
        location: 'Brisbane',
    },
    {
        first_name: 'Zoe',
        last_name: 'Walker',
        department: 'Product',
        title: 'Product Owner',
        location: 'Perth',
    },
    {
        first_name: 'Adrian',
        last_name: 'Kowalski',
        department: 'IT',
        title: 'Systems Administrator',
        location: 'Adelaide',
    },
    {
        first_name: 'Samantha',
        last_name: 'Brooks',
        department: 'Customer Success',
        title: 'Customer Success Specialist',
        location: 'Sydney',
    },
    {
        first_name: 'Lucas',
        last_name: 'Garcia',
        department: 'Research & Development',
        title: 'Data Scientist',
        location: 'Melbourne',
    },
    {
        first_name: 'Aisha',
        last_name: 'Johnson',
        department: 'Legal',
        title: 'Compliance Officer',
        location: 'Brisbane',
    },
    {
        first_name: 'Marcus',
        last_name: 'Stone',
        department: 'Engineering',
        title: 'Technical Lead',
        location: 'Perth',
    },
    {
        first_name: 'Lily',
        last_name: 'Watson',
        department: 'Design',
        title: 'Graphic Designer',
        location: 'Adelaide',
    },
    {
        first_name: 'Oscar',
        last_name: 'Murphy',
        department: 'Sales',
        title: 'Business Development Manager',
        location: 'Sydney',
    },
    {
        first_name: 'Chloe',
        last_name: 'Edwards',
        department: 'Marketing',
        title: 'Marketing Specialist',
        location: 'Melbourne',
    },
    {
        first_name: 'Ethan',
        last_name: 'Roberts',
        department: 'Finance',
        title: 'Budget Analyst',
        location: 'Brisbane',
    },
    {
        first_name: 'Mia',
        last_name: 'Turner',
        department: 'Human Resources',
        title: 'Talent Acquisition Specialist',
        location: 'Perth',
    },
    {
        first_name: 'Logan',
        last_name: 'Phillips',
        department: 'Operations',
        title: 'Process Improvement Specialist',
        location: 'Adelaide',
    },
    {
        first_name: 'Aria',
        last_name: 'Cooper',
        department: 'Engineering',
        title: 'Frontend Developer',
        location: 'Sydney',
    },
    {
        first_name: 'Felix',
        last_name: 'Morgan',
        department: 'Product',
        title: 'Product Marketing Manager',
        location: 'Melbourne',
    },
    {
        first_name: 'Ruby',
        last_name: 'Bailey',
        department: 'Customer Success',
        title: 'Account Manager',
        location: 'Brisbane',
    },
    {
        first_name: 'Caleb',
        last_name: 'Reed',
        department: 'IT',
        title: 'Network Engineer',
        location: 'Perth',
    },
    {
        first_name: 'Luna',
        last_name: 'Howard',
        department: 'Design',
        title: 'Product Designer',
        location: 'Adelaide',
    },
    {
        first_name: 'Mason',
        last_name: 'Cox',
        department: 'Research & Development',
        title: 'Machine Learning Engineer',
        location: 'Sydney',
    },
    {
        first_name: 'Hazel',
        last_name: 'Ward',
        department: 'Legal',
        title: 'Contract Manager',
        location: 'Melbourne',
    },
    {
        first_name: 'Theo',
        last_name: 'Torres',
        department: 'Sales',
        title: 'Account Executive',
        location: 'Brisbane',
    },
    {
        first_name: 'Violet',
        last_name: 'Peterson',
        department: 'Marketing',
        title: 'Brand Manager',
        location: 'Perth',
    },
    {
        first_name: 'Julian',
        last_name: 'Gray',
        department: 'Finance',
        title: 'Tax Specialist',
        location: 'Adelaide',
    },
    {
        first_name: 'Nova',
        last_name: 'James',
        department: 'Human Resources',
        title: 'Learning & Development Coordinator',
        location: 'Sydney',
    },
    {
        first_name: 'Blake',
        last_name: 'Watson',
        department: 'Operations',
        title: 'Supply Chain Analyst',
        location: 'Melbourne',
    },
    {
        first_name: 'Ivy',
        last_name: 'Brooks',
        department: 'Engineering',
        title: 'Backend Developer',
        location: 'Brisbane',
    },
    {
        first_name: 'Axel',
        last_name: 'Fisher',
        department: 'Product',
        title: 'Technical Writer',
        location: 'Perth',
    },
    {
        first_name: 'Sage',
        last_name: 'Bennett',
        department: 'Customer Success',
        title: 'Implementation Specialist',
        location: 'Adelaide',
    },
    {
        first_name: 'Kai',
        last_name: 'Powell',
        department: 'IT',
        title: 'Security Analyst',
        location: 'Sydney',
    },
    {
        first_name: 'Raven',
        last_name: 'Long',
        department: 'Design',
        title: 'Creative Director',
        location: 'Melbourne',
    },
    {
        first_name: 'Phoenix',
        last_name: 'Hughes',
        department: 'Research & Development',
        title: 'Research Engineer',
        location: 'Brisbane',
    },
    {
        first_name: 'River',
        last_name: 'Price',
        department: 'Legal',
        title: 'Intellectual Property Lawyer',
        location: 'Perth',
    },
    {
        first_name: 'Atlas',
        last_name: 'Sanders',
        department: 'Sales',
        title: 'Regional Sales Director',
        location: 'Adelaide',
    },
    {
        first_name: 'Willow',
        last_name: 'Ross',
        department: 'Marketing',
        title: 'Social Media Manager',
        location: 'Sydney',
    },
    {
        first_name: 'Orion',
        last_name: 'Morris',
        department: 'Finance',
        title: 'Investment Analyst',
        location: 'Melbourne',
    },
    {
        first_name: 'Ember',
        last_name: 'Rogers',
        department: 'Human Resources',
        title: 'Organizational Development Specialist',
        location: 'Brisbane',
    },
    {
        first_name: 'Juno',
        last_name: 'Reed',
        department: 'Operations',
        title: 'Quality Assurance Manager',
        location: 'Perth',
    },
    {
        first_name: 'Zara',
        last_name: 'Cook',
        department: 'Engineering',
        title: 'Mobile Developer',
        location: 'Adelaide',
    },
    {
        first_name: 'Leo',
        last_name: 'Morgan',
        department: 'Product',
        title: 'UX Researcher',
        location: 'Sydney',
    },
    {
        first_name: 'Iris',
        last_name: 'Bailey',
        department: 'Customer Success',
        title: 'Training Specialist',
        location: 'Melbourne',
    },
    {
        first_name: 'Finn',
        last_name: 'Rivera',
        department: 'IT',
        title: 'Database Administrator',
        location: 'Brisbane',
    },
    {
        first_name: 'Aurora',
        last_name: 'Cooper',
        department: 'Design',
        title: 'Motion Graphics Designer',
        location: 'Perth',
    },
    {
        first_name: 'Xavier',
        last_name: 'Richardson',
        department: 'Research & Development',
        title: 'AI Research Scientist',
        location: 'Adelaide',
    },
    {
        first_name: 'Skye',
        last_name: 'Cox',
        department: 'Legal',
        title: 'Privacy Officer',
        location: 'Sydney',
    },
    {
        first_name: 'Knox',
        last_name: 'Howard',
        department: 'Sales',
        title: 'Enterprise Sales Manager',
        location: 'Melbourne',
    },
    {
        first_name: 'Luna',
        last_name: 'Ward',
        department: 'Marketing',
        title: 'Event Marketing Manager',
        location: 'Brisbane',
    },
    {
        first_name: 'Sage',
        last_name: 'Torres',
        department: 'Finance',
        title: 'Risk Analyst',
        location: 'Perth',
    },
    {
        first_name: 'Phoenix',
        last_name: 'Peterson',
        department: 'Human Resources',
        title: 'Employee Relations Specialist',
        location: 'Adelaide',
    },
    {
        first_name: 'River',
        last_name: 'Gray',
        department: 'Operations',
        title: 'Facilities Manager',
        location: 'Sydney',
    },
    {
        first_name: 'Atlas',
        last_name: 'James',
        department: 'Engineering',
        title: 'Cloud Architect',
        location: 'Melbourne',
    },
    {
        first_name: 'Willow',
        last_name: 'Watson',
        department: 'Product',
        title: 'Product Strategy Manager',
        location: 'Brisbane',
    },
    {
        first_name: 'Orion',
        last_name: 'Brooks',
        department: 'Customer Success',
        title: 'Customer Operations Manager',
        location: 'Perth',
    },
    {
        first_name: 'Ember',
        last_name: 'Fisher',
        department: 'IT',
        title: 'DevOps Manager',
        location: 'Adelaide',
    },
    {
        first_name: 'Juno',
        last_name: 'Bennett',
        department: 'Design',
        title: 'Brand Designer',
        location: 'Sydney',
    },
    {
        first_name: 'Nova',
        last_name: 'Powell',
        department: 'Research & Development',
        title: 'Technology Innovation Manager',
        location: 'Melbourne',
    },
    {
        first_name: 'Blake',
        last_name: 'Long',
        department: 'Legal',
        title: 'Regulatory Affairs Manager',
        location: 'Brisbane',
    },
    {
        first_name: 'Ivy',
        last_name: 'Hughes',
        department: 'Sales',
        title: 'Channel Partner Manager',
        location: 'Perth',
    },
    {
        first_name: 'Axel',
        last_name: 'Price',
        department: 'Marketing',
        title: 'Growth Marketing Manager',
        location: 'Adelaide',
    },
];

const EXTERNAL_COMPANIES = [
    'TechCorp Australia',
    'Global Innovations Pty Ltd',
    'Digital Solutions Group',
    'Innovation Labs',
    'Future Systems',
    'Advanced Technologies',
    'Smart Solutions Ltd',
    'NextGen Industries',
    'Dynamic Enterprises',
    'Creative Solutions Inc',
    'Enterprise Partners',
    'Strategic Consulting',
    'Business Development Co',
    'Market Leaders Group',
    'Industry Experts Ltd',
];

const VISITOR_PROFILES = [
    {
        first_name: 'Jennifer',
        last_name: 'Adams',
        company: 'TechCorp Australia',
        purpose: 'Business Partnership Meeting',
    },
    {
        first_name: 'Robert',
        last_name: 'Hayes',
        company: 'Global Innovations Pty Ltd',
        purpose: 'Product Demo',
    },
    {
        first_name: 'Maria',
        last_name: 'Gonzalez',
        company: 'Digital Solutions Group',
        purpose: 'Contract Negotiation',
    },
    {
        first_name: 'Kevin',
        last_name: 'Turner',
        company: 'Innovation Labs',
        purpose: 'Technical Consultation',
    },
    {
        first_name: 'Catherine',
        last_name: 'Moore',
        company: 'Future Systems',
        purpose: 'Strategic Planning',
    },
    {
        first_name: 'Steven',
        last_name: 'White',
        company: 'Advanced Technologies',
        purpose: 'Vendor Assessment',
    },
    {
        first_name: 'Nicole',
        last_name: 'Campbell',
        company: 'Smart Solutions Ltd',
        purpose: 'Project Review',
    },
    {
        first_name: 'Brian',
        last_name: 'Scott',
        company: 'NextGen Industries',
        purpose: 'Investment Discussion',
    },
    {
        first_name: 'Michelle',
        last_name: 'Green',
        company: 'Dynamic Enterprises',
        purpose: 'Collaboration Meeting',
    },
    {
        first_name: 'Jason',
        last_name: 'Hill',
        company: 'Creative Solutions Inc',
        purpose: 'Design Review',
    },
    {
        first_name: 'Laura',
        last_name: 'King',
        company: 'Enterprise Partners',
        purpose: 'Partnership Proposal',
    },
    {
        first_name: 'Andrew',
        last_name: 'Wright',
        company: 'Strategic Consulting',
        purpose: 'Business Consultation',
    },
    {
        first_name: 'Rebecca',
        last_name: 'Lopez',
        company: 'Business Development Co',
        purpose: 'Market Analysis',
    },
    {
        first_name: 'Paul',
        last_name: 'Young',
        company: 'Market Leaders Group',
        purpose: 'Industry Insights',
    },
    // Additional visitor profiles to create 20 total guests
    {
        first_name: 'Douglas',
        last_name: 'Chen',
        company: 'Quantum Dynamics',
        purpose: 'R&D Collaboration',
    },
    {
        first_name: 'Victoria',
        last_name: 'Singh',
        company: 'Digital Innovation Hub',
        purpose: 'Technology Transfer',
    },
    {
        first_name: 'Timothy',
        last_name: "O'Brien",
        company: 'CloudTech Solutions',
        purpose: 'Infrastructure Review',
    },
    {
        first_name: 'Angela',
        last_name: 'Martinez',
        company: 'Data Analytics Corp',
        purpose: 'Analytics Partnership',
    },
    {
        first_name: 'Gordon',
        last_name: 'Thompson',
        company: 'Venture Capital Partners',
        purpose: 'Investment Evaluation',
    },
    {
        first_name: 'Patricia',
        last_name: 'Wilson',
        company: 'Sustainability Solutions',
        purpose: 'ESG Consultation',
    },
];

export const ACTIVE_USER = {
    id: 'current',
    name: 'Sarah Chen',
    email: 'sarah.chen@place.tech',
    first_name: 'Sarah',
    last_name: 'Chen',
    department: 'Engineering',
    title: 'Senior Software Engineer',
    location: 'Sydney',
    groups: ['staff', 'engineering', 'senior'],
    sys_admin: true,
    phone: '+61 2 9876 5432',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9ce2c62?w=150&h=150&fit=crop&crop=face',
};

export const MOCK_STAFF = REALISTIC_STAFF_PROFILES.map((profile, i) => {
    const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase().replace(/'/g, '')}`;
    const isManager =
        profile.title.toLowerCase().includes('manager') ||
        profile.title.toLowerCase().includes('lead') ||
        profile.title.toLowerCase().includes('senior');

    return {
        id: `staff-${i + 1}`,
        name: `${profile.first_name} ${profile.last_name}`,
        email: `${emailName}@${DOMAIN}`,
        first_name: profile.first_name,
        last_name: profile.last_name,
        department: profile.department,
        title: profile.title,
        location: profile.location,
        groups: [
            'staff',
            profile.department.toLowerCase().replace(/\s+/g, '-'),
            ...(isManager ? ['manager'] : []),
        ],
        phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9000) + 1000).slice(0, 4)} ${String(predictableRandomInt(9000) + 1000).slice(0, 4)}`,
        avatar: `https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?w=150&h=150&fit=crop&crop=face`,
        extension_data: {
            employee_id: `EMP${String(i + 1).padStart(4, '0')}`,
            start_date: new Date(
                2020 + predictableRandomInt(4),
                predictableRandomInt(12),
                predictableRandomInt(28) + 1,
            ).toISOString(),
            manager_id: isManager
                ? null
                : `staff-${predictableRandomInt(5) + 1}`,
        },
    };
}).concat([ACTIVE_USER as any]);

export const MOCK_GUESTS = VISITOR_PROFILES.map((profile, i) => {
    const emailName = `${profile.first_name.toLowerCase()}.${profile.last_name.toLowerCase()}`;
    const companyDomain =
        profile.company
            .toLowerCase()
            .replace(/\s+/g, '')
            .replace(/pty.*ltd|ltd|inc|corp|group|co/gi, '')
            .slice(0, 12) + '.com';

    return {
        id: `guest-${i + 1}`,
        name: `${profile.first_name} ${profile.last_name}`,
        email: `${emailName}@${companyDomain}`,
        first_name: profile.first_name,
        last_name: profile.last_name,
        company: profile.company,
        purpose: profile.purpose,
        visit_expected: predictableRandomInt(99999) % 3 !== 0, // 66% expected
        phone: `+61 ${predictableRandomInt(8) + 2} ${String(predictableRandomInt(9000) + 1000).slice(0, 4)} ${String(predictableRandomInt(9000) + 1000).slice(0, 4)}`,
        extension_data: {
            visitor_type:
                predictableRandomInt(99999) % 4 === 0 ? 'VIP' : 'Standard',
            host_id: `staff-${predictableRandomInt(REALISTIC_STAFF_PROFILES.length) + 1}`,
            requirements:
                predictableRandomInt(99999) % 5 === 0
                    ? 'Wheelchair accessible'
                    : null,
            parking_required: predictableRandomInt(99999) % 3 === 0,
            ...(predictableRandomInt(99999) % 4 === 0
                ? {
                      vaccination_proof: {
                          url: 'https://fonts.gstatic.com/s/i/materialicons/verified/v11/24px.svg',
                          verified: true,
                      },
                  }
                : {}),
            ...(predictableRandomInt(99999) % 3 === 0
                ? {
                      id_data: {
                          url: 'https://fonts.gstatic.com/s/i/materialicons/fingerprint/v12/24px.svg',
                          type: 'Driver License',
                          verified: true,
                      },
                  }
                : {}),
        },
    };
});

// Helper function to get random staff member by department
export const getStaffByDepartment = (department: string) =>
    MOCK_STAFF.filter(
        (staff) => staff.department?.toLowerCase() === department.toLowerCase(),
    );

// Helper function to get managers
export const getManagers = () =>
    MOCK_STAFF.filter(
        (staff) =>
            staff.groups?.includes('manager') ||
            staff.title?.toLowerCase().includes('manager') ||
            staff.title?.toLowerCase().includes('lead'),
    );
