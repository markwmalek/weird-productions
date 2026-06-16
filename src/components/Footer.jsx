import Text from './Typography';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Text as="span" variant="bodySm" className="footer-left">xo, Team Weird</Text>
        <Text as="span" variant="bodySm" className="footer-right">Weird Art Projects is a registered 501(c)(3) public charity. 2026. All Rights Reserved.</Text>
      </div>
    </footer>
  );
}
