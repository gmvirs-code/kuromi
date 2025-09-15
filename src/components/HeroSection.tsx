import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import heroImage from '@/assets/hero-romantic.jpg';
import kuromoSticker from '@/assets/kuromi-sticker.png';

const HeroSection = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    // Create floating hearts animation
    const heartArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
    }));
    setHearts(heartArray);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Romantic Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            className="floating-heart absolute text-passionate-red opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${heart.delay}s`,
              fontSize: `${1 + Math.random() * 0.5}rem`,
            }}
          />
        ))}
      </div>
      
      {/* Kuromi Sticker */}
      <div className="absolute top-8 right-8 z-20">
        <img 
          src={kuromoSticker} 
          alt="Kuromi" 
          className="kuromi-sticker w-16 h-16 md:w-20 md:h-20 opacity-80"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center">
          <h1 className="romantic-title mb-4 drop-shadow-lg">
            Jannuuu
          </h1>
          <p className="text-lg md:text-xl text-pure-white font-light tracking-wide drop-shadow-md">
            My heart, my soul, my everything ✨
          </p>
        </div>
      </div>
      
      {/* Gentle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <Heart className="w-6 h-6 text-pure-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;