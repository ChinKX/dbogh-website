'use client';

import styles from '@/shared/Navigation.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        DBOGH
      </a>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
