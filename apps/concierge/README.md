# Concierge Application

## Usage

To start the dev server run `nx serve concierge`.  
To build the application run `nx build concierge`.  
To run the application unit tests run `nx test concierge`.

## Deployment

Development builds are committed to the branch `build/concierge/dev`.  
UAT builds are committed to the branch `build/concierge/uat`.  
Production builds are committed to the branch `build/concierge/prod`.

## Structure

The application's structure is based on the routing flows of the application

```
concierge/src/app
├── catering/       # Catering Management Page components
├── day-view/       # Day View Event Management Page components
├── desks/          # Desk Booking Manangement Page components
├── facilities/     # Facilities Management Page components
├── reports/        # Reports Page components
├── staff/          # Staff Management Page components
├── ui/             # Common application level components
├── visitors/       # Visitor Management Page components
└── week-view/      # Week View Event Management Page components
```
