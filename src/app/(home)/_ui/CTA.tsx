'use client';

import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { Button } from '@/platform/components/Button';
import { Text } from '@/platform/components/Text';
import { fadeUp, scaleUp, staggerContainer } from '@/platform/lib/motion';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="inverseMuted" className={styles.label}>
          LET&apos;S BUILD SOMETHING
        </Text>
      </motion.div>

      <motion.h2
        className={styles.heading}
        variants={scaleUp}
        transition={{ duration: 0.7 }}
      >
        Got an idea?{'\n'}Let&apos;s make it real.
      </motion.h2>

      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="bodyLarge" className={styles.subtitle}>
          I&apos;m always open to interesting projects, collaborations, and conversations
          about technology that pushes boundaries.
        </Text>
      </motion.div>

      <motion.div
        className={styles.buttons}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="surface"
          className={styles.primaryButton}
          icon={<Mail size={18} />}
        >
          Say hello
        </Button>
        <Button
          variant="ghost"
          className={styles.secondaryButton}
          icon={<FileText size={18} />}
        >
          View resume
        </Button>
      </motion.div>
    </motion.section>
  );
}
