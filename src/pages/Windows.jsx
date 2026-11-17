import Text from '../components/Typography';
import './Windows.css';

const windows = [
  {
    number: 1,
    title: 'Northern Nights',
    artist: 'BetterThanButterNC with Michael Mansfield',
    handle: '@betterthanbutternc',
    address: '327 W Main St.',
    description: "After 30 years as an elementary art teacher, Michael paints animals that look you straight in the eye on purpose, as a small bid for connection in a world that's short on it. This winter scene is meant to feel like running into an old friend.",
  },
  {
    number: 2,
    title: 'Nutcracker Kokeshi',
    artist: 'Sabrina Servance',
    handle: '@sabrinastyled',
    address: '307 W Main St.',
    description: 'Kokeshi dolls are a Japanese symbol of good fortune, and Sabrina nests her nutcrackers the same way to wish a little luck on everyone who walks by. After years in retail soured the holidays for her, making art like this is how she found her holiday joy again.',
  },
  {
    number: 3,
    title: 'The Holidays Are For Old Movies',
    artist: 'Nyssa Collins',
    handle: '@nizmoco',
    address: '201 W Main St.',
    description: 'Nyssa only makes art that makes her laugh, and she makes it for people who might never walk into a gallery. The piece plays with scale, from a moose-sized horse to a tiny theater, and rewards anyone patient enough to wait for the surprise.',
  },
  {
    number: 4,
    title: 'Demand More Whimsy!',
    artist: 'DJ Neon',
    handle: '@hex.neon',
    address: '111 N Corcoran St.',
    description: "DJ Neon thinks our cities have lost their color, with the neon pinks and greens of her '90s childhood traded for white subway tile and gray facades. This window is her case for bringing the glow, and the whimsy, back.",
  },
  {
    number: 4,
    title: 'Winter Wonderland?',
    artist: 'Jeghetto',
    handle: '@jeghettos_puppets',
    address: '111 N Corcoran St.',
    description: 'Jeghetto has built puppets from recycled and found materials for more than 20 years, working with everyone from Missy Elliott to the Jim Henson Foundation. This piece questions the “wonder” in Winter Wonderland.',
  },
  {
    number: 4,
    title: 'eutectic phasing',
    artist: 'Gabe Duggan',
    handle: '@gabeduggan',
    address: '111 N Corcoran St.',
    description: 'Some metals melt faster together than either does alone, and Gabe uses that idea, called a eutectic point, to think about tipping points in how we treat each other and the planet. If the best outcome is as likely as the worst, why not work toward it?',
  },
  {
    number: 5,
    title: 'Windows to Wonder',
    artist: 'Sampada Kodagali Agarwal',
    handle: '@ansimit.sampada',
    address: '118 W Main St.',
    description: "Sampada has spent more than two decades with Indian folk and tribal art, and this window draws on Tholu Bommalata, the shadow-puppet tradition of Andhra Pradesh, whose painted puppets glow when light passes through them. It's a holiday wish for generosity and community, told in a centuries-old storytelling language.",
  },
  {
    number: 6,
    title: 'Winter Wonder Dreamland',
    artist: 'Ali Waller',
    handle: '@alicekayw',
    address: '116 W Main St.',
    description: 'Winter can feel like the season when everything stops, creativity included. Ali built this dreamland to give some color and warmth back, something odd and artful to carry you through to the new year.',
  },
  {
    number: 7,
    title: 'Battle of the Misers',
    artist: 'Zeus',
    handle: '@zeusalexander.art',
    address: '500 E Main St.',
    description: 'Zeus, a comics artist and portrait painter, takes the feuding Heat Miser and Snow Miser from the 1974 TV special The Year Without a Santa Claus and gives the humble holiday lawn ornament a comic-book makeover.',
  },
  {
    number: 8,
    title: 'Bug Christmas Party (In Mouth)',
    artist: 'Isa Payne',
    handle: '@payne.mov',
    address: '101 W Main St.',
    description: "Isa trained in film production design and brings a set builder's eye to a simple question: what do the holidays look like for the smallest guests at the party? It's a little gross, very cozy and full of tiny jokes for anyone who looks closely.",
  },
  {
    number: 9,
    title: 'Merry Shrimpmas',
    artist: 'Other Door Designs',
    handle: '@otherdoordesigns',
    address: '115 W Parrish St.',
    description: 'Laura, a former Anthropologie display artist, wanted to celebrate the holiday dishes that have quietly disappeared from modern tables. The idea is nostalgia with a wink: silly, fun and not actually gross (mostly).',
  },
  {
    number: 10,
    title: 'Clothes Are Art',
    artist: 'Needle & Thread Co.',
    handle: '@needlethreadco',
    address: '408 E Chapel Hill St.',
    description: "Derrick Grant Jr. started Needle & Thread Co. to give pre-loved clothes a second life, and his window makes the case that clothing is art. It's the holidays, upcycled, from a Bronx-born designer who used to dress his own store's windows.",
  },
  {
    number: 11,
    title: 'After the Unwrapping',
    artist: 'Studio Mika',
    handle: '@bystudiomika',
    address: '407 N Mangum St.',
    description: "Mika's work lives between beauty and decay, using vintage and found objects to build worlds that feel both familiar and fantastical. This one goes back to a childhood belief: that once everyone's asleep on Christmas night, the toys come alive.",
  },
  {
    number: 12,
    title: 'Window Baubles',
    artist: 'Jordan Grace Owens',
    handle: '@jordangraceowens',
    address: '309 E Chapel Hill St.',
    description: "Jordan, a painter and sculptor with a studio at Golden Belt, explores how abstract shapes relate to each other. This piece scales up the small mobiles and ornaments she's made for years, with her signature disembodied arms reaching in.",
  },
  {
    number: 13,
    title: 'Hanging Out for the Holidays',
    artist: 'Drawn Delicious by Janet Danforth',
    handle: '@janetdrawstheplanet',
    address: '120 Morris St.',
    description: "North Carolina is home to more lemurs than anywhere outside Madagascar, and lemurs are one of the few primate species led by females. Janet, who has lived downtown for more than a decade, paints them as Durham's own holiday locals.",
  },
  {
    number: 14,
    title: "He Sees You When You're Brushing",
    artist: 'Bethany Neigebauer',
    handle: '@banartwork',
    address: '200 Morris St.',
    description: "TOOF started as a silly Burning Man project and has since become the mascot of Bethany's life. This year he's trading the sleigh for a tongue to remind Durham that Santa is always watching, especially at the bathroom sink.",
  },
  {
    number: 15,
    title: 'The Christmas Clairvoyant',
    artist: 'Andrea Farrow, Farrow House Design',
    handle: '@farrow_house',
    address: '701 Washington St.',
    description: "Designing a holiday shop window has been Andrea's dream since childhood, and this one channels the old department-store windows with a deadpan sense of humor. Her fortune teller's predictions run from silly to satirical, with small symbols of hope, freedom and nature hidden for anyone who lingers.",
  },
  {
    number: 16,
    title: 'Five Little Penguins',
    artist: 'Kayna Baldwin',
    handle: '@kayna.jo',
    address: '620 Foster St.',
    description: "Kayna works at the Chapel Hill Public Library, where years of leftover summer reading yard signs have become her favorite art supply. These penguins are a love letter to libraries, bookstores and finding new life for things we'd otherwise throw away.",
  },
  {
    number: 17,
    title: 'Bull City Holiday Remix: A Beautifully Weird, Winter Mashup',
    artist: 'Tasha Thomas',
    handle: '@tastho',
    address: 'American Tobacco Campus, Bay 8',
    description: 'Tasha spent 12 years as art director for Durham-founded Sugar Hill Records and now works as a scenic artist for film and TV. Here she remixes holiday classics with a Bull City twist: every star in this forest nods to Durham, and some of those carolers might look familiar.',
  },
  {
    number: 18,
    title: 'All I Want for Christmas Is Everything',
    artist: 'Shelby Temples',
    handle: '@hewillnevergohungry',
    address: '117 E Main St.',
    description: "Shelby's window is a love letter to the impossible magic of childhood Christmas, when a mountain of presents felt like everything you could ever need. Growing up teaches us that what we want most can't always be unwrapped, a thought both joyful and heartbreaking.",
  },
];

