import type { Metadata } from 'next';
import { Text } from '@/platform/components/Text';
import { Education } from './_ui/Education';
import { Achievements } from './_ui/Achievements';
import { SkillsDetail } from './_ui/SkillsDetail';
import { Personal } from './_ui/Personal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About — DBOGH',
  description: 'Education, achievements, skills, and background of Chin Kai Xiang.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Text variant="mono" color="muted">ABOUT</Text>
        <Text variant="heading" as="h1">A bit more about me.</Text>
        <Text variant="bodyLarge" color="secondary" className={styles.intro}>
          Hi, I&apos;m Kai — short for Chin Kai Xiang. Here&apos;s the longer version of how I got here, what I&apos;ve learned, and what I&apos;m into outside of code.
        </Text>
      </header>
      <Education />
      <Achievements />
      <SkillsDetail />
      <Personal />
    </main>
  );
}
