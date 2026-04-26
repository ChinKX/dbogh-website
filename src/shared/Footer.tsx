import { Mail } from 'lucide-react';
import styles from '@/shared/Footer.module.css';

const socialLinks = [
  { icon: Mail, href: 'mailto:kxiang168@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        &copy; 2026 DBOGH. Dream big or go home.
      </span>
      <div className={styles.socials}>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} className={styles.socialLink} aria-label={label}>
            <Icon size={18} aria-hidden />
          </a>
        ))}
      </div>
    </footer>
  );
}
