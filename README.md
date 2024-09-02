# Accredify Dashboard

This project is a dashboard Single Page Application (SPA) for Accredify, allowing users to view and manage their verifiable documents. It was created as part of a technical assessment.

## Features

- View recent documents sorted in descending order
- Display career goal for Managed Users
- User authentication and logout functionality
- Responsive design

## Technologies Used

- React
- TypeScript
- Vite
- Mantine UI
- React Query for data fetching
- React Router for navigation
- Cypress for E2E testing
- Jest and React Testing Library for unit testing

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   VITE_PERSONAL_USER_URL=https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/user-personal.json
   VITE_REGULAR_USER_URL=https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/user.json
   VITE_DOCUMENTS_URL=https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/documents.json
   VITE_CAREER_GOALS_URL=https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/goals.json
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Running Tests

To run unit tests:
```
npm test
```

To run E2E tests:
```
npm run test:e2e
```

## Building for Production

To create a production build:
```
npm run build
```

To preview the production build:
```
npm run preview
```

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Page components
- `src/hooks`: Custom React hooks
- `src/utils`: Utility functions
- `src/types`: TypeScript type definitions
- `src/assets`: Static assets including SVG icons
- `cypress`: Cypress E2E tests

## Authentication

The application uses a simulated authentication process for demonstration purposes. Use the following routes to switch between user types:
- `/personal`: Personal User
- `/regular`: Managed User

## Challenges Faced and Solutions

1. SVG Icons in Production Build:
   Initially, SVG icons were not displaying in the production build. This was resolved by moving SVG files to the public folder and updating the Icon component to use the correct path.

2. Cypress E2E Testing Setup:
   Setting up Cypress for E2E testing required careful configuration, especially for handling different user types and ensuring the correct loading of mock data.

3. Mantine UI Beta Version:
   The project required the use of Mantine UI's beta version to access the latest features and improvements. This necessitated careful management of potential breaking changes and documentation discrepancies.

4. React Query Integration:
   Implementing React Query for data fetching required a custom setup to work efficiently with the provided mock API endpoints.

5. TypeScript Configuration:
   Ensuring proper TypeScript configuration, especially for SVG imports and component props, required fine-tuning of the tsconfig.json file.

6. Vite Configuration for Development and Production:
   Configuring Vite to handle assets and build processes correctly in both development and production environments required careful adjustment of the vite.config.ts file.

7. Responsive Design Implementation:
   Implementing a responsive design that works well across different device sizes while maintaining the dashboard's functionality and aesthetics was challenging.
