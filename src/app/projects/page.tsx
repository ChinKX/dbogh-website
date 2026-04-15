import type { Metadata } from 'next';
import { Text } from '@/platform/components/Text';
import { ProjectGrid } from './_ui/ProjectGrid';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects — DBOGH',
  description: 'Side projects and personal builds by Chin Kai Xiang.',
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Text variant="mono" color="muted">PROJECTS</Text>
        <Text variant="heading">What I&apos;ve built.</Text>
      </header>
      <ProjectGrid />
    </main>
  );
}
