import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    belibeli: [
      { name: 'About BeliBeli', href: '/about' },
      { name: 'Career', href: '/career' },
      { name: 'Mitra Blog', href: '/mitra-blog' },
      { name: 'B2B Digital', href: '/b2b' },
    ],
    buy: [
      { name: 'Bill & Top Up', href: '/bill' },
      { name: 'BeliBeli COD', href: '/cod' },
      { name: 'Mitra Blog', href: '/mitra-blog' },
      { name: 'Promo', href: '/promo' },
    ],
    sell: [
      { name: 'Seller Education Center', href: '/seller-education' },
      { name: 'Brand Index', href: '/brand-index' },
      { name: 'Register Official Store', href: '/register-store' },
    ],
    help: [
      { name: 'BeliBeli Care', href: '/care' },
      { name: 'Term and Condition', href: '/terms' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Mitra', href: '/mitra' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="mt-auto">
      {/* Quote Section */}
      <div className="py-16 bg-gradient-hero border-t border-glass-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold italic text-foreground/90">
            "Let's Shop Beyond Boundaries"
          </h2>
        </div>
      </div>

      {/* Main Footer */}
      <div className="glass border-t border-glass-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <h3 className="text-2xl font-display font-bold">
                  <span className="text-gradient">Beli</span>
                  <span className="text-foreground">Beli</span>
                  <span className="text-muted-foreground">.com</span>
                </h3>
              </Link>
              <p className="text-muted-foreground text-sm mb-6">
                "Let's Shop Beyond Boundaries"
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 glass-card flex items-center justify-center rounded-lg hover:bg-primary hover:text-primary-foreground transition-all glow-hover"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* BeliBeli Links */}
            <div>
              <h4 className="font-semibold mb-4">BeliBeli</h4>
              <ul className="space-y-3">
                {footerLinks.belibeli.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buy Links */}
            <div>
              <h4 className="font-semibold mb-4">Buy</h4>
              <ul className="space-y-3">
                {footerLinks.buy.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sell Links */}
            <div>
              <h4 className="font-semibold mb-4">Sell</h4>
              <ul className="space-y-3">
                {footerLinks.sell.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-semibold mb-4">Guide and Help</h4>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-glass-border">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-muted-foreground text-sm">
              © 2001 - 2025, BeliBeli.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
