'use client';

import { motion } from 'framer-motion';
import { Globe, Gamepad2 } from 'lucide-react';
import { Text } from '@/platform/components/Text';
import { Pill } from '@/platform/components/Pill';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { personal } from '@/data/about';
import styles from './Personal.module.css';

export function Personal() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="muted">PERSONAL</Text>
      </motion.div>

      <div className={styles.grid}>
        <motion.div
          className={styles.card}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.cardHeader}>
            <Globe size={18} />
            <h4 className={styles.cardTitle}>Languages</h4>
          </div>
          <div className={styles.pills}>
            {personal.languages.map((lang) => (
              <Pill key={lang}>{lang}</Pill>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.cardHeader}>
            <Gamepad2 size={18} />
            <h4 className={styles.cardTitle}>Interests</h4>
          </div>
          <div className={styles.pills}>
            {personal.interests.map((interest) => (
              <Pill key={interest}>{interest}</Pill>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
