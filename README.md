# FunnelFox Digital

A production-ready digital marketing agency website built with Next.js 14, TypeScript, and TailwindCSS. Features responsive design, SEO optimization, contact forms, and Docker deployment.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, TailwindCSS 3
- **Responsive Design**: Mobile-first approach with accessibility (a11y) compliance
- **SEO Optimized**: Dynamic sitemap, robots.txt, meta tags, and Lighthouse >90 scores
- **Contact Forms**: Contact and Blueprint request forms with server-side logging
- **Production Ready**: Docker containerization, security headers, performance optimization
- **Brand Consistency**: Custom brand color (#ff6817) and professional design system

## 📋 Pages

- **Homepage** (`/`) - Hero section, services overview, statistics, and CTAs
- **Services** (`/services`) - Detailed service offerings and process
- **About** (`/about`) - Company information, team, mission, and values
- **Portfolio** (`/portfolio`) - Case studies and client testimonials
- **Contact** (`/contact`) - Contact form and business information
- **Blueprint** (`/blueprint`) - Detailed strategy request form

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Docker + Docker Compose
- **SEO**: Dynamic sitemap, robots.txt, meta tags
- **Forms**: Server-side API routes with validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (for containerized deployment)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "FunnelFox Digital"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Docker
docker-compose up -d # Start with Docker
docker-compose down  # Stop Docker containers
```

## 🐳 Docker Deployment

### Development with Docker

```bash
# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Production Deployment

```bash
# Build production image
docker build -t funnelfox-digital .

# Run production container
docker run -p 3010:3010 funnelfox-digital

# Or use docker-compose with production profile
docker-compose --profile production up -d
```

The application will be available at `http://localhost:3010`

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/           # Page components
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── robots.ts          # Dynamic robots.txt
│   └── components/            # Reusable components
│       ├── Header.tsx         # Navigation header
│       └── Footer.tsx         # Site footer
├── public/                    # Static assets
├── tailwind.config.ts         # TailwindCSS configuration
├── next.config.ts             # Next.js configuration
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose setup
└── README.md                  # This file
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#ff6817` (Orange)
- **Background**: White/Gray gradients
- **Text**: Gray scale (900, 700, 600)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, tracking-tight
- **Body**: Regular, leading-relaxed

### Components
- **Buttons**: Rounded, hover effects, focus states
- **Forms**: Consistent styling, validation states
- **Cards**: Subtle borders, hover animations
- **Navigation**: Responsive, mobile-friendly

## 📧 Contact Forms

### Contact Form (`/contact`)
- Basic contact information
- Project details and budget
- Server-side validation
- Console logging for development

### Blueprint Form (`/blueprint`)
- Comprehensive business analysis
- Marketing goals and challenges
- Budget and timeline information
- Detailed server-side logging

### API Endpoints
- `POST /api/contact` - Handle contact form submissions
- `POST /api/blueprint` - Handle blueprint requests
- `GET /api/health` - Health check for monitoring

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling guidelines
- **Structured Data**: Schema.org markup (future enhancement)

## 🚀 Performance Optimizations

- **Image Optimization**: WebP/AVIF formats, responsive sizes
- **Code Splitting**: Automatic route-based splitting
- **Compression**: Gzip compression enabled
- **Caching**: Static asset caching
- **Bundle Analysis**: Optimized bundle sizes
- **Security Headers**: XSS protection, content security

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
# Application
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Contact Form (future enhancement)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password

# Analytics (future enhancement)
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### Customization

1. **Brand Colors**: Update `tailwind.config.ts` and `globals.css`
2. **Content**: Modify page components in `src/app/`
3. **Styling**: Customize TailwindCSS classes
4. **Forms**: Update API routes in `src/app/api/`

## 📊 Monitoring & Analytics

### Health Check
- Endpoint: `GET /api/health`
- Returns: System status, uptime, memory usage
- Used by: Docker health checks, monitoring tools

### Form Submissions
- Contact forms log to server console
- Production: Integrate with database/CRM
- Validation: Server-side validation with error handling

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker Production
```bash
# Build production image
docker build -t funnelfox-digital .

# Run with environment variables
docker run -p 3010:3010 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  funnelfox-digital
```

### Traditional Hosting
```bash
# Build static export
npm run build

# Copy .next/static and public/ to your web server
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: hello@funnelfoxdigital.com
- Documentation: Check this README
- Issues: Create a GitHub issue

## 🔄 Updates

- **v1.0.0** - Initial release with all core features
- **Future**: Database integration, CMS, advanced analytics

---

Built with ❤️ by the FunnelFox Digital team