const instagramUrl = (handle) => `https://www.instagram.com/${handle.slice(1)}/`;
const directionsUrl = (address) => `https://maps.google.com/?q=${encodeURIComponent(`${address}, Durham, NC`)}`;

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="windows__icon-dot" />
    </svg>
  );
}

export default function Windows() {
  return (
    <div className="windows windows--current">
      <section className="windows__hero windows__hero--current">
        <div className="windows__hero-text">
          <Text as="p" variant="eyebrow" className="windows__eyebrow">Weird × Holiday Season</Text>
          <Text as="h1" variant="h1">Weird<br />Windows</Text>
          <Text as="p" variant="script" className="windows__hero-sub">20 Artists &nbsp;·&nbsp; 18 Downtown Locations &nbsp;·&nbsp; Durham, NC &nbsp;·&nbsp; 2026</Text>
        </div>
      </section>

      <section className="windows__meta">
        <div className="windows__meta-inner">
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Partner</Text>
            <Text as="span" variant="body" className="windows__meta-value">Downtown Durham Inc</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Format</Text>
            <Text as="span" variant="body" className="windows__meta-value">Holiday Window Displays</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Artists</Text>
            <Text as="span" variant="body" className="windows__meta-value">20 Local Artists</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Locations</Text>
            <Text as="span" variant="body" className="windows__meta-value">18 Downtown Stops</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Date</Text>
            <Text as="span" variant="body" className="windows__meta-value">Holiday Season 2026</Text>
          </div>
        </div>
      </section>

      <section className="windows__statement">
        <div className="windows__statement-inner">
          <Text as="p" variant="bodyLg" className="windows__statement-text">
            Our Weird spin on the classic department-store holiday window. Twenty artists transformed 18 downtown Durham storefronts into playful, surprising displays made for anyone passing by.
          </Text>
        </div>
      </section>

      {windows.map((window, index) => (
        <section key={`${window.title}-${window.artist}`} className={`windows__window windows__window--current ${index % 2 === 1 ? 'windows__window--alt windows__window--reverse' : ''}`}>
          <div className="windows__window-inner">
            <div className="windows__window-layout">
              <div className="windows__window-index" aria-label={`Window ${window.number}`}>
                <Text as="span" variant="label" className="windows__window-index-label">Window</Text>
                <Text as="span" variant="displaySm" className="windows__window-index-number">{String(window.number).padStart(2, '0')}</Text>
              </div>

              <div className="windows__window-main">
                <Text as="h2" variant="h2" className="windows__window-name">{window.title}</Text>
                <Text as="p" variant="label" className="windows__window-artist">by {window.artist}</Text>
                <div className="windows__window-actions">
                  <Text as="a" className="windows__window-link" href={directionsUrl(window.address)} target="_blank" rel="noopener noreferrer" variant="bodySm" aria-label={`Get directions to ${window.address}`}>
                    <span className="windows__window-link-icon"><MapPinIcon /></span>
                    <span className="windows__window-link-copy"><span className="windows__window-link-label">Get directions</span><span className="windows__window-link-value">{window.address}</span></span>
                    <span className="windows__window-link-arrow" aria-hidden="true">↗</span>
                  </Text>
                  <Text as="a" className="windows__window-link" href={instagramUrl(window.handle)} target="_blank" rel="noopener noreferrer" variant="bodySm" aria-label={`View ${window.artist} on Instagram`}>
                    <span className="windows__window-link-icon"><InstagramIcon /></span>
                    <span className="windows__window-link-copy"><span className="windows__window-link-label">Artist on Instagram</span><span className="windows__window-link-value">{window.handle}</span></span>
                    <span className="windows__window-link-arrow" aria-hidden="true">↗</span>
                  </Text>
                </div>
              </div>

              <div className="windows__window-copy">
                <Text as="span" variant="label" className="windows__window-copy-label">About the window</Text>
                <Text as="p" variant="bodyLg">{window.description}</Text>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="windows__credits">
        <div className="windows__credits-inner">
          <Text as="p" variant="label" className="windows__credits-collab">A collaboration between</Text>
          <Text as="p" variant="h1" className="windows__credits-names">Weird &amp; Downtown Durham</Text>
          <div className="windows__credits-meta">
            <Text as="span" variant="bodySm">20 Artists</Text>
            <Text as="span" variant="bodySm">·</Text>
            <Text as="span" variant="bodySm">18 Downtown Locations</Text>
            <Text as="span" variant="bodySm">·</Text>
            <Text as="span" variant="bodySm">2026</Text>
          </div>
        </div>
      </section>
    </div>
  );
}
