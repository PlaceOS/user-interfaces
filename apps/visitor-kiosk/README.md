# Visitor Kiosk Application

## Usage

To start the dev server run `nx serve visitor-kiosk`.  
To build the application run `nx build visitor-kiosk`.  
To run the application unit tests run `nx test visitor-kiosk`.

## Deployment

Development builds are committed to the branch `build/visitor-kiosk/dev`.  
UAT builds are committed to the branch `build/visitor-kiosk/uat`.  
Production builds are committed to the branch `build/visitor-kiosk/prod`.

## Structure

The application's structure is based on the routing flows of the application

```
visitor-kiosk/src/app
├── bootstrap/      # Bootstrap Page components
├── checkin/        # Visitor Checkin Flow Page components
├── explore/        # Map Exploration Page components
├── overlays/       # Common application level Modal components
└── ui/             # Common application level components
```
