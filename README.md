# Angular Pop-up Component

This project implements a reusable pop-up component in Angular 18 as part of a technical test. The pop-up supports open/close functionality, is styled with SCSS, and follows Angular best practices.

## Design Decisions

To meet the requirements of the technical test, two separate components (PopupComponent for "Request Document" and RejectPopupComponent for "Reject Document") were implemented. Ideally, a single reusable pop-up component with dynamic content (configured via a service) would be preferred to reduce code duplication and improve maintainability. However, due to the 2-hour time constraint of the test, separate components were created to prioritize delivering functional and accurate implementations of both modals as specified in the Figma design. A single reusable component would require additional time to design a flexible configuration system and ensure robust handling of varying form fields and logic.

## Branches

In the 'main' branch, you'll find the progress I was able to make during the agreed-upon timeframe.
In the 'extra' branch, you'll find the improvements I made after the deadline.

## Prerequisites

- Node.js (v18 or later)
- Angular CLI (v18)

## Setup Instructions

1. Clone the repository:

git clone <https://github.com/alienf320/popup.git>

2. Install dependencies:

npm install

3. Run the development server:

ng serve

4. Open your browser at `http://localhost:4200`.

## Features

- Reusable pop-up component with open/close functionality.
- Responsive design using SCSS.
- Modular structure with a dedicated service for pop-up state management.
- Clean separation of logic and UI.
