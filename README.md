# Camper Catalog App

A modern React + Redux camper catalog application with filtering, pagination, favorites, and detailed camper views. Built with Vite, styled-components, and persistent favorites using redux-persist.

## Features

- **Catalog with Filters:**
  - Filter campers by location, equipment, and type.
  - Sidebar with scrollable filters and sticky action buttons.
- **Pagination:**
  - Load more campers with dynamic pagination and no duplicates.
- **Favorites:**
  - Mark/unmark campers as favorites with a heart icon.
  - Favorites persist across reloads (redux-persist + localStorage).
  - Dedicated Favorites page to view all saved campers.
- **Details Page:**
  - View full camper details, features, reviews, and booking form.
  - Consistent amenities/features UI between catalog and details.
- **Responsive UI:**
  - Modern, clean, and accessible design using styled-components.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Trucks
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/components/` — Reusable UI components (cards, filters, header, etc.)
- `src/pages/` — Main app pages (Catalog, Favorites, Details, Home)
- `src/redux/` — Redux slices, thunks, and store setup
- `src/styles/` — Shared styles, variables, and fonts
- `src/utils/` — Utility functions and mapping helpers

## Customization
- **Icons:** SVG sprite in `src/assets/icons/sprite.svg`
- **Styling:** All styles use styled-components and CSS variables for easy theming.
- **API:** Uses a mock API (see `src/redux/mockapiConstants.js`).

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the codebase

## License

MIT
