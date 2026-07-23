# file-management-system
Simple File Management System

# frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Tech Stack

**Frontend:**
- Vue.js 3 (Composition API)
- Vite
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- SQLite3
- RESTful API
- CORS

**Deployment:**
- Railway
- Docker

## Development Process

During the development of this project, AI tools were used as a development assistant to support idea generation, debugging, and implementation improvements.

All AI suggestions were reviewed, adjusted according to the project requirements, and tested before being applied.

---

## AI-Assisted UI Design Improvement

### Prompt

"Suggest a clean and modern UI design approach for a Vue.js note management application using Tailwind CSS."


### AI Output

The AI suggested improving the interface by using:

- A card-based note layout
- Consistent spacing and typography
- Rounded components with shadows
- Responsive design for different screen sizes
- Simple hover interactions


### Implementation

I adapted the suggestions and created a custom design style for the application.

Changes I made include:

- Designed a soft neutral color theme
- Added note cards with hover effects
- Created a confirmation modal before deleting notes
- Added an empty state when no notes are available
- Improved the layout responsiveness


### Reason

The AI suggestions provided a general UI direction, but I customized the design to make the interface simpler and more suitable for a note management application.


---

## AI-Assisted Backend Architecture

### Prompt

"Suggest a suitable backend structure for a note management system using Node.js, Express, and SQLite."


### AI Output

The AI recommended:

- Using Express to create REST API endpoints
- Separating frontend and backend responsibilities
- Using SQLite for lightweight data storage
- Implementing CRUD operations for managing notes


### Implementation

I implemented the backend using Express.js and SQLite.

I developed API endpoints for:

- Retrieving notes
- Creating notes
- Updating notes
- Deleting notes


I also enhanced the database by adding timestamp fields to track note creation and update times.

The API was tested through frontend integration to ensure that all operations worked correctly.


### Reason

The suggested structure provided a good starting point, but I adjusted the implementation based on the actual requirements of the application.


---

## AI-Assisted Debugging and Deployment

### Prompt

"Help troubleshoot issues when connecting a Vue.js frontend with an Express backend during deployment."


### AI Output

The AI suggested checking:

- API URL configuration
- Backend availability
- CORS settings
- Docker configuration
- Deployment logs


### Implementation

I used these suggestions as a debugging checklist and investigated the actual errors during deployment.

I fixed several deployment-related issues, including:

- Updating frontend API configuration from localhost to the deployed backend URL
- Configuring Docker files correctly
- Adjusting server port handling for Railway deployment
- Verifying frontend and backend communication after deployment


### Reason

The AI helped provide possible debugging directions, but the final fixes were based on analyzing the application logs and testing the deployed system.

## Deployment Note

The application was tested locally, and the timestamp display worked correctly in the local development environment.

After deployment to Railway, the server environment uses UTC timezone, which may cause the displayed `created_at` and `updated_at` timestamps to differ from the local timezone.

The timestamp tracking functionality is working correctly. Timezone localization can be further improved in the future by applying a specific timezone conversion layer based on the user's location.

## Live Demo

Frontend:
https://file-management-system-frontend-production.up.railway.app

Backend API:
https://file-management-system-production.up.railway.app/api/notes

GitHub: https://github.com/xiaoai1208-art/file-management-system

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev

Frontend will run on: http://localhost:5173
### Backend

```bash
cd backend
npm install
npm start

Backend will run on: http://localhost:3000