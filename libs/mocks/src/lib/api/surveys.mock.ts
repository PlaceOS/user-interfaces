import {
    registerMockEndpoint,
    Survey,
    SurveyAnswer,
    SurveyQuestion,
} from '@placeos/ts-client';

const MOCK_SURVEYS: Survey[] = [
    {
        id: 1,
        title: 'Employee Satisfaction Survey',
        description:
            'Annual survey to assess employee satisfaction and workplace culture',
        trigger: 'quarterly',
        building_id: 'bld-01',
        zone_id: 'bld-01_lvl-G',
        pages: [
            {
                title: 'Job Satisfaction',
                description:
                    'Questions about your current role and responsibilities',
                question_order: [1, 2, 3],
            },
            {
                title: 'Work Environment',
                description: 'Questions about your workplace and facilities',
                question_order: [4, 5, 6],
            },
        ],
    },
    {
        id: 2,
        title: 'Facility Feedback Survey',
        description: 'Help us improve our office facilities and amenities',
        trigger: 'monthly',
        building_id: 'bld-02',
        zone_id: 'bld-02_lvl-2',
        pages: [
            {
                title: 'Office Facilities',
                description: 'Rate your experience with our office facilities',
                question_order: [7, 8, 9],
            },
        ],
    },
    {
        id: 3,
        title: 'Meeting Room Experience',
        description: 'Quick feedback about your meeting room experience',
        trigger: 'after_booking',
        building_id: 'bld-03',
        zone_id: 'bld-03_lvl-1',
        pages: [
            {
                title: 'Room Quality',
                description: 'How was your meeting room experience?',
                question_order: [10, 11],
            },
        ],
    },
    {
        id: 4,
        title: 'Melbourne Office Feedback',
        description: 'Help us improve the Melbourne office experience',
        trigger: 'monthly',
        building_id: 'bld-04',
        zone_id: 'bld-04_lvl-1',
        pages: [
            {
                title: 'Office Environment',
                description: 'Rate your Melbourne office experience',
                question_order: [12, 13, 14],
            },
        ],
    },
    {
        id: 5,
        title: 'Innovation Lab Usage Survey',
        description: 'Feedback on research and development facilities',
        trigger: 'quarterly',
        building_id: 'bld-05',
        zone_id: 'bld-05_lvl-2',
        pages: [
            {
                title: 'Lab Facilities',
                description: 'How are you finding the innovation lab?',
                question_order: [15, 16],
            },
        ],
    },
    {
        id: 6,
        title: 'Parking Experience Survey',
        description: 'Help us improve parking facilities',
        trigger: 'weekly',
        building_id: 'bld-01',
        zone_id: 'bld-01_lvl-P1',
        pages: [
            {
                title: 'Parking Quality',
                description: 'Rate your parking experience',
                question_order: [17, 18],
            },
        ],
    },
];

