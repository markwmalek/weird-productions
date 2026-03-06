import { useState, useEffect, useRef } from 'react';
import './RapidSlideshow.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RapidSlideshow({ images, interval = 600 }) {
  const [shuffled] = useState(() => shuffle(images));
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % shuffled.length);
    }, interval);
    return () => clearInterval(intervalRef.current);
  }, [shuffled.length, interval]);

  return (
    <div className="rapid-slideshow">
      {shuffled.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`rapid-frame ${i === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
