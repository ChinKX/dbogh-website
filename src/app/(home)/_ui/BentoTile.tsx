'use client';

import type { LucideIcon } from 'lucide-react';
import { Icon } from '@/platform/components/Icon';
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
        <span className={styles.label}>{label}</span>
      </div>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
