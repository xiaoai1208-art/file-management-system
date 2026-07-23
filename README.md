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

## Development Process

During the development process, I used AI tools as a development assistant for brainstorming, debugging, and improving the overall application quality. AI was mainly used for generating ideas, reviewing approaches, and helping solve implementation issues. All generated suggestions were reviewed, modified, and tested before integration.

---

### AI Assistance Example 1: UI Design and Styling

**Prompt:**

"Suggest a modern Tailwind CSS design for a Vue.js note management application with a clean and minimal interface."

**AI Output:**

The AI suggested using a card-based layout, responsive grid structure, hover animations, consistent color palettes, and modern UI elements such as shadows and rounded corners.

**Modification and Verification:**

I modified the suggested design by creating my own color system using soft neutral colors:

- Background: #F7F3EC
- Header: #F1EEE5
- Text: #31322C
- Buttons: #847C74
- Error / Delete Button: #DC6B6B (soft red)

I also added hover effects, custom modal dialogs, and responsive layouts using Tailwind CSS. The UI was tested across different screen sizes to ensure usability.

**Reason for Changes:**

I wanted to create a clean and professional interface suitable for a note management system while keeping the design simple and user-friendly.

### AI Assistance Example 2: Backend API Structure and CRUD Implementation

**Prompt:**

"Help design a RESTful API structure for a note management system using Node.js, Express, and SQLite."

**AI Output:**

The AI suggested implementing REST API endpoints for creating, retrieving, updating, and deleting notes:

- GET /api/notes
- POST /api/notes
- PUT /api/notes/:id
- DELETE /api/notes/:id

It also suggested using SQLite queries with parameterized statements.

**Modification and Verification:**

I implemented the API structure using Express and SQLite. I modified the database logic by adding created_at and updated_at fields to track note timestamps.

I also tested each API endpoint using frontend integration and verified that CRUD operations worked correctly.

**Reason for Changes:**

The suggested structure provided a clear separation between frontend and backend responsibilities and followed common REST API practices.

### AI Assistance Example 3: Debugging and Error Handling Improvements

**Prompt:**

"My Vue.js frontend cannot create or delete notes after connecting to an Express backend. Help identify possible issues and suggest debugging steps."

**AI Output:**

The AI suggested checking:

- Backend server status
- API endpoint configuration
- Axios base URL
- Database connection
- Frontend error handling

**Modification and Verification:**

I reviewed my project structure and fixed issues related to API communication and backend connection.

I also improved the application by adding:

- Frontend try-catch error handling
- User-friendly error messages
- Loading state while fetching notes

The application was tested by performing multiple create, update, and delete operations.

**Reason for Changes:**

The debugging process helped improve application reliability and provided a better user experience when unexpected errors occur.
