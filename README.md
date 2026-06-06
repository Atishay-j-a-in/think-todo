# ThinkToDo

## Project Overview

ThinkToDo is a todo application built with Next.js, Clerk authentication, and MongoDB. It supports creating, updating, deleting, and completing todos for authenticated users. UI interactions are handled in a client component, while persistence and validation are managed in server-side API routes.

## Tech Stack Used

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Clerk for authentication
- Axios for API requests
- Mongoose for MongoDB
- Joi for request validation
- dotenv for environment configuration

## Features Implemented

- Clerk-based sign-in and sign-up flows
- Create new todos
- Toggle todo completion status
- Delete todos
- Display pending and completed todos separately
- Server-side validation for API requests
- MongoDB persistence via Mongoose

## How to Run Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env.local` file in the project root.
4. Add the required environment variables (see below).
5. Run the development server:
   ```bash
   pnpm dev
   ```
6. Open `http://localhost:3000` in your browser.

## Environment Variables Required

Add the following variables to `.env.local`:

```env
MONGODB_URI=<your-mongodb-connection-string>
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Clerk Authentication

This app also requires Clerk configuration. Add your Clerk environment values to `.env.local` according to your Clerk project settings. Common Clerk variables include:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_SECRET_KEY=<your-clerk-secret-key>
```

> Note: The exact Clerk environment variables depend on your Clerk setup.

## Database Setup Instructions

1. Set up MongoDB locally or use MongoDB Atlas.
2. Create a database and a user with credentials.
3. Configure `MONGODB_URI` in `.env.local`.
   - Example local URI: `mongodb://localhost:27017/todo-app`
   - Example Atlas URI: `mongodb+srv://<user>:<password>@cluster0.mongodb.net/todo-app?retryWrites=true&w=majority`
4. No additional migrations are required; Mongoose creates the `Todo` schema automatically.

## Routes / Pages Included

- `/` — Home page with hero content and CTA
- `/todos` — Main todo app page
- `/sign-in` — Clerk sign-in page
- `/sign-up` — Clerk sign-up page

## API Routes Included

- `GET /api/todo` — Get all todos for the authenticated user
- `POST /api/todo` — Create a new todo
- `PUT /api/todo` — Update an existing todo
- `DELETE /api/todo` — Delete a todo

## Server Actions Used

This project does not use Next.js App Router `server actions` (`export async function action`). Instead, it uses:

- API route handlers in `app/api/todo/route.js`
- Server-only controller functions in `app/api/todo/controller.js`

## Rendering Strategies

- SSR: The Next.js App Router and API routes run on the server.
- SSG: Not implemented.
- ISR: Not implemented.

## Concepts from Class Covered

- React state and hooks (`useState`, `useEffect`, `useMemo`)
- Client-side form handling and event-driven updates
- REST API integration with Axios
- CRUD operations with API routes
- Authentication with Clerk
- Database interaction using Mongoose and MongoDB
- Request validation using Joi
- Environment variable based configuration

## Assumptions or Limitations

- The `/todos` page is implemented as a client component and fetches data from the client.
- There is currently no SSG or ISR caching strategy in place.
- Clerk auth configuration must be provided separately.
- `NEXT_PUBLIC_API_URL` is expected to be correct for local development.
- No role-based access control beyond user identity checks.
