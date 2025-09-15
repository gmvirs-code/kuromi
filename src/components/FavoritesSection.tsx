import React from 'react';
import { Star, Play } from 'lucide-react';
import erenMikasaImage from '@/assets/eren-mikasa-couple.jpg';
import zoroImage from '@/assets/zoro-card.jpg';

const FavoritesSection = () => {
  const movies = [
    {
      title: "Your Name",
      genre: "Romance/Anime",
      rating: "⭐⭐⭐⭐⭐",
      description: "A beautiful story about connection and love that transcends time",
      color: "bg-gradient-to-br from-romantic-pink to-passionate-red"
    },
    {
      title: "Spirited Away",
      genre: "Fantasy/Anime",
      rating: "⭐⭐⭐⭐⭐",
      description: "Magic and wonder in every frame, just like our love story",
      color: "bg-gradient-to-br from-soft-pink to-blush-pink"
    },
    {
      title: "A Silent Voice",
      genre: "Drama/Anime",
      rating: "⭐⭐⭐⭐⭐",
      description: "About redemption, forgiveness, and the power of understanding",
      color: "bg-gradient-to-br from-blush-pink to-romantic-pink"
    }
  ];

  const animeCharacters = [
    {
      title: "Eren & Mikasa",
      series: "Attack on Titan",
      description: "A love that endures through every battle and hardship",
      image: erenMikasaImage,
      reason: "Their devotion reminds me of how I'll always protect and cherish you"
    },
    {
      title: "Roronoa Zoro",
      series: "One Piece",
      description: "Loyalty, strength, and unwavering dedication",
      image: zoroImage,
      reason: "His determination inspires me to be the best version of myself for you"
    }
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-romantic font-bold text-foreground mb-4">
          Our Favorites
        </h2>
        <p className="text-lg text-muted-foreground">
          The movies and characters that bring us together
        </p>
      </div>
      
      {/* Movies Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-romantic font-semibold text-center mb-8 text-passionate-red">
          Movies We Love
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="anime-card group cursor-pointer"
            >
              <div className={`${movie.color} p-6 text-white min-h-[200px] flex flex-col justify-between`}>
                <div>
                  <h4 className="text-xl font-bold mb-2">{movie.title}</h4>
                  <p className="text-sm opacity-90 mb-2">{movie.genre}</p>
                  <p className="text-lg mb-3">{movie.rating}</p>
                </div>
                <p className="text-sm leading-relaxed opacity-95">
                  {movie.description}
                </p>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Watch together</span>
                  <Play className="w-4 h-4 text-passionate-red group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Anime Characters Section */}
      <div>
        <h3 className="text-2xl font-romantic font-semibold text-center mb-8 text-passionate-red">
          Characters We Adore
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {animeCharacters.map((character, index) => (
            <div
              key={index}
              className="anime-card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={character.image}
                  alt={character.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">{character.title}</h4>
                  <p className="text-sm opacity-90">{character.series}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-3">
                  {character.description}
                </p>
                <div className="flex items-start space-x-2">
                  <Star className="w-4 h-4 text-passionate-red mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground italic">
                    "{character.reason}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesSection;