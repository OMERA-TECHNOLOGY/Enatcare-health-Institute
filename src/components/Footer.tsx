import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const departments = [
    { name: 'Cardiology', to: '/departments/cardiology' },
    { name: 'Pediatrics', to: '/departments/pediatrics' },
    { name: 'Orthopedics', to: '/departments/orthopedics' },
    { name: 'Neurology', to: '/departments/neurology' },
    { name: 'Emergency', to: '/departments/emergency' },
  ];

  const quickLinks = [
    { name: 'About Us', to: '/about' },
    { name: 'Find a Doctor', to: '/doctors' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' },
    { name: 'Careers', to: '/careers' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">
                  K
                </span>
              </div>
              <h3 className="font-playfair text-lg font-bold">EnatCare</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Excellence in Healthcare, Compassion in Healing. 20+ years of
              medical innovation and patient care.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-space font-semibold text-foreground mb-4">
              Departments
            </h4>
            <ul className="space-y-2">
              {departments.map((dept) => (
                <li key={dept.to}>
                  <Link
                    to={dept.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-space font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>123 Medical Center Drive, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@kereyumedical.com"
                  className="hover:text-primary transition-colors"
                >
                  info@EnatCare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} EnatCare. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                JCI Accredited
              </span>
              <span className="text-xs bg-accent/10 text-accent-foreground px-3 py-1 rounded-full">
                ISO Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
