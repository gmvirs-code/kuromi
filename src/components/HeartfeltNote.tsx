import React from 'react';
import { Heart, Star } from 'lucide-react';

const HeartfeltNote = () => {
  return (
    <section className="section-container">
      <div className="glass-card max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-passionate-red" />
            <h2 className="text-3xl font-romantic font-bold text-foreground">
              My Dearest Sweeta
            </h2>
            <Heart className="w-6 h-6 text-passionate-red" />
          </div>
        </div>
        
        {/* Heartfelt Message */}
        <div className="prose prose-lg mx-auto text-center space-y-6">
          <p className="text-lg leading-relaxed text-foreground">
            Every day with you feels like a beautiful dream that I never want to wake up from. 
            You are my <span className="font-romantic text-passionate-red font-semibold">Jannu</span>, 
            my <span className="font-romantic text-passionate-red font-semibold">Shonuu</span>, 
            my precious <span className="font-romantic text-passionate-red font-semibold">Alfii</span> ✨
          </p>
          
          <p className="text-lg leading-relaxed text-foreground">
            From the moment you said hello, you've been painting my world in the most beautiful colors. 
            Your laugh is my favorite song, your smile is my daily sunshine, and your love is my greatest treasure.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground">
            I love how you make even the simplest moments magical - our late night conversations, 
            watching movies together, and all those times you patiently listen to my endless yapping sessions. 
            You're not just my girlfriend, you're my best friend, my partner in crime, and my home.
          </p>
          
          <div className="flex items-center justify-center space-x-2 py-4">
            <Star className="w-5 h-5 text-passionate-red animate-pulse" />
            <p className="font-romantic text-2xl text-passionate-red font-bold">
              Forever yours, with all my love
            </p>
            <Star className="w-5 h-5 text-passionate-red animate-pulse" />
          </div>
        </div>
        
        {/* Decorative Hearts */}
        <div className="flex justify-center space-x-4 mt-8">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-4 h-4 text-passionate-red opacity-60 animate-pulse" 
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeartfeltNote;