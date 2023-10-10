# Event Booking App

This web app has been developed, keeping in mind, the guidelines set down in the document provided along with the data.

The primary objectives of this application is to achieve the following:

-   Identify events with available seats.
-   Search for events by name.
-   Book tickets for an event through a form.
-   Validate form inputs.

The current solution tries to achieve the above goals in the best possible way within the available timeframe.

## Installation

To install this app locally, extract the project files to a directory of your choice and run the following commands to install all dependencies and start the app:

```bash
    cd installation_directory
    pnpm i
    pnpm serve
```

The project can also be run using Docker.

Run the following commands from the root directory to build and run the app on port 8080:

```bash
    docker build -t axeleranttest:latest .
    docker run --name eventbookingapp -d --rm -p 8080:80 -t axeleranttest:latest
```

## Running Tests

To run all tests in the project, use:

```bash
pnpm test:unit
```

## Tech Stack and File Structure

### Dependencies

The app uses the following dependencies for running and testing:

-   Vue 3 + Typescript framework
-   Pinia state management
-   Vite bundler
-   Vitest testing framework

## Scope Reduction and Further Development

### Features to be added/improved

The following features were excluded due to their scope and time constraints:

1. Component and End-to-end tests were left out due to time constraints.
2. Help section needs more content.
3. Animations and transitions can be added for better UX.
4. Test coverage can be improved.
5. The form page structure can be optimized further.
6. Better asset formats like WebP and SVG can be used.
