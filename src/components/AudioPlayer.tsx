import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist = [
    { title: 'Ishq Risk', artist: 'Rahat Fateh Ali Khan', id: 'primary' },
    { title: 'Tum', artist: 'Atif Aslam', id: 'fallback1' },
    { title: 'Enna Sona', artist: 'A.R. Rahman', id: 'fallback2' },
    { title: 'Tum Hi Ho', artist: 'Arijit Singh', id: 'fallback3' },
    { title: 'Bekhayali', artist: 'Sachet Tandon', id: 'fallback4' },
  ];

  useEffect(() => {
    // Try to autoplay if allowed
    const tryAutoplay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented by browser');
        }
      }
    };

    tryAutoplay();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setShowPlaylist(false);
    // In a real implementation, you would load the actual audio file here
    console.log(`Playing: ${playlist[index].title}`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="glass-card p-3 flex items-center space-x-3 min-w-[280px]">
        {/* Current Track Info */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            {playlist[currentTrack].title}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {playlist[currentTrack].artist}
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-105 transition-all"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:scale-105 transition-all"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setShowPlaylist(!showPlaylist)}
            className="p-2 rounded-full bg-accent text-accent-foreground hover:scale-105 transition-all"
          >
            <Music className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Playlist Dropdown */}
      {showPlaylist && (
        <div className="glass-card mt-2 p-2 max-h-60 overflow-y-auto">
          {playlist.map((track, index) => (
            <button
              key={track.id}
              onClick={() => selectTrack(index)}
              className={`w-full text-left p-2 rounded-lg hover:bg-primary/10 transition-colors ${
                currentTrack === index ? 'bg-primary/20' : ''
              }`}
            >
              <p className="text-sm font-medium">{track.title}</p>
              <p className="text-xs text-muted-foreground">{track.artist}</p>
            </button>
          ))}
        </div>
      )}
      
      {/* Hidden Audio Element - In real implementation, you'd have actual audio files */}
      <audio
        ref={audioRef}
        loop
        className="hidden"
      >
        <source src="/path-to-ishq-risk.mp3" type="audio/mpeg" />
        {/* Fallback message */}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;