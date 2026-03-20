import './FloatingButton.css';

export default function FloatingButton() {
  return (
    <a
      href="https://weirdprojects.art"
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      aria-label="Check out our non-profit: Weird Projects"
    >
      <img src="/logo-sticker.png" alt="" className="fab-logo" aria-hidden="true" />
      <span className="fab-tooltip">Our non-profit ↗</span>
    </a>
  );
}
