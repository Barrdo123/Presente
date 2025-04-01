import React, { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log("Autoplay bloqueado:", err));
      }
    };

    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("touchstart", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/audio/musica.mp3" type="audio/mp3" />
    </audio>
  );
};

export default AudioPlayer;
