# Booking Panel Application

## Usage

To start the dev server run `nx serve booking-panel`.  
To build the application run `nx build booking-panel`.  
To run the application unit tests run `nx test booking-panel`.

## Deployment

Development builds are committed to the branch `build/booking-panel/dev`.  
UAT builds are committed to the branch `build/booking-panel/uat`.  
Production builds are committed to the branch `build/booking-panel/prod`.

## Structure

The application's structure is based on the routing flows of the application

```
booking-panel/src/app
├── bootstrap/      # Bootstrap Page components
├── overlays/       # Common application level Modal components
├── panel/          # Main Panel Page components
├── panel-array/    # Multi-Panel Page components
└── panel-select/   # Panel List Page components
```
