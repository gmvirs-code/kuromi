import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Clock } from 'lucide-react';

const CountdownSection = () => {
  const [daysTogether, setDaysTogether] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Our special date - August 1, 2024
  const startDate = new Date('2024-08-01');
  
  useEffect(() => {
    const calculateDays = () => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
      setCurrentTime(now);
    };
    
    // Calculate immediately
    calculateDays();
    
    // Update every second for real-time effect
    const interval = setInterval(calculateDays, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calendar className="w-6 h-6 text-passionate-red" />
          <h2 className="text-4xl font-romantic font-bold text-foreground">
            Our Journey
          </h2>
          <Calendar className="w-6 h-6 text-passionate-red" />
        </div>
        <p className="text-lg text-muted-foreground">
          Counting every precious moment since we found each other
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        {/* Main Countdown Display */}
        <div className="glass-card text-center mb-8">
          <div className="mb-6">
            <div className="text-6xl md:text-8xl font-romantic font-bold text-passionate-red mb-4">
              {daysTogether}
            </div>
            <p className="text-2xl md:text-3xl font-romantic text-foreground">
              Days of Pure Happiness
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-gradient-soft">
              <Calendar className="w-8 h-8 text-passionate-red mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Started</p>
              <p className="font-semibold">{formatDate(startDate)}</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-soft">
              <Clock className="w-8 h-8 text-passionate-red mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Current Time</p>
              <p className="font-semibold">{formatTime(currentTime)}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Heart className="w-4 h-4 text-passionate-red animate-pulse" />
            <span className="text-sm">
              Every second with you is a gift
            </span>
            <Heart className="w-4 h-4 text-passionate-red animate-pulse" />
          </div>
        </div>
        
        {/* Milestones */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="anime-card p-4 text-center">
            <div className="text-2xl font-bold text-passionate-red mb-2">
              {Math.floor(daysTogether / 30)}
            </div>
            <p className="text-sm text-muted-foreground">Months Together</p>
          </div>
          
          <div className="anime-card p-4 text-center">
            <div className="text-2xl font-bold text-passionate-red mb-2">
              {daysTogether * 24}
            </div>
            <p className="text-sm text-muted-foreground">Hours of Love</p>
          </div>
          
          <div className="anime-card p-4 text-center">
            <div className="text-2xl font-bold text-passionate-red mb-2">
              ∞
            </div>
            <p className="text-sm text-muted-foreground">Memories Made</p>
          </div>
        </div>
        
        {/* Special Message */}
        <div className="text-center mt-8">
          <div className="inline-block glass-card p-4">
            <p className="font-romantic text-lg text-passionate-red">
              "Time flies when you're having fun, but every moment with you feels eternal in the most beautiful way"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;