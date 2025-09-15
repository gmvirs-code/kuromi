import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AudioPlayer from '@/components/AudioPlayer';
import HeartfeltNote from '@/components/HeartfeltNote';
import MemoriesSection from '@/components/MemoriesSection';
import FavoritesSection from '@/components/FavoritesSection';
import GallerySection from '@/components/GallerySection';
import MiniGames from '@/components/MiniGames';
import CountdownSection from '@/components/CountdownSection';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Jannuuu - My Heart, My Soul, My Everything ✨';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A romantic website dedicated to Jannuuu, filled with love, memories, and beautiful moments we share together. Our story of love, laughter, and endless happiness.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Audio Player - Fixed position */}
      <AudioPlayer />
      
      {/* Main Content */}
      <main>
        {/* Heartfelt Note */}
        <HeartfeltNote />
        
        {/* Memories */}
        <MemoriesSection />
        
        {/* Favorites */}
        <FavoritesSection />
        
        {/* Gallery */}
        <GallerySection />
        
        {/* Mini Games */}
        <MiniGames />
        
        {/* Countdown */}
        <CountdownSection />
      </main>
      
      {/* Footer */}
      <footer className="section-container text-center py-8">
        <div className="glass-card p-6 max-w-md mx-auto">
          <p className="font-romantic text-lg text-passionate-red mb-2">
            Made with endless love for Jannuuu
          </p>
          <p className="text-sm text-muted-foreground">
            Every pixel crafted with love, every word written from the heart
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            {['💕', '✨', '🌟', '💖', '🌸'].map((emoji, index) => (
              <span key={index} className="text-lg animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;