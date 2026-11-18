import { useEffect, useMemo, useRef } from 'react';
import Text from './Typography';
import './WindowsMap.css';

// Window locations with coordinates (downtown Durham)
const legacyLocations = [
  {
    id: 1,
    artist: 'Ali Waller',
    title: 'A Reclaimed Christmas',
    address: '121 Market St',
    lat: 35.996612,
    lng: -78.902215,
  },
  {
    id: 2,
    artist: 'Christian Smith',
    title: 'Carnival of Dogs',
    address: '307 West Main St',
    lat: 35.996016,
    lng: -78.902546,
  },
  {
    id: 3,
    artist: 'Jeghetto',
    title: 'Window Shopping in an Alternate Reality',
    address: '407 E Chapel Hill St',
    lat: 35.997008,
    lng: -78.899798,
  },
  {
    id: 4,
    artist: 'Jordan Grace Owens',
    title: 'The Holiday Party',
    address: '309 E Chapel Hill St',
    lat: 35.997008,
    lng: -78.901270,
  },
  {
    id: 5,
    artist: 'Jason Lord',
    title: "Santa's Werkshop",
    address: '204 Rigsbee Ave',
    lat: 35.997051,
    lng: -78.899844,
  },
  {
    id: 6,
    artist: 'Bob Ostrom',
    title: 'A Holiday Under the Sea',
    address: '107 E Chapel Hill St',
    lat: 35.997026,
    lng: -78.903743,
  },
  {
    id: 7,
    artist: 'Sabrina Servance',
    title: 'Be Audacious',
    address: '212 W Main St',
    lat: 35.995814,
    lng: -78.901931,
  },
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

export default function WindowsMap({ locations = legacyLocations, showLegend = true }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const mapLocations = useMemo(() => {
    const grouped = new Map();

    locations.forEach((location) => {
      const number = location.number ?? location.id;
      const key = `${number}-${location.address}`;
      const installation = { title: location.title, artist: location.artist };

      if (grouped.has(key)) {
        grouped.get(key).installations.push(installation);
        return;
      }

      grouped.set(key, {
        id: key,
        number,
        address: location.address,
        lat: location.lat,
        lng: location.lng,
        installations: [installation],
      });
    });

    return [...grouped.values()].sort((a, b) => a.number - b.number);
  }, [locations]);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    let cancelled = false;

    // Dynamically import Leaflet
    const loadMap = async () => {
      const L = await import('leaflet');

      // Don't re-initialize if already created
      if (cancelled || mapInstanceRef.current || !mapRef.current) return;

      // Create map centered on downtown Durham
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // Add CartoDB Positron tiles (light minimal theme)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(map);

      const bounds = L.latLngBounds([]);

      // Add markers for each location
      mapLocations.forEach((loc) => {
        const markerIcon = L.divIcon({
          className: 'windows-map__marker',
          html: `<div class="windows-map__marker-inner"><span>${escapeHtml(loc.number)}</span></div>`,
          iconSize: [38, 44],
          iconAnchor: [19, 44],
          popupAnchor: [0, -42],
        });
        const marker = L.marker([loc.lat, loc.lng], { icon: markerIcon }).addTo(map);
        const installations = loc.installations.map((installation) => `
          <div class="windows-map__popup-installation">
            <strong>${escapeHtml(installation.title)}</strong>
            <span>by ${escapeHtml(installation.artist)}</span>
          </div>
        `).join('');

        marker.bindPopup(`
          <div class="windows-map__popup">
            <span class="windows-map__popup-number">Window ${escapeHtml(loc.number)}</span>
            ${installations}
            <span class="windows-map__popup-address">${escapeHtml(loc.address)}</span>
            <a href="https://maps.google.com/?q=${encodeURIComponent(`${loc.address}, Durham, NC`)}" target="_blank" rel="noopener noreferrer">
              Get Directions →
            </a>
          </div>
        `);

        bounds.extend([loc.lat, loc.lng]);
      });

      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [44, 44], maxZoom: 16 });
      }
    };

    loadMap();

    // Cleanup
    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapLocations]);

  return (
    <div className="windows-map">
      <div
        className="windows-map__container"
        ref={mapRef}
        role="region"
        aria-label={`Interactive map of ${mapLocations.length} Weird Windows locations in Durham`}
      ></div>
      {showLegend && <div className="windows-map__legend">
        {mapLocations.map((loc) => (
          <div className="windows-map__legend-item" key={loc.id}>
            <Text as="span" variant="displaySm" className="windows-map__legend-number">{loc.number}</Text>
            <div className="windows-map__legend-info">
              <Text as="strong" variant="displaySm">{loc.installations[0].artist}</Text>
              <Text as="span" variant="body">{loc.address}</Text>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}
