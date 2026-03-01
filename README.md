# HAIP (Hazard Awareness Interactive Project)

is an interactive web application dedicated to hazard awareness and education, it provides users with engaging learning modules on various natural hazards, including Earthquakes, Volcanoes, and Hydrometeorological.

## Key Features

- structured lessons on natural hazards (Earthquakes, Volcanoes, Hydrometeorological).
- integrated Spline models.
- built with Tailwind CSS, Shadcn UI, Embla Carousels.

## 🛠️ Tech Stack

this project is structured as a monorepo containing both the frontend and backend applications.

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

### Prerequisites

ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PHP](https://www.php.net/) (v8.2+)
- [Composer](https://getcomposer.org/)

### Setting up the Backend

1. navigate to the backend directory:
   ```bash
   cd backend
   ```
2. install PHP dependencies:
   ```bash
   composer install
   ```
3. install frontend dependencies configured for Laravel (if necessary):
   ```bash
   npm install
   ```
4. set up your environment file:
   ```bash
   cp .env.example .env
   ```
   _configure your database and correct environment settings in the `.env` file._
5. generate the application key:
   ```bash
   php artisan key:generate
   ```
6. run database migrations:
   ```bash
   php artisan migrate
   ```
7. start the backend development server:
   ```bash
   php artisan serve
   ```
   _alternatively, you can run `npm run dev` in the backend directory to utilize concurrent services as defined in `composer.json`._

### Setting up the Frontend

1. open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. install Node.js dependencies:
   ```bash
   npm install
   ```
3. start the frontend development server:
   ```bash
   npm run dev
   ```
   _the frontend will typically be accessible at `http://localhost:5173`._

## 📄 License

this project is licensed under the MIT License.
