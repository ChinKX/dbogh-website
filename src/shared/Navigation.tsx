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

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const handler = () => { if (mql.matches) setMenuOpen(false); };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

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
        className={`${styles.iconButton} ${styles.menuButton}`}
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
                className={styles.iconButton}
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
