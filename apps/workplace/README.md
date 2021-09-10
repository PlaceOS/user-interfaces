# Workplace Application

## Usage

To start the dev server run `nx serve workplace`.  
To build the application run `nx build workplace`.  
To run the application unit tests run `nx test workplace`.

## Deployment

Development builds are committed to the branch `build/workplace/dev`.  
UAT builds are committed to the branch `build/workplace/uat`.  
Production builds are committed to the branch `build/workplace/prod`.

## Structure

The application's structure is based on the routing flows of the application

```
workplace/src/app
├── bookings/       # Booking Flows
|   ├── desk-flow   # Desk Booking Flow Components
|   ├── space-flow  # Space Booking Flow Components
|   └── overlays    # Common Booking Modal Components
├── control/        # Control Page Components
├── dashboard/      # Home/Dashboard Page components
├── directory/      # User Directory Page components
├── explore/        # Map Exploration Page components
|   └── overlays    # Common Map Explore Modal Components
├── help/           # Help Page components    
├── overlays/       # Common application level Modal components
├── schedule/       # Schedule Page components
|   ├── event-list  # Components for listing events and bookings
|   └── view-event  # Components for viewing event and booking details
└── ui/             # Common application level components
```

## Settings

A list of application settings (configurable via Zone.metadata) is available at `/apps/workplace/src/environments/settings.schema.json`
