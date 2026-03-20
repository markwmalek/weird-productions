import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a
        href="https://weirdprojects.art"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-nonprofit"
      >
        <img src="/logo-sticker.png" alt="Weird Projects" className="footer-nonprofit-logo" />
        <span className="footer-nonprofit-text">
          Also check out our non-profit arm — <strong>Weird Projects</strong> ↗
        </span>
      </a>
      <div className="footer-inner">
        <span className="footer-left">xo, Team Weird</span>
        <span className="footer-right">Weird Productions / 209 Smith Avenue 2341, Shallotte USA</span>
      </div>
    </footer>
  );
}