const MOCK_QUESTIONS: SurveyQuestion[] = [
    {
        id: 1,
        title: 'How satisfied are you with your current role?',
        description: 'Rate your overall job satisfaction',
        type: 'rating',
        options: {
            min: 1,
            max: 5,
            labels: [
                'Very Dissatisfied',
                'Dissatisfied',
                'Neutral',
                'Satisfied',
                'Very Satisfied',
            ],
        },
        required: true,
        max_rating: 5,
        choices: [],
        tags: ['job-satisfaction', 'role'],
        deleted: false,
    },
    {
        id: 2,
        title: 'Do you feel valued by your supervisor?',
        description: 'How valued do you feel by your direct supervisor?',
        type: 'multiple_choice',
        options: {},
        required: true,
        max_rating: 0,
        choices: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'],
        tags: ['supervisor', 'recognition'],
        deleted: false,
    },
    {
        id: 3,
        title: 'What could we improve about your work experience?',
        description: 'Please share any suggestions for improvement',
        type: 'text',
        options: { multiline: true, max_length: 500 },
        required: false,
        max_rating: 0,
        choices: [],
        tags: ['feedback', 'improvement'],
        deleted: false,
    },
    {
        id: 4,
        title: 'Rate the cleanliness of the office',
        description: 'How would you rate the overall cleanliness?',
        type: 'rating',
        options: { min: 1, max: 10 },
        required: true,
        max_rating: 10,
        choices: [],
        tags: ['cleanliness', 'office'],
        deleted: false,
    },
    {
        id: 5,
        title: 'Is the temperature comfortable in your work area?',
        description: 'Rate the temperature comfort level',
        type: 'multiple_choice',
        options: {},
        required: true,
        max_rating: 0,
        choices: [
            'Too Cold',
            'Slightly Cold',
            'Just Right',
            'Slightly Warm',
            'Too Warm',
        ],
        tags: ['temperature', 'comfort'],
        deleted: false,
    },
    {
        id: 6,
        title: 'How would you rate the noise level?',
        description: 'Is the office noise level appropriate for work?',
        type: 'rating',
        options: {
            min: 1,
            max: 5,
            labels: [
                'Too Quiet',
                'Slightly Quiet',
                'Perfect',
                'Slightly Noisy',
                'Too Noisy',
            ],
        },
        required: true,
        max_rating: 5,
        choices: [],
        tags: ['noise', 'environment'],
        deleted: false,
    },
    {
        id: 7,
        title: 'Rate the kitchen facilities',
        description: 'How satisfied are you with the kitchen and dining areas?',
        type: 'rating',
        options: { min: 1, max: 5 },
        required: true,
        max_rating: 5,
        choices: [],
        tags: ['kitchen', 'facilities'],
        deleted: false,
    },
    {
        id: 8,
        title: 'Which amenities do you use most?',
        description: 'Select all that apply',
        type: 'checkbox',
        options: {},
        required: false,
        max_rating: 0,
        choices: [
            'Coffee machine',
            'Microwave',
            'Refrigerator',
            'Water cooler',
            'Vending machines',
            'Recreation area',
        ],
        tags: ['amenities', 'usage'],
        deleted: false,
    },
    {
        id: 9,
        title: 'Additional facility suggestions',
        description: 'What other facilities would you like to see?',
        type: 'text',
        options: { multiline: true, max_length: 300 },
        required: false,
        max_rating: 0,
        choices: [],
        tags: ['suggestions', 'facilities'],
        deleted: false,
    },
    {
        id: 10,
        title: 'Rate the meeting room quality',
        description: 'Overall quality of the meeting room you used',
        type: 'rating',
        options: { min: 1, max: 5 },
        required: true,
        max_rating: 5,
        choices: [],
        tags: ['meeting-room', 'quality'],
        deleted: false,
    },
    {
        id: 11,
        title: 'Were all technical equipment working properly?',
        description: 'Screen, projector, video conferencing, etc.',
        type: 'multiple_choice',
        options: {},
        required: true,
        max_rating: 0,
        choices: [
            'Yes, everything worked perfectly',
            'Most things worked',
            'Some issues but manageable',
            'Major technical problems',
        ],
        tags: ['technical', 'equipment'],
        deleted: false,
    },
    {
        id: 12,
        title: 'How would you rate the Melbourne office atmosphere?',
        description: 'Overall atmosphere and culture in Melbourne',
        type: 'rating',
        options: { min: 1, max: 5 },
        required: true,
        max_rating: 5,
        choices: [],
        tags: ['atmosphere', 'culture', 'melbourne'],
        deleted: false,
    },
    {
        id: 13,
        title: 'What do you like most about the Melbourne office?',
        description: 'Share what you enjoy about working here',
        type: 'text',
        options: { multiline: true, max_length: 400 },
        required: false,
        max_rating: 0,
        choices: [],
        tags: ['feedback', 'positive', 'melbourne'],
        deleted: false,
    },
    {
        id: 14,
        title: 'How often do you use the gym facilities?',
        description: 'Frequency of gym usage',
        type: 'multiple_choice',
        options: {},
        required: false,
        max_rating: 0,
        choices: ['Daily', 'Few times a week', 'Weekly', 'Monthly', 'Never'],
        tags: ['gym', 'facilities', 'usage'],
        deleted: false,
    },
    {
        id: 15,
        title: 'Rate the innovation lab equipment',
        description: 'Quality and availability of lab equipment',
        type: 'rating',
        options: { min: 1, max: 5 },
        required: true,
        max_rating: 5,
        choices: [],
        tags: ['equipment', 'innovation', 'lab'],
        deleted: false,
    },
    {
        id: 16,
        title: 'What additional equipment would be helpful?',
        description: 'Suggestions for new lab equipment or tools',
        type: 'text',
        options: { multiline: true, max_length: 300 },
        required: false,
        max_rating: 0,
        choices: [],
        tags: ['equipment', 'suggestions', 'innovation'],
        deleted: false,
    },
    {
        id: 17,
        title: 'How easy is it to find parking?',
        description: 'Rate the ease of finding a parking spot',
        type: 'rating',
        options: {
            min: 1,
            max: 5,
            labels: [
                'Very Difficult',
                'Difficult',
                'Neutral',
                'Easy',
                'Very Easy',
            ],
        },
        required: true,
        max_rating: 5,
        choices: [],
        tags: ['parking', 'availability'],
        deleted: false,
    },
    {
        id: 18,
        title: 'Do you use EV charging stations?',
        description: 'Electric vehicle charging usage',
        type: 'multiple_choice',
        options: {},
        required: false,
        max_rating: 0,
        choices: [
            'Yes, regularly',
            'Yes, occasionally',
            'No, but would like to',
            'No, not needed',
        ],
        tags: ['ev-charging', 'parking', 'sustainability'],
        deleted: false,
    },
];

