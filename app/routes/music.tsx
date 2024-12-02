// MusicPlayer.tsx
import React, { useState, useRef } from 'react';

interface MusicPlayerProps {
  audioSrc?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  audioSrc = "/your-music-file.mp3" 
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (): void => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-gray-100">
      <audio 
        ref={audioRef}
        src={audioSrc}
      />
      
      <button
        onClick={handlePlayPause}
        className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        type="button"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;