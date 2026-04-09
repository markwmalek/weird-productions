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
  const loadedRef = useRef(new Set());
  const indexRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % shuffled.length;
      if (loadedRef.current.has(shuffled[nextIndex])) {
        indexRef.current = nextIndex;
        setIndex(nextIndex);
      }
    }, interval);
    return () => clearInterval(id);
  }, [shuffled, interval]);

  return (
    <div className="rapid-slideshow">
      {shuffled.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`rapid-frame ${i === index ? 'active' : ''}`}
          onLoad={() => loadedRef.current.add(src)}
        />
      ))}
    </div>
  );
}
