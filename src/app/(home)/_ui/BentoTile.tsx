import type { LucideIcon } from 'lucide-react';
import { Icon } from '@/platform/components/Icon';
import { Text } from '@/platform/components/Text';
import styles from './BentoTile.module.css';

interface BentoTileProps {
  variant: 'dark' | 'light';
  icon: LucideIcon;
  label: string;
  heading: string;
  description: string;
}

export function BentoTile({ variant, icon, label, heading, description }: BentoTileProps) {
  return (
    <div className={`${styles.tile} ${styles[variant]}`}>
      <div className={styles.labelRow}>
        <Icon icon={icon} size={18} />
        <Text variant="mono">{label}</Text>
      </div>
      <Text variant="subheading" className={styles.heading}>{heading}</Text>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
