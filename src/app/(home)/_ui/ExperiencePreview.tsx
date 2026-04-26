'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Text } from '@/platform/components/Text';
import { fadeUp, staggerContainer } from '@/platform/lib/motion';
import { withBasePath } from '@/platform/lib/path';
import { experiencePreview, experienceTaglines } from '@/data/experience';
import styles from './ExperiencePreview.module.css';

export function ExperiencePreview() {
  return (
    <motion.section
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
        <Text variant="mono" color="muted">
          WHERE I&apos;VE WORKED
        </Text>
      </motion.div>

      <motion.div
        className={styles.cards}
        variants={staggerContainer}
      >
        {experiencePreview.map((role) => (
          <motion.div
            key={role.company}
            className={`${styles.card} ${styles[role.variant]}`}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.period}>{role.period}</span>
            <h3 className={styles.company}>{role.company}</h3>
            <span className={styles.title}>{role.title}</span>
            <span className={styles.tagline}>
              {experienceTaglines[role.company]}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href={withBasePath("/experience")}
        className={styles.link}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        View full journey <ArrowRight size={16} />
      </motion.a>
    </motion.section>
  );
}
