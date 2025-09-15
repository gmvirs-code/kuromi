import React from 'react';
import { MessageCircle, Phone, Film, Gamepad2, Mic, Heart } from 'lucide-react';

const MemoriesSection = () => {
  const memories = [
    { 
      icon: MessageCircle, 
      text: "homiiee on Discord", 
      color: "text-deep-blue" 
    },
    { 
      icon: Phone, 
      text: "late night calls", 
      color: "text-passionate-red" 
    },
    { 
      icon: Film, 
      text: "movies together", 
      color: "text-romantic-pink" 
    },
    { 
      icon: Gamepad2, 
      text: "Stumble Guys", 
      color: "text-deep-blue" 
    },
    { 
      icon: Gamepad2, 
      text: "BGMI sessions", 
      color: "text-passionate-red" 
    },
    { 
      icon: Mic, 
      text: "my yapping sessions", 
      color: "text-romantic-pink" 
    },
    { 
      icon: Heart, 
      text: "no promises (but endless love)", 
      color: "text-warm-red" 
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-romantic font-bold text-foreground mb-4">
          Our Beautiful Memories
        </h2>
        <p className="text-lg text-muted-foreground">
          Every moment with you is a treasure I hold close to my heart
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {memories.map((memory, index) => {
          const IconComponent = memory.icon;
          return (
            <div
              key={index}
              className="memory-chip flex items-center space-x-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <IconComponent className={`w-5 h-5 ${memory.color}`} />
              <span className="text-sm md:text-base font-medium">
                {memory.text}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Decorative Element */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-soft">
          <Heart className="w-5 h-5 text-passionate-red animate-pulse" />
          <span className="font-romantic text-lg text-foreground">
            Making memories, one moment at a time
          </span>
          <Heart className="w-5 h-5 text-passionate-red animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;