const MOCK_ANSWERS: SurveyAnswer[] = [
    {
        id: 1,
        question_id: 1,
        survey_id: 1,
        type: 'rating',
        answer_json: { rating: 4, comment: 'Generally satisfied with my role' },
    },
    {
        id: 2,
        question_id: 2,
        survey_id: 1,
        type: 'multiple_choice',
        answer_json: { choice: 'Often', index: 1 },
    },
    {
        id: 3,
        question_id: 3,
        survey_id: 1,
        type: 'text',
        answer_json: { text: 'More flexible working hours would be great.' },
    },
    {
        id: 4,
        question_id: 4,
        survey_id: 2,
        type: 'rating',
        answer_json: { rating: 8 },
    },
    {
        id: 5,
        question_id: 5,
        survey_id: 2,
        type: 'multiple_choice',
        answer_json: { choice: 'Just Right', index: 2 },
    },
    {
        id: 6,
        question_id: 10,
        survey_id: 3,
        type: 'rating',
        answer_json: {
            rating: 5,
            comment: 'Excellent meeting room experience',
        },
    },
    {
        id: 7,
        question_id: 11,
        survey_id: 3,
        type: 'multiple_choice',
        answer_json: { choice: 'Yes, everything worked perfectly', index: 0 },
    },
    {
        id: 8,
        question_id: 12,
        survey_id: 4,
        type: 'rating',
        answer_json: { rating: 4, comment: 'Great atmosphere in Melbourne' },
    },
    {
        id: 9,
        question_id: 13,
        survey_id: 4,
        type: 'text',
        answer_json: {
            text: 'Love the city views and the collaborative spaces',
        },
    },
    {
        id: 10,
        question_id: 15,
        survey_id: 5,
        type: 'rating',
        answer_json: { rating: 5, comment: 'Excellent lab equipment' },
    },
    {
        id: 11,
        question_id: 17,
        survey_id: 6,
        type: 'rating',
        answer_json: { rating: 3 },
    },
    {
        id: 12,
        question_id: 18,
        survey_id: 6,
        type: 'multiple_choice',
        answer_json: { choice: 'Yes, occasionally', index: 1 },
    },
];

export function registerMockSurveys() {
    registerMockEndpoint({
        path: '/api/staff/v1/surveys',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const { query_params } = request;
            let filteredSurveys = [...MOCK_SURVEYS];

            // Filter by building_id if provided
            if (query_params?.building_id) {
                filteredSurveys = filteredSurveys.filter(
                    (survey) => survey.building_id === query_params.building_id,
                );
            }

            // Filter by zone_id if provided
            if (query_params?.zone_id) {
                filteredSurveys = filteredSurveys.filter(
                    (survey) => survey.zone_id === query_params.zone_id,
                );
            }

            // Filter by trigger if provided
            if (query_params?.trigger) {
                filteredSurveys = filteredSurveys.filter(
                    (survey) => survey.trigger === query_params.trigger,
                );
            }

            return filteredSurveys;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/questions',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const { query_params } = request;
            let filteredQuestions = MOCK_QUESTIONS.filter((q) => !q.deleted);

            // Filter by survey_id if provided (get questions for specific survey)
            if (query_params?.survey_id) {
                const surveyId = parseInt(query_params.survey_id as string);
                const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);
                if (survey) {
                    const questionIds = survey.pages.flatMap(
                        (page) => page.question_order,
                    );
                    filteredQuestions = filteredQuestions.filter((q) =>
                        questionIds.includes(q.id),
                    );
                }
            }

            // Filter by type if provided
            if (query_params?.type) {
                filteredQuestions = filteredQuestions.filter(
                    (q) => q.type === query_params.type,
                );
            }

            // Filter by tags if provided
            if (query_params?.tags) {
                const searchTags = Array.isArray(query_params.tags)
                    ? query_params.tags
                    : [query_params.tags];
                filteredQuestions = filteredQuestions.filter((q) =>
                    searchTags.some((tag) => q.tags.includes(tag as string)),
                );
            }

            return filteredQuestions;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/questions/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const questionId = parseInt(request.route_params?.id as string);
            const question = MOCK_QUESTIONS.find(
                (q) => q.id === questionId && !q.deleted,
            );

            if (!question) {
                throw new Error('Question not found');
            }

            return question;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/answers',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const { query_params } = request;
            let filteredAnswers = [...MOCK_ANSWERS];

            // Filter by survey_id if provided
            if (query_params?.survey_id) {
                const surveyId = parseInt(query_params.survey_id as string);
                filteredAnswers = filteredAnswers.filter(
                    (answer) => answer.survey_id === surveyId,
                );
            }

            // Filter by question_id if provided
            if (query_params?.question_id) {
                const questionId = parseInt(query_params.question_id as string);
                filteredAnswers = filteredAnswers.filter(
                    (answer) => answer.question_id === questionId,
                );
            }

            // Filter by type if provided
            if (query_params?.type) {
                filteredAnswers = filteredAnswers.filter(
                    (answer) => answer.type === query_params.type,
                );
            }

            return filteredAnswers;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/answers/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const answerId = parseInt(request.route_params?.id as string);
            const answer = MOCK_ANSWERS.find((a) => a.id === answerId);

            if (!answer) {
                throw new Error('Answer not found');
            }

            return answer;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/surveys/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const surveyId = parseInt(request.route_params?.id as string);
            const survey = MOCK_SURVEYS.find((s) => s.id === surveyId);

            if (!survey) {
                throw new Error('Survey not found');
            }

            return survey;
        },
    });
}
