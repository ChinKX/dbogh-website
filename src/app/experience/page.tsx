import type { Metadata } from 'next';
import { Text } from '@/platform/components/Text';
import { ExperienceTimeline } from './_ui/ExperienceTimeline';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Experience — DBOGH',
  description: 'Professional experience and work history of Chin Kai Xiang.',
};

export default function ExperiencePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Text variant="mono" color="muted">EXPERIENCE</Text>
        <Text variant="heading">Where I&apos;ve worked.</Text>
      </header>
      <ExperienceTimeline />
    </main>
  );
}
