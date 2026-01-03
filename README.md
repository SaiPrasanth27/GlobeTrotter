# GlobeTrotter

A modern travel planning platform that helps you organize multi-city trips, discover activities, and share your adventures with others.

![GlobeTrotter](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

GlobeTrotter is a full-stack web application designed to simplify trip planning. Create detailed itineraries, explore destinations, manage your budget, and share your travel plans with friends and family through public links.

### Key Features

- **Multi-City Trip Planning** - Build comprehensive itineraries with multiple destinations
- **Interactive Itinerary Builder** - Drag-and-drop interface for organizing your trip stops
- **Activity Management** - Browse and schedule activities for each destination
- **Budget Tracking** - Automatic cost calculation based on activities and custom expenses
- **Public Trip Sharing** - Generate shareable links for your itineraries
- **Destination Discovery** - Explore cities and save favorites for future trips
- **Admin Analytics** - Comprehensive dashboard for platform insights

## Technology Stack

### Frontend
- **React 18** with Vite for fast development and optimized builds
- **Tailwind CSS** for modern, responsive styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing
- **Recharts** for data visualization
- **@dnd-kit** for drag-and-drop functionality

### Backend
- **Node.js** with Express.js framework
- **PostgreSQL** database with raw SQL queries
- **JWT** for secure authentication
- **Cloudinary** for image storage and management
- **Multer** for file upload handling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/globetrotter.git
   cd globetrotter
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   DATABASE_URL=postgresql://username:password@localhost:5432/globetrotter
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Initialize the database**
   ```bash
   psql -U postgres -c "CREATE DATABASE globetrotter;"
   psql -U postgres -d globetrotter -f schema.sql
   psql -U postgres -d globetrotter -f seed.sql
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```

5. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

6. **Access the application**
   
   Open your browser and navigate to `http://localhost:5173`

### Default Credentials

For testing purposes, use these credentials:
- **Email:** admin@example.com
- **Password:** admin123

## Project Structure

```
globetrotter/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   ├── routes/          # API route definitions
│   │   ├── middleware/      # Authentication & validation
│   │   └── config/          # Database configuration
│   ├── schema.sql           # Database schema
│   └── seed.sql             # Sample data
│
└── frontend/
    └── src/
        ├── pages/           # Application pages
        ├── components/      # Reusable UI components
        ├── context/         # React context providers
        └── lib/             # Utility functions
```

## Core Functionality

### Trip Planning
Create and manage trips with multiple destinations. Each trip includes:
- Title and date range
- Cover photo
- Multiple city stops with arrival/departure times
- Scheduled activities for each stop
- Budget tracking and expense management

### Activity Scheduling
Browse curated activities for each destination and add them to your itinerary. Activities include:
- Name and description
- Category (sightseeing, food, adventure, culture)
- Cost and duration
- Location details

### Budget Management
Automatically track trip expenses with:
- Activity costs
- Custom expense entries
- Real-time budget calculations
- Category-based expense breakdown

### Social Features
- Share trips publicly via unique URLs
- Save favorite destinations
- View other users' public itineraries

## Deployment

### Backend Deployment (Railway/Render)

1. Connect your repository to the platform
2. Add a PostgreSQL database service
3. Configure environment variables
4. Deploy from the `backend` directory

### Frontend Deployment (Vercel/Netlify)

1. Connect your repository
2. Set build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Root Directory:** `frontend`
3. Add environment variable:
   - `VITE_API_URL`: Your backend API URL

## Design System

The application features a modern glassmorphism design with:
- Translucent card components with backdrop blur
- Smooth gradient backgrounds
- Consistent color palette with CSS custom properties
- Responsive layouts for all screen sizes
- Micro-interactions and animations

## Database Schema

The application uses a relational database with the following core entities:
- Users and authentication
- Cities and activities (pre-seeded)
- Trips and trip stops
- Activity assignments
- Saved destinations
- Custom expenses

All relationships include proper foreign key constraints with cascade deletion for data integrity.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- City and activity data sourced from various travel APIs
- Icons provided by Lucide React
- Design inspiration from modern travel platforms

---

Built with ❤️ for travelers everywhere
