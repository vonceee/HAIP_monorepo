# HAIP (Hazard Awareness and Interactive Learning Project)

HAIP is a comprehensive, interactive web application dedicated to hazard awareness and education. It provides users with engaging learning modules on various natural hazards, including Earthquakes, Volcanoes, and Hydrometeorological events.

The project incorporates modern web technologies, 3D visualizations (via Spline), and interactive components to deliver an immersive educational experience.

## ✨ Key Features

- **Interactive Learning Modules:** In-depth, structured lessons on natural hazards (Earthquakes, Volcanoes, Hydrometeorological).
- **3D Visualizations:** Integrated Spline models to visually explain complex geographical and meteorological phenomena.
- **Interactive UI/UX:** Built with a modern design system using Tailwind CSS and Shadcn UI, including dynamic elements like Embla Carousels and flippable hazard effect cards.
- **Decision Games & Quizzes:** Scenario-based interactive elements to test the user's practical knowledge and hazard response skills.
- **Progress Tracking & Competencies:** Defined learning competencies and progression tracking across different specific topic modules.

## 🛠️ Tech Stack

This project is structured as a monorepo containing both the frontend and backend applications.

**Frontend:**

- [React](https://reactjs.org/) (v18)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- [Embla Carousel](https://www.embla-carousel.com/)

**Backend:**

- [Laravel](https://laravel.com/) (v12)
- [PHP](https://www.php.net/) (v8.2+)
- Laravel Sanctum (Authentication)

## 📁 Repository Structure

```text
HAIP_monorepo/
├── frontend/       # React + Vite frontend application
└── backend/        # Laravel backend API and services
```

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PHP](https://www.php.net/) (v8.2+)
- [Composer](https://getcomposer.org/)

### Setting up the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Install frontend dependencies configured for Laravel (if necessary):
   ```bash
   npm install
   ```
4. Set up your environment file:
   ```bash
   cp .env.example .env
   ```
   _Configure your database and correct environment settings in the `.env` file._
5. Generate the application key:
   ```bash
   php artisan key:generate
   ```
6. Run database migrations:
   ```bash
   php artisan migrate
   ```
7. Start the backend development server:
   ```bash
   php artisan serve
   ```
   _Alternatively, you can run `npm run dev` in the backend directory to utilize concurrent services as defined in `composer.json`._

### Setting up the Frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   _The frontend will typically be accessible at `http://localhost:5173`._

## 📄 License

This project is licensed under the MIT License.
