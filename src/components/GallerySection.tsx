import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Camera } from 'lucide-react';

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Placeholder images - in real implementation, these would be actual photos
  const galleryImages = [
    {
      src: "/api/placeholder/600/400", 
      caption: "Our first photo together 💕",
      date: "August 2024"
    },
    {
      src: "/api/placeholder/600/400", 
      caption: "Late night gaming session",
      date: "September 2024"
    },
    {
      src: "/api/placeholder/600/400", 
      caption: "Movie night vibes ✨",
      date: "October 2024"
    },
    {
      src: "/api/placeholder/600/400", 
      caption: "Just being us 🌟",
      date: "November 2024"
    },
    {
      src: "/api/placeholder/600/400", 
      caption: "Creating memories",
      date: "December 2024"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Camera className="w-6 h-6 text-passionate-red" />
          <h2 className="text-4xl font-romantic font-bold text-foreground">
            Our Gallery
          </h2>
          <Camera className="w-6 h-6 text-passionate-red" />
        </div>
        <p className="text-lg text-muted-foreground">
          Capturing moments, creating memories
        </p>
      </div>
      
      {/* Main Gallery Display */}
      <div className="max-w-3xl mx-auto">
        <div className="relative anime-card overflow-hidden mb-6">
          {/* Image Display */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].caption}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
              {currentImage + 1} / {galleryImages.length}
            </div>
          </div>
          
          {/* Image Caption */}
          <div className="p-6 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {galleryImages[currentImage].caption}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {galleryImages[currentImage].date}
                </p>
              </div>
              <Heart className="w-6 h-6 text-passionate-red" />
            </div>
          </div>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImage === index 
                  ? 'bg-passionate-red scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-passionate-red/50'
              }`}
            />
          ))}
        </div>
        
        {/* Gallery Instructions */}
        <div className="text-center glass-card p-4 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Replace these images:</strong> Add your own photos in the gallery folder and update the image paths in the code
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;