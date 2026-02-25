# UCLA Event Management System

A standalone AngularJS application for UCLA event request intake and approval tracking, fully integrated with PlaceOS.

## Features

✅ **Event Request Intake**
- Multi-step wizard form
- Real-time approval preview
- Document upload support
- 11 UCLA-specific approval policies

✅ **Approval Workflow**
- Policy-based approval routing
- SLA tracking and warnings
- Status visualization
- Progress tracking

✅ **Event Tracking**
- View all submitted events
- Filter by status
- Track approval progress
- Visual timeline

✅ **Document Management**
- PDF, JPG, PNG support
- File validation
- Upload tracking
- Document status indicators

## Technology Stack

- **AngularJS 1.8.3** - Frontend framework
- **PlaceOS REST API** - Backend integration
- **Vanilla CSS** - UCLA brand styling
- **Mock Mode** - Development without PlaceOS

## Getting Started

### Prerequisites

- Node.js 14+ and npm
- A modern web browser
- (Optional) PlaceOS instance for production

### Installation

1. **Navigate to the app directory:**
```bash
cd ucla-events-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Open in browser:**
```
http://localhost:8080
```

The app will automatically open in your default browser.

## Configuration

Edit `app/app.config.js` to configure:

### PlaceOS Connection
```javascript
placeos: {
    domain: 'placeos.ucla.edu',     // Your PlaceOS domain
    protocol: 'https',
    port: 443,
    api_path: '/api/staff/v1',
    use_mock: true                   // Set to false for production
}
```

### UCLA Settings
```javascript
ucla: {
    zone_id: 'zone-ucla-main',              // Your UCLA zone ID
    policy_metadata_key: 'workflows/events',
    document_upload_max_size: 10485760,     // 10MB
    allowed_document_types: [
        'application/pdf',
        'image/jpeg',
        'image/jpg',
        'image/png'
    ]
}
```

## Application Structure

```
ucla-events-app/
├── app/
│   ├── components/
│   │   ├── landing/                # Landing page
│   │   ├── event-request/          # Event request form
│   │   ├── my-events/              # Events list
│   │   └── approval-timeline/      # Timeline visualization
│   ├── services/
│   │   ├── placeos-api.service.js         # API client
│   │   ├── policy-engine.service.js       # Policy evaluation
│   │   ├── approval-workflow.service.js   # Workflow management
│   │   └── document-management.service.js # Document handling
│   ├── app.module.js               # Main module
│   ├── app.config.js               # Configuration
│   └── app.routes.js               # Routing
├── assets/
│   └── css/
│       └── main.css                # Styling
├── index.html                       # Entry point
├── package.json                     # Dependencies
└── README.md                        # This file
```

## Key Services

### PolicyEngineService
Implements 11 UCLA-specific approval policies:
- Alcohol service (EHS + Insurance)
- Fireworks (UCPD + EHS + Insurance)
- AV/Livestream (AV)
- Parking (Parking, +Facilities if 300+)
- Security (UCPD)
- Outdoor events (Insurance)
- Stage setup (Insurance + Facilities)
- Major events (UCPD + Facilities + Venue)
- Large outdoor (UCPD + Venue)
- Curfew hours (UCPD + Venue)

### ApprovalWorkflowService
Manages workflow state:
- Initialize workflows
- Update task status
- Calculate progress
- Track SLA warnings
- State transitions

### DocumentManagementService
Handles document operations:
- File validation
- Upload to PlaceOS
- Status tracking
- Document requirements

### PlaceOSApiService
PlaceOS integration:
- Create/read/update events
- Upload documents
- Load policy configuration
- Mock mode for development

## Usage

### 1. Request an Event

1. Click "Request Event" from home page
2. Fill out event details (Step 1)
3. Enter organizer information (Step 2)
4. Select event requirements (Step 3)
   - See real-time approval preview
5. Upload documents (Step 4) - optional
6. Review and submit

### 2. Track Events

1. Go to "My Event Requests"
2. View all submitted events
3. Filter by status or warnings
4. Click event to see details

### 3. View Approval Timeline

- See visual timeline of approvals
- Track progress percentage
- Upload missing documents
- View SLA warnings
- See required documents status

## Development

### Mock Mode

The app includes mock mode for development without PlaceOS:
- Set `use_mock: true` in `app.config.js`
- All API calls return mock data
- Events stored in memory
- Full functionality available

### Adding New Policies

Edit `app/services/policy-engine.service.js`:

```javascript
{
    id: 'custom_policy',
    description: 'Description',
    conditions: {
        request_items: ['ITEM_NAME'],
        min_attendance: 100,
        is_outdoor: true
    },
    required_stages: ['STAGE1', 'STAGE2'],
    required_documents: ['DOC_TYPE'],
    sla_hours: 48
}
```

### Adding Request Items

1. Add to `getRequestItemOptions()` in `policy-engine.service.js`
2. Add corresponding policies
3. Update UI labels as needed

## Deployment

### Production Build

1. Set `use_mock: false` in config
2. Update PlaceOS domain
3. Deploy files to web server

### Netlify Deployment

```bash
# Install netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --dir=.
```

### Traditional Web Server

Copy all files to web server root:
```bash
# Example with nginx
cp -r * /var/www/html/
```

## PlaceOS Integration

### Required APIs
- `/api/staff/v1/events` - Event CRUD
- `/api/staff/v1/uploads` - Document uploads
- `/api/staff/v1/metadata` - Policy configuration

### Event Data Structure
```javascript
{
    title: "Event Title",
    event_start: 1234567890,
    event_end: 1234571490,
    extension_data: {
        venue: "Royce Hall",
        organizer: { name, email, phone },
        request_items: ["ALCOHOL", "PARKING"],
        attendance_count: 200,
        is_outdoor: false,
        is_major_event: false,
        workflow: { /* workflow object */ },
        documents: [ /* document requirements */ ]
    }
}
```

## Customization

### Branding

Edit CSS variables in `assets/css/main.css`:
```css
:root {
    --ucla-blue: #2774AE;
    --ucla-gold: #FFD100;
    /* ... more colors */
}
```

### Approval Stages

Add new stages in `policy-engine.service.js`:
- Add to `getStageName()` method
- Include in policy definitions
- Update UI as needed

### Document Types

Add new document types:
- Update `getDocumentName()` in policy engine
- Add to policy requirements
- Update validation rules if needed

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### App won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm start
```

### Can't see events
- Check `use_mock` setting in config
- Verify PlaceOS domain is correct
- Check browser console for errors

### Documents won't upload
- Check file size (max 10MB)
- Verify file type (PDF, JPG, PNG only)
- Check browser console for errors

## Support

- **Email:** events@ucla.edu
- **Documentation:** See `/docs` folder
- **Issues:** Contact UCLA IT Support

## License

Copyright © 2025 UCLA. All rights reserved.

## Credits

Built for UCLA Event Management by Claude Code.

---

**Version:** 1.0.0
**Last Updated:** October 15, 2025
**Status:** Ready for Deployment 🚀
