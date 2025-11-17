# Sai Safety System Website

## Project Overview

This is a frontend-only website for **Sai Safety System**, a Maharashtra Government licensed fire-fighting contractor specializing in comprehensive safety and security solutions.

### Key Information
- **Company**: Sai Safety System
- **Director**: Mahendra Pal
- **Location**: Bhayandar (East), Thane, Maharashtra, India
- **License**: Maharashtra Government Licensed Fire-Fighting Contractor
- **Experience**: 20+ years in the safety industry

## Project Type

**Frontend-only static website** - No backend required, ready for Netlify deployment

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter (lightweight client-side routing)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + React Icons
- **State Management**: TanStack Query (React Query)

## Project Structure

```
sai-safety-system/
├── client/                    # All frontend code
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Navbar.tsx   # Main navigation
│   │   │   ├── Footer.tsx   # Site footer
│   │   │   └── FloatingCTA.tsx # Floating call-to-action
│   │   ├── pages/           # All page components
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   ├── lib/             # Utilities
│   │   ├── hooks/           # Custom hooks
│   │   ├── App.tsx          # Main app with routing
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles + theme
│   ├── public/              # Static assets
│   └── index.html           # HTML template
├── attached_assets/          # Images and media
├── dist/                     # Build output (auto-generated)
├── netlify.toml             # Netlify deployment config
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind config
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies
├── README.md                # Complete documentation
├── DEPLOYMENT.md            # Netlify deployment guide
└── FEATURES.md              # Features and pricing documentation
```

## Services Offered

1. **Firefighting & Suppression Systems**
2. **Fire Alarm Systems**
3. **Access Control & CCTV Solutions**
4. **Public Address (PA) Systems**
5. **Water Leak Detection (WLD)**
6. **Rodent Control Solutions**
7. **Electrical Solutions**

## Features Implemented

### Pages
- ✅ Home - Hero, services overview, testimonials, stats
- ✅ Services - Detailed service descriptions
- ✅ About - Company information, team, certifications
- ✅ Projects - Portfolio of completed work
- ✅ Certifications - Government licenses and certifications
- ✅ Testimonials - Client reviews
- ✅ Contact - Contact form and business information

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Fast performance (Vite build optimization)
- ✅ Smooth animations with Framer Motion
- ✅ Client-side routing with Wouter
- ✅ Dark mode ready (theme system configured)
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Form validation with Zod
- ✅ Component library (shadcn/ui)

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 5000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check
```

### Important Notes

1. **No Backend**: This is a pure frontend application with no server-side code
2. **Port 5000**: Development server runs on port 5000 for Replit compatibility
3. **Assets**: Images are in `attached_assets/` and imported using `@assets/` alias
4. **Routing**: All routes are client-side, Netlify handles redirects via `netlify.toml`

## Deployment

### Netlify Deployment

The project is configured for seamless Netlify deployment:

1. **Automatic Configuration**: `netlify.toml` handles all settings
2. **Build Command**: `npm run build`
3. **Publish Directory**: `dist/public`
4. **Redirects**: All routes redirect to index.html for client-side routing
5. **Headers**: Security headers and caching configured

See `DEPLOYMENT.md` for detailed deployment instructions.

## Documentation

### Available Documentation Files

1. **README.md** - Complete project documentation with technical details
2. **DEPLOYMENT.md** - Step-by-step Netlify deployment guide
3. **FEATURES.md** - Complete service catalog with pricing in INR
4. **replit.md** - This file - project overview and structure

## Pricing Information

All service pricing is documented in **FEATURES.md** with prices in Indian Rupees (INR). Includes:
- Detailed pricing for all services
- Package deals
- AMC (Annual Maintenance Contract) options
- Training and certification costs
- Emergency services pricing

## User Preferences

### Design Preferences
- Professional, clean design
- Fire safety red as primary color
- Modern, minimalist UI
- Focus on trust and reliability
- Mobile-first approach

### Content Preferences
- Clear pricing transparency
- Indian Rupees (INR) for all pricing
- Government certification highlighted
- 24/7 support emphasized
- Maharashtra-focused service area

## Recent Changes

### November 17, 2024
- ✅ Converted from full-stack to frontend-only architecture
- ✅ Removed all backend dependencies (Express, Passport, Drizzle)
- ✅ Updated package.json with frontend-only scripts
- ✅ Created Netlify deployment configuration
- ✅ Updated Vite config for standalone frontend
- ✅ Created comprehensive documentation (README, DEPLOYMENT, FEATURES)
- ✅ Updated .gitignore for frontend-only project
- ✅ Fixed Footer component (nested anchor tags)
- ✅ Configured workflow for frontend dev server

## Contact Information

- **Phone**: +91-91635 11805
- **Email**: mahendra.pal@saissafetysystem.in
- **Address**: 203, Sharda CHS, Navghar Cross Road No. 5 (South), Bhayandar (East), Dist. Thane - 401105, Maharashtra, India

## Support

For any technical issues or feature requests related to this website, refer to the documentation files or contact the development team.

---

**Status**: Frontend-only conversion completed and ready for Netlify deployment
