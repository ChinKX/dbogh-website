'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from '@/shared/Navigation.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        GBOGH
      </a>

      {/* Desktop nav */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile overlay + drawer — only rendered when open */}
      {menuOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
          />
          <nav className={styles.mobileNav}>
            <div className={styles.mobileNavHeader}>
              <button
                className={styles.closeButton}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
