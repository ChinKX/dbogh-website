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
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Text variant="mono" color="muted">ABOUT</Text>
        <Text variant="heading">A bit more about me.</Text>
      </header>
      <Education />
      <Achievements />
      <SkillsDetail />
      <Personal />
    </main>
  );
}
