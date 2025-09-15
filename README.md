# Jannuuu - A Romantic Website ✨

A beautiful, mobile-first romantic website dedicated to love, memories, and special moments. Built with modern web technologies and designed with an anime-inspired aesthetic.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Hero Section**: Full-screen romantic background with floating hearts
- **Audio Player**: Background music with playlist support
- **Heartfelt Notes**: Personal messages using nicknames and terms of endearment
- **Memory Chips**: Interactive tags highlighting special moments
- **Favorites Section**: Movies and anime characters we love
- **Photo Gallery**: Swipeable image gallery with captions
- **Mini Games**: Catch the Hearts game and Love Quiz
- **Love Countdown**: Days counter since relationship began
- **Kuromi Accents**: Tasteful anime character integration

## 🎨 Design System

- **Colors**: Pink, white, red base with blue/black accents
- **Fonts**: Dancing Script for romantic titles, Poppins for body text
- **Animations**: Floating hearts, gentle bounces, pulse effects
- **Mobile-First**: Optimized for all screen sizes

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd jannuuu-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

## 📸 Customizing Your Content

### Replace Images

1. **Hero Background**: Replace `src/assets/hero-romantic.jpg`
2. **Gallery Photos**: Update image paths in `src/components/GallerySection.tsx`
3. **Kuromi Sticker**: Replace `src/assets/kuromi-sticker.png`
4. **Couple Images**: Replace `src/assets/eren-mikasa-couple.jpg` and `src/assets/zoro-card.jpg`

### Update Audio

1. **Primary Song**: Add your audio file and update the audio source in `src/components/AudioPlayer.tsx`
2. **Playlist**: Modify the playlist array with your favorite songs

### Personalize Content

1. **Names & Nicknames**: Update in `src/components/HeartfeltNote.tsx`
2. **Memories**: Modify the memories array in `src/components/MemoriesSection.tsx`
3. **Favorites**: Update movies and anime in `src/components/FavoritesSection.tsx`
4. **Start Date**: Change the date in `src/components/CountdownSection.tsx`

## 🌐 Deployment

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder

2. **Update GitHub Pages Settings**
   ```bash
   npm run build
   git add dist/
   git commit -m "Add build files"
   git push origin main
   ```

3. **Access your site**
   Your site will be available at: `https://yourusername.github.io/repository-name`

### Netlify (Recommended)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live with a custom URL

### Vercel

1. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Deploy**
   - Vercel will automatically detect the build settings
   - Click "Deploy"

## 📱 PWA Features

The site includes a `manifest.json` for Progressive Web App functionality:
- Add to Home Screen capability
- Offline-ready design
- Mobile app-like experience

## 🛠️ Technical Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: CSS keyframes and Tailwind animations

## 💕 Customization Tips

1. **Colors**: Modify the design system in `src/index.css` and `tailwind.config.ts`
2. **Animations**: Add new keyframes in the CSS for custom effects
3. **Components**: Each section is modular - easy to modify or remove
4. **Mobile**: Test on various devices - the design is mobile-first

## 🎵 Audio Setup

Due to browser autoplay policies:
1. Users may need to interact with the page before audio plays
2. Consider hosting audio files on a CDN for better performance
3. Test audio across different browsers and devices

## 📝 License

This project is created with love and is free to use for personal romantic websites.

---

**Made with 💕 for Jannuuu**

*Every pixel crafted with love, every word written from the heart*