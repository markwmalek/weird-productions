import { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from '../components/Typography';
import './About.css';

const ITEMS = [
  { to: '/salondurham', img: '/images/salon/0810.jpeg', alt: 'The Salon Durham', title: 'The Salon', desc: "Women's event — Durham, NC, 2025", tags: ['event'] },
  { to: '/speedhouse', img: '/images/speedhouse/WP-45.jpg', alt: 'Fast & Loose Art Salon', title: 'Fast & Loose', desc: 'Art salon — Durham, NC, 2025', tags: ['event'] },
  { to: '/raleigh', img: '/images/raleigh/A7I09373.jpg', alt: 'Raleigh Renaissance Fashion Show', title: 'Raleigh Renaissance', desc: 'Fashion show — Raleigh, NC, 2024', tags: ['event'] },
  { to: '/smash', img: '/images/smash/DSC_0689.jpg', alt: 'Sunday Smash & Slam', title: 'Smash & Slam', desc: 'Burger + poetry competition — Durham, NC, 2024', tags: ['event'] },
  { to: '/dollyweird', img: '/images/dollyweird/dw_1.jpg', alt: 'Dollyweird Art Show', title: 'Dollyweird', desc: 'One-night art party — Durham, NC, 2023', tags: ['event'] },
  { to: '/american-underground', img: '/images/au/p4_7.jpeg', alt: 'American Underground', title: 'American Underground', desc: 'Interior art curation proposal — Durham, NC', tags: ['interiors'], style: { objectPosition: '50% 75%' } },
  { to: '/film-durham', img: '/images/film-durham/film-durham-thumb.png', alt: 'Film Durham Brand Guidelines', title: 'Film Durham', desc: 'Brand guidelines — Durham, NC, 2025', tags: ['branding'] },
  { to: '/parrish', img: '/images/parrish/art-category.png', alt: 'Parties on Parrish', title: 'Parties on Parrish', desc: 'Month-long art pop-up — Durham, NC, 2026', tags: ['event', 'non-profit project'] },
  { to: '/windows', img: '/images/windows/artist-jordan-owens.png', alt: 'Weird Windows', title: 'Weird Windows', desc: 'Holiday window installations — Durham, NC, 2025', tags: ['non-profit project'] },
  { to: '/weird-pot-party', img: '/images/pot-party/James.jpg', alt: 'Weird Pot Party', title: 'Weird Pot Party', desc: 'Live painting event — Downtown Durham, 2026', tags: ['event', 'non-profit project'] },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function About() {
  const [items] = useState(() => shuffle(ITEMS));

  return (
    <main className="portfolio-page">

      <div className="portfolio-grid page-wrap">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className="portfolio-card">
            <div className="portfolio-card-img">
              <img src={item.img} alt={item.alt} loading="lazy" style={item.style} />
              <Text as="h2" variant="h3" className="portfolio-card-title">{item.title}</Text>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
